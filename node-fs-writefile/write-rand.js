const fs = require('fs');
const data = Math.random();

fs.writeFile('random.txt',data,'utf-8',(err) => {
  if(err) throw err;
});
