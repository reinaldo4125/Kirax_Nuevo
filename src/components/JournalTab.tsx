import React, { useState } from 'react';
import { MembershipTier, TradeJournalEntry, LeaderboardEntry } from '../types';
import { Plus, Trophy } from 'lucide-react';

interface JournalTabProps {
  membresia: MembershipTier;
  onUpgradeTier: () => void;
}

export const JournalTab: React.FC<JournalTabProps> = ({ membresia, onUpgradeTier }) => {
  const [entries, setEntries] = useState<TradeJournalEntry[]>([
    { id: 1, fecha: 'Hoy, 09:15', entrada: 'OB + COB', resultado: 'ganadora', pips: 42.5, emocion: 'Disciplinado', notas: 'Ruptura limpia en M1 tras declaración de la Fed' },
    { id: 2, fecha: 'Hoy, 08:30', entrada: 'FVG Liquidity', resultado: 'ganadora', pips: 28.0, emocion: 'Confiado', notas: 'Entrada en retroceso tras datos de empleo' },
  ]);

  const [entradaType, setEntradaType] = useState('OB + COB (Order Block)');
  const [resultado, setResultado] = useState<'ganadora' | 'perdedora' | 'breakeven'>('ganadora');
  const [pips, setPips] = useState<number>(35);
  const [emocion, setEmocion] = useState<'Disciplinado' | 'Ansioso' | 'Confiado' | 'Frustrado'>('Disciplinado');
  const [notas, setNotas] = useState('');

  const leaderboard: LeaderboardEntry[] = [
    { pos: 1, nombre: 'GoldMaster_M1', nivel: 'ELITE', winrate: 84.5, trades: 42, pips: 385.0 },
    { pos: 2, nombre: 'ScalperNY_XAU', nivel: 'PRO', winrate: 79.2, trades: 38, pips: 290.5 },
    { pos: 3, nombre: 'Trader_Pro', nivel: 'PRO', winrate: 75.0, trades: 24, pips: 215.0 },
    { pos: 4, nombre: 'KIRAX_Ninja', nivel: 'ELITE', winrate: 71.8, trades: 51, pips: 195.0 },
  ];

  const handleAddTrade = () => {
    if (!pips) return;
    const newEntry: TradeJournalEntry = {
      id: Date.now(),
      fecha: 'Ahora',
      entrada: entradaType,
      resultado,
      pips: Number(pips),
      emocion,
      notas: notas || 'Sin notas adicionales',
    };
    setEntries([newEntry, ...entries]);
    setNotas('');
  };

  const totalTrades = entries.length;
  const wins = entries.filter((e) => e.resultado === 'ganadora').length;
  const winRate = totalTrades > 0 ? ((wins / totalTrades) * 100).toFixed(1) : '0.0';
  const totalPips = entries.reduce((acc, curr) => acc + (curr.resultado === 'perdedora' ? -Math.abs(curr.pips) : curr.pips), 0);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl p-5 border border-amber-500/30 bg-[#0d0f17] text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
            Mi Win Rate Hoy
          </span>
          <span className="text-2xl font-black text-amber-400 font-mono">{winRate}%</span>
        </div>

        <div className="rounded-2xl p-5 border border-amber-500/30 bg-[#0d0f17] text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
            Total Trades Registrados
          </span>
          <span className="text-2xl font-black text-white font-mono">{totalTrades}</span>
        </div>

        <div className="rounded-2xl p-5 border border-amber-500/30 bg-[#0d0f17] text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
            Balance Total de Pips
          </span>
          <span className={`text-2xl font-black font-mono ${totalPips >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {totalPips >= 0 ? `+${totalPips.toFixed(1)}` : totalPips.toFixed(1)} Pips
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Col: Quick Logger & Journal History */}
        <div className="lg:col-span-7 space-y-5">
          {/* Quick Logger Card */}
          <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <span className="text-xs font-black text-amber-400 uppercase font-mono tracking-wider flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>Journal Rápido del Scalper</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400">Trading Log</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Modelo de Entrada</label>
                <select
                  value={entradaType}
                  onChange={(e) => setEntradaType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white"
                >
                  <option value="OB + COB (Order Block)">OB + COB (Order Block)</option>
                  <option value="FVG Liquidity Gap">FVG Liquidity Gap</option>
                  <option value="Breakout M1-M5">Breakout M1-M5</option>
                  <option value="Semaforo Reversal">Semaforo Reversal</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Resultado del Trade</label>
                <select
                  value={resultado}
                  onChange={(e) => setResultado(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white"
                >
                  <option value="ganadora">🟢 Ganadora</option>
                  <option value="perdedora">🔴 Perdedora</option>
                  <option value="breakeven">🟡 Breakeven</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Pips Ganados / Perdidos</label>
                <input
                  type="number"
                  value={pips}
                  onChange={(e) => setPips(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white font-mono"
                  placeholder="Ej. 35.5"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1">Estado Emocional</label>
                <select
                  value={emocion}
                  onChange={(e) => setEmocion(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white"
                >
                  <option value="Disciplinado">Disciplinado</option>
                  <option value="Ansioso">Ansioso</option>
                  <option value="Confiado">Confiado</option>
                  <option value="Frustrado">Frustrado</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 block mb-1">Notas Rápidas del Operador</label>
              <textarea
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
                placeholder="Ruptura de rango de apertura NY con volumen en COB..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white h-16"
              />
            </div>

            <button
              onClick={handleAddTrade}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              Guardar Entrada en Journal
            </button>
          </div>

          {/* History List */}
          <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase font-mono block">Histórico de Operaciones</span>
            <div className="space-y-2">
              {entries.map((e) => (
                <div key={e.id} className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{e.entrada}</span>
                    <span className="text-[10px] text-slate-400">{e.fecha} • {e.emocion}</span>
                  </div>
                  <div className="text-right font-mono">
                    <span className={`font-black ${e.resultado === 'ganadora' ? 'text-emerald-400' : e.resultado === 'perdedora' ? 'text-rose-400' : 'text-amber-400'}`}>
                      {e.resultado === 'ganadora' ? `+${e.pips} Pips` : `-${e.pips} Pips`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Leaderboard */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <span className="text-xs font-black text-amber-400 uppercase font-mono tracking-wider flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Top Scalpers Semanal</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">KIRAX Ranking</span>
            </div>

            <div className="space-y-2.5">
              {leaderboard.map((lb) => (
                <div key={lb.pos} className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                      lb.pos === 1 ? 'bg-amber-400 text-slate-950' : lb.pos === 2 ? 'bg-slate-300 text-slate-950' : 'bg-amber-700 text-white'
                    }`}>
                      #{lb.pos}
                    </span>
                    <div>
                      <span className="font-bold text-slate-200 block">{lb.nombre}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 font-mono">
                        {lb.nivel}
                      </span>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span className="text-xs font-black text-emerald-400 block">{lb.winrate}% Win Rate</span>
                    <span className="text-[10px] text-slate-400">+{lb.pips} Pips</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
