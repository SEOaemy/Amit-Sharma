import React from 'react';
import { User, LeaderboardEntry, Badge, Service, FAQItem, BlogArticle, Stat } from './types';
import { RecycleIcon, ShieldCheckIcon, StarIcon, ZapIcon, CpuIcon, SmartphoneIcon, BuildingOfficeIcon, CodeBracketIcon, InformationCircleIcon, GlobeAltIcon, LockClosedIcon, AwardIcon } from './components/IconComponents';

export const CURRENT_USER: User = {
  id: 1,
  name: 'Alex Johnson',
  points: 875300,
  rank: 128,
  avatarUrl: 'https://i.pravatar.cc/100?u=alexjohnson',
};

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, name: 'Kenji Tanaka', points: 15600000, avatarUrl: 'https://i.pravatar.cc/100?u=kenji' },
  { rank: 2, name: 'Fatima Al-Fassi', points: 15100000, avatarUrl: 'https://i.pravatar.cc/100?u=fatima' },
  { rank: 3, name: 'Carlos Rossi', points: 14850000, avatarUrl: 'https://i.pravatar.cc/100?u=carlos' },
  { rank: 4, name: 'Mei Lin', points: 14500000, avatarUrl: 'https://i.pravatar.cc/100?u=mei' },
  { rank: 5, name: 'Anya Petrova', points: 14200000, avatarUrl: 'https://i.pravatar.cc/100?u=anya' },
  { rank: 6, name: 'Javier Rodriguez', points: 13900000, avatarUrl: 'https://i.pravatar.cc/100?u=javier' },
  { rank: 7, name: 'Chloe Dubois', points: 13500000, avatarUrl: 'https://i.pravatar.cc/100?u=chloe' },
  { rank: 8, name: 'Marcus Adebayo', points: 13150000, avatarUrl: 'https://i.pravatar.cc/100?u=marcus' },
  { rank: 9, name: 'Sofia Novak', points: 12800000, avatarUrl: 'https://i.pravatar.cc/100?u=sofia' },
  { rank: 10, name: 'Liam Murphy', points: 12500000, avatarUrl: 'https://i.pravatar.cc/100?u=liam' },
  { rank: 128, name: 'Alex Johnson', points: 875300, avatarUrl: 'https://i.pravatar.cc/100?u=alexjohnson' },
];

export const DASHBOARD_STATS: Stat[] = [
    { icon: <AwardIcon className="text-white w-8 h-8" />, title: "Total Value Unlocked", value: "$15.7M+", numericValue: 15700000, description: "Represents the total market value of precious materials recovered and tokenized through the ChainCycle network since 2004.", gradient: "bg-gradient-to-br from-amber-500 to-yellow-400" },
    { icon: <GlobeAltIcon className="text-white w-8 h-8" />, title: "Global Partners", value: "350+", numericValue: 350, gradient: "bg-gradient-to-br from-blue-500 to-indigo-500" },
    { icon: <LockClosedIcon className="text-white w-8 h-8" />, title: "Assets Secured", value: "2.5M+", numericValue: 2500000, gradient: "bg-gradient-to-br from-emerald-500 to-green-500" }
];

export const BADGE_DATA: Badge[] = [
    { id: 1, name: 'Genesis Recycler', description: 'Secured your first asset on the chain.', icon: <StarIcon className="w-8 h-8"/>, unlocked: true },
    { id: 2, name: 'Eco Starter', description: 'Secured 5 assets.', icon: <RecycleIcon className="w-8 h-8"/>, unlocked: true },
    { id: 3, name: 'Mobile Mogul', description: 'Secured 10 smartphones.', icon: <SmartphoneIcon className="w-8 h-8"/>, unlocked: true },
    { id: 4, name: 'Energy Baron', description: 'Secured high-value energy assets like servers or displays.', icon: <ZapIcon className="w-8 h-8"/>, unlocked: true },
    { id: 5, name: 'Silicon Sovereign', description: 'Secured computer components.', icon: <CpuIcon className="w-8 h-8"/>, unlocked: false },
    { id: 6, name: 'Platinum Guardian', description: 'Secured 100 assets.', icon: <ShieldCheckIcon className="w-8 h-8"/>, unlocked: false },
];

