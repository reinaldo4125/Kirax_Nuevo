import React from 'react';
import { MembershipTier } from '../types';
import { Lock, Sparkles, LineChart, Shield, Zap, TrendingUp, Activity, Compass } from 'lucide-react';

interface PremiumPanelProps {
  membresia: MembershipTier;
  onUpgradeTier: () => void;
}

export const PremiumPanel: React.FC<PremiumPanelProps> = ({
  membresia,
  onUpgradeTier,
}) => {
  const isLocked = membresia === 'GRATIS';

  const marketData = [
    { symbol: 'XAU/USD (Oro)', price: '$2,748.50', change: '+1.42%', positive: true },
    { symbol: 'SPY (S&P 500)', price: '$582.10', change: '-0.35%', positive: false },
    { symbol: 'QQQ (Nasdaq 100)', price: '$494.30', change: '+0.15%', positive: true },
    { symbol: 'USOIL (Crudo)', price: '$71.80', change: '+0.88%', positive: true },
    { symbol: 'DXY (Índice Dólar)', price: '103.45', change: '-0.20%', positive: false },
  ];

  return (
    <section className="glass rounded-2xl p-6 border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <LineChart className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-extrabold text-white tracking-wide font-sans">
              Panel Pro
            </h2>
          </div>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Exclusivo Pro
          </span>
        </div>

        {/* Lock Overlay for Gratis Tier */}
        {isLocked && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md text-center border border-white/10 m-3 rounded-xl">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
              <Lock className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">
              Contenido Premium para Suscriptores
            </h3>
            <p className="text-xs text-slate-400 max-w-xs mb-5">
              Accede a cotizaciones de activos en tiempo real, radar de tendencias macro y medidores de volatilidad por IA.
            </p>
            <button
              onClick={onUpgradeTier}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Desbloquear Panel PRO</span>
            </button>
          </div>
        )}

        {/* Premium Content (Blurred when isLocked = true) */}
        <div className={`space-y-4 transition-all duration-300 ${isLocked ? 'blur-md pointer-events-none select-none opacity-40' : ''}`}>
          {/* Ticker List */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Cotizaciones en Vivo
            </span>
            <div className="grid grid-cols-1 gap-2">
              {marketData.map((item) => (
                <div
                  key={item.symbol}
                  className="p-3 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-between text-xs"
                >
                  <span className="font-semibold text-slate-200">{item.symbol}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-white font-medium">{item.price}</span>
                    <span
                      className={`font-mono text-[11px] px-1.5 py-0.5 rounded font-bold ${
                        item.positive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Macro Radar */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>Radar Macro Gemini</span>
              </span>
              <span className="text-[10px] text-slate-500">Sesión NY</span>
            </div>

            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Presión de Compra en Oro</span>
                  <span className="font-mono font-bold text-emerald-400">78%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '78%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Riesgo de Tasa Fed</span>
                  <span className="font-mono font-bold text-amber-400">62%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '62%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Volatilidad Tec (QQQ)</span>
                  <span className="font-mono font-bold text-cyan-400">45%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Key Advice */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed flex items-start gap-2.5">
            <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-300 mb-0.5">Estrategia Sugerida</span>
              Mantener posiciones defensivas en materias primas. Esperar ruptura clara en el S&P 500 antes de aumentar apalancamiento.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
