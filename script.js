//TODO: onclick, button starts timer
//TODO: onclick, button triggers first question
//TODO: create array of questions - assign each question to a value within array
//TODO: randomize order of array so that questions appear in a random order
//TODO: for each value of array, if correct answer, tally++, if incorrect answer, time-10seconds
//TODO: upon answer click, move to next question
//TODO: display score at end of quiz
//TODO: have user enter in name to save results
var score = 0;
var secondsLeft = 90;

var quizData = new Map();
quizData.set(1, new Map([
    ["question", "In Javascript, what is a node?"],
    ["answers", [
        "any discrete html element",
        "a repository with shared information",
        "a variable",
        "a part of a plant from which a branch can grow"
    ]
    ],
    ["correct", 0]
]));

quizData.set(2, new Map([
    ["question", "How do we link .js files within an html file?"],
    ["answers", [
        "link tag",
        "HTML tag",
        "script tag",
        "href tag"
    ]
    ],
    ["correct", 2]
]));

quizData.set(3, new Map([
    ["question", "These are all examples of variable types, except:"],
    ["answers", [
        "string",
        "node",
        "boolean",
        "null"
    ]
    ],
    ["correct", 1]
]));

quizData.set(4, new Map([
    ["question", "Is JavaScript case sensitive?"],
    ["answers", [
        "no",
        "yes",
        "only after a really rough day"
    ]
    ],
    ["correct", 1]
]));

quizData.set(5, new Map([
    ["question", "JavaScript is like the ______ of a website."],
    ["answers", [
        "bones",
        "muscle",
        "flesh",
        "soul",
        "Tubba Blubba's Heart"
    ]
    ],
    ["correct", 1]
]));

var quizKeys = Array.from(quizData.keys());
var quizKey = quizKeys.shift();
var startQuizBtn = document.getElementById("startBtn");
var scoreField = document.getElementById("score");
var quizFields = document.getElementById("quizFields");

console.log("quizKeys are ", quizKeys);

function askQuestion(key) {
    var question = key.get("question");
    var answers = key.get("answers");
    console.log("askquestion called", question);
    while (quizFields.firstChild) {
        quizFields.removeChild(quizFields.firstChild);
    }
    var questionSpan = document.createElement('span');
    questionSpan.innerText = question;

    var answersSpan = document.createElement('span');
    var answersList = document.createElement('ul');
    for (let i in answers) {
        var answerItem = document.createElement('li');
        answerItem.addEventListener('click', function () {
            quizClick(i, key);
        })
        answerItem.innerText = answers[i];
        answersList.appendChild(answerItem);
    }

    answersSpan.appendChild(answersList);
    quizFields.appendChild(questionSpan);
    quizFields.appendChild(answersSpan);

    return (answersSpan);
}


function quizClick(i, key) {
    console.log("quizclick called with ", key);


    if (i == key.get("correct")) {
        score++;
        scoreField.innerHTML = score;
    } else {
        secondsLeft -= 10;
    }


    key = quizData.get(quizKeys.shift());
    if (key != undefined) {
        console.log("quizkey is ", key);
        askQuestion(key);
    } else {
        console.log("quizclick out of questions");
        finishQuiz();
    }
}
function finishQuiz() {
    var initials = prompt("Please enter your initials");
    if (initials == null || initials == "") {
        alert("Please enter valid initials");
        finishQuiz();
    } else {
        console.log("saving to local storage ", initials);
        localStorage.setItem("Initials", initials);
        localStorage.setItem("Score", score);
    }
}

startQuizBtn.style.display = "block";
startQuizBtn.addEventListener("click",
    function () {
        startQuizBtn.style.display = "none";
        console.log("startquiz called");
        //timer bar inside quizBox div
        var timeE1 = document.getElementById("timer");
        //start timer countdown
        function setTime() {
            var timeInterval = setInterval(function () {
                secondsLeft--;
                timeE1.textContent = secondsLeft;

                if (secondsLeft === 0) {
                    clearInterval(timeInterval);
                    function sendMessage() {
                        alert("Time's up!")
                    }
                    sendMessage();
                    //TODO: build sendMessage function for an alert, maybe change it to display on page with prompt and textbox to enter initials
                    //create and engage function for user to input name with score in local storage
                }

            }, 1000);
        }
        //running setTime function
        setTime();
        askQuestion(quizData.get(quizKey));
    });

// var startQuizBtn = document.getElementById("startBtn");