import React, { useState } from 'react';
import {
  BookOpen,
  Compass,
  AlertOctagon,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { TEACHING_UNITS } from '../data/chapter06';

export const TeachingUnits: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState<string>('unit-01');

  return (
    <section id="teaching-units" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0b0e11]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          COURSE 06 ｜ 教學核心單元
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          十個教學單元
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
          以統一結構「裝備功能介紹、選擇原則、使用技巧、常見錯誤、領隊提醒」，建立條理分明的登山安全知識系統。
        </p>

        {/* Quick jump navigation */}
        <div className="flex flex-wrap gap-2 mb-12 p-3 rounded bg-zinc-900/90 border border-zinc-800">
          <span className="text-xs font-mono text-zinc-400 self-center px-2">快速跳轉：</span>
          {TEACHING_UNITS.map((unit) => (
            <a
              key={unit.id}
              href={`#${unit.id}`}
              onClick={() => setActiveUnit(unit.id)}
              className="px-2.5 py-1.5 rounded text-xs font-mono font-medium transition-colors bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 min-h-[44px] flex items-center"
              aria-label={`跳轉至單元 ${unit.number}：${unit.title}`}
            >
              {unit.number}
            </a>
          ))}
        </div>

        {/* All 10 Units Rendered Sequentially for 100% Crawlability & Reading Continuity */}
        <div className="space-y-12">
          {TEACHING_UNITS.map((unit) => (
            <article
              key={unit.id}
              id={unit.id}
              className="p-6 sm:p-8 rounded-lg border border-zinc-800 bg-zinc-900/50 relative overflow-hidden transition-all hover:border-zinc-700"
            >
              {/* Unit Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    MODULE {unit.number}
                  </span>
                  {/* Semantic H3 */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {unit.number}｜{unit.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  COURSE 06 // SYSTEM SPEC
                </span>
              </div>

              {/* 4 Standard Content Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* 1. 裝備功能介紹 */}
                <div className="p-4 rounded bg-zinc-900/80 border border-zinc-800/80">
                  <div className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>裝備功能介紹</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {unit.functionIntro}
                  </p>
                </div>

                {/* 2. 選擇原則 */}
                <div className="p-4 rounded bg-zinc-900/80 border border-zinc-800/80">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Compass className="w-4 h-4" />
                    <span>選擇原則</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {unit.selectionPrinciple}
                  </p>
                </div>

                {/* 3. 使用技巧 */}
                <div className="p-4 rounded bg-zinc-900/80 border border-zinc-800/80">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>使用技巧</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {unit.usageTips}
                  </p>
                </div>

                {/* 4. 常見錯誤 */}
                <div className="p-4 rounded bg-rose-950/20 border border-rose-900/30">
                  <div className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertOctagon className="w-4 h-4" />
                    <span>常見錯誤</span>
                  </div>
                  <p className="text-sm text-rose-200/90 leading-relaxed">
                    {unit.commonMistakes}
                  </p>
                </div>
              </div>

              {/* 5. 領隊提醒 */}
              <div className="p-4 sm:p-5 rounded border border-amber-500/40 bg-amber-950/25 text-amber-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>領隊提醒</span>
                </div>
                <div className="text-sm sm:text-base font-semibold leading-relaxed text-zinc-100">
                  {unit.leaderTip}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
