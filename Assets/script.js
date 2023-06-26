var Header = document.querySelector("#Header");
var startPageArea = document.querySelector("#startArea"); //starting page area
var questionArea = document.querySelector("#questionArea"); //question area
var multiChoiceList = document.querySelector("#multiChoice"); // multiChoice List
var correct = document.querySelector("#correct"); // Correct field
var finalScoreArea = document.querySelector("#finalScoreArea"); //final score area
var finalScoreOutput = document.querySelector("#finalScoreOutput"); //shows final score
var submitButton = document.querySelector("#submitButton");//submit button
var submitField = document.getElementById("submitField")//initials
var highScoreArea = document.querySelector("#highScoreArea"); //high score area
var viewHighScore = document.querySelector("#viewHighscores"); //label which says highscores
var startButton = document.querySelector("#startButton"); //start button
var countdown = document.querySelector("#timer"); //Timer countdown
var goBack = document.querySelector("#goBack"); //Go Back Button
var entriesFromLocalStorage = JSON.parse(localStorage.getItem("entries") || '[]');

//set variables
var allDone;
var score = 0;
var answer;
var timeLeft;
var ans1 = document.createElement("li");
var ans2 = document.createElement("li");
var ans3 = document.createElement("li");
var ans4 = document.createElement("li");

//create arrays
highScore = [];
highName = [];

//Initiate function gives starting page
function init() {
  Header.setAttribute("style", "visibility: visible;");
  startPageArea.setAttribute("style", "display: content;");
  questionArea.setAttribute("style", "display: none;");
  finalScoreArea.setAttribute("style", "display: none;");
  highScoreArea.setAttribute("style", "display: none;");
}

function finalScore() {
  Header.setAttribute("style", "visibility: hidden;");
  startPageArea.setAttribute("style", "display: none;");
  questionArea.setAttribute("style", "display: none;");
  finalScoreArea.setAttribute("style", "display: content;");
  highScoreArea.setAttribute("style", "display: none;");
  finalScoreOutput.innerHTML = score
}

// timer function
function timer() {
  timeLeft = 60;
  var timeInterval = setInterval(function () {
    timeLeft--;
    countdown.textContent = timeLeft;
    if (timeLeft < 0) {
      countdown.textContent = "";
      clearInterval(timeInterval);
      timesup();
      init();
    } else if (allDone === true) {
      clearInterval(timeInterval);
      countdown.textContent = "";
    }
  }, 1000);
}

//secondary timer for correct/incorrect to stay up on screen
function secondaryTimer() {
  var secondTime = 5;
  var timeInterval = setInterval(function () {
    secondTime--;
    if (secondTime < 0) {
      correct.textContent = "";
      clearInterval(timeInterval);
    }
  }, 100);
}

//Adds an alert if the quiz isnt finished in time
function timesup() {
  window.alert("Times up. Sorry!");
}

//resets the multiplechoice fields from the previous question so they arent stacked on each other
function resetMultiChoice() {
  multiChoiceList.removeChild(ans1);
  multiChoiceList.removeChild(ans2);
  multiChoiceList.removeChild(ans3);
  multiChoiceList.removeChild(ans4);
}

//creates an <li> named ans1, ans2, etc.
function createLiItems() {
  ans1 = document.createElement("li");
  ans2 = document.createElement("li");
  ans3 = document.createElement("li");
  ans4 = document.createElement("li");
}
//Adds the answer <li> to the <ol>
function addLiItems() {
  multiChoiceList.appendChild(ans1);
  multiChoiceList.appendChild(ans2);
  multiChoiceList.appendChild(ans3);
  multiChoiceList.appendChild(ans4);
}

//adds the row class to each child element in the multichoice questions
function addRow() {
  ans1.classList.add("row");
  ans2.classList.add("row");
  ans3.classList.add("row");
  ans4.classList.add("row");
}
//adds class name
function addClassName() {
  var li = document.createElement("li");
  li.className = "row";
}

function questionOne() {
  addClassName();
  createLiItems();
  ans1.textContent = "Strings";
  ans2.textContent = "Booleans";
  ans3.textContent = "Alerts";
  ans4.textContent = "Numbers";
  h3Blank.textContent = "Commonly used data types DO NOT include _____?";
  addLiItems();
  addRow();

  var questionLi = document.querySelectorAll(".row");

  questionLi.forEach((row) => {
    row.addEventListener("click", function handleClick(event) {
      if (row.textContent === "Alerts") {
        correct.textContent = "Correct!";
        score = score + 5;
        secondaryTimer();
        resetMultiChoice();
        questionTwo();
      } else {
        correct.textContent = "Incorrect!";
        secondaryTimer();
        resetMultiChoice();
        questionTwo();
      }
    });
  });
}

