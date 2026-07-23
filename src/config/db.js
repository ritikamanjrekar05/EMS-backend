import dns from "node:dns"
dns.setServers(["8.8.8.8","8.8.4.4"])
dns.setDefaultResultOrder("ipv4first")

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
