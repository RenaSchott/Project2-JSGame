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
  
  