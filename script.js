let currentQuestionIndex = 0;
let username = '';
let questionsSet = [
    { question: "What is the time complexity of binary search in a sorted array?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], answer: "O(log n)" },
    { question: "Which of the following data structures does not support efficient random access?", options: ["Array", "Linked List", "Stack", "Queue"], answer: "Linked List" },
    { question: "What is the output of the following C code? <br> int x = 5; <br> printf('%d', ++x);", options: ["4", "5", "6", "Error"], answer: "6" },
    { question: "Which of the following sorting algorithms has the best average-case time complexity?", options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"], answer: "Quick Sort" },
    { question: "Which of the following is not a type of polymorphism in object-oriented programming?", options: ["Compile-time polymorphism", "Runtime polymorphism", "Interface polymorphism", "Overloading polymorphism"], answer: "Interface polymorphism" },
    { question: "Which of the following is a characteristic of a stack data structure?", options: ["Follows FIFO", "Follows LIFO", "Elements are accessed in random order", "None of the above"], answer: "Follows LIFO" },
    { question: "Which of the following is an example of a greedy algorithm?", options: ["Merge Sort", "Dijkstra's Algorithm", "Quick Sort", "Bubble Sort"], answer: "Dijkstra's Algorithm" },
    { question: "What does the acronym DBMS stand for in computer science?", options: ["Data Binary Management System", "Data Base Management System", "Data Backup Management System", "None of the above"], answer: "Data Base Management System" },
    { question: "Which type of inheritance is not supported by Java?", options: ["Single Inheritance", "Multiple Inheritance", "Multilevel Inheritance", "Hierarchical Inheritance"], answer: "Multiple Inheritance" },
    { question: "What is the purpose of the 'static' keyword in Java?", options: ["It is used to define constants.", "It is used to create an object of a class.", "It is used to allocate memory for variables and methods.", "It is used to declare variables and methods that belong to the class, rather than instances of the class."], answer: "It is used to declare variables and methods that belong to the class, rather than instances of the class." }
];

function startQuiz() {
    username = document.getElementById('username').value;
    if (username === '') {
        alert("Please enter your name!");
        return;
    }
    document.getElementById('credentials').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    let currentQuestion = questionsSet[currentQuestionIndex];
    document.getElementById('question').innerHTML = currentQuestion.question;
    let optionsHtml = '';
    currentQuestion.options.forEach(option => {
        optionsHtml += `<button class="option-btn" onclick="checkAnswer('${option}', this)">${option}</button>`;
    });
    document.getElementById('options').innerHTML = optionsHtml;
}

function checkAnswer(selectedOption, button) {
    let currentQuestion = questionsSet[currentQuestionIndex];
    let optionsButtons = document.querySelectorAll('.option-btn');

    // Highlight the selected option
    button.classList.add('selected');

    // Disable all options
    optionsButtons.forEach(button => {
        if (button.innerText === currentQuestion.answer) {
            button.classList.add('correct');
        }
        if (button.innerText !== currentQuestion.answer) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionsSet.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuestionIndex < questionsSet.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('question').innerHTML = `Thank you for participating, ${username}!`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('next').style.display = 'none';
    let moreQuestions = confirm("Do you want more questions?");
    if (moreQuestions) {
        currentQuestionIndex = 0;
        loadQuestion();
        document.getElementById('next').style.display = 'block';
    } else {
        alert("Thanks for participating!");
    }
}
