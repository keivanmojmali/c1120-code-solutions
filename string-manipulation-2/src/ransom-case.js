/* exported ransomCase */

function ransomCase(string) {
  var word = string;
  var ransom = '';
  for(i = 0; i < word.length; i++) {
    if(i % 2 !== 0) {
      ransom += word[i].toUpperCase();
    } else {
      ransom += word[i].toLowerCase();
    }
  }
  return ransom;
}
