var H1Blank = document.querySelector("#h1Blank");
var pBlank = document.querySelector("#pBlank");
var timerBlank = document.querySelector("#timer");
var wrongRight = document.querySelector("#correct");
var startButton = document.querySelector("#startButton");
var timeLabel = document.querySelector("#timeLabel");
var highScore = document.querySelector("#viewHighscores")

// The init function is called when the page loads
function init() {
    timeLabel.innerHTML = "Time:";
    H1Blank.innerHTML = "Coding Quiz Challenge!";
    pBlank.innerHTML = "Try to answer the following questions in the time alloted. Keep in mind incorrect answers will penalize your score time by 10 seconds";
    highScore.innerHTML = "View Highscores";    
}

startButton.addEventListener("click", function() {
    console.log("click");
})

highScore.addEventListener("click", function() {
    console.log("highscore");
})




init();