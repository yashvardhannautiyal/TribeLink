import React from "react";

function InterestCard({
  interest,
  selected,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className="border rounded-lg p-4 flex items-center gap-2"
    >
      <p>
        {interest.icon}
      </p>

      <p>
        {interest.name}
      </p>

      {selected && (
        <p>
          ✓
        </p>
      )}
    </button>
  );
}

export default InterestCard;