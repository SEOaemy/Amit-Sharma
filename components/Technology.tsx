import React from 'react';
import BlockchainVisualizer from './BlockchainVisualizer';
import { ShieldCheckIcon, RecycleIcon, CodeBracketIcon } from './IconComponents';

const TechCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="glassmorphism p-8 rounded-xl shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
            <div className="flex-shrink-0 bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 text-amber-400">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white font-orbitron">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{children}</p>
    </div>
);

const Technology: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <CodeBracketIcon className="mx-auto h-16 w-16 text-amber-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]"/>
        <h1 className="mt-4 text-4xl font-bold text-white font-orbitron">Our Technology</h1>
        <p className="mt-2 text-lg text-gray-400">The battle-tested, proprietary blockchain powering the circular economy since 2004.</p>
      </div>

       <div className="glassmorphism rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white font-orbitron text-center">Global Transaction Flow</h2>
        </div>
        <BlockchainVisualizer nodeCount={50} isExpanded={true} />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <TechCard icon={<ShieldCheckIcon className="w-8 h-8"/>} title="Security">
                Our network is built on a custom, permissioned blockchain protocol that has been refined over two decades. It offers military-grade encryption for all user data and immutable, tamper-proof records for every transaction, ensuring the highest level of security for your digital assets.
            </TechCard>
            <TechCard icon={<RecycleIcon className="w-8 h-8"/>} title="Transparency">
                Every step of an asset's journey, from collection to material reclamation, is recorded on our distributed ledger. This provides an unprecedented, real-time, and fully auditable chain of custody. Our partners and users can verify every claim, building unparalleled trust in the system.
            </TechCard>
            <TechCard icon={<CodeBracketIcon className="w-8 h-8"/>} title="Tokenomics">
                We pioneered the tokenization of e-waste. Our native token, CCT, represents a stake in the value recovered from the network. A dynamic valuation model, based on real-time commodity markets, ensures fair and transparent pricing for all secured assets, creating a stable and lucrative digital commodity.
            </TechCard>
      </div>
    </div>
  );
};

export default Technology;
