/* exported numVowels */

function numVowels(string) {
  var number = [];
  var arr = string;
  for(i = 0; i < string.length; i++) {
    if(arr[i] === 'A' || arr[i] === 'a' || arr[i] === 'E' || arr[i] === 'e'||
     arr[i] === 'I' || arr[i] === 'i' || arr[i] === 'O' || arr[i] === 'o' ||
     arr[i] === 'u' || arr[i] === 'U') {
      number.push(arr[i]);
  }
}
  return number.length;
}
