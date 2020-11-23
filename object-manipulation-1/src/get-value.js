/* exported getValue */

function getValues(object) {
  var allValues = [];
  for(var value in object) {
    allValues.push(object[value]);
  }
  return allValues;
}
