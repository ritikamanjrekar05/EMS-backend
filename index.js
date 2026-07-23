import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4']);
dns.setDefaultResultOrder("ipv4first")

import express from "express"
import "./src/config/db.js"
import dotenv from "dotenv"
import authRouter from "./src/routes/auth.router.js"
import deptRouter from "./src/routes/department.router.js"
import stateRout from "./src/routes/State.router.js"
import cityRout from "./src/routes/city.router.js"
import empRout from "./src/routes/employee.router.js"
import cors from "cors"
import errorHandler from "./src/middleware/errorHandler.js"
import {rateLimit} from "express-rate-limit"



const app = express()
dotenv.config


const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  limit: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: 'draft-7', // Return standard rate limit info headers
  legacyHeaders: false, // Disable the X-Rate-Limit headers
});



app.use(express.json())
const PORT = process.env.PORT || 5000
app.use(cors())


app.use("/api/auth",authRouter)
app.use("/api/dept",deptRouter)
app.use("/api/state",stateRout)
app.use("/api/city",cityRout)

app.use("/uploads",express.static("src/uploads"))
app.use("/api/emp",empRout)
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`server is successfully running on http://localhost:${PORT}`)
})