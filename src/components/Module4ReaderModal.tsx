import React, { useState } from 'react';
import { 
  MODULE_4_METADATA, 
  MODULE_4_SECTIONS, 
  MODULE_4_EXAM_BANK 
} from '../data/module4Data';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  Eye, 
  Layers, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart2, 
  ShieldCheck, 
  HelpCircle,
  Sparkles,
  ArrowRight,
  Flame,
  Maximize2
} from 'lucide-react';

interface Module4ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module4ReaderModal: React.FC<Module4ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'velas_patrones' | 'smc' | 'checklist'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Pattern Selector state in Velas/Patrones Tab
  const [selectedPattern, setSelectedPattern] = useState<'martillo' | 'estrella_fugaz' | 'envolvente' | 'morning_star' | 'doble_techo' | 'hch'>('martillo');

  // Checklist State for Scalping Entry
  const [check1, setCheck1] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [check3, setCheck3] = useState<boolean>(false);
  const [check4, setCheck4] = useState<boolean>(false);
  const [check5, setCheck5] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSec = MODULE_4_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_4_SECTIONS[0];
  const allChecksPassed = check1 && check2 && check3 && check4 && check5;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 4
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_4_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                Price Action: Lectura de Velas y Estructura
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
                onClick={() => setActiveTab('velas_patrones')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'velas_patrones'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>Visualizador Patrones</span>
              </button>

              <button
                onClick={() => setActiveTab('smc')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'smc'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Smart Money (SMC)</span>
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
                <span>Checklist Entrada</span>
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
            onClick={() => setActiveTab('velas_patrones')}
            className={`px-2 py-1 rounded ${activeTab === 'velas_patrones' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Patrones
          </button>
          <button
            onClick={() => setActiveTab('smc')}
            className={`px-2 py-1 rounded ${activeTab === 'smc' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            SMC
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
                  Secciones del Módulo 4
                </span>
                {MODULE_4_SECTIONS.map((sec) => {
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

          {activeTab === 'velas_patrones' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <BarChart2 className="w-5 h-5" />
                  <span>VISUALIZADOR Y GLOSARIO DE PATRONES DE VELAS</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Selecciona un patrón para inspeccionar su estructura visual, psicología de mercado y reglas de gatillo en el gráfico.
                </p>
              </div>

              {/* Pattern Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 font-mono text-xs">
                {[
                  { id: 'martillo', label: 'Martillo (Hammer)' },
                  { id: 'estrella_fugaz', label: 'Estrella Fugaz' },
                  { id: 'envolvente', label: 'Envolvente Alcista' },
                  { id: 'morning_star', label: 'Morning Star' },
                  { id: 'doble_techo', label: 'Doble Techo (M)' },
                  { id: 'hch', label: 'HCH (Cabeza Hombro)' }
                ].map((pat) => (
                  <button
                    key={pat.id}
                    onClick={() => setSelectedPattern(pat.id as any)}
                    className={`p-2.5 rounded-xl border font-bold text-center transition-all ${
                      selectedPattern === pat.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {pat.label}
                  </button>
                ))}
              </div>

              {/* Pattern Card Explanation */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 space-y-4 font-sans">
                {selectedPattern === 'martillo' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-emerald-400 font-mono">MARTILLO (HAMMER) - GIRO ALCISTA EN SOPORTE</span>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">PATRÓN DE 1 VELA</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center h-48">
                        {/* Candle Schematic */}
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-6 bg-slate-600"></div>
                          <div className="w-8 h-8 bg-emerald-500 border border-emerald-300 rounded-sm"></div>
                          <div className="w-0.5 h-24 bg-emerald-400"></div>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-300">
                        <p><strong>Estructura:</strong> Cuerpo pequeño en la parte superior. Mecha inferior muy larga (al menos 2 a 3 veces el tamaño del cuerpo).</p>
                        <p><strong>Psicología:</strong> Los vendedores intentaron romper a la baja, pero los compradores entraron con agresión masiva antes del cierre.</p>
                        <p className="text-amber-400 font-mono font-bold">✓ Dónde Operar: Exclusivamente al final de una tendencia bajista al rebotar en un Soporte H1/H4.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedPattern === 'estrella_fugaz' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-rose-400 font-mono">ESTRELLA FUGAZ (SHOOTING STAR) - GIRO BAJISTA</span>
                      <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">PATRÓN DE 1 VELA</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center h-48">
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-24 bg-rose-400"></div>
                          <div className="w-8 h-8 bg-rose-500 border border-rose-300 rounded-sm"></div>
                          <div className="w-0.5 h-4 bg-slate-600"></div>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-300">
                        <p><strong>Estructura:</strong> Cuerpo pequeño abajo con mecha superior larga (2-3x el cuerpo).</p>
                        <p><strong>Psicología:</strong> Los compradores impulsaron el precio arriba, pero los vendedores de mayor liquidez entraron tumbando el precio al cierre.</p>
                        <p className="text-amber-400 font-mono font-bold">✓ Dónde Operar: En la cima de una tendencia alcista rebotando en una Resistencia de H1/H4.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedPattern === 'envolvente' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-emerald-400 font-mono">ENVOLVENTE ALCISTA (BULLISH ENGULFING)</span>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">PATRÓN DE 2 VELAS</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center gap-4 h-48">
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-rose-400"></div>
                          <div className="w-6 h-10 bg-rose-500 rounded-sm"></div>
                          <div className="w-0.5 h-4 bg-rose-400"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-3 bg-emerald-400"></div>
                          <div className="w-10 h-24 bg-emerald-500 border border-emerald-300 rounded-sm"></div>
                          <div className="w-0.5 h-3 bg-emerald-400"></div>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-300">
                        <p><strong>Estructura:</strong> La Vela 1 es roja pequeña. La Vela 2 es verde gigante que cubre por completo el cuerpo previo.</p>
                        <p><strong>Psicología:</strong> Cambio drástico de convicción. Los compradores absorbieron toda la oferta previa con volumen impulsivo.</p>
                        <p className="text-amber-400 font-mono font-bold">✓ Dónde Operar: En zonas de demanda o soportes clave de timeframe M15/H1.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedPattern === 'morning_star' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-amber-400 font-mono">ESTRELLA DEL AMANECER (MORNING STAR)</span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">PATRÓN DE 3 VELAS</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center gap-3 h-48">
                        <div className="w-6 h-20 bg-rose-500 rounded-sm"></div>
                        <div className="w-4 h-4 bg-amber-400 rounded-full my-auto"></div>
                        <div className="w-6 h-20 bg-emerald-500 rounded-sm"></div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-300">
                        <p><strong>Estructura:</strong> Vela 1 bajista fuerte. Vela 2 doji o cuerpo pequeño en la base. Vela 3 alcista cerrando arriba del 50% de la Vela 1.</p>
                        <p><strong>Psicología:</strong> Transición de pánico vendedor a equilibrio/indecisión y disparo final comprador.</p>
                        <p className="text-amber-400 font-mono font-bold">✓ Confiabilidad: Altísima confiabilidad de giro de tendencia en velas diarias y de H4.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedPattern === 'doble_techo' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-rose-400 font-mono">DOBLE TECHO (PATRÓN M) - REVERSIÓN ESTRUCTURAL</span>
                      <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">PATRÓN DE CHART</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong>Estructura:</strong> El precio toca un nivel de resistencia alto, cae al cuello (neckline), intenta volver a subir al mismo nivel pero falla y cae rompiendo el neckline.</p>
                      <p><strong>Entrada KIRAX:</strong> Gatillar la venta en la ruptura + retest del neckline hacia abajo.</p>
                    </div>
                  </div>
                )}

                {selectedPattern === 'hch' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-amber-400 font-mono">HOMBRO-CABEZA-HOMBRO (HCH)</span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">PATRÓN DE CHART</span>
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong>Estructura:</strong> Tres picos: Hombro Izquierdo (máximo normal), Cabeza (máximo más alto), Hombro Derecho (máximo similar al izquierdo).</p>
                      <p><strong>Gatillo:</strong> Venta confirmada cuando la vela cierra por debajo del neckline con proyección igual a la altura de la Cabeza.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'smc' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <span>SMART MONEY CONCEPTS (SMC) - HUELLAS INSTITUCIONALES</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Comprende cómo los fondos de inversión y bancos mueven el mercado identificando ineficiencias, bloques de órdenes y cacerías de liquidez.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-sm">
                    <Target className="w-4 h-4" />
                    <span>Order Block (OB)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Es la última vela de color contrario antes de una aceleración institucional masiva. Actúa como zona de soporte/resistencia magnética cuando el precio retorna.
                  </p>
                </div>

                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Fair Value Gap (FVG)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Un espacio o 'hueco' entre las mechas de la vela 1 y la vela 3. Muestra una ineficiencia de precio donde solo un bando compró o vendió agresivamente.
                  </p>
                </div>

                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-mono font-bold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Change of Character (CHoCH)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    La primera ruptura de la estructura de un swing previo (Higher Low o Lower High). Es la campanada inicial de que la tendencia está invirtiéndose.
                  </p>
                </div>

                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-mono font-bold text-sm">
                    <Flame className="w-4 h-4" />
                    <span>Liquidity Grab (LG)</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Movimiento brusco donde el precio 'barre' o 'limpia' los stops colocados por encima de máximos o por debajo de mínimos antes de continuar el impulso real.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-2 text-center">
                <h3 className="text-sm font-bold text-amber-400 font-mono flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span>CHECKLIST DE ENTRADA SCALPER PRICE ACTION (M1/M5)</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Marca los 5 requisitos indispensables antes de apretar el gatillo de compra o venta en tu terminal.
                </p>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${check1 ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={check1} onChange={(e) => setCheck1(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>1. ¿La tendencia en M15 es clara en la dirección planeada?</span>
                </label>

                <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${check2 ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={check2} onChange={(e) => setCheck2(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>2. ¿El precio está en una Zona S/R o de Order Block en M15 / H1?</span>
                </label>

                <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${check3 ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={check3} onChange={(e) => setCheck3(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>3. ¿Apareció un patrón de velas de rechazo en M1 o M5 con CIERRE confirmado?</span>
                </label>

                <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${check4 ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={check4} onChange={(e) => setCheck4(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>4. ¿El Risk/Reward Ratio proyectado es de al menos 1:2?</span>
                </label>

                <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${check5 ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={check5} onChange={(e) => setCheck5(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>5. ¿El Stop Loss se colocó en un nivel estructural lógico (no arbitrario)?</span>
                </label>
              </div>

              {/* Status Box */}
              <div className={`p-4 rounded-xl text-center border font-mono text-xs font-bold transition-all ${
                allChecksPassed
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              }`}>
                {allChecksPassed
                  ? '🟢 DENTRO DEL PLAN: 5/5 CHECKS CUMPLIDOS. ENTRADA AUTORIZADA.'
                  : '🔴 ESPERA: REGLA DE ORO KIRAX — SI FALTA UN SOLO CHECK, NO SE ENTRA.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
