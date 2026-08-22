const bcrypt = require("bcryptjs");
const User = require("../models/User");

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

module.exports = {registerUser};