import React from 'react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: ViewState.DASHBOARD, label: 'Overzicht', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { id: ViewState.LEARN, label: 'Lessen', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: ViewState.CHAT, label: 'AI Expert', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col h-full flex-shrink-0 border-r border-slate-800 hidden md:flex">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold tracking-tight text-emerald-400 flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          VibeCode
        </h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Academy</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  currentView === item.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <svg className="mr-3 h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
            G
          </div>
          <div>
            <p className="text-sm font-medium text-white">Gastgebruiker</p>
            <p className="text-xs text-slate-500">Student Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;