import React, { useState } from 'react';
import { 
  MODULE_7_METADATA, 
  MODULE_7_SECTIONS 
} from '../data/module7Data';
import { 
  X, 
  BookOpen, 
  Crosshair, 
  ShieldCheck, 
  Activity,
  Layers,
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  Sparkles
} from 'lucide-react';

interface Module7ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module7ReaderModal: React.FC<Module7ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'cvd' | 'setups' | 'sniper'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // CVD Divergences Inspector
  const [selectedDivType, setSelectedDivType] = useState<'bullish' | 'bearish' | 'hidden_bull' | 'hidden_bear'>('bullish');

  // Setups Matrix Inspector
  const [selectedSetup, setSelectedSetup] = useState<'rebote' | 'ruptura' | 'iceberg'>('rebote');

  // Sniper 3 Confirmations Checklist
  const [confirmLiquidity, setConfirmLiquidity] = useState<boolean>(false);
  const [confirmCvd, setConfirmCvd] = useState<boolean>(false);
  const [confirmMultiTf, setConfirmMultiTf] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSec = MODULE_7_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_7_SECTIONS[0];
  const all3ConfirmationsPassed = confirmLiquidity && confirmCvd && confirmMultiTf;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Crosshair className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 7
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_7_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                Bookmap Intermedio: Del Radar al Francotirador
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
                onClick={() => setActiveTab('cvd')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'cvd'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Divergencias CVD</span>
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
                <span>3 Setups Scalping</span>
              </button>

              <button
                onClick={() => setActiveTab('sniper')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'sniper'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Regla 3 Confirmaciones</span>
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
            onClick={() => setActiveTab('cvd')}
            className={`px-2 py-1 rounded ${activeTab === 'cvd' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            CVD
          </button>
          <button
            onClick={() => setActiveTab('setups')}
            className={`px-2 py-1 rounded ${activeTab === 'setups' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Setups
          </button>
          <button
            onClick={() => setActiveTab('sniper')}
            className={`px-2 py-1 rounded ${activeTab === 'sniper' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Sniper
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {activeTab === 'secciones' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar Section Selector */}
              <div className="lg:col-span-1 space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Secciones del Módulo 7
                </span>
                {MODULE_7_SECTIONS.map((sec) => {
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

          {activeTab === 'cvd' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <span>CONSOLA AVANZADA DE DIVERGENCIAS DEL CVD</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Analiza las 4 estructuras clave de divergencia entre la acción del precio y el delta acumulado de volumen.
                </p>
              </div>

              {/* Divergence Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {[
                  { id: 'bullish', label: '🟢 Divergencia Alcista' },
                  { id: 'bearish', label: '🔴 Divergencia Bajista' },
                  { id: 'hidden_bull', label: '📈 Oculta Alcista' },
                  { id: 'hidden_bear', label: '📉 Oculta Bajista' }
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDivType(d.id as any)}
                    className={`p-3 rounded-xl border font-bold text-center transition-all ${
                      selectedDivType === d.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              {/* Selected Divergence Inspector */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 space-y-4 font-sans text-xs text-slate-300">
                {selectedDivType === 'bullish' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-mono text-emerald-400 font-bold text-sm">DIVERGENCIA ALCISTA REGULAR (BULLISH REVERSAL)</span>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">PATRÓN DE REVERSIÓN A+</span>
                    </div>
                    <p><strong>Comportamiento del Precio:</strong> Marca un Mínimo Más Bajo (Lower Low - LL) rompiendo un soporte visible.</p>
                    <p><strong>Comportamiento del CVD:</strong> Marca un Mínimo Más Alto (Higher Low - HL) sin acompañar la caída del precio.</p>
                    <p><strong>Mecánica del Flujo:</strong> Las ventas agresivas de mercado están siendo absorbidas totalmente por compras pasivas institucionales en el muro de Bids. Los vendedores se quedan sin munición.</p>
                    <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/30 font-mono text-amber-300">
                      ✓ Acción: Prepara entrada LONG en cuanto el CVD gire al alza y confirme rebote en zona caliente.
                    </div>
                  </div>
                )}

                {selectedDivType === 'bearish' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-mono text-rose-400 font-bold text-sm">DIVERGENCIA BAJISTA REGULAR (BEARISH REVERSAL)</span>
                      <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">PATRÓN DE REVERSIÓN A+</span>
                    </div>
                    <p><strong>Comportamiento del Precio:</strong> Marca un Máximo Más Alto (Higher High - HH) rompiendo una resistencia visible.</p>
                    <p><strong>Comportamiento del CVD:</strong> Marca un Máximo Más Bajo (Lower High - LH) desplomándose mientras el precio sube.</p>
                    <p><strong>Mecánica del Flujo:</strong> Las compras agresivas al ask son absorbidas por muros de venta institucionales. La subida del precio es "hueca" y está a punto de colapsar.</p>
                    <div className="p-3 bg-slate-950 rounded-xl border border-rose-500/30 font-mono text-amber-300">
                      ✓ Acción: Prepara entrada SHORT al detectar absorción y giro bajista del delta.
                    </div>
                  </div>
                )}

                {selectedDivType === 'hidden_bull' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-mono text-sky-400 font-bold text-sm">DIVERGENCIA OCULTA ALCISTA (CONTINUACIÓN DE TENDENCIA)</span>
                      <span className="text-[10px] font-mono bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/30">CONTINUACIÓN ALCISTA</span>
                    </div>
                    <p><strong>Comportamiento del Precio:</strong> Marca un Mínimo Más Alto (Higher Low - HL) durante un retroceso en tendencia alcista.</p>
                    <p><strong>Comportamiento del CVD:</strong> Marca un Mínimo Más Bajo (Lower Low - LL) mostrando ventas en el delta.</p>
                    <p><strong>Mecánica del Flujo:</strong> A pesar de las ventas agresivas, el precio no logra hacer un mínimo más bajo porque la tendencia alcista estructural sostiene el valor.</p>
                    <div className="p-3 bg-slate-950 rounded-xl border border-sky-500/30 font-mono text-amber-300">
                      ✓ Acción: Reentrar en favor de la tendencia alcista principal (LONG).
                    </div>
                  </div>
                )}

                {selectedDivType === 'hidden_bear' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-mono text-amber-400 font-bold text-sm">DIVERGENCIA OCULTA BAJISTA (CONTINUACIÓN DE TENDENCIA)</span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">CONTINUACIÓN BAJISTA</span>
                    </div>
                    <p><strong>Comportamiento del Precio:</strong> Marca un Máximo Más Bajo (Lower High - LH) durante un rebote en tendencia bajista.</p>
                    <p><strong>Comportamiento del CVD:</strong> Marca un Máximo Más Alto (Higher High - HH) mostrando compras agresivas.</p>
                    <p><strong>Mecánica del Flujo:</strong> Las compras impulsivas no logran superar la estructura de resistencia previa. La tendencia dominante sigue siendo bajista.</p>
                    <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/30 font-mono text-amber-300">
                      ✓ Acción: Reentrar en favor de la tendencia bajista principal (SHORT).
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'setups' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Target className="w-5 h-5 text-amber-400" />
                  <span>MATRIZ DE LOS 3 SETUPS COMPLETOS DE SCALPING BOOKMAP</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Estrategias operativas de precisión comprobada con reglas de entrada, ubicación estratégica de Stop Loss y Take Profit.
                </p>
              </div>

              {/* Setup Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                {[
                  { id: 'rebote', label: 'Setup 1: Rebote en Muro' },
                  { id: 'ruptura', label: 'Setup 2: Ruptura con Absorción' },
                  { id: 'iceberg', label: 'Setup 3: Caza de Iceberg' }
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
                      SETUP 1: REBOTE EN MURO DE LIQUIDEZ (CON CONFIRMACIÓN CVD)
                    </span>
                    <p className="leading-relaxed">
                      El setup más estable de Bookmap. Aprovecha la contención de muros rojos/blancos estables.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-amber-400 font-bold block mb-1">Gatillo de Entrada</span>
                        <span>Precio toca el muro + Volume Dots en el nivel + CVD gira en la dirección del rebote.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-amber-400 font-bold block mb-1">Ubicación del Stop Loss</span>
                        <span>5 a 10 ticks justo detrás del muro rojo protector.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-amber-400 font-bold block mb-1">Take Profit Target</span>
                        <span>Siguiente muro de liquidez en la dirección del rebote. Ratio R:R Mínimo 1:2.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold block mb-1">Tasa de Acierto Est.</span>
                        <span>60% - 70% de efectividad sostenida.</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedSetup === 'ruptura' && (
                  <div className="space-y-3">
                    <span className="font-mono text-sky-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      SETUP 2: RUPTURA CON ABSORCIÓN PREVIA (EN RETRESEO)
                    </span>
                    <p className="leading-relaxed">
                      Estrategia impulsiva de seguimiento de tendencia tras el colapso de un muro agotado.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-sky-400 font-bold block mb-1">Gatillo de Entrada</span>
                        <span>Ruptura del muro con volumen + Entrar en el RETROCESO a la zona rota al retestear.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-sky-400 font-bold block mb-1">Ubicación del Stop Loss</span>
                        <span>Al otro lado del nivel de ruptura (dentro de la zona rota).</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-sky-400 font-bold block mb-1">Take Profit Target</span>
                        <span>Siguiente zona caliente del heatmap. Ratio R:R Mínimo 1:3.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold block mb-1">Tasa de Acierto Est.</span>
                        <span>50% - 60% (Ratios R:R más elevados).</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedSetup === 'iceberg' && (
                  <div className="space-y-3">
                    <span className="font-mono text-rose-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      SETUP 3: CAZA DE ICEBERGS INSTITUCIONALES
                    </span>
                    <p className="leading-relaxed">
                      Alineación directa con la huella oculta de grandes bancos e instituciones.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-rose-400 font-bold block mb-1">Gatillo de Entrada</span>
                        <span>Iceberg verificado (checklist 4 puntos) + Reacción del precio al tocar por 2da/3ra vez.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-rose-400 font-bold block mb-1">Ubicación del Stop Loss</span>
                        <span>3 a 5 ticks estrechos justo detrás del nivel de la orden Iceberg.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-rose-400 font-bold block mb-1">Take Profit Target</span>
                        <span>Muro de liquidez opuesto más cercano. Ratio R:R 1:2 a 1:3.</span>
                      </div>
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold block mb-1">Tasa de Acierto Est.</span>
                        <span>70% - 80% (Setup infrecuente de alta precisión).</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'sniper' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-2 text-center">
                <h3 className="text-sm font-bold text-amber-400 font-mono flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>LA REGLA INVIOLABLE DE LAS 3 CONFIRMACIONES (KIRAX SNIPER)</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Para apretar el gatillo en Bookmap Intermedio, EXIGE la alineación simultánea e independiente de estas 3 confirmaciones.
                </p>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${confirmLiquidity ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={confirmLiquidity} onChange={(e) => setConfirmLiquidity(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">1. ESTRUCTURA DE LIQUIDEZ VISIBLE (HEATMAP / ICEBERG)</span>
                    <span>Presencia confirmada de Muro Rojo, Iceberg con recarga o Absorción en el nivel.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${confirmCvd ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={confirmCvd} onChange={(e) => setConfirmCvd(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">2. FLUJO DINÁMICO DE CVD Y VOLUME DOTS</span>
                    <span>Giro de CVD a favor o Divergencia de Delta respaldando la dirección del trade.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${confirmMultiTf ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={confirmMultiTf} onChange={(e) => setConfirmMultiTf(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">3. CONFLUENCIA MULTI-TIMEFRAME ESTRUCTURAL</span>
                    <span>Alineación con el sesgo mayor del timeframe superior (4H / 1H / 15M).</span>
                  </div>
                </label>
              </div>

              {/* Status Box */}
              <div className={`p-4 rounded-xl text-center border font-mono text-xs font-bold transition-all ${
                all3ConfirmationsPassed
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              }`}>
                {all3ConfirmationsPassed
                  ? '🎯 DISPARO PERMITIDO: 3/3 CONFIRMACIONES ALINEADAS. EJECUTA SEGÚN EL PLAN.'
                  : '🛑 ALERTA DE FRANCOTIRADOR: SI FALTA UNA SOLA CONFIRMACIÓN, EL TRADE NO EXISTE.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
