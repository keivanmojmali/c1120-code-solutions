/* exported pick */

function pick(source, keys) {
  var source = source;
  var props = [];
  for(var i = 0; i < keys.length; i++ ) {
    for(var key in source) {
      if(key === keys[i]) {
        props.push(key,source[key]);
      }
    }
  }
  return props;
}


/* this function almost works -
return items needed but wiith a comma in the middle -
so it does not get counted - need to return key and source[key] but together */
