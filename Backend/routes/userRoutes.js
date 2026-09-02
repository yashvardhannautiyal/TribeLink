const express = require("express");
const router = express.Router();
const User = require("../models/User");

//GET all users
router.get("/", async(req, res) => {
    try{
        const users = await User.find();

        res.status(200).json({
            success : true,
            users,
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            error: err.message,
        });
    }
});

module.exports = router;