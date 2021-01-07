const fs = require('fs');
const input = process.argv;

fs.readFile(input[2],'utf-8', (err,data) => {
  if(err) throw err;
  fs.writeFile(input[3], data, 'utf-8', (err) => {
    if (err) throw err;
  });
});
