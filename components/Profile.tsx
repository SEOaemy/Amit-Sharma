import React from 'react';
import { CURRENT_USER, BADGE_DATA } from '../constants';
import { Badge } from '../types';

const BadgeCard: React.FC<{ badge: Badge }> = ({ badge }) => (
  <div className={`
    p-4 rounded-xl flex flex-col items-center text-center transition-all duration-300 group relative
    ${badge.unlocked 
      ? 'glassmorphism shadow-lg hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transform' 
      : 'bg-gray-800/50 border border-gray-700/50 filter grayscale opacity-60'}`
  }>
    <div className={`p-3 rounded-full transition-all duration-300
      ${badge.unlocked 
        ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-md group-hover:scale-110' 
        : 'bg-gray-700 text-gray-400'}`
      }>
        {badge.icon}
    </div>
    <h3 className="mt-3 font-bold text-sm text-gray-200">{badge.name}</h3>
    {!badge.unlocked && <span className="mt-2 text-xs font-semibold text-gray-500 uppercase">Locked</span>}
    
    <div className="absolute bottom-full mb-2 w-48 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none left-1/2 -translate-x-1/2 border border-gray-700 shadow-lg z-10">
        {badge.description}
        <svg className="absolute text-gray-900 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
    </div>
  </div>
);

const Profile: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 glassmorphism p-8 rounded-xl shadow-lg">
        <div className="relative">
          <img src={CURRENT_USER.avatarUrl} alt="User avatar" className="w-32 h-32 rounded-full ring-4 ring-gray-700/50 shadow-lg" />
          <div className="absolute -inset-1 rounded-full border-2 border-amber-400 animate-glow"></div>
        </div>
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-3xl font-bold text-white font-orbitron">{CURRENT_USER.name}</h1>
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mt-1 font-semibold tracking-wide">{CURRENT_USER.points.toLocaleString()} CCT</p>
          <p className="text-md text-gray-300 mt-2">Global Rank: <span className="font-bold">#{CURRENT_USER.rank}</span></p>
          <p className="mt-4 text-gray-400 max-w-lg">
            A pioneering investor on the ChainCycle platform, dedicated to unlocking value from discarded electronics and promoting a sustainable, circular economy.
          </p>
        </div>
      </div>

      <div className="glassmorphism p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">Achievements & Accolades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {BADGE_DATA.map(badge => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;