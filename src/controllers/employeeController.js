import employee from "../models/Employe.js";


 export const createEmp = async(req,res)=>{
    try{
        const {name,email,phone,gender,department,state,city,pincode,address,isPermanent} = req.body
        const profilePicture = req.file ? `src/uploads/profiles/${ req.file.filename }`:"";
        const Employee = await employee.create({profilePicture,name,email,phone,gender,department,state,city,pincode,address,isPermanent})
        if(!Employee){
            return res.status(404).json("Error getting while craeting employee")
        }
        else{
            return res.status(201).json({msg:"Employee Created Successfully",Employee})}
    }catch(error){
        return res.status(500).json({msg:error.message})
    }
}

export const getEmp = async (req,res)=>{
    try{
        const id = req.params.id   
        const Employees = await employee.findById(id)
        if(!Employees){
            return res.status(404).json("Error getting While fetching error")
        }
        else{
            return res.status(200).json({Msg:"Employee Fetched Successfully", Employees})
        }
    }catch (error){
        return res.status(500).json("Internal Server Error")
    }
}

export const allEmp = async (req,res)=>{
    try{   
        const empData = await employee.find().populate("department","name").populate("state","name").populate("city","name")
        if(empData.length === 0){
            return res.status(404).json("No employees Found")
        }
        else{
            return res.status(200).json({Msg:"Employee Fetched Successfully", empData})
        }
    }catch (error){
        return res.status(500).json("Internal Server Error")
    }
}

export const updateEmployee = async(req,res)=>{
    try{
        const {id} = req.params
        const updateEmp = await employee.findByIdAndUpdate(id,req.body,{new:true})
        return res.status(200).json({msg:"Employee Updated Successfully",updateEmp})
    }catch(error){
        return res.status(500).json("Internal Server Error")
    }
}

export const deleteEmp = async(req,res)=>{
    try{
        const {id} = req.params
        const deleteEmployee = await employee.findByIdAndDelete(id)
        return res.status(200).json("Employee Deleted Successfully")
    }catch(error){
        return res.status(500).json("Internal Server Error")
    }
}