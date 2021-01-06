const fs = require('fs');
let data = require('./data.json');
const updateKey = process.argv[3];
const updateValue = process.argv[4];


function update() {
for(let i in data.notes) {
  if(i === updateKey){
    data.notes[i] = updateValue;
  }
}


const dString = JSON.stringify(data,null,2);

fs.writeFile('./data.json',dString, (err) => {
  if(err) throw err;
})

}

module.exports = update;
