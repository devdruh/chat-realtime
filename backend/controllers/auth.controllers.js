import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"})
        }

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({error: "Username already exists"})
        }
        
        const profilePicBoy = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const profilePicGirl = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePic: gender === 'male' ? profilePicBoy : profilePicGirl
        })
        
        if (newUser) {
            
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.userName,
                profilePic: newUser.profilePic
            });

        } else {
            res.status(400).json({ error: "Invalid user data" });
        }



    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    console.log("login")

    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login Controller");
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logout = async (req, res) => {

    console.log("logout")

    try {

        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Successfully logout!" });
        
    } catch (error) {
        console.log("Error in logout Controller");
        res.status(500).json({ error: "Internal Server Error" })
        
    }
}