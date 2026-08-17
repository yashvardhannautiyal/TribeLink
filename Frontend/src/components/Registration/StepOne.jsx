import React, {useState} from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  DotIcon,
  Zap,
} from "lucide-react";


function StepOne({formData, setFormData, onNext}) {

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    location: "",
    password: "",
  });


  //---------------function() - hanle change of data and error
  const handleChange = (e) => {
    const {name, value} = e.target;

    //sets form data for particular input field
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    //remove error when user corrects the field
    setErrors((prev) => ({
      ...prev,
      [name] : "",
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
    if(formData.username.trim() === ""){
      newErrors.username = "Username is required.";
    } else if(formData.username.trim().length < 5){
      newErrors.username = "Username must be at least 5 characters.";
    }

    // email
    if(formData.email.trim() === ""){
      newErrors.email = "Email is required.";
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
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
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    //pass the above errors to setErrors
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(
      (err) => err !== ""
    );

    return !hasErrors;
  };


  //---------------function() - handle submit button
  const handleSubmit  = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if(!isValid){
      return;
    }

    onNext();
  }

  return (
    <div className="">
    <div className="border">
      <div>
        <h3>Create your TribeLink account</h3>
        <p>Tell the tribe who you are.</p>
      </div>

      <div>
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="@username"

              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourmail@gmail.com"

              value={formData.email}
             onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="city"

              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"

              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              placeholder="Tell us something about yourself"

              value={formData.bio}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Continue</button>

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
        </form>
      </div>
    </div>
    </div>
  );
}

export default StepOne;
