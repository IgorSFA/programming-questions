module.exports = function factorial(n) {
  if(n > 1) return n * factorial(n-1);
  if(n == 0 || n == 1) return 1;
}