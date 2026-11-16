import React from 'react';
import { NewsItem } from '../types';
import { Sparkles } from 'lucide-react';

interface ThreeColumnNewsProps {
  macroNews: NewsItem[];
  minerasNews: NewsItem[];
  sentimientoNews: NewsItem[];
  onAnalyzeNews: (item: NewsItem) => void;
}

// Publisher Badge Helpers for authentic styling as in the image
const getPublisherBadge = (fuente: string) => {
  const f = fuente.toLowerCase();
  if (f.includes('nyt') || f.includes('new york times')) return { label: 'NYT', bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
  if (f.includes('bloomberg')) return { label: 'Bloomberg', bg: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30' };
  if (f.includes('wsj') || f.includes('wall street')) return { label: 'WSJ', bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' };
  if (f.includes('reuters')) return { label: 'Reuters', bg: 'bg-orange-500/20 text-orange-300 border-orange-500/30' };
  if (f.includes('mining')) return { label: 'Mining.com', bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
  if (f.includes('kitco')) return { label: 'Kitco News', bg: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
  if (f.includes('ft') || f.includes('financial times')) return { label: 'FT', bg: 'bg-rose-500/20 text-rose-300 border-rose-500/30' };
  if (f.includes('investing')) return { label: 'Investing.com', bg: 'bg-purple-500/20 text-purple-300 border-purple-500/30' };
  if (f.includes('zerohedge')) return { label: 'ZeroHedge', bg: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' };
  return { label: fuente, bg: 'bg-slate-800 text-amber-300 border-slate-700' };
};

export const ThreeColumnNews: React.FC<ThreeColumnNewsProps> = ({
  macroNews,
  minerasNews,
  sentimientoNews,
  onAnalyzeNews,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Column 1: ANÁLISIS MACRO & GLOBAL */}
      <div className="rounded-2xl p-4 border border-amber-500/30 bg-[#0d0f17] shadow-2xl flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-black text-amber-400 tracking-[1.5px] font-mono uppercase pb-2 mb-3 border-b border-amber-500/20">
            ANÁLISIS MACRO & GLOBAL
          </h3>

          <div className="space-y-2.5">
            {macroNews.map((item) => {
              const badge = getPublisherBadge(item.fuente);
              return (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-950/80 border border-white/5 hover:border-amber-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badge.bg}`}>
                      {badge.label}
                    </span>
                    <button
                      onClick={() => onAnalyzeNews(item)}
                      className="text-[10px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20"
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>IA</span>
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.titulo}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Column 2: ACTUALIDAD MINERAS & PRODUCCIÓN */}
      <div className="rounded-2xl p-4 border border-amber-500/30 bg-[#0d0f17] shadow-2xl flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-black text-amber-400 tracking-[1.5px] font-mono uppercase pb-2 mb-3 border-b border-amber-500/20">
            ACTUALIDAD MINERAS & PRODUCCIÓN
          </h3>

          <div className="space-y-2.5">
            {minerasNews.map((item) => {
              const badge = getPublisherBadge(item.fuente);
              return (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-950/80 border border-white/5 hover:border-amber-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badge.bg}`}>
                      {badge.label}
                    </span>
                    <button
                      onClick={() => onAnalyzeNews(item)}
                      className="text-[10px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20"
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>IA</span>
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.titulo}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Column 3: FLUJO DE MERCADO & SENTIMIENTO */}
      <div className="rounded-2xl p-4 border border-amber-500/30 bg-[#0d0f17] shadow-2xl flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-black text-amber-400 tracking-[1.5px] font-mono uppercase pb-2 mb-3 border-b border-amber-500/20">
            FLUJO DE MERCADO & SENTIMIENTO
          </h3>

          <div className="space-y-2.5">
            {sentimientoNews.map((item) => {
              const badge = getPublisherBadge(item.fuente);
              return (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-950/80 border border-white/5 hover:border-amber-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badge.bg}`}>
                      {badge.label}
                    </span>
                    <button
                      onClick={() => onAnalyzeNews(item)}
                      className="text-[10px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20"
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>IA</span>
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.titulo}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
