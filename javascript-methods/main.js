var one = 30;
var two = 40;
var three = 50;

var maximumValue = Math.max(one,two,three);

console.log('Value of maximumValue is: ',maximumValue);

var heroes = ['superman','batman','spiderman','groot'];

var randomNumber = Math.random();

var randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Value of random index: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Value of randomHero: ',randomHero);


var library = [
  {
    title:'In Search of Lost Time',
    author: 'Marcel Proust',
  } ,
  {
    title: 'Ulysses',
    author: 'James Joyce',
  },
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
  }
];

console.log(library);

var lastBook = library.pop()
console.log('Value of lastBook',lastBook);

var firstBook = library.shift();
console.log('Value of firstBook',firstBook);

var one = {
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel Garcia Marquez',
};

var warPeace = {
  title:'War and Peace',
  author:'Leo Tolstoy',
};

library.push(one);
library.unshift(warPeace);
library.splice(1,1);
console.log('value of final array: ',library);

var fullName = 'Keivan Mojmali';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName',firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName: ',sayMyName);
