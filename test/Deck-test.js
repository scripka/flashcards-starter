const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have an empty deck as a default', function() {
    const deck = new Deck();

    expect(deck.cards).to.deep.equal([]);
  });

  it('should accept a card from a user', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck(card);

    expect(deck.cards).to.equal(card);
  });

  it('should accept a list of multiple cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const firstDeck = new Deck();
    const secondDeck = new Deck([card1, card2, card3]);

    expect(firstDeck.cards).to.deep.equal([]);
    expect(firstDeck.cards).to.be.an.instanceof(Array);

    expect(secondDeck.cards).to.deep.equal([card1, card2, card3]);
    expect(secondDeck.cards).to.be.an.instanceof(Array);
  });

  it('should accept a list of multiple cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const firstDeck = new Deck([card1, card2, card3]);
    const secondDeck = new Deck([]);

    expect(firstDeck.countCards()).to.equal(3);
    expect(secondDeck.countCards()).to.equal(0);
  });
});
