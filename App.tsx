import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LearnSection from './components/LearnSection';
import ChatInterface from './components/ChatInterface';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard onNavigate={setCurrentView} />;
      case ViewState.LEARN:
        return <LearnSection />;
      case ViewState.CHAT:
        return <ChatInterface />;
      default:
        return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      {/* Sidebar for Desktop */}
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        
        {/* Mobile Header */}
        <header className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between shadow-md z-20">
          <div className="font-bold text-emerald-400 text-lg flex items-center gap-2">
            <span>⚡</span> VibeCode
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-slate-800 z-10 border-b border-slate-700 shadow-xl md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <button 
                onClick={() => { setCurrentView(ViewState.DASHBOARD); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg text-left ${currentView === ViewState.DASHBOARD ? 'bg-emerald-600 text-white' : 'text-slate-300'}`}
              >
                Overzicht
              </button>
              <button 
                onClick={() => { setCurrentView(ViewState.LEARN); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg text-left ${currentView === ViewState.LEARN ? 'bg-emerald-600 text-white' : 'text-slate-300'}`}
              >
                Lessen
              </button>
              <button 
                onClick={() => { setCurrentView(ViewState.CHAT); setMobileMenuOpen(false); }}
                className={`p-3 rounded-lg text-left ${currentView === ViewState.CHAT ? 'bg-emerald-600 text-white' : 'text-slate-300'}`}
              >
                AI Expert
              </button>
            </nav>
          </div>
        )}

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 md:p-8">
           {/* Breadcrumb / Title Area (Optional, nice for business apps) */}
           <div className="mb-6 flex justify-between items-center">
             <h1 className="text-2xl font-bold text-slate-800">
               {currentView === ViewState.DASHBOARD && 'Overzicht'}
               {currentView === ViewState.LEARN && 'Kennisbank'}
               {currentView === ViewState.CHAT && 'AI Consultant'}
             </h1>
           </div>

           {/* View Content */}
           <div className="h-full">
             {renderView()}
           </div>
        </main>
      </div>
    </div>
  );
};

export default App;