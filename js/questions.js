const questionBank = {
    "CCA": { // Applicable for BCC, CCA, DCA, and PGDCA 3-month term exams
        subjects: [
            "Computer Fundamentals", "Operating System Basics (Windows/Linux)", 
            "MS Word", "MS Excel", "Cyber Safety & Digital Awareness", 
            "Computer Components", "Typing Theory", "Computer Networking Basics"
        ],
        mcqs: [
            // ==========================================
            // COMPUTER FUNDAMENTALS
            // ==========================================
            {
                subject: "Computer Fundamentals",
                question: "What is the primary function of the Control Unit (C.U.) inside the CPU?",
                options: [
                    "It acts as a storage box to keep photos and games safely.",
                    "It acts as the Manager, controlling everything and telling parts what to do step-by-step.",
                    "It translates English typed words into 0s and 1s.",
                    "It solves math problems like plus, minus, and multiply."
                ],
                correctAnswer: 1
            },
            {
                subject: "Computer Fundamentals",
                question: "Which type of computer measures constantly changing data (like temperature or pressure) and is used to predict the weather?",
                options: ["Digital Computer", "Hybrid Computer", "Mainframe Computer", "Analog Computer"],
                correctAnswer: 3
            },
            {
                subject: "Computer Fundamentals",
                question: "What does the term 'Volatile' mean when referring to RAM?",
                options: [
                    "It can only be read from, not written to.",
                    "It forgets EVERYTHING if the electricity goes off.",
                    "It acts as a permanent storage box for years.",
                    "It uses laser lights instead of magnets to read data."
                ],
                correctAnswer: 1
            },
            {
                subject: "Computer Fundamentals",
                question: "Which translator software reads an entire book of code and translates it all at once into machine code?",
                options: ["Assembler", "Interpreter", "Compiler", "Operating System"],
                correctAnswer: 2
            },
            {
                subject: "Computer Fundamentals",
                question: "How many Bytes make up a Kilobyte (KB)?",
                options: ["1,000 Bytes", "1,024 Bytes", "8 Bytes", "1,024 Megabytes"],
                correctAnswer: 1
            },

            // ==========================================
            // OPERATING SYSTEM BASICS
            // ==========================================
            {
                subject: "Operating System Basics (Windows/Linux)",
                question: "Which operating system is open-source, highly resistant to viruses, and renowned for its powerful Command Line Interface?",
                options: ["Microsoft Windows", "Android", "macOS", "Linux"],
                correctAnswer: 3
            },
            {
                subject: "Operating System Basics (Windows/Linux)",
                question: "What is the correct way to cleanly remove software from a Windows PC without leaving behind fragmented registry keys?",
                options: [
                    "Manually delete the program's folder from the desktop.",
                    "Drag the program icon into the Recycle Bin.",
                    "Use Control Panel > Programs and Features (or Settings > Apps) to uninstall.",
                    "Use the Task Manager to end the task permanently."
                ],
                correctAnswer: 2
            },
            {
                subject: "Operating System Basics (Windows/Linux)",
                question: "Why should you never use the Disk Defragmentation tool on a modern Solid State Drive (SSD)?",
                options: [
                    "Because SSDs use magnetic platters that will get scratched.",
                    "Because it degrades the lifespan of the SSD unnecessarily.",
                    "Because SSDs cannot hold operating system files.",
                    "Because it will delete your temporary files and system cache."
                ],
                correctAnswer: 1
            },
            {
                subject: "Operating System Basics (Windows/Linux)",
                question: "Which keyboard shortcut opens the Task Manager to monitor system performance?",
                options: ["Ctrl + Shift + N", "Windows Key + E", "Ctrl + Shift + Esc", "Alt + F4"],
                correctAnswer: 2
            },

            // ==========================================
            // MS WORD
            // ==========================================
            {
                subject: "MS Word",
                question: "What is the function of the 'Format Painter' in MS Word?",
                options: [
                    "It inserts a colorful SmartArt diagram into the document.",
                    "It perfectly splits your text into two newspaper-style columns.",
                    "It copies the design or handwriting style of text instantly to apply to new text.",
                    "It adds a faded watermark behind your text."
                ],
                correctAnswer: 2
            },
            {
                subject: "MS Word",
                question: "When you finish a chapter and want to start on a fresh page, what is the correct method?",
                options: [
                    "Press the 'Enter' key 20 times until a new page appears.",
                    "Go to the 'Insert' tab and click 'Page Break'.",
                    "Change the page orientation to Landscape.",
                    "Use the Spacebar continuously until the cursor drops down."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS Word",
                question: "If you insert a picture and it breaks all your paragraphs, how do you fix it so the text beautifully flows around the image?",
                options: [
                    "Click the picture, open 'Layout Options', and choose 'Square'.",
                    "Delete the text and type it again under the picture.",
                    "Use the 'Crop' tool to make the picture smaller.",
                    "Press the Tab key repeatedly to move the words away."
                ],
                correctAnswer: 0
            },

            // ==========================================
            // MS EXCEL
            // ==========================================
            {
                subject: "MS Excel",
                question: "What is the Golden Rule you must follow to 'wake up' Excel before doing any mathematical calculation?",
                options: [
                    "You must type the plus sign (+) first.",
                    "You must select the Currency format.",
                    "You must type the Equals sign (=) first.",
                    "You must click the 'Merge & Center' button."
                ],
                correctAnswer: 2
            },
            {
                subject: "MS Excel",
                question: "If you make a spelling mistake inside an Excel cell, which shortcut key allows you to jump inside the box to fix just the wrong letter?",
                options: ["F5", "F2", "Ctrl + Z", "Shift + F3"],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "Which Excel tool acts as an 'AI Typist', watching your pattern to automatically separate first names and last names into different columns?",
                options: ["AutoSum", "Conditional Formatting", "Text to Columns", "Flash Fill"],
                correctAnswer: 3
            },
            {
                subject: "MS Excel",
                question: "What does the 'Freeze Panes' feature do?",
                options: [
                    "It stops the computer from overheating when working on big lists.",
                    "It prevents other users from changing your passwords.",
                    "It keeps the top headings glued to the screen while you scroll down a massive list.",
                    "It locks the entire workbook so it cannot be deleted."
                ],
                correctAnswer: 2
            },
            {
                subject: "MS Excel",
                question: "How do you correctly force users to choose only 'Pass' or 'Fail' from a drop-down menu in a cell?",
                options: [
                    "Use Conditional Formatting > Highlight Cell Rules.",
                    "Go to the Data tab and use 'Data Validation' > List.",
                    "Click the green Autofill square and drag it down.",
                    "Use the Find and Replace menu."
                ],
                correctAnswer: 1
            },

            // ==========================================
            // COMPUTER COMPONENTS
            // ==========================================
            {
                subject: "Computer Components",
                question: "Which component is a dedicated expansion card equipped with its own VRAM and cooling fans, responsible for rendering 2D/3D graphics?",
                options: ["Platform Controller Hub (PCH)", "Power Supply Unit (PSU)", "Graphics Processing Unit (GPU)", "Solid State Drive (SSD)"],
                correctAnswer: 2
            },
            {
                subject: "Computer Components",
                question: "What is the function of the CMOS Battery on the motherboard?",
                options: [
                    "It converts high-voltage AC to low-voltage DC.",
                    "It powers the CPU when the main electricity fails.",
                    "It keeps the system clock running when the computer is unplugged.",
                    "It stores the operating system files permanently."
                ],
                correctAnswer: 2
            },

            // ==========================================
            // TYPING THEORY
            // ==========================================
            {
                subject: "Typing Theory",
                question: "What is the correct physical placement for your thumbs when typing on the Home Row?",
                options: [
                    "Both thumbs should hover over the Alt keys.",
                    "The left thumb rests on 'C' and the right thumb rests on 'M'.",
                    "Both thumbs should rest lightly on the Spacebar.",
                    "Thumbs are not used in professional touch typing."
                ],
                correctAnswer: 2
            },
            {
                subject: "Typing Theory",
                question: "According to the Golden Rule of the Shift key, how should you type a Capital 'K'?",
                options: [
                    "Press the Caps Lock key, press K, then press Caps Lock again.",
                    "Hold the Left Shift key with your left pinky, and press K with your right middle finger.",
                    "Hold the Right Shift key with your right pinky, and press K with your right index finger.",
                    "Press both Shift keys simultaneously while pressing K."
                ],
                correctAnswer: 1
            },
            {
                subject: "Typing Theory",
                question: "Which two letters on the keyboard are known as the 'Guide Keys' because they have a tiny physical bump to help you reset your position?",
                options: ["G and H", "F and J", "A and Semicolon (;)", "T and Y"],
                correctAnswer: 1
            },

            // ==========================================
            // CYBER SAFETY & NETWORKING
            // ==========================================
            {
                subject: "Cyber Safety & Digital Awareness",
                question: "What is 'Ransomware'?",
                options: [
                    "A program pretending to be a fun game but attacks your computer when opened.",
                    "A digital wall that blocks hackers from entering your computer.",
                    "A fake email tricking you into giving away your password.",
                    "A program that locks your files and asks for money to unlock them."
                ],
                correctAnswer: 3
            },
            {
                subject: "Computer Networking Basics",
                question: "Which type of network is the Internet classified as?",
                options: [
                    "LAN (Local Area Network)",
                    "MAN (Metropolitan Area Network)",
                    "WAN (Wide Area Network)",
                    "PAN (Personal Area Network)"
                ],
                correctAnswer: 2
            }
        ],

        // ==========================================
        // 50-MARK PARAGRAPH TYPING TEST
        // ==========================================
        typingTest: {
            text: "Touch typing is the ability to type on a keyboard without using your sense of sight to find the keys. Instead, you use muscle memory to know exactly where every key is located instantly. Your typing skill is measured in two ways: Words Per Minute and Accuracy. Always aim for 95% accuracy or higher. In the beginning, type slowly and correctly. Forcing speed early creates bad habits that are hard to break. Maintain proper core posture to avoid back pain. Sit up completely straight, plant both feet firmly flat on the floor, and keep your wrists completely straight and floating just above the keyboard. Do not rest your wrists on the desk while typing, as this restricts finger movement.",
            timeLimitMinutes: 5,
            maxMarks: 50
        }
    }
};
