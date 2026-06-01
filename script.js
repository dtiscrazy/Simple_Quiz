const quizData = [
{
    question: "What is capital of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    answer: "New Delhi"
},
{
    question: "How many continents are on the Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
},
{
    question: "Which planet is known as the red planet?",
    options: ["Venus", "Jupiter", "Earth", "Mars"],
    answer: "Mars"
},
{
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"],
    answer: "Alexander Graham Bell"
},
{
    question: "What is the largest ocean on the Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
},
{
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Leopard", "Lion"],
    answer: "Lion"
},
{
    question: "How many days are there in a leap year?",
    options: ["364", "365", "366", "367"],
    answer: "366"
},
{
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"],
    answer: "Carbon Dioxide"
},
{
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
},
{
    question: "What is the national bird of India?",
    options: ["Sparrow", "Eagle", "Parrot", "Peacock"],
    answer: "Peacock"
},
{
    question: "Which is the smallest planet in the Solar System?",
    options: ["Mars", "Venus", "Earth", "Mercury"],
    answer: "Mercury"
},
{
    question: "What is the boiling point of water in Celsius?",
    options: ["90", "95", "100", "110"],
    answer: "100"
},
{
    question: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "Germany", "Spain", "France"],
    answer: "France"
},
{
    question: "How many players are there in a football team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11"
},
{
    question: "Which is the fastest land animal?",
    options: ["Lion", "Tiger", "Horse", "Cheetah"],
    answer: "Cheetah"
},
{
    question: "Who was the first man to walk on the Moon?",
    options: ["Yuri Gagarin", "Buzz Aldrin", "Michael Collins", "Neil Armstrong"],
    answer: "Neil Armstrong"
},
{
    question: "What is the currency of Japan?",
    options: ["Won", "Yuan", "Dollar", "Yen"],
    answer: "Yen"
},
{
    question: "Which is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Hippopotamus", "Blue Whale"],
    answer: "Blue Whale"
},
{
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7"
},
{
    question: "Which organ pumps blood throughout the body?",
    options: ["Brain", "Liver", "Lungs", "Heart"],
    answer: "Heart"
}
];

quizData.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {

    let q = quizData[currentQuestion];

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) + "/" + quizData.length;

    document.getElementById("score-display").textContent =
    "Score: " + score + "/" + quizData.length;

    document.getElementById("question").textContent =
        q.question;

    document.getElementById("progress-bar").style.width =
        (((currentQuestion + 1) / quizData.length) * 100) + "%"

    let optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach(function(option, index) {

        let p = document.createElement("p");

        p.classList.add("option");

        p.textContent = (index + 1) + ". " + option;

        optionsDiv.appendChild(p);
    });

    document.getElementById("answer-input").value = "";
}

function submitAnswer() {

    let userAnswer =
        document.getElementById("answer-input")
        .value
        .trim()
        .toLowerCase();

    if (userAnswer === "") {
        alert("Enter an answer!");
        return;
    }

    let correctAnswer =
        quizData[currentQuestion].answer;

    let correctOption =
        quizData[currentQuestion]
        .options
        .indexOf(correctAnswer) + 1;

    let isCorrect =
        userAnswer === correctAnswer.toLowerCase() ||
        userAnswer === String(correctOption);

    if (isCorrect) {

        score++;

        document.getElementById("feedback-message").textContent =
            "✅ Correct!";

        document.getElementById("correct-answer").textContent = "";

    } else {

        document.getElementById("feedback-message").textContent =
            "❌ Wrong!";

        document.getElementById("correct-answer").textContent =
            "Correct Answer: " + correctAnswer;
    }

    document.getElementById("feedback-score").textContent =
        "Score: " + score + "/" + quizData.length;

    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("feedback-screen").classList.remove("hidden");
}

function nextQuestion() {

    currentQuestion++;

    document.getElementById("feedback-screen").classList.add("hidden");

    if (currentQuestion >= quizData.length) {
        showFinalScreen();
        return;
    }

    document.getElementById("quiz-screen").classList.remove("hidden");

    loadQuestion();
}

function showFinalScreen() {

    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("final-score").textContent =
        "Final Score: " + score + "/" + quizData.length;

    let ranking = "";

    if (score >= 18) {
        ranking = "🏆 Quiz Master";
    }
    else if (score >= 15) {
        ranking = "🔥 Excellent";
    }
    else if (score >= 10) {
        ranking = "👍 Good";
    }
    else if (score >= 5) {
        ranking = "🙂 Average";
    }
    else {
        ranking = "📚 Needs Practice";
    }

    document.getElementById("ranking").textContent = ranking;
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("answer-input")
        .addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                submitAnswer();
            }

        });

});