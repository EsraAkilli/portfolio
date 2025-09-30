import React from 'react';
import { NavigationItem } from '../types';

type HeaderProps = {
  nav: NavigationItem[];
  activeId: string;
  onNavClick: (id: string) => void;
  lang: 'en' | 'tr';
  onToggleLang: () => void;
};

const Header: React.FC<HeaderProps> = ({ nav, activeId, onNavClick, lang, onToggleLang }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <div className="font-bold text-xl text-gray-800 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => onNavClick('home')}>
          Esra Akıllı
        </div>
        <ul className="flex items-center gap-6">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeId === item.id 
                    ? 'text-blue-600 bg-blue-50 border border-blue-200 shadow-sm' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => onNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              onClick={onToggleLang}
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 