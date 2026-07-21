import jwt from "jsonwebtoken"

export const authMiddleware = (req,res,next)=>{
    try{
        const Authheader = req.headers.authorization 
        if(!Authheader){
            return res.status(400).json("Header Missing")
        }
        if(!Authheader.startswith("Bearer ")){
            return res.status(400).json("Format is Invalid ")
        }
        const token = Authheader.split(" ")[1];
        if(!token){
            return res.status(401).json("token missing")
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user = decode
        next()
    }catch (error) {
        return res.status(500).json({msg : error.message})

    }
}
export default authMiddleware