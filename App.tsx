
import React, { useState } from 'react';
import { BusinessLine, Avatar } from './types';
import { ASSETS } from './constants';
import { Sidebar } from './components/Sidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { AvatarGuide } from './components/AvatarGuide';
import { Overview } from './views/Overview';
import { CloudControlView } from './views/CloudControlView';
import { BlockAideView } from './views/BlockAideView';
import { ColonialCoinView } from './views/ColonialCoinView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BusinessLine | 'OVERVIEW'>('OVERVIEW');
  
  const getCurrentAvatar = (): Avatar => {
    switch(activeTab) {
      case BusinessLine.CLOUD_CONTROL: return ASSETS.AVATARS.find(a => a.id === 'maxev')!;
      case BusinessLine.BLOCKAIDE: return ASSETS.AVATARS.find(a => a.id === 'felton')!;
      case BusinessLine.COLONIAL_COIN: return ASSETS.AVATARS.find(a => a.id === 'coloev')!;
      default: return ASSETS.AVATARS[0];
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case BusinessLine.CLOUD_CONTROL: return <CloudControlView />;
      case BusinessLine.BLOCKAIDE: return <BlockAideView />;
      case BusinessLine.COLONIAL_COIN: return <ColonialCoinView />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-y-auto p-6 relative">
          {renderContent()}
        </div>

        <AvatarGuide avatar={getCurrentAvatar()} />
      </main>
    </div>
  );
};

export default App;
