import mongoose, { Mongoose } from "mongoose";


const employeeSchema = mongoose.Schema({
    profilePicture:{
        type:String,
        default:""
    },
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
        match:[/^\+[1-9]\d{1,14}$/]
    },
    gender:{
        type:String,
        enum:['Male',"Female","Other"]
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department",
        required:true
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"State",
        required:true
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"City",
        required:true
    },
    pincode:{
        type:String,
        match:[/^[1-9][0-9]{5}$/]
    },
    address:{
        type:String,
        trim:true
    },
    isPermanent:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const employee = mongoose.model("employee",employeeSchema)
export default employee;