export const EWASTE_CATEGORIES = [
  "Smartphone", "Laptop", "Tablet", "Desktop Computer", "Server", "Monitor", "Keyboard", "Mouse", "Printer", "Enterprise Networking", "Charger & Cables", "Battery", "Headphones", "Television", "Other"
];

export const SERVICES_DATA: Service[] = [
    { id: 1, title: 'Asset Tokenization', description: 'Convert your personal e-waste into secured digital assets on our proprietary blockchain. Maximize your return through a transparent, audited process that has been trusted for 20 years.', icon: <RecycleIcon className="w-10 h-10" /> },
    { id: 2, title: 'Enterprise Asset Management', description: 'Bespoke e-waste solutions for global corporations. We provide immutable chain-of-custody, certified data sanitization, and detailed ESG reporting to meet your compliance needs.', icon: <BuildingOfficeIcon className="w-10 h-10" /> },
    { id: 3, title: 'Immutable Data Security', description: 'Military-grade data destruction services with certification immutably recorded on the blockchain. Protect your sensitive information with the leader in digital asset security.', icon: <ShieldCheckIcon className="w-10 h-10" /> },
    { id: 4, title: 'Decentralized API', description: 'Integrate your applications with the world\'s most established e-waste ledger. Leverage our two decades of data to build the next generation of circular economy solutions.', icon: <CodeBracketIcon className="w-10 h-10" /> },
];

export const FAQ_DATA: FAQItem[] = [
    { id: 1, question: 'What is ChainCycle?', answer: 'Since 2004, ChainCycle has been the global leader in blockchain-powered e-waste asset management. We provide a secure, transparent platform for individuals and corporations to convert discarded electronics into valuable, tokenized assets, maximizing financial returns while ensuring environmental responsibility.' },
    { id: 2, question: 'How does the blockchain guarantee my return?', answer: 'Our proprietary blockchain creates an immutable, transparent ledger for every asset. This verifiable chain of custody, from collection to material reclamation, eliminates inefficiencies and fraud, ensuring you receive the maximum possible value for the precious materials recovered from your devices.' },
    { id: 3, question: 'What kind of assets can I secure?', answer: 'You can secure a wide range of electronic assets, from consumer devices like smartphones and laptops to enterprise-grade hardware like servers and networking equipment. Higher-value components yield greater returns.' },
    { id: 4, question: 'How is the value of my asset determined?', answer: 'Asset value is calculated using a sophisticated algorithm that considers the weight, type, and current market price of the recoverable precious metals (gold, silver, palladium, etc.) and other materials within your device. This process is logged on-chain for full transparency.' },
    { id: 5, question: 'Is my data secure with ChainCycle?', answer: 'Absolutely. Data security is paramount. We offer certified, military-grade data destruction for all devices. A digital Certificate of Destruction is minted as an NFT and transferred to you, providing immutable proof that your data has been securely and permanently erased.' },
];

export const BLOG_DATA: BlogArticle[] = [
    { id: 1, title: 'The Digital Gold Rush: Unlocking Billions from E-Waste', excerpt: 'Our 20-year journey proves that the most valuable precious metals are not in mines, but in your desk drawer. Learn about the economics of urban mining.', imageUrl: 'https://picsum.photos/seed/blog1/400/200', author: 'ChainCycle Insights', date: 'Oct 26, 2023', content: '...' },
    { id: 2, title: 'Blockchain & ESG: The Future of Corporate Responsibility', excerpt: 'Discover how the world\'s leading corporations leverage ChainCycle for immutable, audit-proof ESG reporting and supply chain transparency.', imageUrl: 'https://picsum.photos/seed/blog2/400/200', author: 'ChainCycle Insights', date: 'May 15, 2021', content: '...' },
    { id: 3, title: 'From Dot-Com to DeFi: 20 Years of E-Waste Innovation', excerpt: 'A look back at how ChainCycle pioneered the use of decentralized technology, evolving from a simple ledger to a global asset platform since 2004.', imageUrl: 'https://picsum.photos/seed/blog3/400/200', author: 'John Carter, CEO', date: 'Jan 10, 2020', content: '...' },
];