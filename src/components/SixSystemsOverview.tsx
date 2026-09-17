import React from 'react';
import { ArrowDown, Shirt, Backpack, Tent, Flame, Compass, ShieldAlert } from 'lucide-react';
import { SIX_SYSTEMS_OVERVIEW } from '../data/chapter06';

interface SixSystemsOverviewProps {
  onSelectSystem?: (systemId: string) => void;
}

export const SixSystemsOverview: React.FC<SixSystemsOverviewProps> = ({ onSelectSystem }) => {
  const systemIcons = [
    <Shirt key="clothing" className="w-5 h-5 text-amber-400" />,
    <Backpack key="backpack" className="w-5 h-5 text-amber-400" />,
    <Tent key="camping" className="w-5 h-5 text-amber-400" />,
    <Flame key="cooking" className="w-5 h-5 text-amber-400" />,
    <Compass key="navigation" className="w-5 h-5 text-amber-400" />,
    <ShieldAlert key="safety" className="w-5 h-5 text-amber-400" />,
  ];

  const systemIds = ['clothing', 'backpack', 'camping', 'cooking', 'navigation', 'safety'];

  return (
    <section id="six-systems" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0b0e11]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          VISUAL GUIDE 03 ｜ 視覺教材
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          六個系統，一個共同的安全判斷
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12">
          {SIX_SYSTEMS_OVERVIEW.description}
        </p>

        {/* Core Relationship Matrix / Flow Chart */}
        <div className="p-6 sm:p-8 rounded-lg border border-zinc-800 bg-zinc-900/50 mb-12 relative">
          <div className="text-xs font-mono text-zinc-400 mb-6 flex items-center justify-between">
            <span>DECISION FLOW ｜ 系統判斷關係矩陣</span>
            <span className="text-amber-500">RELATIONAL ARCHITECTURE</span>
          </div>

          <div className="flex flex-col items-center justify-center max-w-lg mx-auto space-y-4">
            {/* Step 1: Input */}
            <div className="w-full p-4 rounded bg-zinc-800/80 border border-zinc-700 text-center shadow-md">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                客觀條件
              </span>
              <strong className="text-base sm:text-lg text-white font-bold tracking-wide">
                {SIX_SYSTEMS_OVERVIEW.flow.top}
              </strong>
            </div>

            <ArrowDown className="w-5 h-5 text-amber-500 animate-pulse my-1" />

            {/* Step 2: Core Matrix */}
            <div className="w-full p-5 rounded-md bg-amber-950/30 border-2 border-amber-500/60 text-center shadow-lg">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                核心決策
              </span>
              <strong className="text-lg sm:text-xl text-amber-200 font-bold tracking-wider">
                {SIX_SYSTEMS_OVERVIEW.flow.middle}
              </strong>
              <div className="text-xs text-zinc-400 mt-1 font-mono">
                [衣著・背包・露營・炊事・導航・安全]
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-amber-500 animate-pulse my-1" />

            {/* Step 3: Mitigation */}
            <div className="w-full p-4 rounded bg-zinc-800/80 border border-zinc-700 text-center shadow-md">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                執行邊界
              </span>
              <strong className="text-base sm:text-lg text-white font-bold tracking-wide">
                {SIX_SYSTEMS_OVERVIEW.flow.bottom}
              </strong>
            </div>
          </div>
        </div>

        {/* Six Systems Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SIX_SYSTEMS_OVERVIEW.systems.map((sys, idx) => (
            <a
              key={sys.number}
              href="#equipment-database"
              onClick={() => onSelectSystem && onSelectSystem(systemIds[idx])}
              className="p-4 rounded border border-zinc-800 bg-zinc-900/40 hover:border-amber-500 hover:bg-zinc-800/80 transition-all text-center flex flex-col items-center justify-between min-h-[110px] group"
              aria-label={`跳至裝備資料庫之第 ${sys.number} 系統：${sys.name}`}
            >
              <span className="text-[11px] font-mono font-bold text-zinc-400 group-hover:text-amber-400 transition-colors">
                {sys.number}
              </span>
              <div className="p-2 rounded bg-zinc-800/80 border border-zinc-700/60 group-hover:border-amber-500/50 my-2">
                {systemIcons[idx]}
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {sys.name}
                </div>
                <div className="text-[10px] font-mono text-zinc-400">
                  {sys.en}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
