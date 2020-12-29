/* exported invert */

function invert(source) {
  var final = {};
  for(var key in source) {
    var pushTo = source[key] + '';
    final[pushTo] = key;
  }
  return final;
}
