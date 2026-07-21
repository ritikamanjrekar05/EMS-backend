import State from "../models/State.js"

export const createState = async(req,res) => {
try{
    const {name} = req.body
    const state = await State.create({name}) 
    if(!state){
        return res.status(404).json("State Not Found")
    }
    return res.status(201).json({msg:"State Created Successfully",state})
}catch(error){
    return res.status(500).json("Internal Server Error")
}
}

export const getState = async(req,res)=>{
    try{ 
        const states = await State.find()
        return res.status(200).json({msg:"State Fetched Successfully",states})
    }catch{
        return res.status(500).json("Internal server error")
    }
}

