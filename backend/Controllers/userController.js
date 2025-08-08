import userModel from "../Models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//Login User
export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({email});

        //if user doesn't exists
        if(!user) {
            return res.json({success: false, message: "User doesn't exist"})
        }

        // matching user password with given password
        const isMatch = await bcrypt.compare(password, user.password);

        //if not match
        if(!isMatch) {
            return res.json({success: false, message: "Invalid Password"})
        }

        const token = createToken(user._id);
        res.json({success: true, token})

    } catch (err) {
        console.log(err);
        res.json({success: false, message: "Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.Jwt_SECRET)
}

// Register User
export const registerUser = async (req, res) => {
    const {fullname, email, password} = req.body;

    try {
        //checking is User already exists?
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success: false, message: "User already exists"})
        }

        //Validating email format & Strong password
        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
        }

        if(password.length < 8) {
            return res.json({success: false, message: "Please enter a Strong Password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //New user
        const newUser = new userModel({
            fullname: fullname,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({success: true, token})


    } catch (err) {
        console.log(err);
        res.json({success: false, message: "Error"})
    }
}