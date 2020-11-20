/* exported includesSeven */

function includesSeven(array) {
  var seven = [];
  for (i = 0; i < array.length; i++) {
    if(array[i] === 7) {
      seven.push(true);
    } else {
      return false
    }
  }
}
