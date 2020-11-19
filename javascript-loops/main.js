/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

 function getNumbersToTen() {
   numbers = [];
   currentNumber = 1;
   while(currentNumber < 11) {
     numbers.push(currentNumber);
     currentNumber ++;
   }
   return numbers
}

function getEvenNumbersToTwenty() {
  evenNumbers = [];
  currentNumber = 2;
  while(currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber +=2;
    if(currentNumber > 20) {
    }
  }
  return evenNumbers;
}

function repeatWord(word,times) {
  count = 1;
  repeated = '';
  while(count < times) {
    repeated += word;
    count ++;
  }
  return repeated
}

function logEachCharacter(string) {
  stringLength = string.length
  for (i = 0; i < stringLength; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  doubled = [];
  length = numbers.length;
  for (i = 0;i < length; i ++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled
}

function getKeys(object) {
  keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  values = [];
  for(key in object) {
    values.push(object[key]);
  }
  return values
}
