import React, { useState } from 'react';
import {
  Shirt,
  Backpack,
  Tent,
  Flame,
  Compass,
  ShieldAlert,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  HelpCircle,
  Filter,
  Eye
} from 'lucide-react';
import { CATEGORIES_INFO, EQUIPMENT_DATABASE } from '../data/chapter06';
import { EquipmentCategory } from '../types';

interface EquipmentDatabaseProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
}

export const EquipmentDatabase: React.FC<EquipmentDatabaseProps> = ({
  currentCategory,
  onSelectCategory,
}) => {
  const [filter, setFilter] = useState<string>(currentCategory || 'all');
  const [showAllInOneList, setShowAllInOneList] = useState(false);

  // Sync if parent updates
  React.useEffect(() => {
    if (currentCategory && currentCategory !== 'all') {
      setFilter(currentCategory);
    }
  }, [currentCategory]);

  const categoryTabs: { id: string; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: '全部系統 (18 項)', icon: <Filter className="w-4 h-4" /> },
    { id: 'clothing', label: '衣著系統', icon: <Shirt className="w-4 h-4 text-sky-400" /> },
    { id: 'backpack', label: '背包系統', icon: <Backpack className="w-4 h-4 text-amber-400" /> },
    { id: 'camping', label: '露營系統', icon: <Tent className="w-4 h-4 text-emerald-400" /> },
    { id: 'cooking', label: '炊事系統', icon: <Flame className="w-4 h-4 text-orange-400" /> },
    { id: 'navigation', label: '導航系統', icon: <Compass className="w-4 h-4 text-cyan-400" /> },
    { id: 'safety', label: '安全系統', icon: <ShieldAlert className="w-4 h-4 text-rose-400" /> },
  ];

  return (
    <section id="equipment-database" className="py-16 sm:py-24 border-b border-zinc-800/80 bg-[#0d1216]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono tracking-widest text-amber-500 font-bold uppercase mb-2">
          DATABASE // 裝備分類資料庫
        </div>

        {/* Semantic H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
          裝備分類資料庫
        </h2>

        <div className="text-xl sm:text-2xl font-semibold text-zinc-200 mb-4">
          不是推薦清單，是功能判讀資料庫。
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-4">
          依分類檢視每項裝備該處理的需求、選擇時該確認的條件，以及在山上最常被忽略的使用錯誤。
        </p>

        {/* Mandatory Explicit Statement from user prompt */}
        <div className="inline-block p-3 px-4 rounded bg-zinc-900 border border-zinc-700/80 text-amber-400 font-mono text-xs sm:text-sm font-semibold mb-10">
          沒有品牌比較，只有可用於自己的判斷問題。
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-zinc-800" role="tablist" aria-label="裝備系統分類切換">
          {categoryTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setFilter(tab.id);
                  onSelectCategory(tab.id);
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-md'
                    : 'bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
                aria-label={`切換分類：${tab.label}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 
          CRITICAL CRAWLER / ACCESSIBILITY ARCHITECTURE:
          All 6 systems and all 18 items exist fully in the DOM!
          When a filter is active, non-matching systems are either marked or visually filtered with CSS, 
          ensuring Googlebot, screen readers, and text crawlers parse all 18 items with complete text!
        */}
        <div className="space-y-16">
          {CATEGORIES_INFO.map((category) => {
            const isVisible = filter === 'all' || filter === category.id;
            const categoryItems = EQUIPMENT_DATABASE.filter((item) => item.system === category.id);

            return (
              <div
                key={category.id}
                id={`db-${category.id}`}
                className={`transition-opacity duration-300 ${
                  isVisible ? 'block' : 'hidden'
                }`}
                aria-hidden={!isVisible}
              >
                {/* System Header */}
                <div className="flex flex-wrap items-end justify-between gap-4 pb-4 mb-6 border-b border-zinc-800">
                  <div>
                    <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">
                      {category.enName}
                    </span>
                    {/* Semantic H3 */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-zinc-300 font-mono bg-zinc-900/90 px-3 py-1.5 rounded border border-zinc-800">
                    系統職責：{category.tagline}
                  </div>
                </div>

                {/* System 3 Core Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {categoryItems.map((item) => (
                    <article
                      key={item.id}
                      className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        {/* Item Order & Name */}
                        <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-zinc-800/80">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                            {item.order}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">
                            FUNCTIONAL SPEC
                          </span>
                        </div>

                        {/* Semantic H4 */}
                        <h4 className="text-lg font-bold text-white mb-4">
                          {item.order}｜{item.name}
                        </h4>

                        {/* 用途 */}
                        <div className="mb-4">
                          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>用途</span>
                          </div>
                          <p className="text-sm text-zinc-300 leading-relaxed">
                            {item.purpose}
                          </p>
                        </div>

                        {/* 選擇方式 */}
                        <div className="mb-4">
                          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>選擇方式</span>
                          </div>
                          <p className="text-sm text-zinc-300 leading-relaxed">
                            {item.selection}
                          </p>
                        </div>

                        {/* 使用技巧 */}
                        <div className="mb-4">
                          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>使用技巧</span>
                          </div>
                          <p className="text-sm text-zinc-300 leading-relaxed">
                            {item.tips}
                          </p>
                        </div>
                      </div>

                      {/* 常見錯誤 */}
                      <div className="pt-4 mt-4 border-t border-zinc-800/80 bg-rose-950/20 -mx-6 -mb-6 p-4 rounded-b-lg border-t border-rose-900/30">
                        <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                          <span>常見錯誤</span>
                        </div>
                        <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed">
                          {item.commonMistakes}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary semantic fallback table for non-JS / search bot indexing */}
        <div className="sr-only" aria-hidden="false">
          <h4>裝備完整規格文字索引 (搜尋引擎可讀)</h4>
          <ul>
            {EQUIPMENT_DATABASE.map((item) => (
              <li key={`sr-${item.id}`}>
                <h5>{item.systemName} - {item.name}</h5>
                <p>用途：{item.purpose}</p>
                <p>選擇方式：{item.selection}</p>
                <p>使用技巧：{item.tips}</p>
                <p>常見錯誤：{item.commonMistakes}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
