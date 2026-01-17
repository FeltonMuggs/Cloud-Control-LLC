
import React from 'react';

export const ColonialCoinView: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="bg-amber-600/20 text-amber-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 inline-block border border-amber-600/30 font-colonial">
            Numismatics & Cryptocurrencies
          </span>
          <h2 className="text-3xl font-bold font-colonial text-amber-100">Colonial Coin & Crypto</h2>
          <p className="text-slate-400 max-w-2xl mt-2">Historical legacy meets futuristic finance. Managing drop-shipping inventory and 2026 physical location planning.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-amber-700/20 hover:bg-amber-700/30 text-amber-400 px-6 py-2 rounded-xl font-bold transition-all border border-amber-900/50">
            Inventory Mgr
          </button>
          <button className="bg-amber-600 hover:bg-amber-500 px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-amber-600/20 text-slate-900">
            Visit Store
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Metric title="Drop-Ship Partners" value="12" />
        <Metric title="SKUs in Catalog" value="1,402" />
        <Metric title="Average Order" value="$245" />
        <Metric title="Numismatic Vol" value="14.2 BTC" />
      </div>

      <div className="bg-slate-900 border border-amber-900/20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800 bg-slate-800/20 flex justify-between items-center">
          <h3 className="font-colonial text-amber-200">Featured Inventory</h3>
          <div className="flex space-x-2">
            <button className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold">ALL</button>
            <button className="bg-slate-800/40 px-3 py-1 rounded text-[10px] font-bold text-slate-500">NUMISMATIC</button>
            <button className="bg-slate-800/40 px-3 py-1 rounded text-[10px] font-bold text-slate-500">HARDWARE</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800">
          <ProductCard name="1794 Liberty Dollar" price="$1,250" img="https://picsum.photos/seed/coin1/300/300" type="Rare Coin" />
          <ProductCard name="Ledger Stax - Gold Edition" price="$399" img="https://picsum.photos/seed/ledger/300/300" type="Hardware" />
          <ProductCard name="Civil War Token Set" price="$450" img="https://picsum.photos/seed/coin2/300/300" type="Historical" />
          <ProductCard name="Colonial DAO NFT Key" price="0.25 ETH" img="https://picsum.photos/seed/nft/300/300" type="Digital" />
        </div>
      </div>

      <div className="bg-amber-900/10 border border-amber-900/30 rounded-2xl p-8 text-center">
        <i className="fas fa-compass text-4xl text-amber-500/50 mb-4 animate-spin-slow"></i>
        <h3 className="text-xl font-colonial text-amber-200 mb-2">Brick & Mortar Destination</h3>
        <p className="text-slate-400 max-w-lg mx-auto mb-6">"Determining physical location for H2 2026. Merging a historical tavern aesthetic with high-tech crypto kiosks."</p>
        <div className="inline-flex items-center space-x-4">
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase text-slate-500">Countdown</p>
            <p className="font-tech text-amber-400">482 Days Remaining</p>
          </div>
          <div className="h-8 w-px bg-amber-900/50"></div>
          <button className="text-sm font-bold text-amber-200 hover:underline">View Siting Criteria</button>
        </div>
      </div>
    </div>
  );
};

const Metric = ({ title, value }: any) => (
  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
    <p className="text-[10px] font-bold text-slate-500 uppercase">{title}</p>
    <p className="text-xl font-bold font-tech text-amber-500/80">{value}</p>
  </div>
);

const ProductCard = ({ name, price, img, type }: any) => (
  <div className="bg-slate-950 p-6 hover:bg-slate-900 transition-colors group cursor-pointer">
    <div className="aspect-square rounded-xl overflow-hidden mb-4 border border-slate-800">
      <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <span className="text-[9px] font-bold bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full uppercase mb-2 inline-block tracking-tighter">{type}</span>
    <h4 className="font-bold text-sm text-slate-200 truncate">{name}</h4>
    <p className="text-amber-500 font-tech font-bold mt-1">{price}</p>
  </div>
);
