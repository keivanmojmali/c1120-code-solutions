/* exported difference */

function difference(first,second) {
  const mainArray = [];
  for(let floop = 0; floop < first.length; floop++) {
    if(second.includes(first[floop]) === false) {
      mainArray.push(first[floop]);
    }
  }
  for(let sloop = 0; sloop < second.length; sloop++) {
    if(first.includes(second[sloop]) === false) {
      mainArray.push(second[sloop]);
    }
  }
  return mainArray;
}
