/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  if(Object.keys(apple).length === 0 && Object.keys(orange).length === 0){
    return true
  }
  
  for(var key in apple){
    if(Object.keys(apple[key]).length === 1 ){
      if(apple[key] !== orange[key]){
        return false
      }
    }else if (Object.keys(apple[key]).length > 1 ){
      deepEquals(apple[key],orange[key])
    }
    return true;
  }
};
