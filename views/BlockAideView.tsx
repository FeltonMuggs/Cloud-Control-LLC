
import React from 'react';

export const BlockAideView: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 inline-block border border-emerald-600/30">
            501(c)(5) Non-Profit DAO
          </span>
          <h2 className="text-3xl font-bold font-tech">BlockAide Union</h2>
          <p className="text-slate-400 max-w-2xl mt-2">The first Labor Union for builders of the digital age. Collective bargaining, IP protection, and health benefits for Web3 devs.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20">
            Connect Wallet
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 px-6 py-2 rounded-xl font-bold transition-all border border-slate-700">
            Governance
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatItem label="Active Builders" value="482" sub="Members" icon="fa-person-digging" color="emerald" />
        <StatItem label="Treasury Balance" value="156.4 ETH" sub="$412,500.00" icon="fa-vault" color="emerald" />
        <StatItem label="Active Proposals" value="4" sub="Voting Open" icon="fa-vote-yea" color="emerald" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold mb-6 flex items-center">
            <i className="fas fa-handshake mr-2 text-emerald-400"></i>
            Active Membership Pass Minting
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-48 aspect-square bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-3xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.3),transparent)] animate-pulse"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center font-bold">BA</div>
                <i className="fas fa-shield-halved text-white/50"></i>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-white/60 font-mono">BUILDER PASS #1024</p>
                <p className="text-sm font-bold text-white uppercase tracking-tighter">Verified Member</p>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-slate-400 text-sm italic">"Join the collective. Stake 0.05 ETH to mint your membership pass. No KYC, just code-verified contribution."</p>
              <div className="grid grid-cols-2 gap-4">
                <BenefitItem icon="fa-heart-pulse" label="Health Fund" />
                <BenefitItem icon="fa-gavel" label="IP Dispute Res" />
                <BenefitItem icon="fa-graduation-cap" label="Skill Certs" />
                <BenefitItem icon="fa-money-bill-transfer" label="Strike Funds" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold mb-4">Top Contributors</h3>
          <div className="space-y-4">
            <Contributor name="0x4f...a92" role="Protocol Maintainer" xp={2400} />
            <Contributor name="dev_shiva.eth" role="Solidity Security" xp={1950} />
            <Contributor name="block_smith" role="Advocacy Lead" xp={1400} />
          </div>
          <button className="w-full mt-6 py-2 border border-slate-700 hover:border-emerald-500/50 rounded-xl text-xs font-bold text-slate-500 hover:text-emerald-400 transition-all">
            View All Members
          </button>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ label, value, sub, icon, color }: any) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center space-x-4">
    <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center text-${color}-400`}>
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <div>
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{label}</p>
      <h4 className="text-xl font-bold">{value}</h4>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  </div>
);

const BenefitItem = ({ icon, label }: any) => (
  <div className="flex items-center space-x-2 text-xs text-slate-300">
    <i className={`fas ${icon} text-emerald-500 w-4`}></i>
    <span>{label}</span>
  </div>
);

const Contributor = ({ name, role, xp }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700"></div>
      <div>
        <p className="text-xs font-bold">{name}</p>
        <p className="text-[10px] text-slate-500">{role}</p>
      </div>
    </div>
    <span className="text-[10px] font-mono text-emerald-400">{xp} XP</span>
  </div>
);
