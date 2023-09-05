//random cards - inspired by https://jsbin.com/gazusipeta/1/edit?html,css,js,output
/**
 * For shuffle the main cards
 */
function shuffleCards() {
  const grid = document.getElementById("grid");
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
function flipCardsListener() {
  document.getElementById('flip').addEventListener('click', function () {
      const cards = document.querySelectorAll(".card-inner");
      // cards.forEach(card => card.classList.toggle('flipped'));
      cards.forEach(card => card.classList.toggle('flip-card-inner'));
      document.getElementById('comp-image').style.display = 'block';
  }, {once : true});
}
/**
* For running
*/
function run() {
  shuffleCards();
  flipCardsListener();
}
run();


//displaying random image - inspired by https://openjavascript.info/2022/12/11/random-image-with-javascript/
//and https://www.tutorialspoint.com/how-to-show-images-with-a-click-in-javascript-using-html
const showImage = document.getElementById("flip");
const imgEl = document.getElementById('comp-image');
const srcArray = ['assets/images/cat.webp', 'assets/images/dog.webp', 'assets/images/elephant.webp', 'assets/images/gorilla.webp',
'assets/images/horse. webp', 'assets/images/lion.webp', 'assets/images/raven.webp', 'assets/images/wolf.webp'];

showImage.addEventListener("click", () => { 
  imgEl.style.display = "block"; 
});

let index;
/**
* For random comparison image
*/
function randomImage() {
  const randomIndex = Math.floor(Math.random()*srcArray.length);
  if (randomIndex !== index) {
      imgEl.src = srcArray[randomIndex];
      index = randomIndex;
  } else {
      randomImage();
  }
}
randomImage();

//Users guess - inspired by https://codepen.io/mondal10/pen/WNNEvjV
var cards = document.querySelectorAll('.card-inner');

[...cards].forEach((card)=>{
  card.addEventListener('click', function() {
  card.classList.toggle('flip-card-inner');
  // Get the image associated with the clicked card
  let clickedImage = card.parentElement.dataset.image;
  // Check if it matches the comparison image
  if (imgEl.src.includes(clickedImage)) {
  // Update the score
  // You can increment your score variable here
  // and update the display accordingly if you have one.
  console.log("Matched!"); // This is just for debugging. You can remove this.
  } else {
  console.log("Not Matched!"); // This is just for debugging. You can remove this.
  }
  });
  });
  
  [...cards].forEach((card)=>{
    card.addEventListener('click', function() {
      card.classList.toggle('flip-card-inner');
      
      // Get the image associated with the clicked card
      let clickedImage = card.parentElement.dataset.image;
      // Check if it matches the comparison image
      if (imgEl.src.includes(clickedImage)) {
        // Update the score
        // You can increment your score variable here
        // and update the display accordingly if you have one.
        console.log("Matched!"); // This is just for debugging. You can remove this.
      } else {
        console.log("Not Matched!"); // This is just for debugging. You can remove this.
      }
    });
  });


//card comparison inspired by Love Math
/**
* Controll answer
*/
// Get class of clicked image inspired by https://softauthor.com/get-id-of-clicked-element-in-javascript/
// Target all clicks on any element