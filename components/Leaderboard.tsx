import React from 'react';
import { LEADERBOARD_DATA, CURRENT_USER } from '../constants';
import { TrophyIcon } from './IconComponents';

const Leaderboard: React.FC = () => {
    const getRankClass = (rank: number) => {
        if (rank === 1) return 'text-amber-400 text-shadow-gold';
        if (rank === 2) return 'text-gray-300 text-shadow-silver';
        if (rank === 3) return 'text-yellow-600 text-shadow-bronze';
        return 'text-gray-400';
    }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-8">
            <TrophyIcon className="mx-auto h-12 w-12 text-amber-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"/>
            <h2 className="mt-4 text-3xl font-bold text-white font-orbitron">World Champions</h2>
            <p className="mt-2 text-gray-400">The global leaders in sustainable asset creation.</p>
        </div>

      <div className="glassmorphism rounded-xl shadow-lg overflow-hidden">
        <ul role="list" className="divide-y divide-gray-700/50">
          {LEADERBOARD_DATA.map((entry) => {
            const isCurrentUser = entry.name === CURRENT_USER.name;
            return (
              <li
                key={entry.rank}
                className={`flex items-center justify-between p-4 transition-all duration-300 relative ${isCurrentUser ? 'bg-amber-500/10' : 'hover:bg-gray-800/30'}`}
              >
                {isCurrentUser && <div className="absolute left-0 top-0 h-full w-1 bg-amber-400 rounded-r-full"></div>}
                <div className="flex items-center space-x-4 pl-2">
                  <span className={`text-xl font-bold w-10 text-center ${getRankClass(entry.rank)}`}>
                    {entry.rank}
                  </span>
                  <img className="h-12 w-12 rounded-full ring-2 ring-gray-600/50" src={entry.avatarUrl} alt={`${entry.name}'s avatar`} />
                  <div>
                     <p className={`font-semibold ${isCurrentUser ? 'text-amber-300' : 'text-gray-200'}`}>{entry.name}</p>
                     {isCurrentUser && <span className="text-xs text-amber-400 font-bold">(You)</span>}
                  </div>
                </div>
                <div className="text-right">
                    <p className="font-bold text-lg text-amber-400">{entry.points.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">CCT</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;