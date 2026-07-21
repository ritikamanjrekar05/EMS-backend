import mongoose, { Mongoose } from "mongoose";

const StateSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps:true
})

const State = mongoose.model("State",StateSchema)
export default State;