const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    deck = deck || {};
    this.deck = deck.cards;
    this.turn = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.splice(0, 1)[0]
  }

  takeTurn(userGuess) {
    let userTurn = new Turn(userGuess, this.returnCurrentCard());
    this.turn += 1;
    if (!userTurn.evaluateGuess()) {
      this.incorrectGuesses.push(userTurn.currentCard.cardId);
    }

    return userTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    if (!this.turn) {
      return "You didn't make any turns!";
    } else {
      let incorrectAnswersNum = this.incorrectGuesses.length;
      let correctAnswersPercent = 100 - Math.round((incorrectAnswersNum / this.turn) * 100);
      return correctAnswersPercent;
    }
  }

  endRound() {
    let correctPercent = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${correctPercent}% of the questions correctly!`;
  }
}


module.exports = Round;
