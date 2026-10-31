// ==========================================
// 1. TALLY PRIME 7.0 (6 MONTHS) MCQ BANK (FROM BOOK)
// ==========================================
const tallyBookMCQs = [
    // I. Introduction to Accounting (Modules 1, 2, 3)
    { subject: "I. Introduction to Accounting", question: "According to the Business Entity Concept, when the owner invests personal money into the business, what is it called?", options: ["Drawings", "Capital", "Liability Loan", "Net Profit"], correctAnswer: 1 },
    { subject: "I. Introduction to Accounting", question: "If the owner takes ₹500 from the shop's cash box for personal use, how is it recorded in accounting?", options: ["Capital", "Direct Expense", "Drawings", "Sundry Debtors"], correctAnswer: 2 },
    { subject: "I. Introduction to Accounting", question: "Customers who buy goods from your business on credit (udhaar) and owe you money are called:", options: ["Sundry Creditors", "Sundry Debtors", "Liabilities", "Capital Providers"], correctAnswer: 1 },
    { subject: "I. Introduction to Accounting", question: "Suppliers from whom your business buys goods on credit are classified as:", options: ["Sundry Debtors (Assets)", "Fixed Assets", "Sundry Creditors (Liabilities)", "Nominal Accounts"], correctAnswer: 2 },
    { subject: "I. Introduction to Accounting", question: "What is the Golden Rule for a Real Account (Assets & Properties)?", options: ["Debit the Receiver, Credit the Giver", "Debit what comes in, Credit what goes out", "Debit all Expenses, Credit all Incomes", "Debit all Gains, Credit all Losses"], correctAnswer: 1 },
    { subject: "I. Introduction to Accounting", question: "What is the Golden Rule for a Personal Account (People, Banks & Companies)?", options: ["Debit what comes in, Credit what goes out", "Debit the Receiver, Credit the Giver", "Debit all Expenses & Losses, Credit all Incomes & Gains", "Debit Assets, Credit Liabilities"], correctAnswer: 1 },
    { subject: "I. Introduction to Accounting", question: "What is the Golden Rule for a Nominal Account (Incomes & Expenses)?", options: ["Debit all Expenses and Losses, Credit all Incomes and Gains", "Debit what comes in, Credit what goes out", "Debit the Giver, Credit the Receiver", "Debit Cash, Credit Bank"], correctAnswer: 0 },
    { subject: "I. Introduction to Accounting", question: "Under which type of account does an 'SBI Bank Account' fall?", options: ["Real Account", "Nominal Account", "Personal Account", "Suspense Account"], correctAnswer: 2 },
    { subject: "I. Introduction to Accounting", question: "In the Accounting Cycle, which statement lists all ledger balances to verify that total Debits equal total Credits?", options: ["Journal Diary", "Trial Balance", "Cash Memo", "Stock Summary"], correctAnswer: 1 },
    { subject: "I. Introduction to Accounting", question: "Which account calculates Gross Profit by comparing Sales against Purchase cost?", options: ["Balance Sheet", "Trading Account", "Trial Balance", "Bank Reconciliation"], correctAnswer: 1 },

    // II. Basics of Tally (Module 4)
    { subject: "II. Basics of Tally", question: "In Tally Prime Educational Mode, on which dates of any month are you allowed to record transactions?", options: ["Every day of the month", "Only the 1st, 2nd, and 31st of any month", "Only Sundays", "Only the 15th and 30th"], correctAnswer: 1 },
    { subject: "II. Basics of Tally", question: "Which universal shortcut opens the 'Go To' magic search bar from anywhere in Tally Prime?", options: ["Alt + K", "Alt + G", "Ctrl + A", "Alt + Y"], correctAnswer: 1 },
    { subject: "II. Basics of Tally", question: "What does the shortcut 'Ctrl + A' do inside Tally Prime?", options: ["Deletes a ledger", "Selects all text", "Quick Save / Instantly accepts and saves the current screen", "Opens the Company menu"], correctAnswer: 2 },
    { subject: "II. Basics of Tally", question: "In Tally Prime's top menu bar, what does a single underline under a letter (like K in Company) indicate?", options: ["Press Shift + Letter", "Press Alt + Letter", "Press Ctrl + Letter", "Press Function Key"], correctAnswer: 1 },
    { subject: "II. Basics of Tally", question: "Which top menu shortcut opens the 'Data' menu for backup and restore in Tally Prime?", options: ["Alt + K", "Alt + Y", "Alt + Z", "Alt + P"], correctAnswer: 1 },
    { subject: "II. Basics of Tally", question: "How should you safely close Tally Prime from the Gateway of Tally without risking data corruption?", options: ["Click the red X button forcefully", "Unplug the computer", "Press Escape (Esc) and press 'Y' to quit safely", "Press Ctrl + Alt + Delete"], correctAnswer: 2 },

    // III. Company Creation & Ledger Management (Module 5)
    { subject: "III. Company Creation & Ledger Management", question: "Which Function Key opens the 'Company Features' screen to enable/disable Accounting, Inventory, GST, and Payroll?", options: ["F1", "F11", "F12", "Alt + K"], correctAnswer: 1 },
    { subject: "III. Company Creation & Ledger Management", question: "How many Pre-defined Accounting Groups exist by default in Tally Prime?", options: ["15 Groups", "28 Groups (15 Primary, 13 Sub-groups)", "50 Groups", "10 Groups"], correctAnswer: 1 },
    { subject: "III. Company Creation & Ledger Management", question: "Which two default ledgers are already created automatically when you create a new company in Tally?", options: ["Sales and Purchase", "Cash and Profit & Loss A/c", "Bank and Capital", "CGST and SGST"], correctAnswer: 1 },
    { subject: "III. Company Creation & Ledger Management", question: "Under which Tally group should 'Office Rent' and 'Staff Salary' ledgers be placed?", options: ["Direct Expenses", "Fixed Assets", "Indirect Expenses", "Current Assets"], correctAnswer: 2 },
    { subject: "III. Company Creation & Ledger Management", question: "Under which Tally group should 'Computers' and 'Office Furniture' be placed?", options: ["Current Assets", "Fixed Assets", "Indirect Expenses", "Investments"], correctAnswer: 1 },
    { subject: "III. Company Creation & Ledger Management", question: "In Chart of Accounts > Ledgers, which shortcut opens 'Multi Masters' to alter multiple opening balances rapidly?", options: ["Alt + H", "Alt + G", "Ctrl + F", "Alt + X"], correctAnswer: 0 },

    // IV. Voucher Entry in Tally (Module 6)
    { subject: "IV. Voucher Entry in Tally", question: "Which shortcut key activates the 'Contra Voucher' for internal Cash and Bank transfers?", options: ["F4", "F5", "F6", "F7"], correctAnswer: 0 },
    { subject: "IV. Voucher Entry in Tally", question: "If you deposit ₹25,000 Cash into your SBI Bank account, which voucher must you use in Tally?", options: ["Payment (F5)", "Receipt (F6)", "Contra (F4)", "Journal (F7)"], correctAnswer: 2 },
    { subject: "IV. Voucher Entry in Tally", question: "Which voucher is used strictly when money goes OUT of the business (e.g., paying rent or paying a supplier)?", options: ["Contra (F4)", "Payment (F5)", "Receipt (F6)", "Sales (F8)"], correctAnswer: 1 },
    { subject: "IV. Voucher Entry in Tally", question: "Which voucher is used when money comes INTO the business (e.g., owner brings Capital or customer pays a bill)?", options: ["Receipt (F6)", "Payment (F5)", "Journal (F7)", "Purchase (F9)"], correctAnswer: 0 },
    { subject: "IV. Voucher Entry in Tally", question: "Which voucher (F7) is used for non-cash adjustments like Depreciation or buying Fixed Assets on credit?", options: ["Contra Voucher", "Journal Voucher", "Sales Voucher", "Receipt Voucher"], correctAnswer: 1 },
    { subject: "IV. Voucher Entry in Tally", question: "What are the shortcut keys for Sales and Purchase vouchers in Tally Prime?", options: ["F5 for Sales, F6 for Purchase", "F8 for Sales, F9 for Purchase", "F4 for Sales, F7 for Purchase", "Alt+F5 for Sales, Alt+F6 for Purchase"], correctAnswer: 1 },
    { subject: "IV. Voucher Entry in Tally", question: "In Sales (F8) or Purchase (F9), which shortcut lets you 'Change Mode' between Item Invoice and Accounting Voucher?", options: ["Ctrl + H", "Ctrl + A", "Alt + G", "Alt + X"], correctAnswer: 0 },
    { subject: "IV. Voucher Entry in Tally", question: "Which voucher is used for a 'Purchase Return' when you return damaged goods back to your supplier?", options: ["Credit Note (Alt + F6)", "Debit Note (Alt + F5)", "Contra (F4)", "Receipt (F6)"], correctAnswer: 1 },
    { subject: "IV. Voucher Entry in Tally", question: "In the Day Book, which shortcut safely cancels a voucher without deleting its voucher number trace?", options: ["Alt + D", "Alt + X", "Ctrl + A", "Alt + F2"], correctAnswer: 1 },

    // V. Inventory Management (Module 7)
    { subject: "V. Inventory Management", question: "When creating a Simple Unit of Measure (like PCS), what must be mapped for official GST e-Way bill compliance?", options: ["HSN Number", "UQC (Unique Quantity Code)", "Godown Address", "PAN Number"], correctAnswer: 1 },
    { subject: "V. Inventory Management", question: "A unit defined as '1 Box of 10 PCS' in Tally is called a:", options: ["Simple Unit", "Compound Unit", "Nominal Unit", "Category Unit"], correctAnswer: 1 },
    { subject: "V. Inventory Management", question: "What is the default storage location/godown name present in Tally Prime before creating new godowns?", options: ["Main Location", "Head Office", "Default Store", "Central Warehouse"], correctAnswer: 0 },
    { subject: "V. Inventory Management", question: "Which voucher (Alt + F7) is used to transfer physical stock from 'Warehouse A' to 'Main Shop'?", options: ["Contra Voucher", "Stock Journal", "Physical Stock", "Delivery Note"], correctAnswer: 1 },
    { subject: "V. Inventory Management", question: "In the Stock Summary report, which shortcut expands the view into a 'Detailed' breakdown?", options: ["Alt + F5", "Ctrl + H", "Alt + G", "F11"], correctAnswer: 0 },

    // VI. Taxation in Tally (GST, TDS, TCS) (Module 8)
    { subject: "VI. Taxation in Tally (GST, TDS, TCS)", question: "How many digits are there in an official Indian GSTIN (Goods and Services Tax Identification Number)?", options: ["10 digits", "12 digits", "15 digits", "16 digits"], correctAnswer: 2 },
    { subject: "VI. Taxation in Tally (GST, TDS, TCS)", question: "Under which primary group must CGST, SGST, and IGST ledgers be created in Tally?", options: ["Indirect Expenses", "Current Assets", "Duties & Taxes", "Provisions"], correctAnswer: 2 },
    { subject: "VI. Taxation in Tally (GST, TDS, TCS)", question: "When selling goods to a customer located in a DIFFERENT state (Interstate Sale), which tax ledger is applied?", options: ["CGST and SGST", "Only IGST (Integrated GST)", "Only SGST", "VAT"], correctAnswer: 1 },
    { subject: "VI. Taxation in Tally (GST, TDS, TCS)", question: "Which GST report in Tally shows all Outward Supplies (B2B and B2C sales invoices)?", options: ["GSTR-1", "GSTR-2A", "GSTR-3B", "GSTR-9"], correctAnswer: 0 },
    { subject: "VI. Taxation in Tally (GST, TDS, TCS)", question: "In GSTR-1, where does Tally group invoices that have missing or invalid 15-digit GSTINs?", options: ["B2B Invoices", "Uncertain Transactions (Corrections needed)", "Exempted Supplies", "HSN Summary"], correctAnswer: 1 },
    { subject: "VI. Taxation in Tally (GST, TDS, TCS)", question: "When deducting TDS on an Audit Fee bill before paying the party, which voucher is used first to record the deduction?", options: ["Contra (F4)", "Journal Voucher (F7)", "Receipt (F6)", "Sales (F8)"], correctAnswer: 1 },

    // VII. Payroll & Employee Records (Module 9)
    { subject: "VII. Payroll & Employee Records", question: "In Tally Payroll, how are Basic Pay and HRA classified when creating Pay Heads?", options: ["Employees Statutory Deduction", "Earnings for Employees", "Loans and Advances", "Reimbursements"], correctAnswer: 1 },
    { subject: "VII. Payroll & Employee Records", question: "How is Provident Fund (PF) deduction classified when creating a Pay Head?", options: ["Earnings for Employees", "Employees Statutory Deduction", "Bonus", "Direct Income"], correctAnswer: 1 },
    { subject: "VII. Payroll & Employee Records", question: "While entering a Payroll Voucher, which shortcut triggers 'Payroll Autofill' to calculate salaries for all employees at once?", options: ["Ctrl + F", "Alt + A", "Ctrl + H", "Alt + G"], correctAnswer: 0 },

    // VIII. Banking Features in Tally (Module 10)
    { subject: "VIII. Banking Features in Tally", question: "Which feature in Tally aligns your software bank ledger balance with your physical bank passbook by entering clearance dates?", options: ["Trial Balance", "Bank Reconciliation Statement (BRS)", "Stock Summary", "Cash Flow Projection"], correctAnswer: 1 },
    { subject: "VIII. Banking Features in Tally", question: "In the Bank Reconciliation screen, what date must you enter next to each transaction to clear it?", options: ["The Voucher Date", "The actual Bank Date (when the cheque cleared in the bank)", "The Company Creation Date", "The Year-End Date"], correctAnswer: 1 },
    { subject: "VIII. Banking Features in Tally", question: "Before printing on a real physical bank cheque from Tally, what should you always check first?", options: ["GSTR-3B", "Print Preview (to verify Name and Amount alignment)", "Stock Summary", "Day Book Cancel"], correctAnswer: 1 }
];

