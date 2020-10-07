const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card1, card2, turn, anotherTurn;

  beforeEach (function() {
    card1 = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
    turn = new Turn('boo', card1);
    anotherTurn = new Turn('woo', card2);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should only accept a string answer from a user', function() {
    expect(turn.guess).to.equal('boo');
    expect(turn.guess).to.be.a('string');

    expect(anotherTurn.guess).to.equal('woo');
    expect(anotherTurn.guess).to.be.a('string');
  });

  it('should play the current card', function() {
    expect(turn.currentCard).to.equal(card1);
    expect(turn.currentCard).to.be.an.instanceof(Card);

  });

  it('should record the provided guess', function() {
    var turnGuessAnswer = turn.returnGuess();

    expect(turnGuessAnswer).to.equal(turn.guess);

  });

  it('should record the current card', function() {
    var turnCurrentCard = turn.returnCard();

    expect(turnCurrentCard).to.equal(turn.currentCard);
  });

  it('should evaluate our guessed answers', function() {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(anotherTurn.evaluateGuess()).to.equal(false);
  });

  it('should give us a feedback', function() {
    expect(turn.giveFeedback()).to.equal('Correct!');
    expect(anotherTurn.giveFeedback()).to.equal('Incorrect!');
  });
});
