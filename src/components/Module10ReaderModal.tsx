import React, { useState } from 'react';
import { 
  MODULE_10_METADATA, 
  MODULE_10_SECTIONS 
} from '../data/module10Data';
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
  Clock,
  Award,
  Check,
  FileText,
  Sliders,
  Calendar,
  DollarSign,
  PieChart,
  ClipboardList
} from 'lucide-react';

interface Module10ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Module10ReaderModal: React.FC<Module10ReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'secciones' | 'premarket' | 'execution_checklist' | 'journal_sim'>('secciones');
  const [selectedSection, setSelectedSection] = useState<number>(1);

  // Pre-Market Plan Builder State
  const [assetSymbol, setAssetSymbol] = useState<string>('XAUUSD');
  const [sessionName, setSessionName] = useState<'londres' | 'ny' | 'asia'>('ny');
  const [dailyBias, setDailyBias] = useState<'alcista' | 'bajista' | 'neutral'>('alcista');
  const [newsAlert, setNewsAlert] = useState<'ninguna' | 'cpi' | 'nfp' | 'fomc'>('ninguna');
  const [keyLevelSupport, setKeyLevelSupport] = useState<string>('2450.00');
  const [keyLevelResistance, setKeyLevelResistance] = useState<string>('2485.00');

  // Execution Checklist Validator State
  const [hasEntryDefined, setHasEntryDefined] = useState<boolean>(true);
  const [hasStopDefined, setHasStopDefined] = useState<boolean>(true);
  const [hasTargetDefined, setHasTargetDefined] = useState<boolean>(true);
  const [riskPercent, setRiskPercent] = useState<number>(1.0);
  const [accountBalance, setAccountBalance] = useState<number>(10000);
  const [stopDistancePips, setStopDistancePips] = useState<number>(25);

  // Trade Journal Simulator State
  const [journalTrades, setJournalJournalTrades] = useState<Array<{
    id: number;
    fecha: string;
    activo: string;
    direccion: 'BUY' | 'SELL';
    razon: string;
    resultadoR: number;
    emocion: string;
  }>>([
    { id: 1, fecha: '24/08/2026', activo: 'XAUUSD', direccion: 'BUY', razon: 'Sweep de liquidez H1 + Envolvente M5 en Soporte 2450', resultadoR: 2.5, emocion: 'Neutral / Disciplinado' },
    { id: 2, fecha: '23/08/2026', activo: 'EURUSD', direccion: 'SELL', razon: 'CHoCH M15 tras rechazo en Resistencia 1.0950', resultadoR: -1.0, emocion: 'Aceptación de Pérdida' }
  ]);

  const [newAsset, setNewAsset] = useState<string>('XAUUSD');
  const [newDir, setNewDir] = useState<'BUY' | 'SELL'>('BUY');
  const [newReason, setNewReason] = useState<string>('BOS M15 + Re-test de Demanda H1');
  const [newResultR, setNewResultR] = useState<number>(2.0);
  const [newEmotion, setNewEmotion] = useState<string>('Tranquilo / Calma');

  if (!isOpen) return null;

  const currentSec = MODULE_10_SECTIONS.find((s) => s.seccion === selectedSection) || MODULE_10_SECTIONS[0];

  // Calculation for Position Sizing
  const riskAmountUsd = (accountBalance * riskPercent) / 100;
  // Standard Pip Value estimation (for EURUSD/Gold approx $10 per pip per std lot)
  const estimatedLotSize = (riskAmountUsd / (stopDistancePips * 10)).toFixed(2);

  const handleAddJournalEntry = () => {
    if (!newReason) return;
    const entry = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString('es-ES'),
      activo: newAsset,
      direccion: newDir,
      razon: newReason,
      resultadoR: Number(newResultR),
      emocion: newEmotion
    };
    setJournalJournalTrades([entry, ...journalTrades]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col max-h-[90vh] overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg">
              10
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Lector Interactivo de Academia</span>
              <h2 className="text-lg md:text-xl font-black text-white">{MODULE_10_METADATA.titulo}</h2>
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
            Secciones Didácticas (1-12)
          </button>

          <button
            onClick={() => setActiveTab('premarket')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'premarket'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Plan Pre-Mercado
          </button>

          <button
            onClick={() => setActiveTab('execution_checklist')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'execution_checklist'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Calculadora & Checklist Quirúrgico
          </button>

          <button
            onClick={() => setActiveTab('journal_sim')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'journal_sim'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            Diario de Operaciones (Journal)
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-900/90">

          {/* TAB 1: SECCIONES DIDÁCTICAS */}
          {activeTab === 'secciones' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Section Selector Sidebar */}
              <div className="md:col-span-4 space-y-2 pr-0 md:pr-2 md:border-r border-slate-800 max-h-[60vh] overflow-y-auto">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Índice del Módulo 10</p>
                {MODULE_10_SECTIONS.map((sec) => (
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
                    SECCIÓN {currentSec.seccion} DE 12
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
                  <span className="text-xs font-mono text-slate-500">{selectedSection} / 12</span>
                  <button
                    disabled={selectedSection === 12}
                    onClick={() => setSelectedSection(prev => Math.min(12, prev + 1))}
                    className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 disabled:opacity-40 transition-all"
                  >
                    Siguiente Sección →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PLAN PRE-MERCADO */}
          {activeTab === 'premarket' && (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <Calendar className="w-4 h-4" />
                  CONSTRUCTOR DE HOJA DE RUTA DIARIA
                </div>
                <h3 className="text-xl font-black text-white">Generador de Tarjeta Pre-Mercado</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Configura los parámetros clave antes de la sesión para emitir tu tarjeta de ejecución profesional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Controls */}
                <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-xl space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Activo Financiero:</label>
                    <input
                      type="text"
                      value={assetSymbol}
                      onChange={(e) => setAssetSymbol(e.target.value.toUpperCase())}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white font-mono font-bold focus:border-amber-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Sesión Bursátil:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['londres', 'ny', 'asia'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSessionName(s)}
                          className={`p-2 rounded-lg font-bold uppercase transition-all ${
                            sessionName === s ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 border border-slate-800 text-slate-400'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Sesgo Diario (HTF Bias):</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setDailyBias('alcista')}
                        className={`p-2 rounded-lg font-bold transition-all ${
                          dailyBias === 'alcista' ? 'bg-emerald-950 border border-emerald-500 text-emerald-300' : 'bg-slate-900 border border-slate-800 text-slate-400'
                        }`}
                      >
                        📈 Alcista
                      </button>
                      <button
                        onClick={() => setDailyBias('bajista')}
                        className={`p-2 rounded-lg font-bold transition-all ${
                          dailyBias === 'bajista' ? 'bg-red-950 border border-red-500 text-red-300' : 'bg-slate-900 border border-slate-800 text-slate-400'
                        }`}
                      >
                        📉 Bajista
                      </button>
                      <button
                        onClick={() => setDailyBias('neutral')}
                        className={`p-2 rounded-lg font-bold transition-all ${
                          dailyBias === 'neutral' ? 'bg-amber-950 border border-amber-500 text-amber-300' : 'bg-slate-900 border border-slate-800 text-slate-400'
                        }`}
                      >
                        ↔️ Neutral
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Alerta de Noticias de Alto Impacto:</label>
                    <select
                      value={newsAlert}
                      onChange={(e) => setNewsAlert(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white font-medium outline-none"
                    >
                      <option value="ninguna">Sin Noticias Importantes</option>
                      <option value="cpi">CPI (IPC Inflación EE.UU.) - 13:30 GMT</option>
                      <option value="nfp">NFP (Nóminas No Agrícolas) - 13:30 GMT</option>
                      <option value="fomc">FOMC (Tasas de Interés FED) - 19:00 GMT</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-400 font-bold mb-1">Nivel Soporte H1:</label>
                      <input
                        type="text"
                        value={keyLevelSupport}
                        onChange={(e) => setKeyLevelSupport(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-emerald-400 font-mono font-bold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 font-bold mb-1">Nivel Resistencia H1:</label>
                      <input
                        type="text"
                        value={keyLevelResistance}
                        onChange={(e) => setKeyLevelResistance(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-red-400 font-mono font-bold outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Generated Card Display */}
                <div className="bg-slate-950 border border-amber-500/30 p-6 rounded-xl space-y-5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">HOJA DE RUTA PRE-MERCADO</span>
                        <h4 className="text-2xl font-black text-white">{assetSymbol} • <span className="uppercase text-amber-400">{sessionName}</span></h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                        dailyBias === 'alcista' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' :
                        dailyBias === 'bajista' ? 'bg-red-950 text-red-400 border border-red-500/40' :
                        'bg-amber-950 text-amber-400 border border-amber-500/40'
                      }`}>
                        Sesgo {dailyBias}
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 font-bold">Estrategia Preferente:</span>
                        <span className="text-white font-bold">
                          {dailyBias === 'alcista' ? 'Buscar Compras en Soporte ' + keyLevelSupport :
                           dailyBias === 'bajista' ? 'Buscar Ventas en Resistencia ' + keyLevelResistance :
                           'Esperar Ruptura fuera del rango (' + keyLevelSupport + ' - ' + keyLevelResistance + ')'}
                        </span>
                      </div>

                      <div className="flex justify-between p-2.5 rounded bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 font-bold">Protocolo de Noticias:</span>
                        <span className={newsAlert !== 'ninguna' ? 'text-amber-400 font-bold flex items-center gap-1' : 'text-slate-300'}>
                          {newsAlert !== 'ninguna' ? '⚠️ Pausar operativa 15 min antes del evento' : '✅ Sin restricciones por calendario'}
                        </span>
                      </div>

                      <div className="p-3 rounded bg-slate-900/80 border border-slate-800 space-y-1">
                        <span className="text-slate-400 font-bold block">Regla de Invalidez de Sesión:</span>
                        <p className="text-slate-300 leading-relaxed font-medium">
                          {dailyBias === 'alcista' ? `Si el precio rompe el soporte ${keyLevelSupport} con vela H1 cerrada por debajo, el sesgo alcista se anula.` :
                           dailyBias === 'bajista' ? `Si el precio supera la resistencia ${keyLevelResistance} con vela H1 cerrada por encima, el sesgo bajista se anula.` :
                           'Permanecer fuera del mercado hasta confirmar quiebre de estructura.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] font-mono text-slate-500">
                    <span>Kirax Execution Card</span>
                    <span>Status: LISTO PARA LA SESIÓN</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CHECKLIST QUIRÚRGICO & CALCULADORA */}
          {activeTab === 'execution_checklist' && (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  GESTIÓN MATEMÁTICA Y CHECKLIST ANTES DE ENTRAR
                </div>
                <h3 className="text-xl font-black text-white">Calculadora de Lotaje y Validación Quirúrgica</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Ingresa el saldo de tu cuenta y la distancia al Stop Loss en pips para obtener el tamaño de lote exacto y validar el cumplimiento del protocolo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Position Size Calculator */}
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl space-y-4">
                  <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Calculadora de Tamaño de Posición
                  </h4>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-400 font-bold mb-1">Balance de la Cuenta (USD):</label>
                      <input
                        type="number"
                        value={accountBalance}
                        onChange={(e) => setAccountBalance(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white font-mono font-bold outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-bold mb-1">Porcentaje de Riesgo Fijo (%):</label>
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min="0.25"
                          max="2.0"
                          step="0.25"
                          value={riskPercent}
                          onChange={(e) => setRiskPercent(Number(e.target.value))}
                          className="w-full accent-amber-400"
                        />
                        <span className="font-mono font-black text-amber-400 text-sm">{riskPercent}%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 font-bold mb-1">Distancia Técnica al Stop Loss (Pips):</label>
                      <input
                        type="number"
                        value={stopDistancePips}
                        onChange={(e) => setStopDistancePips(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-white font-mono font-bold outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-bold">Riesgo Monetario Máximo:</span>
                      <span className="font-mono text-emerald-400 font-bold">${riskAmountUsd.toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-800">
                      <span className="text-amber-400 font-black">Tamaño Sugerido en Lotes:</span>
                      <span className="font-mono text-xl font-black text-white">{estimatedLotSize} Lotes</span>
                    </div>
                  </div>
                </div>

                {/* Surgical Checklist */}
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl space-y-4">
                  <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Checklist Quirúrgico (3 Condiciones)
                  </h4>

                  <div className="space-y-3">
                    <button
                      onClick={() => setHasEntryDefined(!hasEntryDefined)}
                      className={`w-full p-3 rounded-xl border text-left font-bold text-xs flex items-center justify-between transition-all ${
                        hasEntryDefined ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span>1. Entrada Definida (Precio o Cierre exacto)</span>
                      {hasEntryDefined ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />}
                    </button>

                    <button
                      onClick={() => setHasStopDefined(!hasStopDefined)}
                      className={`w-full p-3 rounded-xl border text-left font-bold text-xs flex items-center justify-between transition-all ${
                        hasStopDefined ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span>2. Stop Loss Fijo en Estructura (Medido)</span>
                      {hasStopDefined ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />}
                    </button>

                    <button
                      onClick={() => setHasTargetDefined(!hasTargetDefined)}
                      className={`w-full p-3 rounded-xl border text-left font-bold text-xs flex items-center justify-between transition-all ${
                        hasTargetDefined ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span>3. Target de Take Profit Objetivo (&gt;= 1:2 R:R)</span>
                      {hasTargetDefined ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-slate-600" />}
                    </button>
                  </div>

                  <div className={`p-4 rounded-xl border text-center font-bold text-xs ${
                    hasEntryDefined && hasStopDefined && hasTargetDefined
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-red-950 border-red-500 text-red-300'
                  }`}>
                    {hasEntryDefined && hasStopDefined && hasTargetDefined
                      ? '🚀 EJECUCIÓN AUTORIZADA — CUMPLE PROTOCOLO QUIRÚRGICO'
                      : '🛑 EJECUCIÓN BLOQUEADA — FALTA DEFINIR VARIABLES DE SALIDA'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DIARIO DE OPERACIONES (JOURNAL SIMULATOR) */}
          {activeTab === 'journal_sim' && (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <ClipboardList className="w-4 h-4" />
                  AUDITORÍA Y MEJORA CONTINUA
                </div>
                <h3 className="text-xl font-black text-white">Simulador de Journal de Trading</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Registra tus operaciones terminadas para evaluar tu tasa de cumplimiento y corregir desvíos emocionales.
                </p>
              </div>

              {/* Entry Input Form */}
              <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl space-y-4">
                <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider">Agregar Nueva Entrada al Diario</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Activo:</label>
                    <input
                      type="text"
                      value={newAsset}
                      onChange={(e) => setNewAsset(e.target.value.toUpperCase())}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-mono font-bold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Dirección:</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setNewDir('BUY')}
                        className={`flex-1 p-2 rounded-lg font-bold ${newDir === 'BUY' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}
                      >
                        BUY
                      </button>
                      <button
                        onClick={() => setNewDir('SELL')}
                        className={`flex-1 p-2 rounded-lg font-bold ${newDir === 'SELL' ? 'bg-red-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}
                      >
                        SELL
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Resultado en R:</label>
                    <input
                      type="number"
                      step="0.5"
                      value={newResultR}
                      onChange={(e) => setNewResultR(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-mono font-bold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Estado Emocional:</label>
                    <input
                      type="text"
                      value={newEmotion}
                      onChange={(e) => setNewEmotion(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white font-medium outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1 text-xs">Razón Técnica de Entrada:</label>
                  <input
                    type="text"
                    value={newReason}
                    onChange={(e) => setNewReason(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white text-xs font-medium outline-none"
                  />
                </div>

                <button
                  onClick={handleAddJournalEntry}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all"
                >
                  ➕ Guardar Operación en Journal
                </button>
              </div>

              {/* Journal Table Display */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900 text-amber-400 font-bold">
                      <th className="p-3">Fecha</th>
                      <th className="p-3">Activo</th>
                      <th className="p-3">Tipo</th>
                      <th className="p-3">Razón Técnica</th>
                      <th className="p-3">Resultado</th>
                      <th className="p-3">Estado Emocional</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {journalTrades.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-900/50 font-medium">
                        <td className="p-3 font-mono text-slate-400">{t.fecha}</td>
                        <td className="p-3 font-bold text-white">{t.activo}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded font-black text-[10px] ${t.direccion === 'BUY' ? 'bg-emerald-950 text-emerald-400' : 'bg-red-950 text-red-400'}`}>
                            {t.direccion}
                          </span>
                        </td>
                        <td className="p-3 text-slate-300">{t.razon}</td>
                        <td className="p-3 font-mono font-bold">
                          <span className={t.resultadoR >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                            {t.resultadoR > 0 ? `+${t.resultadoR}R` : `${t.resultadoR}R`}
                          </span>
                        </td>
                        <td className="p-3 text-slate-400 italic">{t.emocion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-t border-slate-800 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Academia KIRAX — Módulo 10 Certificado</span>
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
