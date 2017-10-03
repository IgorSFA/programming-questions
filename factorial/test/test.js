const assert = require('assert');
const factorial = require('../factorial');
describe('Factorial', function() {
  it('0! = 1', function(){
    assert.equal(1, factorial(0));
  });
  it('1! = 1', function(){
    assert.equal(1, factorial(1));
  });
  it('2! = 2', function(){
    assert.equal(2, factorial(2));
  });
  it('3! = 6', function(){
    assert.equal(6, factorial(3));
  });
  it('4! = 24', function(){
    assert.equal(24, factorial(4));
  });
  it('10! = 3628800', function(){
    assert.equal(3628800, factorial(10));
  });
});
