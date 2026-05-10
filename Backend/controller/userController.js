import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';
import mongoose from "mongoose";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ 
        status: false,
        NotificationShow: true, 
        headline: "Registration failed",
        image:"/image/registraction_cross.webp" ,
        message: "User already exists, " });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Save user
    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();

    // Generate JWT token with userId
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      status: true,
      NotificationShow: true, 
      headline: "Registration successful",
      image: "/image/green right.gif",
      message: "You have been registered successfully!",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    // Find user by email
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ 
        status: false, 
        notificationShow: true,
        headline: "Login failed",
        image: "/image/registraction_cross.webp",
        message: "User not found" });
    }

    // Compare password with hash
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        status: false, 
        notificationShow: true,
        headline: "Login failed",
        image: "/image/registraction_cross.webp",
        message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1d' }
    );

    res.json({
      status: true,
      notificationShow: true,
      headline: "Login successful",
      image: "/image/green right.gif",
      message: "Login successful",
      token: token,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};