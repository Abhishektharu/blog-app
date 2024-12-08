const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const {username, email, password, } = req.body;

        const existingUser = await User.findOne({ username });
        if(existingUser){
            return res.status(400).json({message: "User already exists. "});
        }

        //save the user;
        const user = new User({username, email, password});
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    res.status(200).json({ token, message: {message: "login success"}, user: { id: user._id, username: user.username, email: user.email } });
    return ;

    } catch (error) {
            res.status(500).json({ message: error.message });
    }
}

module.exports = {login, register}