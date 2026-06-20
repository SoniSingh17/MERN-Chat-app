import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const protectedRoute = async (req ,res , next)=>{
    try {
        const token = req.cookies.jwt;
        if (!token){
            return res.status(401).json({error : "Unautherized User ... Login First"})
        }
        const decorded = jwt.verify(token , process.env.JWT_TOKEN);
        if(!decorded){
            return res.status(401).json({error : "Invalid token"})
        }
        const user = await userModel.findById(decorded.userId).select("-password")
        if (!user){
            return res.status(404).json({error : "User not found"});
        }
        req.user = user;
        next()
    } catch (error) {
        console.log("Error in protectedRoute middleware " , error.message);
        res.status(500).json({error : " Internal Server Error "})
        
    }

}
export default protectedRoute