
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', revenue: 45000, members: 120 },
  { name: 'Feb', revenue: 52000, members: 145 },
  { name: 'Mar', revenue: 48000, members: 180 },
  { name: 'Apr', revenue: 61000, members: 210 },
  { name: 'May', revenue: 75000, members: 290 },
  { name: 'Jun', revenue: 89000, members: 340 },
];

export const Overview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Ecosystem Performance</h2>
          <p className="text-slate-400">Aggregated real-time metrics across all business lines.</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <i className="fas fa-download mr-2"></i> Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value="$372,500" trend="+12.5%" icon="fa-dollar-sign" color="blue" />
        <StatCard title="Active Members" value="1,284" trend="+8.2%" icon="fa-users" color="emerald" />
        <StatCard title="Open Projects" value="14" trend="0%" icon="fa-briefcase" color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold mb-4">Combined Revenue Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold mb-4">Operations Status</h3>
          <div className="space-y-4">
            <StatusItem label="Clark Construction Strategic Partnership" status="On Track" progress={65} />
            <StatusItem label="BlockAide Membership Drive" status="Accelerating" progress={82} />
            <StatusItem label="Colonial Coin Virtual Inventory" status="Maintenance" progress={45} />
            <StatusItem label="Municipal IoT Pilot (Virginia)" status="Awaiting Review" progress={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, icon, color }: any) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors shadow-xl shadow-black/20">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{title}</p>
        <h3 className="text-3xl font-bold mt-2">{value}</h3>
        <p className={`text-xs mt-2 font-bold ${trend.startsWith('+') ? 'text-emerald-400' : 'text-slate-500'}`}>
          <i className={`fas ${trend.startsWith('+') ? 'fa-arrow-up' : 'fa-minus'} mr-1`}></i>
          {trend} this month
        </p>
      </div>
      <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center text-${color}-400`}>
        <i className={`fas ${icon} text-xl`}></i>
      </div>
    </div>
  </div>
);

const StatusItem = ({ label, status, progress }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs">
      <span className="font-medium text-slate-300">{label}</span>
      <span className="text-slate-500">{status}</span>
    </div>
    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);
