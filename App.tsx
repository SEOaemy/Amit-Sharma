import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RegisterItem from './components/RegisterItem';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Technology from './components/Technology';
import DataMinerGame from './components/DataMinerGame';
import SplashScreen from './components/SplashScreen';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedChainCycle');
    if (hasVisited) {
      setShowSplash(false);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem('hasVisitedChainCycle', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onEnter={handleEnter} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'register':
        return <RegisterItem onRegistrationSuccess={() => setCurrentPage('dashboard')} />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'profile':
        return <Profile />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'faq':
        return <FAQ />;
      case 'technology':
        return <Technology />;
      case 'game':
        return <DataMinerGame />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen text-gray-200 flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>
      <footer className="glassmorphism text-center p-4 text-sm text-gray-400 mt-8 border-t border-gray-700/50">
        ChainCycle &copy; 2004 - {new Date().getFullYear()} - Pioneering the Future of Sustainable Assets.
      </footer>
    </div>
  );
};

export default App;