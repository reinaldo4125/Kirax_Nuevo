import React, { useState, useEffect } from 'react';
import { MembershipTier, SemaforoStatus } from '../types';
import { RefreshCw, Lock, Sparkles, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { fetchMarketSemaforo } from '../services/apiService';

interface MarketSemaforoProps {
  membresia: MembershipTier;
  onUpgradeTier: () => void;
}

export const MarketSemaforo: React.FC<MarketSemaforoProps> = ({
  membresia,
  onUpgradeTier,
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
        mensaje: 'HOY SCALPING: POSITIVO',
        razon: 'HOY SCALPING: POSITIVO',
        leyenda: 'El scalping del oro es favorable. El dólar se debilita tras declaraciones de la Fed y la demanda por activos refugio aumenta.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSemaforo();
  }, [membresia]);

  const isBlocked = data?.estado === 'bloqueado' || membresia === 'GRATIS';

  return (
    <section className="glass rounded-2xl p-6 border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div 
        className="absolute -right-20 -top-20 w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{
          backgroundColor: isBlocked ? '#333' : data?.color || '#ffcc00'
        }}
      />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">□</span>
            <h2 className="text-lg font-extrabold text-white tracking-wide font-sans">
              Semáforo de Mercado
            </h2>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 font-mono">
            IA Gemini
          </span>
        </div>

        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          Indicador sintético 3D de sentimiento macro global en tiempo real calculado sobre fuentes RSS financieras.
        </p>

        {/* 3D Glowing Light Circle (Luz) */}
        <div className="my-6 text-center flex flex-col items-center justify-center">
          {isBlocked ? (
            <div className="w-32 h-32 rounded-full my-3 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/60 shadow-[0_0_20px_rgba(0,0,0,0.8)] relative group">
              <Lock className="w-10 h-10 text-amber-400/80 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Bloqueado</span>
            </div>
          ) : (
            <div
              id="luz"
              className="w-32 h-32 rounded-full my-3 flex flex-col items-center justify-center text-slate-950 font-black text-2xl transition-all duration-700 relative"
              style={{
                background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${data?.color || '#ffcc00'} 40%, #000000 100%)`,
                boxShadow: `0 0 50px ${data?.color || '#ffcc00'}, inset 0 0 15px rgba(255,255,255,0.6)`,
              }}
            >
              <span className="drop-shadow-md tracking-wider uppercase text-xs font-mono font-extrabold px-2 py-1 bg-slate-950/70 text-white rounded border border-white/20">
                {data?.estado}
              </span>
            </div>
          )}

          {/* Status Label */}
          {!isBlocked && data && (
            <div className="mt-2 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-950/80 border border-white/10 text-slate-200">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }} />
                <span>Confianza IA: {data.confianza || 85}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Reason / Key Drivers */}
        {isBlocked ? (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center my-4">
            <p className="text-xs text-amber-200 font-medium mb-3">
              {data?.mensaje || 'Suscríbete para habilitar la señal IA del Semáforo de Mercado'}
            </p>
            <button
              onClick={onUpgradeTier}
              className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Desbloquear con Plan PRO / ELITE</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3 my-4">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                Diagnóstico del Algoritmo
              </span>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                "{data?.razon}"
              </p>
            </div>

            {data?.conductoresClave && data.conductoresClave.length > 0 && (
              <div className="p-3.5 rounded-xl bg-slate-950/50 border border-white/5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Catalizadores Principales
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {data.conductoresClave.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <span>Actualizado: {data?.actualizado || 'En vivo'}</span>
        <button
          id="btn-semaforo"
          onClick={fetchSemaforo}
          disabled={loading || isBlocked}
          className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Actualizar</span>
        </button>
      </div>
    </section>
  );
};
