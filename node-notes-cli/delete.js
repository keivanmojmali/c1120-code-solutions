const fs = require('fs');
const { formatWithOptions } = require('util');
let data = require('./data.json');
const whichDelete = process.argv[3];

for(let i in data.notes) {
  if(i === whichDelete) {
    delete data.notes[i];
  }
}

const dString = JSON.stringify(data,null,2);

fs.writeFile('./data.json',dString, (err) => {
  if(err) throw err;
})
