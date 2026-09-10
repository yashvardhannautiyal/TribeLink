import React, { useState } from "react";
import interests from "../../data/interests";

function StepThree({ formData, setFormData, onBack, onSubmit }) {
  const [errorMsg, setErrorMsg] = useState("");

  const selectedInterests = interests.filter((interest) =>
    formData.interests.includes(interest.id)
  );

  const handleRemoveInterest = (idToRemove) => {
    // Prevent removing if only 1 interest is left
    if (formData.interests.length <= 1) {
      setErrorMsg("At least one interest is mandatory.");
      return;
    }

    setErrorMsg(""); // Clear message if removal is valid

    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((id) => id !== idToRemove),
      }));
    }
  };

  return (
    <div className="flex justify-center pt-3">
      <div className="w-full max-w-xl p-6 rounded-2xl bg-[#101829bd] border border-t-orange-500 border-l-orange-400 border-b-blue-500 border-r-blue-400 space-y-6 text-slate-200">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-orange-400 tracking-wide">
            Review Your Profile
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Double-check your details before joining the tribe.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-[#162238] rounded-xl p-5 border border-slate-700/50 space-y-5">
          
          {/* User Info Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-700/40">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-lg font-black text-white shadow-md shrink-0">
              {formData.username ? formData.username.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="overflow-hidden">
              <h2 className="font-bold text-base text-white truncate">
                {formData.username || "Anonymous"}
              </h2>
              <p className="text-xs text-slate-400 truncate">{formData.email || "No email provided"}</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#0e1626] p-3 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-400 block mb-1 font-medium">Location</span>
            <span className="font-semibold text-slate-200">
              {formData.location || "Not specified"}
            </span>
          </div>

          {/* Bio Section - displays full 50+ lines without truncation */}
          <div className="bg-[#0e1626] p-3 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-400 block mb-1.5 font-medium">Bio</span>
            <div className="font-normal text-slate-200 whitespace-pre-wrap break-words leading-relaxed max-h-96 overflow-y-auto pr-1">
              {formData.bio && formData.bio.trim() !== "" ? (
                formData.bio
              ) : (
                <span className="italic text-slate-500">No bio added</span>
              )}
            </div>
          </div>

          {/* Interests Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400">
                Interests ({selectedInterests.length})
              </span>
              {selectedInterests.length > 1 ? (
                <span className="text-[10px] text-slate-400">Click ✕ to remove</span>
              ) : (
                <span className="text-[10px] text-red-500 font-medium">1 interest required*</span>
              )}
            </div>

            {/* Error / Alert notice */}
            {errorMsg && (
              <p className="text-[11px] text-red-400 mb-2 font-medium">
                ⚠️ {errorMsg}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {selectedInterests.map((interest) => {
                const isOnlyOneLeft = selectedInterests.length === 1;

                return (
                  <span
                    key={interest.id}
                    className={`inline-flex items-center gap-2 pl-3 pr-2 py-1 text-xs rounded-full border transition-all ${
                      isOnlyOneLeft
                        ? "bg-slate-800/80 border-slate-600 text-slate-300 opacity-90"
                        : "bg-orange-500/10 border-orange-500/30 text-orange-300"
                    }`}
                  >
                    <span>{interest.icon}</span>
                    <span>{interest.name}</span>
                    
                    <button
                      type="button"
                      disabled={isOnlyOneLeft}
                      onClick={() => handleRemoveInterest(interest.id)}
                      className={`ml-1 w-4 h-4 rounded-full flex items-center justify-center text-[11px] transition-colors ${
                        isOnlyOneLeft
                          ? "text-slate-600 cursor-not-allowed"
                          : "text-orange-300/70 hover:text-white hover:bg-orange-500/40 cursor-pointer"
                      }`}
                      title={isOnlyOneLeft ? "At least one interest is mandatory" : `Remove ${interest.name}`}
                    >
                      ✕
                    </button>
                  </span>
                );
              })}
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="w-1/3 py-2.5 px-4 rounded-xl border border-slate-600 hover:border-slate-400 hover:bg-slate-800/40 text-slate-300 text-xs font-semibold transition duration-150 cursor-pointer"
          >
            ← Back
          </button>
          
          <button
            type="button"
            onClick={onSubmit}
            className="w-2/3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-900/30 active:scale-[0.98] transition duration-150 cursor-pointer"
          >
            Confirm & Finish
          </button>
        </div>

      </div>
    </div>
  );
}

export default StepThree;