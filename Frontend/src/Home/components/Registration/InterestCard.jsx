import React from "react";
import { CircleCheck } from "lucide-react";


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
      className="border rounded-xl p-4 flex items-center gap-2 hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer hover:bg-blue-500 mb-2 justify-center w-45 h-14 text-2xl"
    >
      <p>
        {interest.icon}
      </p>

      <p className={`text-sm font-medium ${selected ? "text-white" : "text-gray-400"}`}>
        {interest.name}
      </p>

      {selected && (
        <p>
          <CircleCheck  className="text-green-500 " />
        </p>
      )}
    </button>
  );
}

export default InterestCard;