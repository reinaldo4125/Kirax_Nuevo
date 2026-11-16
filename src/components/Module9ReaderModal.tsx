import React, { useState } from 'react';
import { 
  MODULE_9_METADATA, 
  MODULE_9_SECTIONS 
} from '../data/module9Data';
import { 
  X, 
  BookOpen, 
  Layers, 
  Target, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Activity, 
  Sparkles,
  BarChart3,
  Clock,
  Crosshair,
  Award,
  ArrowRight,
  Sliders,
  Play,
  Check,
  FileText
} from 'lucide-react';

interface Module9ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module9ReaderModal: React.FC<Module9ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'topdown_sim' | 'in_trade' | 'practical_case'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Top-Down Simulator State
  const [htfBias, setHtfBias] = useState<'alcista' | 'bajista' | 'rango'>('alcista');
  const [itfZone, setItfZone] = useState<'soporte' | 'resistencia' | 'medio'>('soporte');
  const [ltfTrigger, setLtfTrigger] = useState<'martillo' | 'envolvente' | 'choch' | 'ninguno'>('martillo');

  // Live Trade Management State
  const [tradeProfitPips, setTradeProfitPips] = useState<number>(15);
  const [isBreakevenSet, setIsBreakevenSet] = useState<boolean>(false);
  const [isPartialsTaken, setIsPartialsTaken] = useState<boolean>(false);
  const [isInvalidated, setIsInvalidated] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSec = MODULE_9_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_9_SECTIONS[0];

  // Evaluate Top-Down Alignment
  const isHtfLtfAligned = 
    (htfBias === 'alcista' && itfZone === 'soporte' && ltfTrigger !== 'ninguno') ||
    (htfBias === 'bajista' && itfZone === 'resistencia' && ltfTrigger !== 'ninguno') ||
    (htfBias === 'rango' && (itfZone === 'soporte' || itfZone === 'resistencia') && ltfTrigger !== 'ninguno');

  const getAlignmentGrade = () => {
    if (!isHtfLtfAligned) return { label: '🛑 ENTRADA INVALIDADA', color: 'text-red-400 bg-red-950/60 border-red-500/40', desc: 'Hay contradicción directa entre la tendencia mayor y la zona/trigger actual.' };
    if (htfBias === 'rango') return { label: '⚠️ CALIDAD MEDIA (BETA)', color: 'text-amber-400 bg-amber-950/60 border-amber-500/40', desc: 'Operativa válida dentro de límites de rango, pero con menor recorrido que tendencia pura.' };
    return { label: '🎯 CALIDAD A+ (CONFLUENCIA TOTAL)', color: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40', desc: 'Tendencia HTF, Zona de Valor ITF y Gatillo LTF están 100% en confluencia.' };
  };

  const alignmentGrade = getAlignmentGrade();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col max-h-[90vh] overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg">
              9
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Lector Interactivo de Academia</span>
              <h2 className="text-lg md:text-xl font-black text-white">{MODULE_9_METADATA.titulo}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('secciones')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'secciones'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Secciones Didácticas (1-10)
          </button>

          <button
            onClick={() => setActiveTab('topdown_sim')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'topdown_sim'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Simulador Top-Down MTF
          </button>

          <button
            onClick={() => setActiveTab('in_trade')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'in_trade'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            Gestión de Trade en Vivo
          </button>

          <button
            onClick={() => setActiveTab('practical_case')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'practical_case'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            Caso Práctico 5 Pasos
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-900/90">

          {/* TAB 1: SECCIONES DIDÁCTICAS */}
          {activeTab === 'secciones' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Section Selector Sidebar */}
              <div className="md:col-span-4 space-y-2 pr-0 md:pr-2 md:border-r border-slate-800">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Índice del Módulo 9</p>
                {MODULE_9_SECTIONS.map((sec) => (
                  <button
                    key={sec.seccion}
                    onClick={() => setSelectedSection(sec.seccion)}
                    className={`w-full text-left p-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                      selectedSection === sec.seccion
                        ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300 shadow-sm'
                        : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <span className="truncate pr-2">
                      <strong className="text-amber-400 mr-1.5">{sec.seccion}.</strong> {sec.titulo}
                    </span>
                    {selectedSection === sec.seccion && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>

              {/* Section Content Display */}
              <div className="md:col-span-8 space-y-6">
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                    <Sparkles className="w-4 h-4" />
                    SECCIÓN {currentSec.seccion} DE 10
                  </div>
                  <h3 className="text-xl font-black text-white">{currentSec.titulo}</h3>
                  {currentSec.subtitulo && (
                    <p className="text-xs text-slate-400 font-medium mt-1">{currentSec.subtitulo}</p>
                  )}
                </div>

                {/* Main Text Content */}
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-xl border border-slate-800/80">
                  {currentSec.contenido.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Table if present */}
                {currentSec.tabla && (
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-900 text-amber-400 font-bold">
                          {currentSec.tabla.headers.map((h, i) => (
                            <th key={i} className="p-3">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {currentSec.tabla.filas.map((fila, fIdx) => (
                          <tr key={fIdx} className="hover:bg-slate-900/50">
                            {fila.map((celda, cIdx) => (
                              <td key={cIdx} className="p-3 font-medium">{celda}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Points if present */}
                {currentSec.puntos && (
                  <div className="bg-amber-950/20 border border-amber-500/20 p-4 rounded-xl space-y-2">
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4" />
                      Puntos Clave & Reglas Inviolables
                    </p>
                    <ul className="space-y-1 text-xs text-slate-300 font-medium">
                      {currentSec.puntos.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Section Navigation Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <button
                    disabled={selectedSection === 1}
                    onClick={() => setSelectedSection(prev => Math.max(1, prev - 1))}
                    className="px-4 py-2 rounded-lg bg-slate-950 text-xs font-bold border border-slate-800 text-slate-300 disabled:opacity-40 hover:bg-slate-800 transition-all"
                  >
                    ← Sección Anterior
                  </button>
                  <span className="text-xs font-mono text-slate-500">{selectedSection} / 10</span>
                  <button
                    disabled={selectedSection === 10}
                    onClick={() => setSelectedSection(prev => Math.min(10, prev + 1))}
                    className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 disabled:opacity-40 transition-all"
                  >
                    Siguiente Sección →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SIMULADOR TOP-DOWN MTF */}
          {activeTab === 'topdown_sim' && (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <Layers className="w-4 h-4" />
                  HERRAMIENTA INTERACTIVA DE ALINEACIÓN
                </div>
                <h3 className="text-xl font-black text-white">Simulador de Confluencia Top-Down (MTF)</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Selecciona la dirección en el marco temporal mayor (D1/H4), la zona en el marco intermedio (H1) y el gatillo en el marco de ejecución (M15/M5) para comprobar si la entrada cumple la regla de oro.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. HTF Selection */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <span className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-300 font-black">1</span>
                    HTF: Tendencia D1 / H4
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => setHtfBias('alcista')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        htfBias === 'alcista' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      📈 Alcista (HH + HL consecutivas)
                    </button>
                    <button
                      onClick={() => setHtfBias('bajista')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        htfBias === 'bajista' ? 'bg-red-950/60 border-red-500 text-red-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      📉 Bajista (LH + LL consecutivas)
                    </button>
                    <button
                      onClick={() => setHtfBias('rango')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        htfBias === 'rango' ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      ↔️ Rango / Consolidación Lateral
                    </button>
                  </div>
                </div>

                {/* 2. ITF Selection */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <span className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-300 font-black">2</span>
                    ITF: Zona Clave en H1
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => setItfZone('soporte')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        itfZone === 'soporte' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      🛡️ Probando Soporte / Demanda (Flip)
                    </button>
                    <button
                      onClick={() => setItfZone('resistencia')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        itfZone === 'resistencia' ? 'bg-red-950/60 border-red-500 text-red-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      🏰 Probando Resistencia / Oferta (Flip)
                    </button>
                    <button
                      onClick={() => setItfZone('medio')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        itfZone === 'medio' ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      🌫️ En medio de la nada (Sin Zona)
                    </button>
                  </div>
                </div>

                {/* 3. LTF Selection */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <span className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-300 font-black">3</span>
                    LTF: Gatillo en M15 / M5
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => setLtfTrigger('martillo')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        ltfTrigger === 'martillo' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      🔨 Vela Martillo / Pin Bar de Mecha
                    </button>
                    <button
                      onClick={() => setLtfTrigger('envolvente')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        ltfTrigger === 'envolvente' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      🕯️ Vela Envolvente de Reversión
                    </button>
                    <button
                      onClick={() => setLtfTrigger('choch')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        ltfTrigger === 'choch' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      ⚡ Quiebre de Microestructura (CHoCH M5)
                    </button>
                    <button
                      onClick={() => setLtfTrigger('ninguno')}
                      className={`w-full p-3 rounded-lg text-xs font-bold border text-left transition-all ${
                        ltfTrigger === 'ninguno' ? 'bg-red-950/60 border-red-500 text-red-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      ❌ Sin Gatillo Claro
                    </button>
                  </div>
                </div>
              </div>

              {/* Simulation Output Card */}
              <div className={`p-6 rounded-xl border ${alignmentGrade.color}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-black tracking-wide">{alignmentGrade.label}</span>
                  <span className="text-xs font-mono font-bold uppercase px-2 py-1 rounded bg-slate-950/80 border border-slate-800">
                    Diagnóstico Top-Down
                  </span>
                </div>
                <p className="text-xs leading-relaxed font-medium">{alignmentGrade.desc}</p>
              </div>
            </div>
          )}

          {/* TAB 3: GESTIÓN DE TRADE EN VIVO */}
          {activeTab === 'in_trade' && (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <Activity className="w-4 h-4" />
                  ENTRENADOR DE TOMA DE DECISIONES
                </div>
                <h3 className="text-xl font-black text-white">Gestión de la Operación Abierta</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Simula la evolución del beneficio en pips y practica las 3 decisiones permitidas en vivo sin caer en errores emocionales.
                </p>
              </div>

              {/* Trade Controller */}
              <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-xl space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                    <span>Avance Flotante de la Posición:</span>
                    <span className={`font-mono text-sm font-black ${tradeProfitPips >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {tradeProfitPips > 0 ? `+${tradeProfitPips} pips` : `${tradeProfitPips} pips`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="-20"
                    max="60"
                    step="5"
                    value={tradeProfitPips}
                    onChange={(e) => setTradeProfitPips(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>-20 pips (Stop)</span>
                    <span>0 pips (Entrada)</span>
                    <span>+20 pips (1:1 R:R)</span>
                    <span>+40 pips (1:2 Target)</span>
                    <span>+60 pips (Max R:R)</span>
                  </div>
                </div>

                {/* Actions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setIsBreakevenSet(!isBreakevenSet)}
                    className={`p-4 rounded-xl border text-left font-bold text-xs transition-all flex flex-col justify-between h-28 ${
                      isBreakevenSet 
                        ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-mono uppercase text-[10px]">Acción 1</span>
                      {isBreakevenSet && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <div>
                      <div className="font-black text-sm">Mover a Breakeven ($0)</div>
                      <div className="text-[11px] font-normal text-slate-400 mt-0.5">
                        {tradeProfitPips >= 20 ? '✅ VÁLIDO: Avanzó +20 pips (1:1)' : '⚠️ PREMATURO: El ruido puede sacarte'}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setIsPartialsTaken(!isPartialsTaken)}
                    className={`p-4 rounded-xl border text-left font-bold text-xs transition-all flex flex-col justify-between h-28 ${
                      isPartialsTaken 
                        ? 'bg-amber-950/60 border-amber-500 text-amber-300' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-mono uppercase text-[10px]">Acción 2</span>
                      {isPartialsTaken && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div>
                      <div className="font-black text-sm">Tomar Parciales (Scale Out)</div>
                      <div className="text-[11px] font-normal text-slate-400 mt-0.5">
                        {isPartialsTaken ? 'Cerrado 50% del lote en ganancia' : 'Asegura ganancia en zona intermedia'}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setIsInvalidated(!isInvalidated)}
                    className={`p-4 rounded-xl border text-left font-bold text-xs transition-all flex flex-col justify-between h-28 ${
                      isInvalidated 
                        ? 'bg-red-950/60 border-red-500 text-red-300' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-mono uppercase text-[10px]">Acción 3</span>
                      {isInvalidated && <Check className="w-4 h-4 text-red-400" />}
                    </div>
                    <div>
                      <div className="font-black text-sm">Cierre por Invalidez Técnica</div>
                      <div className="text-[11px] font-normal text-slate-400 mt-0.5">
                        {isInvalidated ? 'Trade cerrado anticipadamente' : 'Cerrar si la tesis original fue rota'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CASO PRÁCTICO 5 PASOS */}
          {activeTab === 'practical_case' && (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <FileText className="w-4 h-4" />
                  DEMOSTRACIÓN DE ANÁLISIS REAL COMPLETO
                </div>
                <h3 className="text-xl font-black text-white">Flujo Sistemático de 5 Pasos</h3>
                <p className="text-xs text-slate-400 mt-1">
                  El protocolo de ejecución paso a paso para analizar e ingresar en el mercado respetando las reglas de Kirax Academy.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { paso: 'Paso 1: Contexto Macro (D1)', desc: 'Revisión del gráfico diario. Identificación de secuencia de Higher Highs y Higher Lows. Sesgo: Compras Exclusivamente.', icon: '📈' },
                  { paso: 'Paso 2: Zona de Valor (H1)', desc: 'Retroceso hacia la antigua resistencia semanal ahora convertida en soporte clave (Flip Level).', icon: '🛡️' },
                  { paso: 'Paso 3: Confirmación de Reacción (M15)', desc: 'Formación de vela Martillo con sombra inferior larga en el soporte, confirmando absorción compradora.', icon: '🔨' },
                  { paso: 'Paso 4: Ejecución y Gestión de Riesgo', desc: 'Entrada en apertura de vela posterior. SL bajo el mínimo del soporte. TP en el máximo previo. R:R 1:2.', icon: '🎯' },
                  { paso: 'Paso 5: Registro & Auditoría en Journal', desc: 'Al alcanzar el TP, se documentan las capturas y se audita el estricto cumplimiento del plan.', icon: '📓' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl flex items-start gap-4">
                    <div className="text-2xl p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-amber-400">{item.paso}</h4>
                      <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-t border-slate-800 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Academia KIRAX — Módulo 9 Certificado</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-md"
          >
            Entendido, Cerrar Lector
          </button>
        </div>

      </div>
    </div>
  );
};
