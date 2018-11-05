/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  console.log(number)
  var n = String(number)
  var x;
  var y = Number(n.slice(2))
  for(var i = 0; i<n.length; i++){
    if(n[i] === "."){
      var temp = n.length-2;
      x = Math.pow(10, temp)
    }
  }
  console.log("a",gcdlcm(y,x))
};

console.log(toFraction(0.88))