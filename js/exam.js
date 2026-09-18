// ==========================================
// 1. ANTI-CHEAT & LOCKOUT SYSTEM
// ==========================================

let isExamPaused = false;

document.addEventListener("fullscreenchange", () => {
    // FIX: Only trigger anti-cheat if the exam is actively running and is timed.
    if (typeof examActive !== 'undefined' && examActive && typeof isTimed !== 'undefined' && isTimed) {
        if (!document.fullscreenElement && !isExamPaused) {
            lockExam("You exited full screen mode.");
        }
    }
});

window.addEventListener("blur", () => {
    // FIX: Only trigger anti-cheat if the exam is actively running and is timed.
    if (typeof examActive !== 'undefined' && examActive && typeof isTimed !== 'undefined' && isTimed) {
        if (!isExamPaused) {
            lockExam("You switched tabs or minimized the window.");
        }
    }
});

function lockExam(reason) {
    isExamPaused = true;
    document.getElementById("exam-content").style.display = "none";
    document.getElementById("lock-screen").style.display = "flex";
    document.getElementById("lock-reason").innerText = reason;
    
    // Alert the Admin Dashboard in Real-Time via Firebase
    if (typeof studentData !== 'undefined' && studentData !== null) {
        if (typeof firebase !== 'undefined') {
            firebase.database().ref('exam_live/' + studentData.id).update({ 
                status: 'Paused: ' + reason 
            }).catch(e => console.warn(e));
        }
    }
}

function unlockExam() {
    const pass = document.getElementById("admin-unlock-pass").value;
    const errorMsg = document.getElementById("lock-error");
    const unlockBtn = document.getElementById("unlock-btn");
    
    if (!pass) return;

    unlockBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verifying...';
    unlockBtn.disabled = true;
    if (errorMsg) errorMsg.style.display = "none";

    // SECURE FIX: Authenticate Admin via Firebase, NO HARDCODED PASSWORD
    firebase.auth().signInWithEmailAndPassword('admin@ei.com', pass)
    .then(() => {
        // Successfully authenticated as Admin, unlock the exam
        document.documentElement.requestFullscreen().then(() => {
            document.getElementById("lock-screen").style.display = "none";
            document.getElementById("exam-content").style.display = "block";
            isExamPaused = false;
            document.getElementById("admin-unlock-pass").value = "";
            
            // Restore student status back to Active on the Admin Dashboard
            if (typeof studentData !== 'undefined' && studentData !== null) {
                firebase.database().ref('exam_live/' + studentData.id).update({ 
                    status: 'Active' 
                }).catch(e => console.warn(e));
            }
            
            unlockBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i> Resume Exam';
            unlockBtn.disabled = false;
        }).catch(err => {
            alert("Browser blocked full screen. Please click Resume again.");
            unlockBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i> Resume Exam';
            unlockBtn.disabled = false;
        });
    })
    .catch((error) => {
        // Invalid Admin password
        if (errorMsg) {
            errorMsg.innerHTML = '<i class="fa-solid fa-xmark"></i> Incorrect Admin Password';
            errorMsg.style.display = "block";
        } else {
            alert("Incorrect Admin Password.");
        }
        unlockBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i> Resume Exam';
        unlockBtn.disabled = false;
    });
}

// ==========================================
// 2. LIVE TYPING TRACKER
// ==========================================

let typingTotalTimeMs = 0;
let typingInterval = null;
let typingLastStart = null;

