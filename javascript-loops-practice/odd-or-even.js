/* exported oddOrEven */
function oddOrEven(numbers) {
  var newNum = [];
  for(i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      newNum.push('even')
    } else {
      newNum.push('odd');
    }
  } return newNum;
}
