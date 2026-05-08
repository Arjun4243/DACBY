import userModel from "../model/userModel.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoeken"
import dotenv from "dotenv/config"


export const registerUser=async(req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);

        const user=new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await user.save()

        res.json({
            status:true,
            message:"User registered successfully"
        })
    }

    catch(error){
        console.log(error);
        res.status(500),
        res.json({error:error.message})
    }

}


export const loginUser=async(req,res)=>{

}

