const questions = [
    {
        question: "Which is The Most Successful club in London?",
        answers:[
            {text:"Arsenal F.C", correct: false},
            {text:"West Ham United F.C", correct: false},
            {text:"Chelsea F.C", correct: true},
            {text:"Tottenham Hotspur F.C", correct: false},
        ]
    },
    {
        question: "Which is the Most Recent Club in London to win a title?",
        answers:[
            {text:"Arsenal F.C", correct: false},
            {text:"West Ham United F.C", correct: true},
            {text:"Chelsea F.C", correct: false},
            {text:"Tottenham Hotspur F.C", correct: false},
        ] 
    },
    {
        question: "Which Club in London has the Larget Stadium?",
        answers:[
            {text:"Arsenal F.C", correct: false},
            {text:"West Ham United F.C", correct: false},
            {text:"Chelsea F.C", correct: false},
            {text:"Tottenham Hotspur F.C", correct: true},
        ] 
    },
    {
        question: "Which club in London has the Most Expensive Gk in PL History?",
        answers:[
            {text:"Arsenal F.C", correct: false},
            {text:"West Ham United F.C", correct: false},
            {text:"Chelsea F.C", correct: true},
            {text:"Tottenham Hotspur F.C", correct: false},
        ] 
    },
   {
         question: "Which is the Most Recent Club in London to win a Champions Leaguetitle?",
         answers:[
        {text:"Arsenal F.C", correct: false},
        {text:"West Ham United F.C", correct: false},
        {text:"Chelsea F.C", correct: true},
        {text:"Tottenham Hotspur F.C", correct: false},
    ] 
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let Score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    Score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }); 
    }

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${Score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();