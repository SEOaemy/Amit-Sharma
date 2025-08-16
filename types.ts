
export type Page = 'dashboard' | 'register' | 'leaderboard' | 'profile' | 'services' | 'about' | 'blog' | 'faq' | 'technology' | 'game';

export interface User {
  id: number;
  name: string;
  points: number;
  rank: number;
  avatarUrl: string;
}

export interface EWasteItem {
  id: string;
  type: string;
  brand: string;
  model: string;
  registeredOn: Date;
  status: 'Pending Pickup' | 'In Transit' | 'Recycled';
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatarUrl: string;
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export interface BlogArticle {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    author: string;
    date: string;
    content: string; // Full content for the article page (future use)
}

export interface Stat {
    icon: React.ReactNode;
    title: string;
    value: string;
    description?: string;
    numericValue?: number;
    gradient: string;
}