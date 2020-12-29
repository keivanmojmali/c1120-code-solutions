/* exported defaults */

function defaults(target, source) {
  var hold = {};


  if (Object.keys(target).length === 0) {
    Object.assign(target, source);
  } else {

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
}
