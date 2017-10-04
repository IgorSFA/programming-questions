module.exports = function camelCase(s){
  if(!s){
    return 0;
  }
  var count = 1;
  for (var i = 1; i < s.length; i++) {
    if(s.charCodeAt(i) >=65 && s.charCodeAt(i) <= 90)
      count++;
  }
  return count;
}