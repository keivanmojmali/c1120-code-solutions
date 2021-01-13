const takeAChance = require('./take-a-chance');

const myChance = takeAChance('Keivan');

myChance.then((message)=>{
  console.log(message);
});

myChance.catch((error)=>{
  console.log(error.message);
})
