/** Caching the DOM **/
let userScore = 0;
let options = document.querySelectorAll(".options");
let submit_button = document.querySelector("#submit");
let question = document.querySelector(".questions");
let option_1 = document.querySelector("#question_option_one");
let option_2 = document.querySelector("#question_option_two");
let option_3 = document.querySelector("#question_option_three");
let option_4 = document.querySelector("#question_option_four");
let questionNumber = 0



const quiz_DB = [

    {
        question: "Q1: Which is the smallest ocean in the world?",
        a: "Indian",
        b: "Pacific",
        c: "Atlantic",
        d: "Artic",
        ans: "ans4"
    },

    {
        question: "Q2: The Dead Sea is located between which two countries ?",
        a: "Jordan and Israel",
        b: "Jordan and Sudan",
        c: "Turkey and UAE",
        d: "UAE and Egypt",
        ans: "ans1"
    },

    {
        question: "Q3: Which country is called the playground of Europe ? ",
        a: "Spain",
        b: "Portugal",
        c: "Netherlands",
        d: "Switzerland",
        ans: "ans4"
    },

    {
        question: "Q4: In which country white elephant is found ?",
        a: "Thailand",
        b: "India",
        c: "Malaysia",
        d: "Srilanka",
        ans: "ans1"
    }
];


let firstQuestionLoad = () => {
    question.innerText = quiz_DB[questionNumber].question;
    option_1.innerText = quiz_DB[questionNumber].a;
    option_2.innerText = quiz_DB[questionNumber].b;
    option_3.innerText = quiz_DB[questionNumber].c;
    option_4.innerText = quiz_DB[questionNumber].d

}





let getCorrectAnswer = () => {
    let answer;
    options.forEach((option) => {
        if (option.checked) {
            answer = option.id
        }

    });
    return answer;
};

submit_button.addEventListener("click", () => {
    let correctAnswer = getCorrectAnswer();
    console.log(correctAnswer);

    if (correctAnswer === quiz_DB[0].ans) {
        userScore += 1
    };

    questionNumber += 1
    if (questionNumber < quiz_DB.length) {
        firstQuestionLoad();
    }
});

firstQuestionLoad();