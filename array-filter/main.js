const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];


function isEven(num){
  return num % 2 === 0;
}
const evenNumber = numbers.filter(isEven);
console.log('evenNumber',evenNumber);


function overFiveCount(num) {
  return num > 5;
}
const overFive = numbers.filter(overFiveCount);
console.log('overFive',overFive);

function startsWithEFunction(name) {
  return name[0] === 'E';
}
const startsWithE = names.filter(startsWithEFunction);
console.log('startsWithE',startsWithE);

function haveDFunction(name) {
  if(name.includes('d') || name.includes('D')) {
    return name;
  }
}
const haveD = names.filter(haveDFunction);
console.log('haveD',haveD);
