/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  if (array.every(el => el < 0)){
    var sortedArr = array.sort(function(a, b) {return b - a;});
    return sortedArr[0] * sortedArr[1] * sortedArr[2];
  }
  var sortedArr = array.sort(function (a, b) { return Math.abs(b) - Math.abs(a); });
  for(var i = 2; i < sortedArr.length; i++){
    res = sortedArr[0] * sortedArr[1] * sortedArr[i];
    if(res >= 0){
      return res
    }
  }
}

console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29]));
