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
        cards.forEach(card => card.classList.toggle('flipped'))
    }, false);
  }
  
  
function run() {
    shuffleCards();
    flipCardsListener()
  }
  run();


//displaying random image - inspired by https://openjavascript.info/2022/12/11/random-image-with-javascript/
const imgEl = document.getElementById('comp-image');

const srcArray = ['assets/images/cat.webp', 'assets/images/dog.webp', 'assets/images/elephant.webp'];

imgEl.addEventListener('click', () => {
    randomImage();
    // Runs randomImage function when user clicks on image
});

let index;
// Current image index

randomImage();
function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);
    // Generates random number between 0 and array length-1 (because Math.floor rounds)

    if (randomIndex !== index) {
    // If number NOT same as current image index...

        imgEl.src = srcArray[randomIndex];
        //...set as image src

        index = randomIndex;
        //...and as new current index value

    } else {
    // If number same as current index value (repeat)...

        randomImage();
        //...start function from beginning again

    }

}
  