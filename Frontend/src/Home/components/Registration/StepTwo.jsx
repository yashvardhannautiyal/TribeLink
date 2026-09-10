import React, { useState } from "react";
import interests from "../../data/interests";
import InterestCard from "./InterestCard";
import toast, { Toaster } from "react-hot-toast";

function StepTwo({ formData, setFormData, onNext, onBack }) {
  const [error, setError] = useState("");

  const toggleInterest = (interestId) => {
    setFormData((prev) => {
      const alreadySelected = prev.interests.includes(interestId);

      if (alreadySelected) {
        return {
          ...prev,
          interests: prev.interests.filter((id) => id !== interestId),
        };
      }

      return {
        ...prev,
        interests: [...prev.interests, interestId],
      };
    });

    setError("");
  };

  // next page function
  const handleNext = () => {
    if (formData.interests.length < 1) {
      // setError("Please select atleast 1 interests*");
      toast.error("Please select at least 1 interest*", {
        style: {
          background: "#101829",
          color: "#fff",
          border: "1px solid #f97316",
        },
      });
      return;
    }
    onNext();
  };

  return (
      <div className="flex justify-center pt-3 ">
      <Toaster position="top-center" reverseOrder={false} />
        <div className="w-md px-8 py-3 rounded-2xl bg-[#101829bd] border border-t-orange-500 border-l-orange-400 border-b-blue-500 border-r-blue-400">
          <div className="text-center pb-2">
            <h1 className="text-lg lg:text-3xl font-extrabold text-orange-500">
              Select your Tribe
            </h1>

            <p className="text-white/50 font-medium mt-2">What are you into?</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm pb-2 text-center">Select your interests and connect with people around.</p>
            <div className="flex flex-wrap gap-4 mt-2">
            {interests.map((interest) => (
              <InterestCard
                key={interest.id}
                interest={interest}
                selected={formData.interests.includes(interest.id)}
                onSelect={() => toggleInterest(interest.id)}
              />
            ))}
            </div>
          </div>

          {error && <p>{error}</p>}

          <div className="pt-3 flex gap-3 mb-4">
            <button
            type="button"
            onClick={onBack}
            className="w-1/3 py-2.5 px-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-800/40 text-slate-300 text-xs font-semibold transition duration-150 cursor-pointer"
          >
            ← Back
          </button>

            <button type="button" onClick={handleNext} className="w-2/3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-900/30 active:scale-[0.98] transition duration-150 cursor-pointer">
              Continue →
            </button>
          </div>
        </div>
      </div>
  );
}

export default StepTwo;
