const fs = require('fs');
const input = process.argv;

for(let i = 2; i < input.length; i++) {
  fs.readFile(input[i], 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
}
