import * as React from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  DotIcon,
  Zap,
} from "lucide-react";

export default function Login() {
  return (
    <div className="bg-[#080a11] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] text-white py-20 min-h-screen">
    <div className="flex items-center justify-center">
      <div className="w-[300px] p-6 rounded-2xl bg-[#0f172a] border-1 border-t-orange-500 border-l-orange-400 border-b-blue-500 border-r-blue-400 shadow-xl">
        <div className="flex items-center gap-1 justify-center mb-0 text-[14px] ">
          <div className="bg-orange-500 p-2 rounded-lg">
            <Zap className="text-white fill-amber-50 w-3 h-3" />
          </div>
          <h1 className="text-l font-bold ">
            TRIBE<span className="text-orange-500">LINK</span>
          </h1>
        </div>
        <h1 className="mt-0 text-lg font-bold text-center text-white">
          {" "}
          Welcome Back{" "}
        </h1>
        <p className="font-medium text-[10px] whitespace-nowrap text-gray-500 text-center ">
          Sign in to find your tribe and dominate together
        </p>
        <div>
          <div className="mt-3">
            <label className="font-semibold text-[8px] text-gray-400">
              USERNAME
            </label>
            <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
              <User className="text-gray-500 mr-2" size={12} />
              <input
                type="text"
                placeholder="Your username"
                className="w-full bg-transparent py-2 outline-none text-[10px]"
              />
            </div>
          </div>
          <div>
            <label className="font-semibold text-gray-400 text-[8px]">
              PASSWORD
            </label>
            <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
              <Lock className="text-gray-500 mr-2" size={13} />
              <input
                type="password"
                placeholder="Your password"
                className="w-full bg-transparent py-2 outline-none text-[10px]"
              />
              <Eye className="text-gray-500 mr-2 cursor-pointer" size={13} />
              <EyeOff className="text-gray-500 mr-2 cursor-pointer" size={13} />
            </div>
          </div>
          <button className=" w-full text-[8px] cursor-pointer bg-orange-500 hover:bg-orange-600  text-white font-bold py-2.5 px-4 rounded-md mt-4">
            <a href="#"> SIGN IN </a>
            <ArrowRight className="inline-block  ml-1" size={12} />
          </button>
          <div className=" text-[10px] text-gray-400 mt-4 ">
            <p>
              {" "}
              <DotIcon
                className="inline-block  text-orange-500 mr-0"
                size={25}
              />
              Connect with players near you
            </p>
            <p>
              {" "}
              <DotIcon
                className="inline-block text-purple-500 mr-0"
                size={25}
              />
              Climb the leaderboard
            </p>
          </div>
          <div className="text-center mt-4 text-[10px] text-gray-500">
            New to TribeLink?{" "}
            <a href="#" className="text-orange-500 font-bold hover:underline">
              Create an Account
            </a>
          </div>
        </div>
      </div>
</div>
    </div>
  );
}
