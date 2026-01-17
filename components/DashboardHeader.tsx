
import React from 'react';

export const DashboardHeader: React.FC = () => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
          <input 
            type="text" 
            placeholder="Search operations, leads, or projects..." 
            className="bg-slate-800 border-none rounded-full pl-10 pr-4 py-2 text-sm w-80 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex space-x-3 text-slate-400">
          <button className="hover:text-white transition-colors relative">
            <i className="fas fa-bell"></i>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="hover:text-white transition-colors">
            <i className="fas fa-cog"></i>
          </button>
        </div>
        
        <div className="flex items-center space-x-3 border-l border-slate-800 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold">Admin Account</p>
            <p className="text-[10px] text-slate-500">Global Manager</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
            CC
          </div>
        </div>
      </div>
    </header>
  );
};
