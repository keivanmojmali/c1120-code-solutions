const fs = require('fs');
const note = process.argv[2];

fs.writeFile('note.txt',note,'utf-8', (err) => {
  if(err) throw err;
})
