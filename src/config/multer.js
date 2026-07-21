import multer from "multer";
import path from "path";
 const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "src/uploads/profiles")
    },
    filename: (req,file,cb)=>{
        const uniqueName= Date.now() + path.extname(file.originalname);
        cb(null, uniqueName)
    }
 });

const fileFilter = (req,file,cb)=>{
    const SupportFormat = /jpg|jpeg|png/
    const isValid = SupportFormat.test(path.extname(file.originalname).toLowerCase())
    && SupportFormat.test(file.mimetype);

    if(isValid){
        cb(null,true)
    }
    else{
        cb(new Error("Only Supports /jpg|jpeg|png/ formats"))
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize: 2*1024*1024
    }
})

export default upload;