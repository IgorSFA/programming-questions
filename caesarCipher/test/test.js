const assert = require('assert');
const caesarCipher = require('../caesarCipher');
describe('caesarCipher', function(){
  it('encrypting "a" with 2 as key', function(){
    assert.equal(caesarCipher(1,'a', 2), 'c');
  });
  it('encrypting "a" with 3 as key', function(){
    assert.equal(caesarCipher(1,'a', 3), 'd');
  });
  it('encrypting "z" with 1 as key', function(){
    assert.equal(caesarCipher(1,'z', 1), 'a');
  });
  it('encrypting "Z" with 1 as key', function(){
    assert.equal(caesarCipher(1,'Z', 1), 'A');
  });
  it('encrypting "Z" with 2 as key', function(){
    assert.equal(caesarCipher(1,'Z', 2), 'B');
  });
  it('encrypting "A" with 2 as key', function(){
    assert.equal(caesarCipher(1,'A', 2), 'C');
  });
  it('encrypting "!" with 1 as key', function(){
    assert.equal(caesarCipher(1,'!', 1), '!');
  });
});