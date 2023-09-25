// exports.home=(req,res)=>{
//     res.send('Check')
// }

const User= require('../models/usersModel.js');

exports.Register=async(req,res)=>{
    try {
        const {name,email,password}= req.body
        if(!name || !email || !password){
            throw new Error('all input field are required')
        }
        const userExist=await User.findOne({email})
        if(userExist){
            throw new Error('User already Registerd')
        }
        const user=await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            success: true,
            message: "User Registered Successfully",user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.Login=async(req,res)=>{
    try {
        const {email,password}= req.body
        if(!email || !password){
            throw new Error('all input field are required')
        }
        const userExist = await User.findOne({ email });

        if (!userExist) {
        return res.status(400).json({
        success: false,
        message: 'User is not registered. Please register first.',
        });
        }
        if (password===userExist.password) {
        res.status(200).json({
        success: true,
        message: 'User Login Successfully',
        user: userExist,
      });
    } else {
        res.status(401).json({
        success: false,
        message: 'Incorrect password. Please try again.',
      });
    }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}