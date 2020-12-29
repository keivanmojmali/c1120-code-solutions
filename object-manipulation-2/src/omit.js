/* exported omit */


function omit(source,keys) {
  var original = source;
  var final = {};
  for(var i = 0; i < keys.length; i++) {
    for(var key in original) {
      if(key === keys[i]) {
         delete original[key];
      }
    }
  }
  final = original;
  return final;
}
