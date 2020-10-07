const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  let card1, card2;

  beforeEach (function() {
    card1 = new Card(1, 'What is a scary word?', ['boo', 'bah', 'whah'], 'boo');
    card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card1.question).to.deep.equal('What is a scary word?');
  });

  it('should store a list of possible answers', function() {
    expect(card1.answers).to.deep.equal(['boo', 'bah', 'whah']);
  });

  it('should store the correct answer', function() {
    expect(card1.correctAnswer).to.deep.equal('boo');
  });

  it('should store a card ID', function() {
    expect(card1.cardId).to.deep.equal(1);
    expect(card2.cardId).to.deep.equal(2);
  });

  it('should store a different question', function() {
    expect(card2.question).to.deep.equal('How many colors in a rainbow?');
  });

  it('should store a different set of possible answers', function() {
    expect(card2.answers).to.deep.equal(['nine', 'many', 'seven']);
  });

  it('should store a different correct answer', function() {
    expect(card2.correctAnswer).to.deep.equal('seven');
  });
});
