import Department from "../models/Department.js";

export const createDepartment = async(req,res)=>{
    try{
        const {name}=req.body
        const existDepartment = await Department.findOne({name})
        if(existDepartment){
            return res.status(400).json({msg:"Department already exists"})
        }
        const department = await Department.create({name})
        return res.status(201).json({
            message:'Department created Successfully',
            department
        })
    }catch (error){
        return res.status(500).json({message :error.message})
    }
}

export const getDepartments = async (req,res)=>{
    try{
        const department = await Department.find()
        return res.status(200).json({msg:"Department fetched Sucessfully",department})
    }catch (error){
        return res.status(500).json("Interval server error")
    }
}