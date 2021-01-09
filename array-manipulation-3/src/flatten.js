/* exported flatten */

function flatten(array) {
  const hold = [];
  for(let i = 0; i < array.length; i++) {
    let current = array[i];
    if(typeof current === 'object') {
      for(let key in current){
        hold.push(current[key]);
      }
    } else {
      hold.push(current);
    }
  }
  return hold;
}
