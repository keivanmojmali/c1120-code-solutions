function convertMinutesToSeconds(minutes) {
    var convertedToSeconds = minutes * 60;
    return convertedToSeconds;
}

console.log('Output of minutes converted to seconds: '+ convertMinutesToSeconds(5));

function greet(name) {
  var greeting = "Hey, " + name;
  return greeting;
}

console.log('Output of greet: '+greet('Beavis'));

function getArea(width,heigth) {
  var heigthofRectangle = width * heigth;
  return heigthofRectangle;
}

console.log('Output of getArea: '+getArea(17,42));


var person = {
  firstName:undefined,
  lastName:undefined,
}

function getFirstName(person) {
    return person.firstName;
}

console.log('Output of getFirstName: '+getFirstName({firstName:'Lelouche', lastName:'Lampourage'}));

var array = [];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('Output of getLastElement: '+getLastElement(['propane','and','propane','accessories']));
