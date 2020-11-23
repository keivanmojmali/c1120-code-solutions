/* exported takeRight */

function takeRight(array,count) {
  var newArray = [];
  var start = array.length - count;

  for(var i = start; i < array.length; i++) {
    if(array[i] !== undefined) {
     newArray.push(array[i]); }
  }
  return newArray;
}
