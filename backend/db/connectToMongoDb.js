import mongoose from "mongoose";
const connectToMongoDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_db_URI)
        console.log("Connected to Db")
        
    } catch (error) {
        console.log("Trying to connect to db " , error)
        
    }
}

export default connectToMongoDb