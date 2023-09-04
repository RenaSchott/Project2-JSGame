//Randomly displaying cards
/**
 * 
 */


//random cards - inspired by https://jsbin.com/gazusipeta/1/edit?html,css,js,output
function shuffleCards() {
    const grid = document.getElementById("grid");
    let cards = [...document.getElementsByClassName("card")];
    cards = cards.sort(() => Math.random() - 0.5);
  
    grid.innerHTML = ""
    cards.forEach(card => grid.appendChild(card));
  }
  
//flipping cards - inspired by https://jsbin.com/deqejekomu/edit?html,css,js,output
//and https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
function flipCardsListener() {
    document.getElementById('flip').addEventListener('click', function () {
        const cards = document.querySelectorAll(".card-inner");
        cards.forEach(card => card.classList.toggle('flipped'));
        document.getElementById('comp-image').style.display = 'block';
    }, {once : true});
  }
  
  
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
    myImage.style.display = "block"; 
 });

let index;

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

//Users guess
  