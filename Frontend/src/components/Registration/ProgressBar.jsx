import React from "react";

function ProgressBar({ currStep }) {
  const steps = [
    {
      number: 1,
      title: "Personal Details",
    },
    {
      number: 2,
      title: "Interests",
    },
    {
      number: 3,
      title: "Confirmation",
    },
  ];

  return (
    <div>
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>

          <div>
            <div>
              {currStep > step.number
                ? "✓"
                : step.number}
            </div>

            <span>
              {step.title}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div>
              ─────────
            </div>
          )}

        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressBar;