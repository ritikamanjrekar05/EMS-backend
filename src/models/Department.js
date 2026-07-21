import mongoose, { Mongoose } from "mongoose";

const DepartmentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps:true
})

const Department = mongoose.model("Department",DepartmentSchema)
export default Department;