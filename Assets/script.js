var H1Blank = document.querySelector("#h1Blank");
var pBlank = document.querySelector("#pBlank");
var timerBlank = document.querySelector("#timer");
var wrongRight = document.querySelector("#correct");
var startButton = document.querySelector("#startButton");
var timeLabel = document.querySelector("#timeLabel");
var highScore = document.querySelector("#viewHighscores");
var multiChoiceList = document.querySelector("#multiChoice");
var highScoreList = document.querySelector("#highScoreList");
var enterInitials = document.querySelector("#enter-initials");
var highScoreButtons = document.querySelector("#highScoreButtons");
var highScoreArea = document.querySelector("#highScoreArea");

// The init function is called when the page loads
function init() {
  highScore.innerHTML = "View Highscores";
  timeLabel.innerHTML = "Time:";
  H1Blank.innerHTML = "Coding Quiz Challenge!";
  pBlank.innerHTML =
    "Try to answer the following questions in the time alloted. Keep in mind incorrect answers will penalize your score time by 10 seconds";
  multiChoiceList.setAttribute("style", "display: none;");
  highScoreArea.setAttribute("style", "display: none;");
}

startButton.addEventListener("click", function () {
  console.log("click");
});

highScore.addEventListener("click", function () {
  console.log("highscore");
});

init();
