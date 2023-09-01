// Get the modal
var modal = document.getElementById("game-mods");

// Get the button that opens the modal
var btn = document.getElementById("go-to-game");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/**
 * Start game
 */
function runGame() {

}

function chosenOptions(timerOne, cardNumber, comparisonOption) {

}

/**
 * Timer 1 countdown - User can choose between different 
 */
function timerOne() {
    if()
}

/**
 * Card numbers - User can choose between different tile numbers
 */
function cardNumber() {

}

/**
 * Comparison option - User can choose between tile and text
 */
function comparisonOption() {

}

/**
 * Generating game from the users choices
 */
function generatingGame() {

}

/**
 * Timer 1 counts down
 */
// Inspired by https://codepen.io/awkay/pen/ExzGea and https://www.javatpoint.com/javascript-select-option
var timer; 
const timeLeft = document.querySelector('#time-needed');  
function timerOneCountDown(){
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
      $('#timer').html(timeLeft);
    else {
      tileFlipping() && timerTwoCounting();
    }
}
function start() {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  timer = setInterval(timerOneCountDown, 1000);
  // It will be a whole second before the time changes, so we'll call the update
  // once ourselves
  timerOneCountDown();
}
// What to do when the timer runs out
function gameOver() {
    // This cancels the setInterval, so the updateTimer stops getting called
    cancelInterval(timer);
}

/**
 * Animal Tiles flipping - showing the back 
 */
//Inspired by https://stackoverflow.com/questions/66449563/flipping-all-cards-but-want-to-flip-one-by-one
function tileFlipping() {

}
document.getElementByClassName("flip").timerOneCountDown(function() {
    document.getElementByClassName("card").classList.toggle("flipped");
  });

/**
 * Timmer Two starts counting
 */
//Inspired by https://codepen.io/DevelopedByKieran/pen/JjwKbpO
function timerTwoCounting() {

}
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let timer;
let minutes = 0;
let seconds = 0;

function runTimer() {
  timer = setInterval(() => {
    minutesElement.innerHTML = "0" + minutes + ":";
    secondsElement.innerHTML = seconds;
    seconds++;
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
  }, 1000);
}

runTimer();



/**
 * Comparison tile is flipping showing the users choice
 */
function comparisonTile() {

}

/**
 * Evaluating users guess
 */
function guess() {

}

/**
 * Showing correct answer to user
 */
function result() {

}

/**
 * Adding point for correct answer by getting current score from the DOM and increments it by 1 
 */
//Inspired by Love Math project
function correctAnswer() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

/**
 * Adding point for incorrect answer by getting incorrect score from the DOM and increment it by 1
 */
//inspired by Love Math project
function incorrectAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}