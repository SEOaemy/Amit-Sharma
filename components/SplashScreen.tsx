import React, { useState, useEffect } from 'react';
import { ChainCycleLogo } from './IconComponents';

interface SplashScreenProps {
  onEnter: () => void;
}

const TypingText: React.FC<{ text: string; onFinished: () => void }> = ({ text, onFinished }) => {
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        if (displayedText.length < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, 50);
            return () => clearTimeout(timeoutId);
        } else {
            onFinished();
        }
    }, [displayedText, text, onFinished]);

    return <p className="font-mono text-green-400">{'>'} {displayedText}<span className="animate-pulse">_</span></p>;
};


const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
    const [step, setStep] = useState(0);

    const texts = [
        "Initializing ChainCycle Protocol...",
        "Authenticating node credentials...",
        "Establishing secure connection to global ledger...",
        "Synchronization complete. Welcome.",
    ];
    
    return (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 text-center p-4">
            <div className="max-w-3xl">
                <ChainCycleLogo className="h-16 w-16 text-amber-400 mx-auto mb-8 animate-pulse drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
                <div className="h-28 text-left">
                    {texts.map((text, index) => (
                        step >= index && <TypingText key={index} text={text} onFinished={() => setTimeout(() => setStep(s => s + 1), 200)} />
                    ))}
                </div>
                
                {step > texts.length && (
                     <button
                        onClick={onEnter}
                        className="mt-8 px-8 py-3 border border-amber-400 text-amber-400 font-bold rounded-lg uppercase tracking-widest text-lg transition-all duration-300 transform hover:bg-amber-400 hover:text-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 animate-fade-in"
                        style={{animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards'}}
                    >
                        Initialize Connection
                    </button>
                )}
            </div>
        </div>
    );
};

export default SplashScreen;
