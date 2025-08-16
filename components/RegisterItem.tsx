import React, { useState } from 'react';
import { EWASTE_CATEGORIES } from '../constants';

interface RegisterItemProps {
    onRegistrationSuccess: () => void;
}

const RegisterItem: React.FC<RegisterItemProps> = ({ onRegistrationSuccess }) => {
  const [itemType, setItemType] = useState<string>(EWASTE_CATEGORIES[0]);
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [isSubmitting, setIsSubmitting] =useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !itemType) {
        alert("Please select the asset type and brand.");
        return;
    }
    
    setIsSubmitting(true);
    // Simulate API call for asset tokenization
    setTimeout(() => {
        console.log({ itemType, brand, model });
        setIsSubmitting(false);
        setShowSuccess(true);
        setBrand('');
        setModel('');
        
        // Redirect back to dashboard after a delay
        setTimeout(() => {
            onRegistrationSuccess();
        }, 2500);
    }, 1500);
  };

  if (showSuccess) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 glassmorphism rounded-xl shadow-lg animate-fade-in">
             <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative bg-gray-800 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-white font-orbitron">Asset Secured!</h2>
            <p className="mt-2 text-gray-400">Tokenization successful. 500 CCT credited to your wallet. Redirecting...</p>
        </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto glassmorphism p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-white mb-2 font-orbitron">Secure a Digital Asset</h2>
      <p className="text-center text-gray-400 mb-8">Tokenize your e-waste on the blockchain to unlock its financial value.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="itemType" className="block text-sm font-medium text-gray-300 mb-2">Asset Type</label>
          <select
            id="itemType"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
          >
            {EWASTE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-300 mb-2">Brand</label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="e.g., Samsung, Apple, Cisco"
            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            required
          />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-2">Model / Serial (Optional)</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="e.g., Galaxy S21, MacBook Pro 14"
            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
          />
        </div>
        <div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Securing on Chain...' : 'Tokenize Asset & Earn CCT'}
            </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterItem;