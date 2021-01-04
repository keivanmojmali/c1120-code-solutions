const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const arg1 = parseInt(process.argv[2]);
const functionality = process.argv[3];
const arg2 = parseInt(process.argv[4]);


if(functionality === 'plus') {
  console.log('Result: ',add(arg1,arg2));
}

if(functionality === 'times') {
  console.log('Result: ',multiply(arg1,arg2));
}

if(functionality === 'over') {
  console.log('Result: ',divide(arg1,arg2));
}

if(functionality === 'minus') {
  console.log('Result: ',subtract(arg1,arg2));
}
