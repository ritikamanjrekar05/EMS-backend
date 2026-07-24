import express from "express"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import asyncHandler from "../middleware/asyncHandler.js"

export const register = asyncHandler(async(req,res)=>{
     console.log("REGISTER START");
        const {name,email,password}= req.body
         console.log("Before bcrypt");
        const hashpassword = await bcrypt.hash(password,10)
        console.log("Before database");
        const users = await User.create({name,email,password:hashpassword})
        if(!users){
            return res.status(404).json("error getting in creating user ")
        }
        console.log("Database complete");
            return res.status(201).json({msg:"user created successfully", users})
    }
)

export const login = asyncHandler(async(req,res)=>{
        const {email,password}= req.body
        const users = await User.findOne({email})
        console.log("user Query complelte")
        if(!users){
            return res.status(404).json({ msg:"User not found"})
        }
         const isMatch = await bcrypt.compare(password, users.password)
        if(!isMatch){
            return res.status(401).json("authentication failed")
        }
        const token = jwt.sign({userId: users._id, email:users.email}, process.env.JWT_SECRET_KEY,{
            expiresIn:"7d",
        })
            return res.status(200).json({msg:"user login successfully", email:{email},token})
    }
)