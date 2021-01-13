const express = require('express');
const app = new express();
const pg = require('pg');
const expressJson = express.json();
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
app.use(expressJson);


app.get('/api/grades',(req,res,next)=>{
const sql = `
select *
from "grades"
`;

db.query(sql).then(result=>{
  const gradesArray = result.rows;
  res.status(200).json(gradesArray);
}).catch(err => {
  res.sendStatus(500);
})
})











app.listen(3000, () =>
console.log('Live!'));
