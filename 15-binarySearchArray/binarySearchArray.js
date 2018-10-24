/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target, start, end) {
  var start = start || 0;
  var end = end || array.length-1;
  var mid = Math.floor((start + end)/2);
  if(array[mid] === target){
    return mid
  }else if(array[mid] < target){
    return binarySearch(array, target, mid +1, end)
  }else if(array[mid] > target){
    return binarySearch(array, target, start, mid -1)
  }
  return null
};






