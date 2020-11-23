function countdown(number) {
  var numArray = [];
  currentNumber = number;
  while(currentNumber >=0) {
    numArray.push(currentNumber);
    currentNumber --;
  }
  return numArray;
}
