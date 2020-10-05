const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store a card ID', function() {
    const card = new Card(1, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
    expect(card.cardId).to.equal(1);
  });

  it('should store a different id', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
    expect(card.cardId).to.equal(2);
  });

  it('should store a different question', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What is a comma-separated list of related values?');
  });

  it('should store a different set of possible answers', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'object');
    expect(card.answers).to.deep.equal(["array", "object", "function"]);
  });

  it('should store a different correct answer', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?', ["mutator method", "accessor method", "iteration method"], 'array');
    expect(card.correctAnswer).to.equal('array');
  });
});
