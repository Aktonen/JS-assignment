function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer))
    this.questionIndex++;

    // Ran out of time. Quick solution for ending the quiz
    if(this.questionIndex == 9){
        alert("Thanks for playing")
        location.reload()
    }
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function display() {

    // show question
    let element = document.getElementById("question");
    element.innerText = quiz.getQuestionIndex().text;

    // show options
    let choices = quiz.getQuestionIndex().choices;
    for(let i = 0; i < choices.length; i++) {
        let element = document.getElementById("choice" + i);
        element.innerText = choices[i];
        guess("btn" + i, choices[i]);
    }
    showProgress();
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        display();
    }
};

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerText = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

// Questions
let questions = [
    new Question("What is the smallest planet in our solar system?", ["Mercury", "Jupiter ", "Earth", "Pluto"], "Mercury"),
    new Question("Who is the president of the United States?", ["Barrack Obama", "Hillary Clinton", "Joe Biden", "Donald Trump"], "Joe Biden"),
    new Question("Gouda is a popular cheese originating from which country?", ["Turkey", "Canada", "The Netherlands", "Switzerland"], "The Netherlands"),
    new Question("What is the capital city of Australia?", ["Brisbane", "Melbourne", "Sydney", "Canberra"], "Canberra"),
    new Question("What language is spoken in Brazil?", ["Brazil", "Portuguese", "English", "Spanish"], "Portuguese"),
    new Question("What is the tallest mountain in the world?", ["Alps", "Cho Oyu", "K2", "Mount Everest"], "Mount Everest"),
    new Question("What number is a baker’s dozen?", ["13", "12", "0", "20"], "13"),
    new Question("What colour are most buses in London?", ["Blue", "White", "Red", "Black"], "Red"),
    new Question("How many players are in a football team?", ["11", "12", "10", "13"], "11"),
];

// create quiz
let quiz = new Quiz(questions);

// display quiz
display();