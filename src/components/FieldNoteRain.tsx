import React from 'react';
import { CloudRain, Compass, Bookmark } from 'lucide-react';
import { FIELD_NOTE_RAIN } from '../data/chapter06';

export const FieldNoteRain: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-b border-zinc-800/80 bg-[#090c0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-sm border-2 border-zinc-700/80 bg-zinc-900/90 relative overflow-hidden shadow-2xl">
          {/* Watermark / Contour accent */}
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none" aria-hidden="true">
            <CloudRain className="w-32 h-32 text-white" />
          </div>

          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-zinc-800 text-xs font-mono">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest">
              <Bookmark className="w-3.5 h-3.5" />
              <span>{FIELD_NOTE_RAIN.tag} ｜ {FIELD_NOTE_RAIN.subtag}</span>
            </div>
            <span className="text-zinc-400">AMAZON ALPINE CORPS MANUAL</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            {FIELD_NOTE_RAIN.title}
          </h3>

          <div className="p-4 sm:p-5 rounded bg-zinc-950/80 border border-zinc-800 text-amber-400 text-lg sm:text-xl font-bold font-mono tracking-wide">
            {FIELD_NOTE_RAIN.quote}
          </div>
        </div>
      </div>
    </section>
  );
};
