import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Square,
  RotateCcw,
  ShieldCheck,
  AlertCircle,
  Filter,
  CheckCircle2,
  HardDrive
} from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/chapter06';
import { EquipmentCategory } from '../types';

interface PreflightChecklistProps {
  onChecklistChange?: (completedCount: number, totalCount: number) => void;
}

const STORAGE_KEY = 'alpine_chapter06_checklist_v1';

export const PreflightChecklist: React.FC<PreflightChecklistProps> = ({ onChecklistChange }) => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed === 'object' && parsed !== null) {
          setCheckedIds(parsed);
        }
      }
    } catch (e) {
      console.warn('Could not load checklist from localStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when checkedIds change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch (e) {
      console.warn('Could not save checklist to localStorage', e);
    }

    const completed = CHECKLIST_ITEMS.filter((item) => !!checkedIds[item.id]).length;
    if (onChecklistChange) {
      onChecklistChange(completed, CHECKLIST_ITEMS.length);
    }
  }, [checkedIds, isLoaded, onChecklistChange]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const clearAll = () => {
    if (window.confirm('確定要清除所有勾選項目，重新開始檢核嗎？')) {
      setCheckedIds({});
    }
  };

  const totalCount = CHECKLIST_ITEMS.length;
  const completedCount = CHECKLIST_ITEMS.filter((item) => !!checkedIds[item.id]).length;
  const pendingCount = totalCount - completedCount;
  const percentage = Math.round((completedCount / totalCount) * 100);

  const filterCategories = [
    { id: 'all', label: '全部' },
    { id: 'clothing', label: '衣著' },
    { id: 'backpack', label: '背包' },
    { id: 'camping', label: '露營' },
    { id: 'cooking', label: '炊事' },
    { id: 'navigation', label: '導航' },
    { id: 'safety', label: '安全' },
  ];

  return (
    <section id="preflight-checklist" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0c1014]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          READY STATUS // 行前確認
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          出發前裝備 CHECKLIST
        </h2>

        <div className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-4">
          出發前 10 分鐘，替風險留下一個可被發現的空位。
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
          以分類檢查每一個系統，避免匆忙裝包時只確認「有沒有帶」，卻沒有確認它是否完整、可用、可被找到。
        </p>

        {/* READY STATUS Dashboard */}
        <div className="p-6 sm:p-8 rounded-lg border border-zinc-800 bg-zinc-900/80 mb-10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
                READY STATUS
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-white mt-1">
                {completedCount} / {totalCount}
              </div>
            </div>

            <div className="text-right">
              <div className="text-xl sm:text-2xl font-mono font-bold text-amber-400">
                完成 {percentage}%
              </div>
              <div className="text-xs text-zinc-300 font-mono mt-1">
                尚有 <strong className="text-zinc-100">{pendingCount}</strong> 項待確認
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden mb-6" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} aria-label="裝備檢核進度條">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Status Message & Storage Notice */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              {percentage === 100 ? (
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  15 項關鍵系統檢核已全數完成，確認出發！
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  點擊各項目方塊進行行前功能與配置確認。
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded">
              <HardDrive className="w-3.5 h-3.5 text-zinc-400" />
              <span>勾選狀態僅保留在此裝置。</span>
            </div>
          </div>
        </div>

        {/* Filter Buttons & Reset Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="檢核清單分類篩選">
            {filterCategories.map((cat) => {
              const isSelected = selectedFilter === cat.id;
              const countInCat =
                cat.id === 'all'
                  ? totalCount
                  : CHECKLIST_ITEMS.filter((i) => i.category === cat.id).length;
              const completedInCat =
                cat.id === 'all'
                  ? completedCount
                  : CHECKLIST_ITEMS.filter(
                      (i) => i.category === cat.id && !!checkedIds[i.id]
                    ).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-3 py-2 rounded-sm text-xs font-mono font-medium transition-all min-h-[44px] flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                  aria-label={`篩選 ${cat.label} 類別 (${completedInCat}/${countInCat})`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-80">
                    ({completedInCat}/{countInCat})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reset button */}
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-zinc-700 bg-zinc-900 hover:bg-rose-950/30 hover:border-rose-700/60 text-zinc-300 hover:text-rose-200 text-xs font-mono transition-colors min-h-[44px]"
            aria-label="清除勾選，重新檢查"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>清除勾選，重新檢查</span>
          </button>
        </div>

        {/* 15 Checklist Items Grid (All 15 permanently in DOM!) */}
        <div className="space-y-3" role="list" aria-label="15項裝備檢核清單">
          {CHECKLIST_ITEMS.map((item, index) => {
            const isChecked = !!checkedIds[item.id];
            const isVisible = selectedFilter === 'all' || selectedFilter === item.category;

            return (
              <div
                key={item.id}
                role="listitem"
                className={`transition-opacity ${isVisible ? 'block' : 'hidden'}`}
              >
                <div
                  onClick={() => toggleItem(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleItem(item.id);
                    }
                  }}
                  tabIndex={0}
                  role="checkbox"
                  aria-checked={isChecked}
                  className={`w-full p-4 sm:p-5 rounded border transition-all text-left flex items-start gap-4 cursor-pointer min-h-[56px] focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    isChecked
                      ? 'border-emerald-500/50 bg-emerald-950/20 text-zinc-200'
                      : 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800/50'
                  }`}
                  aria-label={`${index + 1}. ${item.title}`}
                >
                  {/* Checkbox Icon */}
                  <div className="pt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Square className="w-5 h-5 text-zinc-500 hover:text-zinc-300" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 font-bold text-amber-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300">
                        {item.categoryName}
                      </span>
                      <span className={`text-sm sm:text-base font-bold ${isChecked ? 'line-through text-zinc-400' : 'text-white'}`}>
                        {item.title}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-0.5">
                      {item.detail}
                    </div>
                  </div>

                  {/* Status Tag */}
                  <div className="shrink-0 pt-0.5">
                    {isChecked ? (
                      <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/50">
                        已確認
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-800/50">
                        待確認
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
