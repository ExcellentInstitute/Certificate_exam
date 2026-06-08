// --- Anti-Cheat System ---
const adminPassword = "admin";
let isExamPaused = false;

// Trigger full screen on start
function startExam() {
    document.documentElement.requestFullscreen().catch(err => {
        alert("Full screen is required to start the exam.");
    });
}

// Detect exiting full screen
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && !isExamPaused) {
        lockExam("You exited full screen.");
    }
});

// Detect switching tabs or minimizing (Catches Alt+Tab)
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
    
    // Send alert to admin dashboard (via Apps Script fetch)
    logCheatingAttempt(studentData.id, reason);
}

function unlockExam() {
    const pass = document.getElementById("admin-unlock-pass").value;
    if (pass === adminPassword) {
        document.documentElement.requestFullscreen();
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("exam-content").style.display = "block";
        isExamPaused = false;
        document.getElementById("admin-unlock-pass").value = "";
    } else {
        alert("Incorrect Admin Password.");
    }
}

// --- Typing Evaluation System ---
function evaluateTyping(originalText, typedText, minutesTaken) {
    const originalWords = originalText.trim().split(/\s+/);
    const typedWords = typedText.trim().split(/\s+/);
    
    let correctWords = 0;
    for (let i = 0; i < Math.min(originalWords.length, typedWords.length); i++) {
        if (originalWords[i] === typedWords[i]) correctWords++;
    }

    const accuracy = (correctWords / originalWords.length) * 100;
    const wpm = (typedText.length / 5) / minutesTaken;
    
    // Calculate marks out of 50 based on thresholds (Customize as needed)
    let marks = 0;
    if (wpm >= 30 && accuracy >= 90) marks = 50;
    else if (wpm >= 20 && accuracy >= 80) marks = 40;
    else if (wpm >= 15 && accuracy >= 70) marks = 30;
    else if (wpm > 0) marks = 15; // Passing marks for effort
    
    return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2), marks };
}
