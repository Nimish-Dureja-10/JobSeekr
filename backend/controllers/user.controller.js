import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req,res) => {
    try{
        const {fullname,email,phoneNumber,password,role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                success:false,
                message: "All fields are required"
            });
        }
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({
                success:false,
                message:"User already exist with this email"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role,
        });

        return res.status(201).json({
            success:true,
            message:"Account created successfully",
        });
    }catch(error) {
        console.log(error);
    }
};

export const login = async (req,res) => {
    try {
        const {email,password,role} = req.body;
        if(!email || !password || !role) {
            return res.status(400).json({
                success:false,
                message: "All fields are required"
            });
        };
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({
                success:false,
                message:"Email not registered",
            });
        };
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            });
        };
        if(role !== user.role) {
            return res.status(400).json({
                success:false,
                message:"Account doesn't exists with this role",
            });
        };
        const tokenData = {
            userId : user._id
        };
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"3d"});
        
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).cookie("token",token,{maxAge:3*24*60*60*1000,httpsOnly:true,sameSite:'strict'})
        .json({success:true,user,message:`Welcome back ${user.fullname}`});
    }catch(error) {
        console.log(error);
    }
};

export const logout = async (req,res) => {
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            success:true,
            message:"Logged out successfully"
        });
    }catch(error) {
        console.log(error);
    }
};

export const updateProfile = async (req,res) => {
    try {
        const {fullname,email,phoneNumber,bio,skills} = req.body;
        const file = req.file;
        if(skills) {
            const skillsArray = skills.split(",");
        }
        // Will get using authentication middleware
        const userId = req.id;
        let user = await User.findById(userId);
        if(!user) {
            return res.status(400).json({
                success:false,
                message:"Need to login first"
            });
        }
        // Updating data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArray;

        await user.save();

        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).json({
            success:true,
            message:"Profile updated successfully",
            user
        });
    } catch (error) {
        console.log(error);
    }
};