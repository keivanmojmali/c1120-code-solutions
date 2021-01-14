const express = require('express');
const app = new express();
const pg = require('pg');
const expressJson = express.json();
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
app.use(expressJson);


app.get('/api/grades',(req,res)=>{
const sql = `
select *
from "grades"
`;

db.query(sql).then(result=>{
  const gradesArray = result.rows;
  res.status(200).json(gradesArray);
}).catch(err => {
  res.status(500).json({'error': 'something went wrong'});
})
})


app.post('/api/grades',(req,res)=>{
  const content = req.body;
  const score = parseInt(content.score);

  if (content.course === undefined || content.name == undefined || Number.isInteger(score) === false) {
      res.status(400).json({'error': 'Please double check input values'});
    }
  const sql = `
  insert into "grades" ("course","name","score")
  values ('${content.course}','${content.name}','${score}')
  returning *
  `;

  db.query(sql).then(result => {
    const returnRow = result.rows[0];
    res.status(201).json(returnRow);
  }).catch(err => {[
    res.status(500).json({'error': 'something went wrong'})
  ]})

})



app.put('/api/grades/:gradeId',(res,req)=>{



})




app.listen(3000, () =>
console.log('Live!'));
