//TODO: onclick, button starts timer
//TODO: onclick, button triggers first question
//TODO: create array of questions - assign each question to a value within array
//TODO: randomize order of array so that questions appear in a random order
//TODO: for each value of array, if correct answer, tally++, if incorrect answer, time-10seconds
//TODO: upon answer click, move to next question
//TODO: display score at end of quiz
//TODO: have user enter in name to save results

console.log("Hello")

function runQuiz() {

    var questionNum = [12345];
    questionNum[0] = "In Javascript, what is a node?";
    questionNum[1] = "How do we link .js files within an html file?";
    questionNum[2] = "These are all examples of variable types, except:";
    questionNum[3] = "Is JavaScript case sensitive?";
    questionNum[4] = "JavaScript is like the ______ of a website.";

    for (i = 0; i <= questionNum.length; i++) {
        console.log(questionNum[i]);
    };
    //not working. something wrong with my array setup?
    

    var qZeroAnswers = [1234];
    qZeroAnswers[0] = "any discrete html element";
    qZeroAnswers[1] = "a repository with shared information";
    qZeroAnswers[2] = "a variable";
    qZeroAnswers[3] = "a part of a plant from which a branch can grow";

    var qOneAnswers = [1234];
    qOneAnswers[0] = "script tag";
    qOneAnswers[1] = "link tag";
    qOneAnswers[2] = "HTML tag";
    qOneAnswers[3] = "href tag";

    var qTwoAnswers = [1234];
    qTwoAnswers[0] = "node";
    qTwoAnswers[1] = "string";
    qTwoAnswers[2] = "boolean";
    qTwoAnswers[3] = "null";

    var qThreeAnswers = [1234];
    qThreeAnswers[0] = "yes";
    qThreeAnswers[1] = "no";
    qThreeAnswers[2] = "only after a really rough day";

    var qFourAnswers = [1234];
    qFourAnswers[0] = "muscle";
    qFourAnswers[1] = "bones";
    qFourAnswers[2] = "flesh";
    qFourAnswers[3] = "Tubba Blubba's Heart";

    var correctAns = [
        qZeroAnswers[0],
        qOneAnswers[0],
        qTwoAnswers[0],
        qThreeAnswers[0],
        qFourAnswers[0],
    ];
    
    correctAns === true;

    var score = "0";

}

document.querySelector.#startBtn.addEventListener("click", function) {

}

    //TODO: add constants using document.getElementById from html file

    //TODO: need to randomize order of questions from array



//run function on click