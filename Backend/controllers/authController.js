const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//-------------------------------------------------------------
//-------------------------------------------------------------
// User registration logic
const registerUser = async(req, res) => {
    try{
        const{
            username,
            email,
            password,
            location,
            bio,
            interests,
        } = req.body;

        //check required fields
        if(!username || !email || !password || !location){
          return res.status(400).json({
            message : "Please fill all required fields",
          });
        }

        //check if username already exists
        const existingUsername = await User.findOne({username});

        if(existingUsername){
            return res.status(400).json({
                message: "Username already exists",
            });
        }

        //check if email already exists
        const existingEmail = await User.findOne({email});

        if(existingEmail){
            return res.status(400).json({
                message : "Email already exists",
            });
        }

        //----------HASH PASSWORD---------
        const hashedPass = await bcrypt.hash(password, 10);

        //create user
        const user = await User.create({
            username,
            email,
            password : hashedPass,
            location,
            bio,
            interests,
        });

        res.status(201).json({
            message: "Resgistration successful",
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                location: user.location,
                bio: user.bio,
                interests: user.interests,
            },
        });
    }
    catch(err){
        console.error(err);

        res.status(500).json({
            message: "Server error",
        });
    }
};



//-------------------------------------------------------------
//-------------------------------------------------------------
// User login logic

const loginUser = async(req, res) => {
    try{
        const{username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({
                message: "Username and password are required",
            });
        }

        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({
                message: "Invalid username or password",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordCorrect){
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const token = jwt.sign(
            {
                userId : user._id,
                username: user.username,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                location: user.location,
                bio: user.bio,
                interests: user.interests,
            },
        });
    }catch(err){
        console.error(err);

        res.status(500).json({
            message: "Server error",
        });
    }
};

module.exports = {registerUser, loginUser};