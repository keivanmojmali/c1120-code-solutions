/* exported take */

function take(array,count) {
  var orig = array;
  var newArray = [];
  for(var i = 0 ; i < count; i++) {
    if(array[i] !== undefined) {
      newArray.push(orig[i]);
    }
  }

  return newArray;
}
