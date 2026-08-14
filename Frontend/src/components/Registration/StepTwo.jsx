import React, { useState } from 'react'
import interests from '../../data/interests'
import InterestCard from './InterestCard'


function StepTwo({formData,
  setFormData,
  onNext,
  onBack,}) {

    const [error, setError] = useState("");

    const toggleInterest = (interestId) => {
      setFormData((prev) => {
        const alreadySelected = prev.interests.includes(interestId);

        if(alreadySelected){
          return {
            ...prev,
            interests : prev.interests.filter(
              (id) => id !== interestId
            ),
          };
        }

        return{
          ...prev,
          interests:[
            ...prev.interests,
            interestId,
          ],
        };
      });

      setError("");
    };

    // next page function 
    const handleNext = () =>{
      if (formData.interests.length < 2) {
      setError(
        "Please select at least 2 interests."
      );
      return;
    }

    onNext();
  };



  return (
    <div>
      <h1>What are you into?</h1>

      <p>
        Select the interests you want to connect
        with people around.
      </p>

      <div>
        {interests.map((interest) => (
          <InterestCard
            key={interest.id}
            interest={interest}
            selected={formData.interests.includes(
              interest.id
            )}
            onSelect={() =>
              toggleInterest(interest.id)
            }
          />
        ))}
      </div>

      {error && (
        <p>{error}</p>
      )}

      <div>
        <button
          type="button"
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleNext}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default StepTwo;