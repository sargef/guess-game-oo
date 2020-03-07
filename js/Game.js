/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Game class to manage game functionality
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = [
       'Change your thoughts and you change your world',
       'It always seems impossible until its done',
       'Keep your eyes on the stars and your feet on the ground',
       'Success is how high you bounce when you hit the ground',
       'Life is really simple but we insist on making it complicated',
       'Its better to dance than to march through life',
       'Life is a long lesson in humanity',
       'Because of your smile you make life more beautiful',
       'Be so good they cant ignore you',
       'The only impossible journey is the one you never begin',
       'Life is short and it is up to you to make it sweet',
       'Happiness is only real when shared',
       'The art of love is largely the art of persistence',
       'Do what is right not what is easy'
   ];
     this.activePhrase = null;
   }


// Function to commence start of game display
 startGame() {
     this.activePhrase = new Phrase(this.getRandomPhrase());
     document.getElementById('overlay').style.display = 'none';
     this.activePhrase.addPhraseToDisplay();
  // Append background image to screen
     background.style.display = 'block';

 }

// Function Call to Phrases array for game
createPhrases() {
    this.phrases;
}

// Function to return a random phrase for each game
  getRandomPhrase() {
     let phrased = Math.floor(Math.random() * Math.floor(this.phrases.length));
       return this.phrases[phrased];
   }

// Function to handle game interaction and functionality
   handleInteraction(button) {
       button.disabled = true;
       if(!this.activePhrase.checkLetter(button.innerHTML)){
           button.classList.add('wrong');
           this.removeLife();
       } else {
           button.classList.add('chosen');
           this.activePhrase.showMatchedLetter(button.innerHTML);
           if(this.checkForWin()){
              this.gameOver(true);
           }
       }
   };

// Function to remove hearts if incorrect letter is selected
   removeLife() {
    const scoreboard = document.querySelector('#scoreboard ol');
    this.missed++;
    scoreboard.children[this.missed -1].firstChild.src = 'images/lostHeart.png';
    if(this.missed === 5){
      this.gameOver(false);
    }
};

// Function to check if all letters in the phrase have been selected
   checkForWin() {
     let li = document.getElementsByClassName('letter');
     let count = 0;
     for (let i = 0; i < li.length; i++) {
       if (li[i].classList.contains('show')) {
          count += 1;
       }
       if (count === li.length) {
         return 'win';
       }
     }
   }

// Function to display win or loose banner when game is finished and reset gameboard + a little extra emoji display
   gameOver(gameWon) {

     const banner = document.querySelector('#game-over-message');
     if (gameWon) {
       banner.innerHTML = 'Congratulations, you win! Great job. Let\'s play again!';
       overlay.className = 'win';
       winContainer.style.display = 'block';
       looseContainer.style.display = 'none';
     } else {
       banner.innerHTML = 'Sorry, you loose! You have no more hearts left. Let\'s go again';
       overlay.className = 'lose';
       looseContainer.style.display = 'block';
       winContainer.style.display = 'none';
     }
       newGameButton.innerHTML = 'Play Again?';
       overlay.style.display = '';
       this.missed = 0;
       this.activePhrase = null;
       const phraseUl = document.querySelector("ul");
       phraseUl.innerHTML = "";
       const keys = document.querySelectorAll(".key");
       keys.forEach(key => {
       key.className = "key";
       key.removeAttribute("disabled");
     })
      const lifeHearts = document.querySelectorAll(".tries img");
      lifeHearts.forEach(lifeHeart => {
      lifeHeart.src = "images/liveHeart.png";
      // Append background image to screen
      background.style.display = 'block';
    })
  };
}
