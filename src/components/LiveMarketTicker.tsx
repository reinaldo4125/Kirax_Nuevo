import React, { useState, useEffect } from 'react';
import { QuoteItem } from '../types';
import { fetchMarketQuotes } from '../services/apiService';

export const LiveMarketTicker: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteItem[]>([
    { symbol: 'XAU/USD', name: 'XAU/USD', price: '$2,685.50', change: '+0.84%', positive: true },
    { symbol: 'GOLD', name: 'Barrick Gold', price: '$19.45', change: '+1.32%', positive: true },
    { symbol: 'NEM', name: 'Newmont', price: '$44.20', change: '+1.65%', positive: true },
    { symbol: 'FNV', name: 'Franco-Nevada', price: '$138.80', change: '+0.95%', positive: true },
    { symbol: 'AEM', name: 'Agnico Eagle', price: '$68.40', change: '+1.92%', positive: true },
  ]);

  const loadQuotes = async () => {
    try {
      const data = await fetchMarketQuotes();
      if (data) {
        setQuotes([
          {
            symbol: 'XAU/USD',
            name: 'XAU/USD',
            price: data.xau_usd?.price || '$2,685.50',
            change: data.xau_usd?.change || '+0.84%',
            positive: data.xau_usd?.positive ?? true
          },
          {
            symbol: 'GOLD',
            name: 'Barrick Gold',
            price: data.gold_stock?.price || '$19.45',
            change: data.gold_stock?.change || '+1.32%',
            positive: data.gold_stock?.positive ?? true
          },
          {
            symbol: 'NEM',
            name: 'Newmont',
            price: data.nem?.price || '$44.20',
            change: data.nem?.change || '+1.65%',
            positive: data.nem?.positive ?? true
          },
          {
            symbol: 'FNV',
            name: 'Franco-Nevada',
            price: data.fnv?.price || '$138.80',
            change: data.fnv?.change || '+0.95%',
            positive: data.fnv?.positive ?? true
          },
          {
            symbol: 'AEM',
            name: 'Agnico Eagle',
            price: data.aem?.price || '$68.40',
            change: data.aem?.change || '+1.92%',
            positive: data.aem?.positive ?? true
          },
        ]);
      }
    } catch (_) {
      // Never throw unhandled rejection
    }
  };

  useEffect(() => {
    loadQuotes();
    const interval = setInterval(loadQuotes, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rounded-2xl p-4 border border-amber-500/30 bg-[#0d0f17] backdrop-blur-xl shadow-2xl h-full flex flex-col justify-between">
      <div>
        {/* Header matching exact image: EN VIVO: MERCADO & MINERAS */}
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 mb-3">
          <h2 className="text-xs font-black text-amber-400 tracking-[1.5px] font-mono uppercase">
            EN VIVO: MERCADO & MINERAS
          </h2>
        </div>

        {/* Exact Ticker Rows with Mini Green Sparklines */}
        <div className="space-y-2 font-mono">
          {quotes.map((q) => (
            <div
              key={q.symbol}
              className="p-2 px-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-between hover:border-amber-500/30 transition-all text-xs"
            >
              <div className="flex items-center gap-2">
                <div>
                  <span className="font-bold text-slate-100 block leading-tight">{q.name}</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">{q.symbol}</span>
                </div>
              </div>

              {/* Sparkline & Price + Change */}
              <div className="flex items-center gap-3">
                {/* SVG Mini Sparkline Curve */}
                <svg className={`w-12 h-5 fill-none ${q.positive ? 'stroke-emerald-400' : 'stroke-rose-400'}`} viewBox="0 0 50 20">
                  <path
                    d={q.positive ? "M 0 16 Q 10 12, 20 14 T 35 6 T 50 2" : "M 0 4 Q 10 8, 20 6 T 35 14 T 50 18"}
                    strokeWidth="2"
                  />
                </svg>

                <div className="text-right">
                  <span className="font-extrabold text-white block">{q.price}</span>
                  <span className={`text-[10px] font-bold ${q.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {q.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
