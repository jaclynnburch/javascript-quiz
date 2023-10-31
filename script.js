const questions = [
    // inputting quiz questions
    {
        question: 'What is true about Javascript',
        options: ['A text-based programming language', 'Used both on the client-side and server-side', 'Gives web pages interactive elements that engage a user', 'All of the above'],
        answer: 'All of the above',
    },
    {
        question: 'Why study JavaScript',
        options: ['to define the content of web pages', 'to specify the layout of web pages', 'to program the behavior of web pages'],
        answer: 'to program the behavior of web pages',
    },
    {
        question: 'Where is the correct place to insert a JavaScript',
        options: ['The <head> section', 'Both <head> section and the <body> section', 'The <body> section'],
        answer: 'The <head> section',
    },
    {
        question: 'Which of the following is not a JavaScript framework?',
        options: ['React', 'Angular', 'Bootstrap'],
        answer: 'Bootstrap',
    },
    {
        question: 'What is the result of 10 + "5" in JavaScript?',
        options: ['10', '15', '105'],
        answer: '105',
    },
];

// setting timer
let timeInterval;
let timeLeft = 60;

// track quiz progress
let currentQuestionIndex = 0;
let correctAnswers = 0;

// select html elements
const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('optionsContainer');
const timerElement = document.getElementById('timer');
const resultMessage = document.getElementById('result-message');
const saveScoreButton = document.getElementById('save-score-button');
const initialsInput = document.getElementById('initials-input');
const highScoresList = document.getElementById('high-scores-list');

// function to start the quiz
function startQuiz() {
    startButton.style.display = 'none';
    timeInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = 'Time: ' + timeLeft;
        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            endQuiz();
        }
    }, 1000);
    showQuestion();
}

// function to display question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';

    // Create and display answer choices
    question.options.forEach((option) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(optionButton);
    });
}

// Function to check the answer
function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        correctAnswers++;
    } else {
        timeLeft -= 10; // Deduct time for incorrect answers
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timeInterval);
    timerElement.textContent = 'Time: ' + timeLeft;
    questionElement.textContent = 'Quiz Over!';
    optionsContainer.innerHTML = '';
    resultMessage.textContent = 'You got ' + correctAnswers + ' out of ' + questions.length + ' questions correct.';
    // Display the save score input and button
    initialsInput.style display = 'block';
    saveScoreButton.style display = 'block';
}

// Function to save the score
function saveScore() {
    const initials = initialsInput.value.trim();
    if (initials === '') {
        alert('Please enter your initials.');
        return;
    }
    // Save the score and initials to local storage or an array
    // Display high scores
    // Reset the game or navigate to a different page
}

// Add event listeners
startButton.addEventListener('click', startQuiz);
saveScoreButton.addEventListener('click', saveScore);
