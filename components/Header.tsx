import React, { useState, useRef, useEffect } from 'react';
import { CURRENT_USER } from '../constants';
import { Page } from '../types';
import { ChainCycleLogo, TrophyIcon, UserCircleIcon, LayoutDashboardIcon, PlusCircleIcon, InformationCircleIcon, ChevronDownIcon, BookOpenIcon, RecycleIcon, CodeBracketIcon, CubeIcon } from './IconComponents';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavButton: React.FC<{
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
}> = ({ onClick, isActive, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
      isActive
        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30'
        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

const DropdownMenu: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleNavigation = (page: Page) => {
        setCurrentPage(page);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
            >
                <span>More</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 glassmorphism rounded-lg shadow-xl py-1 z-50 animate-fade-in">
                    <a onClick={() => handleNavigation('about')} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 cursor-pointer">
                        <InformationCircleIcon className="w-5 h-5 mr-3" /> About Us
                    </a>
                    <a onClick={() => handleNavigation('services')} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 cursor-pointer">
                        <RecycleIcon className="w-5 h-5 mr-3" /> Services
                    </a>
                    <a onClick={() => handleNavigation('technology')} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 cursor-pointer">
                        <CodeBracketIcon className="w-5 h-5 mr-3" /> Our Technology
                    </a>
                    <a onClick={() => handleNavigation('blog')} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 cursor-pointer">
                        <BookOpenIcon className="w-5 h-5 mr-3" /> Blog
                    </a>
                    <a onClick={() => handleNavigation('faq')} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 cursor-pointer">
                        <UserCircleIcon className="w-5 h-5 mr-3" /> FAQ
                    </a>
                </div>
            )}
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="glassmorphism sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('dashboard')}>
            <div className="flex-shrink-0 text-amber-400">
              <ChainCycleLogo className="h-8 w-8 drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-orbitron tracking-wider">CHAINCYCLE</h1>
            </div>
          </div>

          <nav className="flex items-center space-x-1 md:space-x-2">
            <NavButton
              onClick={() => setCurrentPage('dashboard')}
              isActive={currentPage === 'dashboard'}
              icon={<LayoutDashboardIcon className="w-5 h-5" />}
              label="Dashboard"
            />
            <NavButton
              onClick={() => setCurrentPage('register')}
              isActive={currentPage === 'register'}
              icon={<PlusCircleIcon className="w-5 h-5" />}
              label="Secure Asset"
            />
            <NavButton
              onClick={() => setCurrentPage('leaderboard')}
              isActive={currentPage === 'leaderboard'}
              icon={<TrophyIcon className="w-5 h-5" />}
              label="Leaderboard"
            />
             <NavButton
              onClick={() => setCurrentPage('game')}
              isActive={currentPage === 'game'}
              icon={<CubeIcon className="w-5 h-5" />}
              label="Data Miner"
            />
            <DropdownMenu setCurrentPage={setCurrentPage} />
          </nav>

          <div className="flex items-center">
             <div className="text-right mr-4 hidden sm:block">
                <p className="text-sm font-semibold text-gray-200">{CURRENT_USER.name}</p>
                <p className="text-xs text-amber-400 font-bold tracking-wider">{CURRENT_USER.points.toLocaleString()} CCT</p>
            </div>
            <button onClick={() => setCurrentPage('profile')} className={`flex-shrink-0 rounded-full transition-all duration-300 ${currentPage === 'profile' ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-gray-900' : ''} hover:ring-2 hover:ring-amber-400`}>
               <img className="h-10 w-10 rounded-full" src={CURRENT_USER.avatarUrl} alt="User avatar" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;