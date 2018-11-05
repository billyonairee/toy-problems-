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
  var argArr = []
  for(var key in arguments){
    argArr.push(arguments[key])
  }
  argArr.sort((a,b)=>{return b.length - a.length})

  if(string1 === ""){return ""}
  
  // if(string1.length < string2.length){
  //   longstr = string2.split('')
  //   shortstr = string1.split('')
  // }else {
  //   longstr = string1.split('');
  //   shortstr = string2.split('');
  // }

  // console.log('argArr[0]:',argArr[0])
  // res.push(argArr[0])
  // console.log(res.length)
  if(res.length === 0){res.push(argArr[0])}
  console.log('res:',res)
  for(var i = 1; i < argArr[0].length; i++){
    console.log(argArr[i])
      if(res.includes(argArr[i]) && !res.includes(argArr[i])&& argArr[argArr.length-1] !== " "){
        var temp = []
        temp.push(longstr[i])
    }
    res = temp
    // console.log(res)
  }
  // console.log(res)
  // return res.join('')
};