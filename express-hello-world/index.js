const express = require('express');
const app = express();

app.use((req,res) => {
  console.log('method property of the req object', req.method);
  res.send('This is a string');
})



app.listen(3000, () => {
  console.log('server is listening on port 3000');
})
