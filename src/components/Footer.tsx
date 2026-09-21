import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#080b0e] py-16 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Equation Box */}
        <div className="mb-14 p-8 rounded-lg border border-zinc-800 bg-zinc-900/40 text-center">
          <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3 font-semibold">
            EQUIPMENT MASTERY EQUATION ｜ 裝備安全等式
          </div>
          <div className="text-lg sm:text-2xl font-bold text-white tracking-wide leading-relaxed mb-4">
            裝備不是越貴越安全。
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-zinc-300">
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-amber-300">適合環境</span>
            <span className="text-amber-500 font-bold">＋</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-amber-300">正確使用</span>
            <span className="text-amber-500 font-bold">＋</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-amber-300">了解限制</span>
            <span className="text-amber-500 font-bold">＋</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-amber-300">檢查失效</span>
            <span className="text-amber-500 font-bold">＋</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-amber-300">保留備援</span>
            <span className="text-emerald-400 font-bold">＝</span>
            <span className="px-3 py-1 rounded bg-emerald-950/60 border border-emerald-600/50 text-emerald-300 font-bold">
              完整的裝備管理能力
            </span>
          </div>
        </div>

        {/* Centered Brand */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-500">
            <Shield className="w-4 h-4" />
          </div>
          <a
            href="https://amazon-hike.com/"
            className="text-base font-bold text-white tracking-wider hover:text-amber-400 transition-colors"
          >
            亞馬遜國家山岳協會
          </a>
        </div>
      </div>
    </footer>
  );
};
