//Randomly displaying cards
/**
 * 
 */

//flipping cards - inspired by https://jsbin.com/deqejekomu/edit?html,css,js,output
document.getElementById('flip').addEventListener('click', function () {
    const cards = document.querySelectorAll(".card-inner");
    cards.forEach(card => card.classList.toggle('flipped'))
}, false);