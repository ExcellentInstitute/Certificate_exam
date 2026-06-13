const questionBank = {
    "CCA": { // Applicable for BCC, CCA, DCA, and PGDCA courses
        subjects: [
            "Computer Fundamentals", "Operating System Basics", 
            "MS Word", "MS Excel", "MS PowerPoint", 
            "Cyber Security", "Computer Components", "Typing Theory"
        ],
        mcqs: [
            // ==========================================
            // TYPING THEORY
            // ==========================================
            {
                subject: "Typing Theory",
                question: "What is Touch Typing?",
                options: [
                    "Typing while constantly looking at the keyboard.",
                    "The ability to type without using your sense of sight to find the keys.",
                    "Typing using only your index fingers.",
                    "Typing on a touchscreen mobile phone."
                ],
                correctAnswer: 1
            },
            {
                subject: "Typing Theory",
                question: "How many keys does a standard desktop computer keyboard have?",
                options: ["100 keys", "101 keys", "104 keys", "108 keys"],
                correctAnswer: 2
            },
            {
                subject: "Typing Theory",
                question: "Which two letters are the 'Guide Keys' that have a tiny physical bump on them?",
                options: ["A and S", "G and H", "F and J", "N and M"],
                correctAnswer: 2
            },
            {
                subject: "Typing Theory",
                question: "What is the Golden Rule for using the Shift key to type a single capital letter?",
                options: [
                    "Press Caps Lock before and after typing the letter.",
                    "Hold Shift with the pinky finger of the hand opposite to the letter you are typing.",
                    "Press both the left and right Shift keys at the same time.",
                    "Hold Shift with your thumb while typing."
                ],
                correctAnswer: 1
            },
            {
                subject: "Typing Theory",
                question: "Which keyboard shortcut is used to instantly lock your computer screen for security?",
                options: ["Ctrl + L", "Windows Key + L", "Alt + F4", "Ctrl + Shift + L"],
                correctAnswer: 1
            },
            {
                subject: "Typing Theory",
                question: "What is the proper posture for your wrists while typing?",
                options: [
                    "Rest them heavily on the desk.",
                    "Keep them bent downwards.",
                    "Keep them completely straight and floating just above the keyboard.",
                    "Rest them on the edge of the keyboard."
                ],
                correctAnswer: 2
            },

            // ==========================================
            // MS WORD
            // ==========================================
            {
                subject: "MS Word",
                question: "What is the function of the 'Format Painter' brush icon?",
                options: [
                    "It colors the background of the page.",
                    "It copies the design or handwriting style of text instantly to apply to new text.",
                    "It draws shapes and lines.",
                    "It highlights spelling mistakes."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS Word",
                question: "When you finish a chapter and want to start on a fresh page, what should you do?",
                options: [
                    "Press the 'Enter' key 20 times.",
                    "Press the 'Spacebar' continuously.",
                    "Go to the 'Insert' tab and click 'Page Break'.",
                    "Change the page size to A4."
                ],
                correctAnswer: 2
            },
            {
                subject: "MS Word",
                question: "If you insert a picture and it ruins your paragraphs, how do you fix it so text flows around the image?",
                options: [
                    "Delete the picture and insert it again.",
                    "Change the page margins to Narrow.",
                    "Click the picture, open 'Layout Options', and choose 'Square'.",
                    "Use the Enter key to push the text down."
                ],
                correctAnswer: 2
            },
            {
                subject: "MS Word",
                question: "What happens when you type text into a Header or Footer?",
                options: [
                    "It automatically copies that text to the top or bottom of every single page.",
                    "It turns the text into a faded watermark.",
                    "It deletes all other text on the page.",
                    "It creates a new blank document."
                ],
                correctAnswer: 0
            },
            {
                subject: "MS Word",
                question: "Which feature gives you a faded word or picture hiding behind your text, like an institute's name?",
                options: ["Page Borders", "SmartArt", "Watermark", "Text Box"],
                correctAnswer: 2
            },

            // ==========================================
            // MS EXCEL
            // ==========================================
            {
                subject: "MS Excel",
                question: "In MS Excel, what is a 'Cell'?",
                options: [
                    "A mathematical formula.",
                    "The box where a Row and a Column meet (like A1).",
                    "A type of graph or chart.",
                    "A tool used to format colors."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "What must you type first to tell Excel you are about to do a math calculation?",
                options: ["The Plus sign (+)", "The word MATH", "The Equals sign (=)", "The Hashtag (#)"],
                correctAnswer: 2
            },
            {
                subject: "MS Excel",
                question: "If you make a spelling mistake inside a box, which shortcut key allows you to jump inside the box to fix it without erasing the whole word?",
                options: ["F5", "F2", "F1", "F12"],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "What does the 'Freeze Panes' feature do?",
                options: [
                    "It stops the computer from freezing when working on big files.",
                    "It locks the top headings so they stay on the screen as you scroll down.",
                    "It prevents anyone from deleting the Excel file.",
                    "It turns the numbers into currency."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "Which smart robot tool watches your typing pattern and automatically fills in the rest of a list (like separating first and last names)?",
                options: ["AutoSum", "Flash Fill (Ctrl + E)", "Remove Duplicates", "Data Validation"],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "Which tool automatically colors a student's marks red if they fail, based on rules you set?",
                options: ["Format Painter", "Page Borders", "Conditional Formatting", "SmartArt"],
                correctAnswer: 2
            },
            {
                subject: "MS Excel",
                question: "If you have a shopping list with 20 items, how can you calculate the total instantly?",
                options: [
                    "Add them one by one using a calculator.",
                    "Use the 'AutoSum' button in the Home tab.",
                    "Use the 'Merge & Center' button.",
                    "Change the format to Currency."
                ],
                correctAnswer: 1
            },

            // ==========================================
            // MS POWERPOINT
            // ==========================================
            {
                subject: "MS PowerPoint",
                question: "In PowerPoint, what must you use if you want to type words onto a blank slide?",
                options: [
                    "Just click anywhere and type.",
                    "Use a Text Box.",
                    "Use a Watermark.",
                    "Insert a Table."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS PowerPoint",
                question: "What is the difference between a Transition and an Animation?",
                options: [
                    "There is no difference.",
                    "Transitions move things inside the slide; Animations move between whole slides.",
                    "Transitions move whole slides; Animations move the objects inside the slide.",
                    "Transitions are for text; Animations are for pictures."
                ],
                correctAnswer: 2
            },
            {
                subject: "MS PowerPoint",
                question: "While presenting to an audience, what does pressing the 'B' key do?",
                options: [
                    "It makes the text Bold.",
                    "It turns the projector screen pitch black to get the audience's attention.",
                    "It goes back to the previous slide.",
                    "It opens the web browser."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS PowerPoint",
                question: "How can you turn your mouse arrow into a glowing red laser dot while presenting?",
                options: [
                    "Hold down the 'Ctrl' key and left-click your mouse.",
                    "Press the 'L' key on the keyboard.",
                    "Right-click and select 'Draw'.",
                    "It requires a special physical laser pointer pen."
                ],
                correctAnswer: 0
            },
            {
                subject: "MS PowerPoint",
                question: "What does the 'Morph' transition do?",
                options: [
                    "It turns the slide completely black.",
                    "It automatically animates an object growing or moving smoothly from one slide to the next.",
                    "It plays a sound effect when the slide changes.",
                    "It groups pictures together."
                ],
                correctAnswer: 1
            },

            // ==========================================
            // CYBER SECURITY
            // ==========================================
            {
                subject: "Cyber Security",
                question: "What is a Trojan Horse in cyber security?",
                options: [
                    "A strong password generator.",
                    "A virus hiding in disguise, pretending to be a fun game or app.",
                    "A digital wall that blocks hackers.",
                    "An antivirus program that protects your computer."
                ],
                correctAnswer: 1
            },
            {
                subject: "Cyber Security",
                question: "What does 'Phishing' mean?",
                options: [
                    "Deleting old files from a hard drive.",
                    "When a hacker throws fake bait, like a fake email, to trick you into giving your password.",
                    "Connecting to a public Wi-Fi network.",
                    "Using a VPN to hide your internet traffic."
                ],
                correctAnswer: 1
            },
            {
                subject: "Cyber Security",
                question: "What is a VPN (Virtual Private Network) used for?",
                options: [
                    "To create strong passwords.",
                    "To clean the computer of temporary files.",
                    "To put internet traffic into an invisible, dark tunnel to keep it safe on public Wi-Fi.",
                    "To update the operating system automatically."
                ],
                correctAnswer: 2
            },
            {
                subject: "Cyber Security",
                question: "What does the tiny closed Padlock icon (HTTPS) in the browser address bar mean?",
                options: [
                    "The website is full of viruses.",
                    "The connection is safe and private.",
                    "Your computer is currently locked.",
                    "The website is downloading a file."
                ],
                correctAnswer: 1
            },
            {
                subject: "Cyber Security",
                question: "What is Two-Factor Authentication (2FA)?",
                options: [
                    "Using two different antivirus programs.",
                    "Typing your password twice to make sure it is correct.",
                    "A double-lock system where you need a password AND a secret OTP sent to your phone.",
                    "Having two user accounts on one computer."
                ],
                correctAnswer: 2
            },

            // ==========================================
            // COMPUTER FUNDAMENTALS & OS
            // ==========================================
            {
                subject: "Computer Fundamentals",
                question: "Who is known as the Father of the Computer?",
                options: ["Blaise Pascal", "John von Neumann", "Charles Babbage", "Howard H. Aiken"],
                correctAnswer: 2
            },
            {
                subject: "Computer Fundamentals",
                question: "Which type of computer is the biggest, fastest, and used strictly by scientists for deep space research?",
                options: ["Microcomputer", "Minicomputer", "Mainframe Computer", "Supercomputer"],
                correctAnswer: 3
            },
            {
                subject: "Computer Fundamentals",
                question: "What does the term 'Volatile' mean when discussing RAM (Random Access Memory)?",
                options: [
                    "It can store data permanently for years.",
                    "It forgets EVERYTHING if the electricity goes off.",
                    "It uses lasers to read data.",
                    "It can only be read from, not written to."
                ],
                correctAnswer: 1
            },
            {
                subject: "Computer Fundamentals",
                question: "How many Bytes make up a Kilobyte (KB)?",
                options: ["1,000 Bytes", "1,024 Bytes", "8 Bytes", "1,024 Megabytes"],
                correctAnswer: 1
            },
            {
                subject: "Operating System Basics",
                question: "Which operating system is open-source, highly resistant to viruses, and rarely crashes?",
                options: ["Microsoft Windows", "macOS", "Linux", "Android"],
                correctAnswer: 2
            },
            {
                subject: "Operating System Basics",
                question: "What is the correct way to uninstall a program cleanly in Windows?",
                options: [
                    "Manually delete the folder from 'Program Files'.",
                    "Drag the desktop icon into the Recycle Bin.",
                    "Use Control Panel > Programs and Features and click 'Uninstall'.",
                    "Turn off the computer while the program is running."
                ],
                correctAnswer: 2
            },

            // ==========================================
            // COMPUTER COMPONENTS
            // ==========================================
            {
                subject: "Computer Components",
                question: "What is the function of the Power Supply Unit (PSU)?",
                options: [
                    "It acts as the brain of the computer.",
                    "It renders 3D graphics for the monitor.",
                    "It converts high-voltage AC from the wall into steady, low-voltage DC for the components.",
                    "It stores files permanently even when turned off."
                ],
                correctAnswer: 2
            },
            {
                subject: "Computer Components",
                question: "What is the main difference between an HDD (Hard Disk Drive) and an SSD (Solid State Drive)?",
                options: [
                    "HDDs are for laptops, SSDs are for desktops.",
                    "HDDs use flash memory, SSDs use moving magnetic parts.",
                    "HDDs use moving magnetic parts and are slower; SSDs use flash memory and are much faster.",
                    "There is no difference in speed or parts."
                ],
                correctAnswer: 2
            },
            {
                subject: "Computer Components",
                question: "What does the CMOS Battery on the motherboard do?",
                options: [
                    "It powers the cooling fans.",
                    "It keeps the system clock running when the computer is unplugged.",
                    "It processes graphics.",
                    "It translates machine code into English."
                ],
                correctAnswer: 1
            }
            // ==========================================
            // BATCH 2: TYPING & SHORTCUTS
            // ==========================================
            {
                subject: "Typing Theory",
                question: "In touch typing, the invisible vertical line that divides the keyboard for your left and right hand passes directly between which keys?",
                options: ["A/S, D/F, G/H", "T/Y, G/H, B/N", "Q/W, E/R, T/Y", "Z/X, C/V, B/N"],
                correctAnswer: 1
            },
            {
                subject: "Typing Theory",
                question: "Which keyboard shortcut is used to quickly switch between open windows or programs?",
                options: ["Ctrl + Tab", "Alt + Tab", "Windows Key + D", "Shift + Arrow Keys"],
                correctAnswer: 1
            },
            {
                subject: "Typing Theory",
                question: "What does the shortcut 'Windows Key + D' do?",
                options: ["Deletes the selected file.", "Opens the Downloads folder.", "Minimizes all open windows to show the Desktop instantly.", "Disconnects from Wi-Fi."],
                correctAnswer: 2
            },
            {
                subject: "Typing Theory",
                question: "Which keyboard shortcut is used as an 'Undo' to erase the last mistake you just made?",
                options: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + X"],
                correctAnswer: 2
            },
            {
                subject: "Typing Theory",
                question: "To type the symbol on top of a number key (like @, #, $), which key must you hold down?",
                options: ["Alt", "Ctrl", "Shift", "Caps Lock"],
                correctAnswer: 2
            },

            // ==========================================
            // BATCH 2: MS WORD
            // ==========================================
            {
                subject: "MS Word",
                question: "What happens when you select 'Justify' alignment for your text in MS Word?",
                options: [
                    "It moves all text to the right side of the page.",
                    "It makes both the left and right sides of the paragraph perfectly straight.",
                    "It centers the text for a main title.",
                    "It makes the text bold and underlined."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS Word",
                question: "When writing a formal letter, how should you indent your paragraphs instead of pressing the Spacebar 20 times?",
                options: ["Press the 'Tab' key.", "Use the 'Format Painter'.", "Press 'Enter'.", "Change the Page Margins."],
                correctAnswer: 0
            },
            {
                subject: "MS Word",
                question: "If you want your text to read side-by-side exactly like a magazine, which feature should you use?",
                options: ["Tables", "Page Borders", "Columns", "SmartArt"],
                correctAnswer: 2
            },
            {
                subject: "MS Word",
                question: "What is 'SmartArt' used for in MS Word?",
                options: [
                    "To draw simple straight lines.",
                    "To insert a photograph from your computer.",
                    "To create beautiful, ready-made flowcharts and diagrams easily.",
                    "To copy the color of your text."
                ],
                correctAnswer: 2
            },

            // ==========================================
            // BATCH 2: MS EXCEL
            // ==========================================
            {
                subject: "MS Excel",
                question: "What does the tiny green dot (Autofill) at the bottom right corner of a selected cell do?",
                options: [
                    "It deletes the cell.",
                    "It magically guesses patterns and fills in data like days of the week.",
                    "It changes the text color to green.",
                    "It opens the formula menu."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "How do you properly add the values of Box A1 and Box B1 together in Excel?",
                options: ["Type: A1+B1", "Type: =A1+B1", "Type: Add A1 and B1", "Type: =SUM(A1+B1)"],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "Which Excel shortcut instantly creates a Bar Chart on your page?",
                options: ["Ctrl + C", "Alt + F1", "Shift + F3", "Ctrl + E"],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "If you have a huge list of mixed-up student names, how do you arrange them in alphabetical order?",
                options: [
                    "Use the 'Find and Replace' tool.",
                    "Go to the 'Data' tab and click 'Sort' from A to Z.",
                    "Use 'Conditional Formatting'.",
                    "Use 'Remove Duplicates'."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS Excel",
                question: "How do you automatically stretch a column to perfectly fit a long name that is hiding behind the next box?",
                options: [
                    "Delete the text and type a shorter name.",
                    "Merge and center the cells.",
                    "Double-click the line exactly between the column letters (like A and B).",
                    "Change the font size to 8."
                ],
                correctAnswer: 2
            },

            // ==========================================
            // BATCH 2: MS POWERPOINT
            // ==========================================
            {
                subject: "MS PowerPoint",
                question: "Unlike MS Word, how do you type freely anywhere on a blank PowerPoint slide?",
                options: [
                    "You cannot type freely in PowerPoint.",
                    "You must insert a 'Text Box' first.",
                    "You press Enter until you reach the spot.",
                    "You use the 'Format Background' tool."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS PowerPoint",
                question: "What does the 'Group' function do when you highlight multiple shapes or pictures?",
                options: [
                    "It deletes all the items at once.",
                    "It glues them together so they act like one single sticker.",
                    "It changes them all to the same color.",
                    "It moves them to a new slide."
                ],
                correctAnswer: 1
            },
            {
                subject: "MS PowerPoint",
                question: "Which shortcut key instantly starts your slideshow presentation from Slide 1?",
                options: ["F5", "Ctrl + P", "Alt + Tab", "Windows Key + S"],
                correctAnswer: 0
            },
            {
                subject: "MS PowerPoint",
                question: "What is the purpose of the 'Animation Pane'?",
                options: [
                    "To draw custom shapes.",
                    "To paint the background of the slide.",
                    "To show a list of every animation so you can drag them to change their order.",
                    "To check the spelling of your text."
                ],
                correctAnswer: 2
            },
            {
                subject: "MS PowerPoint",
                question: "In PowerPoint animations, what are Yellow stars ('Emphasis') used for?",
                options: [
                    "To make a picture fly onto the screen.",
                    "To make a picture fly away or disappear.",
                    "To make a picture pulse or spin to grab attention while it is already on screen.",
                    "To switch to the next slide."
                ],
                correctAnswer: 2
            },

            // ==========================================
            // BATCH 2: COMPUTER FUNDAMENTALS & COMPONENTS
            // ==========================================
            {
                subject: "Computer Fundamentals",
                question: "What does ALU stand for in the Central Processing Unit?",
                options: [
                    "Automated Logic Utility",
                    "Arithmetic Logic Unit",
                    "Advanced Learning Unit",
                    "Analog Local Unit"
                ],
                correctAnswer: 1
            },
            {
                subject: "Computer Fundamentals",
                question: "What is a 'Nibble' in computer memory?",
                options: ["1 Bit", "4 Bits grouped together", "8 Bits", "1,024 Bytes"],
                correctAnswer: 1
            },
            {
                subject: "Computer Fundamentals",
                question: "Which ancient invention from 3000 BC is considered the very first manual calculating toy with beads?",
                options: ["Pascaline", "Difference Engine", "Abacus", "ENIAC"],
                correctAnswer: 2
            },
            {
                subject: "Computer Fundamentals",
                question: "What was the name of India's first supercomputer?",
                options: ["EDVAC", "MARK 1", "PARAM", "IBM 650"],
                correctAnswer: 2
            },
            {
                subject: "Computer Components",
                question: "What type of connection does a modern M.2 NVMe SSD use?",
                options: [
                    "It plugs into a standard USB port.",
                    "It uses thick SATA cables.",
                    "It is a tiny stick-shaped drive that screws flat directly onto the motherboard.",
                    "It requires a floppy disk drive."
                ],
                correctAnswer: 2
            },
            {
                subject: "Computer Components",
                question: "Which of the following ports is preferred for high refresh rate monitors and multi-display setups?",
                options: ["VGA", "DisplayPort (DP)", "USB Type-B", "Ethernet (RJ-45)"],
                correctAnswer: 1
            },

            // ==========================================
            // BATCH 2: OPERATING SYSTEMS & NETWORKING
            // ==========================================
            {
                subject: "Operating System Basics",
                question: "Which key allows you to quickly 'Rename' a selected file or folder?",
                options: ["F2", "F5", "Ctrl + R", "Alt + N"],
                correctAnswer: 0
            },
            {
                subject: "Operating System Basics",
                question: "What does 'Device Management' do in an Operating System?",
                options: [
                    "It uses 'Drivers' to communicate with hardware like keyboards and printers.",
                    "It allocates CPU time to active programs.",
                    "It tracks the primary memory (RAM).",
                    "It creates user passwords."
                ],
                correctAnswer: 0
            },
            {
                subject: "Operating System Basics",
                question: "What is the primary function of the 'Startup Tab' in the Task Manager?",
                options: [
                    "To start a new Word document.",
                    "To show and disable programs that launch automatically when you turn on the computer.",
                    "To check Wi-Fi speed.",
                    "To install new software."
                ],
                correctAnswer: 1
            },
            {
                subject: "Computer Networking Basics",
                question: "What type of network connects computers inside one single room, school, or house?",
                options: ["WAN (Wide Area Network)", "MAN (Metropolitan Area Network)", "LAN (Local Area Network)", "VPN (Virtual Private Network)"],
                correctAnswer: 2
            }
        ],

        // ==========================================
        // 50-MARK PARAGRAPH TYPING TESTS (Array of 2)
        // ==========================================
        typingTests: [
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
        ]
    }
    
};
