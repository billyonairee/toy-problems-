/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  var res = [];
  // var strArr = []
  // for(var key in arguments){
  //   strArr.push(arguments[key])
  // }
  // strArr.sort((a,b)=>{return b.length - a.length})

  if(string1 === ""){return ""}
  
  if(string1.length < string2.length){
    longstr = string2.split('')
    shortstr = string1.split('')
  }else {
    longstr = string1.split('');
    shortstr = string2.split('');
  }
  for(var i = 0; i < longstr.length; i++){
      if(shortstr.includes(longstr[i]) && !res.includes(longstr[i])&& longstr[i] !== " "){
        res.push(longstr[i])
    }
  }
  return res.join('')
};