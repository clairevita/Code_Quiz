//Timer
//Local Storage
//Quiz
//Dom population with formatted questions and answers
//Decreases time by 15 seconds on incorrect answer
//Time stops and is set as your scpre
//View Highscores
    //Highscores is a separate page
//Small notification that lets you know if you were right or wrong. Shows briefly.

//These identify the start button and the area invisible area that the questions will be placed.
let startButton = document.getElementById("startButton");
let quizZone = document.getElementById("quizZone");
//-----------------------------------------------------------------------------------------------
//This identifies the quiz timer in the document.
let quizTimer = document.getElementById("quizTimer");
let timeRemain = 75
quizTimer.textContent += timeRemain;
//This variable simplifies our interaction with the DOM for every second change.
let changeTimer = parseInt(quizTimer.textContent);
//Once the user sets this variable to TRUE, the countdown timer will start.
let timerOn = false;

//This click event removes the start button and replaces it with the quiz zone.
startButton.addEventListener("click", function() {
  startButton.className += " invisible";
  quizZone.className -= "invisible";
  timerOn = true;
  console.log(timerOn);
  startTimer();
});

//This is the countdown function called by the startButton. Once the time is 0, the text changes to "Time's Up" and shows the results.
function startTimer() {
  setInterval(countdownTimer, 1000);
    function countdownTimer (){
      timeRemain--;
      quizTimer.textContent = "Time: " + timeRemain;
      if (timeRemain <= 0){
        timerOn = false;
        quizTimer.textContent = "Time's Up!";
      }
    }
  }






