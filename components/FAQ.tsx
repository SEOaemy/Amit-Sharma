import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { ChevronDownIcon } from './IconComponents';

const AccordionItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="text-lg font-semibold text-gray-200">{question}</span>
                <ChevronDownIcon className={`w-6 h-6 text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-4 pt-0 text-gray-300">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white font-orbitron">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg text-gray-400">Your guide to the world's leading e-waste asset platform.</p>
      </div>
      
      <div className="glassmorphism p-6 rounded-xl shadow-lg">
        <div className="space-y-2">
            {FAQ_DATA.map(item => (
                <AccordionItem key={item.id} question={item.question} answer={item.answer} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;