// 65 - 90 = A - Z
// 97 - 122 = a - z
module.exports = function(n, s, k){
  let encryptedWord = Array.prototype.map.call(s, character => {
    let unencryptedCharCode = character.charCodeAt(0);
    let localKey = k % 26;
    if (unencryptedCharCode < 65 
    || (unencryptedCharCode > 90 && unencryptedCharCode < 97)
    || unencryptedCharCode > 122) {
      return character;
    }
    if(unencryptedCharCode + localKey > 122){
      localKey = unencryptedCharCode + localKey - 123;
      unencryptedCharCode = 97;
    }else{
      if(unencryptedCharCode + localKey > 90 && unencryptedCharCode < 97){
        localKey = unencryptedCharCode + localKey - 91;
        unencryptedCharCode = 65;
      }
    }
    return String.fromCharCode(unencryptedCharCode + localKey);
  }).join('');
  return encryptedWord;
}