/* exported chunk */

function chunk(array,size) {
  var newArray = [];
  count = size;
  for(var i = 2; i < array.length; i = i + size) {
    var slice = array.slice(array[i],count);
    newArray.push([slice]);
    count += size;
  }
  return newArray;
}
