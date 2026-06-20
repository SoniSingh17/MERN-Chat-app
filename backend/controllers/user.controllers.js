import userModel from "../models/user.model.js";

export const getUser = async (req , res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filterUser = await userModel.find({_id : {$ne  : loggedInUserId }}).select("-password")
        res.status(200).json(filterUser);


        
    } catch (error) {
        console.log("Error in getUser controller" , error.message);
        res.status(500).json({error : "Internal server Error ..."})
        
        
    }
    
}