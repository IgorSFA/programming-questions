const assert = require('assert');
const kangaroo = require('../kangaroo');

describe('Kangaroo', function() {
  it('Start at the same position', function() {
    assert.equal(kangaroo(0, 1, 0, 0), 'YES');
  });
  it('Start at different positions and velocity = 0', function() {
    assert.equal(kangaroo(1, 0, 0, 0), 'NO');
  });
  it('x1 = 0, v1 = 3, x2 = 4, v2 = 2', function() {
    assert.equal(kangaroo(0, 3, 4, 2), 'YES');
  });
});