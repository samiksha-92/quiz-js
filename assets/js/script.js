/** Caching the DOM **/

let submit_button = document.querySelector("#submit");
let question = document.querySelector(".questions");
let option_1 = document.querySelector("#question_option_one");
let option_2 = document.querySelector("#question_option_two");
let option_3 = document.querySelector("#question_option_three");
let option_4 = document.querySelector("#question_option_four");


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


let first_Question_Load = () => {
    question.innerText = quiz_DB[0].question;
    option_1.innerText = quiz_DB[0].a;
    option_2.innerText = quiz_DB[0].b;
    option_3.innerText = quiz_DB[0].c;
    option_4.innerText = quiz_DB[0].d

}




first_Question_Load();