const express = require('express');
const app = express();
const fs = require('fs');
const expressJson = express.json();
const data = require('./data.json');


app.use(expressJson);


app.get('/api/notes', (req, res) => {
  const holdArray = [];
  for(let key in data.notes) {
    holdArray.push(data.notes[key]);
  }
  if(data.notes.length < 1) {
    res.status(200).json([]);
  } else {
  res.status(200).json(holdArray);
  }
})


app.get('/api/notes/:id',(req,res) => {
  const id = parseInt(req.params.id);

  if(id < 0 || id === NaN || id === undefined) {
    res.status(400).json({"error": "id must be a positive integer"});
  } else if (id > 0 && id !== undefined) {
    let dataById = {};
    if(data.notes[id]) {
      dataById = data.notes[id];
      res.status(200).json(dataById);
    } else if(id > 0 && id !== undefined) {
      if(!(data.notes[id])) {
        res.status(404).json({'error': 'cannot find note with id ' + id});
      }
    }
  }


})




app.listen(3000, () => {
  console.log('we live!');
})