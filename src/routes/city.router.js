import express from "express"
import { createCity, getCity, getCityByState } from "../controllers/cityController.js"
const cityRout = express.Router()

cityRout.post("/createcity",createCity)
cityRout.get("/getcity",getCity)
cityRout.get("/state/:stateId",getCityByState)
export default cityRout