/* exported defaults */

function defaults(target, source) {
  var hold = {};
  var holdArray = [target];
  console.log('length of hold array', holdArray.length);
  if(holdArray.length === 0 ) {
    Object.assign(target,source);
  }
  for (var start in source) {
    for (var end in target) {
      if (start !== end && source[start] !== target[end]) {
        var sendTo = source[start];
        hold[start] = sendTo;
      }
    }
  }
  for (var final in target) {
    var sendTo = target[final];
    hold[final] = sendTo;
  }
  Object.assign(target, hold);
}
