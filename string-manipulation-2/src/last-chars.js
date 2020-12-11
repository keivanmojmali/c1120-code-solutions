/* exported lastChars */

function lastChars(length, string) {
  var short = '';
  short += string.substring(string.length - length);
  return short;
}
