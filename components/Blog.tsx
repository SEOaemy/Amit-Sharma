import React from 'react';
import { BLOG_DATA } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white font-orbitron">The ChainCycle Ledger</h1>
        <p className="mt-2 text-lg text-gray-400">Two Decades of Insights on Technology, Finance, and Sustainability.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {BLOG_DATA.map(article => (
          <div key={article.id} className="glassmorphism rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-amber-500/20 hover:-translate-y-1 group">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white font-orbitron mb-2 group-hover:text-amber-400 transition-colors">{article.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{article.author} - {article.date}</p>
              <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>
              <a className="inline-block mt-4 text-amber-400 font-semibold cursor-pointer opacity-70">
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;