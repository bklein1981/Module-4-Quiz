var Header = document.querySelector("#Header")
var startPageArea = document.querySelector("#startArea"); //starting page area
var questionArea = document.querySelector("#questionArea"); //question area
var finalScoreArea = document.querySelector("#finalScoreArea");//final score area
var highScoreArea = document.querySelector("#highScoreArea")//high score area
var viewHighScore = document.querySelector("#viewHighscores"); //label which says highscores
var startButton = document.querySelector("#startButton"); //start button
var countdown = document.querySelector("#timer"); //Timer countdown
var goBack = document.querySelector("#goBack"); //Go Back Button


//Initiate function gives starting page 
function init() {
    Header.setAttribute("style", "visibility: visible;");
    startPageArea.setAttribute("style", "display: content;");
    questionArea.setAttribute("style", "display: none;");
    finalScoreArea.setAttribute("style", "display: none;");
    highScoreArea.setAttribute("style", "display: none;");
}

function timer() {
var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      countdown.textContent = timeLeft;
      timeLeft--;
    } else {
      timeLeft = 0;
      countdown.textContent = '';
      clearInterval(timeInterval);
      
      init();
    }
  }, 100);
}

function questionOne() {
    var ans1 = document.createElement("li");
    var ans2 = document.createElement("li");
    var ans3 = document.createElement("li");
    var ans4 = document.createElement("li");
    ans1.textContent = "Strings";
    ans2.textContent = "Booleans";
    ans3.textContent = "Alerts";
    ans4.textContent = "Numbers";
    h3Blank.textContent = "Commonly used data types DO NOT include _____?";
    multiChoiceList.appendChild(ans1);
    multiChoiceList.appendChild(ans2);
    multiChoiceList.appendChild(ans3);
    multiChoiceList.appendChild(ans4);
}

function questionTwo() {
    var ans1 = document.createElement("li");
    var ans2 = document.createElement("li");
    var ans3 = document.createElement("li");
    var ans4 = document.createElement("li");
    ans1.textContent = "Parenthesis";
    ans2.textContent = "Quotes";
    ans3.textContent = "Brackets";
    ans4.textContent = "Curly braces";
    h3Blank.textContent = "The condition in an if/else statement is enclosed within _____?";
    multiChoiceList.appendChild(ans1);
    multiChoiceList.appendChild(ans2);
    multiChoiceList.appendChild(ans3);
    multiChoiceList.appendChild(ans4);
}

function questionThree() {
    var ans1 = document.createElement("li");
    var ans2 = document.createElement("li");
    var ans3 = document.createElement("li");
    var ans4 = document.createElement("li");
    ans1.textContent = "Numbers and strings";
    ans2.textContent = "Other arrays";
    ans3.textContent = "Booleans";
    ans4.textContent = "All of the above";
    h3Blank.textContent = "Arrays in javascript can be used to store _____?";
    multiChoiceList.appendChild(ans1);
    multiChoiceList.appendChild(ans2);
    multiChoiceList.appendChild(ans3);
    multiChoiceList.appendChild(ans4);
}

function questionFour() {
    var ans1 = document.createElement("li");
    var ans2 = document.createElement("li");
    var ans3 = document.createElement("li");
    var ans4 = document.createElement("li");
    ans1.textContent = "Dollar signs";
    ans2.textContent = "Parenthesis";
    ans3.textContent = "Quotation Marks";
    ans4.textContent = "Asterisks";
    h3Blank.textContent = "String values must be enclosed in _____ when being assigned to a variable?";
    multiChoiceList.appendChild(ans1);
    multiChoiceList.appendChild(ans2);
    multiChoiceList.appendChild(ans3);
    multiChoiceList.appendChild(ans4);
}

function questionFive() {
    var ans1 = document.createElement("li");
    var ans2 = document.createElement("li");
    var ans3 = document.createElement("li");
    var ans4 = document.createElement("li");
    ans1.textContent = "JavaScript";
    ans2.textContent = "Console";
    ans3.textContent = "Dinosaurs";
    ans4.textContent = "None of the above";
    h3Blank.textContent = "A very useful tool used during the development of JavaScript is the _____?";
    multiChoiceList.appendChild(ans1);
    multiChoiceList.appendChild(ans2);
    multiChoiceList.appendChild(ans3);
    multiChoiceList.appendChild(ans4);
}

init();

viewHighScore.addEventListener("click", function () {
    Header.setAttribute("style", "visibility: hidden;");
    startPageArea.setAttribute("style", "display: none;");
    questionArea.setAttribute("style", "display: none;");
    finalScoreArea.setAttribute("style", "display: none;");
    highScoreArea.setAttribute("style", "display: content;");
  });

  startButton.addEventListener("click", function() {
    startPageArea.setAttribute("style", "display: none;");
    questionArea.setAttribute("style", "display: content;");
    timer();
  })

  goBack.addEventListener("click", function () {
    init();
})