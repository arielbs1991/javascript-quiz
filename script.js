//TODO: onclick, button starts timer
//TODO: onclick, button triggers first question
//TODO: create array of questions - assign each question to a value within array
//TODO: randomize order of array so that questions appear in a random order
//TODO: for each value of array, if correct answer, tally++, if incorrect answer, time-10seconds
//TODO: upon answer click, move to next question
//TODO: display score at end of quiz
//TODO: have user enter in name to save results



function askQuestion(question, answers) {
    console.log("askquestion called", question);
    var quizFields = document.getElementById("quizFields");
    while (quizFields.firstChild) {
        quizFields.removeChild(quizFields.firstChild);
    }
    var questionSpan = document.createElement("span");
    questionSpan.innerText = question;

    var answersSpan = document.createElement('span');
    var answersList = document.createElement('ul');
    for (let i in answers) {
        var answerItem = document.createElement('li');
        answerItem.innerText = answers[i];
        answerItem.addEventListener("click", quizClick());
        answersList.appendChild(answerItem);
    }

    answersSpan.appendChild(answersList);
    quizFields.appendChild(questionSpan);
    quizFields.appendChild(answersSpan);

    return (answersSpan);
}


function quizClick() {
   console.log("quizclick called");
    if (quizKeys.length > 0) {
        var quizKey = quizKeys.shift();
        console.log("quizkey is ", quizKey);
        askQuestion(quizData.get(quizKey).get("question"), quizData.get(quizKey).get("answers"));
    } else {
        console.log("quizclick out of questions");
    }
}

function startQuiz() {
console.log("startquiz called");
    var secondsLeft = 90;
    //timer bar inside quizBox div
    var timeE1 = document.getElementById("timer");

    //hiding start quiz button on click
    // startQuizBtn.style.display = "none";

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
    
    document.getElementById("quizFields").addEventListener("click", quizClick());
}

var startQuizBtn = document.getElementById("startBtn");

var quizData = new Map();
quizData.set(1, new Map([
    ["question", "In Javascript, what is a node?"],
    ["answers", [
        "any discrete html element",
        "a repository with shared information",
        "a variable",
        "a part of a plant from which a branch can grow"
    ]
    ]
]));

quizData.set(2, new Map([
    ["question", "How do we link .js files within an html file?"],
    ["answers", [
        "script tag",
        "link tag",
        "HTML tag",
        "hre tag"
    ]
    ]
]));

quizData.set(3, new Map([
    ["question", "These are all examples of variable types, except:"],
    ["answers", [
        "node",
        "string",
        "boolean",
        "null"
    ]
    ]
]));

var quizKeys = Array.from(quizData.keys());
console.log("quizKeys are ", quizKeys);
startQuizBtn.style.display = "block";
startQuizBtn.addEventListener("click", startQuiz());