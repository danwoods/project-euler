/*
 * Problem 2
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 *
*/

var sol = function(prev1, prev2, ans){
  if(prev2 < 4000001){
    var sum = prev1 + prev2;
    if(sum % 2 === 0){
      ans += sum;
    }
    return sol(prev2, sum, ans);
  }
  else{
    return ans;
  }

};

console.log(sol(1, 1, 0));
