import express from "express"
import { createDepartment, getDepartments } from "../controllers/departementController.js"

const deptRouter= express.Router()
deptRouter.post("/create",createDepartment)
deptRouter.get("/get",getDepartments)

export default deptRouter