const assert = require('assert');
const fizzBuzz = require('../fizzBuzz');
describe('FizzBuzz', function() {
  it('3 is fizz', function() {
    assert.equal('Fizz', fizzBuzz(3));
  });
  it('6 is fizz', function() {
    assert.equal('Fizz', fizzBuzz(6));
  });
  it('5 is buzz', function() {
    assert.equal('Buzz', fizzBuzz(5));
  });
  it('10 is buzz', function() {
    assert.equal('Buzz', fizzBuzz(10));
  });
  it('15 is fizzBuzz', function() {
    assert.equal('FizzBuzz', fizzBuzz(15));
  });
  it('30 is fizzBuzz', function() {
    assert.equal('FizzBuzz', fizzBuzz(30));
  });
  it('1 is normal', function() {
    assert.equal('1', fizzBuzz(1));
  });
  it('2 is normal', function() {
    assert.equal('2', fizzBuzz(2));
  });
});
