/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
};

function isEven(number) {
  return number % 2 == 0;
};

function startsWithJ(string) {
  return string[0] == 'J';
};

function isOldEnoughToDrink(person) {
  return person.age > 21;
};

function isOldEnoughToDrive(person) {
  return person.age > 16;
};

function isOldEnoughToDrinkAndDrive(person) {
  return false;
};

function categorizeAcidity(pH) {
  if (pH == 7) {
    console.log('neutral');
  } else if(pH < 7) {
    console.log('acid');
  } else if ((pH > 7) && (pH < 14)) {
    console.log('base');
  } else {
    console.log('invalid pH level');
  }
};


function introduceWarnerBro(name) {
  if('yakko') {
    console.log("We're on the warner brothers!");
  } else if('wakko') {
    console.log("We're on the warner brothers!");
  } else if('dot') {
    console.log("I'm cute~");
  } else {
    console.log("Goodnight everybody!");
  }
};

var Keivan = {
  name:'Keivan Mojmali',
  age: 28,
};
