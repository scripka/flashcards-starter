const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck1 = new Deck();
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should have an empty deck as a default', () => {
    const deck = new Deck();

    expect(deck.cards).to.deep.equal([]);
  });

  it('should accept a card from a user', () => {
    const card = new Card(1, 'What is a scary word?', ['boo', 'bah', 'whah'], 'boo');
    const deck = new Deck(card);

    expect(deck.cards).to.equal(card);
  });

  it('should accept a list of multiple cards', () => {
    const card1 = new Card(1, 'What is a scary word?', ['boo', 'bah', 'whah'], 'boo');
    const card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
    const secondDeck = new Deck([card1, card2]);

    expect(secondDeck.cards).to.deep.equal([card1, card2]);
    expect(secondDeck.cards).to.be.an.instanceof(Array);
  });

  it('should create a deck only if an array contains instances of Card', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const firstDeck = new Deck([card1, card2, card3]);

    let result = firstDeck.cards.every(function (card) {
      return (card instanceof Card);
    });

    expect(result).to.equal(true);
  });
});
