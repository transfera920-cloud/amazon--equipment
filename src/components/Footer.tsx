import React from 'react';
import { Shield, ArrowUp, Mountain, Compass, ExternalLink } from 'lucide-react';
import { CHAPTER_METADATA } from '../data/chapter06';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        {/* Association & Chapter Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800/80">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-500">
                <Shield className="w-4 h-4" />
              </div>
              <a
                href="https://amazon-hike.com/intro"
                className="text-base font-bold text-white tracking-wider hover:text-amber-400 transition-colors"
              >
                亞馬遜國家山岳協會
              </a>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
              登山安全教育知識平台旨在普及高山環境應對知能，建立隊伍自主安全判斷。本教材內容僅作為山岳安全教育指引，無任何商業置入、品牌贊助與導購推薦。
            </p>
            <div className="text-xs font-mono text-zinc-400">
              決策架構：環境 → 裝備需求 → 功能 → 選擇 → 使用 → 檢查 → 備援 → 失效管理
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs font-mono">
            <div className="text-zinc-200 font-bold uppercase tracking-wider mb-3">
              章節架構
            </div>
            <div>01｜登山裝備的基本觀念</div>
            <div>02｜登山裝備分類</div>
            <div>03｜三層穿衣系統</div>
            <div>04｜防水裝備與雨天管理</div>
            <div>05｜背包系統與背負</div>
            <div>06｜睡眠與露營系統</div>
            <div>07｜炊事與燃料管理</div>
            <div>08｜電子設備與電力管理</div>
            <div>09｜特殊路線裝備</div>
            <div>10｜裝備檢查與失效管理</div>
          </div>

          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-zinc-200 font-bold uppercase tracking-wider text-xs font-mono mb-3">
                部署與相容性
              </div>
              <ul className="text-xs text-zinc-400 space-y-1.5 font-mono">
                <li>• Static Production-ready</li>
                <li>• Zero Backend Dependency</li>
                <li>• SEO & Pre-rendering Friendly</li>
                <li>• LocalStorage Device Isolation</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono border border-zinc-700 transition-colors min-h-[44px]"
              aria-label="回至頁首頂端"
            >
              <ArrowUp className="w-4 h-4 text-amber-400" />
              <span>返回章節頂端</span>
            </button>
          </div>
        </div>

        {/* Copyright & Technical Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © 2026 {CHAPTER_METADATA.organization} ｜ {CHAPTER_METADATA.platformName}
          </div>
          <div className="flex items-center gap-4">
            <span>CHAPTER 06：裝備知識</span>
            <span>•</span>
            <span className="text-amber-500">PRODUCTION BUILD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
