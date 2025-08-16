import React, { useState, useEffect } from 'react';
import { CpuIcon, CubeIcon } from './IconComponents';

const DataMinerGame: React.FC = () => {
    const [minedCCT, setMinedCCT] = useState(0);
    const [clickPower, setClickPower] = useState(1);
    const [autoMiners, setAutoMiners] = useState(0);
    const [autoMinerCost, setAutoMinerCost] = useState(50);
    const cctPerSecond = autoMiners * 0.5;

    useEffect(() => {
        const interval = setInterval(() => {
            setMinedCCT(prev => prev + cctPerSecond);
        }, 1000);
        return () => clearInterval(interval);
    }, [cctPerSecond]);

    const handleMineClick = () => {
        setMinedCCT(minedCCT + clickPower);
    };

    const handleBuyAutoMiner = () => {
        if (minedCCT >= autoMinerCost) {
            setMinedCCT(minedCCT - autoMinerCost);
            setAutoMiners(autoMiners + 1);
            setAutoMinerCost(Math.ceil(autoMinerCost * 1.15));
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center">
                <CubeIcon className="mx-auto h-12 w-12 text-amber-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"/>
                <h1 className="mt-4 text-4xl font-bold text-white font-orbitron">Data Miner</h1>
                <p className="mt-2 text-lg text-gray-400">Extract value by processing dormant e-waste data nodes.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Game Area */}
                <div className="lg:col-span-2 glassmorphism p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold text-white font-orbitron">Mined Balance</h2>
                    <p className="text-5xl font-bold text-amber-400 my-4 font-orbitron tracking-wider text-shadow-gold">{minedCCT.toFixed(1)} <span className="text-3xl opacity-70">CCT</span></p>
                    <p className="text-gray-400">{cctPerSecond.toFixed(1)} CCT / second</p>

                    <button
                        onClick={handleMineClick}
                        className="mt-8 group relative w-48 h-48 bg-gray-900 rounded-full flex items-center justify-center transform transition-transform duration-200 active:scale-95 focus:outline-none"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="absolute inset-2 rounded-full border-2 border-dashed border-amber-400/50 animate-spin" style={{animationDuration: '20s'}}></div>
                        <CpuIcon className="w-24 h-24 text-amber-400 group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"/>
                    </button>
                    <p className="mt-4 text-gray-300">Click to mine {clickPower} CCT</p>
                </div>

                {/* Upgrades & Stats */}
                <div className="glassmorphism p-8 rounded-xl shadow-lg space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-white font-orbitron mb-4 text-center">Upgrades</h3>
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                                <p className="font-semibold text-gray-200">Auto-Miner Drones</p>
                                <p className="text-2xl font-bold text-amber-400 my-2">{autoMiners}</p>
                                <button
                                    onClick={handleBuyAutoMiner}
                                    disabled={minedCCT < autoMinerCost}
                                    className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Buy for {autoMinerCost} CCT
                                </button>
                            </div>
                            {/* Future upgrades can be added here */}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white font-orbitron mb-4 text-center">Stats</h3>
                        <div className="bg-gray-800/50 p-4 rounded-lg space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Click Power:</span>
                                <span className="font-semibold text-white">{clickPower} CCT/click</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Auto-Miner Rate:</span>
                                <span className="font-semibold text-white">{cctPerSecond.toFixed(1)} CCT/sec</span>
                            </div>
                        </div>
                    </div>
                     <button
                        className="w-full py-3 text-base font-medium text-gray-900 bg-gray-400 rounded-lg cursor-not-allowed opacity-50"
                    >
                        Claim Rewards (Coming Soon)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataMinerGame;
