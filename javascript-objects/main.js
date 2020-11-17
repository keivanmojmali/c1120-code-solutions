/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Keivan',
  lastName: 'Mojmali',
  age: 28
}

var fullName = student.firstName + " " + student.lastName;

console.log('value of fullName: ',fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Loan Officer';

console.log('value of livesInIrvine',student.livesInIrvine);
console.log('value of previousOccupation',student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Jeep',
  model: 'Wrangler',
  year: 2016
}

vehicle['color'] = 'Black';
vehicle["isConvertible"] = true;

console.log('value of color property: ',vehicle['color']);
console.log('value of isConverticle: ',vehicle['isConvertible']);

console.log('value of vehicle', vehicle);

var pet = {
  name: 'wolf',
  type: 'unknown'
}

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
