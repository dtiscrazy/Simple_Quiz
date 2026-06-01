from flask import Flask, render_template, request

app = Flask(__name__)

questions = [
    "What is the capital of India?",
    "Which planet is known as the Red Planet?"
]

options = [
    ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    ["Venus", "Jupiter", "Earth", "Mars"]
]

answers = [
    "New Delhi",
    "Mars"
]

@app.route("/", methods=["GET", "POST"])
def home():

    question_no = int(request.args.get("q", 0))

    if question_no >= len(questions):
        return f"""
        <h1>Quiz Completed!</h1>
        <h2>You answered all questions.</h2>
        """

    result = ""

    if request.method == "POST":

        user_answer = request.form["answer"]

        if user_answer.lower() == answers[question_no].lower():
            result = "✅ Correct!"
        else:
            result = f"❌ Wrong! Correct answer is {answers[question_no]}"

        next_question = question_no + 1

        return f"""
        <h1>{result}</h1>

        <a href='/?q={next_question}'>
            <button>Next Question</button>
        </a>
        """

    return render_template(
        "index.html",
        question=questions[question_no],
        options=options[question_no]
    )

if __name__ == "__main__":
    app.run(debug=True)