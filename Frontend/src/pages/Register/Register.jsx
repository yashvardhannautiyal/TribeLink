import React, { useState } from "react";
import StepOne from "../../components/Registration/StepOne";
import StepTwo from "../../components/Registration/StepTwo";
import StepThree from "../../components/Registration/StepThree";
import ProgressBar from "../../components/Registration/ProgressBar";

function Register() {
  const [currStep, setCurrStep] = useState(3);

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

  const handleRegister = () => {
    console.log("Registration Data : ", formData);

    //later : send data to your express backend
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
