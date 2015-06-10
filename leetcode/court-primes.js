/**
 *  Qusetion:
 *    Count the number of prime numbers less than a non-negative number, n.
 *  Url and solution:
 *    https://leetcode.com/problems/count-primes/ 
 * 
 * /
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
   var pHash = {};
   var count = 0;
   
   for (var k = 2; k < n; k++) {
      pHash[k] = true;
   }
   // Loop's ending condition is i * i < n instead of i < sqrt(n)
   // to avoid repeatedly calling an expensive function sqrt().
   for (var i = 2; i * i < n; i++) {
      if (!pHash[i]) continue;
      for (var j = i * i; j < n; j += i) {
         pHash[j] = false;
      }
   }
   
   for (var l = 2; l < n; l++) {
      if (pHash[l]) count++;
   }
   
   return count;
};
