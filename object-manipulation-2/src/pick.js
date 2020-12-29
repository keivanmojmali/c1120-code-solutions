/* exported pick */

function pick(source, keys) {
  var source = source;
  var props = {};
  for(var i = 0; i < keys.length; i++ ) {
    for(var key in source) {
      if(key === keys[i] && source[key] !== undefined) {
        props[key] = source[key];
      }
    }
  }
  return props;
}
