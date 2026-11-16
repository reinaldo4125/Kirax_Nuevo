import React, { useState, useEffect } from 'react';
import { EconomicEvent } from '../types';
import { Calendar, Clock, RefreshCw, AlertCircle } from 'lucide-react';
import { fetchEconomicCalendar, DEFAULT_ECONOMIC_EVENTS } from '../services/apiService';

export const EconomicCalendarTab: React.FC = () => {
  const [events, setEvents] = useState<EconomicEvent[]>(DEFAULT_ECONOMIC_EVENTS);
  const [loading, setLoading] = useState<boolean>(false);
  const [nyHourMinutes, setNyHourMinutes] = useState<string>('');

  const fetchCalendar = async () => {
    setLoading(true);
    try {
      const data = await fetchEconomicCalendar();
      if (Array.isArray(data) && data.length > 0) {
        setEvents(data);
      }
    } catch (_) {
      // Retain default events
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalendar();
    const update = () => {
      const now = new Date();
      const str = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      setNyHourMinutes(str);
    };
    update();
    const timer = setInterval(update, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-white font-mono uppercase tracking-wider">
              Calendario Económico Integrado (XAU/USD)
            </h1>
            <p className="text-xs text-slate-300">
              Eventos macro de alto impacto filtrados para scalpers de oro con datos de consenso y efecto técnico.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchCalendar}
            disabled={loading}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
            title="Recargar eventos"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800 font-mono text-xs">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">Hora NY Actual:</span>
            <span className="font-bold text-amber-400">{nyHourMinutes} NY</span>
          </div>
        </div>
      </div>

      {/* Events Table */}
      <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
              Catalizadores de Volatilidad Extrema para la Sesión
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              ({events.length} Eventos cargados desde /api/calendario)
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono font-bold">
            Zona de Riesgo para Scalping M1-M5
          </span>
        </div>

        <div className="space-y-3">
          {events.map((e) => (
            <div
              key={e.id}
              className="p-4 rounded-xl bg-slate-950/80 border border-white/5 hover:border-amber-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start md:items-center gap-3">
                <span
                  className="px-2.5 py-1 rounded font-mono font-extrabold text-[11px] shadow-sm shrink-0 mt-0.5 md:mt-0"
                  style={{ backgroundColor: `${e.color}20`, color: e.color, border: `1px solid ${e.color}40` }}
                >
                  {e.impacto}
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {e.dia && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-mono font-bold">
                        {e.dia}
                      </span>
                    )}
                    <h3 className="text-sm font-bold text-white font-sans">{e.evento}</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    <strong className="text-amber-300">Efecto Típico en Oro:</strong> {e.efectoOro}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs self-end md:self-center shrink-0">
                {e.previo && e.previo !== '-' && (
                  <div className="text-[10px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hidden sm:block">
                    <span>Prev: </span>
                    <strong className="text-slate-200">{e.previo}</strong>
                  </div>
                )}
                {e.consenso && e.consenso !== '-' && (
                  <div className="text-[10px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hidden sm:block">
                    <span>Cons: </span>
                    <strong className="text-amber-300">{e.consenso}</strong>
                  </div>
                )}
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 font-bold text-xs">
                  {e.horaNY} NY
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
