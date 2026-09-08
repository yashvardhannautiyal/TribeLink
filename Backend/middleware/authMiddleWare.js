const jwt = require("jsonwebtoken");



//WORKING

//Frontend - sends a request   | Authorization: Bearer YOUR_TOKEN

//Middleware - Get token -> check token -> verify JWT_SECRET -> Check expiration -> token valid : yes(continue)  no(return 401)
const protect = (req, res, next) =>{
    try{
        const authHeader = req.headers.authorization;

        //check if token exists
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        //extract token
        const token = authHeader.split(" ")[1];

        //verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        //save decoded user information
        req.user = decoded;

        next();

    }catch(err){
        return res.status(401).json({
            message : "Invalid or expired token",
        });
    }
};


module.exports = protect;