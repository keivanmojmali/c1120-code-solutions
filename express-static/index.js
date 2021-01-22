const express = require('express');
const path = require('path');
const app = express();


const join = path.join(__dirname,'public');
const static = express.static(join)
app.use(static);


app.listen(3000, ()=> {

})
