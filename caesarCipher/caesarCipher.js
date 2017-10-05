module.exports = function(size, str, key){
  let unencryptedCharCode = str.charCodeAt(0);
  if ((unencryptedCharCode < 65 || (unencryptedCharCode > 90 && unencryptedCharCode < 97)) ||
      ((unencryptedCharCode > 90 && unencryptedCharCode < 97) || unencryptedCharCode > 122)) {
    return str;
  }
  if(str == 'z'){
    unencryptedCharCode = 'a'.charCodeAt(0);
    key--;
  }
  if(str == 'Z'){
    unencryptedCharCode = 'A'.charCodeAt(0);
    key--;
  }
  return String.fromCharCode(unencryptedCharCode+key);
}