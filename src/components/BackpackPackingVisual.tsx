import React, { useState } from 'react';
import { Anchor, Zap, ShieldAlert, Sparkles, Check, ChevronRight } from 'lucide-react';
import { BACKPACK_PACKING_SYSTEM } from '../data/chapter06';

export const BackpackPackingVisual: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('03');

  const zoneColors: Record<string, { bg: string; border: string; badge: string; text: string }> = {
    '01': { bg: 'bg-sky-950/40', border: 'border-sky-500/50', badge: 'text-sky-400', text: '#38bdf8' },
    '02': { bg: 'bg-amber-950/40', border: 'border-amber-500/50', badge: 'text-amber-400', text: '#f59e0b' },
    '03': { bg: 'bg-rose-950/40', border: 'border-rose-500/60', badge: 'text-rose-400', text: '#fb7185' },
    '04': { bg: 'bg-emerald-950/40', border: 'border-emerald-500/50', badge: 'text-emerald-400', text: '#34d399' },
  };

  return (
    <section id="backpack-packing" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0d1116]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          VISUAL GUIDE 02 ｜ 視覺教材
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          背包重量配置
        </h2>
        <div className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-6">
          {BACKPACK_PACKING_SYSTEM.title}
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-10">
          {BACKPACK_PACKING_SYSTEM.description}
        </p>

        {/* 3 Core Principles Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {BACKPACK_PACKING_SYSTEM.principles.map((p) => (
            <div
              key={p.tag}
              className="p-5 rounded border border-zinc-800 bg-zinc-900/60 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-lg mb-3">
                  {p.tag}
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {p.title}
                </div>
                <div className="text-xs text-zinc-300 leading-relaxed">
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Cross-section Backpack Architecture */}
        <div className="p-6 sm:p-8 rounded-lg border border-zinc-800 bg-zinc-900/40">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800 text-xs font-mono text-zinc-400">
            <span>SCHEMATIC // INTERNAL PACK GRAVITY STACK</span>
            <span className="text-amber-400">CENTER OF GRAVITY OPTIMIZATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* SVG Visual Backpack Cross-section */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <svg
                viewBox="0 0 280 360"
                className="w-full max-w-xs"
                aria-label="登山背包重量配置示意圖"
                role="img"
              >
                <title>登山背包重量配置示意圖</title>

                {/* Hiker Spine & Center Line (Back Support) */}
                <rect x="25" y="60" width="16" height="260" rx="6" fill="#1c1917" stroke="#44403c" strokeWidth="1.5" />
                <text x="33" y="195" fill="#a8a29e" fontSize="10" textAnchor="middle" transform="rotate(-90 33 195)" fontFamily="sans-serif">
                  人體背部中軸 (貼背區)
                </text>

                {/* Backpack Outline */}
                <path
                  d="M50 40 C110 30 190 35 230 55 C250 100 255 240 235 310 C190 330 110 330 50 320 Z"
                  fill="#111418"
                  stroke="#334155"
                  strokeWidth="2"
                />

                {/* Layer 01: Top Lid (頂袋) */}
                <path
                  d="M50 40 C110 30 190 35 230 55 L225 105 L50 95 Z"
                  fill="#0369a1"
                  fillOpacity={selectedZone === '01' ? '0.6' : '0.25'}
                  stroke="#38bdf8"
                  strokeWidth={selectedZone === '01' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedZone('01')}
                />
                <text x="135" y="78" fill="#e0f2fe" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  01 頂袋（雨具/手套/頭燈）
                </text>

                {/* Layer 02: Upper (上層) */}
                <path
                  d="M50 95 L225 105 L230 170 L50 160 Z"
                  fill="#b45309"
                  fillOpacity={selectedZone === '02' ? '0.6' : '0.25'}
                  stroke="#f59e0b"
                  strokeWidth={selectedZone === '02' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedZone('02')}
                />
                <text x="135" y="135" fill="#fef3c7" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  02 上層（保暖衣/行動糧）
                </text>

                {/* Layer 03: Core (核心貼背重物) */}
                <path
                  d="M50 160 L230 170 L232 250 L50 240 Z"
                  fill="#e11d48"
                  fillOpacity={selectedZone === '03' ? '0.6' : '0.25'}
                  stroke="#fb7185"
                  strokeWidth={selectedZone === '03' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedZone('03')}
                />
                <text x="135" y="205" fill="#ffe4e6" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  03 核心重物貼背（水/糧食/爐具）
                </text>

                {/* Layer 04: Bottom (底層) */}
                <path
                  d="M50 240 L232 250 C220 305 170 325 50 320 Z"
                  fill="#059669"
                  fillOpacity={selectedZone === '04' ? '0.6' : '0.25'}
                  stroke="#34d399"
                  strokeWidth={selectedZone === '04' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedZone('04')}
                />
                <text x="135" y="280" fill="#d1fae5" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                  04 底層（睡袋/備品）
                </text>
              </svg>
              <div className="text-[11px] font-mono text-zinc-400 mt-2">
                點擊圖中層位查看收納細則
              </div>
            </div>

            {/* List of 4 Structure levels */}
            <div className="md:col-span-7 space-y-3">
              {BACKPACK_PACKING_SYSTEM.structure.map((item) => {
                const isSelected = selectedZone === item.level;
                const style = zoneColors[item.level];
                return (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => setSelectedZone(item.level)}
                    className={`w-full text-left p-4 rounded border transition-all min-h-[44px] ${
                      isSelected
                        ? `${style.bg} ${style.border} text-white shadow-lg`
                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800/40'
                    }`}
                    aria-label={`檢視第 ${item.level} 層結構：${item.name}`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-amber-400 font-bold">
                          {item.level}
                        </span>
                        {/* Semantic H3 */}
                        <h3 className="font-bold text-base text-zinc-100">
                          {item.level}｜{item.name}
                        </h3>
                      </div>
                      <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded bg-zinc-800/80 ${style.badge}`}>
                        {item.attribute}
                      </span>
                    </div>

                    <div className="text-sm text-zinc-200 font-medium mb-1">
                      裝備內容：{item.items}
                    </div>
                    <div className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
