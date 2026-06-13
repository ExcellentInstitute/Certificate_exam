// Replace with your actual Web App URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxFsBuyiWOdTMMGeOgTXhvSmAfUK_uMbdwVO945ejPvnsEOQtX9ZtMCh9RQtBWzHSVj/exec";
const adminPassword = "admin";

let isExamPaused = false;
let examStartTime = null;

window.onload = () => {
    examStartTime = new Date().getTime();
};

// ==========================================
// 1. ANTI-CHEAT SYSTEM
// ==========================================

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && !isExamPaused) {
        lockExam("You exited full screen mode.");
    }
});

window.addEventListener("blur", () => {
    if (!isExamPaused) {
        lockExam("You switched tabs or minimized the window.");
    }
});

function lockExam(reason) {
    isExamPaused = true;
    document.getElementById("exam-content").style.display = "none";
    document.getElementById("lock-screen").style.display = "flex";
    document.getElementById("lock-reason").innerText = reason;
    
    if (typeof studentData !== 'undefined' && studentData !== null) {
        fetch(WEB_APP_URL, {
            method: 'POST',
            redirect: 'follow',
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ action: 'log_cheat', id: studentData.id, reason: reason })
        }).catch(err => console.error("Failed to log cheat alert:", err));
    }
}

function unlockExam() {
    const pass = document.getElementById("admin-unlock-pass").value;
    if (pass === adminPassword) {
        document.documentElement.requestFullscreen().then(() => {
            document.getElementById("lock-screen").style.display = "none";
            document.getElementById("exam-content").style.display = "block";
            isExamPaused = false;
            document.getElementById("admin-unlock-pass").value = "";
        }).catch(err => alert("Browser blocked full screen. Please try again."));
    } else {
        alert("Incorrect Admin Password.");
    }
}

// ==========================================
// 2. EXAM EVALUATION & SUBMISSION
// ==========================================

function evaluateTyping() {
    const originalText = document.getElementById('typing-source').innerText.trim();
    const typedText = document.getElementById('typing-area').value.trim();
    
    const endTime = new Date().getTime();
    let minutesTaken = (endTime - examStartTime) / 60000;
    if (minutesTaken < 1) minutesTaken = 1; 

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
    const examData = questionBank["CCA"]; 
    
    examData.mcqs.forEach((q, index) => {
        // Initialize the subject in our tracker if it doesn't exist yet
        if (!subjectMarks[q.subject]) {
            subjectMarks[q.subject] = { scored: 0, total: 2 };
        } else {
            subjectMarks[q.subject].total += 2;
        }

        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            const selectedAnswerIndex = parseInt(selectedOption.value);
            if (selectedAnswerIndex === q.correctAnswer) {
                mcqMarks += 2;
                subjectMarks[q.subject].scored += 2;
            }
        }
    });
    
    return { total: mcqMarks, subjects: subjectMarks };
}

function submitExam() {
    if (!confirm("Are you sure you want to submit your exam? You cannot undo this action.")) {
        return;
    }

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerText = "Evaluating and Submitting...";
    submitBtn.disabled = true;
    submitBtn.style.background = "#6c757d";

    const mcqData = calculateMCQ();
    const typingResults = evaluateTyping();
    const totalMarks = mcqData.total + typingResults.marks;

    // Combine typing marks into the main subject breakdown
    let finalSubjects = mcqData.subjects;
    finalSubjects["Typing Speed & Accuracy"] = { scored: typingResults.marks, total: 50 };

    const savedData = localStorage.getItem('examStudent');
    let studentId = "Unknown", studentName = "Unknown", studentCourse = "Unknown";
    
    if (savedData) {
        const sData = JSON.parse(savedData);
        studentId = sData.id; studentName = sData.name; studentCourse = sData.course;
    }

    fetch(WEB_APP_URL, {
        method: 'POST',
        redirect: 'follow',
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ 
            action: 'submit_exam', 
            id: studentId,
            name: studentName,
            course: studentCourse,
            marks: totalMarks,
            wpm: typingResults.wpm,
            accuracy: typingResults.accuracy,
            subjectMarks: finalSubjects // Detailed breakdown sent to Google Sheets
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            localStorage.removeItem('examStudent');
            
            document.getElementById('exam-content').innerHTML = `
                <div style="text-align:center; padding: 50px; margin-top: 100px;">
                    <h1 style="color: #28a745;">Exam Submitted Successfully!</h1>
                    <p style="color: #666; font-size: 18px;">Total Marks: <strong>${totalMarks} / 400</strong></p>
                    <button onclick="window.location.href='index.html'" style="margin-top: 30px; padding: 10px 20px; background: #0056b3; color: white; border: none; border-radius: 5px; cursor: pointer;">Return to Home</button>
                </div>
            `;
            if (document.fullscreenElement) document.exitFullscreen().catch(e => {});
        } else {
            alert("Error submitting exam: " + data.error);
            submitBtn.innerText = "Submit Final Exam";
            submitBtn.disabled = false;
            submitBtn.style.background = "#28a745";
        }
    })
    .catch(err => {
        alert("Network error while submitting. Try again.");
        submitBtn.innerText = "Submit Final Exam";
        submitBtn.disabled = false;
        submitBtn.style.background = "#28a745";
    });
}
