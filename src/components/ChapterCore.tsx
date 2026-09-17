import React from 'react';
import { Wind, UserCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { CHAPTER_CORE } from '../data/chapter06';

export const ChapterCore: React.FC = () => {
  const pillarIcons = [
    <Wind key="env" className="w-5 h-5 text-amber-400" />,
    <UserCheck key="user" className="w-5 h-5 text-amber-400" />,
    <ShieldAlert key="backup" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="chapter-core" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0c1014]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          SECTION 01 ｜ 本章核心
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
          {CHAPTER_CORE.title}
        </h2>

        {/* Body Text */}
        <div className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12">
          {CHAPTER_CORE.description}
        </div>

        {/* Three Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHAPTER_CORE.pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="p-6 rounded border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-zinc-800 text-amber-400 border border-zinc-700/60">
                    {pillar.number}
                  </span>
                  {pillarIcons[index]}
                </div>
                {/* Semantic H3 */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {pillar.number}｜{pillar.name}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>系統評估要素</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
