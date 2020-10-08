const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card1, card2, turn, anotherTurn;

  beforeEach (() => {
    card1 = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
    turn = new Turn('boo', card1);
    anotherTurn = new Turn('woo', card2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn1 = new Turn();
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should only accept a string answer from a user', () => {
    expect(turn.guess).to.equal('boo');
    expect(turn.guess).to.be.a('string');

    expect(anotherTurn.guess).to.equal('woo');
    expect(anotherTurn.guess).to.be.a('string');
  });

  it('should play the current card', () => {
    expect(turn.currentCard).to.equal(card1);
    expect(turn.currentCard).to.be.an.instanceof(Card);
  });

  it('should record the provided guess', () => {
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should record the current card', () => {
    expect(turn.returnCard()).to.equal(turn.currentCard);
  });

  it('should evaluate our guessed answers', () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(anotherTurn.evaluateGuess()).to.equal(false);
  });

  it('should give us a feedback', () => {
    expect(turn.giveFeedback()).to.equal('Correct!');
    expect(anotherTurn.giveFeedback()).to.equal('Incorrect!');
  });
});
