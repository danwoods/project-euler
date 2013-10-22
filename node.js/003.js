/*
 * Problem 3
 * Find the largest prime factor of a composite number.
*/
var sol = function(comp){
  var ret = Math.floor(comp/2),
      primeTest;

  primeTest = function(num){
    var count = 2,
        half = Math.floor(num/2),
        isPrime = true;
    while(count < half){
      if(num % count === 0){
        isPrime = false;
      }
      count++;
    }
    return isPrime;
  };

  while(ret){
    if(comp % ret === 0 && primeTest(ret)){
      break;
    }
    ret--;
  }

  return ret;
};

console.log(sol(process.argv[2]));
