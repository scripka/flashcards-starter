const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should only accept a string answer from a user', function() {
    const turn = new Turn('boo');
    const newTurn = new Turn('woo');

    expect(turn.guess).to.equal('boo');
    expect(turn.guess).to.be.a.string('boo');

    expect(newTurn.guess).to.equal('woo');
    expect(newTurn.guess).to.be.a.string('woo');
  });

  it('should play the current card', function() {
    const card = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    const turn = new Turn('boo', card);

    expect(turn.currentCard).to.deep.equal(card);
    expect(turn.currentCard).to.be.an.instanceof(Card);

  });

  it('should record the provided guess', function() {
    const card = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    const turn = new Turn('boo', card);

    var turnGuessAnswer = turn.returnGuess();

    expect(turnGuessAnswer).to.deep.equal(turn.guess);

  });

  it('should record the current card', function() {
    const card = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    const turn = new Turn('boo', card);

    var turnCurrentCard = turn.returnCard();

    expect(turnCurrentCard).to.deep.equal(turn.currentCard);
  });

  it('should evaluate our guessed answers', function() {
    let card = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    const turn = new Turn('boo', card);
    const anotherTurn = new Turn('woo', card);

    expect(turn.evaluateGuess()).to.equal(true);
    expect(anotherTurn.evaluateGuess()).to.equal(false);
  });

  it('should give us a feedback', function() {
    let card = new Card(1, "What is a scary word?", ['boo', 'bah', 'whah'], 'boo');
    const turn = new Turn('boo', card);
    const anotherTurn = new Turn('woo', card);

    expect(turn.giveFeedback()).to.deep.equal('Correct!');
    expect(anotherTurn.giveFeedback()).to.deep.equal('Incorrect!');
  });
});
