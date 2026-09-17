import React from 'react';
import { ArrowDown, Mountain, Compass, ShieldCheck, Layers } from 'lucide-react';
import { CHAPTER_METADATA, FIELD_INDEX_DATA } from '../data/chapter06';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-zinc-800/80 bg-topo-pattern">
      {/* Mountain Altitude Background Graphic (Abstract contours / elevation lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-50 480L320 220L720 380L1120 140L1500 420"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-50 540L380 340L820 440L1220 260L1500 490"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M-50 600L450 420L920 500L1320 360L1500 560"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Association Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/60">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              {CHAPTER_METADATA.organization} ｜ {CHAPTER_METADATA.platformName}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span>CORE SPECIFICATION</span>
            <span className="text-zinc-600">•</span>
            <span>STANDARD ARCHITECTURE</span>
          </div>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl">
          {/* Chapter Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900/90 border border-zinc-700/80 mb-6">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400">
              {CHAPTER_METADATA.chapterNumber}
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-xs font-mono text-zinc-400">TECHNICAL EDUCATION MANUAL</span>
          </div>

          {/* Single Primary H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {CHAPTER_METADATA.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 mb-8 leading-relaxed font-normal">
            {CHAPTER_METADATA.subtitle}
          </p>

          {/* Core Manifesto Box */}
          <div className="p-6 sm:p-7 rounded-sm border-l-4 border-l-amber-500 bg-zinc-900/70 border border-zinc-800/90 mb-10 shadow-lg">
            <div className="text-xs font-mono text-amber-500/90 uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>CORE EDUCATION PRINCIPLE ｜ 核心宣言</span>
            </div>
            <blockquote className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed">
              裝備不是越貴越安全。
              <br />
              <strong className="text-amber-400 font-semibold">
                適合環境、正確使用、了解限制，才是真正的安全。
              </strong>
            </blockquote>
            <div className="mt-3 text-xs font-mono text-zinc-400 border-t border-zinc-800/80 pt-3">
              決策鏈：{CHAPTER_METADATA.corePhilosophy}
            </div>
          </div>

          {/* Action Button: 開始閱讀 */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#chapter-core"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-sm bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-amber-500/20 min-h-[44px]"
            >
              <span>開始閱讀</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <a
              href="#preflight-checklist"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white text-sm font-medium transition-colors min-h-[44px]"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>直達行前檢核清單</span>
            </a>
          </div>
        </div>

        {/* Section VI: Field Index Section */}
        <div className="mt-16 pt-10 border-t border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-1">
                FIELD INDEX
              </div>
              <div className="text-sm text-zinc-400 font-medium">
                章節結構索引與高山系統規格指標
              </div>
            </div>

            {/* Stamp Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded border border-zinc-700/80 bg-zinc-900/90 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono tracking-wider font-semibold text-zinc-200">
                {FIELD_INDEX_DATA.stampTitle}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-xs text-zinc-400">{FIELD_INDEX_DATA.unitsLabel}</span>
            </div>
          </div>

          {/* 3 Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded border border-zinc-800 bg-zinc-900/40 relative overflow-hidden">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-white mb-1">
                {FIELD_INDEX_DATA.unitsCount}
              </div>
              <div className="text-sm font-medium text-zinc-300 mb-2">
                {FIELD_INDEX_DATA.unitsLabel}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                包含基本觀念、分類、三層穿衣、背包、防水、睡眠、炊事、電力、特殊路線與失效管理。
              </div>
            </div>

            <div className="p-5 rounded border border-zinc-800 bg-zinc-900/40 relative overflow-hidden">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-amber-400 mb-1">
                {FIELD_INDEX_DATA.systemsCount}
              </div>
              <div className="text-sm font-medium text-zinc-300 mb-2">
                {FIELD_INDEX_DATA.systemsLabel}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                衣著、背包、露營、炊事、導航、安全六大子系統之功能判讀與使用技巧。
              </div>
            </div>

            <div className="p-5 rounded border border-zinc-800 bg-zinc-900/40 relative overflow-hidden">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-400 mb-1">
                {FIELD_INDEX_DATA.checkCount}
              </div>
              <div className="text-sm font-medium text-zinc-300 mb-2">
                {FIELD_INDEX_DATA.checkLabel}
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                15 項關鍵檢核步驟，建立個人裝置即時儲存的行前確認流程。
              </div>
            </div>
          </div>

          {/* Elevation Markers */}
          <div className="mt-4 py-2.5 px-4 rounded border border-zinc-800/70 bg-zinc-900/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Mountain className="w-3.5 h-3.5 text-zinc-400" />
              <span>ALTITUDE BENCHMARKS：</span>
            </div>
            <div className="flex items-center gap-6">
              {FIELD_INDEX_DATA.elevations.map((elevation, idx) => (
                <div key={elevation} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                  <span className="text-zinc-300 font-semibold">{elevation}</span>
                  <span className="text-[10px] text-zinc-400">
                    {idx === 0 ? '高山稜線' : idx === 1 ? '森林界線' : '中海拔步道'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
