const { clear } = require('console');
const fs = require('fs');
const input = process.argv;
const hold = [];
let nextId = 0;



for(let i = 2; i < input.length; i++) {
  fs.readFile(input[i], 'utf-8', (err, data) => {
    if (err) throw err;
    const pushObj = {'id': nextId, 'content':input[i]};
    hold.push(pushObj);
    nextId++
  })
}

console.log(hold);
