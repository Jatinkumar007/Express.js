const mongoose=require('mongoose');
const connectToDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to DB: ${mongoose.connection.host}`);
    } catch (error) {
        console.log('Error connecting to MongoDB:',error.message)
    }
}
module.exports=connectToDb;