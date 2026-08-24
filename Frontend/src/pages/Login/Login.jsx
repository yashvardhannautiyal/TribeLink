import React, {useState} from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // login function 
  const handleLogin = async (e) =>{
    e.preventDefault();

    try{
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method : "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if(!response.ok){
        setError(data.message);
        return;
      }

      // save JWT token 
      localStorage.setItem("token", data.token);

      // save user information
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      console.log("Login successful : ", data);
      alert("Login successful");

      //later navigate to home page - "/home"
    }catch(err){
      console.error("Login error : ", err);
      setError("Login : Something went wrong. Please try again.")
    }
  }
  return (
    // main-component-container : bg, flex-loginbox - center
    <div className="bg-[#080a11] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] text-white py-20 min-h-screen flex items-center justify-center">   

        {/* login-container : box, contents  */}
        <div className="w-sm px-10 py-10 rounded-2xl bg-[#101829bd] border border-t-orange-500 border-l-orange-400 border-b-blue-500 border-r-blue-400">
          {/* logo  */}
          <div className="flex items-center gap-1 justify-center mb-0 text-xl ">
            <div className="bg-orange-500 px-2 py-2 rounded-lg">
              <Zap className="text-white fill-amber-50 w-2 h-2" />
            </div>
            <h1 className="text-2xl font-bold ">
              TRIBE<span className="text-orange-500">LINK</span>
            </h1>
          </div>
          {/* logo text  */}
          <div className="text-center py-3">
          <h1 className="text-lg font-bold text-white">
            Welcome Back
          </h1>
          <p className="font-medium text-sm  text-gray-500 ">
            Login with your tribe and dominate together
          </p>
          </div>

          {/* form  */}
          <form onSubmit={handleLogin}>
            {/* username  */}
            <div>
              <label className="font-semibold text-xs text-gray-400">
                USERNAME
              </label>
              <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
                <User className="text-gray-500 mr-2" size={12} />
                <input
                  type="text"
                  placeholder="Your username"
                  className="w-full bg-transparent py-2 outline-none text-xs"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* password  */}
            <div>
              <label className="font-semibold text-gray-400 text-xs">
                PASSWORD
              </label>
              <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
                <Lock className="text-gray-500 mr-2" size={13} />
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full bg-transparent py-2 outline-none text-xs"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Eye className="text-gray-500 mr-2 cursor-pointer" size={13} />
                <EyeOff
                  className="text-gray-500 mr-2 cursor-pointer"
                  size={13}
                />
              </div>
            </div>

            {/* display error  */}
            {error && (
              <p className="text-red-500 text-sm mt-3">{error}</p>
            )}
            {/* button  */}
            <button className=" w-full text-xs cursor-pointer bg-orange-500 hover:bg-orange-600  text-white font-bold py-2.5 px-4 rounded-md mt-4">
              SIGN IN
              <ArrowRight className="inline-block  ml-1" size={12} />
            </button>
            <div className="text-center mt-4 text-xs text-gray-500">
              New to TribeLink?{" "}
              <a href="#" className="text-orange-500 font-bold hover:underline">
                Create an Account
              </a>
            </div>
          </form>
        </div>
    </div>
  );
}
