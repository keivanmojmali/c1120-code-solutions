/* exported toObject */

function toObject(keyValuePair) {
  var key =  keyValuePair[0];
  var prop = keyValuePair[1];
  var emptyInside = {};
  emptyInside[key] = prop;
  return emptyInside;
}
