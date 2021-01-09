/* exported unique */

function unique(array) {
  const mainArray = [];

  for(let i = 0; i < array.length; i++) {
    if(mainArray.includes(array[i]) === false) {
      mainArray.push(array[i]);
    }
  }
  return mainArray;
}
