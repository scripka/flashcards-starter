const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card1, card2, correctTurn, incorrectTurn;

  beforeEach (() => {
    card1 = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
    correctTurn = new Turn('boo', card1);
    incorrectTurn = new Turn('many', card2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should only accept a string answer from a user', () => {
    expect(correctTurn.guess).to.equal('boo');
    expect(correctTurn.guess).to.be.a('string');

    expect(incorrectTurn.guess).to.equal('many');
    expect(incorrectTurn.guess).to.be.a('string');
  });

  it('should play the current card', () => {
    expect(correctTurn.currentCard).to.equal(card1);
    expect(correctTurn.currentCard).to.be.an.instanceof(Card);
  });

  it('should record the provided guess', () => {
    expect(correctTurn.returnGuess()).to.equal(correctTurn.guess);
  });

  it('should record the current card', () => {
    expect(correctTurn.returnCard()).to.equal(correctTurn.currentCard);
  });

  it('should evaluate our guessed answers', () => {
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it('should give us a feedback', () => {
    expect(correctTurn.giveFeedback()).to.equal('Correct!');
    expect(incorrectTurn.giveFeedback()).to.equal('Incorrect!');
  });
});
