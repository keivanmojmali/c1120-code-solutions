/* exported reverseWord */

function reverseWord(string) {
  var sep = "";
  for(var i = string.length -1; i >= 0; i--) {
    sep += string[i];
  }
  return sep;
}
