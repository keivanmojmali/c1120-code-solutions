/* exported getKeys */

function getKeys(object) {
  var allKeys = [];
  for(var key in object) {
    allKeys.push(key);
  }
  return allKeys;
}