function questionTwo() {
  addClassName();
  createLiItems();
  ans1.textContent = "Parenthesis";
  ans2.textContent = "Quotes";
  ans3.textContent = "Brackets";
  ans4.textContent = "Curly braces";
  h3Blank.textContent =
    "The condition in an if/else statement is enclosed within _____?";
  addLiItems();
  addRow();

  var questionLi = document.querySelectorAll(".row");

  questionLi.forEach((row) => {
    row.addEventListener("click", function handleClick(event) {
      if (row.textContent === "Parenthesis") {
        correct.textContent = "Correct!";
        score = score + 5;
        secondaryTimer();
        resetMultiChoice();
        questionThree();
      } else {
        correct.textContent = "Incorrect!";
        secondaryTimer();
        resetMultiChoice();
        questionThree();
      }
    });
  });
}

function questionThree() {
  addClassName();
  createLiItems();
  ans1.textContent = "Numbers and strings";
  ans2.textContent = "Other arrays";
  ans3.textContent = "Booleans";
  ans4.textContent = "All of the above";
  h3Blank.textContent = "Arrays in javascript can be used to store _____?";
  addLiItems();
  addRow();

  var questionLi = document.querySelectorAll(".row");

  questionLi.forEach((row) => {
    row.addEventListener("click", function handleClick(event) {
      if (row.textContent === "All of the above") {
        correct.textContent = "Correct!";
        score = score + 5;
        secondaryTimer();
        resetMultiChoice();
        questionFour();
      } else {
        correct.textContent = "Incorrect!";
        secondaryTimer();
        resetMultiChoice();
        questionFour();
      }
    });
  });
}

function questionFour() {
  addClassName();
  createLiItems();
  ans1.textContent = "Dollar signs";
  ans2.textContent = "Parenthesis";
  ans3.textContent = "Quotation Marks";
  ans4.textContent = "Asterisks";
  h3Blank.textContent =
    "String values must be enclosed in _____ when being assigned to a variable?";
  addLiItems();
  addRow();

  var questionLi = document.querySelectorAll(".row");

  questionLi.forEach((row) => {
    row.addEventListener("click", function handleClick(event) {
      if (row.textContent === "Quotation Marks") {
        correct.textContent = "Correct!";
        score = score + 5;
        secondaryTimer();
        resetMultiChoice();
        questionFive();
      } else {
        correct.textContent = "Incorrect!";
        secondaryTimer();
        resetMultiChoice();
        questionFive();
      }
    });
  });
}

function questionFive() {
  addClassName();
  createLiItems();
  ans1.textContent = "JavaScript";
  ans2.textContent = "Console";
  ans3.textContent = "Dinosaurs";
  ans4.textContent = "None of the above";
  h3Blank.textContent =
    "A very useful tool used during the development of JavaScript is the _____?";
  addLiItems();
  addRow();
  var questionLi = document.querySelectorAll(".row");

  questionLi.forEach((row) => {
    row.addEventListener("click", function handleClick(event) {
      if (row.textContent === "Console") {
        correct.textContent = "Correct!";
        score = score + 5;
        secondaryTimer();
        resetMultiChoice();
        finalScore();
        allDone = true;
      } else {
        correct.textContent = "Incorrect!";
        secondaryTimer();
        resetMultiChoice();
        finalScore();
        allDone = true;
      }
    });
  });
}

init();

//View HighScore Area
viewHighScore.addEventListener("click", function () {
  Header.setAttribute("style", "visibility: hidden;");
  startPageArea.setAttribute("style", "display: none;");
  questionArea.setAttribute("style", "display: none;");
  finalScoreArea.setAttribute("style", "display: none;");
  highScoreArea.setAttribute("style", "display: content;");
  displayHighScores();
});

//Start Button
startButton.addEventListener("click", function () {
  score = 0;
  startPageArea.setAttribute("style", "display: none;");
  questionArea.setAttribute("style", "display: content;");
  allDone = false;
  timer();
  questionOne();
});

//Go Back Button
goBack.addEventListener("click", function () {
    init();
});

//FinalScore submit high score buttons
submitButton.addEventListener("click", function (event) {
event.preventDefault();
   var finalScoreNumber = score;
   if(finalScoreNumber === 0) {
    window.alert("Sorry you cannot log a highscore of 0.");
    init();
   }else {
    highScore.push(finalScoreNumber);
    highName.push(submitField.value);
    localStorage.setItem("highScoreArray", JSON.stringify(highScore));
    localStorage.setItem("highNameArray", JSON.stringify(highName));
    init();
    }
    console.log(localStorage);
})

function displayHighScores() {
    localStorage.getItem("highScoreArray");
    localStorage.getItem("highNameArray");
    for (var i = 0; i < highScore.length; i++) {
        console.log(highScore[i]);
        console.log(highName[i]);
    }
}

//issue1: how to add local storage items to highscore area
//issue2: multi-choice questions not aligning right
//issue3: reseting multichoice questions if view Highscores button is hit
//issue4: timer reducing by 10 seconds when incorrect answer is given 