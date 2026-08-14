import React from "react";
import interests from "../../data/interests";

function StepThree({
  formData,
  onBack,
  onSubmit,
}) {
  const selectedInterests = interests.filter(
    (interest) =>
      formData.interests.includes(interest.id)
  );

  return (
    <div>
      <h1>Review your profile</h1>

      <p>
        Make sure everything looks good before
        creating your account.
      </p>

      {/* Profile Information */}
      <div>
        <h2>Your Information</h2>

        <p>
          <strong>Username:</strong>{" "}
          {formData.username}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {formData.email}
        </p>

        <p>
          <strong>Location:</strong>{" "}
          {formData.location}
        </p>

        <p>
          <strong>Bio:</strong>{" "}
          {formData.bio || "No bio added"}
        </p>
      </div>

      {/* Interests */}
      <div>
        <h2>Your Interests</h2>

        {selectedInterests.map((interest) => (
          <div key={interest.id}>
            <span>{interest.icon}</span>

            <span>
              {interest.name}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div>
        <button
          type="button"
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default StepThree;