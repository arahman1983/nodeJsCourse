const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/routs');

app.use(router)
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res)=>{
  //send response
  res.status(400).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(5000)