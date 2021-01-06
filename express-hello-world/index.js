const express = require('express');
const app = express();

app.use((req,res) => {

  res.send('This is a string');
})



app.listen(3000, () => {

})
