import React from 'react';
import { ChainCycleLogo } from './IconComponents';

const About: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <ChainCycleLogo className="mx-auto h-16 w-16 text-amber-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]"/>
        <h1 className="mt-4 text-4xl font-bold text-white font-orbitron">About ChainCycle</h1>
        <p className="mt-2 text-lg text-gray-400">Pioneering Decentralized E-Waste Asset Management Since 2004.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="glassmorphism p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-amber-400 font-orbitron mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To unlock the multi-trillion dollar value hidden in the world's electronic waste. We provide the planet's most secure and transparent platform for tokenizing and trading e-waste assets, creating unparalleled financial opportunities and a sustainable circular economy for our global partners.
          </p>
        </div>

        <div className="glassmorphism p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-400 font-orbitron mb-4">Our 20-Year Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a future where 'waste' is an obsolete concept. By perfecting the on-chain provenance of all materials, we aim to create a fully liquid, global market for recycled resources, making sustainable investment the most profitable form of investment. ChainCycle will be the foundational financial layer for this new paradigm.
          </p>
        </div>
        
        <div className="glassmorphism p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-white font-orbitron mb-6 text-center">The Leadership Council</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <img className="h-24 w-24 rounded-full ring-2 ring-gray-600/50" src="https://i.pravatar.cc/100?u=ceo" alt="Founder" />
                    <h3 className="mt-4 font-bold text-lg text-gray-200">John Carter</h3>
                    <p className="text-sm text-amber-400">Founder & CEO</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="h-24 w-24 rounded-full ring-2 ring-gray-600/50" src="https://i.pravatar.cc/100?u=cto" alt="Lead Developer" />
                    <h3 className="mt-4 font-bold text-lg text-gray-200">Dr. Evelyn Reed</h3>
                    <p className="text-sm text-amber-400">Chief Technology Officer</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="h-24 w-24 rounded-full ring-2 ring-gray-600/50" src="https://i.pravatar.cc/100?u=coo" alt="Operations Head" />
                    <h3 className="mt-4 font-bold text-lg text-gray-200">Kenji Tanaka</h3>
                    <p className="text-sm text-amber-400">Chief Operations Officer</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;