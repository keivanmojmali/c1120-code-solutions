/* exported intersection */

function intersection(first,second) {
  const mainArray = [];

  for(let i = 0; i < first.length; i++) {
    if(second.includes(first[i])) {
      mainArray.push(first[i]);
    }
  }
  return mainArray;

}
