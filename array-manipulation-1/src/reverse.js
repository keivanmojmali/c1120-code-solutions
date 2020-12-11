/* exported reverse */

function reverse(array) {
  var newArray = [];
  var last = array.length -1;
  for(i = last; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
