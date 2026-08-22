const mongoose = require("mongoose");
const dns = require("dns");

//force node.js to use google dns
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("MongoDb connected");
    } catch(err){
        console.error("MongoDb connection failed : ", err.message);
        process.exit(1);
    }
}

module.exports = connectDb;