import React, { useState } from 'react';
import { 
  MODULE_2_METADATA, 
  MODULE_2_SECTIONS, 
  MODULE_2_EXAM_BANK 
} from '../data/module2Data';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  Brain, 
  ShieldAlert, 
  FileText, 
  Clock, 
  Play, 
  RotateCcw,
  Check,
  ChevronRight,
  Flame,
  Activity,
  Layers,
  Sparkles,
  Zap,
  Coffee,
  Power
} from 'lucide-react';

interface Module2ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module2ReaderModal: React.FC<Module2ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'ritual_entrada' | 'journal_template' | 'shutdown'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Interactive Entry Checklist State
  const [checklistChecks, setChecklistChecks] = useState<{ [key: string]: boolean }>({
    setupPlan: false,
    riskReward: false,
    confluencia: false,
    riesgoMax: false,
  });

  // Shutdown Ritual State
  const [shutdownDone, setShutdownDone] = useState<boolean>(false);
  const [shutdownNotes, setShutdownNotes] = useState<{ bien: string; mejorar: string }>({
    bien: '',
    mejorar: '',
  });

  if (!isOpen) return null;

  const currentSec = MODULE_2_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_2_SECTIONS[0];

  const allEntryChecksPassed = 
    checklistChecks.setupPlan && 
    checklistChecks.riskReward && 
    checklistChecks.confluencia && 
    checklistChecks.riesgoMax;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 2
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_2_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                Psicología II: Rutina y Disciplina del Scalper
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Tabs */}
            <div className="hidden md:flex items-center bg-slate-950 p-1 rounded-xl border border-white/10 font-mono text-xs">
              <button
                onClick={() => setActiveTab('secciones')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'secciones'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>10 Secciones</span>
              </button>

              <button
                onClick={() => setActiveTab('ritual_entrada')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'ritual_entrada'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Ritual de Entrada</span>
              </button>

              <button
                onClick={() => setActiveTab('journal_template')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'journal_template'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Plantilla Journal</span>
              </button>

              <button
                onClick={() => setActiveTab('shutdown')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'shutdown'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Power className="w-3.5 h-3.5" />
                <span>Ritual Apagado</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="md:hidden flex items-center justify-around bg-slate-950 p-2 border-b border-white/5 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('secciones')}
            className={`px-2 py-1 rounded ${activeTab === 'secciones' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Secciones
          </button>
          <button
            onClick={() => setActiveTab('ritual_entrada')}
            className={`px-2 py-1 rounded ${activeTab === 'ritual_entrada' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Checklist
          </button>
          <button
            onClick={() => setActiveTab('journal_template')}
            className={`px-2 py-1 rounded ${activeTab === 'journal_template' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Journal
          </button>
          <button
            onClick={() => setActiveTab('shutdown')}
            className={`px-2 py-1 rounded ${activeTab === 'shutdown' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Apagado
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {activeTab === 'secciones' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar Section Selector */}
              <div className="lg:col-span-1 space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Secciones del Módulo 2
                </span>
                {MODULE_2_SECTIONS.map((sec) => {
                  const isSelected = selectedSection === sec.seccion;
                  return (
                    <button
                      key={sec.seccion}
                      onClick={() => setSelectedSection(sec.seccion)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          : 'bg-slate-900/60 border-white/5 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="font-bold text-amber-400">Sección {sec.seccion}</span>
                      </div>
                      <span className="text-xs font-bold leading-tight line-clamp-1">{sec.titulo}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main Section Content */}
              <div className="lg:col-span-3 space-y-6 bg-slate-900/40 p-6 rounded-2xl border border-white/5">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-amber-400 font-bold">
                    SECCIÓN {currentSec.seccion} DE 10
                  </span>
                  <h1 className="text-xl font-extrabold text-white font-sans mt-0.5">
                    {currentSec.titulo}
                  </h1>
                </div>

                {currentSec.contenido.map((p, idx) => (
                  <p key={idx} className="text-xs text-slate-300 leading-relaxed font-sans">
                    {p}
                  </p>
                ))}

                {/* Checklists if present (e.g., Section 1) */}
                {currentSec.checklist && (
                  <div className="space-y-4 my-4">
                    {currentSec.checklist.map((chk, cIdx) => (
                      <div key={cIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <h4 className="text-xs font-bold text-amber-300 font-mono flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          <span>{chk.titulo}</span>
                        </h4>
                        <ul className="space-y-1.5 pl-2 text-xs text-slate-300 font-sans">
                          {chk.items.map((it, iIdx) => (
                            <li key={iIdx} className="flex items-center gap-2">
                              <span className="text-amber-400/80">•</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Table if present */}
                {currentSec.tabla && (
                  <div className="overflow-x-auto my-4 rounded-xl border border-slate-800">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-slate-950 text-amber-400 font-mono text-[11px]">
                        <tr>
                          {currentSec.tabla.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 border-b border-slate-800">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                        {currentSec.tabla.filas.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 text-slate-200">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Points list */}
                {currentSec.puntos && (
                  <div className="space-y-2 my-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    {currentSec.puntos.map((pt, ptIdx) => (
                      <p key={ptIdx} className="text-xs text-slate-300 leading-relaxed font-sans">
                        {pt}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'ritual_entrada' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Activity className="w-5 h-5 text-amber-400" />
                  <span>RITUAL DE ENTRADA A CADA TRADE (REGLA DE LAS 4 CONFIRMACIONES)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Antes de presionar el botón de compra o venta en tu terminal, debes marcar positivamente las 4 condiciones. Si una sola falla, NO entras.
                </p>
              </div>

              <div className="space-y-3 bg-slate-900/40 p-6 rounded-2xl border border-white/5">
                <label 
                  onClick={() => setChecklistChecks({...checklistChecks, setupPlan: !checklistChecks.setupPlan})}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    checklistChecks.setupPlan ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold font-sans">1. ¿El setup está en mi plan de trading?</span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${checklistChecks.setupPlan ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                    {checklistChecks.setupPlan ? 'SÍ' : 'NO'}
                  </div>
                </label>

                <label 
                  onClick={() => setChecklistChecks({...checklistChecks, riskReward: !checklistChecks.riskReward})}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    checklistChecks.riskReward ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold font-sans">2. ¿El R:R es mínimo 1:2?</span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${checklistChecks.riskReward ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                    {checklistChecks.riskReward ? 'SÍ' : 'NO'}
                  </div>
                </label>

                <label 
                  onClick={() => setChecklistChecks({...checklistChecks, confluencia: !checklistChecks.confluencia})}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    checklistChecks.confluencia ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold font-sans">3. ¿Hay confluencia de al menos 2 factores? (Nivel + Indicador/Vol)</span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${checklistChecks.confluencia ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                    {checklistChecks.confluencia ? 'SÍ' : 'NO'}
                  </div>
                </label>

                <label 
                  onClick={() => setChecklistChecks({...checklistChecks, riesgoMax: !checklistChecks.riesgoMax})}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    checklistChecks.riesgoMax ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold font-sans">4. ¿El tamaño de posición respeta mi riesgo del 1% máximo?</span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${checklistChecks.riesgoMax ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                    {checklistChecks.riesgoMax ? 'SÍ' : 'NO'}
                  </div>
                </label>

                <div className={`mt-6 p-4 rounded-xl border text-center font-mono font-bold text-xs transition-all ${
                  allEntryChecksPassed 
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-rose-500/10 border-rose-500/40 text-rose-400'
                }`}>
                  {allEntryChecksPassed 
                    ? '✓ LAS 4 CONDICIONES SE CUMPLEN: PUEDES EJECUTAR EL TRADE CON DISCIPLINA.' 
                    : '⚠ SI HAY UN SOLO "NO": NO TIENES PERMISO OPERATIVO PARA ENTRAR.'}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'journal_template' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-amber-400 font-mono flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>PLANTILLA KIRAX DE JOURNAL DIARIO</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Utiliza este esquema al finalizar cada sesión en tu bitácora personal. Mide tu desempeño en R y evalúa tus estados emocionales.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-slate-950 text-amber-400 font-mono text-[11px]">
                    <tr>
                      <th className="p-3 border-b border-slate-800">Campo</th>
                      <th className="p-3 border-b border-slate-800">Qué registrar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                    {MODULE_2_SECTIONS[4].tabla?.filas.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 text-amber-300 font-mono font-bold">{row[0]}</td>
                        <td className="p-3 text-slate-300">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'shutdown' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-3 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Power className="w-5 h-5 text-amber-400" />
                  <span>SHUTDOWN RITUAL (RITUAL DE APAGADO DIARIO)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Le comunica a tu cerebro que la jornada de trading terminó oficialmente, evitando rumiar pérdidas o mantenerse en hiperalerta fuera de horario.
                </p>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 space-y-4 text-xs">
                <ol className="space-y-3 text-slate-300 font-sans">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px]">1</span>
                    <span>Registra la última entrada del journal del día.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px]">2</span>
                    <span>Cierra TODAS las pestañas de trading y plataformas.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px]">3</span>
                    <span>Apaga el monitor de trading o cambia la PC a modo personal.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[10px]">4</span>
                    <span>Di en voz alta: <strong className="text-amber-300">"Sesión terminada"</strong> (Ancla verbal).</span>
                  </li>
                </ol>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <label className="block text-amber-300 font-bold font-mono text-[11px]">
                    5. Resumen mental final de cierre:
                  </label>
                  <input
                    type="text"
                    value={shutdownNotes.bien}
                    onChange={(e) => setShutdownNotes({ ...shutdownNotes, bien: e.target.value })}
                    placeholder="Hoy hice bien: (ej. Respeté mi stop loss sin dudar)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={shutdownNotes.mejorar}
                    onChange={(e) => setShutdownNotes({ ...shutdownNotes, mejorar: e.target.value })}
                    placeholder="Mañana mejoraré: (ej. Pausa de 15 minutos tras la primera pérdida)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <button
                  onClick={() => setShutdownDone(true)}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Power className="w-4 h-4" />
                  <span>DECLARAR SESIÓN OFICIALMENTE CERRADA</span>
                </button>

                {shutdownDone && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-xs text-emerald-300">
                    ✓ Ritual completado. Desconéctate del gráfico hasta la sesión pre-mercado de mañana.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
