const express = require('express');
const app=express();
const PORT=4003;
const HOSTNAME='localhost';

app.get('/',(req,res)=>{
    res.send('I am homepage')
})
app.get('/about',(req,res)=>{
    res.send('I am about page')
})
app.get('/contact',(req,res)=>{
    res.send(`suppor#@pwskills.com`)
})
app.listen(PORT,()=>{
    console.log(`Server is running on ${HOSTNAME}:${PORT}`);
})