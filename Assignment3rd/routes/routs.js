const express = require('express');
const path = require('path');
const router = express.Router()

router.use('/users', (req, res)=>{
  //send response
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
});

router.get('/', (req, res)=>{
  //send response
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
});

module.exports = router