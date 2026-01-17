
import React from 'react';

export const CloudControlView: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 inline-block border border-blue-600/30">
            Consulting Operations
          </span>
          <h2 className="text-3xl font-bold font-tech">Cloud Control LLC</h2>
          <p className="text-slate-400 max-w-2xl mt-2">Blockchain and IoT integrations for municipal deployments. Managing "Dirt to Disposition" RWA life cycles.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
            New Contract
          </button>
        </div>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-800/30">
          <h3 className="font-bold text-sm">Active Engagements</h3>
          <i className="fas fa-ellipsis-h text-slate-500"></i>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-500 uppercase text-[10px] font-bold tracking-widest border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Project / Partner</th>
                <th className="px-6 py-4">Phase</th>
                <th className="px-6 py-4">Value</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-slate-700 mr-3 flex items-center justify-center font-bold text-xs">CK</div>
                    <div>
                      <p className="font-bold">Clark Construction Strategic Partnership</p>
                      <p className="text-xs text-slate-500">Virginia Real World Asset Portfolio</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Dirt to Disposition</td>
                <td className="px-6 py-4 font-tech text-blue-400">$1.2M Contract</td>
                <td className="px-6 py-4">
                  <span className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded text-[10px] font-bold uppercase">Negotiation</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-500 hover:text-white"><i className="fas fa-edit"></i></button>
                </td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-slate-700 mr-3 flex items-center justify-center font-bold text-xs">VA</div>
                    <div>
                      <p className="font-bold">Henrico County IoT Fleet</p>
                      <p className="text-xs text-slate-500">Municipal Services Optimization</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">Implementation</td>
                <td className="px-6 py-4 font-tech text-blue-400">$450k Annually</td>
                <td className="px-6 py-4">
                  <span className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-[10px] font-bold uppercase">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-500 hover:text-white"><i className="fas fa-edit"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h4 className="font-bold mb-4 flex items-center">
            <i className="fas fa-microchip mr-2 text-blue-500"></i>
            IoT/RWA Frameworks
          </h4>
          <div className="space-y-4">
            <FrameworkCard title="Clark Coin Ecosystem" description="Human dwelling lifecycle management via blockchain." />
            <FrameworkCard title="Asset As-A-Service" description="Tokenized property management for institutional portfolios." />
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h4 className="font-bold mb-4 flex items-center">
            <i className="fas fa-calendar-alt mr-2 text-blue-500"></i>
            Strategic Roadmap
          </h4>
          <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"></div>
              <p className="text-xs font-bold text-blue-400 uppercase">Q3 2025</p>
              <p className="text-sm font-bold">Virginia Statewide Expansion</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-700"></div>
              <p className="text-xs font-bold text-slate-500 uppercase">Q1 2026</p>
              <p className="text-sm font-bold">Federal IoT Security Pilot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FrameworkCard = ({ title, description }: any) => (
  <div className="bg-slate-800/40 border border-slate-700 p-4 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer">
    <h5 className="font-bold text-sm text-blue-300">{title}</h5>
    <p className="text-xs text-slate-400 mt-1">{description}</p>
  </div>
);
