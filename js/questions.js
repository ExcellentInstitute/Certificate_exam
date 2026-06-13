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
    ],
    [
        // ==========================================
        // BATCH 6: TYPING & NAVIGATION
        // ==========================================
        {
            subject: "Typing Theory",
            question: "When measuring typing speed, what does WPM stand for?",
            options: [
                "Words Per Minute",
                "Words Per Metric",
                "Working Processing Memory",
                "Windows Per Minute"
            ],
            correctAnswer: 0
        },
        {
            subject: "Typing Theory",
            question: "When your hands are placed on the Home Row, which finger is strictly used to press the Spacebar?",
            options: [
                "The Index finger",
                "The Pinky finger",
                "The Middle finger",
                "The Thumb"
            ],
            correctAnswer: 3
        },
        {
            subject: "Typing Theory",
            question: "What do the 'Home' and 'End' keys do on the keyboard?",
            options: [
                "They turn the computer on and off.",
                "They move the cursor to the exact beginning or end of the line you are typing on.",
                "They close the current web browser tab.",
                "They switch between open applications."
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "When should you use the Caps Lock key?",
            options: [
                "To capitalize just the first letter of a sentence.",
                "When you want EVERY letter you type to be CAPITALIZED.",
                "To type the symbols on top of the number keys.",
                "To lock the computer screen."
            ],
            correctAnswer: 1
        },

        // ==========================================
        // BATCH 6: MS WORD
        // ==========================================
        {
            subject: "MS Word",
            question: "Which keyboard shortcut is used to quickly Save your document to prevent losing your hard work?",
            options: [
                "Ctrl + C",
                "Ctrl + S",
                "Ctrl + P",
                "Ctrl + X"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "If you need to write a neat list of items without typing numbers manually, which tool in the Home tab should you use?",
            options: [
                "Format Painter",
                "Line Spacing",
                "Bullets or Numbering",
                "SmartArt"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "Before typing a document, where should you click to ensure your page size is set to 'A4'?",
            options: [
                "Home tab > Font Size",
                "Insert tab > Pictures",
                "Design tab > Page Borders",
                "Layout tab > Size"
            ],
            correctAnswer: 3
        },

        // ==========================================
        // BATCH 6: MS EXCEL
        // ==========================================
        {
            subject: "MS Excel",
            question: "How do you create a giant title box across the top of an Excel sheet (like 'Excellent Institute Routine')?",
            options: [
                "Change the Font Size to 72.",
                "Highlight several small boxes and click 'Merge & Center'.",
                "Use the 'Wrap Text' button.",
                "Draw a Text Box over the cells."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "Which tool allows you to force users to choose from a clickable drop-down menu (like 'Pass' or 'Fail') instead of typing?",
            options: [
                "Remove Duplicates",
                "Data Validation",
                "Flash Fill",
                "AutoSum"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "If someone typed 'Rahul Sharma' in one box, which tool perfectly slices the first and last name into two separate boxes?",
            options: [
                "Find and Replace",
                "Merge & Center",
                "Text to Columns",
                "Conditional Formatting"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Excel",
            question: "Which type of chart is perfect for showing fractions, sliced up like a pizza?",
            options: [
                "Bar Graph",
                "Pie Chart",
                "Line Graph",
                "Column Chart"
            ],
            correctAnswer: 1
        },

        // ==========================================
        // BATCH 6: MS POWERPOINT
        // ==========================================
        {
            subject: "MS PowerPoint",
            question: "Where do you go to find a gallery of beautiful, ready-made background styles for your slides?",
            options: [
                "Home tab > Font Color",
                "Insert tab > SmartArt",
                "Design tab > Themes",
                "Animations tab > Emphasis"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS PowerPoint",
            question: "If you want to draw a perfect arrow or star on your slide, what should you click?",
            options: [
                "Insert > Shapes",
                "Design > Format Background",
                "Home > Center Align",
                "Transitions > Morph"
            ],
            correctAnswer: 0
        },
        {
            subject: "MS PowerPoint",
            question: "In custom animations, what does a Red Star ('Exit') effect do?",
            options: [
                "It makes a picture fly onto the screen.",
                "It makes a picture pulse or spin to grab attention.",
                "It makes the picture fly away or disappear when you are done talking about it.",
                "It changes the slide background to red."
            ],
            correctAnswer: 2
        },

        // ==========================================
        // BATCH 6: CYBER SECURITY
        // ==========================================
        {
            subject: "Cyber Security",
            question: "Which digital threat is similar to a virus, but can automatically jump from computer to computer on its own?",
            options: [
                "Trojan Horse",
                "Phishing",
                "Ransomware",
                "Worm"
            ],
            correctAnswer: 3
        },
        {
            subject: "Cyber Security",
            question: "What acts as a digital barrier to block bad hackers from entering your computer from the internet?",
            options: [
                "Firewall",
                "Antivirus",
                "Virtual Private Network (VPN)",
                "Encryption"
            ],
            correctAnswer: 0
        },

        // ==========================================
        // BATCH 6: FUNDAMENTALS & COMPONENTS
        // ==========================================
        {
            subject: "Computer Fundamentals",
            question: "What is 'Humanware' in a computer system?",
            options: [
                "The physical mouse and keyboard.",
                "The Operating System like Windows or Linux.",
                "The humans, teachers, and students who turn on the computer and use it.",
                "A type of malicious software."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "Which type of storage device is shiny and uses bright laser lights to read your data instead of magnets?",
            options: [
                "Hard Disk Drive (HDD)",
                "Floppy Disk",
                "Optical Storage (CD / DVD)",
                "Random Access Memory (RAM)"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "Invented around 3000 BC, what is considered the very first manual calculating toy with beads?",
            options: [
                "Pascaline",
                "Difference Engine",
                "Analytical Engine",
                "Abacus"
            ],
            correctAnswer: 3
        },
        {
            subject: "Computer Components",
            question: "Which port is used for a wired Local Area Network (LAN) connection to provide fast, stable internet?",
            options: [
                "HDMI",
                "Ethernet (RJ-45)",
                "TOSLINK",
                "USB Type-C"
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Components",
            question: "In computer air cooling, what is the role of the Heatsink and Fan?",
            options: [
                "To absorb heat from the CPU and blow it away so the part doesn't destroy itself.",
                "To circulate liquid coolant through tubes.",
                "To provide low-voltage DC power to the motherboard.",
                "To process 3D graphics."
            ],
            correctAnswer: 0
        }
    ],
    [
        // ==========================================
        // BATCH 7: TYPING THEORY & SHORTCUTS
        // ==========================================
        {
            subject: "Typing Theory",
            question: "What is the 'Golden Rule #1' for beginners learning touch typing?",
            options: [
                "Always type as fast as possible.",
                "Never look at the keyboard!",
                "Rest your wrists heavily on the desk.",
                "Use only your index fingers."
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "Where are the 'Function Keys' (F1-F12) located on a standard keyboard?",
            options: [
                "On the far right side.",
                "In the center with the letters.",
                "At the very top row.",
                "Next to the spacebar."
            ],
            correctAnswer: 2
        },
        {
            subject: "Typing Theory",
            question: "When typing a document, what does the shortcut 'Ctrl + F' do?",
            options: [
                "It opens the print menu.",
                "It opens a search bar to find specific words in the document.",
                "It formats the text.",
                "It forces the program to close."
            ],
            correctAnswer: 1
        },

        // ==========================================
        // BATCH 7: MS WORD
        // ==========================================
        {
            subject: "MS Word",
            question: "If you need a beautiful front page for a big project report, what feature should you use instead of making it manually?",
            options: [
                "Page Borders",
                "Watermark",
                "Insert > Cover Page",
                "SmartArt"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "How do you make important words stand out by making them thicker and slanted?",
            options: [
                "Use the 'Cut' and 'Paste' tools.",
                "Highlight them and click 'B' (Bold) and 'I' (Italic).",
                "Change the Page Orientation.",
                "Use the 'Bullets' button."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "Normally, MS Word forces you to type line by line. What should you use if you want text floating in the middle of a picture like a digital sticker?",
            options: [
                "A Text Box",
                "A Header",
                "A Footer",
                "A Newspaper Column"
            ],
            correctAnswer: 0
        },

        // ==========================================
        // BATCH 7: MS EXCEL
        // ==========================================
        {
            subject: "MS Excel",
            question: "When you print an Excel sheet, the light grey grid lines usually do NOT print. How do you draw real dark lines around your boxes?",
            options: [
                "Change the cell color to black.",
                "Highlight them and use the 'Borders' button to choose 'All Borders'.",
                "Use the 'Merge & Center' button.",
                "Change the Number Style to Currency."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "If you forgot to add a student in the middle of an alphabetical list, what is the best way to fix it without erasing anything?",
            options: [
                "Right-click the row number and click 'Insert' to get a brand new empty row.",
                "Type over the next student's name.",
                "Use the 'Remove Duplicates' tool.",
                "Delete the whole column and start over."
            ],
            correctAnswer: 0
        },
        {
            subject: "MS Excel",
            question: "Which formula should you use to find the average marks of a student in cells A1 through A5?",
            options: [
                "=SUM(A1:A5)",
                "=MAX(A1:A5)",
                "=MIN(A1:A5)",
                "=AVERAGE(A1:A5)"
            ],
            correctAnswer: 3
        },

        // ==========================================
        // BATCH 7: MS POWERPOINT
        // ==========================================
        {
            subject: "MS PowerPoint",
            question: "If you want to save screen space while working, which shortcut hides or shows the Ribbon at the top?",
            options: [
                "Ctrl + S",
                "Ctrl + F1",
                "Alt + Tab",
                "F5"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "What does the 'Send to Back' option do when you right-click a large picture?",
            options: [
                "It deletes the picture.",
                "It slides the picture behind your text box, making your words readable again.",
                "It moves the picture to the very last slide of the presentation.",
                "It sends the picture in an email."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "When presenting like a professional, what is the difference between pressing 'F5' and 'Shift + F5'?",
            options: [
                "F5 saves the file; Shift + F5 closes the file.",
                "F5 turns the screen black; Shift + F5 turns the screen white.",
                "F5 starts the presentation from Slide 1; Shift + F5 starts from the current slide.",
                "There is no difference."
            ],
            correctAnswer: 2
        },

        // ==========================================
        // BATCH 7: CYBER SECURITY
        // ==========================================
        {
            subject: "Cyber Security",
            question: "What does Antivirus software do?",
            options: [
                "It makes your internet connection faster.",
                "It scrambles your messages into a secret code.",
                "It acts as a digital doctor, scanning files to catch and delete bad sicknesses before they hurt your data.",
                "It creates strong passwords for you automatically."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "What is 'Encryption'?",
            options: [
                "Scrambling your messages into a secret code so thieves cannot read them.",
                "Using a fingerprint to log into a computer.",
                "Downloading a free game from a weird website.",
                "Posting your location on social media."
            ],
            correctAnswer: 0
        },
        {
            subject: "Cyber Security",
            question: "To stay safe on social media, who should you accept friend requests from if your account is 'Private'?",
            options: [
                "Anyone who sends a request.",
                "Only people you actually know in real life.",
                "People with verified checkmarks.",
                "Strangers who message you nicely."
            ],
            correctAnswer: 1
        },

        // ==========================================
        // BATCH 7: FUNDAMENTALS & COMPONENTS
        // ==========================================
        {
            subject: "Computer Fundamentals",
            question: "Which of the following is an Input Device used to take a photo of a paper and put it inside the screen?",
            options: [
                "Printer",
                "Scanner",
                "Monitor",
                "Speaker"
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "Which type of computer is a small, everyday machine built for one person, usually called a Personal Computer (PC)?",
            options: [
                "Mainframe Computer",
                "Supercomputer",
                "Microcomputer",
                "Minicomputer"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "What is the job of an 'Interpreter' translator software?",
            options: [
                "It reads an entire book of code and translates it all at once.",
                "It blocks viruses from entering the computer.",
                "It reads and translates code slowly, line-by-line.",
                "It manages the computer's memory and hardware."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Components",
            question: "Which modern USB port features a reversible oval shape and supports high-speed data, video, and fast charging?",
            options: [
                "USB Type-A",
                "USB Type-B",
                "USB Type-C",
                "VGA"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Components",
            question: "What is the primary function of the BIOS/UEFI chip on a motherboard?",
            options: [
                "To store files, movies, and games permanently.",
                "To cool the CPU using liquid.",
                "To initialize the hardware the moment you press the power button, before Windows even starts.",
                "To connect the computer to Wi-Fi."
            ],
            correctAnswer: 2
        }
    ],
    [
        // ==========================================
        // BATCH 8: MS WORD
        // ==========================================
        {
            subject: "MS Word",
            question: "Which alignment option is best used for main titles on a page?",
            options: ["Left Align", "Center Align", "Right Align", "Justify Align"],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "When writing a formal letter, what is the best way to jump perfectly and indent your text instead of using the Spacebar?",
            options: ["Press the Enter key", "Use the Page Break tool", "Press the Tab key", "Change the Page Margins"],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "What are 'Margins' in MS Word?",
            options: ["The colorful borders around pictures.", "The blank white borders around the edges of your paper.", "The spaces between lines of text.", "The columns that split text side-by-side."],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "If you want to fit more words onto a single page, what should you change your Margins to?",
            options: ["Wide", "Normal", "Narrow", "Landscape"],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "What tool allows you to draw perfect arrows or stars in your document?",
            options: ["Format Painter", "Insert > Shapes", "SmartArt", "Page Borders"],
            correctAnswer: 1
        },
        {
            subject: "MS Word",
            question: "If you want to show a company's profit or student attendance using a Pie Chart or Bar Graph, which tab should you use?",
            options: ["Home tab", "Design tab", "Layout tab", "Insert tab"],
            correctAnswer: 3
        },
        {
            subject: "MS Word",
            question: "What is the function of the 'Table' tool in MS Word?",
            options: ["To format the background color.", "To create boxes that keep information organized, like a class routine.", "To add watermarks.", "To check spelling."],
            correctAnswer: 1
        },

        // ==========================================
        // BATCH 8: MS EXCEL
        // ==========================================
        {
            subject: "MS Excel",
            question: "What is an Excel 'Workbook'?",
            options: ["A single cell.", "A fresh, empty digital notebook ready for your math and lists.", "A printed copy of your data.", "A tool to draw shapes."],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "Which keyboard shortcut opens a completely new, empty notebook in Excel?",
            options: ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
            correctAnswer: 0
        },
        {
            subject: "MS Excel",
            question: "If you accidentally delete your whole homework in Excel, which 'Time Machine' button brings it back exactly how it was?",
            options: ["Redo (Ctrl + Y)", "Undo (Ctrl + Z)", "Copy (Ctrl + C)", "Find (Ctrl + F)"],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "When you want to melt 5 or 6 small boxes into one giant title box, which tool do you use?",
            options: ["Wrap Text", "Conditional Formatting", "Merge & Center", "Data Validation"],
            correctAnswer: 2
        },
        {
            subject: "MS Excel",
            question: "If you type '500' in a cell, how do you tell Excel that it is money (₹500) and not just a regular number?",
            options: ["Type the ₹ symbol manually.", "Change the drop-down menu in the Home tab from 'General' to 'Currency'.", "Use the Format Painter.", "Make the text bold."],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "What is the main advantage of typing '=A1+B1' instead of just adding the numbers in your head?",
            options: ["It looks more professional.", "It changes the color of the box.", "If you change the numbers in A1 later, the answer magically updates all by itself.", "It locks the cell from being deleted."],
            correctAnswer: 2
        },
        {
            subject: "MS Excel",
            question: "Which tool acts as a 'Lightning Calculator' to instantly add up a shopping list of 20 items?",
            options: ["Flash Fill", "AutoSum", "Sort A to Z", "Remove Duplicates"],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "How do you add a new, blank row in the middle of an alphabetical list without erasing anything?",
            options: ["Press the Enter key 5 times.", "Right-click the row number on the left side and click 'Insert'.", "Use the AutoSum tool.", "Double-click the line between columns."],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "What are 'Sheets' in an MS Excel file?",
            options: ["Different colored fonts.", "The grey grid lines.", "Multiple pages inside one single Excel file.", "The printed copies of your work."],
            correctAnswer: 2
        },
        {
            subject: "MS Excel",
            question: "If you spelled a city name wrong 50 times in a huge list, which tool fixes the entire workbook in one second?",
            options: ["Find and Replace", "Sort", "Filter", "Data Validation"],
            correctAnswer: 0
        },

        // ==========================================
        // BATCH 8: MS POWERPOINT
        // ==========================================
        {
            subject: "MS PowerPoint",
            question: "What is a 'Slide' in PowerPoint?",
            options: ["A transition animation.", "A single screen or page of your presentation.", "A tool to draw shapes.", "The main Ribbon menu."],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "How do you make text stand out on a big projector screen?",
            options: ["Make it italic.", "Change it to a tiny font size.", "Make the font bigger and use the 'B' button to make it Bold.", "Change the slide theme to white."],
            correctAnswer: 2
        },
        {
            subject: "MS PowerPoint",
            question: "Where should main titles always sit on a presentation slide?",
            options: ["In the bottom left corner.", "Directly in the middle of the slide (Center Align).", "On the far right side.", "Outside the text box."],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "What can you choose as a background using the 'Format Background' tool?",
            options: ["Only solid black or white.", "A solid color, a fading gradient, or even a photograph.", "Only video files.", "Only Excel charts."],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "How do you change the size of an inserted picture?",
            options: ["Use the 'Crop' tool.", "Grab the tiny circles on the corners and drag them.", "Use the 'Group' function.", "Press Ctrl + >."],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "If you have three pictures and want them to line up perfectly straight without guessing, what tool should you use?",
            options: ["SmartArt", "Picture Format > Align > Align Middle", "Transitions", "Bring to Front"],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "What do Green Star ('Entrance') animations do?",
            options: ["Make a picture pulse or spin.", "Make a picture fly away when you are done.", "Make a picture wait hidden and fly onto the screen when you click.", "Change the slide to the next page."],
            correctAnswer: 2
        },
        {
            subject: "MS PowerPoint",
            question: "How do you instantly create a neat grid to show a class routine or comparison data on a slide?",
            options: ["Insert > Table", "Insert > Chart", "Insert > SmartArt", "Design > Themes"],
            correctAnswer: 0
        },

        // ==========================================
        // BATCH 8: CYBER SECURITY
        // ==========================================
        {
            subject: "Cyber Security",
            question: "What is the main goal of Cyber Security?",
            options: ["To make your internet connection faster.", "To practice protecting your phones, computers, and personal information from bad people.", "To build new computer hardware.", "To design presentation slides."],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "Why is '123456' a terrible password?",
            options: ["It is too long to remember.", "A hacker can guess it in exactly two seconds using a robot program.", "It uses too many symbols.", "Computers do not allow numbers in passwords."],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "What makes a 'Super Password' strong?",
            options: ["Using your birthdate.", "Making it exactly 6 characters long.", "Using a mix of Capital letters, small letters, numbers, and symbols.", "Using your best friend's name."],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "When should you share your password with your best friend?",
            options: ["Only if they ask nicely.", "If they need to check your email.", "NEVER. Your password belongs to YOU alone.", "If they share theirs with you first."],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "How can you spot a fake 'Phishing' message?",
            options: ["It will always have a red background.", "Check the sender's actual email address for weird spellings, not just their name.", "It will ask you to download an antivirus.", "It will come from a known friend."],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "What is 'Malware'?",
            options: ["Hardware that is broken.", "Invisible, bad programs that can delete your files or spy on you.", "A strong security firewall.", "A program used to type documents."],
            correctAnswer: 1
        },

        // ==========================================
        // BATCH 8: FUNDAMENTALS, OS & COMPONENTS
        // ==========================================
        {
            subject: "Computer Fundamentals",
            question: "Where do we use computers today?",
            options: ["Only in schools.", "Only in hospitals.", "Only for playing games.", "Everywhere! In banking, hospitals, business, railways, and education."],
            correctAnswer: 3
        },
        {
            subject: "Computer Fundamentals",
            question: "What did John Presper Eckert and John Mauchly invent in 1945?",
            options: ["The Abacus", "ENIAC", "The Microprocessor", "Windows OS"],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "Which type of computer is a mix of both Digital and Analog, often used in hospital ICU rooms?",
            options: ["Supercomputer", "Hybrid Computer", "Minicomputer", "Mainframe Computer"],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "What is the 'Desktop' in an Operating System?",
            options: ["The physical table the computer sits on.", "The primary workspace on your screen when you log into an OS.", "The hard drive storage space.", "The main power cable."],
            correctAnswer: 1
        },
        {
            subject: "Operating System Basics",
            question: "What is a 'File' in a computer system?",
            options: ["A physical folder.", "A container used to organize other folders.", "A container for data (like text, images, music) identified by its extension.", "A type of virus."],
            correctAnswer: 2
        },
        {
            subject: "Operating System Basics",
            question: "Which shortcut key 'Cuts' a file to prepare it to be moved to a new location?",
            options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + X"],
            correctAnswer: 3
        },
        {
            subject: "Operating System Basics",
            question: "In the modern Windows Settings app, where do you go to change your desktop background and system colors?",
            options: ["Network and Internet", "Personalization", "User Accounts", "Hardware and Sound"],
            correctAnswer: 1
        },
        {
            subject: "Computer Components",
            question: "Which traditional, rectangular USB port is the standard for most older peripherals?",
            options: ["USB Type-C", "USB Type-B", "USB Type-A", "Thunderbolt"],
            correctAnswer: 2
        },
        {
            subject: "Computer Components",
            question: "Which Display port is the standard for consumer electronics like modern TVs?",
            options: ["VGA", "DVI", "DisplayPort (DP)", "HDMI"],
            correctAnswer: 3
        },
        {
            subject: "Computer Components",
            question: "Where does the central processor (CPU) sit on the motherboard?",
            options: ["In the PCIe Slot", "In the RAM Slot", "In the CPU Socket", "In the SATA Port"],
            correctAnswer: 2
        },
        {
            subject: "Computer Components",
            question: "What are PCIe Slots used for on a motherboard?",
            options: ["To install the CPU.", "To install RAM sticks.", "To install expansion cards like GPUs and Wi-Fi cards.", "To connect the power supply."],
            correctAnswer: 2
        }
    ],
    [
        // ==========================================
        // BATCH 9: TYPING THEORY
        // ==========================================
        {
            subject: "Typing Theory",
            question: "When measuring typing speed, what is considered a good WPM (Words Per Minute) goal for beginners?",
            options: [
                "10 WPM",
                "30 WPM",
                "60 WPM",
                "100 WPM"
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "When your hands are in the proper typing position, which finger should you use to press the Spacebar?",
            options: [
                "The left or right Index finger.",
                "The left or right Pinky finger.",
                "Whichever Thumb feels most comfortable.",
                "The right Middle finger."
            ],
            correctAnswer: 2
        },
        {
            subject: "Typing Theory",
            question: "What does the keyboard shortcut 'Shift + Arrow Keys' do?",
            options: [
                "Moves the cursor one full word at a time.",
                "Highlights text letter-by-letter using the keyboard.",
                "Deletes the selected text.",
                "Switches to a different open app."
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "When using the Numpad (Numeric Keypad), which fingers should rest on the 4, 5, and 6 keys?",
            options: [
                "Index, Middle, and Ring fingers of the right hand.",
                "Index, Middle, and Ring fingers of the left hand.",
                "Thumb, Index, and Middle fingers of the right hand.",
                "Middle, Ring, and Pinky fingers of the right hand."
            ],
            correctAnswer: 0
        },

        // ==========================================
        // BATCH 9: MS WORD & EXCEL
        // ==========================================
        {
            subject: "MS Word",
            question: "What does the Microsoft Word logo look like on your computer screen?",
            options: [
                "A bright orange icon with the letter 'P'.",
                "A dark green icon with a white letter 'X'.",
                "A dark blue icon with a white letter 'W'.",
                "A red icon with a white 'A'."
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "When you first open MS Word, what should you click to get a clean, fresh page?",
            options: [
                "Blank Document",
                "Insert Page Break",
                "Format Painter",
                "Newspaper Columns"
            ],
            correctAnswer: 0
        },
        {
            subject: "MS Word",
            question: "Which keyboard shortcut opens the print menu instantly?",
            options: [
                "Ctrl + C",
                "Ctrl + Z",
                "Ctrl + P",
                "Alt + F4"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "After inserting a picture into MS Word, how do you make it bigger or smaller?",
            options: [
                "Change the Page Margins.",
                "Drag the tiny circles on the corners of the picture.",
                "Use the 'Crop' tool.",
                "Change the Font Size."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "Which keyboard shortcut is used to open a completely new, empty notebook in Excel anytime?",
            options: [
                "Ctrl + N",
                "Ctrl + S",
                "Ctrl + Z",
                "Ctrl + E"
            ],
            correctAnswer: 0
        },
        {
            subject: "MS Excel",
            question: "If you want to move your selector between boxes (cells) without using a mouse, what should you use?",
            options: [
                "The Spacebar",
                "The Arrow Keys",
                "The Enter Key",
                "The Shift Key"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "What happens if you click a cell with a spelling mistake and just start typing your correction immediately?",
            options: [
                "It will insert the new letter perfectly.",
                "It will erase the whole box and overwrite everything.",
                "It will open the Data Validation menu.",
                "It will change the cell color to red."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "What does the 'Paint Bucket' icon do in the Home tab?",
            options: [
                "It changes the color of the text.",
                "It draws thick dark borders around the box.",
                "It colors the background of the selected box.",
                "It removes duplicate entries."
            ],
            correctAnswer: 2
        },

        // ==========================================
        // BATCH 9: MS POWERPOINT
        // ==========================================
        {
            subject: "MS PowerPoint",
            question: "What does the Microsoft PowerPoint logo look like?",
            options: [
                "A dark blue icon with a white letter 'W'.",
                "A dark green icon with a white letter 'X'.",
                "A bright orange icon with the letter 'P'.",
                "A yellow icon with a white 'Y'."
            ],
            correctAnswer: 2
        },
        {
            subject: "MS PowerPoint",
            question: "Which shortcut instantly creates a new blank slide in PowerPoint?",
            options: [
                "Ctrl + N",
                "Ctrl + M",
                "Ctrl + S",
                "Ctrl + P"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "When using Slide Transitions, what does the 'Push' effect do?",
            options: [
                "It makes the slide dissolve into black.",
                "It beautifully melts one slide into the next.",
                "It makes the slide slide up like a piece of paper.",
                "It makes the picture spin in a circle."
            ],
            correctAnswer: 2
        },
        {
            subject: "MS PowerPoint",
            question: "In the Animations tab, what do Green Stars represent?",
            options: [
                "Exit animations (flying away).",
                "Entrance animations (flying onto the screen).",
                "Emphasis animations (pulsing or spinning).",
                "Slide Transitions."
            ],
            correctAnswer: 1
        },

        // ==========================================
        // BATCH 9: CYBER SECURITY
        // ==========================================
        {
            subject: "Cyber Security",
            question: "If you receive an SMS saying 'You won a free iPhone! Click here to claim it!', what is this most likely an example of?",
            options: [
                "Ransomware",
                "A Trojan Horse",
                "Phishing",
                "A real prize from Apple"
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "What is the safest way to download new apps or games to your phone?",
            options: [
                "Download them from links in random emails.",
                "Download free games from weird websites.",
                "Only download apps from the official Google Play Store or Apple App Store.",
                "Download them using Public Wi-Fi."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "Why should you NEVER click on a flashing website pop-up that says 'YOUR COMPUTER HAS A VIRUS!'?",
            options: [
                "Because it will turn off your computer.",
                "Because it is a fake trick to scare you into giving them money.",
                "Because clicking it will format your hard drive.",
                "Because your Antivirus already fixed it."
            ],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "What is a major danger of having your social media account set to 'Public'?",
            options: [
                "You cannot post photos anymore.",
                "Your account will automatically be deleted after 30 days.",
                "Every stranger in the entire world can watch what you do.",
                "Your phone battery will drain faster."
            ],
            correctAnswer: 2
        },

        // ==========================================
        // BATCH 9: FUNDAMENTALS & COMPONENTS
        // ==========================================
        {
            subject: "Computer Fundamentals",
            question: "Which type of computer plays with numbers (0 and 1) and alphabets, and is mostly used for normal office work?",
            options: [
                "Analog Computer",
                "Digital Computer",
                "Hybrid Computer",
                "Supercomputer"
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "What is a 'Minicomputer'?",
            options: [
                "A small, everyday computer built for one person (PC).",
                "The biggest and fastest computer used for space research.",
                "A medium-sized machine that allows several people to work on it at the exact same time.",
                "A computer used exclusively to predict the weather."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "Why is 'Internal Memory' (Main Memory) so fast?",
            options: [
                "Because it uses massive hard drives.",
                "Because it lives right next to the CPU Brain.",
                "Because it is connected to the internet.",
                "Because it uses shiny laser discs."
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "How much data could a traditional, flexible Floppy Disk hold?",
            options: [
                "Terabytes of data.",
                "Hundreds of Gigabytes.",
                "Very little data (only 1MB to 1GB).",
                "No data at all."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "What is the function of a 'Sound Card' inside a computer?",
            options: [
                "It prints photos in high quality.",
                "It processes audio so you can record your voice or play songs.",
                "It stores large video games permanently.",
                "It blocks hackers from the internet."
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Components",
            question: "On a computer's audio panel, what is the Pink 3.5mm jack used for?",
            options: [
                "Speakers Out",
                "Line In",
                "Microphone In (Mic In)",
                "Network Connection"
            ],
            correctAnswer: 2
        },
        {
            subject: "Operating System Basics",
            question: "What does the 'Process Management' function of an Operating System do?",
            options: [
                "It tracks the primary memory (RAM).",
                "It allocates CPU time to active programs, ensuring multiple applications can run simultaneously without crashing.",
                "It creates new user accounts and passwords.",
                "It manages Bluetooth headsets."
            ],
            correctAnswer: 1
        },
        {
            subject: "Operating System Basics",
            question: "Which file system does Microsoft Windows primarily use?",
            options: [
                "ext4",
                "NTFS (New Technology File System)",
                "FAT32",
                "macOS Extended"
            ],
            correctAnswer: 1
        },
        {
            subject: "Operating System Basics",
            question: "In the Windows taskbar, what is the area on the far right that displays the clock, volume, and network status called?",
            options: [
                "The Start Menu",
                "The Desktop",
                "The System Tray (Notification Area)",
                "The Control Panel"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Networking Basics",
            question: "What does 'WAN' stand for?",
            options: [
                "Wired Area Network",
                "Wireless Access Node",
                "Wide Area Network",
                "Web Application Network"
            ],
            correctAnswer: 2
        }
    ],
    [
        // ==========================================
        // BATCH 10: THE FINAL 24 QUESTIONS
        // ==========================================
        {
            subject: "Typing Theory",
            question: "What is the 'Home Row' on a keyboard?",
            options: [
                "The very top row with the F1-F12 keys.",
                "The middle horizontal row of letters (A, S, D, F...) where your fingers must always rest.",
                "The number pad on the far right.",
                "The row containing the Spacebar and Alt keys."
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "When placing your hands on the Home Row, which key does your Left Pinky Finger rest on?",
            options: ["A", "S", "D", "F"],
            correctAnswer: 0
        },
        {
            subject: "Typing Theory",
            question: "When placing your hands on the Home Row, which key does your Right Pinky Finger rest on?",
            options: ["J", "K", "L", "; (Semicolon)"],
            correctAnswer: 3
        },
        {
            subject: "Typing Theory",
            question: "When practicing typing on a stool without back support, how often should you stand up and stretch to avoid pain?",
            options: [
                "10 minutes every hour.",
                "2 minutes every hour.",
                "5 minutes every 3 hours.",
                "You do not need to take breaks."
            ],
            correctAnswer: 1
        },
        {
            subject: "Typing Theory",
            question: "What does the rule 'Accuracy over Speed' mean for beginners?",
            options: [
                "Always type as fast as you can.",
                "Speed is more important than spelling.",
                "Type slowly and correctly first, because forcing speed early creates bad habits.",
                "Only look at the keyboard if you want to type fast."
            ],
            correctAnswer: 2
        },
        {
            subject: "Typing Theory",
            question: "What does the keyboard shortcut 'Ctrl + Y' do?",
            options: [
                "Copy",
                "Paste",
                "Undo the last mistake.",
                "Redo (Re-applies an action you just Undid)."
            ],
            correctAnswer: 3
        },
        {
            subject: "Typing Theory",
            question: "What does the keyboard shortcut 'Ctrl + V' do?",
            options: [
                "Cuts the text.",
                "Copies the text.",
                "Paste (Places the text you just Copied or Cut).",
                "Selects all text."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "In the Data Processing Cycle, what is the 'Output'?",
            options: [
                "The raw information we give to the computer.",
                "The final result the computer gives back to us to use.",
                "The process of solving the math problem.",
                "The keyboard and mouse."
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "Which computer is playfully known as the 'grandfather' of the computer world?",
            options: [
                "Microcomputer",
                "Minicomputer",
                "Mainframe Computer",
                "Supercomputer"
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "What is the job of the Control Unit (C.U.) inside the CPU?",
            options: [
                "It prints documents.",
                "It is the Math solver.",
                "It is the Manager that controls everything and tells all other parts what to do step-by-step.",
                "It stores photos permanently."
            ],
            correctAnswer: 2
        },
        {
            subject: "Computer Fundamentals",
            question: "What does 'ROM' stand for in computer memory?",
            options: [
                "Random Only Memory",
                "Read Only Memory",
                "Real Operational Memory",
                "Run On Machine"
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "Exactly how much data does one Megabyte (MB) hold?",
            options: [
                "1,024 Bytes",
                "1,024 Kilobytes",
                "1,024 Gigabytes",
                "8 Bits"
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Fundamentals",
            question: "What is the absolute smallest piece of data a computer can store (a single 0 or 1)?",
            options: [
                "A Byte",
                "A Nibble",
                "A Bit",
                "A Kilobyte"
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Word",
            question: "If you want to draw a Water Cycle or a family tree without drawing circles manually, which tool provides ready-made diagrams?",
            options: [
                "SmartArt",
                "WordArt",
                "Format Painter",
                "Page Borders"
            ],
            correctAnswer: 0
        },
        {
            subject: "MS Excel",
            question: "What does the formula '=MIN(A1:A5)' do?",
            options: [
                "Adds all the numbers together.",
                "Finds the highest score.",
                "Instantly finds the lowest score.",
                "Finds the average score."
            ],
            correctAnswer: 2
        },
        {
            subject: "MS Excel",
            question: "How do you rename a page like 'Sheet1' to '8th Class' in Excel?",
            options: [
                "Right-click the row number and click insert.",
                "Double-click the name 'Sheet1' at the very bottom left corner and type the new name.",
                "Go to the File menu and click Save As.",
                "Use the Find and Replace tool."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS Excel",
            question: "What is the exact keyboard shortcut to instantly trigger the AutoSum tool?",
            options: [
                "Ctrl + S",
                "Alt + =",
                "Shift + F3",
                "Ctrl + E"
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "How do you apply a completely solid color or a photograph to your slide background instead of a theme?",
            options: [
                "Right-click the blank slide and choose 'Format Background'.",
                "Use the 'Shape Fill' tool.",
                "Insert a Text Box.",
                "Use the 'Format Painter'."
            ],
            correctAnswer: 0
        },
        {
            subject: "MS PowerPoint",
            question: "What happens when you apply the 'Fade' transition between two slides?",
            options: [
                "Slide 1 will push upwards like a piece of paper.",
                "Slide 1 will beautifully melt into Slide 2.",
                "A yellow star will pulse.",
                "The screen will turn black."
            ],
            correctAnswer: 1
        },
        {
            subject: "MS PowerPoint",
            question: "What does a Yellow star ('Emphasis') animation do to a picture?",
            options: [
                "It makes the picture fly onto the screen.",
                "It deletes the picture.",
                "It makes the picture pulse or spin to grab attention while it is already on the screen.",
                "It makes the picture fly away."
            ],
            correctAnswer: 2
        },
        {
            subject: "Cyber Security",
            question: "What type of bad program locks your photos and asks for money to unlock them?",
            options: [
                "Worm",
                "Trojan Horse",
                "Phishing",
                "Ransomware"
            ],
            correctAnswer: 3
        },
        {
            subject: "Cyber Security",
            question: "Why is it important to update your Antivirus software every single week?",
            options: [
                "To make your Wi-Fi faster.",
                "So it can catch new viruses and delete them before they hurt your data.",
                "To clear your browsing history.",
                "To free up space on your hard drive."
            ],
            correctAnswer: 1
        },
        {
            subject: "Cyber Security",
            question: "What is the main danger of using Free Public Wi-Fi at a coffee shop?",
            options: [
                "The internet is too slow.",
                "A hacker sitting nearby can look into the invisible Wi-Fi waves and read your passwords.",
                "It will automatically delete your files.",
                "It will turn off your Two-Factor Authentication."
            ],
            correctAnswer: 1
        },
        {
            subject: "Computer Components",
            question: "What does a Graphics Processing Unit (GPU) excel at compared to a standard CPU?",
            options: [
                "Storing files permanently.",
                "Doing thousands of mathematical operations simultaneously to render images and video.",
                "Connecting to a Local Area Network.",
                "Cooling the motherboard."
            ],
            correctAnswer: 1
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
