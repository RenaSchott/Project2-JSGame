//Randomly displaying cards
/**
 * 
 */

//flipping cards - inspired by https://stackoverflow.com/questions/37604456/how-to-make-a-div-flip-on-button-press
document.getElementById('flip').addEventListener('click', function() {
    card.classList.toggle('flipped');
}, false);