function initTypingTracker() {
    const typingArea = document.getElementById('typing-area');
    
    typingArea.addEventListener('focus', () => {
        clearInterval(typingInterval);
        typingLastStart = Date.now();
        document.getElementById('live-time').innerText = "Time: " + formatTime(typingTotalTimeMs) + " (Typing...)";
        document.getElementById('live-time').style.color = "#28a745"; 
        
        typingInterval = setInterval(() => {
            let currentMs = typingTotalTimeMs + (Date.now() - typingLastStart);
            document.getElementById('live-time').innerText = "Time: " + formatTime(currentMs) + " (Typing...)";
            updateLiveStats(currentMs);
        }, 1000);
    });

    typingArea.addEventListener('blur', () => {
        if (typingLastStart) {
            typingTotalTimeMs += (Date.now() - typingLastStart);
            typingLastStart = null;
        }
        clearInterval(typingInterval);
        document.getElementById('live-time').innerText = "Time: " + formatTime(typingTotalTimeMs) + " (Paused)";
        document.getElementById('live-time').style.color = "#dc2626"; 
    });

    typingArea.addEventListener('input', () => {
        let currentMs = typingTotalTimeMs;
        if (typingLastStart) currentMs += (Date.now() - typingLastStart);
        updateLiveStats(currentMs);
    });
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateLiveStats(currentMs) {
    const originalText = document.getElementById('typing-source').innerText.trim();
    const typedText = document.getElementById('typing-area').value.trim();
    let minutesTaken = currentMs / 60000;
    const originalWords = originalText.split(/\s+/);
    const typedWords = typedText.split(/\s+/);
    let correctWords = 0;
    for (let i = 0; i < Math.min(originalWords.length, typedWords.length); i++) {
        if (originalWords[i] === typedWords[i]) correctWords++;
    }
    let accuracy = 0;
    if (typedWords.length > 0 && typedText !== "") {
        accuracy = (correctWords / originalWords.length) * 100;
        if (accuracy > 100) accuracy = 100;
    }
    let wpm = 0;
    if (typedText.length > 0 && minutesTaken > 0) {
        wpm = (typedText.length / 5) / minutesTaken;
    }
    document.getElementById('live-accuracy').innerText = `Accuracy: ${accuracy.toFixed(1)}%`;
    document.getElementById('live-wpm').innerText = `WPM: ${wpm.toFixed(1)}`;
}

// ==========================================
// 3. EXAM EVALUATION & SUBMISSION (FIREBASE)
// ==========================================

function evaluateTyping() {
    const originalText = document.getElementById('typing-source').innerText.trim();
    const typedText = document.getElementById('typing-area').value.trim();
    
    let finalTimeMs = typingTotalTimeMs;
    if (typingLastStart) finalTimeMs += (Date.now() - typingLastStart);
    let minutesTaken = finalTimeMs / 60000;
    if (minutesTaken < 0.1) minutesTaken = 0.1;

    const originalWords = originalText.split(/\s+/);
    const typedWords = typedText.split(/\s+/);
    
    let correctWords = 0;
    for (let i = 0; i < Math.min(originalWords.length, typedWords.length); i++) {
        if (originalWords[i] === typedWords[i]) correctWords++;
    }

    let accuracy = 0;
    if (typedWords.length > 0 && typedText !== "") {
        accuracy = (correctWords / originalWords.length) * 100;
    }
    
    let wpm = 0;
    if (typedText.length > 0) {
        wpm = (typedText.length / 5) / minutesTaken;
    }
    
    let marks = 0;
    if (wpm >= 30 && accuracy >= 90) marks = 50;
    else if (wpm >= 20 && accuracy >= 80) marks = 40;
    else if (wpm >= 15 && accuracy >= 70) marks = 30;
    else if (wpm > 0 && accuracy > 40) marks = 15; 
    
    return { wpm: wpm.toFixed(1), accuracy: accuracy.toFixed(1), marks };
}

function calculateMCQ() {
    let mcqMarks = 0;
    let subjectMarks = {};
    const activeQuestions = window.activeExamPaper; 
    
    activeQuestions.forEach((q, index) => {
        if (!subjectMarks[q.subject]) {
            subjectMarks[q.subject] = { scored: 0, total: 2 };
        } else {
            subjectMarks[q.subject].total += 2;
        }

        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            const selectedAnswerIndex = parseInt(selectedOption.value);
            // Support both old 'q.ans' and new 'q.correctAnswer' structure
            const correctIndex = q.ans !== undefined ? q.ans : q.correctAnswer;
            
            if (selectedAnswerIndex === correctIndex) {
                mcqMarks += 2;
                subjectMarks[q.subject].scored += 2;
            }
        }
    });
    
    return { total: mcqMarks, subjects: subjectMarks };
}

function submitExam() {
    if (!confirm("Are you sure you want to submit your exam? You cannot undo this action.")) return;

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerText = "Evaluating and Submitting...";
    submitBtn.disabled = true;
    submitBtn.style.background = "#6c757d";

    const mcqData = calculateMCQ();
    const typingResults = evaluateTyping();
    const totalMarks = mcqData.total + typingResults.marks;

    let finalSubjects = mcqData.subjects;
    finalSubjects["Typing Speed & Accuracy"] = { scored: typingResults.marks, total: 50 };

    const savedData = localStorage.getItem('examStudent');
    let studentId = "Unknown", studentName = "Unknown", studentCourse = "Unknown";
    
    if (savedData) {
        const sData = JSON.parse(savedData);
        studentId = sData.id; studentName = sData.name; studentCourse = sData.course;
    }

    // Generate Result Object for Firebase
    const now = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const dateString = now.toLocaleString('en-IN', options).replace(/am/i, 'AM').replace(/pm/i, 'PM');

    const resultData = {
        id: studentId,
        name: studentName,
        course: studentCourse,
        marks: totalMarks,
        wpm: typingResults.wpm,
        accuracy: typingResults.accuracy,
        subjectDetails: JSON.stringify(finalSubjects),
        date: dateString
    };

    // Push to Firebase and process UI
    if (typeof firebase !== 'undefined') {
        const db = firebase.database();
        const resultKey = `${studentId}_${Date.now()}`;
        
        db.ref('exam_results/' + resultKey).set(resultData)
        .then(() => {
            // Update live status to "Finished" so admin knows they are done
            return db.ref('exam_live/' + studentId).update({ status: 'Finished' });
        })
        .then(() => {
            finishSubmissionUI(totalMarks, typingResults, mcqData);
        })
        .catch(err => {
            console.error("Submission Error:", err);
            alert("Failed to sync result to server. Generating local file anyway.");
            finishSubmissionUI(totalMarks, typingResults, mcqData);
        });
    } else {
        finishSubmissionUI(totalMarks, typingResults, mcqData);
    }
}

