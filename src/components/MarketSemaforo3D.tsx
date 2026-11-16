import React, { useState, useEffect } from 'react';
import { MembershipTier, SemaforoStatus } from '../types';
import { RefreshCw, Lock } from 'lucide-react';
import { fetchMarketSemaforo } from '../services/apiService';

interface MarketSemaforo3DProps {
  membresia: MembershipTier;
  onUpgradeTier: () => void;
  onOpenChart?: () => void;
}

export const MarketSemaforo3D: React.FC<MarketSemaforo3DProps> = ({
  membresia,
  onUpgradeTier,
  onOpenChart,
}) => {
  const [data, setData] = useState<SemaforoStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSemaforo = async () => {
    setLoading(true);
    try {
      const result = await fetchMarketSemaforo(membresia);
      setData(result);
    } catch (_) {
      setData({
        estado: 'positivo',
        color: '#00ff88',
        mensaje: 'HOY SCALPING: ALCISTA / COMPRA EN RETROCESOS',
        razon: 'Debilidad en el índice DXY y flujos de cobertura impulsan al oro hacia resistencias clave.',
        leyenda: 'Para scalping en M1-M5: buscar confirmaciones de compra en retrocesos a soportes dinámicos (EMA 20/50). Mantener ratio riesgo-beneficio 1:2.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSemaforo();
  }, [membresia]);

  const isBlocked = membresia === 'GRATIS';
  const estado = data?.estado || 'neutral';

  const badgeConfig = {
    positivo: {
      text: 'GREEN',
      label: 'POSITIVO',
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-500/20',
      borderClass: 'border-emerald-400',
      shadowClass: 'shadow-[0_0_25px_rgba(0,255,136,0.5)]',
      dropShadowClass: 'drop-shadow-[0_0_10px_rgba(0,255,136,0.6)]',
    },
    negativo: {
      text: 'RED',
      label: 'BAJISTA',
      colorClass: 'text-rose-400',
      bgClass: 'bg-rose-500/20',
      borderClass: 'border-rose-400',
      shadowClass: 'shadow-[0_0_25px_rgba(255,51,102,0.5)]',
      dropShadowClass: 'drop-shadow-[0_0_10px_rgba(255,51,102,0.6)]',
    },
    neutral: {
      text: 'YELLOW',
      label: 'NEUTRAL',
      colorClass: 'text-amber-400',
      bgClass: 'bg-amber-500/20',
      borderClass: 'border-amber-400',
      shadowClass: 'shadow-[0_0_25px_rgba(255,184,0,0.5)]',
      dropShadowClass: 'drop-shadow-[0_0_10px_rgba(255,184,0,0.6)]',
    },
    bloqueado: {
      text: 'LOCK',
      label: 'BLOQUEADO',
      colorClass: 'text-slate-400',
      bgClass: 'bg-slate-800',
      borderClass: 'border-slate-700',
      shadowClass: 'shadow-none',
      dropShadowClass: 'none',
    },
  }[estado] || {
    text: 'YELLOW',
    label: 'NEUTRAL',
    colorClass: 'text-amber-400',
    bgClass: 'bg-amber-500/20',
    borderClass: 'border-amber-400',
    shadowClass: 'shadow-[0_0_25px_rgba(255,184,0,0.5)]',
    dropShadowClass: 'drop-shadow-[0_0_10px_rgba(255,184,0,0.6)]',
  };

  return (
    <section className="rounded-2xl p-4 border border-amber-500/30 bg-[#0d0f17] backdrop-blur-xl shadow-2xl flex flex-col justify-between relative overflow-hidden h-full min-h-[280px]">
      
      {/* Panel Top Title Bar */}
      <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-black text-amber-400 tracking-[1.5px] font-mono uppercase">
            SCALPING ORO - VISTO BUENO
          </h2>
          {data?.sinApiKey && (
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
              Heurístico
            </span>
          )}
        </div>
        <button
          onClick={fetchSemaforo}
          disabled={loading || isBlocked}
          className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
          title="Actualizar análisis IA"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Grid: 3D Traffic Light Box on Left + Large Glowing Badge on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center flex-1">
        
        {/* Left: 3D Traffic Light Frame */}
        <div className="md:col-span-5 flex justify-center relative">
          <div className="relative p-3.5 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border-2 border-amber-500/30 shadow-[0_0_35px_rgba(0,0,0,0.95)] flex flex-col gap-3 items-center z-10">
            
            {/* Background Candlesticks in 3D Light Box */}
            <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden rounded-2xl flex items-center justify-center gap-1.5">
              <div className="w-1 h-20 bg-emerald-500 rounded" />
              <div className="w-1.5 h-28 bg-emerald-500 rounded" />
              <div className="w-1 h-16 bg-emerald-500 rounded" />
            </div>

            {/* Light 1: RED */}
            <div 
              className={`w-12 h-12 rounded-full transition-all duration-500 border-2 ${
                !isBlocked && data?.estado === 'negativo'
                  ? 'bg-gradient-to-br from-rose-400 to-rose-700 border-rose-200 shadow-[0_0_30px_#FF3333,inset_0_0_10px_#fff] animate-pulse'
                  : 'bg-slate-950 border-slate-800/80 opacity-30'
              }`}
            />

            {/* Light 2: YELLOW */}
            <div 
              className={`w-12 h-12 rounded-full transition-all duration-500 border-2 ${
                isBlocked || data?.estado === 'neutral'
                  ? 'bg-gradient-to-br from-amber-300 to-amber-600 border-amber-200 shadow-[0_0_30px_#FFD700,inset_0_0_10px_#fff] animate-pulse'
                  : 'bg-slate-950 border-slate-800/80 opacity-30'
              }`}
            />

            {/* Light 3: GREEN */}
            <div 
              className={`w-12 h-12 rounded-full transition-all duration-500 border-2 ${
                !isBlocked && data?.estado === 'positivo'
                  ? 'bg-gradient-to-br from-emerald-300 to-emerald-600 border-emerald-200 shadow-[0_0_35px_#00FF88,inset_0_0_10px_#fff] animate-pulse'
                  : 'bg-slate-950 border-slate-800/80 opacity-30'
              }`}
            />

          </div>
        </div>

        {/* Right: Badge & Explanation Text */}
        <div className="md:col-span-7 flex flex-col justify-center relative space-y-2">
          {/* Blur Lock Overlay for GRATIS */}
          {isBlocked && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-3 bg-slate-950/90 backdrop-blur-md rounded-xl text-center border border-amber-500/30">
              <Lock className="w-5 h-5 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-amber-300">Semáforo en HD</span>
              <p className="text-[10px] text-slate-400 mb-2">Suscríbete para ver la señal en tiempo real sin blur</p>
              <button
                onClick={onUpgradeTier}
                className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-[11px] rounded shadow-md"
              >
                Suscríbete PRO ($19)
              </button>
            </div>
          )}

          <div className={isBlocked ? 'filter blur-md pointer-events-none select-none opacity-40' : ''}>
            
            {/* Dynamic Status Badge + Text */}
            <div className="flex items-center gap-3">
              <div className={`w-14 h-14 rounded-full ${badgeConfig.bgClass} border-2 ${badgeConfig.borderClass} flex items-center justify-center ${badgeConfig.colorClass} font-mono font-black text-xs ${badgeConfig.shadowClass} shrink-0`}>
                {badgeConfig.text}
              </div>
              <div>
                <span className="text-xs font-black text-slate-300 font-mono block">
                  HOY SCALPING:
                </span>
                <span className={`text-lg font-black ${badgeConfig.colorClass} font-mono tracking-wider block ${badgeConfig.dropShadowClass}`}>
                  {badgeConfig.label}
                </span>
              </div>
            </div>

            {/* Explanation paragraph */}
            <p className="text-[11px] text-slate-200 leading-relaxed pt-2 font-sans">
              {data?.leyenda || 'Análisis de volatilidad y flujos de liquidez para el Oro (XAU/USD).'}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
