import { quizData } from "./quiz.js"

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let hidden = document.querySelector(".score")
let result = document.querySelector(".result")
let questionResult = document.querySelector(
  ".question-result"
)
let yourAnswer = document.querySelector(".your-answer")
let correctAnswer = document.querySelector(
  ".correct-answer"
)

let currentQuiz = 0
let score = 0
let currentQuestion
loadQuiz()

function loadQuiz() {
  deselectAnswers()
  currentQuestion = quizData[currentQuiz]
  questionEl.textContent = currentQuestion.question
  a_text.textContent = currentQuestion.a
  b_text.textContent = currentQuestion.b
  c_text.textContent = currentQuestion.c
  d_text.textContent = currentQuestion.d
}

function deselectAnswers() {
  answerEls.forEach(
    (answerEl) => (answerEl.checked = false)
  )
}

function getSelected() {
  let answer
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  // console.log(answer)
  return answer
}

let q = []
let c = []
let x = []

submitBtn.addEventListener("click", loadQ)

setTimeout(loadQ(), 500)

function loadQ() {
  const answer = getSelected()

  q.push(questionEl.textContent)
  c.push(quizData[currentQuiz].correct)
  x.push(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++
  }

  currentQuiz++

  if (currentQuiz <= 9) {
    loadQuiz()
  } else {
    showResult()
    result.classList.remove("hidden")
    quiz.classList.add("hidden")
    hidden.innerHTML = `
        <h2>You answered ${score}/10 questions correctly</h2>
        <button onclick="location.reload()">Reload</button>`
  }
}

function showResult() {
  for (let i = 0; i <= 9; i++) {
    let qi = document.createElement("p")
    qi.textContent = q[i]
    questionResult.appendChild(qi)
    let xi = document.createElement("p")
    xi.textContent = x[i]
    yourAnswer.appendChild(xi)
    let ci = document.createElement("p")
    ci.textContent = c[i]
    correctAnswer.appendChild(ci)

    if (c[i] !== x[i]) {
      xi.style.color = "red"
    }
  }
}

console.log(Math.random() - 0.5)
console.log(0.1 + 0.2)
