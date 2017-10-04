const assert = require('assert');
const camelCase = require('../camelCase');
describe('camelCase', function() {
  it('test has one word', function(){
    assert.equal(camelCase('test'), 1);
  });
  it('twoWords has two words', function(){
    assert.equal(camelCase('twoWords'), 2);
  });
  it('ThreeWordsNow has three words', function(){
    assert.equal(camelCase('ThreeWordsNow'), 3);
  });
  it('Empty string has no words', function(){
    assert.equal(camelCase(''), 0);
  });
});