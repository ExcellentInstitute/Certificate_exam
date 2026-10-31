// ============================================================================
// EXCELLENT INSTITUTE - MASTER COURSE BOOKS, PRACTICALS & 50 VIVA BANK
// ============================================================================

// ==========================================
// 1. TALLY PRIME 7.0 & ACCOUNTING BOOK MCQs
// ==========================================
const tallyBookMCQs = [
    // I. Introduction to Accounting (Modules 1, 2, 3)
    { subject: "Introduction to Accounting", question: "According to the Business Entity Concept, the business and the owner are treated as:", options: ["The exact same person", "Two completely separate entities", "Partners sharing salary", "Government bodies"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "When the owner puts personal money into the business cash box, what is this investment called?", options: ["Drawings", "Capital", "Direct Income", "Creditor Loan"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "If the owner takes ₹500 from the shop's cash box to buy a birthday gift for his son, it is recorded as:", options: ["Capital", "Office Expense", "Drawings", "Sundry Debtors"], correctAnswer: 2 },
    { subject: "Introduction to Accounting", question: "If a mobile shop buys Samsung phones to resell for profit, they are called 'Goods'. If it buys an AC for the office wall, what is the AC called?", options: ["Stock", "Liability", "Asset", "Debtor"], correctAnswer: 2 },
    { subject: "Introduction to Accounting", question: "Customers who buy goods from you on credit (udhaar) and owe you money are called:", options: ["Sundry Creditors (Liabilities)", "Sundry Debtors (Assets)", "Nominal Accounts", "Promoters"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "Suppliers from whom you buy goods on credit (udhaar) and whom you must pay later are called:", options: ["Sundry Debtors", "Fixed Assets", "Sundry Creditors", "Drawings"], correctAnswer: 2 },
    { subject: "Introduction to Accounting", question: "What is the Golden Rule for a Real Account (Assets & Properties)?", options: ["Debit the Receiver, Credit the Giver", "Debit what comes in, Credit what goes out", "Debit all Expenses, Credit all Incomes", "Debit Liabilities, Credit Assets"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "What is the Golden Rule for a Personal Account (People, Banks & Companies)?", options: ["Debit what comes in, Credit what goes out", "Debit the Receiver, Credit the Giver", "Debit all Expenses & Losses, Credit all Incomes & Gains", "Debit Incomes, Credit Expenses"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "What is the Golden Rule for a Nominal Account (Incomes & Expenses)?", options: ["Debit all Expenses and Losses, Credit all Incomes and Gains", "Debit what comes in, Credit what goes out", "Debit the Receiver, Credit the Giver", "Debit Assets, Credit Capital"], correctAnswer: 0 },
    { subject: "Introduction to Accounting", question: "Why is a Bank Account (e.g., SBI Bank A/c) classified as a Personal Account?", options: ["Because cash is tangible", "Because a Bank is an artificial legal person receiving or giving money", "Because it is an expense", "Because it is a non-cash adjustment"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "In a Journal entry, what is the short sentence written at the bottom to explain the transaction called?", options: ["Ledger", "Trial Balance", "Narration", "Folio"], correctAnswer: 2 },
    { subject: "Introduction to Accounting", question: "Which statement lists the final balances of every ledger to verify that total Debits equal total Credits?", options: ["Trial Balance", "Cash Memo", "Day Book", "Contra Note"], correctAnswer: 0 },
    { subject: "Introduction to Accounting", question: "In Final Accounts, which account calculates Gross Profit (Sales minus Purchase cost)?", options: ["Profit & Loss A/c", "Trading A/c", "Balance Sheet", "Trial Balance"], correctAnswer: 1 },

    // II. Basics of Tally (Module 4)
    { subject: "Basics of Tally", question: "In Tally Prime's free Educational Mode, on which dates of any month can you record transactions?", options: ["Every date of the month", "Only the 1st, 2nd, and 31st of any month", "Only the 1st and 15th", "Only Sundays"], correctAnswer: 1 },
    { subject: "Basics of Tally", question: "Which shortcut opens the 'Go To' search bar from anywhere in Tally Prime?", options: ["Alt + K", "Alt + G", "Ctrl + A", "Alt + Y"], correctAnswer: 1 },
    { subject: "Basics of Tally", question: "What does the shortcut 'Ctrl + A' do inside Tally Prime?", options: ["Selects all text", "Quick Save (instantly accepts and saves the current screen)", "Cancels a voucher", "Opens Company Features"], correctAnswer: 1 },
    { subject: "Basics of Tally", question: "In Tally Prime's top menu bar, what do a single underline (e.g., K) and a double underline indicate?", options: ["Single = Shift, Double = Alt", "Single = Alt, Double = Ctrl", "Single = Ctrl, Double = Alt", "Single = Tab, Double = Enter"], correctAnswer: 1 },
    { subject: "Basics of Tally", question: "Which top menu shortcut opens the 'Company' menu vs. the 'Data' menu in Tally Prime?", options: ["Alt + K (Company) and Alt + Y (Data)", "Alt + G (Company) and Alt + Z (Data)", "Ctrl + C and Ctrl + D", "F1 and F2"], correctAnswer: 0 },
    { subject: "Basics of Tally", question: "What is the safe way to close Tally Prime without corrupting data?", options: ["Click the top-right X button", "Go to Gateway of Tally, press Escape (Esc), and press 'Y'", "Turn off the UPS directly", "Press Alt + F4 during voucher entry"], correctAnswer: 1 },

    // III. Company Creation & Ledger Management (Module 5)
    { subject: "Company Creation & Ledger Management", question: "Which Function key opens 'Company Features' to enable or disable Inventory, GST, and Payroll?", options: ["F1", "F11", "F12", "Alt + H"], correctAnswer: 1 },
    { subject: "Company Creation & Ledger Management", question: "How many Pre-defined Accounting Groups exist in Tally Prime?", options: ["15 Groups", "28 Groups (15 Primary, 13 Sub-groups)", "42 Groups", "13 Groups"], correctAnswer: 1 },
    { subject: "Company Creation & Ledger Management", question: "Which two default ledgers are pre-created automatically in a new Tally company?", options: ["Sales and Purchase", "Cash and Profit & Loss A/c", "Capital and Drawings", "CGST and SGST"], correctAnswer: 1 },
    { subject: "Company Creation & Ledger Management", question: "Under which Tally group must 'Office Rent', 'Staff Salary', and 'Electricity Bill' be placed?", options: ["Direct Expenses", "Fixed Assets", "Indirect Expenses", "Current Liabilities"], correctAnswer: 2 },
    { subject: "Company Creation & Ledger Management", question: "In Chart of Accounts > Ledgers, which shortcut opens 'Multi Masters' to alter multiple opening balances rapidly?", options: ["Alt + H", "Ctrl + H", "Alt + X", "Ctrl + F"], correctAnswer: 0 },

    // IV. Voucher Entry in Tally (Module 6)
    { subject: "Voucher Entry in Tally", question: "Which voucher (F4) is used ONLY for internal money movement between Cash and Bank accounts?", options: ["Payment Voucher", "Receipt Voucher", "Contra Voucher", "Journal Voucher"], correctAnswer: 2 },
    { subject: "Voucher Entry in Tally", question: "If you withdraw cash from the bank ATM for office use, which voucher do you pass in Tally?", options: ["Payment (F5)", "Contra (F4)", "Receipt (F6)", "Journal (F7)"], correctAnswer: 1 },
    { subject: "Voucher Entry in Tally", question: "Which voucher is used strictly when money goes OUT of the business (e.g., paying a supplier or rent)?", options: ["Contra (F4)", "Payment (F5)", "Receipt (F6)", "Journal (F7)"], correctAnswer: 1 },
    { subject: "Voucher Entry in Tally", question: "Which voucher is used strictly when money comes INTO the business (e.g., customer pays a bill or owner brings Capital)?", options: ["Payment (F5)", "Receipt (F6)", "Sales (F8)", "Contra (F4)"], correctAnswer: 1 },
    { subject: "Voucher Entry in Tally", question: "Which voucher (F7) is used for non-cash adjustments like Depreciation or buying Fixed Assets on credit?", options: ["Journal Voucher", "Contra Voucher", "Purchase Voucher", "Receipt Voucher"], correctAnswer: 0 },
    { subject: "Voucher Entry in Tally", question: "What are the shortcut keys for Sales and Purchase vouchers in Tally Prime?", options: ["F5 and F6", "F8 (Sales) and F9 (Purchase)", "F7 and F8", "Alt+F5 and Alt+F6"], correctAnswer: 1 },
    { subject: "Voucher Entry in Tally", question: "In Sales (F8) or Purchase (F9), which shortcut lets you 'Change Mode' between Item Invoice and Accounting Voucher?", options: ["Ctrl + H", "Alt + H", "Ctrl + A", "Alt + G"], correctAnswer: 0 },
    { subject: "Voucher Entry in Tally", question: "Which voucher is used for a Purchase Return (returning damaged goods to a supplier) vs. Sales Return?", options: ["Debit Note (Alt+F5) for Purchase Return; Credit Note (Alt+F6) for Sales Return", "Credit Note for Purchase Return; Debit Note for Sales Return", "F8 and F9", "F4 and F7"], correctAnswer: 0 },
    { subject: "Voucher Entry in Tally", question: "In the Day Book, which shortcut safely cancels a voucher?", options: ["Alt + X", "Ctrl + Z", "Alt + C", "Ctrl + F"], correctAnswer: 0 },

    // V. Inventory Management (Module 7)
    { subject: "Inventory Management", question: "When creating a Simple Unit of Measure (like PCS), what code must be selected for GST e-Way bill compliance?", options: ["IFSC Code", "UQC (Unique Quantity Code)", "MICR Code", "PIN Code"], correctAnswer: 1 },
    { subject: "Inventory Management", question: "A unit defined as 'Box of 10 PCS' in Tally Prime is known as a:", options: ["Simple Unit", "Compound Unit", "Primary Group", "Cost Centre"], correctAnswer: 1 },
    { subject: "Inventory Management", question: "What is the name of the default Godown present in Tally Prime?", options: ["Main Location", "Central Store", "Godown 1", "Shop Floor"], correctAnswer: 0 },
    { subject: "Inventory Management", question: "Which voucher (Alt + F7) is used to physically transfer stock from 'Warehouse A' to 'Main Shop'?", options: ["Contra Voucher", "Stock Journal", "Journal Voucher", "Delivery Note"], correctAnswer: 1 },
    { subject: "Inventory Management", question: "In the Stock Summary report, which shortcut switches to the 'Detailed' view?", options: ["Alt + F5", "Ctrl + H", "F11", "Alt + X"], correctAnswer: 0 },

    // VI. Taxation in Tally (GST, TDS, TCS) (Module 8)
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "How many digits are in an official Indian GSTIN?", options: ["10 digits", "12 digits", "15 digits", "14 digits"], correctAnswer: 2 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "Under which primary group must CGST, SGST, and IGST ledgers be placed?", options: ["Indirect Expenses", "Duties & Taxes", "Current Assets", "Provisions"], correctAnswer: 1 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "Which GST ledgers are applied for a local (inside-state) sale vs. an interstate (outside-state) sale?", options: ["CGST & SGST for local; IGST for interstate", "IGST for local; CGST & SGST for interstate", "Only CGST for both", "TDS for interstate"], correctAnswer: 0 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "Which GST report in Tally shows Outward Supplies (sales invoices) vs. the monthly Summary Return?", options: ["GSTR-1 (Outward Supplies) and GSTR-3B (Summary Return)", "GSTR-2A and GSTR-9", "BRS and Trial Balance", "TDS Form 26Q"], correctAnswer: 0 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "In GSTR-1, where are invoices with missing or invalid GSTINs placed until corrected?", options: ["B2B Invoices", "Uncertain Transactions", "HSN Summary", "Nil Rated"], correctAnswer: 1 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "Which voucher is typically used first to record an Audit Expense and deduct TDS before making payment?", options: ["Contra (F4)", "Journal Voucher (F7)", "Receipt (F6)", "Sales (F8)"], correctAnswer: 1 },

    // VII. Payroll & Employee Records (Module 9)
    { subject: "Payroll & Employee Records", question: "In Tally Payroll, how are 'Basic Pay' and 'PF Deduction' classified under Pay Head types?", options: ["Basic Pay = Earnings for Employees; PF = Employees Statutory Deduction", "Both are Indirect Incomes", "Basic Pay = Deduction; PF = Earning", "Both are Current Assets"], correctAnswer: 0 },
    { subject: "Payroll & Employee Records", question: "When creating 'Present' and 'Absent' Attendance types, how are they configured?", options: ["Present = Leave with Pay; Absent = Leave without Pay", "Present = Leave without Pay; Absent = Leave with Pay", "Both are Production types", "Both are Overtime"], correctAnswer: 0 },
    { subject: "Payroll & Employee Records", question: "In a Payroll Voucher, which shortcut triggers 'Payroll Autofill' to process salaries for a whole department at once?", options: ["Ctrl + F", "Alt + G", "Ctrl + A", "Alt + X"], correctAnswer: 0 },

    // VIII. Banking Features in Tally (Module 10)
    { subject: "Banking Features in Tally", question: "Which Tally feature aligns your software bank balance with your physical bank passbook by entering clearance dates?", options: ["Trial Balance", "Bank Reconciliation Statement (BRS)", "Stock Summary", "Ratio Analysis"], correctAnswer: 1 },
    { subject: "Banking Features in Tally", question: "In the Bank Reconciliation screen, what date do you type to clear a transaction?", options: ["Voucher Date", "Bank Date (actual clearance date on the bank statement)", "Financial Year Date", "Invoice Date"], correctAnswer: 1 },
    { subject: "Banking Features in Tally", question: "Before printing on a real physical cheque leaf in Tally, what should you always check first?", options: ["Print Preview", "Day Book Cancel", "Stock Journal", "GSTR-1"], correctAnswer: 0 }
];

// ==========================================
// 2. PHOTOSHOP & GRAPHICS DESIGNING MCQs (FROM data.js)
// ==========================================
const photoshopAndGraphicsMCQs = [
    // VI. Photoshop & Image Editing (Chapters 1 - 4)
    { subject: "Photoshop & Image Editing", question: "In Adobe Photoshop 7.0, where are the 'Toolbox' and 'Layers' panel located on the screen?", options: ["Toolbox on the right, Layers on the left", "Toolbox on the left, Layers on the right", "Both at the bottom", "Both at the top"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "Which keyboard key instantly hides or shows all tool menus in Photoshop 7.0?", options: ["Esc", "Tab", "Spacebar", "Caps Lock"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "If you have not finished editing a design in Photoshop and want to edit its layers tomorrow, which format should you save it as?", options: [".JPG", ".PNG", ".PSD", ".PDF"], correctAnswer: 2 },
    { subject: "Photoshop & Image Editing", question: "What is the keyboard shortcut for 'Save As' in Photoshop?", options: ["Ctrl + O", "Ctrl + Shift + S", "Ctrl + P", "Alt + I"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "Which single-letter shortcut selects the Crop Tool in Photoshop?", options: ["V", "W", "C", "T"], correctAnswer: 2 },
    { subject: "Photoshop & Image Editing", question: "When resizing a photo for an online government form (e.g., 200x200 pixels), which shortcut opens the 'Image Size' menu?", options: ["Alt + I, I", "Ctrl + L", "Ctrl + M", "Ctrl + B"], correctAnswer: 0 },
    { subject: "Photoshop & Image Editing", question: "Which option in the File menu helps compress a resized photo's file size under 50KB for online forms?", options: ["File > Print", "File > Save for Web", "File > Revert", "Edit > Stroke"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "How do you draw a neat black border/frame around an entire photo in Photoshop?", options: ["Select all (Ctrl+A), then go to Edit > Stroke", "Press Ctrl+T", "Use the Magic Wand Tool", "Go to Filter > Blur"], correctAnswer: 0 },
    { subject: "Photoshop & Image Editing", question: "What are the standard dimensions and resolution typed in the top bar for a Passport Size Photo?", options: ["Width: 10 cm, Height: 10 cm, Resolution: 72", "Width: 3.5 cm, Height: 4.5 cm, Resolution: 300", "Width: 4 inches, Height: 6 inches, Resolution: 100", "Width: 200 px, Height: 200 px, Resolution: 50"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "Which tool (shortcut 'V') is used to drag a passport photo onto a new 4x6 inch paper?", options: ["Crop Tool", "Move Tool", "Magic Wand Tool", "Clone Stamp Tool"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "While using the Move Tool in Photoshop, which key do you hold while dragging a photo to duplicate it instantly?", options: ["Shift", "Ctrl", "Alt", "Tab"], correctAnswer: 2 },
    { subject: "Photoshop & Image Editing", question: "Which keyboard shortcuts open 'Curves' and 'Levels' to clean up grey scanned certificates?", options: ["Ctrl + M (Curves) and Ctrl + L (Levels)", "Ctrl + C and Ctrl + V", "Ctrl + T and Ctrl + B", "Alt + F4"], correctAnswer: 0 },
    { subject: "Photoshop & Image Editing", question: "Which tool (shortcut 'W') selects the white background around a signature so you can delete it and make it transparent?", options: ["Text Tool", "Magic Wand Tool", "Crop Tool", "Eraser Tool"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "What must you do to the 'Background' layer before pressing Delete to make a signature's background transparent?", options: ["Double-click the 'Background' layer to unlock it", "Flatten the image", "Convert it to CMYK", "Press Ctrl + P"], correctAnswer: 0 },
    { subject: "Photoshop & Image Editing", question: "Which filter makes a blurry photo crisp and sharp in Photoshop?", options: ["Filter > Blur > Gaussian Blur", "Filter > Sharpen > Unsharp Mask", "Edit > Stroke", "Image > Mode"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "Which tool copies clean skin to paint over pimples or marks on a face?", options: ["Magic Wand Tool", "Clone Stamp Tool", "Crop Tool", "Hand Tool"], correctAnswer: 1 },
    { subject: "Photoshop & Image Editing", question: "Which shortcut opens 'Color Balance' to fix yellow or blue skin tones?", options: ["Ctrl + B", "Ctrl + L", "Ctrl + T", "Ctrl + O"], correctAnswer: 0 },
    { subject: "Photoshop & Image Editing", question: "Which file format should you use ONLY for Signatures and Logos because it saves the transparent background?", options: ["JPG", "PNG", "BMP", "TXT"], correctAnswer: 1 },

    // VII. Graphics Designing (Chapters 5 - 6)
    { subject: "Graphics Designing", question: "For readable banner design, which color combination follows the rule of strong contrast?", options: ["Dark blue text on a black background", "Yellow text on a Blue background", "Light grey text on a white background", "Black text on a dark brown background"], correctAnswer: 1 },
    { subject: "Graphics Designing", question: "Which shortcut in Photoshop allows you to transform, resize, and freely rotate text?", options: ["Ctrl + T", "Ctrl + L", "Ctrl + B", "Ctrl + M"], correctAnswer: 0 },
    { subject: "Graphics Designing", question: "What are the ideal New Document settings for a square Facebook or Instagram social media post?", options: ["1080 x 1080 Pixels, Resolution 72", "3.5 x 4.5 cm, Resolution 300", "72 x 36 Inches, Resolution 300", "200 x 200 Pixels, Resolution 10"], correctAnswer: 0 },
    { subject: "Graphics Designing", question: "When designing a 6-foot by 3-foot shop flex board in Photoshop, what Width and Height in inches should you enter (since 1 Foot = 12 Inches)?", options: ["Width: 6 inches, Height: 3 inches", "Width: 72 inches, Height: 36 inches", "Width: 60 inches, Height: 30 inches", "Width: 1080 inches, Height: 1080 inches"], correctAnswer: 1 },
    { subject: "Graphics Designing", question: "Which color mode must you use (Image > Mode) when designing a Marriage Card for a physical printing press?", options: ["RGB Color", "CMYK Color (Cyan, Magenta, Yellow, Black)", "Lab Color", "Bitmap"], correctAnswer: 1 },
    { subject: "Graphics Designing", question: "What are the standard dimensions and resolution for a crisp A4 size print document?", options: ["210 x 297 mm with 300 Resolution", "100 x 100 mm with 72 Resolution", "1080 x 1080 px with 72 Resolution", "4 x 6 inches with 50 Resolution"], correctAnswer: 0 },
    { subject: "Graphics Designing", question: "How much blank 'bleed' margin should you leave on the edges of a marriage card so the printer doesn't cut your text off?", options: ["0.5-inch blank margin", "5-inch blank margin", "Zero margin", "10-inch margin"], correctAnswer: 0 },
    { subject: "Graphics Designing", question: "Which free website and mobile app offers thousands of ready-made drag-and-drop templates to create urgent posters in 5 minutes?", options: ["MS Paint", "Canva", "Notepad", "VLC Player"], correctAnswer: 1 }
];

// ==========================================
// 3. DIGITAL SERVICES & INTERNET BOOKS MCQs
// ==========================================
const digitalAndInternetMCQs = [
    // Digital Services (from digital-data.js)
    { subject: "Digital Services", question: "Which official government portal is used to download an e-Aadhaar card?", options: ["myaadhaar.uidai.gov.in", "irctc.co.in", "pmkisan.gov.in", "osrtc.in"], correctAnswer: 0 },
    { subject: "Digital Services", question: "What is the password format required to open a downloaded e-Aadhaar PDF file?", options: ["Your 10-digit mobile number", "First 4 letters of your name in CAPITAL letters followed by your birth year (e.g., RAHU2005)", "Full Date of Birth in DDMMYYYY format", "Your PIN code"], correctAnswer: 1 },
    { subject: "Digital Services", question: "What is the password format required to open a downloaded e-PAN Card PDF from the NSDL portal?", options: ["First 4 letters of name + birth year", "Full Date of Birth in DDMMYYYY format (e.g., 15081999)", "Your 10-digit PAN number", "123456"], correctAnswer: 1 },
    { subject: "Digital Services", question: "What is the digital version of the Voter ID card downloaded from voters.eci.gov.in called?", options: ["e-PAN", "e-EPIC", "e-Patta", "e-Ticket"], correctAnswer: 1 },
    { subject: "Digital Services", question: "Under which law are documents stored in the Government of India's DigiLocker legally equal to original paper documents?", options: ["IT Act, 2000", "GST Act, 2017", "Motor Vehicles Act, 1950", "Banking Act, 1995"], correctAnswer: 0 },
    { subject: "Digital Services", question: "When paying an electricity bill online (e.g., on the TPCODL portal), what number from the old paper bill is needed?", options: ["EPIC Number", "Consumer Number (or Account Number)", "PNR Number", "Vehicle RC Number"], correctAnswer: 1 },
    { subject: "Digital Services", question: "Which official portal is used to book Indian Railways train tickets, and what 10-digit number is generated on a confirmed ticket?", options: ["IRCTC portal (generates a 10-digit PNR number)", "OSRTC portal (generates a 12-digit EPIC)", "UIDAI portal", "NSDL portal"], correctAnswer: 0 },
    { subject: "Digital Services", question: "Which official portal is used to book State Transport bus tickets across Odisha?", options: ["irctc.co.in", "osrtc.in", "pmkisan.gov.in", "voters.eci.gov.in"], correctAnswer: 1 },
    { subject: "Digital Services", question: "When registering a farmer on the PM-Kisan portal, which document containing Khata and Plot numbers must be uploaded as a scanned PDF?", options: ["Driving License", "Land Patta", "Electricity Bill", "Train Ticket"], correctAnswer: 1 },
    { subject: "Digital Services", question: "What does CSC stand for, and which exam must you pass to legally open a CSC center?", options: ["Common Service Centre (requires passing the TEC exam)", "Central Software Company (requires DCA)", "Computer System Center (requires PGDCA)", "Cyber Safety Club"], correctAnswer: 0 },
    { subject: "Digital Services", question: "If a person loses money to an online cyber scam, which National Cyber Crime Helpline number should they call immediately?", options: ["100", "1930", "108", "1800"], correctAnswer: 1 },
    { subject: "Digital Services", question: "How long is an OTP (One Time Password) typically valid before you must click 'Resend OTP'?", options: ["5 to 10 minutes", "24 hours", "7 days", "30 days"], correctAnswer: 0 },
    { subject: "Digital Services", question: "When saving an online application's final Acknowledgement Slip without a print button, how do you save a digital proof copy?", options: ["Press Ctrl + P and change Destination to 'Save as PDF'", "Press Alt + F4", "Press Ctrl + Z", "Close the browser"], correctAnswer: 0 },

    // Internet & Email Usage (from internet-data.js)
    { subject: "Internet & Email Usage", question: "What is the difference between Google Chrome and Google?", options: ["Google Chrome is the web browser app; Google is the search engine librarian", "They are hardware parts", "Google is an antivirus", "Chrome is an email address"], correctAnswer: 0 },
    { subject: "Internet & Email Usage", question: "In Gmail, which button do you click to start writing a new email, and which icon attaches a photo or PDF?", options: ["Click 'Compose' to write; click the 'Paperclip' icon to attach files", "Click 'Inbox' to write; click the 'Trash' icon to attach", "Click 'Spam'; click 'Star'", "Click 'Refresh'"], correctAnswer: 0 },
    { subject: "Internet & Email Usage", question: "Official Indian Government websites usually end with which domain extensions?", options: [".com or .net", ".gov.in or .nic.in", ".org or .edu", ".uk or .us"], correctAnswer: 1 },
    { subject: "Internet & Email Usage", question: "Which smartphone setting must be turned on for Google Maps to find your current location using satellites?", options: ["Bluetooth", "Location / GPS", "Airplane Mode", "Flashlight"], correctAnswer: 1 },
    { subject: "Internet & Email Usage", question: "Which Google tool instantly translates English text or spoken voice into Odia or Hindi?", options: ["Google Maps", "Google Translate", "Google Drive", "Google Sheets"], correctAnswer: 1 }
];

// ==========================================
// 4. PGDCA: C & DATA STRUCTURES + WEB DESIGN MCQs
// ==========================================
const pgdcaProgrammingAndWebMCQs = [
    // II. Programming in C & Data Structures (from c-data.js)
    { subject: "Programming in C & Data Structures", question: "Who created the C programming language in 1972?", options: ["Charles Babbage", "Dennis Ritchie", "Bill Gates", "Tim Berners-Lee"], correctAnswer: 1 },
    { subject: "Programming in C & Data Structures", question: "In C syntax, what punctuation mark must end almost every statement?", options: ["Full stop (.)", "Semicolon (;)", "Colon (:)", "Comma (,)"], correctAnswer: 1 },
    { subject: "Programming in C & Data Structures", question: "Which function is the starting entry point of every C program, and which header file provides 'printf'?", options: ["int main() and #include <stdio.h>", "void start() and #include <math.h>", "main.c and #include <html.h>", "system() and #include <dos.h>"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "Which C data types store whole numbers, decimal numbers, and single characters respectively?", options: ["int, float, char", "number, decimal, letter", "var, let, const", "str, num, bool"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "What are the correct Format Specifiers in C for printing an int, a float, and a char?", options: ["%d (int), %f (float), %c (char)", "%i, %d, %s", "%a, %b, %c", "#d, #f, #c"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "What does the Modulo operator (%) calculate in C (e.g., 10 % 3)?", options: ["Percentage", "The remainder of a division (1)", "Multiplication", "Memory address"], correctAnswer: 1 },
    { subject: "Programming in C & Data Structures", question: "In C logical operators, what do '&&' and '||' mean?", options: ["&& means AND (both true); || means OR (at least one true)", "&& means OR; || means AND", "Both mean equals", "Bitwise shift"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "Which loop in C executes its code block ONCE first before checking the condition?", options: ["for loop", "while loop", "do-while loop", "switch case"], correctAnswer: 2 },
    { subject: "Programming in C & Data Structures", question: "In C, at what index number does an Array always start counting, and what character marks the end of a String?", options: ["Starts at index 0; ends with the Null Terminator ('\\0')", "Starts at index 1; ends with '.'", "Starts at -1; ends with '#'", "Starts at 0; ends with ';'"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "What is the role of '&' and '*' when working with Pointers in C?", options: ["'&' gets the Memory Address of a variable; '*' (Pointer) accesses the value at that address", "'&' adds numbers; '*' multiplies strings", "Both delete variables", "'&' creates an array"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "Which C keyword bundles different data types (e.g., name, roll, marks) together into one custom record?", options: ["array", "struct", "switch", "float"], correctAnswer: 1 },
    { subject: "Programming in C & Data Structures", question: "Which C function allocates Dynamic Memory while the program is running?", options: ["printf()", "malloc()", "scanf()", "main()"], correctAnswer: 1 },
    { subject: "Programming in C & Data Structures", question: "What is the difference between a Stack and a Queue data structure?", options: ["Stack follows LIFO (Last In, First Out); Queue follows FIFO (First In, First Out)", "Stack follows FIFO; Queue follows LIFO", "Both are trees", "Stack is only for strings"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "In a Binary Search Tree (BST), where are smaller values placed compared to the parent node?", options: ["Smaller values go to the Left Child; larger values go to the Right Child", "Smaller values go to the Right Child", "All values stay in the Root", "Placed randomly"], correctAnswer: 0 },

    // IV. Web Designing using HTML, CSS & JavaScript (from pgdca-web-data.js)
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "In the robot analogy of Web Design, what do HTML, CSS, and JavaScript represent?", options: ["HTML = Skeleton, CSS = Skin/Clothes (Styling), JavaScript = Brain/Muscles (Interactivity)", "HTML = Brain, CSS = Skeleton, JS = Paint", "All three are databases", "HTML is only for servers"], correctAnswer: 0 },
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "Which HTML tag creates a bulleted list vs. a numbered list?", options: ["<ul> for bulleted (Unordered); <ol> for numbered (Ordered)", "<ol> for bullets; <ul> for numbers", "<table> and <tr>", "<h1> and <p>"], correctAnswer: 0 },
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "In an HTML <table>, what do <tr>, <th>, and <td> represent?", options: ["<tr> = Table Row, <th> = bold Table Header, <td> = Table Data cell", "<tr> = Text Right, <th> = Theme, <td> = Title", "All create columns", "They are CSS properties"], correctAnswer: 0 },
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "What are the 3 ways to include CSS, and which one uses a separate .css file to style 100 pages at once?", options: ["Inline, Internal, and External CSS (External uses a separate file)", "Top, Middle, Bottom CSS", "Local, Global, Cloud CSS", "HTML, XML, JSON"], correctAnswer: 0 },
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "Which CSS property turns a square <div> (width 80px, height 80px) into a perfect circle?", options: ["border-radius: 50%;", "text-align: center;", "display: flex;", "font-size: 50px;"], correctAnswer: 0 },
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "What is the difference between CSS Flexbox (display: flex) and CSS Grid (display: grid)?", options: ["Flexbox is for 1-Dimensional layouts (row or column); Grid is for 2-Dimensional layouts (rows AND columns)", "Flexbox is for colors; Grid is for fonts", "Grid is JavaScript", "They are identical"], correctAnswer: 0 },
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "In JavaScript, which DOM method grabs an HTML element by its id attribute to change its text or style live?", options: ["document.getElementById()", "window.print()", "console.log()", "Math.random()"], correctAnswer: 0 },
    { subject: "Web Designing using HTML, CSS & JavaScript", question: "Which CSS rule detects mobile screen sizes for Responsive Design, and which free service hosts static HTML/CSS/JS folders via drag-and-drop?", options: ["CSS Media Queries (@media) and Netlify Drop", "CSS Tables and MS Word", "C Compiler and Tally", "Bootstrap and Paint"], correctAnswer: 0 }
];

// ==========================================
// 5. DCA ADVANCED BASICS, OS, HARDWARE & MULTIMEDIA MCQs
// ==========================================
const dcaAdvancedFoundationMCQs = [
    { subject: "Basics of Computer", question: "Match the 5 Computer Generations with their core technology in order (1st to 5th):", options: ["1st: Vacuum Tubes, 2nd: Transistors, 3rd: Integrated Circuits (IC), 4th: Microprocessors, 5th: AI", "1st: AI, 2nd: IC, 3rd: Vacuum Tubes, 4th: Transistors, 5th: Microprocessors", "All used Microprocessors", "1st: Transistors, 2nd: Vacuum Tubes"], correctAnswer: 0 },
    { subject: "Basics of Computer", question: "What was the name of India's first indigenous Supercomputer, and who invented the world's first Supercomputer (CDC-1604)?", options: ["PARAM (India) and Seymour Cray (CDC-1604)", "ENIAC and Charles Babbage", "IBM 650 and Blaise Pascal", "EDVAC and John von Neumann"], correctAnswer: 0 },
    { subject: "Basics of Computer", question: "What is the difference between Cold Booting and Warm Booting?", options: ["Cold Booting = turning on a PC from a completely off state; Warm Booting = restarting an already running PC", "Cold Booting = restarting in winter; Warm Booting = turning on in summer", "Warm Booting formats the hard disk", "There is no difference"], correctAnswer: 0 },
    { subject: "Basics of Computer", question: "How many Bits make up 1 Nibble, and what is the difference between Soft Copy and Hard Copy?", options: ["4 Bits = 1 Nibble; Monitor shows Soft Copy, Printer prints Hard Copy on paper", "8 Bits = 1 Nibble; Printer shows Soft Copy", "1024 Bits = 1 Nibble", "2 Bits = 1 Nibble"], correctAnswer: 0 },
    { subject: "Basics of Computer", question: "Inside the CPU, what are Registers, System Buses (Data, Address, Control), and the VRM?", options: ["Registers = fastest CPU memory; Buses = microscopic data pathways; VRM = steps 12V down to ~1.2V for the CPU", "They are external printers", "They are antivirus programs", "They are optical discs"], correctAnswer: 0 },
    { subject: "Windows Operating System", question: "What is the Windows keyboard shortcut to open the Snipping Tool / Snip & Sketch crosshair to screenshot a specific box?", options: ["Windows Key + Shift + S", "Ctrl + Alt + Delete", "Alt + F4", "Ctrl + P"], correctAnswer: 0 },
    { subject: "Windows Operating System", question: "What is the shortcut to create a new folder in Windows, and which key renames a selected file or folder?", options: ["Ctrl + Shift + N (New Folder) and F2 (Rename)", "Ctrl + N and F5", "Ctrl + C and F1", "Alt + Tab and Esc"], correctAnswer: 0 },
    { subject: "Windows Operating System", question: "Before pulling a USB Pendrive out of the computer, what safety rule must you follow? And what mode do you select on a mobile phone to transfer photos via USB?", options: ["Right-click the USB icon and click 'Eject'; select 'File Transfer (MTP)' on the mobile phone", "Pull the USB out immediately; select 'Charging Only'", "Format the pendrive first", "Turn off the monitor"], correctAnswer: 0 },
    { subject: "Introduction to Multimedia", question: "What is Multimedia, and which three components are highlighted in the Multimedia module?", options: ["Combining pictures, animation, graphics, and audio; uses Sound Card, Speaker, and CD-ROM", "Only typing text in Notepad", "A type of network cable", "A tax calculation"], correctAnswer: 0 }
];

// ==========================================
// 5B. MS WORD ADVANCED & DCA EXCLUSIVE MCQs (FROM word-data.js)
// ==========================================
const wordAdvancedAndDcaMCQs = [
    { subject: "MS Word – Advanced", question: "Where on the MS Word screen can you instantly check the exact number of pages and words typed so far?", options: ["Top right corner", "Very bottom left corner of the Word screen", "Inside the Print menu", "In the Draw tab"], correctAnswer: 1 },
    { subject: "MS Word – Advanced", question: "In MS Word, which feature makes the very first letter of a story paragraph huge like a fairy-tale book?", options: ["WordArt", "Insert > Drop Cap", "Superscript", "Format Painter"], correctAnswer: 1 },
    { subject: "MS Word – Advanced", question: "In the Home tab, what is the difference between the 'X₂' button and the 'X²' button?", options: ["X₂ is Subscript (drops text down); X² is Superscript (floats text up)", "X₂ is Bold; X² is Italic", "Both double the font size", "X₂ deletes text"], correctAnswer: 0 },
    { subject: "MS Word – Advanced", question: "When you insert a picture and it ruins your paragraphs, which 'Layout Options' (Wrap Text) setting makes text flow neatly around the image?", options: ["Behind Text", "Square", "In Line with Text", "Drop Cap"], correctAnswer: 1 },
    { subject: "MS Word – Advanced", question: "How do you build an automatic Table of Contents (Index page) in MS Word?", options: ["Apply 'Heading 1' to chapter titles, then go to References > Table of Contents", "Type page numbers manually", "Use Insert > Page Break", "Use Review > Track Changes"], correctAnswer: 0 },
    { subject: "MS Word – Advanced", question: "Which tool in the 'Mailings' tab lets you link one single letter to an Excel list to print 50 personalized student letters automatically?", options: ["SmartArt", "Mail Merge", "Track Changes", "Drop Cap"], correctAnswer: 1 },
    { subject: "MS Word – Advanced", question: "Which tool in the 'Review' tab crosses out deleted words in red and underlines new words when a teacher corrects an essay?", options: ["Word Count", "Track Changes", "Mail Merge", "Watermark"], correctAnswer: 1 },
    { subject: "MS Word – Advanced", question: "How do you lock a private MS Word document with a password so unauthorized users cannot open it?", options: ["File > Info > Protect Document > Encrypt with Password", "Home > Font > Lock", "Insert > Cover Page", "View > Ruler"], correctAnswer: 0 },
    { subject: "MS Word – Advanced", question: "Which tool in the Home tab (with a Microphone icon) types your spoken words onto the screen automatically?", options: ["Read Aloud", "Dictate (Voice Typing)", "Translate", "Smart Lookup"], correctAnswer: 1 },
    { subject: "MS Word – Advanced", question: "In the 'References' tab, which tool places a tiny number next to a word and lets you explain it at the bottom of the same page?", options: ["Header", "Insert Footnote", "Bookmark", "Hyperlink"], correctAnswer: 1 },
    { subject: "MS Word – Advanced", question: "If a friend edited your project file without telling you what changed, which tool in the 'Review' tab highlights every added or deleted word?", options: ["Compare", "Translate", "Dictate", "Word Count"], correctAnswer: 0 },
    { subject: "MS Word – Advanced", question: "If your computer loses power before you save your Word file, where do you go to recover the backup copy?", options: ["File > Info > Manage Document > Recover Unsaved Documents", "Recycle Bin", "Insert > Symbol", "Layout > Margins"], correctAnswer: 0 },
    { subject: "MS Office (Word, Excel, PowerPoint)", question: "When formatting an official Gram Panchayat letter or Resume in MS Word, what do Ctrl + J, Ctrl + L, and Ctrl + E do?", options: ["Ctrl+J = Justify text, Ctrl+L = Left align, Ctrl+E = Center align", "Ctrl+J = Jump, Ctrl+L = Lock, Ctrl+E = Exit", "All three change font size", "They print the page"], correctAnswer: 0 }
];

// ==========================================
// 5C. MS EXCEL ADVANCED & DCA EXCLUSIVE MCQs (FROM excel-data.js)
// ==========================================
const excelAdvancedAndDcaMCQs = [
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "If you make a spelling mistake inside an Excel cell, which key lets you jump inside the cell to edit without erasing the whole box?", options: ["F1", "F2", "F5", "Esc"], correctAnswer: 1 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "What is the keyboard shortcut to change plain numbers into Currency (₹ / $) format, and what shortcut turns Filter arrows on/off?", options: ["Ctrl + Shift + $ (Currency) and Ctrl + Shift + L (Filter)", "Ctrl + C and Ctrl + V", "Alt + F4 and F2", "Shift + Space"], correctAnswer: 0 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "What is the keyboard shortcut to insert a new blank Worksheet (Sheet) into an Excel workbook?", options: ["Shift + F11", "Ctrl + N", "Alt + F1", "Ctrl + T"], correctAnswer: 0 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "What does the formula '=IF(A1>50, \"Pass\", \"Fail\")' do in MS Excel?", options: ["Displays 'Pass' if the value in A1 is greater than 50, otherwise displays 'Fail'", "Adds 50 to cell A1", "Colors cell A1 red", "Deletes cell A1"], correctAnswer: 0 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "What is the exact difference between '=COUNT(A1:A50)' and '=COUNTA(A1:A50)' in MS Excel?", options: ["=COUNT counts only cells with Numbers; =COUNTA counts cells with Words/Text or Numbers (non-empty)", "=COUNT counts words; =COUNTA counts only blank cells", "They are identical", "=COUNTA adds numbers"], correctAnswer: 0 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "Which Excel function searches for a student's Roll Number in the leftmost column of a big table and returns their Phone Number from a specified column?", options: ["=VLOOKUP()", "=SUM()", "=AVERAGE()", "=CONCAT()"], correctAnswer: 0 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "Which Excel tool takes a messy list of 10,000 fee payments and summarizes it into a compact report by Class Name in seconds?", options: ["Text to Columns", "Pivot Table (Insert > PivotTable)", "Format Painter", "Wrap Text"], correctAnswer: 1 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "If you copy a cell containing '=A1+B1' and want to paste ONLY the final numeric answer without the formula breaking, what should you use?", options: ["Paste Special > Paste as Values (123 icon)", "Normal Paste (Ctrl+V)", "Merge & Center", "Flash Fill"], correctAnswer: 0 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "When dragging a formula down, which symbol locks a cell reference (like $A$1) so it never shifts, and which Function key adds it automatically?", options: ["The Dollar sign ($) added by pressing F4", "The Hash sign (#) added by pressing F2", "The Percent sign (%) added by pressing F5", "The @ symbol"], correctAnswer: 0 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "What does 'Wrap Text' (Alt + H, W) do when a long sentence spills out of an Excel cell?", options: ["Deletes the extra words", "Makes the row taller and stacks the words neatly inside the same cell", "Merges 10 cells together", "Changes font to red"], correctAnswer: 1 },
    { subject: "Microsoft Excel (Data Handling & Analysis)", question: "In a list of 5,000 students, which shortcuts teleport to the bottom edge of data, select a whole Row, and select a whole Column?", options: ["Ctrl + Down Arrow (Teleport), Shift + Space (Select Row), Ctrl + Space (Select Column)", "Alt + Tab, Ctrl + R, Ctrl + C", "Page Down, F2, F4", "Esc, Home, End"], correctAnswer: 0 },
    { subject: "MS Office (Word, Excel, PowerPoint)", question: "Which shortcut turns a range of data into an official Excel 'Table' with banded rows and built-in filter arrows?", options: ["Ctrl + T", "Ctrl + P", "Ctrl + Z", "Alt + F1"], correctAnswer: 0 }
];

// ==========================================
// 5D. MS POWERPOINT ADVANCED & DCA EXCLUSIVE MCQs (FROM ppt-data.js)
// ==========================================
const pptAdvancedAndDcaMCQs = [
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "What is the keyboard shortcut to Group multiple selected shapes together into one unit, and to Ungroup them?", options: ["Ctrl + G (Group) and Ctrl + Shift + G (Ungroup)", "Ctrl + C and Ctrl + V", "Ctrl + M and Ctrl + N", "Alt + F4"], correctAnswer: 0 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "Which advanced PowerPoint Transition smoothly animates an object growing or moving between Slide 1 and Slide 2?", options: ["Morph", "Cut", "Flash", "Wipe"], correctAnswer: 0 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "While presenting a live slideshow, which keys instantly turn the projector screen pitch Black or White so the audience focuses on the speaker?", options: ["Press 'B' for Black screen; press 'W' for White screen", "Press 'F1' for Black; 'F2' for White", "Press Ctrl + X", "Press Delete"], correctAnswer: 0 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "If you need to place the Excellent Institute logo in the corner of all 50 slides at once without pasting it 50 times, which view should you edit?", options: ["View > Slide Master (edit the top #1 Master slide)", "Reading View", "Animation Pane", "Design Ideas"], correctAnswer: 0 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "When inserting an MP3 audio song into PowerPoint, which Playback option keeps the music playing smoothly when you move to the next slide?", options: ["Play across slides", "Hide During Show", "Rewind after Playing", "Mute"], correctAnswer: 0 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "Which tool in the Animations tab copies all complex animations from one object and applies them to another object in one click?", options: ["Format Painter", "Animation Painter (Alt + A, P)", "Slide Master", "Morph"], correctAnswer: 1 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "To save ink and give students space to write notes next to printed slides, which Print setting should you choose?", options: ["Full Page Slides", "3 Slides (Handouts)", "Outline View", "Slide Master"], correctAnswer: 1 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "How can you turn a completed PowerPoint presentation (with animations and audio) into a playable movie file?", options: ["File > Export > Create a Video (saves as MP4)", "File > Print", "Home > New Slide", "Review > Spell Check"], correctAnswer: 0 },
    { subject: "Microsoft PowerPoint (Presentation Skills)", question: "Which single shortcut instantly duplicates a selected shape or slide in PowerPoint without using Copy and Paste?", options: ["Ctrl + D", "Ctrl + S", "Ctrl + K", "Alt + F9"], correctAnswer: 0 }
];

// ==========================================
// 5E. TALLY DCA & PGDCA EXCLUSIVE MCQs (FROM tally-data.js)
// ==========================================
const tallyDcaAndPgdcaExtraMCQs = [
    { subject: "Tally ERP with GST", question: "Immediately after saving a Sales Voucher (F8), which keys let you bring the voucher back on screen and preview its printable Tax Invoice?", options: ["Press 'Page Up', then press Ctrl + P and 'I' (Preview)", "Press Esc and Quit", "Press F11", "Press Alt + X"], correctAnswer: 0 },
    { subject: "Tally ERP with GST", question: "In Tally Prime, on what date does the Indian Financial Year always begin?", options: ["1st January", "1st April", "31st March", "1st July"], correctAnswer: 1 },
    { subject: "Tally ERP with GST", question: "When transporting goods worth more than what amount is an e-Way Bill mandatory in Tally Prime's GST setup?", options: ["More than ₹5,000", "More than ₹50,000", "More than ₹10,00,000", "More than ₹100"], correctAnswer: 1 },
    { subject: "Tally ERP with GST", question: "In the Tally Day Book, which shortcut lets you change the date period (e.g., from 1st April to 30th April) to view the whole month's entries?", options: ["Alt + F2", "Alt + F5", "Ctrl + A", "Ctrl + H"], correctAnswer: 0 },
    { subject: "Tally ERP with GST", question: "How do you lock a company with an Administrator password in Tally Prime, and how do you take a `.tbk` Data Backup to a USB Pendrive?", options: ["Alt + K > Security (for password); Alt + Y > Backup (for data backup)", "F11 and F12", "Ctrl + P and Ctrl + S", "Alt + G and Alt + X"], correctAnswer: 0 }
];

// ==========================================
// 5F. DEEP EXPANSION FROM THE 10 UPLOADED COURSE BOOKS
// ==========================================
const deepBookExpansionMCQs = [
    // --- TALLY PRIME 7.0 & ACCOUNTING EXPANSION (from tally-data_2.js & tally-pro-data.js) ---
    { subject: "Introduction to Accounting", question: "What are the three core systematic actions of Accounting defined in Module 1?", options: ["Recording, Classifying, and Summarizing financial transactions", "Typing, Printing, and Scanning", "Buying, Selling, and Borrowing", "Coding, Compiling, and Debugging"], correctAnswer: 0 },
    { subject: "Introduction to Accounting", question: "What are the two ultimate goals of accounting at the end of the financial year?", options: ["To find Profit/Loss and show the exact Financial Position (Assets vs. Liabilities)", "To count total employees and computers", "To pay electricity bills", "To design logos"], correctAnswer: 0 },
    { subject: "Introduction to Accounting", question: "If you buy a Computer for ₹50,000 cash, what happens under the Double Entry System?", options: ["Computer comes in (Debit) and ₹50,000 Cash goes out (Credit)", "Only Cash is recorded", "Computer is Credited and Cash is Debited", "Nothing is recorded"], correctAnswer: 0 },
    { subject: "Introduction to Accounting", question: "If you pay ₹10,000 Cash to Rahul, how do you apply the Personal and Real Account Golden Rules?", options: ["Debit Rahul A/c (Receiver) and Credit Cash A/c (what goes out)", "Credit Rahul A/c and Debit Cash A/c", "Debit Bank A/c", "Credit Capital A/c"], correctAnswer: 0 },
    { subject: "Introduction to Accounting", question: "When you pay Office Rent of ₹5,000 in Cash, why do you Debit Rent A/c?", options: ["Because Rent is a Nominal Account and we Debit all Expenses and Losses", "Because Rent is a Real Account", "Because Rent is a Personal Account", "Because Rent is an Income"], correctAnswer: 0 },
    { subject: "Introduction to Accounting", question: "What is a 'Ledger' in the Accounting Cycle?", options: ["A daily chronological diary", "A separate, dedicated T-shaped book/folder for one specific account (e.g., Rent Ledger, Cash Ledger)", "A bank cheque", "A tax return"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "In Final Accounts, which account subtracts indirect expenses (like Salaries and Rent) to find the Net Profit?", options: ["Trading Account", "Profit & Loss Account", "Trial Balance", "Contra Voucher"], correctAnswer: 1 },
    { subject: "Introduction to Accounting", question: "On a standard Balance Sheet in Tally Prime, which side shows Liabilities and which side shows Assets?", options: ["Left side shows Liabilities; Right side shows Assets", "Left side shows Assets; Right side shows Liabilities", "Top shows Assets; Bottom shows Liabilities", "Only Assets are shown"], correctAnswer: 0 },
    { subject: "Basics of Tally", question: "What are the top-menu shortcuts for 'Exchange' and 'Print' in Tally Prime?", options: ["Alt + Z (Exchange) and Alt + P (Print)", "Alt + K and Alt + Y", "Ctrl + E and Ctrl + P", "F4 and F5"], correctAnswer: 0 },
    { subject: "Basics of Tally", question: "Which Function key opens the 'Help' menu in Tally Prime?", options: ["F1", "F2", "F11", "F12"], correctAnswer: 0 },
    { subject: "Basics of Tally", question: "What are the four main sections visible on the central 'Gateway of Tally' dashboard?", options: ["Masters, Transactions, Utilities, and Reports", "File, Edit, View, Insert", "Home, Layout, Design, Review", "Inbox, Sent, Drafts, Spam"], correctAnswer: 0 },
    { subject: "Company Creation & Ledger Management", question: "Out of the 28 Pre-defined Groups in Tally Prime, how many are Primary Groups and how many are Sub-groups?", options: ["15 Primary Groups and 13 Sub-groups", "20 Primary Groups and 8 Sub-groups", "14 Primary and 14 Sub-groups", "10 Primary and 18 Sub-groups"], correctAnswer: 0 },
    { subject: "Company Creation & Ledger Management", question: "Under which primary group do 'Sundry Debtors' and 'Sundry Creditors' fall in Tally's Group Hierarchy?", options: ["Sundry Debtors under Current Assets; Sundry Creditors under Current Liabilities", "Both under Fixed Assets", "Both under Indirect Expenses", "Both under Capital Account"], correctAnswer: 0 },
    { subject: "Company Creation & Ledger Management", question: "What error appears on the Tally Balance Sheet if there is a mismatch between Dr and Cr when entering Opening Balances?", options: ["Difference in Opening Balances", "Syntax Error", "Negative Stock Warning", "Uncertain Transactions"], correctAnswer: 0 },
    { subject: "Company Creation & Ledger Management", question: "How do you view the entire tree structure of the 28 pre-defined groups from the Gateway of Tally?", options: ["Gateway of Tally > Chart of Accounts > Groups", "Gateway of Tally > Day Book", "Press F4", "Press Alt + P"], correctAnswer: 0 },
    { subject: "Voucher Entry in Tally", question: "If you transfer ₹50,000 from your SBI Bank account to your HDFC Bank account via NEFT, which voucher is used?", options: ["Payment (F5)", "Contra (F4) — Dr. HDFC Bank / Cr. SBI Bank", "Receipt (F6)", "Journal (F7)"], correctAnswer: 1 },
    { subject: "Voucher Entry in Tally", question: "If you forget the shortcut for Debit Note or Credit Note while in Vouchers, which key opens the list of 'Other Vouchers'?", options: ["F10 (Other Vouchers)", "F1", "Alt + K", "Ctrl + A"], correctAnswer: 0 },
    { subject: "Inventory Management", question: "While creating a Stock Item in Tally Prime, which key opens 'Configuration' to enable item descriptions, part numbers, or alternative units?", options: ["F12 (Configure)", "F11", "F4", "Alt + G"], correctAnswer: 0 },
    { subject: "Inventory Management", question: "Where do you go in Tally Prime to create a 'Stock Category' (such as Samsung or Dell)?", options: ["Gateway of Tally > Create > Show More > Stock Category", "Gateway of Tally > Day Book", "Press Alt + Y", "Press F8"], correctAnswer: 0 },
    { subject: "Inventory Management", question: "What warning does Tally flash in the Stock Summary if you sell more items than you actually have in your Godown?", options: ["Negative Stock warning", "Balance Sheet Mismatch", "GSTIN Error", "Invalid Password"], correctAnswer: 0 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "While entering a GST Sales invoice, which shortcut opens 'Related Reports > GST Tax Analysis' to verify the tax math before saving?", options: ["Ctrl + O (Related Reports) > GST Tax Analysis", "Alt + X", "Ctrl + F", "Alt + Y"], correctAnswer: 0 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "In what file format does Tally export GSTR-1 and GSTR-3B returns (using Alt + E) for uploading to the Government GST Portal?", options: ["JSON format", "MP4 format", "PSD format", "EXE format"], correctAnswer: 0 },
    { subject: "Taxation in Tally (GST, TDS, TCS)", question: "Why should you create a generic 'CGST' ledger instead of hard-coding 'CGST 9%' in the ledger name?", options: ["So Tally can automatically pull different tax rates (5%, 12%, 18%, 28%) directly from the Stock Item", "Because numbers are not allowed in ledger names", "Because GST is always 0%", "To hide tax from customers"], correctAnswer: 0 },
    { subject: "Payroll & Employee Records", question: "Where do you link configured Pay Heads (Basic, HRA, PF) to a specific employee's monthly salary package in Tally?", options: ["Define Salary Details", "Bank Reconciliation", "Stock Summary", "Day Book"], correctAnswer: 0 },
    { subject: "Banking Features in Tally", question: "From a Bank Ledger display screen in Tally, which shortcut jumps directly to Bank Reconciliation?", options: ["Alt + R", "Alt + X", "Ctrl + A", "F8"], correctAnswer: 0 },
    { subject: "Banking Features in Tally", question: "Which Tally Banking feature exports payment instructions to upload to a corporate net-banking portal for bulk salary transfers?", options: ["Banking > e-Payments", "Stock Journal", "Physical Stock", "Credit Note"], correctAnswer: 0 },

    // --- C PROGRAMMING & DATA STRUCTURES EXPANSION (from c-data_2.js) ---
    { subject: "Programming in C & Data Structures", question: "Which of the following is a valid C variable name according to Chapter 2 rules?", options: ["student age (contains space)", "1student (starts with a number)", "student_age", "int (reserved keyword)"], correctAnswer: 2 },
    { subject: "Programming in C & Data Structures", question: "In a C 'switch' statement, why must you write 'break;' at the end of each case?", options: ["So execution stops at that matched case and doesn't fall through to the next case", "To delete the variable", "To restart the computer", "To include a header file"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "What are the three parts inside the parentheses of a C 'for' loop: for (int i = 1; i <= 10; i++)?", options: ["Start counting (Initialization), Stop condition, and Step size (Increment)", "Input, Output, and Return", "Row, Column, and Grid", "Header, Body, and Footer"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "In a C function, what are 'Parameters' vs. the 'Return Value'?", options: ["Parameters are the inputs passed into the function; Return Value is the final result sent back", "Parameters are errors; Return Value is the header file", "They are loop counters", "They are pointers"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "If you declare 'int marks[50];' in C, what is the index of the first compartment and the 50th compartment?", options: ["First is [0] and 50th is [49]", "First is [1] and 50th is [50]", "First is [0] and 50th is [50]", "First is [-1] and 50th is [48]"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "How many rows and columns are created by the 2D array declaration 'int theater[3][4];'?", options: ["3 Rows and 4 Columns", "4 Rows and 3 Columns", "7 Rows", "12 Rows"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "Why does storing the 5-letter word \"HELLO\" in C require 'char name[6]'?", options: ["To hold the 6th invisible Null Terminator character ('\\0') that marks where the string stops", "Because arrays start at 1", "To store a decimal point", "Because H takes 2 bytes"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "Which format specifier is used inside printf() to print a variable's RAM Memory Address (e.g., &age)?", options: ["%p", "%d", "%f", "%c"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "How do you access the 'roll' member inside a structure variable 'struct Student s1;'?", options: ["Using the dot operator: s1.roll = 45;", "Using the hash operator: s1#roll", "Using s1->roll", "Using @s1.roll"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "In Big O Time Complexity notation, what is the difference between O(1) and O(N)?", options: ["O(1) takes 1 step (instant); O(N) takes N steps proportional to the number of items", "O(1) is slow; O(N) is instant", "Both mean infinite loop", "They measure hard disk size"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "What are the technical terms for adding and removing items in a Stack vs. a Queue?", options: ["Stack uses Push & Pop; Queue uses Enqueue & Dequeue", "Stack uses Enqueue & Dequeue; Queue uses Push & Pop", "Both use Insert & Delete", "Both use Malloc & Free"], correctAnswer: 0 },
    { subject: "Programming in C & Data Structures", question: "How does a Doubly Linked List differ from a Singly Linked List?", options: ["Each node in a Doubly Linked List has TWO pointers (Prev and Next) so you can traverse both forward and backward", "A Doubly Linked List has no pointers", "A Singly Linked List can go backward", "They are identical"], correctAnswer: 0 },

    // --- HARDWARE COMPONENTS & FUNDAMENTALS EXPANSION (from components_index.html & fundamental_index.html) ---
    { subject: "Computer Components", question: "On the back of a desktop PC, what are the Green, Pink, and Blue 3.5mm audio jacks used for?", options: ["Green = Speakers Out, Pink = Microphone In, Blue = Line In", "Green = Mic In, Pink = Speakers Out, Blue = Monitor", "All three are for USB", "Green = Internet, Pink = Power"], correctAnswer: 0 },
    { subject: "Computer Components", question: "What is the difference between the Northbridge and Southbridge in a traditional motherboard chipset?", options: ["Northbridge handles fast connections (RAM, GPU); Southbridge handles slower connections (USB, Audio)", "Northbridge handles USB; Southbridge handles CPU", "They are cooling fans", "They are power cables"], correctAnswer: 0 },
    { subject: "Computer Components", question: "Where is L1, L2, and L3 Cache memory located, and what is its purpose?", options: ["Super-fast memory built directly onto the CPU die to store frequently used data", "On a CD-ROM", "Inside the printer", "Inside the mouse"], correctAnswer: 0 },
    { subject: "Computer Components", question: "What are the three types of System Buses and their exact jobs?", options: ["Data Bus (carries data), Address Bus (carries memory location), Control Bus (carries Read/Write signals)", "USB, HDMI, and VGA", "LAN, MAN, and WAN", "RAM, ROM, and Cache"], correctAnswer: 0 },
    { subject: "Computer Components", question: "Around the CPU socket, what do Inductors (Chokes) and Capacitors do alongside the VRM?", options: ["Inductors smooth out current changes in a magnetic field; Capacitors filter voltage and absorb power spikes", "They spin to cool the case", "They store MP3 files", "They connect to Wi-Fi"], correctAnswer: 0 },
    { subject: "Computer Components", question: "What is the role of microscopic Transistors vs. Resistors on a circuit board?", options: ["Transistors act as semiconductor switches (1s and 0s); Resistors limit/regulate electrical current flow to protect circuits", "Transistors print paper; Resistors display video", "Both are optical drives", "They are software apps"], correctAnswer: 0 },
    { subject: "Computer Fundamentals", question: "Who invented the Pascaline (1642), the Difference/Analytical Engine (1822/1842), and the Mark 1 Computer (1937)?", options: ["Blaise Pascal (Pascaline), Charles Babbage (Analytical Engine), and Howard H. Aiken (Mark 1)", "Bill Gates, Steve Jobs, and Dennis Ritchie", "John von Neumann for all three", "Seymour Cray"], correctAnswer: 0 },
    { subject: "Computer Fundamentals", question: "In 1946, who proposed the EDVAC computer architecture, and which 1950 machine was the world's first mass-produced computer?", options: ["John von Neumann (EDVAC) and the IBM 650 (first mass-produced computer)", "Charles Babbage and ENIAC", "Blaise Pascal and PARAM", "Alan Turing and Apple I"], correctAnswer: 0 },
    { subject: "Computer Fundamentals", question: "What is the difference between an Assembler, a Compiler, and an Interpreter?", options: ["Assembler translates assembly code; Compiler translates the whole program at once; Interpreter translates line-by-line", "All three are hardware cables", "Compiler is line-by-line; Interpreter is all at once", "They are web browsers"], correctAnswer: 0 },
    { subject: "Computer Fundamentals", question: "What is the difference between LAN, MAN, and WAN networks?", options: ["LAN = single room/school/building; MAN = across a whole city; WAN = across the world (like the Internet)", "LAN = world; WAN = single room", "MAN = mobile phone only", "All three cover only 1 meter"], correctAnswer: 0 },

    // --- OPERATING SYSTEM & TYPING EXPANSION (from OS_index_2.html & typing_index_2.html) ---
    { subject: "Operating System Basics", question: "In Windows File Explorer, what is the difference between 'Ctrl + Click' and 'Shift + Click' when selecting files?", options: ["Ctrl + Click selects multiple individual files; Shift + Click selects a continuous list of files", "Shift + Click deletes files; Ctrl + Click renames them", "Both select everything", "They open Task Manager"], correctAnswer: 0 },
    { subject: "Operating System Basics", question: "In Windows Control Panel > Hardware and Sound, which tool lets you update or roll back hardware drivers?", options: ["Device Manager", "Disk Cleanup", "Recycle Bin", "Personalization"], correctAnswer: 0 },
    { subject: "Windows Operating System", question: "In File Explorer, what does the 'Quick Access' (Star icon) show vs. 'This PC'?", options: ["Quick Access shows frequently used folders (Downloads, Documents, Desktop); This PC shows connected drives (C:, D:)", "Quick Access shows viruses; This PC shows internet history", "They are the same", "Quick Access turns off the PC"], correctAnswer: 0 },
    { subject: "Windows Operating System", question: "If a computer has no sound, which two things should you check first according to the troubleshooting guide?", options: ["Check if the taskbar speaker icon is muted ('X') and ensure the speaker wire is plugged into the Green jack on the back of the CPU", "Format the C: drive", "Uninstall MS Word", "Unplug the monitor"], correctAnswer: 0 },
    { subject: "Typing Theory", question: "Where does the 'Invisible Dividing Line' between the Left Hand and Right Hand pass on a standard 104-key keyboard?", options: ["Between (T and Y), (G and H), and (B and N)", "Between (A and S), (Q and W)", "Between (J and K), (U and I)", "Down the Numpad"], correctAnswer: 0 },
    { subject: "Typing Theory", question: "Which keys belong to the 'Modifier Keys' category because they do nothing when pressed alone?", options: ["Shift, Ctrl, Alt, and Windows Key", "A, S, D, and F", "Spacebar, Enter, and Backspace", "F1 to F12"], correctAnswer: 0 },
    { subject: "Typing Theory", question: "When typing on the Top Row, which fingers reach up to hit 'R & T' vs. 'Y & U'?", options: ["Left Index hits R & T; Right Index hits Y & U", "Left Pinky hits R & T; Right Pinky hits Y & U", "Thumbs hit R, T, Y, U", "Middle fingers hit all four"], correctAnswer: 0 },
    { subject: "Typing Theory", question: "To type a single Capital 'K' or Capital 'S', what is the exact hand coordination using the Shift rule?", options: ["Capital K = Left Pinky holds Shift + Right Middle presses K; Capital S = Right Pinky holds Shift + Left Ring presses S", "Use Caps Lock for both", "Use Left Shift for both", "Use Thumb on Shift"], correctAnswer: 0 },
    { subject: "Typing Theory", question: "What do the Windows shortcuts 'Win + E' and 'Win + L' do?", options: ["Win + E opens File Explorer; Win + L instantly locks your PC screen", "Win + E exits Windows; Win + L logs into Gmail", "Both close programs", "They take screenshots"], correctAnswer: 0 },
    { subject: "Typing Theory", question: "In Chrome or Edge, what do 'Ctrl + T', 'Ctrl + W', 'Ctrl + J', and 'Ctrl + H' do?", options: ["Ctrl+T = New Tab, Ctrl+W = Close Tab, Ctrl+J = Downloads, Ctrl+H = Browsing History", "They format text in Word", "They shut down the PC", "They change screen brightness"], correctAnswer: 0 }
];

// Inject all book batches into questionBatches & courseSpecificBatches
if (typeof questionBatches !== 'undefined') {
    questionBatches.push(
        tallyBookMCQs,
        tallyDcaAndPgdcaExtraMCQs,
        photoshopAndGraphicsMCQs,
        digitalAndInternetMCQs,
        pgdcaProgrammingAndWebMCQs,
        dcaAdvancedFoundationMCQs,
        wordAdvancedAndDcaMCQs,
        excelAdvancedAndDcaMCQs,
        pptAdvancedAndDcaMCQs,
        deepBookExpansionMCQs
    );
}

if (typeof courseSpecificBatches !== 'undefined') {
    courseSpecificBatches["TALLY"].push(tallyBookMCQs, tallyDcaAndPgdcaExtraMCQs, deepBookExpansionMCQs);
    courseSpecificBatches["DCA"].push(
        photoshopAndGraphicsMCQs, digitalAndInternetMCQs, dcaAdvancedFoundationMCQs,
        wordAdvancedAndDcaMCQs, excelAdvancedAndDcaMCQs, pptAdvancedAndDcaMCQs,
        tallyBookMCQs, tallyDcaAndPgdcaExtraMCQs, deepBookExpansionMCQs
    );
    courseSpecificBatches["PGDCA"].push(pgdcaProgrammingAndWebMCQs, tallyBookMCQs, tallyDcaAndPgdcaExtraMCQs, deepBookExpansionMCQs);
    courseSpecificBatches["CCA_6M"].push(digitalAndInternetMCQs, wordAdvancedAndDcaMCQs, excelAdvancedAndDcaMCQs, pptAdvancedAndDcaMCQs, deepBookExpansionMCQs);
    courseSpecificBatches["CCA_3M"].push(digitalAndInternetMCQs, wordAdvancedAndDcaMCQs, excelAdvancedAndDcaMCQs, pptAdvancedAndDcaMCQs, deepBookExpansionMCQs);
    courseSpecificBatches["BCC"].push(digitalAndInternetMCQs, dcaAdvancedFoundationMCQs, deepBookExpansionMCQs);
}

// ==========================================
// 6. COURSE-WISE PRACTICAL EXAM QUESTIONS (STUDENT SELECTS 1)
// ==========================================
const PRACTICAL_EXAM_BANK = {
    "TALLY": [
        {
            id: "TALLY_P1",
            app: "Tally Prime 7.0",
            title: "Option 1: The Trading Company, Godown & GST Cycle",
            marks: 50,
            steps: [
                "Create a company named 'Excellent Traders' in Tally Prime and enable GST (18%) in F11.",
                "Pass a Receipt Voucher (F6): Owner brings ₹10,00,000 Capital into HDFC Bank.",
                "Create two Godowns: 'Main Shop' and 'Warehouse'.",
                "Pass a Purchase Voucher (F9): Buy 100 Dell Laptops @ ₹30,000 each (+ 9% CGST & 9% SGST). Store 20 in Main Shop and 80 in Warehouse.",
                "Pass a Sales Voucher (F8): Sell 5 Dell Laptops @ ₹45,000 each (+ CGST/SGST) to 'Raj IT Solutions' from Main Shop and verify Gross Profit in P&L A/c."
            ]
        },
        {
            id: "TALLY_P2",
            app: "Tally Prime 7.0",
            title: "Option 2: Corporate Service Billing & TDS Deduction Cycle",
            marks: 50,
            steps: [
                "Create a company and enable TDS in F11 Features.",
                "Create ledgers for 'Audit Service Expense' (Indirect Expense), 'Sharma CA' (Sundry Creditor), and 'TDS on Professional Fees @ 10%' (Duties & Taxes).",
                "Pass a Journal Voucher (F7) for an Audit Bill of ₹60,000, deducting ₹6,000 as TDS automatically.",
                "Pass a Payment Voucher (F5) to pay the net ₹54,000 to Sharma CA via SBI Bank.",
                "Pass a Statutory Payment Voucher (Ctrl+F Autofill) to pay the ₹6,000 TDS to the Government and verify zero tax liability in the Balance Sheet."
            ]
        },
        {
            id: "TALLY_P3",
            app: "Tally Prime 7.0",
            title: "Option 3: Automated HR Payroll & Payslip Generation",
            marks: 50,
            steps: [
                "Enable Payroll in F11 Features and create an Employee Group 'Accounts Dept' and Employee 'Anil Kumar'.",
                "Create Attendance types 'Present' (Leave with Pay) and 'Absent' (Leave without Pay).",
                "Create Pay Heads: 'Basic Pay' (On Attendance), 'HRA 20%' (As Computed Value), and 'PF Deduction 12%' (Employees Statutory Deduction).",
                "Define Salary for Anil Kumar (Basic ₹15,000/month) and pass an Attendance Voucher marking him Present for 28 days.",
                "Run Payroll Voucher using Ctrl+F (Payroll Autofill) and generate the printable Payslip."
            ]
        }
    ],
    "DCA": [
        {
            id: "DCA_P1",
            app: "Adobe Photoshop 7.0",
            title: "Option 1: Studio Passport Photo Sheet & Transparent Signature",
            marks: 50,
            steps: [
                "Open a portrait photo in Photoshop 7.0, select the Crop Tool (C), and set Width: 3.5 cm, Height: 4.5 cm, Resolution: 300.",
                "Crop the photo, press Ctrl + A, and apply a 5 px black border using Edit > Stroke.",
                "Open a new 4x6 inch canvas (Ctrl + N) and use the Move Tool (V) while holding Alt to arrange 6 passport photos in a neat row.",
                "Open a scanned signature, unlock the Background layer, use the Magic Wand Tool (W) to delete the white background, and export as PNG."
            ]
        },
        {
            id: "DCA_P2",
            app: "Tally Prime 7.0",
            title: "Option 2: GST Trading Invoice & Ledger Setup in Tally Prime",
            marks: 50,
            steps: [
                "Create a company in Tally Prime, press F11 to enable GST, and create CGST, SGST, and IGST ledgers under Duties & Taxes.",
                "Create 5 Stock Items with HSN codes and 18% GST rate under PCS unit (mapped to NOS UQC).",
                "Record a Purchase (F9) and a Local Sales Invoice (F8) with automatic CGST/SGST calculation and verify GSTR-1."
            ]
        },
        {
            id: "DCA_P3",
            app: "MS Word / MS Excel",
            title: "Option 3: Automated Excel Mark Sheet OR Official Word Notice",
            marks: 50,
            steps: [
                "In MS Excel: Create a 5-student Mark Sheet with Total (=SUM), Average (=AVERAGE), Conditional Formatting (<35 in Red), and a Bar Chart.",
                "OR in MS Word: Create an A4 Holiday Notice with a 'EXCELLENT' Watermark, 1.5 line spacing, and a 3-course SmartArt diagram."
            ]
        }
    ],
    "PGDCA": [
        {
            id: "PGDCA_P1",
            app: "HTML, CSS & JavaScript (VS Code / Notepad)",
            title: "Option 1: Interactive Student Login Card & DOM Status Switcher",
            marks: 50,
            steps: [
                "Create an HTML page with a Flexbox navigation bar and a centered Student Login Form (Username, Password input, Course dropdown).",
                "Style the button using CSS with rounded corners (border-radius) and a :hover elevation effect.",
                "Write a JavaScript function triggered by onclick that uses document.getElementById() to change a status box to 'System Activated! Access Granted' in green."
            ]
        },
        {
            id: "PGDCA_P2",
            app: "C Compiler IDE",
            title: "Option 2: C Program Using Structures, Arrays & Loops",
            marks: 50,
            steps: [
                "Write a C program defining a 'struct Student' containing name (char array), roll (int), and marks (float).",
                "Use a 'for' loop to input details for 3 students and display their grade using 'if / else if / else' conditions.",
                "Compile and execute the program with zero syntax errors."
            ]
        },
        {
            id: "PGDCA_P3",
            app: "Tally Prime 7.0",
            title: "Option 3: Complete GST, TDS & Payroll Automation in Tally Prime",
            marks: 50,
            steps: [
                "Create a company in Tally Prime and record ₹10,00,000 Capital Receipt (F6), a GST Purchase (F9), and a GST Sale (F8).",
                "Record an Audit Fee Journal entry (F7) deducting 10% TDS, or process automated employee salary using Payroll Autofill (Ctrl+F)."
            ]
        }
    ],
    "DEFAULT": [
        {
            id: "GEN_P1",
            app: "MS Word",
            title: "Option 1: MS Word — Official Institute Notice & SmartArt",
            marks: 50,
            steps: [
                "Open MS Word, set Page Size to A4 and Orientation to Portrait.",
                "Create a centered, bold, size-22 blue title: 'EXCELLENT INSTITUTE ANNUAL NOTICE'.",
                "Type a 4-line formal notice paragraph with 1.5 line spacing and Justified alignment.",
                "Insert a faded text Watermark reading 'EXCELLENT' behind the page.",
                "Insert a SmartArt Hierarchy diagram showing 3 computer courses (BCC, DCA, PGDCA) and save the file on the Desktop."
            ]
        },
        {
            id: "GEN_P2",
            app: "MS Excel",
            title: "Option 2: MS Excel — Automated Student Mark Sheet & Chart",
            marks: 50,
            steps: [
                "Open MS Excel, Merge & Center cells A1:F1 for the title 'Automated Exam Result Sheet'.",
                "Create columns in Row 2: Student Name, Word, Excel, PowerPoint, Total Marks, Average. Apply 'All Borders'.",
                "Enter data for 5 students and calculate Total Marks using =SUM() and Average using =AVERAGE().",
                "Apply Conditional Formatting to highlight any subject score below 35 in Red.",
                "Insert a 2D Column/Bar Chart comparing the 5 students' Total Marks."
            ]
        },
        {
            id: "GEN_P3",
            app: "MS PowerPoint",
            title: "Option 3: MS PowerPoint — 4-Slide Presentation with Transitions & Animations",
            marks: 50,
            steps: [
                "Open MS PowerPoint and apply a professional Design Theme across 4 slides on 'Cyber Safety & Digital Services'.",
                "Apply Slide Transitions (Fade/Push) between slides and Custom Animations (Entrance/Emphasis) on key headings.",
                "Demonstrate the presentation in Full Screen (F5) using the Ctrl + Left-Click Laser Pointer."
            ]
        }
    ]
};

// ==========================================
// 7. 50 ADMIN-ONLY VIVA QUESTIONS & ANSWERS
// ==========================================
const VIVA_MASTER_BANK = [
    { topic: "Accounting", q: "What is the Business Entity Concept in accounting?", a: "The business and its owner are treated as two completely separate legal entities." },
    { topic: "Accounting", q: "What is 'Capital' vs. 'Drawings' in a business?", a: "Capital is money invested by the owner into the business; Drawings is cash/goods withdrawn by the owner for personal use." },
    { topic: "Accounting", q: "Who is a Sundry Debtor vs. a Sundry Creditor?", a: "A Sundry Debtor is a customer who owes money to us (Asset); a Sundry Creditor is a supplier to whom we owe money (Liability)." },
    { topic: "Golden Rules", q: "State the Golden Rule for Real Accounts.", a: "Debit what comes in, Credit what goes out." },
    { topic: "Golden Rules", q: "State the Golden Rule for Personal Accounts.", a: "Debit the Receiver, Credit the Giver." },
    { topic: "Golden Rules", q: "State the Golden Rule for Nominal Accounts.", a: "Debit all Expenses and Losses, Credit all Incomes and Gains." },
    { topic: "Tally Prime", q: "What is the only restriction in Tally Prime's free Educational Mode?", a: "You can only record transactions dated the 1st, 2nd, and 31st of any month." },
    { topic: "Tally Shortcuts", q: "What do Alt + G and Ctrl + A do in Tally Prime?", a: "Alt + G opens the 'Go To' search bar; Ctrl + A is Quick Save (accepts the screen instantly)." },
    { topic: "Tally Setup", q: "How many pre-defined groups and default ledgers exist in a new Tally company?", a: "28 pre-defined groups (15 Primary, 13 Sub-groups) and 2 default ledgers (Cash and Profit & Loss A/c)." },
    { topic: "Tally Vouchers", q: "State the shortcut keys for Contra, Payment, Receipt, Journal, Sales, and Purchase vouchers.", a: "F4 (Contra), F5 (Payment), F6 (Receipt), F7 (Journal), F8 (Sales), and F9 (Purchase)." },
    { topic: "Tally Vouchers", q: "When do you use a Contra Voucher (F4) vs. a Journal Voucher (F7)?", a: "Contra (F4) is strictly for Cash/Bank internal transfers; Journal (F7) is for non-cash adjustments like depreciation or TDS deduction." },
    { topic: "Tally Inventory", q: "Which voucher (Alt + F7) transfers stock between Godowns, and why is UQC needed in Units?", a: "Stock Journal transfers stock between Godowns; UQC (Unique Quantity Code) is mandatory for GST filing." },
    { topic: "Tally GST", q: "Under which group are CGST, SGST, and IGST created, and when is IGST used?", a: "Created under 'Duties & Taxes'; IGST is used for interstate (outside-state) sales." },
    { topic: "Tally GST", q: "What is the difference between GSTR-1 and GSTR-3B?", a: "GSTR-1 shows all outward sales invoices; GSTR-3B is the monthly summary return showing net tax liability and ITC." },
    { topic: "Tally Payroll & BRS", q: "What shortcut runs Payroll Autofill, and what is BRS in Tally?", a: "Ctrl + F runs Payroll Autofill; BRS (Bank Reconciliation Statement) matches Tally's bank ledger with the physical passbook using clearance dates." },
    { topic: "Photoshop", q: "What is the difference between saving as .PSD, .JPG, and .PNG in Photoshop?", a: ".PSD preserves editable layers; .JPG is for flat photos; .PNG preserves transparent backgrounds for signatures/logos." },
    { topic: "Photoshop", q: "What are the exact width, height, and resolution for a Passport Size Photo in Photoshop?", a: "Width: 3.5 cm, Height: 4.5 cm, and Resolution: 300." },
    { topic: "Photoshop", q: "How do you remove the white background around a scanned signature in Photoshop?", a: "Double-click the Background layer to unlock it, click the white area with the Magic Wand Tool (W), and press Delete." },
    { topic: "Photoshop", q: "Which shortcuts open Levels, Curves, and Free Transform in Photoshop?", a: "Ctrl + L (Levels), Ctrl + M (Curves), and Ctrl + T (Free Transform)." },
    { topic: "Graphics Design", q: "Why must we use CMYK mode instead of RGB when designing a Marriage Card for printing?", a: "RGB is light for digital screens, whereas physical printing presses use CMYK (Cyan, Magenta, Yellow, Black) ink." },
    { topic: "Graphics Design", q: "How do you calculate the canvas dimensions in inches for a 6-foot by 3-foot shop flex banner?", a: "Multiply feet by 12 (1 Foot = 12 Inches): Width = 72 inches, Height = 36 inches, at 72 Resolution." },
    { topic: "Digital Services", q: "What is the password format to open a downloaded e-Aadhaar PDF vs. an e-PAN PDF?", a: "e-Aadhaar password is the first 4 letters of the name in CAPITALS + birth year (e.g., RAHU2005); e-PAN password is full Date of Birth (DDMMYYYY)." },
    { topic: "Digital Services", q: "What is DigiLocker, and is a Driving License shown inside DigiLocker legally valid?", a: "DigiLocker is the Government of India's digital document wallet; documents inside it are legally equal to originals under the IT Act, 2000." },
    { topic: "Digital Services", q: "What is a CSC portal, and what helpline number should you dial immediately in case of an online financial scam?", a: "CSC is Common Service Centre (Digital Seva); dial 1930 for the National Cyber Crime Helpline." },
    { topic: "Internet & Email", q: "When sending an email in Gmail, which icon attaches a file, and what do .gov.in websites represent?", a: "The Paperclip icon attaches files; .gov.in / .nic.in are official Indian Government websites." },
    { topic: "C Programming", q: "Who invented C, and what is the role of the Compiler?", a: "Dennis Ritchie invented C in 1972; the Compiler checks syntax and translates C code into Machine Code (0s and 1s)." },
    { topic: "C Programming", q: "What are the Format Specifiers for int, float, and char in C?", a: "%d for int, %f for float, and %c for char." },
    { topic: "C Programming", q: "What is the difference between a 'while' loop and a 'do-while' loop in C?", a: "A while loop checks the condition first; a do-while loop runs the code once first before checking the condition." },
    { topic: "C Programming", q: "What is a Pointer (*ptr) and what does the '&' operator do in C?", a: "'&' returns the RAM memory address of a variable; a Pointer stores that memory address." },
    { topic: "Data Structures", q: "Explain the difference between a Stack and a Queue with a real-life example.", a: "A Stack is LIFO (Last In, First Out, like a stack of plates or Ctrl+Z Undo); a Queue is FIFO (First In, First Out, like a printer queue)." },
    { topic: "Web Designing", q: "What are the roles of HTML, CSS, and JavaScript in building a website?", a: "HTML builds the structure/skeleton, CSS styles the layout/colors, and JavaScript adds logic and interactivity." },
    { topic: "Web Designing", q: "What is the difference between CSS Flexbox and CSS Grid?", a: "Flexbox handles 1-Dimensional layouts (single row or column); CSS Grid handles 2-Dimensional layouts (rows and columns simultaneously)." },
    { topic: "Web Designing", q: "How does JavaScript change an HTML element live on the page?", a: "By selecting the element via the DOM using document.getElementById('id') and updating its .innerText or .style." },
    { topic: "MS Word", q: "What is the use of the Format Painter brush in MS Word?", a: "It copies the font/color formatting from selected text and applies it to another piece of text." },
    { topic: "MS Word", q: "Why should you use a Page Break instead of pressing Enter repeatedly?", a: "Page Break cleanly starts at the top of the next page without shifting layout if text is edited above." },
    { topic: "MS Excel", q: "What symbol starts every Excel formula, and what is the shortcut for AutoSum?", a: "The Equals sign (=) starts every formula; Alt + = is the shortcut for AutoSum." },
    { topic: "MS Excel", q: "What do Freeze Panes and Conditional Formatting do in MS Excel?", a: "Freeze Panes locks top headings while scrolling; Conditional Formatting automatically colors cells based on rules (e.g., marks < 30 in red)." },
    { topic: "MS PowerPoint", q: "What is the difference between Slide Transition and Custom Animation?", a: "A Slide Transition animates the change from one slide to the next; Custom Animation moves objects inside a single slide." },
    { topic: "MS PowerPoint", q: "What is the shortcut to start a presentation from Slide 1 vs. the current slide?", a: "F5 starts from Slide 1; Shift + F5 starts from the current slide." },
    { topic: "Typing Theory", q: "What are the Guide Keys on the Home Row, and which finger presses the Spacebar?", a: "F and J are the Guide Keys (with raised physical bumps); the Thumb presses the Spacebar." },
    { topic: "Typing Theory", q: "What is the Golden Rule of the Shift key when typing a single capital letter?", a: "Hold down the Shift key using the pinky finger of the hand opposite to the letter being typed." },
    { topic: "Typing Shortcuts", q: "What do Ctrl + Backspace and Ctrl + Shift + T do?", a: "Ctrl + Backspace deletes an entire word at once; Ctrl + Shift + T reopens the last closed browser tab." },
    { topic: "Fundamentals", q: "State the core technology of the 1st, 2nd, 3rd, and 4th Computer Generations.", a: "1st: Vacuum Tubes, 2nd: Transistors, 3rd: Integrated Circuits (IC), 4th: Microprocessors." },
    { topic: "Fundamentals", q: "What is the difference between Cold Booting and Warm Booting?", a: "Cold Booting is starting a PC from a powered-off state; Warm Booting is restarting a running PC." },
    { topic: "Fundamentals", q: "What is the difference between RAM and ROM?", a: "RAM is volatile temporary working memory; ROM is non-volatile permanent read-only startup memory." },
    { topic: "Hardware", q: "What is the function of the Power Supply Unit (PSU) and the VRM on the motherboard?", a: "The PSU converts wall AC into low-voltage DC; the VRM steps 12V down to ~1.2V for the CPU." },
    { topic: "Hardware", q: "What is the difference between an HDD and an SSD?", a: "An HDD uses spinning magnetic platters; an SSD uses high-speed flash memory chips with no moving parts." },
    { topic: "OS Basics", q: "What is the shortcut to take a custom area screenshot in Windows, and how do you open Task Manager?", a: "Windows Key + Shift + S opens Snip & Sketch; Ctrl + Shift + Esc opens Task Manager." },
    { topic: "OS Basics", q: "Why should you never defragment an SSD, and how should you uninstall a Windows program?", a: "Defragmenting degrades an SSD's lifespan; always uninstall programs via Control Panel > Programs and Features." },
    { topic: "Cyber Security", q: "What are Phishing, Ransomware, and Two-Factor Authentication (2FA)?", a: "Phishing is fake bait to steal passwords; Ransomware locks files for money; 2FA adds a second lock using a phone OTP." }
];
