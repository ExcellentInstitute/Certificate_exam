const questionBank = {
    "CCA": {
        subjects: [
            "Computer Fundamentals", "Operating System Basics (Windows/Linux)", 
            "MS Word", "MS Excel", "Cyber Safety & Digital Awareness", 
            "Computer Components", "Computer Networking Basics"
        ],
        mcqs: [
            // Each subject will have questions here. 2 marks each.
            {
                subject: "Computer Fundamentals",
                question: "What is the brain of the computer?",
                options: ["Monitor", "CPU", "Keyboard", "Mouse"],
                correctAnswer: 1 // Index of correct option
            },
            {
                subject: "MS Word",
                question: "Which shortcut key is used to save a document?",
                options: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
                correctAnswer: 0
            }
            // ... Add remaining MCQs to hit the 350 marks (175 questions)
        ],
        typingTest: {
            text: "Computers are electronic devices that process data into meaningful information. Learning to type quickly and accurately is essential for any professional environment.",
            timeLimitMinutes: 5,
            maxMarks: 50
        }
    }
};
