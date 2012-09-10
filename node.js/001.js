/*
 * Problem 1
 * Add all the natural numbers below one thousand that are multiples of 3 or 5.
*/

var sol = 0;

for (var i = 0; i < 1000; i++) {
  if(i % 3 == 0 || i % 5 == 0){
    sol += i 
  }
};

console.log(sol);
