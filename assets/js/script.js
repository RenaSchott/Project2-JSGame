// GLOBAL VARIABLES (still needed) ///
const grid = document.getElementById("grid");
const showImage = document.getElementById("flip");
const imgEl = document.getElementById('comp-image');
const srcArray = ['assets/images/cat.webp', 'assets/images/dog.webp', 'assets/images/elephant.webp', 'assets/images/gorilla.webp',
'assets/images/horse.webp', 'assets/images/lion.webp', 'assets/images/raven.webp', 'assets/images/wolf.webp'];
const allCards = document.querySelectorAll(".card-inner");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
let timer2;
let minutes = 0;
let seconds = 0;
const randomIndex = Math.floor(Math.random()*srcArray.length);
var cards = document.querySelectorAll('.card-inner');
let index;


// FUNCTIONS ///
//random cards - inspired by https://jsbin.com/gazusipeta/1/edit?html,css,js,output
/**
 * For shuffle the main cards
 */
function shuffleCards() {
  let cards = [...document.getElementsByClassName("card")];
  cards = cards.sort(() => Math.random() - 0.5);
  grid.innerHTML = ""
  cards.forEach(card => grid.appendChild(card));
}

//flipping cards - inspired by https://jsbin.com/deqejekomu/edit?html,css,js,output
//and https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
/**
* For flipping cards
*/
function flipCards() {
  document.getElementById('flip').addEventListener('click', function () {
      allCards.forEach(card => card.classList.toggle('flip-card-inner'));
      if(flip-card-inner === true) {
        document.getElementsByClassName('card-front').style.display = 'hidden';
      }
      document.getElementById('comp-image').style.display = 'block';
  }, {once : true});
}


/**
* For running
*/
function run() {
  shuffleCards();
  flipCards();
}


//displaying random image - inspired by https://openjavascript.info/2022/12/11/random-image-with-javascript/
//and https://www.tutorialspoint.com/how-to-show-images-with-a-click-in-javascript-using-html
/** Show comparisonImage */
function comparisonImage () {
  showImage.addEventListener("click", () => { 
    imgEl.style.display = "block"; 
  });
}


/**
 * Timer starts counting
 */
//Inspired by https://codepen.io/DevelopedByKieran/pen/JjwKbpO
function timerTwoCounting() {

}


function runTimer() {
  timer2 = setInterval(() => {
    minutesElement.innerHTML = "0" + minutes + ":";
    secondsElement.innerHTML = seconds;
    seconds++;
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
  }, 1000);
}


/**
* For random comparison image
*/
function randomImage() {
  if (randomIndex !== index) {
      imgEl.src = srcArray[randomIndex];
      index = randomIndex;
  } else {
      randomImage();
  }
}


//Users guess - inspired by https://codepen.io/mondal10/pen/WNNEvjV
[...cards].forEach((card)=>{
  card.addEventListener('click', function() {
  card.classList.toggle('flip-card-inner');
  let clickedImage = card.parentElement.dataset.image;
  if (imgEl.src.includes(clickedImage)) {
    correctAnswer()
    console.log("Matched!");
  } else {
    incorrectAnswer()
    console.log("Not Matched!");
  };
});
});
 

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



// Events and Eventlistener ///
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

run();
runTimer();
randomImage();
comparisonImage ()