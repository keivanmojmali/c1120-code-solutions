/* exported union */

function union(first, second) {
  const mainArray = [];

  for(let i = 0; i < first.length; i++) {
    if(mainArray.includes(first[i]) === false) {
      mainArray.push(first[i]);
    }
  }

  for(let u = 0; u < second.length; u++) {
    if(mainArray.includes(second[u]) === false) {
      mainArray.push(second[u]);
    }
  }
  return mainArray;
}
