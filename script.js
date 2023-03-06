const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const answerButtons = document.getElementById('answer-buttons')
const buttonA = document.getElementById('button-a')
const buttonB = document.getElementById('button-b')
const buttonC = document.getElementById('button-c')
const buttonD = document.getElementById('button-d')
const questionText = document.getElementById('questions')
const userScore = document.getElementById('user-score')
const totalScore = document.getElementById('total-score')
const questionContainer = document.getElementById('question-container')
const scoreboard= document.getElementById('score-board')
const initials = document.getElementById("score-input")
startButton.addEventListener('click', startQuiz)
// nextButton.addEventListener('click', next)
answerButtons.addEventListener('click', (e)=> answerChoice(e))
const submitButton = document.getElementById('submit-btn')

submitButton.addEventListener('click', saveScores)
// answerButtons.addEventListener('click', function(e) {
//     return answerChoice(e)
// })


let currentQuestion = 0
let score = 0

let  questions = [
    {
        question: "What does HTML stand for?",
        answers: [
                {text: "HyperText Markup Lamguage", correct: true},
                {text: "HyperText Makeup Language", correct: false},
                {text: "HighText Makeup Language", correct: false},
                {text: "HyperType Markup Language", correct: false},
        
            ]
    },
    {
        question: "The first index of an array is ________.",
        answers: [
            {text: "3", correct: false},
            {text: "0", correct: true},
            {text: '1', correct: false},
            {text: "whatever the user wants it to be", correct: false},
        ]
    },
    {
        question: "The correct format for adding comments in javascript is _____.",
        answers: [
            {text:"<!--this is a comment-->", correct: false},
            {text:"'this is a comment'", correct: false},
            {text:"//this is a comment", correct: true},
            {text:"you cannot add comments on javascript", correct: false},
        ]
    },
    {
        question: "how do we target an ID element in javascript?",
        answers: [
            {text:"const element = document.getElementById('ID')", correct: true },
            {text:"const element = document.querySelector('.ID')", correct: false},
            {text:"const element = document.getElement('ID')", correct: false},
            {text:"const element = document.querySelector{'#ID')", correct: false},
        ]
    }
]

function startQuiz() {
    questionContainer.style.display="flex"
    questionContainer.style.flexDirection="column"
    currentQuestion = 0
    displayQuestion()
    time = questions.length * 10
    intervalID = setInterval(countdown, 1000)
    displayTime()
    startButton.classList.add('hide')
    totalScore.innerHTML = questions.length
    questionText.innerHTML = questions[currentQuestion].question
}

function countdown() {
    time--;
    displayTime();
    if (time < 1) {
      endQuiz();
    }
}
  
const timeDisplay = document.querySelector("#timer");
function displayTime() {
    timeDisplay.textContent = time;
}

function displayQuestion() {
    let question = questions[currentQuestion]
    questionText.innerText=question.question
    buttonA.innerText = question.answers[0].text
    buttonB.innerText = question.answers[1].text
    buttonC.innerText = question.answers[2].text
    buttonD.innerText = question.answers[3].text
}

const resultText = document.querySelector("#result-text")
function answerChoice(event) {
    let question = questions[currentQuestion]
    console.log(event.target.id)
    const userAnswer=question.answers.find(answer=> answer.text===event.target.innerText)
    console.log(userAnswer)
    if (userAnswer.correct) {
        console.log("correct")
        function hideresultText() {
            resultDiv.style.display = "none";
        }
        resultText.textContent= "correct"
        score++
       checkCurrentQuestion()
    } else {
        console.log("incorrect")
        resultText.textContent="incorrect"
        score--
        checkCurrentQuestion()
        
    }
}

function checkCurrentQuestion() {
    if (currentQuestion < questions.length -1) {
        currentQuestion++
        displayQuestion()
    } else (endQuiz ()) 
}

function endQuiz () {
    console.log("game over")
    scoreboard.style.display="flex"
    scoreboard.style.flexDirection="column"
    questionContainer.style.display="none"
}

function saveScores (event) {
    event.preventDefault()
    const scoreObject = {initials: initials.value, score: score}
    console.log(scoreObject)
    // renderscoreObject()
    let scoreboardArray= ("")
    scoreboardArray.push("")
    // figure out how to store multiple scores in an array
    // store those scores in local storage as an aray
    // get those scores out of local storage
    // loop over the previous scores with for loop and push them into a new array
    // save that new array in local storage under the same key,
    // localstorage.setItem("key", value)
    localStorage.setItem("scores", JSON.stringify(scoreObject))
}
