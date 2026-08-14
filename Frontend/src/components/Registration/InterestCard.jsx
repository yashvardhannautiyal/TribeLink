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
    >
      <span>
        {interest.icon}
      </span>

      <span>
        {interest.name}
      </span>

      {selected && (
        <span>
          ✓
        </span>
      )}
    </button>
  );
}

export default InterestCard;