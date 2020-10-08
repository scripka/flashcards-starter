const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Game', () => {

  let game;

  beforeEach (() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should not have a currentRound at the beginning', () => {
    expect(game.currentRound).to.be.equal(null);
  });

  it('should create a round when game starts', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should create a new deck', () => {
    game.start();

    expect(game.currentRound.deck).to.be.an.instanceof(Array);
  });

  it('should create a new set of cards', () => {
    game.start();

    let result = game.currentRound.deck.every(function (card) {
      return (card instanceof Card);
    });

    expect(result).to.equal(true);
  });
});
