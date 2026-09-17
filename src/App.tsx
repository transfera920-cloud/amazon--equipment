import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChapterCore } from './components/ChapterCore';
import { ThreeLayersVisual } from './components/ThreeLayersVisual';
import { BackpackPackingVisual } from './components/BackpackPackingVisual';
import { SixSystemsOverview } from './components/SixSystemsOverview';
import { EquipmentDatabase } from './components/EquipmentDatabase';
import { TeachingUnits } from './components/TeachingUnits';
import { FailureCheckVisual } from './components/FailureCheckVisual';
import { FieldNoteRain } from './components/FieldNoteRain';
import { PreflightChecklist } from './components/PreflightChecklist';
import { Footer } from './components/Footer';

export default function App() {
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(15);
  const [selectedSystemCategory, setSelectedSystemCategory] = useState<string>('all');

  const handleChecklistChange = useCallback((completed: number, total: number) => {
    setCompletedCount(completed);
    setTotalCount(total);
  }, []);

  const handleSelectSystem = useCallback((systemId: string) => {
    setSelectedSystemCategory(systemId);
    const targetElement = document.getElementById('equipment-database');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0e11] text-[#e2e8f0] flex flex-col font-sans selection:bg-amber-500/25 selection:text-white">
      {/* Editorial Chapter Navigation Bar */}
      <Navbar completedCount={completedCount} totalCount={totalCount} />

      {/* Main Semantic Content for Chapter 06 */}
      <main id="main-content" className="flex-1">
        {/* Section V & VI: Hero & Field Index */}
        <Hero />

        {/* Section VII: 本章核心 */}
        <ChapterCore />

        {/* Section VIII: 視覺教材 01 ｜ 三層穿衣系統 */}
        <ThreeLayersVisual />

        {/* Section IX: 視覺教材 02 ｜ 背包重量配置 */}
        <BackpackPackingVisual />

        {/* Section X: 視覺教材 03 ｜ 六大裝備系統 */}
        <SixSystemsOverview onSelectSystem={handleSelectSystem} />

        {/* Section XI ~ XVII: 裝備分類資料庫 (18項功能判讀) */}
        <EquipmentDatabase
          currentCategory={selectedSystemCategory}
          onSelectCategory={setSelectedSystemCategory}
        />

        {/* Section XVIII: COURSE 06 ｜ 十個教學單元 */}
        <TeachingUnits />

        {/* Section XIX: FAILURE / CHECK ｜ 裝備失效風險流程 */}
        <FailureCheckVisual />

        {/* Section XX: FIELD NOTE ｜ 雨天與停留 */}
        <FieldNoteRain />

        {/* Section XXI & XXII: 出發前裝備 CHECKLIST (15項實用檢核) */}
        <PreflightChecklist onChecklistChange={handleChecklistChange} />
      </main>

      {/* Section XXIII ~ End: Official Editorial Footer */}
      <Footer />
    </div>
  );
}
