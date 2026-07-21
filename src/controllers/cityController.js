import City from "../models/City.js"

export const createCity = async(req,res) => {
try{
    const {name , state} = req.body
    const create = await City.create({name , state}) 
    if(!create){
        return res.status(404).json("error while creating city")
    }
    return res.status(201).json({msg:"City Created Successfully",create})
}catch(error){
    return res.status(500).json("Internal Server Error")
}
}

export const getCity = async(req,res)=>{
    try{
        const cities = await City.find().populate("state")
        return res.status(200).json({msg:"City Fetched Successfully",cities})
    }catch{
        return res.status(500).json("Internal server error")
    }
}

export const getCityByState = async(req,res)=>{
    try {
        const {stateId}=req.params
        const citiesby = await City.find({state:stateId});
        return res.status(200).json({citiesby})
    } catch (error) {
        return console.log(error)
    }
}