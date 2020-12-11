/* exported omit */

function omit(source,keys) {
  var source = source;
  var final = {};
  console.log(keys.length);
  for(var i = 0; i < keys.length; i++) {
    for(var key in source) {
      if(key !== keys[i]) {
        console.log('valueeeeee',source[key],key);
        final[key] = source[key];
      }
    }
  }
  return final;
}