// Inject Tally questions into TALLY, DCA, and PGDCA course pools automatically
if (typeof courseSpecificBatches !== 'undefined') {
    courseSpecificBatches["TALLY"] = [tallyBookMCQs];
    // Map Tally questions into DCA and PGDCA Tally subjects too
    const dcaTally = tallyBookMCQs.map(q => ({ ...q, subject: "VIII. Tally with GST" }));
    const pgdcaTally = tallyBookMCQs.map(q => ({ ...q, subject: "VIII. Tally ERP with GST" }));
    courseSpecificBatches["DCA"] = [dcaTally];
    courseSpecificBatches["PGDCA"] = [pgdcaTally];
}

// ==========================================
// 2. COURSE-WISE PRACTICAL EXAM QUESTIONS (STUDENT SELECTS 1)
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
                "Create columns in Row 2: Student Name, Word, Excel, Tally, Total Marks, Average. Apply 'All Borders'.",
                "Enter data for 5 students and calculate Total Marks using =SUM() and Average using =AVERAGE().",
                "Apply Conditional Formatting to highlight any subject score below 35 in Red.",
                "Insert a 2D Column/Bar Chart comparing the 5 students' Total Marks."
            ]
        },
        {
            id: "GEN_P3",
            app: "Tally Prime / PowerPoint",
            title: "Option 3: Presentation Design or Basic Tally Voucher Entry",
            marks: 50,
            steps: [
                "In MS PowerPoint: Create a 4-slide presentation on 'Cyber Security Rules' using a consistent Design Theme, Slide Transitions, and Custom Animations.",
                "OR in Tally Prime: Create a company, enter 5 Ledgers with Opening Balances, and record 5 daily Vouchers (Contra, Payment, Receipt, Sales, Purchase)."
            ]
        }
    ]
};

