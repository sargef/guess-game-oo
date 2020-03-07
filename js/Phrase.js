// Phrase class to select random phrases for new game
class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

//function to display phrase to gameboard
  addPhraseToDisplay() {
    const keyboard = this.phrase.split('');
    for (let i = 0; i < keyboard.length; i++){
        let li = document.createElement('li');
        li.textContent = keyboard[i];
        keyboard[i] === ' ' ? li.className = 'hide space' : li.className = `hide letter ${keyboard[i]}`
        document.querySelector('#phrase ul').appendChild(li);
    }
  };

// Function to check for letter in phrase
  checkLetter(letter) {
     return this.phrase.includes(letter);
  };

// function to display matched letter to gameboard
  showMatchedLetter(letter) {
      const letters = document.querySelectorAll(`.${letter}`);
      letters.forEach((buttons) => {
      buttons.classList.remove('hide');
      buttons.classList.add('show');
      });
   }
}
