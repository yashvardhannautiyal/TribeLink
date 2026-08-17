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
    <div className="flex items-center gap-5">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>

          <div className="flex items-center gap-2">
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