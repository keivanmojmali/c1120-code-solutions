const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];


function doubleIt(number) {
  return number * 2;
}
const doubled = numbers.map(doubleIt);
console.log('doubled',doubled);

function fullPrice(number) {
  return `${number}.00`;
}
const prices = numbers.map(fullPrice);
console.log('prices',prices);

function toUpperCase(word) {
  return word.toUpperCase();
}
const upperCase = languages.map(toUpperCase);
console.log('upperCase',upperCase);

function firstLetterFunction(word) {
  return word[0];
}
const firstLetters = languages.map(firstLetterFunction);
console.log('firstLetters',firstLetters);
