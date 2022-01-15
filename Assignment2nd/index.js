const express = require('express');
const app = express();

app.use('/users', (req, res, next)=>{
  //send response
  console.log("Users MiddleWare")
  res.send("<h1>Hello from Users</h1>")
});

app.use('/', (req, res, next)=>{
  //send response
  console.log("Root")
  res.send("<h1>Hello from Express</h1>")
});

app.listen(5000)