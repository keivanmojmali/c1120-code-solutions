const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const expressJson =  express.json();

app.use(expressJson);

app.get('/api/grades',(req,res) => {
  const gradesArray = [];
  for(let key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
})



app.post('/api/grades',(req,res) => {
  const newObj = req.body;
  grades[nextId] = newObj;
  grades[nextId].id = nextId;
  res.status(201).json(grades[nextId]);
  nextId++;

})

app.listen(3000, () => {
  console.log('we live');
})
