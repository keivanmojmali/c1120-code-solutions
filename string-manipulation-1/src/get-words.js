/* exported getWords */

function getWords(string) {
  var sep = string.split(' ');
  if (sep[0] === '') {
  return [];
  } else {
    return sep;
  }
}
