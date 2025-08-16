import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white font-orbitron">Our Solutions</h1>
        <p className="mt-2 text-lg text-gray-400">Enterprise-Grade, Blockchain-Powered Asset Management Since 2004.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {SERVICES_DATA.map(service => (
          <div key={service.id} className="glassmorphism p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-amber-500/20 hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-amber-500/10 p-4 rounded-lg border border-amber-500/30">
                <div className="text-amber-400">{service.icon}</div>
              </div>
              <h2 className="text-2xl font-bold text-white font-orbitron">{service.title}</h2>
            </div>
            <p className="mt-4 text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;