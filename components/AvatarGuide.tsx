
import React, { useState } from 'react';
import { Avatar } from '../types';
import { speakResponse } from '../services/geminiService';

interface Props {
  avatar: Avatar;
}

export const AvatarGuide: React.FC<Props> = ({ avatar }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [bubbleText, setBubbleText] = useState("Welcome back! How can I help you manage the ecosystem today?");

  const handleSpeak = async () => {
    setIsSpeaking(true);
    await speakResponse(bubbleText, avatar.id === 'felton' ? 'Puck' : 'Kore');
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-full right-0 mb-4 w-64 p-4 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
        <p className="text-sm text-slate-300 italic">"{bubbleText}"</p>
        <button 
          onClick={handleSpeak}
          className="mt-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <i className={`fas fa-volume-up mr-1 ${isSpeaking ? 'animate-pulse' : ''}`}></i>
          Hear Guidance
        </button>
      </div>
      
      <div className="relative w-24 h-24 rounded-full border-4 border-slate-700 overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform bg-slate-900">
        <img 
          src={avatar.imageUrl} 
          alt={avatar.name}
          className={`w-full h-full object-cover ${isSpeaking ? 'animate-bounce' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">{avatar.name}</span>
        </div>
      </div>
      
      {isSpeaking && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-ping"></div>
      )}
    </div>
  );
};
