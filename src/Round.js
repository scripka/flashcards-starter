const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    deck = deck || {};
    this.deck = deck.cards;
    this.turn = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(userGuess) {
    let userTurn = new Turn(userGuess, this.returnCurrentCard());
    this.deck.splice(0, 1);
    this.turn += 1;

    if (!userTurn.evaluateGuess()) {
      this.incorrectGuesses.push(userTurn.currentCard.id);
    }
    return userTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    if (!this.turn) {
      return;
    } else {
      let incorrectAnswersNum = this.incorrectGuesses.length;
      let correctAnswersPercent = 100 - Math.round((incorrectAnswersNum / this.turn) * 100);
      return correctAnswersPercent;
    }
  }

  endRound() {
    let correctPercent = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${correctPercent}% of the questions correctly!`);
  }
}


module.exports = Round;