function finishSubmissionUI(totalMarks, typingResults, mcqData) {
    // 🚨 CRITICAL FIX: Turn off Exam Active flag!
    // This stops the blur and fullscreenchange listeners from locking the student out.
    examActive = false; 

    if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen().catch(err => console.log(err));
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen().catch(err => console.log(err));
        else if (document.msExitFullscreen) document.msExitFullscreen().catch(err => console.log(err));
    }

    document.getElementById('exam-interface').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    
    let correct = 0;
    let attempted = 0;
    
    let reportText = `EXCELLENT INSTITUTE - MOCK TEST RESULT\n`;
    reportText += `--------------------------------------\n`;
    reportText += `Candidate Name: ${studentData ? studentData.name : 'Student'}\n`;
    reportText += `Date: ${new Date().toLocaleDateString()}\n`;
    
    const subjEl = document.getElementById('exam-subject');
    const setEl = document.getElementById('test-set');
    const subjText = subjEl ? subjEl.options[subjEl.selectedIndex].text : "Computer Knowledge";
    const diffText = setEl ? setEl.options[setEl.selectedIndex].text : "Set 1";
    
    reportText += `Exam: ${subjText} - ${diffText}\n\n`;
    reportText += `QUESTION BREAKDOWN:\n`;
    
    let reviewHTML = "";

    // FIX: Dynamically loop based on the exact number of active questions
    for (let i = 0; i < currentQuestions.length; i++) { 
        let q = currentQuestions[i];
        if (!q) continue; 
        
        let userAnsText = userAnswers[i] !== null ? q.options[userAnswers[i]] : "Not Attempted";
        const correctIndex = q.ans !== undefined ? q.ans : q.correctAnswer;
        let correctAnsText = q.options[correctIndex]; 
        
        if (userAnswers[i] !== null && statuses[i] !== 3) {
            attempted++;
            if (userAnswers[i] === correctIndex) {
                correct++;
                reportText += `Q${i+1}: CORRECT\n`;
            } else {
                reportText += `Q${i+1}: INCORRECT (Picked: ${userAnsText} | Correct: ${correctAnsText})\n`;
            }
        } else {
            reportText += `Q${i+1}: NOT ATTEMPTED / UNANSWERED (Correct: ${correctAnsText})\n`;
        }

        reviewHTML += `<div class="review-item">`;
        reviewHTML += `<div class="review-q">Q${i+1}. ${q.q || q.question}</div>`;
        
        for(let j=0; j<4; j++) {
            let optClass = "review-opt";
            if(userAnswers[i] === j && userAnswers[i] !== correctIndex) optClass += " review-wrong"; 
            if(j === correctIndex) optClass += " review-correct"; 
            reviewHTML += `<div class="${optClass}">${String.fromCharCode(65+j)}. ${q.options[j]}</div>`;
        }
        
        if(q.exp || q.explanation) reviewHTML += `<div class="review-exp"><strong>Explanation:</strong> ${q.exp || q.explanation}</div>`;
        reviewHTML += `</div>`;
    }
    
    let wrong = attempted - correct;
    let score = totalMarks;

    document.getElementById('res-total').innerText = currentQuestions.length;
    document.getElementById('res-attempted').innerText = attempted;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-incorrect').innerText = wrong;
    document.getElementById('res-score').innerText = score.toFixed(2);

    document.getElementById('review-container').innerHTML = reviewHTML;

    reportText += `\nSUMMARY:\n`;
    reportText += `Attempted: ${attempted}/${currentQuestions.length}\n`;
    reportText += `Correct: ${correct}\n`;
    reportText += `Incorrect: ${wrong}\n`;
    reportText += `Final Score: ${score.toFixed(2)}\n`;

    downloadFile(reportText, studentData ? studentData.name : 'Student');
}

function downloadFile(content, name) {
    const dateStr = new Date().toISOString().split('T')[0]; 
    const fileName = `${name.replace(/\s+/g, '_')}_${dateStr}_Result.txt`;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
