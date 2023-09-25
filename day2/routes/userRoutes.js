const express=require('express');
const {home,Register,Login}=require('../controllers/userController.js');
const route=express.Router();
//route.get('/',home)
route.post('/register',Register)
route.post('/login',Login)
module.exports=route;

