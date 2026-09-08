const express = require("express");

const {registerUser, loginUser, getCurrentUser} = require("../controllers/authController");

const protect = require("../middleware/authMiddleWare");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

//check if the user is still authenticated
router.get("/me", protect, getCurrentUser);

module.exports = router;