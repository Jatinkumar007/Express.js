require('dotenv').config();

const express= require('express');
const connectToDb=require('./config/db.js');
const cors=require('cors');
const app=express();

//init connection to db
connectToDb();

//Express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userRouters=require('./routes/userRoutes.js')
app.use('/',userRouters)


module.exports= app;