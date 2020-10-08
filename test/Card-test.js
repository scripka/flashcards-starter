const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  let card1, card2;

  beforeEach (() => {
    card1 = new Card(1, 'What is a scary word?', ['boo', 'bah', 'whah'], 'boo');
    card2 = new Card(2, 'How many colors in a rainbow?', ['nine', 'many', 'seven'], 'seven');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', () => {
    expect(card1.question).to.equal('What is a scary word?');
  });

  it('should store a list of possible answers', () => {
    expect(card1.answers).to.deep.equal(['boo', 'bah', 'whah']);
  });

  it('should store the correct answer', () => {
    expect(card1.correctAnswer).to.equal('boo');
  });

  it('should store a card ID', () => {
    expect(card1.id).to.deep.equal(1);
    expect(card2.id).to.deep.equal(2);
  });

  it('should store a different question', () => {
    expect(card2.question).to.equal('How many colors in a rainbow?');
  });

  it('should store a different set of possible answers', () => {
    expect(card2.answers).to.deep.equal(['nine', 'many', 'seven']);
  });

  it('should store a different correct answer', () => {
    expect(card2.correctAnswer).to.equal('seven');
  });

  it('should have a question as a string', () => {
    expect(card2.question).to.be.a('string');
  });

  it('should have possible answers only as an array', () => {
    expect(card2.answers).to.be.an.instanceof(Array);
  });

  it('should have only string answers inside the array', () => {
    let result = card1.answers.every(function (answer) {
      return typeof(answer) === 'string';
    });

    expect(result).to.equal(true);
  });

  it('should have ID stored as a number', () => {
    expect(card1.id).to.be.a('number');
  });

  it('should have a correct answer as a string', () => {
    expect(card1.correctAnswer).to.be.a('string');
  });
});
