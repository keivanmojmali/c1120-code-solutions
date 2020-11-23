/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var shoe = string.split('');
  var hold = [];
  var one = firstIndex;
  var two = secondIndex;
  hold.push(shoe[firstIndex]);
  hold.push(shoe[secondIndex]);
  shoe.splice(one,1,hold[1]);
  shoe.splice(two, 1, hold[0]);

  return shoe.join('');


}
