
class Hangman {
    constructor (word){
       this.word = word;
       this.counter = 6;
       this.guessedLetter = [];
    }
    getDisplayMessage(){
        const wordSeperatedBySpace = this.word.split(" ");
        return wordSeperatedBySpace
              .map((wordInPhrase) => {
                return wordInPhrase
                  .split("")
                  .map((letter) => { return this.guessedLetter.includes(letter.toLowerCase()) ? letter : "*";})
                  .join("");
              })
              .join(" ");
    
    }

    guessLetter(letter){
        if(this.word.split('').map(i => i.toLowerCase()).includes(letter.toLowerCase())){
            this.guessedLetter.push(letter);

        }
        else {
            this.counter --;    
        }
    }
    getRemainingGuesses(){
        return this.counter;
    }

    isMessageSolved(){

        return false;
    }

}

module.exports = Hangman;