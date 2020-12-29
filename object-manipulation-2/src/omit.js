/* exported omit */


function omit(source,keys) {
  var hold = {};
  for(var check in source) {
    if(!(keys.includes(check))) {
      hold[check] = source[check];
    }
  }
  return hold;
}
