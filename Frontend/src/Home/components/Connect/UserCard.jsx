import React from "react";

function UserCard({ user }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#121219] p-5 text-white">
      {/* Username */}
      <h2 className="text-xl font-bold">{user.username}</h2>

      {/* Location */}
      {user.location && (
        <p className="mt-2 text-sm text-white/50">📍 {user.location}</p>
      )}

      {/* Bio */}
      <p className="mt-3 text-sm text-white/60">
        {user.bio || "No bio available"}
      </p>

      {/* Interests */}
      <div className="mt-4 flex flex-wrap gap-2">
        {user.interests?.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400"
          >
            {interest}
          </span>
        ))}
      </div>

      {/* Connect Button */}
      <button className="mt-5 w-full rounded-lg bg-gradient-to-r from-red-500 to-orange-500 py-2 font-semibold transition hover:scale-[1.02]">
        Connect
      </button>
    </div>
  );
}

export default UserCard;
