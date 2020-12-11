/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    newWord = word.substring(0, 1).toUpperCase()
    newWord += word.substring(1,4).toLowerCase();
    newWord += word.substring(4,5).toUpperCase();
    newWord += word.substring(5).toLowerCase();
    return newWord;
  } else {
    newWord = word.substring(0,1).toUpperCase()
    newWord += word.substring(1).toLowerCase();
    return newWord;
  }
}
