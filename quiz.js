const quizData = [
    {
        question: "It is called the brain of the computer.",
        options: { a: "Motherboard", b: "CPU", c: "HDD", d: "GPU" },
        correct: "b",
    },
    {
        question: "When did Java was created?",
        options: { a: "1989", b: "1996", c: "1995", d: "1994" },
        correct: "c",
    },
    {
        question: "Who created Laravel?",
        options: { a: "Bill Gates", b: "James Gosling", c: "Dennis Ritchie", d: "Taylor Otwell" },
        correct: "d",
    },
    {
        question: "In Database, it is used to remove a table from a database.",
        options: { a: "Drop Table", b: "Remove Table", c: "Alter Table", d: "Create Table" },
        correct: "a",
    },
    {
        question: "In COBOL, which of these are not a division of COBOL?",
        options: { a: "Identification Division", b: "Procedure Division", c: "Data Division", d: "None of the above" },
        correct: "d",
    },
    {
        question: "In Java, It is a collection of abstract methods and constants.",
        options: { a: "Interface", b: "Class", c: "Function", d: "Implement" },
        correct: "a",
    },
    {
        question: "In a search engine, it is a process in which search engines scan all the internet webpages continuously.",
        options: { a: "Index", b: "Trends", c: "Crawling", d: "Inspecting" },
        correct: "c",
    },
    {
        question: "Javascript was first known as?",
        options: { a: "LiveScript", b: "Oak", c: "JavaLite", d: "Java++" },
        correct: "a",
    },
    {
        question: "When did the crypto currency “Bitcoin” was created?",
        options: { a: "2009", b: "2008", c: "2005", d: "2004" },
        correct: "a",
    },
    {
        question: "Which of these are not web browser?",
        options: { a: "Safari", b: "Brave", c: "Bing", d: "Tor" },
        correct: "c",
    },
    {
        question: "What do you call the computer created by Charles Babbage , the father of the computer?",
        options: { a: "Abacus", b: "Calculator", c: "Algorithmic Machine", d: "Difference Engine" },
        correct: "d",
    },
    {
        question: "In Networking, it is a network created when 2 or more PCs are connected and share resources without going through a separate server computer.",
        options: { a: "Client-Server", b: "Wireless connection", c: "Peer to peer", d: "OSI Model" },
        correct: "c",
    },
    {
        question: "What is the most famous virus created in the Philippines?",
        options: { a: "CryptoLocker", b: "ILOVEYOU", c: "Code Red", d: "Mydoom" },
        correct: "b",
    },
    {
        question: "What is the answer to this mathematical question [15-5/(2*4)+1]?",
        options: { a: "16.36", b: "17.36", c: "14.38", d: "15.38" },
        correct: "d",
    },
    {
        question: "What theorem does a^.2 + b^2 = c^2 belong to?",
        options: { a: "Triangle sum theorem", b: "Pythagorean theorem", c: "Birch’s theorem", d: "Fundamental theorem of algebra" },
        correct: "b",
    },
    {
        question: "Anne opens a savings account with a deposit of ₱670. She will earn 1.5% interest each year on her money. How much interest will she earn over a period of 10 years?",
        options: { a: " ₱120.32", b: "₱100.50", c: " ₱98.78", d: " ₱102.03" },
        correct: "b",
    },
    {
        question: "In accounting, it is an account entry that shows an increase of assets and decrease of liabilities.",
        options: { a: "Credit", b: "Debit", c: "Equity", d: "Cashflow" },
        correct: "b",
    },
    {
        question: "It is the study of data that can be used to handle data by collecting, analysing and presenting it.",
        options: { a: "Statistics", b: "Probability", c: "Research", d: "Mathematics" },
        correct: "a",
    },
    {
        question: "In a deck of cards (52 cards), what is the probability of getting a king card?",
        options: { a: "1/14", b: "2/15", c: "1/13", d: "2/11" },
        correct: "c",
    },
    {
        question: "Convert 36 degrees celsius to Fahreinheit?",
        options: { a: "95.60°F", b: "96.60°F", c: "95.80°F", d: "96.80°F" },
        correct: "d",
    }
];

let currentQuestionIndex = 0;  // Keeps track of the current question
let userAnswers = [];           // Array to store user answers

// Get button elements
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to show the current question and its options
function showQuestion() {
    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("question-number");
    const optionsContainer = document.getElementById("options");

    // Get the current question and options
    const currentQuestion = quizData[currentQuestionIndex];
    const options = currentQuestion.options;

    // Set the question text
    questionElement.innerText = currentQuestion.question;
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1}`;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create two columns for options
    const leftColumn = document.createElement("div");
    const rightColumn = document.createElement("div");
    leftColumn.classList.add("col-6");
    rightColumn.classList.add("col-6");

    // Loop through the options and create buttons
    let index = 0;
    for (const option in options) {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option-button");
        optionButton.innerText = options[option];

        // Add click event listener to handle option selection
        optionButton.addEventListener("click", () => selectAnswer(option, optionButton));

        // Append to left or right column
        if (index < 2) {
            leftColumn.appendChild(optionButton);
        } else {
            rightColumn.appendChild(optionButton);
        }
        index++;
    }

    // Append columns to the options container
    optionsContainer.appendChild(leftColumn);
    optionsContainer.appendChild(rightColumn);

    // Manage button visibility
    prevButton.classList.toggle("hidden", currentQuestionIndex === 0);
    nextButton.innerText = currentQuestionIndex === quizData.length - 1 ? "Submit" : "Next";

    // Highlight the previously selected answer if it exists
    highlightSelectedAnswer();
}

// Function to store the answer and highlight the selected option
function selectAnswer(selectedOption, selectedButton) {
    userAnswers[currentQuestionIndex] = selectedOption; // Store the user's answer

    // Get all option buttons and remove the selected class
    const optionButtons = document.querySelectorAll(".option-button");
    optionButtons.forEach(button => {
        button.classList.remove("selected"); // Remove highlight
    });

    // Highlight the selected button
    selectedButton.classList.add("selected");
}

// Function to highlight the previously selected answer
function highlightSelectedAnswer() {
    const selectedOption = userAnswers[currentQuestionIndex];
    if (selectedOption) {
        const optionButtons = document.querySelectorAll(".option-button");
        optionButtons.forEach(button => {
            if (button.innerText === quizData[currentQuestionIndex].options[selectedOption]) {
                button.classList.add("selected");
            }
        });
    }
}

// Function to handle navigation
function handleNavigation() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // Redirect to the submit page
        localStorage.setItem("userAnswers", JSON.stringify(userAnswers)); // Store answers in local storage
        window.location.href = "submit.html"; // Navigate to the submit page
    }
}

// Event listeners for the buttons
nextButton.addEventListener("click", handleNavigation);
prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

// Call the function to display the first question when the page loads
showQuestion();