// ==========================================
// 3. 50 ADMIN-ONLY VIVA QUESTIONS & ANSWERS
// ==========================================
const VIVA_MASTER_BANK = [
    { topic: "Accounting", q: "What is the Business Entity Concept in accounting?", a: "The business and its owner are treated as two completely separate legal entities." },
    { topic: "Accounting", q: "What is 'Capital' in a business?", a: "The money or assets invested by the owner into the business." },
    { topic: "Accounting", q: "What is meant by 'Drawings'?", a: "Cash or goods withdrawn by the owner from the business for personal use." },
    { topic: "Accounting", q: "Who is a Sundry Debtor?", a: "A customer who buys goods from us on credit and owes money to the business (Asset)." },
    { topic: "Accounting", q: "Who is a Sundry Creditor?", a: "A supplier from whom we buy goods on credit and to whom the business owes money (Liability)." },
    { topic: "Golden Rules", q: "State the Golden Rule for Real Accounts.", a: "Debit what comes in, Credit what goes out." },
    { topic: "Golden Rules", q: "State the Golden Rule for Personal Accounts.", a: "Debit the Receiver, Credit the Giver." },
    { topic: "Golden Rules", q: "State the Golden Rule for Nominal Accounts.", a: "Debit all Expenses and Losses, Credit all Incomes and Gains." },
    { topic: "Golden Rules", q: "Why is a Bank Account treated as a Personal Account?", a: "Because a bank is an artificial legal institution that receives or gives money." },
    { topic: "Accounting Cycle", q: "What is a narration in a Journal entry?", a: "A brief explanation written below a voucher/journal entry describing the transaction." },
    { topic: "Accounting Cycle", q: "What is the purpose of a Trial Balance?", a: "To verify arithmetical accuracy by checking that total Debits equal total Credits." },
    { topic: "Tally Prime", q: "What is the only restriction in Tally Prime's free Educational Mode?", a: "You can only record transactions dated the 1st, 2nd, and 31st of any month." },
    { topic: "Tally Shortcuts", q: "What is the shortcut key for the 'Go To' search bar in Tally Prime?", a: "Alt + G." },
    { topic: "Tally Shortcuts", q: "What does Ctrl + A do in Tally Prime?", a: "It acts as Quick Save—instantly accepting and saving the current screen." },
    { topic: "Tally Shortcuts", q: "What is the difference between a single underline and double underline on Tally menu buttons?", a: "Single underline means press Alt + key; Double underline means press Ctrl + key." },
    { topic: "Company Setup", q: "Which key opens Company Features in Tally Prime?", a: "F11." },
    { topic: "Groups & Ledgers", q: "How many pre-defined groups are available in Tally Prime?", a: "28 pre-defined groups (15 Primary groups and 13 Sub-groups)." },
    { topic: "Groups & Ledgers", q: "Which two ledgers are created by default in a new Tally company?", a: "Cash and Profit & Loss A/c." },
    { topic: "Groups & Ledgers", q: "Under which group do you place Office Rent and Electricity Bills?", a: "Indirect Expenses." },
    { topic: "Groups & Ledgers", q: "Under which group do you place Computers and Furniture?", a: "Fixed Assets." },
    { topic: "Vouchers", q: "When do you use a Contra Voucher (F4)?", a: "Only for internal cash and bank movements (Cash deposit, ATM withdrawal, or Bank-to-Bank transfer)." },
    { topic: "Vouchers", q: "What are the shortcut keys for Payment and Receipt vouchers?", a: "F5 for Payment (money out) and F6 for Receipt (money in)." },
    { topic: "Vouchers", q: "When do you use a Journal Voucher (F7)?", a: "For non-cash adjustments like depreciation, tax adjustments, or buying fixed assets on credit." },
    { topic: "Vouchers", q: "What are the shortcut keys for Sales and Purchase vouchers?", a: "F8 for Sales and F9 for Purchase." },
    { topic: "Vouchers", q: "How do you switch between Item Invoice mode and Accounting Voucher mode in F8/F9?", a: "By pressing Ctrl + H (Change Mode)." },
    { topic: "Vouchers", q: "What is the difference between a Debit Note (Alt+F5) and a Credit Note (Alt+F6)?", a: "Debit Note is for Purchase Returns (to supplier); Credit Note is for Sales Returns (from customer)." },
    { topic: "Day Book", q: "How do you cancel vs. delete a voucher in the Day Book?", a: "Alt + X cancels the voucher (keeping the number placeholder); Alt + D deletes it completely." },
    { topic: "Inventory", q: "What is a Compound Unit in Tally?", a: "A combination of two simple units, such as '1 Box of 12 Pieces'." },
    { topic: "Inventory", q: "Why must we select UQC (Unique Quantity Code) when creating a unit?", a: "It is mandatory for accurate GST Return filing and e-Way Bill generation." },
    { topic: "Inventory", q: "Which voucher is used to transfer stock between two Godowns?", a: "Stock Journal (Alt + F7)." },
    { topic: "GST Taxation", q: "How many characters are in a valid GSTIN?", a: "15 characters (first 2 digits represent the State Code, followed by 10-digit PAN)." },
    { topic: "GST Taxation", q: "Under which group are CGST, SGST, and IGST ledgers created?", a: "Duties & Taxes." },
    { topic: "GST Taxation", q: "When do we charge CGST+SGST versus IGST?", a: "CGST+SGST are charged on intrastate (within same state) sales; IGST is charged on interstate sales." },
    { topic: "GST Taxation", q: "What is the difference between GSTR-1 and GSTR-3B?", a: "GSTR-1 details all outward sales invoices; GSTR-3B is the monthly summary return showing net tax payable after ITC." },
    { topic: "TDS & TCS", q: "What is the difference between TDS and TCS?", a: "TDS (Tax Deducted at Source) is deducted when making specified payments; TCS (Tax Collected at Source) is collected by the seller on specified sales." },
    { topic: "Payroll", q: "What shortcut processes salary automatically in a Payroll Voucher?", a: "Ctrl + F (Payroll Autofill)." },
    { topic: "Banking", q: "What is a Bank Reconciliation Statement (BRS)?", a: "A statement that matches the Tally bank ledger balance with the real bank passbook by recording cheque clearance dates." },
    { topic: "MS Word", q: "What is the use of the Format Painter in MS Word?", a: "It copies the formatting/design of selected text and applies it to another piece of text." },
    { topic: "MS Word", q: "Why should we use Ctrl + Enter (Page Break) instead of pressing Enter repeatedly?", a: "Page Break cleanly starts a new page without shifting layout if text is edited above." },
    { topic: "MS Word", q: "What is the difference between a Header/Footer and a Watermark?", a: "Headers/Footers appear at the top/bottom margins of every page; a Watermark appears faded behind the main document text." },
    { topic: "MS Excel", q: "What symbol must every formula in MS Excel start with?", a: "The Equals sign (=)." },
    { topic: "MS Excel", q: "What is the difference between =COUNT() and =SUM() in Excel?", a: "=SUM() adds the numerical values together; =COUNT() counts how many cells contain numbers." },
    { topic: "MS Excel", q: "What does 'Freeze Panes' do in MS Excel?", a: "It locks specific rows or columns in place so headings stay visible while scrolling down a large sheet." },
    { topic: "MS Excel", q: "What does Conditional Formatting do?", a: "It automatically formats/colors cells based on rules (e.g., turning marks below 30 red)." },
    { topic: "MS PowerPoint", q: "What is the difference between Slide Transition and Custom Animation?", a: "Transitions animate the movement from one slide to the next; Animations move individual objects inside a slide." },
    { topic: "MS PowerPoint", q: "What is the shortcut to start a slide show from the first slide vs. current slide?", a: "F5 starts from the first slide; Shift + F5 starts from the current slide." },
    { topic: "Fundamentals", q: "What is the difference between RAM and ROM?", a: "RAM is volatile temporary working memory; ROM is non-volatile permanent read-only startup memory." },
    { topic: "Components", q: "Why is an SSD faster than a traditional HDD?", a: "An SSD uses flash memory chips with no moving parts, whereas an HDD relies on spinning magnetic platters." },
    { topic: "OS Basics", q: "What is the shortcut to open the Windows Task Manager directly?", a: "Ctrl + Shift + Esc." },
    { topic: "Cyber Security", q: "What are Phishing and Two-Factor Authentication (2FA)?", a: "Phishing is a fake message/link designed to steal passwords; 2FA adds a second security step like an OTP." }
];
