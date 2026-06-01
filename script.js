const quizData = [
{
    question: "What is the closest planet to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    answer: "Mercury"
},
{
    question: "What is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars"
},
{
    question: "What gas do humans need to breathe?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    answer: "Oxygen"
},
{
    question: "Which planet is the largest in our Solar System?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter"
},
{
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    answer: "Mitochondria"
},
{
    question: "What galaxy contains our Solar System?",
    options: ["Andromeda", "Milky Way", "Whirlpool", "Triangulum"],
    answer: "Milky Way"
},
{
    question: "What is the chemical symbol for water?",
    options: ["O2", "CO2", "H2O", "NaCl"],
    answer: "H2O"
},
{
    question: "Which planet is famous for its rings?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    answer: "Saturn"
},
{
    question: "How many planets are in our Solar System?",
    options: ["7", "8", "9", "10"],
    answer: "8"
},
{
    question: "Which blood cells help fight infections?",
    options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
    answer: "White Blood Cells"
},
{
    question: "What force keeps planets orbiting the Sun?",
    options: ["Magnetism", "Gravity", "Friction", "Electricity"],
    answer: "Gravity"
},
{
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "95°C", "100°C", "110°C"],
    answer: "100°C"
},
{
    question: "Which planet is known as Earth's twin?",
    options: ["Mars", "Venus", "Mercury", "Neptune"],
    answer: "Venus"
},
{
    question: "What is the hardest natural substance on Earth?",
    options: ["Iron", "Diamond", "Gold", "Quartz"],
    answer: "Diamond"
},
{
    question: "Which star is at the center of our Solar System?",
    options: ["Polaris", "Sirius", "Sun", "Betelgeuse"],
    answer: "Sun"
},
{
    question: "What part of the plant absorbs water from the soil?",
    options: ["Stem", "Leaf", "Flower", "Root"],
    answer: "Root"
},
{
    question: "Which planet is farthest from the Sun?",
    options: ["Saturn", "Uranus", "Neptune", "Jupiter"],
    answer: "Neptune"
},
{
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answer: "Au"
},
{
    question: "What protects Earth from harmful UV rays?",
    options: ["Clouds", "Ozone Layer", "Gravity", "Moon"],
    answer: "Ozone Layer"
},
{
    question: "Who was the first person to walk on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    answer: "Neil Armstrong"
}
];

quizData.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

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
        (((currentQuestion + 1) / quizData.length) * 100) + "%";

    let optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach(function(option, index) {

    let p = document.createElement("p");

    p.classList.add("option");

    p.textContent = (index + 1) + ". " + option;

    p.style.cursor = "pointer";

    p.onclick = function() {

    document.querySelectorAll(".option")
        .forEach(function(option) {
            option.classList.remove("selected-option");
        });

    p.classList.add("selected-option");

    selectedAnswer = option;
};

    optionsDiv.appendChild(p);
});

}

function submitAnswer() {

    let userAnswer = selectedAnswer.toLowerCase();
    if (selectedAnswer === "") {
        alert("Select an option first!");
        return;
    }
    let correctAnswer =
    quizData[currentQuestion].answer;

    let isCorrect =
    userAnswer === correctAnswer.toLowerCase();


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
