const fs = require('fs');
let data = require('./data.json');
let userData = data;

let copyTo = process.argv[3];
data.notes[data.nextId] = copyTo;
data.nextId++;

const dString = JSON.stringify(data,null,2);

fs.writeFile('./data.json',dString,(err) => {
  if(err) throw err;
});
