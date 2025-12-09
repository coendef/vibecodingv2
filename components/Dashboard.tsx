import React from 'react';
import { ViewState } from '../types';

interface DashboardProps {
  onNavigate: (view: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-16 -mt-16 opacity-50 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Start je reis met Vibe-coding</h2>
          <p className="text-slate-600 max-w-2xl mb-6 text-lg">
            Leer hoe je intuïtie en AI combineert om software te bouwen zonder jarenlange studie.
            De toekomst van programmeren is Nederlands, begrijpelijk en snel.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate(ViewState.LEARN)}
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-md"
            >
              Start Cursus
            </button>
            <button 
              onClick={() => onNavigate(ViewState.CHAT)}
              className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Vraag de Expert
            </button>
          </div>
        </div>
      </div>

      {/* Stats / Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-800 mb-2">Snelheid</h3>
          <p className="text-sm text-slate-500">Bouw prototypes in minuten in plaats van dagen door AI het zware werk te laten doen.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-800 mb-2">Toegankelijk</h3>
          <p className="text-sm text-slate-500">Geen diepe kennis van syntax nodig. Als je het kunt beschrijven, kun je het bouwen.</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-800 mb-2">Community</h3>
          <p className="text-sm text-slate-500">Sluit je aan bij een groeiende groep "Vibe Coders" die de industrie veranderen.</p>
        </div>
      </div>
      
      {/* Latest Article Teaser */}
      <div className="bg-slate-900 rounded-xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Nieuw: De 3 Regels van Prompting</h3>
          <p className="text-slate-400 mb-0">Ontdek hoe je de AI precies laat doen wat jij wilt.</p>
        </div>
        <button 
           onClick={() => onNavigate(ViewState.LEARN)}
           className="px-5 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors whitespace-nowrap"
        >
          Lees Artikel
        </button>
      </div>
    </div>
  );
};

export default Dashboard;