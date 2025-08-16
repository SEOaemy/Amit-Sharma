import React from 'react';
import { CURRENT_USER, DASHBOARD_STATS } from '../constants';
import BlockchainVisualizer from './BlockchainVisualizer';
import { Stat } from '../types';
import AnimatedNumber from './AnimatedNumber';

const StatCard: React.FC<Stat> = ({ icon, title, value, numericValue, gradient, description }) => (
    <div className={`glassmorphism rounded-xl p-6 flex items-center space-x-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 group relative`}>
        <div className={`p-4 rounded-lg ${gradient}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <div className="text-2xl font-bold text-white font-orbitron">
              {numericValue ? (
                <AnimatedNumber value={numericValue} isCurrency={title.includes("Value")} />
              ) : value}
              <span className="text-lg ml-1 opacity-70">{numericValue && value.slice(-1) === '+' ? '+' : ''}</span>
            </div>
        </div>
        {description && (
            <div className="absolute bottom-full mb-2 w-60 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none left-1/2 -translate-x-1/2 border border-gray-700 shadow-lg z-10">
                {description}
                <svg className="absolute text-gray-900 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
            </div>
        )}
    </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glassmorphism p-8 rounded-xl shadow-lg border-l-4 border-amber-400">
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-orbitron">Welcome, Veteran Warrior.</h1>
        <p className="mt-2 text-gray-400">Your portfolio overview. Continue to unlock value and build a sustainable future.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DASHBOARD_STATS.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

       <div className="glassmorphism p-6 rounded-xl shadow-lg overflow-hidden">
        <h2 className="text-xl font-bold mb-4 text-white font-orbitron">Live Blockchain Activity</h2>
        <p className="text-sm text-gray-400 mb-4 -mt-2">Visualizing real-time asset tokenization across the global network.</p>
        <BlockchainVisualizer />
      </div>
    </div>
  );
};

export default Dashboard;