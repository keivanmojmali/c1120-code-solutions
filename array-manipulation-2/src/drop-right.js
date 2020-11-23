/* exported dropRight */

function dropRight(array,count) {
  var newArray = [];
  var distance = array.length - count
  for(var i = 0; i < distance; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
