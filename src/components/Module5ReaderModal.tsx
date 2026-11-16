import React, { useState } from 'react';
import { 
  MODULE_5_METADATA, 
  MODULE_5_SECTIONS 
} from '../data/module5Data';
import { 
  X, 
  BookOpen, 
  Eye, 
  Zap, 
  Target, 
  BarChart2, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Sliders, 
  CheckCircle2, 
  Layers, 
  AlertTriangle,
  Activity,
  Flame
} from 'lucide-react';

interface Module5ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module5ReaderModal: React.FC<Module5ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'indicadores' | 'piramide' | 'checklist'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Indicator Visualizer state
  const [selectedIndicator, setSelectedIndicator] = useState<'emas' | 'rsi' | 'macd' | 'vwap' | 'atr' | 'bollinger'>('emas');

  // Checklist 3 Confirmations state
  const [checkPriceAction, setCheckPriceAction] = useState<boolean>(false);
  const [checkTrend, setCheckTrend] = useState<boolean>(false);
  const [checkMomentum, setCheckMomentum] = useState<boolean>(false);
  const [checkAtrRisk, setCheckAtrRisk] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSec = MODULE_5_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_5_SECTIONS[0];
  const all3Passed = checkPriceAction && checkTrend && checkMomentum;
  const readyToExecute = all3Passed && checkAtrRisk;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 5
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_5_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                Indicadores Técnicos y Confluencia Múltiple
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
                onClick={() => setActiveTab('indicadores')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'indicadores'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Visualizador Indicadores</span>
              </button>

              <button
                onClick={() => setActiveTab('piramide')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'piramide'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Pirámide Confluencia</span>
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
                <span>3 Confirmaciones</span>
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
            onClick={() => setActiveTab('indicadores')}
            className={`px-2 py-1 rounded ${activeTab === 'indicadores' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Indicadores
          </button>
          <button
            onClick={() => setActiveTab('piramide')}
            className={`px-2 py-1 rounded ${activeTab === 'piramide' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Pirámide
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
                  Secciones del Módulo 5
                </span>
                {MODULE_5_SECTIONS.map((sec) => {
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

          {activeTab === 'indicadores' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Sliders className="w-5 h-5" />
                  <span>VISUALIZADOR Y MECÁNICA DE INDICADORES TÉCNICOS</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Inspecciona la función, fórmulas de uso, zonas clave y reglas del Trader KIRAX para cada una de las 6 herramientas principales.
                </p>
              </div>

              {/* Indicator Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 font-mono text-xs">
                {[
                  { id: 'emas', label: 'Medias Móviles' },
                  { id: 'rsi', label: 'RSI Oscilador' },
                  { id: 'macd', label: 'MACD Momentum' },
                  { id: 'vwap', label: 'VWAP Institucional' },
                  { id: 'atr', label: 'ATR Volatilidad' },
                  { id: 'bollinger', label: 'Bandas Bollinger' }
                ].map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndicator(ind.id as any)}
                    className={`p-2.5 rounded-xl border font-bold text-center transition-all ${
                      selectedIndicator === ind.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>

              {/* Indicator Detail Cards */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 space-y-4 font-sans">
                {selectedIndicator === 'emas' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-amber-400 font-mono">MEDIAS MÓVILES (EMA 9, EMA 20, SMA 50, SMA 200)</span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">INDICADOR DE TENDENCIA</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <span className="font-mono text-emerald-400 font-bold block">🟢 Semáforo KIRAX (EMA 9 &gt; EMA 20)</span>
                        <p>Indica fuerza compradora a corto plazo. En scalping en oro (XAU/USD), los pullbacks hacia la EMA 20 actúan como zonas de rebote tipo imán.</p>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <span className="font-mono text-rose-400 font-bold block">🔴 Semáforo Rojo (EMA 9 &lt; EMA 20)</span>
                        <p>Indica presión vendedora constante. Busca oportunidades de venta o cortos en los retesteos de la EMA 20 por debajo.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedIndicator === 'rsi' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-sky-400 font-mono">RSI (RELATIVE STRENGTH INDEX - 14 PERÍODOS)</span>
                      <span className="text-[10px] font-mono bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/30">OSCILADOR DE MOMENTUM</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong>• Sobrecompra (&gt;70):</strong> El precio ha subido muy rápido. No compres a ciegas; busca confirmación de agotamiento o divergencia.</p>
                      <p><strong>• Sobreventa (&lt;30):</strong> El precio ha caído con violencia. Estate atento a rebotes en soportes clave.</p>
                      <p className="text-amber-400 font-mono font-bold">✓ Divergencias: Cuando el precio marca un nuevo máximo (HH) y el RSI marca un máximo más bajo (LH), la tendencia está a punto de perder fuerza.</p>
                    </div>
                  </div>
                )}

                {selectedIndicator === 'macd' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-emerald-400 font-mono">MACD (12, 26, 9) - CONVERGENCIA / DIVERGENCIA</span>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">MOMENTUM + TENDENCIA</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong>• Histograma del MACD:</strong> Es el indicador adelantado estrella. Cuando las barras verdes/rojas disminuyen de tamaño, el impulso pierde velocidad ANTES de que el precio se dé la vuelta.</p>
                      <p><strong>• Cruce de Cero:</strong> La línea MACD cruzando por encima de cero ratifica momentum alcista institucional.</p>
                    </div>
                  </div>
                )}

                {selectedIndicator === 'vwap' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-amber-400 font-mono">VWAP (VOLUME WEIGHTED AVERAGE PRICE)</span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">INDICADOR INSTITUCIONAL</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong>• Fair Value de la Sesión:</strong> Los grandes algoritmos operan alrededor del VWAP. Precio por encima = Sesgo Alcista. Precio por debajo = Sesgo Bajista.</p>
                      <p><strong>• Bandas de Desviación (±2σ / ±3σ):</strong> Zonas de extensión extrema donde estadísticamente el 95% al 99% de las transacciones ya ocurrieron, anticipando reversión al VWAP.</p>
                    </div>
                  </div>
                )}

                {selectedIndicator === 'atr' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-rose-400 font-mono">ATR (AVERAGE TRUE RANGE - 14 PERÍODOS)</span>
                      <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">MEDIDOR DE VOLATILIDAD</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong>• Gestión de Riesgo Inflexible:</strong> El ATR NO te dice dónde va el precio, te dice cuántos puntos o pips se mueve una vela típica. Úsalo para calcular un Stop Loss dinámico (1.5x - 2x ATR).</p>
                      <p><strong>• Ejemplo en Oro:</strong> Si ATR=2.5, tu Stop Loss debe ser de al menos 3.75 - 5 puntos de distancia para no ser barrido por ruido.</p>
                    </div>
                  </div>
                )}

                {selectedIndicator === 'bollinger' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-purple-400 font-mono">BANDAS DE BOLLINGER (SMA 20 ± 2 DESVIACIONES)</span>
                      <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">CANAL DE VOLATILIDAD</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong>• Bollinger Squeeze:</strong> Contracción extrema de las bandas = Calma antes de la tempestad. Anticipa una ruptura violenta en la dirección de la confluencia.</p>
                      <p><strong>• Agotamiento en 1 min:</strong> Cuando una vela cierra completamente FUERA de la banda superior o inferior, hay 80% de probabilidad de reversión rápida a la media.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'piramide' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Layers className="w-5 h-5 text-amber-400" />
                  <span>LA PIRÁMIDE DE CONFLUENCIA KIRAX</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Jerarquía de decisión ponderada para filtrar operaciones de baja probabilidad y ejecutar solo Setups A+.
                </p>
              </div>

              {/* Pyramid Level Cards */}
              <div className="space-y-3 font-sans text-xs">
                <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/5 p-4 rounded-xl border border-amber-500/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-mono text-amber-400">NIVEL 1 (BASE): ESTRUCTURA DE MERCADO (40% PESO)</span>
                    <p className="text-slate-300">Tendencia clara en M15/H1 (Secuencia de HH/HL o LH/LL). Si la estructura es alcista, NO busques ventas.</p>
                  </div>
                  <span className="text-xl font-black font-mono text-amber-400">40%</span>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 p-4 rounded-xl border border-emerald-500/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-mono text-emerald-400">NIVEL 2: PRICE ACTION & ZONAS CLAVE (30% PESO)</span>
                    <p className="text-slate-300">Patrón de velas japonesas de rechazo (Martillo, Envolvente) en Soportes/Resistencias u Order Blocks.</p>
                  </div>
                  <span className="text-xl font-black font-mono text-emerald-400">30%</span>
                </div>

                <div className="bg-gradient-to-r from-sky-500/20 to-sky-500/5 p-4 rounded-xl border border-sky-500/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-mono text-sky-400">NIVEL 3: VWAP & EMAS DE TENDENCIA (10% PESO)</span>
                    <p className="text-slate-300">Precio por encima del VWAP de sesión + Semáforo KIRAX (EMA 9 &gt; EMA 20) a favor de la dirección.</p>
                  </div>
                  <span className="text-xl font-black font-mono text-sky-400">10%</span>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 p-4 rounded-xl border border-purple-500/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-mono text-purple-400">NIVEL 4: MOMENTUM (RSI + MACD) (10% PESO)</span>
                    <p className="text-slate-300">RSI fuera de extremos y MACD mostrando expansión de histograma a favor.</p>
                  </div>
                  <span className="text-xl font-black font-mono text-purple-400">10%</span>
                </div>

                <div className="bg-gradient-to-r from-rose-500/20 to-rose-500/5 p-4 rounded-xl border border-rose-500/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold font-mono text-rose-400">NIVEL 5 (TOP): GESTIÓN Y ATR (10% PESO)</span>
                    <p className="text-slate-300">Stop Loss fijado por ATR (1.5x-2x ATR) garantizando un Ratio Riesgo/Beneficio mínimo de 1:2.</p>
                  </div>
                  <span className="text-xl font-black font-mono text-rose-400">10%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-2 text-center">
                <h3 className="text-sm font-bold text-amber-400 font-mono flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>REGLA DE LAS 3 CONFIRMACIONES OBLIGATORIAS</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Para autorizar cualquier orden en el broker, debes marcar los 3 pilares de confirmación técnica.
                </p>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs">
                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${checkPriceAction ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkPriceAction} onChange={(e) => setCheckPriceAction(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">1. PRICE ACTION CONFIRMADO</span>
                    <span>El precio está en Zona S/R u Order Block y cerró un patrón de vela de rechazo (Martillo / Envolvente).</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${checkTrend ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkTrend} onChange={(e) => setCheckTrend(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">2. INDICADOR DE TENDENCIA (VWAP / EMAS) ALINEADO</span>
                    <span>El precio respeta el VWAP de la sesión y el Semáforo KIRAX (EMA 9/21) coincide con la dirección.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${checkMomentum ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkMomentum} onChange={(e) => setCheckMomentum(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">3. INDICADOR DE MOMENTUM (RSI / MACD) CONFIRMANDO</span>
                    <span>El RSI sale de zona extrema o existe divergencia + histograma MACD expandiéndose a favor.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${checkAtrRisk ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkAtrRisk} onChange={(e) => setCheckAtrRisk(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-emerald-400 block mb-1">4. EXTRA: STOP LOSS DIMENSIONADO POR ATR (1.5x - 2x ATR)</span>
                    <span>Distancia de Stop Loss calculada para evitar la salida por ruido con Ratio R:R &gt;= 1:2.</span>
                  </div>
                </label>
              </div>

              {/* Status Box */}
              <div className={`p-4 rounded-xl text-center border font-mono text-xs font-bold transition-all ${
                readyToExecute
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : all3Passed
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              }`}>
                {readyToExecute
                  ? '🟢 SETUP A+ AUTORIZADO: 3/3 CONFIRMACIONES + GESTIÓN ATR CUMPLIDA. ENTRADA PERMITIDA.'
                  : all3Passed
                  ? '🟡 TRES PILARES CUMPLIDOS: REVISA DIMENSIONAMIENTO DE STOP LOSS CON ATR ANTES DE METER LA ORDEN.'
                  : '🔴 ESPERA REGLA DE ORO KIRAX: SI FALTA UNA SOLA CONFIRMACIÓN, NO SE APRETA EL GATILLO.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
