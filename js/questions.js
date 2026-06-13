// ==========================================
// 1. QUESTION BATCHES
// ==========================================
// Add as many batches as you want. Each batch is enclosed in [ ] and separated by a comma.

const questionBatches = [

    // ==========================================
    // BATCH 1: Computer Fundamentals & OS
    // ==========================================
    [
        {
            subject: "Computer Fundamentals",
            question: "What is a computer often called because it takes information, works on it, and gives an answer?",
            options: [
                "A Data Processing Machine",
                "An Analog Tracker",
                "A Typewriter",
                "A Digital Abacus"
            ],
            correctAnswer: 0
        },
        {
            subject: "Computer Fundamentals",
            question: "In the data processing cycle, what is the raw information we give to the computer called?",
            options: [
                "Output",
                "Processing",
                "Data (Input)",
                "Software"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "Who is known as the Father of the Computer?",
            options: [
                "John von Neumann",
                "Blaise Pascal",
                "Charles Babbage",
                "Howard H. Aiken"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "Which type of computer measures things that are always changing, like temperature or speed?",
            options: [
                "Digital Computer",
                "Analog Computer",
                "Microcomputer",
                "Supercomputer"
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "Which computer is the biggest, fastest, and used strictly by scientists for deep space research?",
            options: [
                "Mainframe Computer",
                "Minicomputer",
                "Supercomputer",
                "Hybrid Computer"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "What does the A.L.U. (Arithmetic Logic Unit) do inside the CPU?",
            options: [
                "It stores files permanently.",
                "It prints ink onto paper.",
                "It acts as the manager telling other parts what to do.",
                "It solves all the math problems like plus, minus, and multiply."
            ],
            correctAnswer: 3
        },
        {
            subject: "Computer Fundamentals",
            question: "What does 'volatile' memory mean in the case of RAM?",
            options: [
                "It never forgets your data.",
                "It forgets EVERYTHING if the electricity goes off.",
                "It uses lasers to read shiny discs.",
                "It can only be read from, not written to."
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "How many Bits make up one single Byte?",
            options: [
                "4 Bits",
                "8 Bits",
                "1,024 Bits",
                "16 Bits"
            ],
            correctAnswer: 1
        },
        {
            subject: "Operating System Basics",
            question: "Which operating system is highly reliant on a Graphical User Interface (GUI) and requires a purchased license?",
            options: [
                "Linux",
                "Microsoft Windows",
                "Android",
                "Ubuntu"
            ],
            correctAnswer: 1
        },
        {
            subject: "Operating System Basics",
            question: "Which keyboard shortcut is used to completely select all text or files instantly?",
            options: [
                "Ctrl + C",
                "Ctrl + V",
                "Ctrl + A",
                "Ctrl + Z"
            ],
            correctAnswer: 2
        },
        {
            subject: "Operating System Basics",
            question: "What is the proper way to cleanly remove a program from a Windows PC?",
            options: [
                "Manually delete the program's folder.",
                "Drag the shortcut into the Recycle Bin.",
                "Go to Control Panel > Programs and Features and click 'Uninstall'.",
                "Use the Task Manager to end the task."
            ],
            correctAnswer: 2
        },
        {
            subject: "Operating System Basics",
            question: "Which tab in the Task Manager shows programs that launch automatically when you turn on the computer?",
            options: [
                "Performance Tab",
                "Processes Tab",
                "Startup Tab",
                "Network Tab"
            ],
            correctAnswer: 2
        }
    ],

    // ==========================================
    // BATCH 2: Computer Components & Typing Theory
    // ==========================================
    [
        {
            subject: "Computer Components",
            question: "What does a Power Supply Unit (PSU) do?",
            options: [
                "It converts high-voltage AC from the wall outlet into low-voltage DC.",
                "It renders images and video to the display.",
                "It connects the computer to a local area network.",
                "It cools the CPU down."
            ],
            correctAnswer: 0
        },
        {
            subject: "Computer Components",
            question: "What is the main difference between an HDD and an SSD?",
            options: [
                "HDDs use flash memory, SSDs use magnets.",
                "HDDs are faster than SSDs.",
                "HDDs use a spinning magnetic platter, while SSDs use flash memory and have no moving parts.",
                "There is no difference between them."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Components",
            question: "Which motherboard component keeps the system clock running when the computer is unplugged?",
            options: [
                "CPU Socket",
                "PCH Chipset",
                "RAM Slots",
                "CMOS Battery"
            ],
            correctAnswer: 3
        },
        {
            subject: "Typing Theory",
            question: "What is Touch Typing?",
            options: [
                "Typing using only the mouse.",
                "The ability to type on a keyboard without using your sense of sight to find the keys.",
                "Typing very fast with two index fingers.",
                "Looking directly at the keyboard while typing."
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "When touch typing, what is the proper posture for your wrists?",
            options: [
                "Rest them heavily on the desk.",
                "Bend them at a 90-degree angle.",
                "Keep them completely straight and floating just above the keyboard.",
                "Lean them on the spacebar."
            ],
            correctAnswer: 2
        },
        {
            subject: "Typing Theory",
            question: "How many keys does a standard desktop computer keyboard have?",
            options: [
                "100 keys",
                "101 keys",
                "104 keys",
                "108 keys"
            ],
            correctAnswer: 2
        },
        {
            subject: "Typing Theory",
            question: "Which two letters have a tiny physical bump and act as the 'Guide Keys'?",
            options: [
                "G and H",
                "A and S",
                "T and Y",
                "F and J"
            ],
            correctAnswer: 3
        },
        {
            subject: "Typing Theory",
            question: "What is the Golden Rule of the Shift key to type a single capital letter?",
            options: [
                "Press the Caps Lock key first.",
                "Hold the Shift key down using the pinky finger of the hand opposite to the letter you are typing.",
                "Hold both Shift keys down at the same time.",
                "Use your thumb to hold the Shift key."
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "Which shortcut key combination minimizes all open windows to show the Desktop instantly?",
            options: [
                "Windows Key + D",
                "Alt + F4",
                "Ctrl + Tab",
                "Windows Key + L"
            ],
            correctAnswer: 0
        },
        {
            subject: "Typing Theory",
            question: "Which shortcut key is used to instantly copy highlighted text?",
            options: [
                "Ctrl + X",
                "Ctrl + V",
                "Ctrl + C",
                "Ctrl + S"
            ],
            correctAnswer: 2
        }
    ],

    // ==========================================
    // BATCH 3: MS Word & MS Excel
    // ==========================================
    [
        {
            subject: "MS Word",
            question: "What is the 'Ribbon' in MS Word and Excel?",
            options: [
                "The cable that connects the printer.",
                "The thick bar at the top of the screen divided into different tabs like Home and Insert.",
                "The tool used to draw shapes.",
                "The scrolling bar on the right side."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "How do you duplicate the design or handwriting style of a text to another text instantly?",
            options: [
                "Use the 'Copy' and 'Paste' tools.",
                "Use the 'SmartArt' tool.",
                "Use the Magic 'Format Painter' brush icon.",
                "Use the 'Watermark' tool."
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "If you want your text to read side-by-side exactly like a magazine or newspaper, which option should you use?",
            options: [
                "Page Breaks",
                "Columns",
                "Tables",
                "Text Boxes"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "What happens when you type text into the 'Header' in MS Word?",
            options: [
                "It automatically copies it to the top of every single page.",
                "It makes the text bold and underlined.",
                "It moves the text to the very bottom of the page.",
                "It creates a faded background image."
            ],
            correctAnswer: 0
        },
        {
            subject: "MS Excel",
            question: "How are Columns and Rows named in an MS Excel grid?",
            options: [
                "Columns are numbers (1, 2, 3) and Rows are letters (A, B, C).",
                "Columns are letters (A, B, C) and Rows are numbers (1, 2, 3).",
                "Both are named using numbers.",
                "Both are named using letters."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "In MS Excel, what must you type first to tell the computer you are about to do a math calculation?",
            options: [
                "The Plus sign (+)",
                "The word SUM",
                "The Equals sign (=)",
                "The Bracket symbol ([)"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Excel",
            question: "What does the Autofill 'Green Square' trick do in MS Excel?",
            options: [
                "It deletes everything inside the box.",
                "It changes the color of your text to green.",
                "It opens a new blank workbook.",
                "It magically guesses the pattern and types the rest of the list for you."
            ],
            correctAnswer: 3
        },
        {
            subject: "MS Excel",
            question: "If you want to lock the top headings of a massive list so they don't disappear when you scroll down, what should you click?",
            options: [
                "Merge & Center",
                "Freeze Panes > Freeze Top Row",
                "Conditional Formatting",
                "Data Validation"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "Which Excel feature automatically colors a student's box red if their score is less than 30?",
            options: [
                "Format Painter",
                "Conditional Formatting",
                "Cell Styles",
                "Flash Fill"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "Which Excel shortcut acts as an AI Typist to magically separate combined words (like first and last names)?",
            options: [
                "Ctrl + C",
                "Ctrl + Z",
                "Flash Fill (Ctrl + E)",
                "AutoSum (Alt + =)"
            ],
            correctAnswer: 2
        }
    ],

    // ==========================================
    // BATCH 4: MS PowerPoint & Cyber Security
    // ==========================================
    [
        {
            subject: "MS PowerPoint",
            question: "Unlike MS Word, how do you add text to a blank area on a PowerPoint slide?",
            options: [
                "Just click anywhere and start typing.",
                "Press the Enter key until you reach the area.",
                "You must insert a 'Text Box'.",
                "Use the Format Painter."
            ],
            correctAnswer: 2
        },
        {
            subject: "MS PowerPoint",
            question: "What does the 'Design Ideas' button do in modern PowerPoint?",
            options: [
                "It automatically checks your spelling.",
                "It uses AI to automatically generate beautiful, professional layouts for you to choose from.",
                "It inserts a blank table.",
                "It saves your presentation to the cloud."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "How do you chop off unwanted messy backgrounds from a picture?",
            options: [
                "Go to the 'Picture Format' tab and click 'Crop'.",
                "Use the 'Group' tool.",
                "Use the 'Align Middle' tool.",
                "Change the slide Theme."
            ],
            correctAnswer: 0
        },
        {
            subject: "MS PowerPoint",
            question: "What is a Slide Transition?",
            options: [
                "A tool to align pictures perfectly straight.",
                "The cool animation that happens exactly when you move from one slide to the next.",
                "An animation that moves an object inside a single slide.",
                "A tool to print multiple slides on one page."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "While presenting a PowerPoint, how can you turn your mouse arrow into a glowing red laser dot?",
            options: [
                "Press the 'L' key on your keyboard.",
                "Hold down the 'Ctrl' key and left-click your mouse.",
                "Right-click and select 'Laser Pointer'.",
                "Double click the screen."
            ],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "What does 'Phishing' mean in cyber security?",
            options: [
                "Deleting viruses from a computer.",
                "Upgrading your antivirus software.",
                "When a hacker throws a fake bait, like an SMS or Email, to trick you into giving away passwords.",
                "Scrambling your messages into a secret code."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "What is a Trojan Horse?",
            options: [
                "A digital wall that blocks bad hackers.",
                "A strong password generator.",
                "A virus hiding in disguise, like an app that looks like a fun game but installs a virus secretly.",
                "A type of public Wi-Fi network."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "What does a tiny closed Padlock icon (HTTPS) at the top of your web browser mean?",
            options: [
                "Your computer has a virus.",
                "The website is currently frozen.",
                "Your connection to that website is safe and private.",
                "You need to update your password."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "Why is it dangerous to use Free Public Wi-Fi to log into a bank account?",
            options: [
                "Because public Wi-Fi is too slow for banking.",
                "A hacker sitting nearby can read the invisible Wi-Fi waves to steal your passwords.",
                "Because the bank will block your account.",
                "Because it will download a Trojan Horse automatically."
            ],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "What is Two-Factor Authentication (2FA)?",
            options: [
                "Using two different antivirus programs at the same time.",
                "Creating a password that has both letters and numbers.",
                "Adding a double-lock where you type your password AND enter a secret OTP sent to your phone.",
                "Sharing your password with exactly one trusted friend."
            ],
            correctAnswer: 2
        }
    ],
    [
        // ==========================================
        // TYPING & BROWSER SHORTCUTS
        // ==========================================
        {
            subject: "Typing Theory",
            question: "When practicing touch typing, what should your accuracy goal always be?",
            options: [
                "50% or higher",
                "75% or higher",
                "95% or higher",
                "100% only"
            ],
            correctAnswer: 2
        },
        {
            subject: "Typing Theory",
            question: "What must you press to activate the Numeric Keypad (Numpad) on the right side of the keyboard?",
            options: [
                "Shift",
                "Caps Lock",
                "Ctrl",
                "Num Lock"
            ],
            correctAnswer: 3
        },
        {
            subject: "Typing Theory",
            question: "Which web browser shortcut rescues and reopens the last tab you accidentally closed?",
            options: [
                "Ctrl + W",
                "Ctrl + Shift + T",
                "Ctrl + J",
                "F5"
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "What does the shortcut 'Ctrl + Backspace' do?",
            options: [
                "Erases an entire word instantly instead of just one letter.",
                "Moves the cursor to the beginning of the line.",
                "Deletes all the text in the document.",
                "Highlights the previous word."
            ],
            correctAnswer: 0
        },

        // ==========================================
        // MS WORD
        // ==========================================
        {
            subject: "MS Word",
            question: "If your text looks too crowded and a teacher asks for a 'double-spaced' essay, which tool should you use?",
            options: [
                "Text Alignment",
                "Page Margins",
                "Line Spacing",
                "Page Breaks"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "In the 'Layout' tab, what does changing the 'Orientation' to 'Landscape' do?",
            options: [
                "It makes the page margins completely blank.",
                "It flips the paper to be wide instead of tall, which is great for certificates.",
                "It adds a beautiful border around the page.",
                "It changes the size of the paper to A4."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "What is the fastest way to move highlighted text from one place to another without duplicating it?",
            options: [
                "Use 'Copy' (Ctrl+C) then 'Paste' (Ctrl+V).",
                "Use 'Cut' (Ctrl+X) then 'Paste' (Ctrl+V).",
                "Use 'Undo' (Ctrl+Z).",
                "Use the Format Painter."
            ],
            correctAnswer: 1
        },

        // ==========================================
        // MS EXCEL
        // ==========================================
        {
            subject: "MS Excel",
            question: "Which smart Excel feature acts like a 'Magic Strainer' to hide massive amounts of data and only show exactly what you need (e.g., only the 8th Class)?",
            options: [
                "Find and Replace",
                "Filtering",
                "Sorting",
                "Remove Duplicates"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "Which formula instantly finds the highest score in a list of student marks?",
            options: [
                "=AVERAGE(A1:A5)",
                "=MAX(A1:A5)",
                "=MIN(A1:A5)",
                "=SUM(A1:A5)"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "If you want to add a second page to your Excel workbook for a different class, what should you do?",
            options: [
                "Open MS Word instead.",
                "Click the little '+' button next to 'Sheet1' at the bottom left corner.",
                "Use the 'Insert Row' tool.",
                "Freeze the Panes."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "What does the 'Remove Duplicates' tool do?",
            options: [
                "It deletes your entire workbook.",
                "It finds identical entries (like a student entered twice) and deletes the extra one safely.",
                "It removes all the red colors from Conditional Formatting.",
                "It splits first and last names into two boxes."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "Which tool allows you to paint tiny blue loading bars directly inside the boxes to visually show big and small numbers?",
            options: [
                "Data Bars (Conditional Formatting)",
                "Pie Chart",
                "Borders",
                "Flash Fill"
            ],
            correctAnswer: 0
        },

        // ==========================================
        // MS POWERPOINT
        // ==========================================
        {
            subject: "MS PowerPoint",
            question: "Which keyboard shortcut instantly creates a new blank slide in PowerPoint?",
            options: [
                "Ctrl + S",
                "Ctrl + M",
                "Ctrl + N",
                "Ctrl + B"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "If a large picture on your slide is hiding your text box underneath it, how do you fix it?",
            options: [
                "Delete the text box.",
                "Right-click the picture and choose 'Send to Back'.",
                "Use the Crop tool to cut the text out.",
                "Group the picture and the text together."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "What tool allows you to chop off unwanted or messy backgrounds from a photo like digital scissors?",
            options: [
                "Format Background",
                "Align Middle",
                "Crop",
                "SmartArt"
            ],
            correctAnswer: 2
        },

        // ==========================================
        // CYBER SECURITY
        // ==========================================
        {
            subject: "Cyber Security",
            question: "What are Hackers?",
            options: [
                "Digital bodyguards that protect your computer.",
                "Antivirus programs.",
                "Digital thieves who break code to steal private photos, messages, or money.",
                "People who fix physical computer hardware."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "If a sudden website window pops up screaming 'YOUR COMPUTER HAS A VIRUS! CALL THIS NUMBER!', what should you do?",
            options: [
                "Call the number immediately.",
                "Close the window immediately, as it is a fake trick to scare you.",
                "Give them your credit card details to fix it.",
                "Download the software they recommend."
            ],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "Why is it dangerous to have a 'Public' social media account?",
            options: [
                "Because your phone will run out of storage.",
                "Because the website will delete your account.",
                "Because every stranger in the entire world can watch what you do and track you.",
                "Because you cannot post photos on a public account."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "Why do companies send Software Updates to your phone or computer?",
            options: [
                "To drain your battery faster.",
                "To patch broken security holes so hackers cannot sneak in.",
                "To install Trojan Horses.",
                "To delete your saved files."
            ],
            correctAnswer: 1
        },

        // ==========================================
        // COMPUTER FUNDAMENTALS & COMPONENTS
        // ==========================================
        {
            subject: "Computer Fundamentals",
            question: "What is the difference between Hardware and Software?",
            options: [
                "Hardware is the brain; Software is the printer.",
                "Hardware is the programs; Software is the physical parts you can touch.",
                "Hardware are the physical parts you can touch; Software are the programs and instructions you cannot touch.",
                "There is no difference."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "Which of the following is an Output Device?",
            options: [
                "Keyboard",
                "Mouse",
                "Scanner",
                "Monitor (Screen)"
            ],
            correctAnswer: 3
        },
        {
            subject: "Computer Fundamentals",
            question: "Which type of memory is 'Read Only' (you cannot change what is written inside) and remembers everything even when the power is unplugged?",
            options: [
                "RAM (Random Access Memory)",
                "ROM (Read Only Memory)",
                "Floppy Disk",
                "CPU"
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "Which Number System is the computer's favorite language, using only 0 (Off) and 1 (On)?",
            options: [
                "Decimal System",
                "Hexadecimal System",
                "Binary System",
                "Alphabetic System"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Components",
            question: "What is the function of Liquid Cooling (AIO) in a computer?",
            options: [
                "To power the motherboard.",
                "To circulate liquid coolant through tubes to absorb heat from the CPU and prevent it from destroying itself.",
                "To render 3D graphics.",
                "To provide an internet connection."
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Components",
            question: "On a computer's audio panel, what is the Green 3.5mm jack used for?",
            options: [
                "Microphone In",
                "Line In",
                "Ethernet Connection",
                "Speakers Out"
            ],
            correctAnswer: 3
        },

        // ==========================================
        // OPERATING SYSTEM BASICS
        // ==========================================
        {
            subject: "Operating System Basics",
            question: "In the Windows Control Panel, what is the difference between an Administrator account and a Standard account?",
            options: [
                "A Standard account has full control; an Administrator cannot install software.",
                "An Administrator has full control over the PC; a Standard account cannot install software or change system settings.",
                "They are exactly the same.",
                "An Administrator account does not need a password."
            ],
            correctAnswer: 1
        },
        {
            subject: "Operating System Basics",
            question: "What does the 'Disk Cleanup' utility do?",
            options: [
                "It physically wipes dust off the hard drive.",
                "It defragments the hard drive.",
                "It safely deletes temporary files and empties the recycle bin to free up storage space.",
                "It removes viruses from the computer."
            ],
            correctAnswer: 2
        }
    ]
];

// ==========================================
// 2. PARAGRAPH TYPING TESTS
// ==========================================

const typingTestsArray = [
    {
        id: 1,
        title: "Test 1: Posture and Keyboard Basics",
        text: "Touch typing is the ability to type on a keyboard without using your sense of sight to find the keys. Instead, you use muscle memory to know exactly where every key is located instantly. Proper posture is absolutely critical to avoid neck and lower back pain. Sit up completely straight and plant both feet firmly flat on the floor to stabilize your body. Keep your elbows resting loosely close to your sides, bent at a 90-degree angle. Keep your wrists completely straight and floating just above the keyboard. Do not rest your wrists on the desk while typing, as this restricts finger movement.",
        timeLimitMinutes: 5,
        maxMarks: 50
    },
    {
        id: 2,
        title: "Test 2: Cyber Security and Protection",
        text: "Cyber Security is the practice of protecting your computers and personal information from bad people on the internet. Hackers are digital thieves who try to sneak into your computer to steal private photos or take money from bank accounts. Your password is the key to your digital house. A strong password should have capital letters, small letters, numbers, and symbols. Never use your name or birthdate as a password. Furthermore, if you must use free public Wi-Fi, you should use a Virtual Private Network. A VPN puts your internet traffic into an invisible tunnel to keep it safe.",
        timeLimitMinutes: 5,
        maxMarks: 50
    }
];

// ==========================================
// AUTO-ASSEMBLY ENGINE (DO NOT TOUCH THIS)
// ==========================================
// The .flat() command automatically merges all your batches into one master list.
const questionBank = {
    "CCA": { 
        subjects: [
            "Computer Fundamentals", "Operating System Basics", 
            "MS Word", "MS Excel", "MS PowerPoint", 
            "Cyber Security", "Computer Components", "Typing Theory", "Computer Networking Basics"
        ],
        mcqs: questionBatches.flat(),
        typingTests: typingTestsArray
    }
};
