import React, { useState, useEffect } from 'react';
import { 
  MODULE_1_METADATA, 
  MODULE_1_CHAPTERS, 
  MODULE_1_GLOSSARY 
} from '../data/module1Data';
import { MembershipTier } from '../types';
import { 
  X, 
  BookOpen, 
  HeartPulse, 
  CheckCircle2, 
  Brain, 
  ShieldAlert, 
  FileText, 
  Sparkles, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw,
  Check,
  ChevronRight,
  Flame,
  HelpCircle,
  Lock,
  Zap
} from 'lucide-react';

interface Module1ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  membresia?: MembershipTier;
  onUpgradeTier?: () => void;
}

export const Module1ReaderModal: React.FC<Module1ReaderModalProps> = ({
  isOpen,
  onClose,
  membresia = 'PRO',
  onUpgradeTier,
}) => {
  const [activeTab, setActiveTab] = useState<'contenido' | 'ejercicios' | 'test' | 'glosario'>('contenido');
  const [selectedChapter, setSelectedChapter] = useState<number>(1);

  // Breathing 4-7-8 Exercise State
  const [breathingActive, setBreathingActive] = useState<boolean>(false);
  const [breathPhase, setBreathingPhase] = useState<'Inhala' | 'Sostén' | 'Exhala' | 'Listo'>('Inhala');
  const [breathTimer, setBreathTimer] = useState<number>(4);
  const [breathCycles, setBreathCycles] = useState<number>(0);

  // Self Evaluation Test Answers State
  const [testAnswers, setTestAnswers] = useState<{ [key: number]: string }>({});
  const [testCompleted, setTestCompleted] = useState<boolean>(false);

  // Emotional Semaforo Choice State
  const [semaforoColor, setSemaforoColor] = useState<'verde' | 'amarillo' | 'rojo' | null>(null);

  // Tactical Breathing Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev > 1) return prev - 1;

          // Transition phases
          if (breathPhase === 'Inhala') {
            setBreathingPhase('Sostén');
            return 7;
          } else if (breathPhase === 'Sostén') {
            setBreathingPhase('Exhala');
            return 8;
          } else if (breathPhase === 'Exhala') {
            setBreathCycles((c) => c + 1);
            setBreathingPhase('Inhala');
            return 4;
          }
          return 4;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [breathingActive, breathPhase]);

  if (!isOpen) return null;

  const currentChapter = MODULE_1_CHAPTERS.find((c) => c.capitulo === selectedChapter) || MODULE_1_CHAPTERS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a0f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase font-mono">
                  MÓDULO 1
                </span>
                <span className="text-xs text-amber-400/80 font-mono font-bold">
                  {MODULE_1_METADATA.subtitulo}
                </span>
              </div>
              <h2 className="text-base font-black text-white font-sans tracking-wide">
                Psicología I: Los Cimientos Mentales
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Tabs */}
            <div className="hidden md:flex items-center bg-slate-950 p-1 rounded-xl border border-white/10 font-mono text-xs">
              <button
                onClick={() => setActiveTab('contenido')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'contenido'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Capítulos (1-5)</span>
              </button>

              <button
                onClick={() => setActiveTab('ejercicios')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'ejercicios'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Ejercicios 4-7-8</span>
              </button>

              <button
                onClick={() => setActiveTab('test')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'test'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Autoevaluación</span>
              </button>

              <button
                onClick={() => setActiveTab('glosario')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'glosario'
                    ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Glosario</span>
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
            onClick={() => setActiveTab('contenido')}
            className={`px-2 py-1 rounded ${activeTab === 'contenido' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Contenido
          </button>
          <button
            onClick={() => setActiveTab('ejercicios')}
            className={`px-2 py-1 rounded ${activeTab === 'ejercicios' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Ejercicios
          </button>
          <button
            onClick={() => setActiveTab('test')}
            className={`px-2 py-1 rounded ${activeTab === 'test' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Test
          </button>
          <button
            onClick={() => setActiveTab('glosario')}
            className={`px-2 py-1 rounded ${activeTab === 'glosario' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
          >
            Glosario
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          {activeTab === 'contenido' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar Chapter Selector */}
              <div className="lg:col-span-1 space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Capítulos del Módulo 1
                </span>
                {MODULE_1_CHAPTERS.map((ch) => {
                  const isSelected = selectedChapter === ch.capitulo;
                  const isChLocked = ch.capitulo > 1 && membresia === 'GRATIS';
                  return (
                    <button
                      key={ch.capitulo}
                      onClick={() => setSelectedChapter(ch.capitulo)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-white shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          : isChLocked
                          ? 'bg-slate-950/40 border-white/5 opacity-70 hover:opacity-100 text-slate-400'
                          : 'bg-slate-900/60 border-white/5 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="font-bold text-amber-400 flex items-center gap-1">
                          Capítulo {ch.capitulo}
                          {isChLocked && <Lock className="w-3 h-3 text-amber-500 inline ml-1" />}
                        </span>
                        <span className="text-slate-500">{isChLocked ? 'BLOQUEADO' : ch.duracionEstimada}</span>
                      </div>
                      <span className="text-xs font-bold leading-tight line-clamp-1">{ch.titulo}</span>
                    </button>
                  );
                })}

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mt-6 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Progreso de Lectura</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Al finalizar los 5 capítulos, dirígete a la pestaña del Simulador de Examen para resolver 20 preguntas aleatorias.
                  </p>
                </div>
              </div>

              {/* Main Chapter Content Display */}
              <div className="lg:col-span-3 space-y-6 bg-slate-900/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                {selectedChapter > 1 && membresia === 'GRATIS' ? (
                  <div className="p-8 rounded-2xl bg-[#0d1017] border border-amber-500/40 text-center space-y-4 my-auto shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
                      <Lock className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                        VISTA PREVIA GRATUITA LIMITADA
                      </span>
                      <h3 className="text-lg font-black text-white">
                        Capítulo {selectedChapter}: Reservado para Usuarios PRO / ELITE
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Con la versión <strong>GRATIS</strong> tienes acceso exclusivo al <strong>Capítulo 1 del Módulo 1</strong>. Suscríbete a KIRAX PRO para desbloquear los 5 capítulos completos de este módulo y los 10 módulos académicos.
                    </p>
                    <button
                      onClick={onUpgradeTier}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center gap-2 mx-auto"
                    >
                      <Zap className="w-4 h-4 fill-slate-950" />
                      <span>Activar KIRAX PRO ($19)</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono text-amber-400 font-bold">
                          CAPÍTULO {currentChapter.capitulo} DE 5
                        </span>
                        <h1 className="text-xl font-extrabold text-white font-sans mt-0.5">
                          {currentChapter.titulo}
                        </h1>
                      </div>
                      <span className="text-xs font-mono text-slate-400 px-3 py-1 bg-slate-950 rounded-lg border border-slate-800">
                        Duración: {currentChapter.duracionEstimada}
                      </span>
                    </div>

                    {/* Chapter Sections */}
                    {currentChapter.secciones.map((sec, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-sm font-bold text-amber-300 font-mono flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-amber-400" />
                          {sec.subtitulo}
                        </h3>

                        {sec.contenido.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-xs text-slate-300 leading-relaxed font-sans">
                            {paragraph}
                          </p>
                        ))}

                        {/* Table if present */}
                        {sec.tabla && (
                          <div className="overflow-x-auto my-3 rounded-xl border border-slate-800">
                            <table className="w-full text-left text-xs font-sans">
                              <thead className="bg-slate-950 text-amber-400 font-mono text-[11px]">
                                <tr>
                                  {sec.tabla.headers.map((h, hIdx) => (
                                    <th key={hIdx} className="p-3 border-b border-slate-800">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                                {sec.tabla.filas.map((row, rIdx) => (
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

                        {/* List Bullet points if present */}
                        {sec.puntos && (
                          <ul className="space-y-1.5 pl-2 my-2 text-xs text-slate-300 font-sans">
                            {sec.puntos.map((pt, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2">
                                <span className="text-amber-400 shrink-0">•</span>
                                <span className="leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'ejercicios' && (
            <div className="space-y-8 max-w-3xl mx-auto">
              {/* Exercise 1: Tactical Breathing 4-7-8 */}
              <div className="bg-slate-900/80 p-6 rounded-2xl border border-amber-500/30 text-center space-y-4 shadow-xl">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold font-mono text-sm">
                  <HeartPulse className="w-5 h-5 animate-pulse" />
                  <span>EJERCICIO 3: RESPIRACIÓN TÁCTICA NAVY SEAL (4-7-8)</span>
                </div>
                <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Técnica utilizada por las fuerzas especiales antes de entrar al combate. Neutraliza la descarga de adrenalina y devuelve la mente al estado de ejecución racional.
                </p>

                <div className="my-6">
                  <div className="w-40 h-40 rounded-full border-4 border-amber-500/40 flex flex-col items-center justify-center mx-auto bg-slate-950 relative shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      {breathPhase}
                    </span>
                    <span className="text-5xl font-black text-white font-mono my-1">
                      {breathTimer}s
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Ciclos: {breathCycles}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setBreathingActive(!breathingActive);
                      if (!breathingActive) {
                        setBreathingPhase('Inhala');
                        setBreathTimer(4);
                      }
                    }}
                    className={`py-2.5 px-6 rounded-xl font-mono font-bold text-xs flex items-center gap-2 transition-all shadow-lg ${
                      breathingActive
                        ? 'bg-rose-500 hover:bg-rose-400 text-white'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                    }`}
                  >
                    {breathingActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{breathingActive ? 'Pausar Ejercicio' : 'Iniciar Respiración 4-7-8'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setBreathingActive(false);
                      setBreathingPhase('Inhala');
                      setBreathTimer(4);
                      setBreathCycles(0);
                    }}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Exercise 2: Emotional Semaforo Interactive Check-in */}
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>EJERCICIO 2: EL SEMÁFORO EMOCIONAL ANTES DE OPERAR</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Evalúa honestamente tu estado mental actual antes de abrir tu terminal de trading:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setSemaforoColor('verde')}
                    className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                      semaforoColor === 'verde'
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono font-bold text-xs text-emerald-400">VERDE: Enfoque Total</span>
                    <span className="text-[11px] text-slate-400">Tranquilo, disciplinado. PUEDES OPERAR normal según tu plan.</span>
                  </button>

                  <button
                    onClick={() => setSemaforoColor('amarillo')}
                    className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                      semaforoColor === 'amarillo'
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-mono font-bold text-xs text-amber-400">AMARILLO: Cautela</span>
                    <span className="text-[11px] text-slate-400">Ligeramente ansioso o cansado. Máximo 2 setups perfectos y 50% riesgo.</span>
                  </button>

                  <button
                    onClick={() => setSemaforoColor('rojo')}
                    className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                      semaforoColor === 'rojo'
                        ? 'bg-rose-500/20 border-rose-400 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse" />
                    <span className="font-mono font-bold text-xs text-rose-400">ROJO: Bloqueo Operativo</span>
                    <span className="text-[11px] text-slate-400">Enfadado, eufórico o triste. NO OPERES. Cierra todo y camina 15 minutos.</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'test' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 space-y-2">
                <h2 className="text-base font-bold text-white font-sans">
                  CAPÍTULO 4: TEST DE AUTOEVALUACIÓN PSICOLÓGICA
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Responde con brutal honestidad. Nadie más verá estas respuestas; sirven para diagnosticar tus disparadores emocionales antes de arriesgar capital real.
                </p>
              </div>

              {MODULE_1_CHAPTERS[3].secciones[0].puntos?.map((pregunta, idx) => (
                <div key={idx} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 space-y-2">
                  <label className="text-xs font-bold text-amber-300 block font-sans">
                    {pregunta}
                  </label>
                  <textarea
                    rows={2}
                    value={testAnswers[idx] || ''}
                    onChange={(e) => setTestAnswers({ ...testAnswers, [idx]: e.target.value })}
                    placeholder="Escribe tu reflexión detallada aquí..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:border-amber-500 focus:outline-none font-sans"
                  />
                </div>
              ))}

              <button
                onClick={() => setTestCompleted(true)}
                className="py-3 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all flex items-center gap-2 mx-auto"
              >
                <Check className="w-4 h-4" />
                <span>Guardar Diagnóstico Personal</span>
              </button>

              {testCompleted && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center text-xs text-emerald-300">
                  ✓ Autoevaluación guardada en tu bitácora mental de la terminal. ¡Estás listo para el examen!
                </div>
              )}
            </div>
          )}

          {activeTab === 'glosario' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MODULE_1_GLOSSARY.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-amber-400 font-mono block">
                    {item.termino}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.definicion}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
