/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  var theArray = array;
  count = 0;
  for (var i = count; i < array.length; i = i + size) {
      newArray.push(array.slice(array[i], count));
      count += size;
      console.log('value of count', count);
      console.log('value of slice', i, count);
      console.log('value of slice', array.slice(array[i], count));
      console.log('value of array', array);
    }
    return newArray;
  }
