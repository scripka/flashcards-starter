const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach (function() {
    card1 = new Card(1, 'What is a scary word?', ['boo', 'bah', 'whah'], 'boo');
    card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
    card3 = new Card(3, 'Is Pluto a planet?', ['pluto is always a planet to me', 'no', 'I do not know'], 'no');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {

    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck of cards', function() {

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to take the top card from the deck', function() {

    expect(round.deck).to.deep.equal([card1, card2, card3]);

    var getCurrentCard = round.returnCurrentCard();

    expect(getCurrentCard).to.deep.equal(card1);
    expect(round.deck).to.deep.equal([card2, card3]);
  });

  it('should take a turn when guess is made', function() {

    expect(round.turn).to.deep.equal(0);

    round.takeTurn('boo');
    expect(round.turn).to.deep.equal(1);

    round.takeTurn('woo');
    expect(round.turn).to.deep.equal(2);
  });

  it('should give a feedback to a user if the answer is correct or not', function() {

    expect(round.takeTurn('boo')).to.deep.equal('Correct!');
    expect(round.takeTurn('woo')).to.deep.equal('Incorrect!');
  });

  it('should record incorrect answers in an array storing the card id', function() {

    expect(round.incorrectGuesses.length).to.equal(0);

    expect(round.takeTurn('woo')).to.deep.equal('Incorrect!');
    expect(round.takeTurn('many')).to.deep.equal('Incorrect!');
    expect(round.takeTurn('no')).to.deep.equal('Correct!');

    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
  });

  it('should calculate percent of the correct answers', function() {

    expect(round.turn).to.deep.equal(0);
    expect(round.calculatePercentCorrect()).to.equal("You didn't make any turns!");

    round.takeTurn('boo');
    expect(round.turn).to.deep.equal(1);
    expect(round.incorrectGuesses.length).to.equal(0);

    round.takeTurn('many');
    expect(round.turn).to.deep.equal(2);
    expect(round.incorrectGuesses.length).to.equal(1);

    expect(round.calculatePercentCorrect()).to.equal(50);

    round.takeTurn('pluto is always a planet to me');
    expect(round.turn).to.deep.equal(3);
    expect(round.incorrectGuesses.length).to.equal(2);

    expect(round.calculatePercentCorrect()).to.equal(33);
  });
});
