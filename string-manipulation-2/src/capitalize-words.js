/* exported capitalizeWords */

function capitalizeWords(string) {
  var cap = [];
  var lowArray = string.split(' ');
  for(i = 0; i < lowArray.length; i++) {
    cap.push(lowArray[i].substring(0,1).toUpperCase() + lowArray[i].substring(1).toLowerCase());
  }
  var sentence = cap.join(" ");
  return sentence;


}
