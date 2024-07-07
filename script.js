
document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "What is the height of the badminton net at the center?",
            answers: {
                a: "1.55 meters",
                b: "1.524 meters",
                c: "1.50 meters"
            },
            correctAnswer: "b"
        },
        {
            question: "How many points are needed to win a game in badminton?",
            answers: {
                a: "15",
                b: "21",
                c: "30"
            },
            correctAnswer: "b"
        },
        {
            question: "Which country does Lin Dan represent?",
            answers: {
                a: "Malaysia",
                b: "China",
                c: "Indonesia"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the maximum score a badminton game can reach?",
            answers: {
                a: "21",
                b: "29",
                c: "30"
            },
            correctAnswer: "c"
        },
        {
            question: "Who won the women's singles gold medal at the 2016 Rio Olympics?",
            answers: {
                a: "P.V. Sindhu",
                b: "Carolina Marín",
                c: "Saina Nehwal"
            },
            correctAnswer: "b"
        },
        {
            question: "How many feathers does a standard badminton shuttlecock have?",
            answers: {
                a: "14",
                b: "16",
                c: "18"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these is not a type of badminton shot?",
            answers: {
                a: "Smash",
                b: "Drop",
                c: "Slice"
            },
            correctAnswer: "c"
        },
        {
            question: "Which country has won the most Thomas Cup titles?",
            answers: {
                a: "Indonesia",
                b: "China",
                c: "Malaysia"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the width of a singles badminton court?",
            answers: {
                a: "5.18 meters",
                b: "6.1 meters",
                c: "4.5 meters"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is known as the 'Queen of Badminton'?",
            answers: {
                a: "Carolina Marín",
                b: "Susi Susanti",
                c: "Ratchanok Intanon"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});
