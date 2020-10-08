const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Game', () => {

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should not have a currentRound at the beginning', () => {
    const game = new Game();

    expect(game.currentRound).to.be.equal(null);
  });

  it('should create a round when game starts', () => {
    const game = new Game();

    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
