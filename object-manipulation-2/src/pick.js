/* exported pick */

function pick(source, keys) {
  var newArray = [source];
  var hold = [];
  var newObject;
  for(var i = 0; i < newArray.length; i++) {
    if(newArray[i] === keys) {
      hold.push(newArray[i]);
    }
  }
  console.log(hold);
}
