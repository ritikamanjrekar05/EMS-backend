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

export const login = asyncHandler(async (req, res) => {
  try {
    console.log("LOGIN API HIT");

    const { email, password } = req.body;

    console.log("Email received:", email);

    const user = await User.findOne({ email }).maxTimeMS(5000);

    console.log("User found:", user ? "YES" : "NO");

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password checked");

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error.message);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});