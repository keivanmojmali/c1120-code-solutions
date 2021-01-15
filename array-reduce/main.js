const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];


const reducerAdd = (accumulator, currentValue) => {
  return accumulator + currentValue;
}
const add = numbers.reduce(reducerAdd);
console.log('add',add);


const reducerMultiply = (accumulator,currentValue) => {
  return accumulator * currentValue;
}
const product = numbers.reduce(reducerMultiply);
console.log(product);


const reducerBalance = (accumulator,currentValue) => {

  if(currentValue.type === 'deposit'){
    return accumulator + currentValue.amount;
  } else {
    return accumulator - currentValue.amount;
  }

};
const balance = account.reduce(reducerBalance,0);
console.log(balance);

const reducerComposite = (accumulator,currentValue) => {
  return Object.assign(accumulator,currentValue);

}
const composite = traits.reduce(reducerComposite);
console.log(composite);
