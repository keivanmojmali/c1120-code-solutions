/* exported capitalize */

function capitalize(word) {
  var proper = word[0].toUpperCase();
  var lower = word.slice(1).toLowerCase();
  return proper + lower;
}
