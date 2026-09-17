import React, { useState } from 'react';
import { Layers, Droplets, Flame, Shield, ArrowRight, Info } from 'lucide-react';
import { THREE_LAYERS_SYSTEM } from '../data/chapter06';

export const ThreeLayersVisual: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layerIcons = [
    <Droplets key="base" className="w-5 h-5 text-sky-400" />,
    <Flame key="mid" className="w-5 h-5 text-amber-400" />,
    <Shield key="outer" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="three-layers" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0b0e11]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          VISUAL GUIDE 01 ｜ 視覺教材
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          三層穿衣系統
        </h2>
        <div className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-6">
          {THREE_LAYERS_SYSTEM.title}
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-10">
          {THREE_LAYERS_SYSTEM.description}
        </p>

        {/* Core Tagline Box */}
        <div className="p-4 sm:p-5 rounded border border-amber-500/30 bg-amber-950/20 text-amber-300 mb-10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-sm sm:text-base font-semibold tracking-wide">
              核心觀念：{THREE_LAYERS_SYSTEM.tagline}
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            DYNAMIC REGULATION SYSTEM
          </span>
        </div>

        {/* SVG/HTML Technical Schematic Diagram */}
        <div className="mb-12 p-6 sm:p-8 rounded-lg border border-zinc-800 bg-zinc-900/50 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800 text-xs font-mono text-zinc-400">
            <span>SCHEMATIC // THREE-LAYER THERMAL MANAGEMENT</span>
            <span className="text-amber-400">NON-RIGID FORMULA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SVG Visual Graphic */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <svg
                viewBox="0 0 380 280"
                className="w-full max-w-sm"
                aria-label="三層穿衣系統示意圖"
                role="img"
              >
                <title>三層穿衣系統示意圖</title>

                {/* Skin / Body Core */}
                <rect x="20" y="20" width="60" height="240" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
                <text x="50" y="145" fill="#a1a1aa" fontSize="12" textAnchor="middle" transform="rotate(-90 50 145)" fontFamily="sans-serif">
                  身體核心 (體溫 37°C)
                </text>

                {/* Layer 1: Base */}
                <rect
                  x="100"
                  y="35"
                  width="55"
                  height="210"
                  rx="6"
                  fill="#0369a1"
                  fillOpacity={activeLayer === 0 ? "0.4" : "0.2"}
                  stroke="#38bdf8"
                  strokeWidth={activeLayer === 0 ? "2.5" : "1.5"}
                />
                <text x="127" y="145" fill="#e0f2fe" fontSize="11" textAnchor="middle" transform="rotate(-90 127 145)" fontWeight="bold" fontFamily="sans-serif">
                  01 基層
                </text>

                {/* Layer 2: Mid */}
                <rect
                  x="175"
                  y="30"
                  width="65"
                  height="220"
                  rx="6"
                  fill="#b45309"
                  fillOpacity={activeLayer === 1 ? "0.4" : "0.2"}
                  stroke="#f59e0b"
                  strokeWidth={activeLayer === 1 ? "2.5" : "1.5"}
                />
                <text x="207" y="145" fill="#fef3c7" fontSize="11" textAnchor="middle" transform="rotate(-90 207 145)" fontWeight="bold" fontFamily="sans-serif">
                  02 中層
                </text>

                {/* Layer 3: Outer */}
                <rect
                  x="260"
                  y="20"
                  width="60"
                  height="240"
                  rx="6"
                  fill="#047857"
                  fillOpacity={activeLayer === 2 ? "0.4" : "0.2"}
                  stroke="#34d399"
                  strokeWidth={activeLayer === 2 ? "2.5" : "1.5"}
                />
                <text x="290" y="145" fill="#d1fae5" fontSize="11" textAnchor="middle" transform="rotate(-90 290 145)" fontWeight="bold" fontFamily="sans-serif">
                  03 外層
                </text>

                {/* Arrows and vectors */}
                {/* Moisture outward */}
                <path d="M75 70 L105 70" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M105 70 L170 70" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <text x="110" y="60" fill="#38bdf8" fontSize="10" fontFamily="sans-serif">汗氣排出</text>

                {/* Heat retention */}
                <circle cx="207" cy="210" r="14" fill="#f59e0b" fillOpacity="0.2" />
                <path d="M207 202 L207 218 M199 210 L215 210" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="207" y="235" fill="#f59e0b" fontSize="9" textAnchor="middle" fontFamily="sans-serif">靜止暖空氣</text>

                {/* Wind / Rain Block */}
                <path d="M360 80 L325 100" stroke="#94a3b8" strokeWidth="2" />
                <path d="M360 140 L325 145" stroke="#94a3b8" strokeWidth="2" />
                <path d="M360 200 L325 190" stroke="#94a3b8" strokeWidth="2" />
                <text x="350" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="sans-serif">風雨阻隔</text>
              </svg>
            </div>

            {/* Interactive Layer Detail View */}
            <div className="lg:col-span-6 space-y-3">
              {THREE_LAYERS_SYSTEM.layers.map((layer, index) => {
                const isCurrent = activeLayer === index;
                return (
                  <button
                    key={layer.number}
                    type="button"
                    onClick={() => setActiveLayer(index)}
                    className={`w-full text-left p-4 rounded border transition-all min-h-[44px] ${
                      isCurrent
                        ? 'border-amber-500 bg-zinc-800/90 text-white shadow-md'
                        : 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800/40'
                    }`}
                    aria-label={`檢視第 ${layer.number} 層：${layer.name} (${layer.role})`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-bold text-amber-400">
                          {layer.number}
                        </span>
                        {/* Semantic H3 */}
                        <h3 className="font-bold text-base text-zinc-100">
                          {layer.number} {layer.name}
                        </h3>
                        <span className="text-xs font-mono text-zinc-400">({layer.en})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800/80 text-amber-300 border border-amber-500/20">
                          {layer.role}
                        </span>
                        {layerIcons[index]}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-2">
                      {layer.detail}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clarification Box: Non-rigid formula */}
        <div className="p-5 rounded border border-zinc-800 bg-zinc-900/60 flex items-start gap-4">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-zinc-300 leading-relaxed">
            <div className="font-semibold text-white">
              重要原則說明
            </div>
            <p>
              {THREE_LAYERS_SYSTEM.note}
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              例如：劇烈爬升時僅著排汗基層甚至開襟散熱；抵達稜線風強無雨時套上防風外層或薄軟殼；停下定點休息則應「先加保暖中層」截留熱量，避免汗水蒸散發冷。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
