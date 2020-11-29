/* exported chunk */

function chunk(array,size) {
  var newArray = [];
  for(var i = 0; i < array.length;i = i + size) {
    var count = size;
    newArray.push(array.slice(array[i],count));
    count = count + size;

  }
  return newArray;
}
