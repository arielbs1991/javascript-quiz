//TODO: onclick, button starts timer
//TODO: onclick, button triggers first question
//TODO: create array of questions - assign each question to a value within array
//TODO: randomize order of array so that questions appear in a random order
//TODO: for each value of array, if correct answer, tally++, if incorrect answer, time-10seconds
//TODO: upon answer click, move to next question
//TODO: display score at end of quiz
//TODO: have user enter in name to save results

var startQuizBtn = document.getElementById("startBtn");
var quizAnswers = document.getElementsByClassName("quizAnswers");
for (var i = 0; i < quizAnswers.length; i++) {
    quizAnswers[i].style.display = "none";
}



startQuizBtn.addEventListener("click", function () {

    var secondsLeft = 90;
    var timeE1 = document.getElementById("timer");
    var quizQuestion = document.getElementById("quizQuestion");
    var answersRoundOne = document.getElementById("answersRoundOne");
    var answersRoundTwo = document.getElementById("answersRoundTwo");
    var answersRoundThree = document.getElementById("answersRoundThree");
    var answersRoundFour = document.getElementById("answersRoundFour");
    var answersRoundFive = document.getElementById("answersRoundFive");

    var questionNum = [
        "In Javascript, what is a node?",
        "How do we link .js files within an html file?",
        "These are all examples of variable types, except:",
        "Is JavaScript case sensitive?",
        "JavaScript is like the ______ of a website."
    ]

    startQuizBtn.style.display = "none";

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
                //TODO: build sendMessage function for an alert
                //create and engage function for user to input name with score in local storage
            }
          
        }, 1000);
    }
    setTime();
    function runQuiz() {

        var headQuestion = document.createElement("h3");
        headQuestion.innerHTML = questionNum[0];

        // quizQuestion.appendChild(headQuestion)
        //I feel like this doesn't work.
    }
    runQuiz();
    answersRoundOne.style.display = "block";
    var correctAnswer = document.getElementsByClassName("correctAns");
    var incorrectAnswer = document.getElementsByClassName("incorrectAns");
    var userAnswer = document.querySelectorAll("li")

    for (i = 0; i < correctAnswer.length; i++) {

        correctAnswer[i].addEventListener("click", function () {
            score++;
            // quizQuestion.appendChild.innerHTML = questionNum[1];
            answersRoundOne.style.display = "none";
            answersRoundTwo.style.display = "block";
            console.log("clicked the right answer");
        })
    }

    for (i = 0; i < incorrectAnswer.length; i++) {

        incorrectAnswer[i].addEventListener("click", function () {
            secondsLeft -10;
            // quizQuestion.appendChild.innerHTML = questionNum[1];
            answersRoundOne.style.display = "none";
            answersRoundTwo.style.display = "block";
            console.log("clicked the wrong answer");
        })
    }
})
        //this shit makes all of my li visible from page load
       
        function appendP() {
        var paragraph = document.querySelector("P");
        var score = document.getElementById("score");
        paragraph.innerHTML = "Score = " + score;

        // score.appendChild(`Score = ${score}`);
    }
        appendP();

score = 0;






    //TODO: add constants using document.getElementById from html file

    //TODO: need to randomize order of questions from array


//run function on click