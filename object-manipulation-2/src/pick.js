/* exported pick */

function pick(source, keys) {
 var hold = [source];
 for(var key in hold) {
  if(key === keys) {
    hold.push(key,value);
  }
  return hold;
 }

}
