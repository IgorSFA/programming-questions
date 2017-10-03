module.exports = n => {
  resp = '';
  if(n % 3 == 0) resp = 'Fizz';
  if(n % 5 == 0) resp += 'Buzz';
  return resp || n;
}