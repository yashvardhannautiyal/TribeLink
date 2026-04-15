import * as React from "react";

export default function Forms(){
    return(
<div className="bg-gray-900">
   <h1 className="text text-3xl font-semibold text-white"> Welcome Back </h1>
   <p className="font-medium text-gray-500">Sign in to find your tribe and dominate together</p>
   <div>
    <div className="mt-3">
        <label className="font-semibold text-gray-400">USERNAME</label>
        <div>
            <input className="w-full border-2  border-gray-100 rounded-xl mt-1 bg-black" placeholder="Your Username" ></input>
        </div>
    </div>
    <div>
        <label className="font-semibold text-gray-400">PASSWORD</label>
        <div>
            <input className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-black" placeholder="Your Password" type="password"></input>
        </div>
    </div>
    <button>Sign in</button>
   </div>
</div>
    )
    
}