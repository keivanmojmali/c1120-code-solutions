/* exported getIndexes */
/* exported findIndex */
function getIndexes(array) {
  var arrayIndex = [];
  currentIndex = 0;
  for (i = 0; i < array.length; i++) {
    arrayIndex.push(currentIndex);
    currentIndex++;
  }
  return arrayIndex;
}
