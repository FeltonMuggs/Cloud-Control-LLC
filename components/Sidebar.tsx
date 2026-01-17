
import React from 'react';
import { BusinessLine } from '../types';

interface Props {
  activeTab: BusinessLine | 'OVERVIEW';
  setActiveTab: (tab: BusinessLine | 'OVERVIEW') => void;
}

export const Sidebar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'OVERVIEW', icon: 'fa-chart-pie', label: 'Ecosystem Overview' },
    { id: BusinessLine.CLOUD_CONTROL, icon: 'fa-city', label: 'Cloud Control LLC' },
    { id: BusinessLine.BLOCKAIDE, icon: 'fa-users-gear', label: 'BlockAide Union' },
    { id: BusinessLine.COLONIAL_COIN, icon: 'fa-coins', label: 'Colonial Coin & Crypto' },
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          CloudControl
        </h1>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Unified Operations</p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === item.id 
                ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <i className={`fas ${item.icon} w-5 text-center`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
          <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Social Ties</p>
          <div className="flex justify-between">
            <a href="#" className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-linkedin-in text-xs"></i></a>
            <a href="#" className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-facebook-f text-xs"></i></a>
            <a href="#" className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center hover:bg-red-600 transition-colors"><i className="fab fa-google text-xs"></i></a>
          </div>
        </div>
      </div>
    </aside>
  );
};
