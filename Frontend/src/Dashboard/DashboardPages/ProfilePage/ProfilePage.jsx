import React, { useState } from 'react';
import {Pencil , MapPin, Trophy} from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Marcus T',
    tagline: 'MT',
    location: 'London, UK',
    rating: 5,
    monthlyRank: '#1',
    bio: 'I am marcusT . I am a Big Fan of virat kohli.',
    interests: ['PS5 Gaming', 'Bowling', 'Football', 'Cricket'],
    matches: 18,
    connections: 18,
    rankPoints: '18',
  });

  const [newInterest, setNewInterest] = useState('');

  const handleInterestToggle = (tagToRemove) => {
    setProfile((prev) => ({
      ...prev,
      interests: prev.interests.filter((t) => t !== tagToRemove),
    }));
  };

  const handleAddInterest = (e) => {
    e.preventDefault();
    if (newInterest.trim() && !profile.interests.includes(newInterest.trim())) {
      setProfile((prev) => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()],
      }));
      setNewInterest('');
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white p-6 sm:p-10 flex justify-center items-start">
      {/*Background Grid Pattern */}
      <div className=" pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.025)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.025)_2px,transparent_2px)] [background-size:100px_100px]" />
      
      <div className="w-full max-w-5xl">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 gap-4">
          <div>
            <span className="text-xs tracking-widest font-extrabold text-blue-500 uppercase">
              PLAYER PROFILE
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mt-1 bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
              Your Identity
            </h1>
          </div>

          {/* Edit button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-orange-500/20 transition-all active:scale-95 hover:cursor-pointer"
          >
           <Pencil className="w-4 h-4 " />
            {isEditing ? 'DONE EDITING' : 'EDIT PROFILE'}
          </button>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Player Identity Card */}
          <div className="lg:col-span-4 bg-[#0d111a]/80 backdrop-blur-xs border border-slate-800/80 rounded-2xl p-6 shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col items-start">
            
            {/* Avatar block */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr bg-red-600  flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-red-500/20 ring-4 ring-red-500/10 mb-4 ">
              {profile.tagline}
            </div>

            {/* Name & Location */}
            <h2 className="text-xl font-bold tracking-wide text-white">
              {profile.name}
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 mb-6">
              <MapPin size={12} />
              <span>{profile.location}</span>
            </div>

            <div className="w-full border-t border-slate-800/70 my-1"></div>

            {/* Ratings & Rank */}
            <div className="w-full flex flex-col gap-3.5 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 font-medium">Player rating</span>
                <div className="flex items-center gap-1 font-semibold text-white">
                  <span className="text-amber-400">★</span>  
                  <span>{profile.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 font-medium">Monthly rank</span>
                <div className="flex items-center gap-1.5 font-semibold text-orange-400">
                  <Trophy size={14} className='fill-orange-500' />
                  <span>{profile.monthlyRank}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Interests, Stats */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            
            {/* About Player */}
            <div className="bg-[#0d111a]/80 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:border-blue-500 transition-all">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-3">
                ABOUT PLAYER
              </span>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  className="w-full bg-[#141a27] border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
                  rows={3}
                />
              ) : (
                <p className="text-sm leading-relaxed text-slate-300">
                  {profile.bio}
                </p>
              )}
            </div>

            {/* Active Interests */}
            <div className="bg-[#0d111a]/80 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:border-blue-500 transition-all">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-4">
                ACTIVE INTERESTS
              </span>

              <div className="flex flex-wrap gap-2.5 items-center">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/60 transition-all cursor-pointer"
                  >
                    {interest}
                    {isEditing && (
                      <button
                        onClick={() => handleInterestToggle(interest)}
                        className="ml-1 text-slate-400 hover:text-red-400 transition hover:cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </span>
                ))}

                {isEditing && (
                  <form onSubmit={handleAddInterest} className="inline-flex">
                    <input
                      type="text"
                      placeholder="+ Add Interest"
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      className="px-3 py-1.5 rounded-lg text-xs bg-[#141a27] border border-dashed border-slate-600 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400"
                    />
                  </form>
                )}
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-[#0d111a]/80 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-3xl font-extrabold text-orange-500 group-hover:text-orange-400 transition-colors">
                  {profile.matches}
                </h3>
                <span className="text-xs text-slate-400 font-medium tracking-wide mt-1 block">
                  Matches
                </span>
              </div>

              <div className="bg-[#0d111a]/80 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-3xl font-extrabold text-orange-500 group-hover:text-orange-400 transition-colors">
                  {profile.connections}
                </h3>
                <span className="text-xs text-slate-400 font-medium tracking-wide mt-1 block">
                  Connections
                </span>
              </div>

              <div className="bg-[#0d111a]/80 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group">
                <h3 className="text-3xl font-extrabold text-orange-500 group-hover:text-orange-400 transition-colors">
                  {profile.rankPoints}
                </h3>
                <span className="text-xs text-slate-400 font-medium tracking-wide mt-1 block">
                  Rank points
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;