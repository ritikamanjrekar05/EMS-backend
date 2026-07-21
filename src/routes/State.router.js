import express from "express"
import { createState, getState } from "../controllers/stateContoller.js"

const stateRout= express.Router()
stateRout.post("/createState",createState)
stateRout.get("/getState",getState)
export default stateRout