const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach (() => {
    card1 = new Card(1, 'What is a scary word?', ['boo', 'bah', 'whah'], 'boo');
    card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
    card3 = new Card(3, 'Is Pluto a planet?', ['pluto is always a planet to me', 'no', 'I do not know'], 'no');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round1 = new Round();

    expect(round1).to.be.an.instanceof(Round);
  });

  it('should have a deck of cards', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to take the top card from the deck', () => {
    var getCurrentCard = round.returnCurrentCard();

    expect(getCurrentCard).to.deep.equal(card1);
  });

  it('should take a turn when guess is made', () => {
    round.takeTurn('boo');

    expect(round.turn).to.equal(1);

    round.takeTurn('woo');

    expect(round.turn).to.equal(2);
  });

  it('should remove used card from the deck', () => {
    expect(round.deck.length).to.equal(3);

    round.takeTurn('boo');
    round.takeTurn('woo');

    expect(round.deck.length).to.equal(1);
  });

  it('should give a feedback to a user when the answer is submitted', () => {
    expect(round.takeTurn('boo')).to.equal('Correct!');
    expect(round.takeTurn('woo')).to.equal('Incorrect!');
  });

  it('should have by default 0 incorrect answers at the start of the game', () => {
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should record incorrect answers in an array storing the card id', () => {
    expect(round.takeTurn('woo')).to.equal('Incorrect!');
    expect(round.takeTurn('many')).to.equal('Incorrect!');
    expect(round.takeTurn('no')).to.equal('Correct!');

    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
  });

  it('should calculate percent of the correct answers', () => {
    round.takeTurn('boo');
    round.takeTurn('many');
    round.takeTurn('pluto is always a planet to me');

    expect(round.turn).to.equal(3);
    expect(round.incorrectGuesses.length).to.equal(2);

    expect(round.calculatePercentCorrect()).to.equal(33);
  });
});
