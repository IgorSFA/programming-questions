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
  it('encrypting "aa" with 1 as key', function(){
    assert.equal(caesarCipher(1,'aa', 1), 'bb');
  });
  it('encrypting "abc" with 2 as key', function(){
    assert.equal(caesarCipher(1,'abc', 2), 'cde');
  });
  it('encrypting "middle-Outz" with 2 as key', function(){
    assert.equal(caesarCipher(11,'middle-Outz', 2), 'okffng-Qwvb');
  });
  it('encrypting "Hello_World!" with 4 as key', function(){
    assert.equal(caesarCipher(12,'Hello_World!', 4), 'Lipps_Asvph!');
  });
  it('encrypting "www.abc.xy" with 87 as key', function(){
    assert.equal(caesarCipher(10,'www.abc.xy', 87), 'fff.jkl.gh');
  });
  it('encrypting a large string with 62 as key', function(){
    assert.equal(caesarCipher(90,'!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U',
     62), '!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E');
  });
  it('encrypting "U" with 62 as key', function(){
    assert.equal(caesarCipher(1,'U', 62), 'E');
  });   
});