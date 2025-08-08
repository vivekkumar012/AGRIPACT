import userModel from "../Models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        //if user doesn't exists
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }

        // matching user password with given password
        const isMatch = await bcrypt.compare(password, user.password);

        //if not match
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);

        res.json({
            message: "User Successfully Login",
            token,
            success: true
        })

    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" })
    }
}

// Register User
export const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        //checking is User already exists?
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        //hashing user password
        const hashedPassword = await bcrypt.hash(password, 10);

        //New user
        const newUser = new userModel({
            fullname: fullname,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({ success: true, token })


    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" })
    }
}

export const logout = async (req, res) => {
    try {
        await clearCookie();
        res.json({
            message: "User Successfully Logout",
            success: true
        })
    } catch (error) {
        res.json({
            message: "Error in user Logout",
            error: error.message
        })
    }
}