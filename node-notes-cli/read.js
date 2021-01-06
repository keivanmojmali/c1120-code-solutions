const fs = require('fs');
const data = require('./data.json');

function read() {
for(let i in data.notes) {
  console.log(`${i}: ${data.notes[i]}`);
}
}

module.exports = read;
