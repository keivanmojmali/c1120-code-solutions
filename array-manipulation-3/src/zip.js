/* exported zip */


function zip(first,second) {
  let shorter = 0;
  const mainHold = [];

  if(first.length > second.length) {
    shorter = second.length;
  } else {
    shorter = first.length;
  }

  for(let i = 0; i < shorter; i++) {
    let fHold = first[i];
    let sHold = second[i];
    mainHold.push([fHold,sHold]);


  }
  return mainHold;
}
