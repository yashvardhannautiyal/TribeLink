import React from "react";
import { ArrowBigRight } from "lucide-react";

function ProgressBar({ currStep = 1 }) {
  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Interests" },
    { number: 3, title: "Confirmation" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 p-2 bg-[#141d26]/80 border border-slate-700/60 rounded-xl backdrop-blur-md shadow-xl w-fit mx-auto mb-4">
      {steps.map((step, index) => {
        const isActive = currStep === step.number;
        const isCompleted = currStep > step.number;

        return (
          <React.Fragment key={step.number}>
            <div
              className={`flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25 scale-105"
                  : isCompleted
                  ? "bg-slate-800 text-slate-200 border border-slate-700"
                  : "bg-transparent text-slate-500"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive
                    ? "bg-slate-950 text-amber-400"
                    : isCompleted
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-800 text-slate-500 border border-slate-700"
                }`}
              >
                {isCompleted ? "✓" : step.number}
              </span>

              <span className="text-xs uppercase tracking-wider font-semibold">
                {step.title}
              </span>
            </div>

            {index < steps.length - 1 && (
              <ArrowBigRight
                size={18}
                className={`transition-colors duration-300 ${
                  isCompleted ? "text-amber-500 fill-amber-500" : "text-slate-600"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ProgressBar;