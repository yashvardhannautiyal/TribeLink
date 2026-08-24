import React, { useState } from "react";
import StepOne from "../../components/Registration/StepOne";
import StepTwo from "../../components/Registration/StepTwo";
import StepThree from "../../components/Registration/StepThree";
import ProgressBar from "../../components/Registration/ProgressBar";

function Register() {
  const [currStep, setCurrStep] = useState(1);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    bio: "",
    interests: [],
  });

  const nextStep = () => {
    setCurrStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrStep((prev) => prev - 1);
  };
  

//-------------------------------------------------------------
//-------------------------------------------------------------
  //send data to express backend
  //async function sends formData to /api/auth/register
  const handleRegister = async() => {
    try{
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }

      console.log("Resgistration successful: ", data);
      alert("Resgistration successful!");
    }catch(err){
      console.log("Registration error : ", err);
      alert("Something went wrong. Please try again.");
    }

  };

  return (
    
    <div className="bg-[#080a11] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] text-white min-h-screen flex items-center justify-center">
      
    <div>
      <ProgressBar currStep={currStep} />  
      {currStep === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
        />
      )}

      {currStep === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep}
          onBack={previousStep}
        />
      )}

      {currStep === 3 && (
        <StepThree
          formData={formData}
          onBack={previousStep}
          onSubmit = {handleRegister}
        />
      )}
    </div>
    </div>
  );
}

export default Register;
