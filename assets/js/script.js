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

/**
 * Timer 1 countdown - User can choose between different 
 */
function timerOne() {

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
function timerOneCountDown() {

}

/**
 * Animal Tiles flipping - showing the back
 */
function tileFlipping() {

}

/**
 * Timmer Two starts counting
 */
function timerOneCountDown() {

}

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
 * Adding point for correct answer
 */
function correctAnswer() {

}


/**
 * Adding point for incorrect answer
 */
function incorrectAnswer() {

}

