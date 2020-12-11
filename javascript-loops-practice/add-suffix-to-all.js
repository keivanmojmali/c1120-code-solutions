/* exported addSuffixToAll */

function addSuffixToAll(words,suffix) {
  var newWords = [];

  for(i = 0; i < words.length; i++) {
    newWords.push(words[i] + suffix);

  }
  return newWords;
}
