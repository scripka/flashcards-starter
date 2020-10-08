const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let newCards = [];
    prototypeQuestions.forEach(function(cardItem) {
        newCards.push(new Card(cardItem['id'], cardItem['question'], cardItem['answers'], cardItem['correctAnswer']));
    });
    const newDeck = new Deck(newCards);
    this.currentRound = new Round(newDeck);
    this.printMessage(newDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
