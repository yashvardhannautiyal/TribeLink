import React from "react";
import interests from "../../data/interests";

function StepThree({ formData, onBack, onSubmit }) {
  const selectedInterests = interests.filter((interest) =>
    formData.interests.includes(interest.id),
  );

  return (
    <div className="flex justify-center pt-3">
      <div className="w-md px-8 py-3 rounded-2xl bg-[#101829bd] border border-t-orange-500 border-l-orange-400 border-b-blue-500 border-r-blue-400">
        <div className="text-center pb-2">
          <h1 className="text-2xl font-bold text-orange-500">
            Review your profile
          </h1>
        </div>

        {/* Profile Information */}
        <div className="pb-2">
          <h2 className="text-xl font-bold pb-1">Your Information</h2>

          <p className="text-sm">
            <span className="text-gray-500 font-medium">Username:</span> {formData.username}
          </p>

          <p className="text-sm">
            <span className="text-gray-500 font-medium">Email:</span> {formData.email}
          </p>

          <p className="text-sm">
            <span className="text-gray-500 font-medium">Location:</span> {formData.location}
          </p>

          <p className="text-sm">
            <span className="text-gray-500 font-medium">Bio:</span>{" "}
            {formData.bio || "No bio added"}
          </p>
        </div>

        {/* Interests */}
        <div>
          <h2 className="text-xl font-bold">Your Interests</h2>

          {selectedInterests.map((interest) => (
            <div key={interest.id}>
              <span>{interest.icon}</span>

              <span>{interest.name}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="pt-3 flex gap-3">
          <button
            type="button"
            onClick={onBack}
            className="w-full text-xs cursor-pointer bg-orange-500 hover:bg-orange-600  text-white font-bold py-2.5 px-4 rounded-md mt-4"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="w-full text-xs cursor-pointer bg-blue-500 hover:bg-blue-600  text-white font-bold py-2.5 px-4 rounded-md mt-4"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
