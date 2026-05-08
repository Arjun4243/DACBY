import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({ status: false, message: "User already exists" });
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
    );

    res.json({
      status: true,
      message: "User registered successfully",
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    // Find user by email
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    // Compare password with hash
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.json({ status: false, message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
    );

    res.json({
      status: true,
      message: "Login successful",
      token: token,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};
