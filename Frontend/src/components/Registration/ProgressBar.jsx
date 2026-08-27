import React from "react";
import { ArrowBigRight } from "lucide-react";

function ProgressBar({ currStep = 1 }) {
  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Interests" },
    { number: 3, title: "Confirmation" },
  ];

  return (
    <div className="w-full flex justify-center px-2 mb-4">
    <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3 p-1.5 sm:p-2 bg-[#141d26]/80 border border-slate-700/60 rounded-xl backdrop-blur-md shadow-xl max-w-full">
      {steps.map((step, index) => {
        const isActive = currStep === step.number;
        const isCompleted = currStep > step.number;

        return (
          <React.Fragment key={step.number}>
            <div
              className={`flex items-center gap-1.5 sm:gap-2 md:gap-2.5 px-2 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25"
                  : isCompleted
                  ? "bg-slate-800 text-slate-200 border border-slate-700"
                  : "bg-transparent text-slate-500"
              }`}
            >
              <span
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  isActive
                    ? "bg-slate-950 text-amber-400"
                    : isCompleted
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-800 text-slate-500 border border-slate-700"
                }`}
              >
                {isCompleted ? "✓" : step.number}
              </span>

              <span className="hidden sm:inline text-xs uppercase tracking-wider font-semibold whitespace-nowrap">
                {step.title}
              </span>
            </div>

            {index < steps.length - 1 && (
              <ArrowBigRight
                size={18}
                className={` w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0 transition-colors duration-300 ${
                  isCompleted ? "text-amber-500 fill-amber-500" : "text-slate-600"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
    </div>
  );
}

export default ProgressBar;