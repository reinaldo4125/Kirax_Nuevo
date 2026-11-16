import React, { useState } from 'react';
import { 
  MODULE_8_METADATA, 
  MODULE_8_SECTIONS 
} from '../data/module8Data';
import { 
  X, 
  BookOpen, 
  Sliders, 
  Target, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  TrendingUp, 
  Activity, 
  Sparkles,
  BarChart3,
  Clock,
  Crosshair,
  Award
} from 'lucide-react';

interface Module8ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module8ReaderModal: React.FC<Module8ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'configurator' | 'setups' | 'checklist'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Interactive KIRAX Layers Configurator
  const [layerVwap, setLayerVwap] = useState<boolean>(true);
  const [layerLiquidity, setLayerLiquidity] = useState<boolean>(true);
  const [layerSignal, setLayerSignal] = useState<boolean>(true);
  const [layerCandle, setLayerCandle] = useState<boolean>(false);
  const [layerBookmap, setLayerBookmap] = useState<boolean>(true);

  // Master Setups Inspector
  const [selectedSetup, setSelectedSetup] = useState<'rebote' | 'ruptura' | 'sweep'>('rebote');

  // Interactive Checklist (6 Questions)
  const [chk3Confluences, setChk3Confluences] = useState<boolean>(false);
  const [chkVwap, setChkVwap] = useState<boolean>(false);
  const [chkBookmap, setChkBookmap] = useState<boolean>(false);
  const [chkRisk, setChkRisk] = useState<boolean>(false);
  const [chkRatio, setChkRatio] = useState<boolean>(false);
  const [chkEmotion, setChkEmotion] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSec = MODULE_8_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_8_SECTIONS[0];

  // Calculate active layers for configurator
  const activeLayersCount = [layerVwap, layerLiquidity, layerSignal, layerCandle, layerBookmap].filter(Boolean).length;

  // Calculate checklist status
  const all6Passed = chk3Confluences && chkVwap && chkBookmap && chkRisk && chkRatio && chkEmotion;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400/20" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 8
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_8_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                KIRAX Indicator: Tu Producto Estrella
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Navigation Tabs */}
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
                onClick={() => setActiveTab('configurator')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'configurator'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Simulador de Capas</span>
              </button>

              <button
                onClick={() => setActiveTab('setups')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'setups'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>3 Setups Maestros</span>
              </button>

              <button
                onClick={() => setActiveTab('checklist')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'checklist'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Checklist Operador</span>
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

        {/* Mobile Navigation Switcher */}
        <div className="md:hidden flex items-center justify-around bg-slate-950 p-2 border-b border-white/5 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('secciones')}
            className={`px-2 py-1 rounded ${activeTab === 'secciones' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Secciones
          </button>
          <button
            onClick={() => setActiveTab('configurator')}
            className={`px-2 py-1 rounded ${activeTab === 'configurator' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Simulador
          </button>
          <button
            onClick={() => setActiveTab('setups')}
            className={`px-2 py-1 rounded ${activeTab === 'setups' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Setups
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-2 py-1 rounded ${activeTab === 'checklist' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Checklist
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {activeTab === 'secciones' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar Section Selector */}
              <div className="lg:col-span-1 space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Secciones del Módulo 8
                </span>
                {MODULE_8_SECTIONS.map((sec) => {
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
                  {currentSec.subtitulo && (
                    <p className="text-xs text-amber-400/80 font-mono mt-1 font-semibold">
                      {currentSec.subtitulo}
                    </p>
                  )}
                </div>

                {currentSec.contenido.map((p, idx) => (
                  <p key={idx} className="text-xs text-slate-300 leading-relaxed font-sans">
                    {p}
                  </p>
                ))}

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

          {activeTab === 'configurator' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Sliders className="w-5 h-5 text-amber-400" />
                  <span>SIMULADOR DE CONFLUENCIA Y CAPAS DEL KIRAX 3D</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Activa o desactiva las capas institucionales para simular la fuerza de confluencia de una entrada en tiempo real.
                </p>
              </div>

              {/* Layers Selector Switches */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${layerVwap ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="font-bold text-amber-400 block">Capa 1: VWAP + Bandas</span>
                      <span className="text-[11px] text-slate-400">Alineación con el precio promedio ponderado</span>
                    </div>
                  </div>
                  <input type="checkbox" checked={layerVwap} onChange={(e) => setLayerVwap(e.target.checked)} className="accent-amber-500 w-4 h-4" />
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${layerLiquidity ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="font-bold text-amber-400 block">Capa 2: Zonas de Liquidez</span>
                      <span className="text-[11px] text-slate-400">Soportes y Resistencias institucionales</span>
                    </div>
                  </div>
                  <input type="checkbox" checked={layerLiquidity} onChange={(e) => setLayerLiquidity(e.target.checked)} className="accent-amber-500 w-4 h-4" />
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${layerSignal ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                    <div>
                      <span className="font-bold text-amber-400 block">Capa 3: Señal de Entrada KIRAX</span>
                      <span className="text-[11px] text-slate-400">Triángulo de gatillo confirmado al cierre</span>
                    </div>
                  </div>
                  <input type="checkbox" checked={layerSignal} onChange={(e) => setLayerSignal(e.target.checked)} className="accent-amber-500 w-4 h-4" />
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${layerCandle ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="font-bold text-amber-400 block">Capa 4: Contador de Velas</span>
                      <span className="text-[11px] text-slate-400">Fase temporal favorable de la sesión</span>
                    </div>
                  </div>
                  <input type="checkbox" checked={layerCandle} onChange={(e) => setLayerCandle(e.target.checked)} className="accent-amber-500 w-4 h-4" />
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all md:col-span-2 ${layerBookmap ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`}>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="font-bold text-amber-400 block">Capa 5: Confirmación de Bookmap (Order Flow)</span>
                      <span className="text-[11px] text-slate-400">Absorción en Volume Dots, Iceberg o Delta CVD respaldando</span>
                    </div>
                  </div>
                  <input type="checkbox" checked={layerBookmap} onChange={(e) => setLayerBookmap(e.target.checked)} className="accent-amber-500 w-4 h-4" />
                </label>
              </div>

              {/* Confluence Meter Bar */}
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">NIVEL DE CONFLUENCIA ACTIVO:</span>
                  <span className="font-bold text-amber-400 text-sm">{activeLayersCount} / 5 CAPAS ALINEADAS</span>
                </div>

                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      activeLayersCount >= 4
                        ? 'bg-gradient-to-r from-amber-500 to-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                        : activeLayersCount === 3
                        ? 'bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                        : 'bg-gradient-to-r from-rose-600 to-rose-400'
                    }`}
                    style={{ width: `${(activeLayersCount / 5) * 100}%` }}
                  />
                </div>

                {/* Grade Result */}
                <div className={`p-4 rounded-xl border text-center font-mono text-xs font-bold transition-all ${
                  activeLayersCount >= 4
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    : activeLayersCount === 3
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                }`}>
                  {activeLayersCount >= 4 && (
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                      <span>🎯 OPORTUNIDAD CALIDAD A+ (MAXIMA CONFLUENCIA INSTITUCIONAL) — DISPARO FRANCOTIRADOR PERMITIDO</span>
                    </div>
                  )}
                  {activeLayersCount === 3 && (
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                      <span>✅ OPORTUNIDAD VÁLIDA (3 CONFLUENCIAS CUMPLIDAS) — EJECUCIÓN CON LOTE NORMAL</span>
                    </div>
                  )}
                  {activeLayersCount < 3 && (
                    <div className="flex items-center justify-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-rose-400" />
                      <span>🛑 ENTRADA INVALIDADA (MENOS DE 3 CONFLUENCIAS) — SEÑAL DE RUIDO, NO OPERAR</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'setups' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Target className="w-5 h-5 text-amber-400" />
                  <span>LOS 3 SETUPS MAESTROS OPERATIVOS DE KIRAX</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Las 3 estructuras de alta probabilidad optimizadas para scalping en Oro (XAUUSD).
                </p>
              </div>

              {/* Setup Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                {[
                  { id: 'rebote', label: 'Setup 1: Rebote en VWAP' },
                  { id: 'ruptura', label: 'Setup 2: Ruptura (Pullback)' },
                  { id: 'sweep', label: 'Setup 3: Caza de Stops (Sweep)' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSetup(s.id as any)}
                    className={`p-3 rounded-xl border font-bold text-center transition-all ${
                      selectedSetup === s.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Selected Setup Details */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 space-y-4 font-sans text-xs text-slate-300">
                {selectedSetup === 'rebote' && (
                  <div className="space-y-3">
                    <span className="font-mono text-amber-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      SETUP 1: REBOTE EN VWAP CON CONFIRMACIÓN KIRAX
                    </span>
                    <p className="leading-relaxed">
                      Estrategia defensiva de tendencia. Aprovecha el VWAP diario como imán dinámico y soporte/resistencia institucional.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-amber-400 font-bold block mb-1">Gatillo KIRAX</span>
                        <span>Precio testea VWAP + Aparece triángulo de reversión al cierre de vela.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-amber-400 font-bold block mb-1">Confirmación Bookmap</span>
                        <span>Muro de Bids/Asks en el VWAP + Absorción activa en Volume Dots.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-amber-400 font-bold block mb-1">Ubicación Stop Loss</span>
                        <span>Justo detrás de la banda de desviación estándar del VWAP (5-8 ticks).</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold block mb-1">Take Profit & R:R</span>
                        <span>Siguiente zona de liquidez de KIRAX. Ratio R:R Mínimo 1:2.</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedSetup === 'ruptura' && (
                  <div className="space-y-3">
                    <span className="font-mono text-sky-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      SETUP 2: RUPTURA CON ABSORCIÓN (EN RETRESEO / PULLBACK)
                    </span>
                    <p className="leading-relaxed">
                      Estrategia de aceleración. Opera el retroceso controlado hacia el nivel roto tras confirmar expansión de volumen.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-sky-400 font-bold block mb-1">Gatillo KIRAX</span>
                        <span>Ruptura del nivel con señal de confirmación al retestear la zona rota.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-sky-400 font-bold block mb-1">Confirmación Bookmap</span>
                        <span>CVD mostrando expansión direccional + desaparece la liquidez opuesta.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-sky-400 font-bold block mb-1">Ubicación Stop Loss</span>
                        <span>Dentro del rango roto (al otro lado de la zona de invalidez).</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold block mb-1">Take Profit & R:R</span>
                        <span>Próxima zona caliente en el heatmap. Ratio R:R 1:2 a 1:3.</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedSetup === 'sweep' && (
                  <div className="space-y-3">
                    <span className="font-mono text-rose-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      SETUP 3: CAZA DE STOPS (STOP SWEEP INSTITUCIONAL)
                    </span>
                    <p className="leading-relaxed">
                      Explotación de la trampa liquidadora. Entra en la dirección real justo después de que las instituciones barren los stops del retail.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-rose-400 font-bold block mb-1">Gatillo KIRAX</span>
                        <span>Barrida del máximo/mínimo anterior + Giro rápido con señal contraria KIRAX.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-rose-400 font-bold block mb-1">Confirmación Bookmap</span>
                        <span>Gran Volume Dot de absorción en la mecha de la barrida + Giro agudo del CVD.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-rose-400 font-bold block mb-1">Ubicación Stop Loss</span>
                        <span>Muy estrecho (3-5 ticks) justo detrás del extremo de la mecha de barrida.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold block mb-1">Take Profit & R:R</span>
                        <span>VWAP o zona opuesta de liquidez. Ratio R:R Mínimo 1:3 (Alta precisión).</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-2 text-center">
                <h3 className="text-sm font-bold text-amber-400 font-mono flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>EL CHECKLIST DEFINITIVO DEL OPERADOR KIRAX (6 PASOS INVIOLABLES)</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Antes de apretar el gatillo, exige 6 respuestas afirmativas. Si una sola falla, NO existe operación.
                </p>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${chk3Confluences ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={chk3Confluences} onChange={(e) => setChk3Confluences(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">1. ¿TIENE AL MENOS 3 CONFLUENCIAS ACTIVAS?</span>
                    <span className="text-[11px] text-slate-400">Señal KIRAX + Zona de Liquidez + VWAP / Contador / Bookmap.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${chkVwap ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={chkVwap} onChange={(e) => setChkVwap(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">2. ¿ESTÁ ALINEADA CON EL VWAP DIARIO?</span>
                    <span className="text-[11px] text-slate-400">Compras sobre el VWAP / Ventas por debajo del VWAP.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${chkBookmap ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={chkBookmap} onChange={(e) => setChkBookmap(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">3. ¿HAY CONFIRMACIÓN DE VOLUMEN / BOOKMAP?</span>
                    <span className="text-[11px] text-slate-400">Absorción real en Volume Dots, Iceberg o Delta CVD apoyando.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${chkRisk ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={chkRisk} onChange={(e) => setChkRisk(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">4. ¿EL RIESGO ES MÁXIMO DEL 1% DEL CAPITAL?</span>
                    <span className="text-[11px] text-slate-400">Lote calculado respetando el límite estricto de pérdida.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${chkRatio ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={chkRatio} onChange={(e) => setChkRatio(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">5. ¿EL RATIO RIESGO:BENEFICIO ES MÍNIMO 1:2?</span>
                    <span className="text-[11px] text-slate-400">Take Profit ubicado en la siguiente liquidez a doble distancia del Stop.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${chkEmotion ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={chkEmotion} onChange={(e) => setChkEmotion(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">6. ¿MI ESTADO EMOCIONAL ES NEUTRAL?</span>
                    <span className="text-[11px] text-slate-400">Libre de revancha, rabia o necesidad impulsiva de recuperar.</span>
                  </div>
                </label>
              </div>

              {/* Status Banner */}
              <div className={`p-4 rounded-xl text-center border font-mono text-xs font-bold transition-all ${
                all6Passed
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              }`}>
                {all6Passed
                  ? '🎯 ORDEN AUTORIZADA: 6/6 VERIFICACIONES CUMPLIDAS. EJECUTA SEGÚN TU PLAN.'
                  : '🛑 ORDEN BLOQUEADA: SI FALTA UN SOLO PASO, CANCELA LA ENTRADA.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
