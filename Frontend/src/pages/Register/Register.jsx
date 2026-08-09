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

  return (
    <div>
      <ProgressBar currStep={currStep} />

      {currStep === 1 && <StepOne />}

      {currStep === 2 && <StepTwo />}

      {currStep === 1 && <StepThree />}
    </div>
  );
}

export default Register;
