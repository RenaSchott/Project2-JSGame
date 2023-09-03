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
function flipCardsListener() {
    document.getElementById('flip').addEventListener('click', function () {
        const cards = document.querySelectorAll(".card-inner");
        cards.forEach(card => card.classList.toggle('flipped'));
        document.getElementById('comp-image').style.display = 'block';
    }, false);
  }
  
  
function run() {
    shuffleCards();
    flipCardsListener()
  }
  run();


//displaying random image - inspired by https://openjavascript.info/2022/12/11/random-image-with-javascript/
//and https://www.tutorialspoint.com/how-to-show-images-with-a-click-in-javascript-using-html
const showImage = document.getElementById("flip");
const imgEl = document.getElementById('comp-image');
const srcArray = ['assets/images/cat.webp', 'assets/images/dog.webp', 'assets/images/elephant.webp'];

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


  