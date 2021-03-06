module.exports = function (x1, v1, x2, v2) {
  if(x1 == x2){
    return 'YES';
  }
  lastx1 = x1;
  lastx2 = x2;
  while(x1 != x2 && 
      ((x1 > x2 && v1 < v2) || (x1 < x2 && v1 > v2))){
    x1 += v1;
    x2 += v2;
  }
  if(x1 == x2)
    return 'YES';
  return 'NO';
}
