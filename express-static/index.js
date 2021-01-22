const express = require('express');
const path = require('path');
const app = express();


const join = path.join(__dirname,'public');
const eStatic = express.static(join)
app.use(eStatic);


app.listen(3000, ()=> {

})
