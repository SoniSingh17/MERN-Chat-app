import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await userModel.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }
    // password hashed
    const hashedPassword = await bcrypt.hash(password, 10);
    // diceBear---> For avatar
    const profilePic =
      gender === "male"
        ? `https://api.dicebear.com/10.x/adventurer/svg?seed=${username}`
        : `https://api.dicebear.com/10.x/lorelei/svg?seed=${username}`;
    const newUser = await userModel.create({
        fullName,
        username,
        password : hashedPassword,
        gender,
        profilePic
    })
    // Generate JWT Token...
    generateTokenAndSetCookie(newUser._id , res);
    res.status(201).json({
        _id : newUser._id,
        fullName : newUser.fullName,
        username : newUser.username,
        profilePic : newUser.profilePic,

    })
  } catch (error) {
    console.log("Error in signup auth route controller" , error.message);
    res.status(500).json({error : "Internal server Error"});
  }
};
export const login = async (req, res) => {
  try {
    const { username , password } = req.body;
    const user = await userModel.findOne({username});
    const ispasswordCorrect = await bcrypt.compare(password , user?.password || "");
    if (!ispasswordCorrect || !user){
      return res.status(400).json({error : "Invalid username or password"});

    }
    generateTokenAndSetCookie(user._id , res);
    res.status(200).json({
      _id : user._id,
      fullName : user.fullName,
      username : user.username ,
      profilePic : user.profilePic
    });



    
  } catch (error) {
    console.log("Error in Login auth route controller" , error.message);
    res.status(500).json({error : "Internal server Error"});
    
  }
 
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt" , ""   , {maxAge : 0});
    res.status(200).json({message : "Logged out successfully !"})

    
  } catch (error) {
    console.log("Error in Logout auth route controller" , error.message);
    res.status(500).json({error : "Internal server Error"});
    
  }
  
};
