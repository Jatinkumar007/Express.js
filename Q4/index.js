const express = require('express');
const app= express();
const HOSTNAME= 'localhost';
const PORT = 4004;

app.get(`/random`,(req,res)=>{
      res.json({random:Math.ceil(Math.random()*100)})
})
app.listen(PORT,()=>{
    console.log(`Server is running on ${HOSTNAME}:${PORT}`)
})