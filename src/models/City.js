import mongoose, { Mongoose } from "mongoose";

const CitySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"State",
        required:true
    }
},{
    timestamps:true
})

const City = mongoose.model("City",CitySchema)
export default City;