import React, { useState } from 'react';
import { 
  MODULE_6_METADATA, 
  MODULE_6_SECTIONS 
} from '../data/module6Data';
import { 
  X, 
  BookOpen, 
  Eye, 
  ShieldCheck, 
  Layers, 
  Activity,
  Flame,
  Search,
  Radar,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Zap,
  TrendingUp,
  Sliders
} from 'lucide-react';

interface Module6ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module6ReaderModal: React.FC<Module6ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'colores' | 'flujo' | 'checklist'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Color & Heatmap Inspector State
  const [selectedColor, setSelectedIndicatorColor] = useState<'rojo' | 'blanco' | 'naranja' | 'amarillo' | 'verde' | 'azul'>('rojo');

  // Order Flow & Iceberg State
  const [flowMode, setFlowMode] = useState<'cvd' | 'iceberg' | 'spoofing' | 'desbalance'>('cvd');

  // Checklist Bookmap 5 Questions state
  const [checkLiquidity, setCheckLiquidity] = useState<boolean>(false);
  const [checkVolumeDots, setCheckVolumeDots] = useState<boolean>(false);
  const [checkCvd, setCheckCvd] = useState<boolean>(false);
  const [checkPriceZone, setCheckPriceZone] = useState<boolean>(false);
  const [checkStopLoss, setCheckStopLoss] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSec = MODULE_6_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_6_SECTIONS[0];
  const all5ChecksPassed = checkLiquidity && checkVolumeDots && checkCvd && checkPriceZone && checkStopLoss;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Radar className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 6
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_6_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                Bookmap Básico: El Radar de Liquidez Institucional
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
                onClick={() => setActiveTab('colores')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'colores'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Código Colores Heatmap</span>
              </button>

              <button
                onClick={() => setActiveTab('flujo')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'flujo'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Flujo, CVD & Icebergs</span>
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
                <span>Checklist 5 Preguntas</span>
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
            onClick={() => setActiveTab('colores')}
            className={`px-2 py-1 rounded ${activeTab === 'colores' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Colores
          </button>
          <button
            onClick={() => setActiveTab('flujo')}
            className={`px-2 py-1 rounded ${activeTab === 'flujo' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Flujo
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
                  Secciones del Módulo 6
                </span>
                {MODULE_6_SECTIONS.map((sec) => {
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

          {activeTab === 'colores' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Flame className="w-5 h-5 text-amber-400" />
                  <span>CÓDIGO UNIVERSAL DE COLORES DE BOOKMAP</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aprende a interpretar la intensidad del mapa de calor de un vistazo para distinguir muros reales de zonas irrelevantes.
                </p>
              </div>

              {/* Color Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 font-mono text-xs">
                {[
                  { id: 'rojo', label: 'Rojo (Muy Alta)', colorBg: 'bg-rose-600' },
                  { id: 'blanco', label: 'Blanco (Extrema)', colorBg: 'bg-slate-100 text-slate-950' },
                  { id: 'naranja', label: 'Naranja (Alta)', colorBg: 'bg-orange-500' },
                  { id: 'amarillo', label: 'Amarillo (Media-Alta)', colorBg: 'bg-amber-400 text-slate-950' },
                  { id: 'verde', label: 'Verde (Media)', colorBg: 'bg-emerald-500' },
                  { id: 'azul', label: 'Azul (Baja)', colorBg: 'bg-blue-900' }
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedIndicatorColor(c.id as any)}
                    className={`p-3 rounded-xl border font-bold text-center transition-all flex flex-col items-center gap-1 ${
                      selectedColor === c.id
                        ? 'border-amber-400 ring-2 ring-amber-400/50 shadow-lg'
                        : 'border-slate-800 hover:border-slate-600'
                    } ${c.colorBg}`}
                  >
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>

              {/* Selected Color Inspector Card */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 space-y-4 font-sans">
                {selectedColor === 'rojo' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-rose-400 font-mono">ZONA ROJA — MURO DE LIQUIDEZ INSTITUCIONAL</span>
                      <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">INTENSIDAD MUY ALTA</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Significado:</strong> Acumulación masiva de órdenes limitadas de compra o venta en ese nivel exacto.
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Si está Arriba del Precio:</strong> Actúa como Muro de Ventas (Resistencia Real).<br/>
                      <strong>Si está Abajo del Precio:</strong> Actúa como Muro de Compras (Soporte Real).
                    </p>
                    <div className="p-3 bg-slate-950 rounded-xl border border-rose-500/30 text-xs font-mono text-amber-300">
                      ✓ Regla KIRAX: El precio es atraído hacia la zona roja como un imán. Prepárate para observar si la zona rebota, se absorbe o se rompe.
                    </div>
                  </div>
                )}

                {selectedColor === 'blanco' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-white font-mono">ZONA BLANCA — DENSIDAD EXTREMA / PROBABLE ICEBERG</span>
                      <span className="text-[10px] font-mono bg-white/20 text-white px-2 py-0.5 rounded border border-white/30">INTENSIDAD EXTREMA</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Significado:</strong> Concentración de órdenes en niveles críticos sin precedentes en la sesión.
                    </p>
                    <div className="p-3 bg-slate-950 rounded-xl border border-white/30 text-xs font-mono text-amber-300">
                      ✓ Regla KIRAX: La presencia de zonas blancas continuas suele indicar la punta visible de una orden Iceberg institucional de miles de contratos.
                    </div>
                  </div>
                )}

                {selectedColor === 'naranja' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-orange-400 font-mono">ZONA NARANJA — BATALLA DE ÓRDENES GRANDES</span>
                      <span className="text-[10px] font-mono bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/30">INTENSIDAD ALTA</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Significado:</strong> Nivel de precio con alta participación de volumen institucional donde se libra una batalla entre compradores y vendedores.
                    </p>
                  </div>
                )}

                {selectedColor === 'amarillo' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-amber-400 font-mono">ZONA AMARILLA — ACUMULACIÓN SIGNIFICATIVA</span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">INTENSIDAD MEDIA-ALTA</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Significado:</strong> Densidad superior al promedio de órdenes limitadas. Sirve como soporte/resistencia intermedio.
                    </p>
                  </div>
                )}

                {selectedColor === 'verde' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-emerald-400 font-mono">ZONA VERDE — LIQUIDEZ NORMAL DE MERCADO</span>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">INTENSIDAD MEDIA</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Significado:</strong> Fluidez normal de transacciones de libro sin barreras ni muros institucionales destacados.
                    </p>
                  </div>
                )}

                {selectedColor === 'azul' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-sm font-bold text-blue-400 font-mono">ZONA AZUL OSCURO — HUECO DE LIQUIDEZ (LIQUIDITY GAP)</span>
                      <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">BAJA INTENSIDAD</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Significado:</strong> Zona vacía o con muy pocas órdenes limitadas. El precio se desliza a gran velocidad por las zonas azules al no encontrar contención.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'flujo' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Activity className="w-5 h-5 text-amber-400" />
                  <span>CONSOLA DE FLUJO, CVD & DETECCIÓN DE ICEBERGS</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interpreta el comportamiento dinámico del volumen acumulado, la absorción y las trampas institucionales.
                </p>
              </div>

              {/* Mode Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {[
                  { id: 'cvd', label: 'Divergencias CVD' },
                  { id: 'iceberg', label: 'Caza de Icebergs' },
                  { id: 'spoofing', label: 'Trampas de Spoofing' },
                  { id: 'desbalance', label: 'Desbalance Bids/Asks' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setFlowMode(m.id as any)}
                    className={`p-3 rounded-xl border font-bold text-center transition-all ${
                      flowMode === m.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Flow Detail Cards */}
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 space-y-4 font-sans text-xs text-slate-300">
                {flowMode === 'cvd' && (
                  <div className="space-y-3">
                    <span className="font-mono text-amber-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      DIVERGENCIAS DE CVD (CUMULATIVE VOLUME DELTA)
                    </span>
                    <p className="leading-relaxed">
                      El CVD calcula el delta (compras de mercado menos ventas de mercado). Las divergencias en CVD señalan absorción institucional masiva:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                      <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-1">
                        <span className="font-mono text-emerald-400 font-bold block">🟢 Divergencia Alcista</span>
                        <p>El precio marca un mínimo más bajo, pero el CVD marca un mínimo más alto. Los vendedores agresivos no logran tumbar el precio porque los institucionales están absorbiendo con compras pasivas.</p>
                      </div>
                      <div className="p-4 bg-slate-950 rounded-xl border border-rose-500/30 space-y-1">
                        <span className="font-mono text-rose-400 font-bold block">🔴 Divergencia Bajista</span>
                        <p>El precio marca un máximo más alto, pero el CVD marca un máximo más bajo. Las compras agresivas son absorbidas por muros institucionales de venta.</p>
                      </div>
                    </div>
                  </div>
                )}

                {flowMode === 'iceberg' && (
                  <div className="space-y-3">
                    <span className="font-mono text-sky-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      CÓMO RECONOCER Y CAZAR UN ICEBERG INSTITUCIONAL
                    </span>
                    <p className="leading-relaxed">
                      Una orden Iceberg fracciona una posición masiva (ej. 5,000 contratos en bloques de 20) para no disparar el precio.
                    </p>
                    <div className="p-4 bg-slate-950 rounded-xl border border-sky-500/30 space-y-2">
                      <p><strong>1. Zona Blanca/Roja Persistente:</strong> El nivel no desaparece a pesar de sufrir miles de ejecuciones.</p>
                      <p><strong>2. Volume Dots Gigantes en Mismo Tick:</strong> Burbujas masivas acumulándose en la misma línea horizontal.</p>
                      <p><strong>3. Precio Congelado:</strong> El precio no avanza a pesar del volumen masivo (Absorción Absoluta).</p>
                    </div>
                  </div>
                )}

                {flowMode === 'spoofing' && (
                  <div className="space-y-3">
                    <span className="font-mono text-rose-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      DETECCIÓN DE SPOOFING (LA MANIPULACIÓN DE MERCADO)
                    </span>
                    <p className="leading-relaxed">
                      El Spoofing es una orden trampa gigante diseñada para asustar al mercado e inducir a los minoristas a entrar tarde.
                    </p>
                    <div className="p-4 bg-slate-950 rounded-xl border border-rose-500/30 space-y-2">
                      <p><strong>• Señal de Alarma:</strong> Aparece una zona roja/blanca enorme de la nada (sin historial) y se retira bruscamente antes de que el precio la toque.</p>
                      <p><strong>• Regla Anti-Trampas KIRAX:</strong> Si una zona de liquidez no existía hace 30 segundos, desconfía. La liquidez real tiene permanencia histórica.</p>
                    </div>
                  </div>
                )}

                {flowMode === 'desbalance' && (
                  <div className="space-y-3">
                    <span className="font-mono text-amber-400 font-bold text-sm block border-b border-slate-800 pb-2">
                      DESBALANCE DE BIDS Y ASKS
                    </span>
                    <p className="leading-relaxed">
                      Compara la presión compradora a la izquierda (Bids) contra la presión vendedora a la derecha (Asks) en la barra de profundidad.
                    </p>
                    <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2">
                      <p><strong>• Bids &gt;&gt; Asks:</strong> Presión de compra dominante en el libro. Buscar posiciones Long en rebote.</p>
                      <p><strong>• Asks &gt;&gt; Bids:</strong> Presión de venta dominante en el libro. Buscar posiciones Short en rebote.</p>
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
                  <span>CHECKLIST DE ENTRADA BOOKMAP DE 5 PREGUNTAS</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Responde estas 5 preguntas de calidad obligatorias antes de ejecutar cualquier operación en el mapa de calor.
                </p>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${checkLiquidity ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkLiquidity} onChange={(e) => setCheckLiquidity(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>1. ¿Hay una zona de liquidez clara (Muro Rojo/Blanco) en el Heatmap que no sea Spoofing?</span>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${checkVolumeDots ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkVolumeDots} onChange={(e) => setCheckVolumeDots(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>2. ¿Los Volume Dots (burbujas) confirman actividad de ejecución o absorción en ese nivel?</span>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${checkCvd ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkCvd} onChange={(e) => setCheckCvd(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>3. ¿El CVD (Cumulative Volume Delta) o la divergencia de delta está alineado con la dirección?</span>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${checkPriceZone ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkPriceZone} onChange={(e) => setCheckPriceZone(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>4. ¿El precio se encuentra dentro o inmediatamente adyacente a la zona de impacto?</span>
                </label>

                <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${checkStopLoss ? 'bg-amber-500/10 border-amber-500/50 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input type="checkbox" checked={checkStopLoss} onChange={(e) => setCheckStopLoss(e.target.checked)} className="mt-0.5 accent-amber-500" />
                  <span>5. ¿El Stop Loss está colocado de forma lógica detrás de la zona de liquidez (5-10 ticks detrás del muro)?</span>
                </label>
              </div>

              {/* Status Box */}
              <div className={`p-4 rounded-xl text-center border font-mono text-xs font-bold transition-all ${
                all5ChecksPassed
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
              }`}>
                {all5ChecksPassed
                  ? '🟢 DENTRO DEL PLAN: 5/5 PREGUNTAS DEL CHECKLIST BOOKMAP CUMPLIDAS. ENTRADA PERMITIDA.'
                  : '🔴 ESPERA REGLA DE ORO BOOKMAP: SI FALTA UNA SOLA PREGUNTA, NO SE APRETA EL GATILLO.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
