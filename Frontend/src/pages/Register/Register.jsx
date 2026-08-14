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

  const handleRegister = () => {
    console.log("Registration Data : ", formData);

    //later : send data to your express backend
  };

  return (
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
          onPrev={previousStep}
        />
      )}

      {currStep === 3 && (
        <StepThree
          formData={formData}
          onPrev={previousStep}
          onSubmit = {handleRegister}
        />
      )}
    </div>
  );
}

export default Register;
