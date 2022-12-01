/** Caching the DOM **/
let progressText = document.querySelector("#progressText");
let userScore = 0;
let displayUserScore = document.querySelector("#display_score");
let options = document.querySelectorAll(".options");
let submit_button = document.querySelector("#submit");
let question = document.querySelector(".questions");
let option_1 = document.querySelector("#question_option_one");
let option_2 = document.querySelector("#question_option_two");
let option_3 = document.querySelector("#question_option_three");
let option_4 = document.querySelector("#question_option_four");
let questionNumber = 0;
let actualQuestionNumber = 1;
let totalQuestions = 10;



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
    },

    {
        question: "Q5: Emu Bird is found in which country ?",
        a: "Australia",
        b: "New Zealand",
        c: "Japan",
        d: "Srilanka",
        ans: "ans1"
    },

    {
        question: "Q6: In which country the tallest water Angel Falls is located ?",
        a: "Venezuela",
        b: "United States",
        c: "Peru",
        d: "Norway",
        ans: "ans1"
    },

    {
        question: "Q7: Which country has the most number of lakes ?",
        a: "Canada",
        b: "India",
        c: "Brazil",
        d: "Finland",
        ans: "ans1"
    },
    {
        question: "Q8: In which country Yellowstone National Park is located ?",
        a: "Russia",
        b: "Canada",
        c: "Brazil",
        d: "United States",
        ans: "ans4"
    },
    {
        question: "Q9: Which is the longest continental mountain range in the world ?",
        a: "The Himalaya ",
        b: "Andes",
        c: "Rocky Mountains",
        d: "Srilanka",
        ans: "ans2"
    },
    {
        question: "Q10: Which country is known as the land of Tulips ?",
        a: "The Netherlands",
        b: "Italy",
        c: "Switzerland",
        d: "Russia",
        ans: "ans1"
    },
];



let firstQuestionLoad = () => {
    progressText.innerText = ` Question:${actualQuestionNumber}/${totalQuestions}`;
    question.innerText = quiz_DB[questionNumber].question;
    option_1.innerText = quiz_DB[questionNumber].a;
    option_2.innerText = quiz_DB[questionNumber].b;
    option_3.innerText = quiz_DB[questionNumber].c;
    option_4.innerText = quiz_DB[questionNumber].d;

};





let getCorrectAnswer = () => {
    let answer;
    options.forEach((option) => {
        if (option.checked) {
            answer = option.id;
        }

    });
    return answer;
};

submit_button.addEventListener("click", () => {
    let correctAnswer = getCorrectAnswer();
    console.log(correctAnswer);

    if (correctAnswer === quiz_DB[questionNumber].ans) {
        userScore += 1;
    };

    questionNumber += 1;
    actualQuestionNumber += 1;

    if (questionNumber < quiz_DB.length) {
        firstQuestionLoad();
    } else {
        displayUserScore.classList.remove('hideScoreArea');
        displayUserScore.innerHTML = `
        <h3> You scored ${userScore} out of ${totalQuestions} 😊</h3>
        <button class = "displayUserScoreButton" onclick = "location.reload()"> Play Again </button> 
        `

    };
});

firstQuestionLoad();