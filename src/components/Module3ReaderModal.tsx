import React, { useState } from 'react';
import { 
  MODULE_3_METADATA, 
  MODULE_3_SECTIONS, 
  MODULE_3_EXAM_BANK 
} from '../data/module3Data';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  ShieldAlert, 
  Calculator, 
  FileText, 
  TrendingDown,
  Scale,
  Award,
  Check,
  ChevronRight,
  Sparkles,
  Zap,
  Lock,
  DollarSign,
  Percent,
  PenTool
} from 'lucide-react';

interface Module3ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module3ReaderModal: React.FC<Module3ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'calculadora' | 'drawdown_matrix' | 'reglas_contrato'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Position Sizing Calculator State
  const [calcCapital, setCalcCapital] = useState<number>(10000);
  const [calcRiskPct, setCalcRiskPct] = useState<number>(1.0);
  const [calcAsset, setCalcAsset] = useState<'XAUUSD' | 'EURUSD' | 'US30' | 'US500'>('XAUUSD');
  const [calcEntryPrice, setCalcAssetEntryPrice] = useState<number>(2650.00);
  const [calcStopPrice, setCalcAssetStopPrice] = useState<number>(2640.00);
  const [calcRRTarget, setCalcRRTarget] = useState<number>(2.0); // 1:2 R:R

  // Drawdown Matrix Slider State
  const [testDrawdownPct, setTestDrawdownPct] = useState<number>(20);

  // Contract State
  const [userName, setUserName] = useState<string>('');
  const [contractSigned, setContractSigned] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSec = MODULE_3_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_3_SECTIONS[0];

  // Calculate Position Sizing
  const riskAmountUSD = (calcCapital * calcRiskPct) / 100;
  const distancePrice = Math.abs(calcEntryPrice - calcStopPrice);
  
  // Pip value multiplier logic based on asset
  let pipValueUSDPerStdLot = 10; // Default Forex / Gold 0.10 move = $10 per std lot
  if (calcAsset === 'XAUUSD') {
    // Oro: $1 per $1.00 move for 1 micro lot (0.01 lot = $1 for $1 move, 1.0 std lot = $100 for $1 move)
    pipValueUSDPerStdLot = 100; // $100 for $1.00 move per 1.0 std lot
  } else if (calcAsset === 'EURUSD') {
    pipValueUSDPerStdLot = 10000; // $10 per 0.0001 (1 pip) -> $100,000 * 0.0001 = $10
  } else if (calcAsset === 'US30') {
    pipValueUSDPerStdLot = 5; // $5 per 1 point per 1 std lot
  } else if (calcAsset === 'US500') {
    pipValueUSDPerStdLot = 50; // $50 per 1 point per 1 std lot
  }

  // Lot Size = Risk Amount / (Distance * pipValueUnit)
  const lotSizeStd = distancePrice > 0 ? riskAmountUSD / (distancePrice * (calcAsset === 'XAUUSD' ? 10 : 1)) : 0;
  const microLots = lotSizeStd * 100;

  // Target Price & Target Profit based on R:R
  const targetDistance = distancePrice * calcRRTarget;
  const isLong = calcEntryPrice > calcStopPrice;
  const targetPrice = isLong ? calcEntryPrice + targetDistance : calcEntryPrice - targetDistance;
  const targetProfitUSD = riskAmountUSD * calcRRTarget;

  // Drawdown recovery formula: Gain Needed = (1 / (1 - DD%)) - 1
  const ddDecimal = testDrawdownPct / 100;
  const gainNeededPct = ddDecimal < 1 ? ((1 / (1 - ddDecimal)) - 1) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 3
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_3_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                Gestión de Riesgo y Money Management
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
                onClick={() => setActiveTab('calculadora')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'calculadora'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Calculadora Riesgo</span>
              </button>

              <button
                onClick={() => setActiveTab('drawdown_matrix')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'drawdown_matrix'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Matriz Drawdown</span>
              </button>

              <button
                onClick={() => setActiveTab('reglas_contrato')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'reglas_contrato'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>10 Reglas & Contrato</span>
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
            onClick={() => setActiveTab('calculadora')}
            className={`px-2 py-1 rounded ${activeTab === 'calculadora' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Calculadora
          </button>
          <button
            onClick={() => setActiveTab('drawdown_matrix')}
            className={`px-2 py-1 rounded ${activeTab === 'drawdown_matrix' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Drawdown
          </button>
          <button
            onClick={() => setActiveTab('reglas_contrato')}
            className={`px-2 py-1 rounded ${activeTab === 'reglas_contrato' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Contrato
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {activeTab === 'secciones' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar Section Selector */}
              <div className="lg:col-span-1 space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Secciones del Módulo 3
                </span>
                {MODULE_3_SECTIONS.map((sec) => {
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

          {activeTab === 'calculadora' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <Calculator className="w-5 h-5" />
                  <span>CALCULADORA DE TAMAÑO DE POSICIÓN Y RISK/REWARD</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ingresa los parámetros de tu cuenta y operación para determinar el lotaje exacto y el objetivo de Take Profit sin sobrearriesgar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/40 p-6 rounded-2xl border border-white/5">
                {/* Inputs */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Activo Financiero:</label>
                    <select
                      value={calcAsset}
                      onChange={(e: any) => setCalcAsset(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-amber-300 font-mono font-bold focus:border-amber-500 focus:outline-none"
                    >
                      <option value="XAUUSD">XAU/USD (Oro)</option>
                      <option value="EURUSD">EUR/USD (Forex Major)</option>
                      <option value="US30">US30 (Dow Jones)</option>
                      <option value="US500">US500 (S&P 500)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Capital de Cuenta ($ USD):</label>
                    <input
                      type="number"
                      value={calcCapital}
                      onChange={(e) => setCalcCapital(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white font-mono focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Riesgo por Operación (%):</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="5"
                      value={calcRiskPct}
                      onChange={(e) => setCalcRiskPct(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-amber-400 font-mono font-bold focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Precio Entrada:</label>
                      <input
                        type="number"
                        step="0.01"
                        value={calcEntryPrice}
                        onChange={(e) => setCalcAssetEntryPrice(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white font-mono focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">Precio Stop Loss:</label>
                      <input
                        type="number"
                        step="0.01"
                        value={calcStopPrice}
                        onChange={(e) => setCalcAssetStopPrice(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-rose-400 font-mono font-bold focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Objetivo Risk/Reward (R:R):</label>
                    <select
                      value={calcRRTarget}
                      onChange={(e) => setCalcRRTarget(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-emerald-400 font-mono font-bold focus:border-amber-500 focus:outline-none"
                    >
                      <option value="1.5">1 : 1.5 (Recomendado Mínimo)</option>
                      <option value="2.0">1 : 2.0 (Estándar Profesional)</option>
                      <option value="3.0">1 : 3.0 (Optimo Estructural)</option>
                    </select>
                  </div>
                </div>

                {/* Outputs Panel */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-3 border-b border-slate-800 pb-1">
                      RESULTADOS DE CÁLCULO
                    </span>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400">Riesgo Monetario Máx:</span>
                        <span className="text-rose-400 font-bold text-sm">${riskAmountUSD.toFixed(2)} USD</span>
                      </div>

                      <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-slate-400">Distancia al Stop:</span>
                        <span className="text-white font-bold">{distancePrice.toFixed(2)} pts/pips</span>
                      </div>

                      <div className="flex justify-between items-center bg-amber-500/10 p-3 rounded-lg border border-amber-500/30">
                        <span className="text-amber-300 font-bold">Lotes Estándar (1.0):</span>
                        <span className="text-amber-400 font-black text-lg">{lotSizeStd.toFixed(2)} Lotes</span>
                      </div>

                      <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-[11px]">
                        <span className="text-slate-400">Equivalente Micro Lotes (0.01):</span>
                        <span className="text-slate-200 font-bold">{microLots.toFixed(0)} Micros</span>
                      </div>

                      <div className="flex justify-between items-center bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30">
                        <span className="text-emerald-300 font-bold">Precio Take Profit (R:R 1:{calcRRTarget}):</span>
                        <span className="text-emerald-400 font-black text-base">${targetPrice.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-[11px]">
                        <span className="text-slate-400">Ganancia Esperada ($):</span>
                        <span className="text-emerald-400 font-bold">+${targetProfitUSD.toFixed(2)} USD (+{(calcRiskPct * calcRRTarget).toFixed(1)}%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 italic text-center font-sans border-t border-slate-900 pt-2">
                    ✓ Coloca la orden en tu broker con el lotaje indicado para nunca arriesgar más de tu límite del {calcRiskPct}%.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'drawdown_matrix' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <TrendingDown className="w-5 h-5 text-rose-400" />
                  <span>LA MATEMÁTICA CRUEL DEL DRAWDOWN</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prueba el slider para verificar en tiempo real por qué perder un % exige una ganancia exponencialmente mayor sobre el capital restante solo para volver al punto de partida.
                </p>
              </div>

              <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Pérdida de Cuenta (Drawdown):</span>
                    <span className="text-rose-400 font-bold text-sm">-{testDrawdownPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="90"
                    step="5"
                    value={testDrawdownPct}
                    onChange={(e) => setTestDrawdownPct(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-950 cursor-pointer h-2 rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-slate-950 rounded-xl border border-rose-500/30">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Si Pierdes</span>
                    <span className="text-2xl font-black text-rose-400 font-mono">-{testDrawdownPct}%</span>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Necesitas Ganar</span>
                    <span className="text-2xl font-black text-emerald-400 font-mono">+{gainNeededPct.toFixed(1)}%</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {testDrawdownPct <= 10 && "Un drawdown del 10% es normal y manejable. Requiere solo +11.1% para recuperarse."}
                  {testDrawdownPct > 10 && testDrawdownPct <= 25 && "Drawdown bajo control (10%-25%). Requiere un esfuerzo moderado (+11% a +33%) para volver al máximo histórico."}
                  {testDrawdownPct > 25 && testDrawdownPct <= 50 && "⚠️ ZONA DE PELIGRO: Si caes un 50%, debes DUPLICAR tu cuenta (+100%) solo para volver al punto de partida."}
                  {testDrawdownPct > 50 && "🚨 ZONA DE RUINA: Caídas mayores al 50% destruyen la cuenta. Para un 80% de caída, necesitas un +400% de rentabilidad."}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'reglas_contrato' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-amber-400 font-mono flex items-center gap-2">
                  <PenTool className="w-4 h-4" />
                  <span>PLAN Y CONTRATO PERSONAL DE GESTIÓN DE RIESGO</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Comprométete por escrito con las 10 Reglas de Oro KIRAX para proteger tu capital en cada sesión.
                </p>
              </div>

              {/* 10 Golden Rules */}
              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 space-y-2 text-xs font-sans">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-2">
                  LAS 10 REGLAS DE ORO KIRAX:
                </span>
                {MODULE_3_SECTIONS[9].puntos?.slice(1).map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              {/* Digital Contract Signing */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 space-y-4 text-xs font-sans">
                <h4 className="text-xs font-bold text-amber-300 font-mono uppercase">Ritual de Compromiso - Firma Digital</h4>
                <p className="text-slate-300 leading-relaxed italic">
                  "Yo, <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="[Tu Nombre Completo]" className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-amber-300 font-bold focus:outline-none" />, me comprometo solemnemente a seguir este plan de gestión de riesgo en CADA operación que realice. Entiendo que romper cualquiera de estas reglas es sabotear mi propio futuro como trader. Mi capital es mi herramienta de trabajo; protegerlo es mi PRIORIDAD NÚMERO UNO."
                </p>

                <button
                  onClick={() => setContractSigned(true)}
                  disabled={!userName.trim()}
                  className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs font-mono shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all flex items-center gap-2 mx-auto"
                >
                  <PenTool className="w-4 h-4" />
                  <span>Firmar Contrato de Riesgo Digitalmente</span>
                </button>

                {contractSigned && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-xs text-emerald-300 font-mono">
                    ✓ Contrato firmado por {userName} el {new Date().toLocaleDateString()}. Tus reglas de riesgo están grabadas en tu terminal.
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
