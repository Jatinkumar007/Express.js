const express=require('express');
const PORT=4002;
const HOSTNAME='localhost';
let counter=1;
const app= express();

app.get('/', (req,res)=>{
    res.send({counter:counter})
})
app.get('/increment', (req,res)=>{
    counter++;
    res.json({counter:counter})
})
app.get('/decrement', (req,res)=>{
    counter--;
    res.json({counter:counter})
})

app.listen(PORT,()=>{
    console.log(`Sever is running on ${HOSTNAME}:${PORT}`);
})