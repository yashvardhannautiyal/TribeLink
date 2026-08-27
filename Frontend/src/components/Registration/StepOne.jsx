import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  DotIcon,
  Zap,
  MapPinned,
  CircleUserRound
} from "lucide-react";

function StepOne({ formData, setFormData, onNext }) {
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    location: "",
    password: "",
  });

  //---------------function() - hanle change of data and error
  const handleChange = (e) => {
    const { name, value } = e.target;

    //sets form data for particular input field
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    //remove error when user corrects the field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  //---------------function() - validation
  const validateForm = () => {
    const newErrors = {
      username: "",
      email: "",
      location: "",
      password: "",
    };

    // username
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required.";
    } else if (formData.username.trim().length < 5) {
      newErrors.username = "Username must be at least 5 characters.";
    }

    // email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    //location
    if (formData.location.trim() === "") {
      newErrors.location = "Location is required.";
    }

    // password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    //pass the above errors to setErrors
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");

    return !hasErrors;
  };

  //---------------function() - handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    onNext();
  };

  return (
    // main-component-container
    <div className="flex justify-center pt-3">
      <div className="w-md px-8 py-3 rounded-2xl bg-[#101829bd] border border-t-orange-500 border-l-orange-400 border-b-blue-500 border-r-blue-400">
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
        <div className="text-center py-1">
          <h1 className="text-lg font-bold text-white">Create Account</h1>
          <p className="font-medium text-sm  text-gray-500">
            Tell the tribe who you are.
          </p>
        </div>

        <div>
          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={handleSubmit}>
            {/* username  */}
            <div>
              <label
                htmlFor="username"
                className="font-semibold text-xs text-gray-400"
              >
                USERNAME
              </label>
              <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
                <User className="text-gray-500 mr-2" size={12} />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 outline-none text-xs"
                />
              </div>
            </div>
            {/* email  */}
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-gray-400 text-xs"
              >
                EMAIL
              </label>
              <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
                <Lock className="text-gray-500 mr-2" size={13} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourmail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 outline-none text-xs"
                />
              </div>
            </div>
            {/* location  */}
            <div>
              <label
                htmlFor="location"
                className="font-semibold text-gray-400 text-xs"
              >
                LOCATION
              </label>
              <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
                <MapPinned className="text-gray-500 mr-2" size={14} />
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="city"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 outline-none text-xs"
                />
              </div>
            </div>

            {/* password  */}
            <div>
              <label
                htmlFor="password"
                className="font-semibold text-gray-400 text-xs"
              >
                PASSWORD
              </label>
              <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
                <Lock className="text-gray-500 mr-2" size={13} />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 outline-none text-xs"
                />
                <Eye className="text-gray-500 mr-2 cursor-pointer" size={13} />
                <EyeOff
                  className="text-gray-500 mr-2 cursor-pointer"
                  size={13}
                />
              </div>
            </div>

            {/* bio  */}
            <div>
              <label
                htmlFor="bio"
                className="font-semibold text-gray-400 text-xs"
              >
                BIO
              </label>
              <div className="mt-1 flex items-center bg-black border border-gray-700 rounded-xl px-2 ">
                <CircleUserRound
                  className="text-gray-500 mr-2 cursor-pointer"
                  size={14}
                />
                <input
                type="text"
                  name="bio"
                  id="bio"
                  placeholder="Tell us something about yourself"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 outline-none   text-xs"
                />
              </div>
            </div>

            {/* button  */}
            <button className="w-full text-xs cursor-pointer bg-orange-500 hover:bg-orange-600  text-white font-bold py-2.5 px-4 rounded-md mt-4">
              Continue 
              <ArrowRight className="inline-block  ml-1" size={12} />
            </button>

            <div className="flex gap-5 text-xs text-gray-400 mt-4 ">
              <p>
                <DotIcon
                  className="inline-block  text-orange-500"
                  size={20}
                />
                Connect with players near you
              </p>
              <p>
                <DotIcon
                  className="inline-block text-blue-500"
                  size={20}
                />
                Climb the leaderboard
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
