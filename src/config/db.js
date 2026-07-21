import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const URI = process.env.MONGO_URI
mongoose.connect(URI)
.then(()=>{
    console.log("Mongodb Connected Successfully")
})
.catch((err)=>{
    console.log("error is getting",err)
})
