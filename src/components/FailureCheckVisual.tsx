import React from 'react';
import { ArrowDown, AlertTriangle, ShieldCheck, RefreshCw, XCircle } from 'lucide-react';
import { FAILURE_CHECK_SYSTEM } from '../data/chapter06';

export const FailureCheckVisual: React.FC = () => {
  return (
    <section id="failure-check" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0d1217]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          {FAILURE_CHECK_SYSTEM.headerTag} ｜ 失效流程
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          裝備失效風險
        </h2>

        <div className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-6">
          {FAILURE_CHECK_SYSTEM.title}
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-12">
          {FAILURE_CHECK_SYSTEM.description}
        </p>

        {/* 5-Phase Sequence Flow Chart */}
        <div className="p-6 sm:p-8 rounded-lg border border-zinc-800 bg-zinc-900/50 mb-10">
          <div className="text-xs font-mono text-zinc-400 mb-6 flex items-center justify-between">
            <span>CHRONOLOGICAL FAILURE PREVENTION PIPELINE</span>
            <span className="text-amber-500">STAGE 01 ~ 05</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {FAILURE_CHECK_SYSTEM.phases.map((phase, idx) => (
              <React.Fragment key={phase.step}>
                <div className="p-4 sm:p-5 rounded border border-zinc-700/80 bg-zinc-800/70 flex items-center justify-between gap-4 shadow-sm hover:border-amber-500/60 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono font-bold text-sm text-amber-400 shrink-0">
                      {phase.step}
                    </span>
                    <div>
                      {/* Semantic H3 */}
                      <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                        {phase.step}｜{phase.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-zinc-300">
                        {phase.description}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 shrink-0 hidden sm:inline">
                    PHASE {phase.step}
                  </span>
                </div>

                {idx < FAILURE_CHECK_SYSTEM.phases.length - 1 && (
                  <div className="flex justify-center my-1" aria-hidden="true">
                    <ArrowDown className="w-4 h-4 text-amber-500/80" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Warning Callout Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Warning */}
          <div className="p-6 rounded-lg border border-rose-900/50 bg-rose-950/20">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>連鎖風險警示</span>
            </div>
            <blockquote className="text-sm sm:text-base text-rose-200/90 leading-relaxed font-medium">
              若跳過檢查或忽略限制：
              <br />
              <strong className="text-rose-100 font-bold">
                小故障會在低溫、降雨、疲勞或延誤中被放大。
              </strong>
            </blockquote>
          </div>

          {/* Emergency Procedure */}
          <div className="p-6 rounded-lg border border-amber-500/50 bg-amber-950/25">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>遇到異常應處原則</span>
            </div>
            <div className="text-sm sm:text-base text-zinc-100 leading-relaxed font-semibold">
              先停止依賴失效裝備，
              <br />
              <strong className="text-amber-400 font-bold">
                再切換備援與撤退判斷。
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
