/* exported invert */

function invert(source) {
  var final = [];
  for(var key in source) {
    final.push(source[key], key);
    console.log(source[key], key);

  }
  console.log('value of final',final);
}
