const fs = require('fs');
const data = require('./data.json');


for(let i in data.notes) {
  console.log(`${i}: ${data.notes[i]}`);
}
