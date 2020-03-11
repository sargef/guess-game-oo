// Variables to grab element names from gameboard positions
let game;
const keyboardButtons = document.querySelectorAll('.key');
const scoreboard = document.querySelector('#scoreboard ol');
const newGameButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');

// Variables to locate score message display and append container for images
const winImage = document.querySelector('#overlay');
const looseImage = document.querySelector('#overlay');
const winContainer = document.createElement('span');
const looseContainer = document.createElement('span');
looseImage.appendChild(looseContainer);
winImage.appendChild(winContainer);

// Create image attributes
const ulWin = document.createElement("IMG");
ulWin.setAttribute("src", "images/emoticon.png");
ulWin.setAttribute("width", "304");
ulWin.setAttribute("height", "228");
ulWin.setAttribute("alt", "emoticon");

const ulLoose = document.createElement("IMG");
ulLoose.setAttribute("src", "images/smileygameloose.png");
ulLoose.setAttribute("width", "304");
ulLoose.setAttribute("height", "228");
ulLoose.setAttribute("alt", "emoticon");

// Append images to container and set display to none until called
looseImage.appendChild(ulLoose);
looseContainer.appendChild(ulLoose);
winImage.appendChild(ulWin);
winContainer.appendChild(ulWin);
winContainer.style.display = 'none';
looseContainer.style.display = 'none';


// Variables and attribute settings for background display;
const screen = document.querySelector('body');
const background = document.createElement('IMG');
background.setAttribute("src", "images/pc.png");
background.setAttribute("size", "cover");
background.setAttribute("repeat", "no-repeat");
background.style.center = "static|relative|initial";
screen.insertBefore(background, screen.childNodes[0]);
background.style.display = 'none';

// Function to start a new game
const newGame = () => {
    game = new Game();
    game.startGame();
}

// Event listener for new game selected
newGameButton.addEventListener('click', () => {
    newGame();
});

// Event listener for buttons selected
keyboardButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
});

// Event listener for physical keypress buttons selected
window.addEventListener('keyup', (e) => {
 if( e.keyCode >= 65 && e.keyCode <= 90 ) {
   let keyed = Array.from(keyboardButtons).filter(key => key.textContent === e.key);
   game.handleInteraction(keyed[0]);
    }
});
