import express from "express"
import { allEmp, createEmp, deleteEmp, getEmp, updateEmployee } from "../controllers/employeeController.js"
import upload from "../config/multer.js"

const empRout = express.Router()
 empRout.post("/createemp",upload.single("profilePicture"),createEmp)
 empRout.get("/empid/:id",getEmp)
 empRout.get("/allemp",allEmp)
 empRout.patch("/updateemp/:id",upload.single("profilePicture"),updateEmployee)
 empRout.delete("/deleteemp/:id",deleteEmp)
 
 
 export default empRout