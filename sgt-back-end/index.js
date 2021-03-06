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
  values ($1,$2,$3)
  returning *
  `;
  values = [content.course, content.name, score]

  db.query(sql,values).then(result => {
    const returnRow = result.rows[0];
    res.status(201).json(returnRow);
  }).catch(err => {[
    res.status(500).json({'error': 'An internal server error occured'})
  ]})

})



app.put('/api/grades/:gradeId',(req,res)=>{
  const id = parseInt(req.params.gradeId,10);
  const updatedGrade = parseInt(req.body.score,10);
  const course = req.body.course;
  const name = req.body.name;

  if(!Number.isInteger(id) || id < 0) {
    res.status(400).json({'error': 'gradeId must be a positive integer'})
    return;
  }
  if(updatedGrade === undefined || !Number.isInteger(updatedGrade) || updatedGrade < 0) {
    res.status(400).json({'error': 'Please double check score input'})
  }

  const sql = `
  update "grades"
  set "score" = $1, "course" = $3, "name" = $4
  where "gradeId" = $2
  returning *
  `
  const values = [updatedGrade,id,course,name];

  db.query(sql,values).then(result => {
    const resultObject = result.rows[0];
    if(!result.rows) {
      res.status(404).json({'error': `Cannot find grade with "gradeId" ${id}`});
    } else {
      res.status(200).json(resultObject);
    }
  }).catch(err=>{
    res.status(500).json({ 'error': 'An internal server error occured'})
  })
})


app.delete('/api/grades/:gradeId',(req,res)=>{
  const id = parseInt(req.params.gradeId, 10);

  if(!Number.isInteger(id) || id <= 0) {
    res.status(400).json({'error': 'Please enter a valid gradeId'});
    return;
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
  const values = [id];

  db.query(sql,values).then(response=>{
    const responseArray = response.rows[0];
    if(!responseArray) {
      res.status(404).json({'error': `Could not find a grade with gradeId ${id}`});
    } else {
      res.status(204).json(responseArray);
    }
  }).catch(err => {
    res.status(500).json({ 'error': 'An internal server error occured'});
  })
})








app.listen(3000, () => {

});
