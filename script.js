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


//start the quiz
startQuizBtn.addEventListener("click", function () {

    var secondsLeft = 90;
    //timer bar inside quizBox div
    var timeE1 = document.getElementById("timer");
    //the span in which to display quiz questions
    var questionSpan = document.getElementById("questionSpan");
    //ul with round one answers
    var answersRoundOne = document.getElementById("answersRoundOne");
    //ul with round two answers
    var answersRoundTwo = document.getElementById("answersRoundTwo");
    //ul with round three answers
    var answersRoundThree = document.getElementById("answersRoundThree");
    //ul with round four answers
    var answersRoundFour = document.getElementById("answersRoundFour");
    //ul with round five answers
    var answersRoundFive = document.getElementById("answersRoundFive");

    //array of questions
    // var questionNum = [
    //     "In Javascript, what is a node?",
    //     "How do we link .js files within an html file?",
    //     "These are all examples of variable types, except:",
    //     "Is JavaScript case sensitive?",
    //     "JavaScript is like the ______ of a website."
    // ]

    //hiding start quiz button on click
    startQuizBtn.style.display = "none";

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


    // function displayQuestions() {

    //     var nodeH3Question = document.createElement("h3");
    //     nodeH3Question.setAttribute('questionSpan', "h3");
    //     questionSpan.innerHTML = questionNum[0];

        

       
    // }
    // displayQuestions();
    // firstQuestion();
    answersRoundOne.style.display = "block";
    var correctAnswer = document.getElementsByClassName("correctAns");
    var incorrectAnswer = document.getElementsByClassName("incorrectAns");
    var userAnswer = document.querySelectorAll("li")
    function showFirstQuestion() {
        // for (i = 0; i < correctAnswer.length; i++) {
            //cannot read property length at undefined. Is it because there's no array? It was working before

            correctAnswer[0].addEventListener("click", function () {
                score++;
                answersRoundOne.style.display = "none";
                answersRoundTwo.style.display = "block";
                console.log("clicked the right answer");
                secondQuestion();
            })
        // }

        for (i = 0; i < incorrectAnswer.length; i++) {

            incorrectAnswer[i].addEventListener("click", function () {
                secondsLeft -10;
                answersRoundOne.style.display = "none";
                answersRoundTwo.style.display = "block";
                console.log("clicked the wrong answer");
                secondQuestion();
            })
        }
    }
    showFirstQuestion();
    function secondQuestion(){

        for (i = 0; i < correctAnswer.length; i++) {

            correctAnswer[i].addEventListener("click", function () {
                score++;
                answersRoundTwo.style.display = "none";
                answersRoundThree.style.display = "block";
                console.log("clicked the right answer");
            })
        }

        for (i = 0; i < incorrectAnswer.length; i++) {

            incorrectAnswer[i].addEventListener("click", function () {
                secondsLeft -10;
                answersRoundTwo.style.display = "none";
                answersRoundThree.style.display = "block";
                console.log("clicked the wrong answer");
            })
        }
    }
})

       
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