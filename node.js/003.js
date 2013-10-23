/*
 * Problem 3
 * Find the largest prime factor of a composite number.
*/
var primeTest = function(num){
  var count   = 2,
      half    = Math.floor(num/2),
      isPrime = true;
  while(count < half){
    if(num % count === 0){
      isPrime = false;
      break;
    }
    count++;
  }
  return isPrime;
};

var sol = function(comp){
  var ret = Math.ceil(comp/2);
  while(ret > 1){
    console.log('testing: '+ret);
    if(comp % ret === 0 && primeTest(ret)){
      break;
    }
    ret--;
  }
  return ret;
};

console.log(sol(process.argv[2]));
