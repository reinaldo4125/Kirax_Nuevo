import React, { useState } from 'react';
import { MembershipTier } from '../types';
import { ACADEMY_MODULES, SAMPLE_EXAM_QUESTIONS } from '../data/mockData';
import { MODULE_1_EXAM_BANK } from '../data/module1Data';
import { MODULE_2_EXAM_BANK } from '../data/module2Data';
import { MODULE_3_EXAM_BANK } from '../data/module3Data';
import { MODULE_4_EXAM_BANK } from '../data/module4Data';
import { MODULE_5_EXAM_BANK } from '../data/module5Data';
import { MODULE_6_EXAM_BANK } from '../data/module6Data';
import { MODULE_7_EXAM_BANK } from '../data/module7Data';
import { MODULE_8_EXAM_BANK } from '../data/module8Data';
import { MODULE_9_EXAM_BANK } from '../data/module9Data';
import { MODULE_10_EXAM_BANK } from '../data/module10Data';
import { Module1ReaderModal } from './Module1ReaderModal';
import { Module2ReaderModal } from './Module2ReaderModal';
import { Module3ReaderModal } from './Module3ReaderModal';
import { Module4ReaderModal } from './Module4ReaderModal';
import { Module5ReaderModal } from './Module5ReaderModal';
import { Module6ReaderModal } from './Module6ReaderModal';
import { Module7ReaderModal } from './Module7ReaderModal';
import { Module8ReaderModal } from './Module8ReaderModal';
import { Module9ReaderModal } from './Module9ReaderModal';
import { Module10ReaderModal } from './Module10ReaderModal';
import { CertificateModal } from './CertificateModal';
import { KiraxLogo } from './KiraxLogo';
import { BookOpen, FileText, Award, CheckCircle, HelpCircle, ArrowRight, Play, RotateCcw, Clock, Sparkles, Layers, GraduationCap, CheckCircle2, Lock, Zap } from 'lucide-react';

interface AcademyProps {
  membresia: MembershipTier;
  onUpgradeTier: () => void;
  userName?: string;
}

export const Academy: React.FC<AcademyProps> = ({
  membresia,
  onUpgradeTier,
  userName = 'Trader Profesional KIRAX'
}) => {
  const [activeTab, setActiveTab] = useState<'modulos' | 'examen'>('modulos');
  const [showModule1Reader, setShowModule1Reader] = useState<boolean>(false);
  const [showModule2Reader, setShowModule2Reader] = useState<boolean>(false);
  const [showModule3Reader, setShowModule3Reader] = useState<boolean>(false);
  const [showModule4Reader, setShowModule4Reader] = useState<boolean>(false);
  const [showModule5Reader, setShowModule5Reader] = useState<boolean>(false);
  const [showModule6Reader, setShowModule6Reader] = useState<boolean>(false);
  const [showModule7Reader, setShowModule7Reader] = useState<boolean>(false);
  const [showModule8Reader, setShowModule8Reader] = useState<boolean>(false);
  const [showModule9Reader, setShowModule9Reader] = useState<boolean>(false);
  const [showModule10Reader, setShowModule10Reader] = useState<boolean>(false);

  // Completion Tracking State
  const [completedModules, setCompletedModules] = useState<number[]>(() => {
    const saved = localStorage.getItem('kirax_completed_modules');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }
    }
    // Default all 10 modules completed so user can immediately view/get certificate
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });

  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);

  const toggleModuleCompletion = (moduleId: number) => {
    setCompletedModules((prev) => {
      let updated: number[];
      if (prev.includes(moduleId)) {
        updated = prev.filter((id) => id !== moduleId);
      } else {
        updated = [...prev, moduleId];
      }
      localStorage.setItem('kirax_completed_modules', JSON.stringify(updated));
      return updated;
    });
  };

  const handleMarkAllCompleted = () => {
    const all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setCompletedModules(all);
    localStorage.setItem('kirax_completed_modules', JSON.stringify(all));
  };

  // Exam Module Selection
  const [selectedExamModule, setSelectedExamModule] = useState<number>(1);

  // Exam Simulator State
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [examFinished, setExamFinished] = useState<boolean>(false);

  // Active Questions Selection based on module
  const activeQuestions = selectedExamModule === 1 
    ? MODULE_1_EXAM_BANK 
    : selectedExamModule === 2 
    ? MODULE_2_EXAM_BANK 
    : selectedExamModule === 3
    ? MODULE_3_EXAM_BANK
    : selectedExamModule === 4
    ? MODULE_4_EXAM_BANK
    : selectedExamModule === 5
    ? MODULE_5_EXAM_BANK
    : selectedExamModule === 6
    ? MODULE_6_EXAM_BANK
    : selectedExamModule === 7
    ? MODULE_7_EXAM_BANK
    : selectedExamModule === 8
    ? MODULE_8_EXAM_BANK
    : selectedExamModule === 9
    ? MODULE_9_EXAM_BANK
    : selectedExamModule === 10
    ? MODULE_10_EXAM_BANK
    : SAMPLE_EXAM_QUESTIONS;

  const totalQuestions = activeQuestions.length;

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setExamFinished(true);
      // Auto complete module if score >= 70%
      const score = calculateScore();
      if (score / totalQuestions >= 0.7) {
        if (!completedModules.includes(selectedExamModule)) {
          toggleModuleCompletion(selectedExamModule);
        }
      }
    }
  };

  const handleRestartExam = () => {
    setExamStarted(false);
    setExamFinished(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
  };

  const calculateScore = () => {
    let score = 0;
    activeQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.respuestaCorrecta) {
        score++;
      }
    });
    return score;
  };

  const isAllCompleted = completedModules.length === 10;
  const completionPercentage = Math.round((completedModules.length / 10) * 100);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass rounded-2xl p-6 border border-white/10 bg-slate-900/80 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <KiraxLogo size="lg" showText={false} />
          <div>
            <h1 className="text-xl font-extrabold text-white tracking-wide font-sans flex items-center gap-2">
              KIRAX Academy — Formación Profesional
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Programa completo en 10 Módulos + Banco de 500 Preguntas + Certificación Oficial.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Certificate Action Button */}
          <button
            onClick={() => setShowCertificateModal(true)}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-lg ${
              isAllCompleted
                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_0_25px_rgba(212,175,55,0.5)] animate-pulse'
                : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-slate-950" />
            <span>{isAllCompleted ? '🎓 OBTENER CERTIFICADO DE GRADUACIÓN' : `🎓 CERTIFICADO (${completionPercentage}%)`}</span>
          </button>

          <div className="flex items-center gap-2 bg-slate-950/80 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('modulos')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'modulos'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Los 10 Módulos
            </button>
            <button
              onClick={() => setActiveTab('examen')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'examen'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Simulador de Examen
            </button>
          </div>
        </div>
      </div>

      {/* Course Completion Progress Bar Banner */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-amber-500/30 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex-1 min-w-[260px] space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-amber-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              PROGRESO DE GRADUACIÓN ACADÉMICA
            </span>
            <span className="text-white">
              {completedModules.length} de 10 Módulos Completados ({completionPercentage}%)
            </span>
          </div>

          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isAllCompleted && (
            <button
              onClick={handleMarkAllCompleted}
              className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all"
            >
              Marcar Todos como Completados
            </button>
          )}

          <button
            onClick={() => setShowCertificateModal(true)}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ver Diploma Oficial</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'modulos' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACADEMY_MODULES.map((modulo) => {
            const isCompleted = completedModules.includes(modulo.id);
            const isLocked = 
              membresia === 'GRATIS' 
                ? modulo.id > 1 
                : membresia === 'PRO' 
                ? modulo.id > 5 
                : false;
            return (
              <div
                key={modulo.id}
                className={`glass rounded-2xl p-5 border backdrop-blur-xl flex flex-col justify-between transition-all group duration-300 shadow-xl ${
                  isLocked
                    ? 'bg-slate-950/70 border-white/5 opacity-80 hover:opacity-100'
                    : isCompleted 
                    ? 'bg-slate-900/80 border-amber-500/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                    : 'bg-slate-900/60 border-white/10 hover:border-amber-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                        Módulo {modulo.id}
                      </span>
                      {isLocked && (
                        <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-amber-400" />
                          <span>{membresia === 'GRATIS' ? 'PRO' : 'ELITE'}</span>
                        </span>
                      )}
                    </div>

                    {!isLocked && (
                      <button
                        onClick={() => toggleModuleCompletion(modulo.id)}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 border transition-all ${
                          isCompleted
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-amber-300'
                        }`}
                        title="Haz clic para marcar o desmarcar este módulo como completado"
                      >
                        <CheckCircle2 className={`w-3 h-3 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
                        <span>{isCompleted ? 'Completado ✓' : 'Pendiente'}</span>
                      </button>
                    )}
                  </div>

                  <h3 className="text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                    {modulo.titulo}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {modulo.descripcion}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {modulo.duracion}
                  </span>

                  {isLocked ? (
                    <button
                      onClick={onUpgradeTier}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1 transition-all"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{membresia === 'GRATIS' ? 'Desbloquear (PRO)' : 'Desbloquear (ELITE)'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (!completedModules.includes(modulo.id)) {
                          toggleModuleCompletion(modulo.id);
                        }
                        if (modulo.id === 1) setShowModule1Reader(true);
                        else if (modulo.id === 2) setShowModule2Reader(true);
                        else if (modulo.id === 3) setShowModule3Reader(true);
                        else if (modulo.id === 4) setShowModule4Reader(true);
                        else if (modulo.id === 5) setShowModule5Reader(true);
                        else if (modulo.id === 6) setShowModule6Reader(true);
                        else if (modulo.id === 7) setShowModule7Reader(true);
                        else if (modulo.id === 8) setShowModule8Reader(true);
                        else if (modulo.id === 9) setShowModule9Reader(true);
                        else if (modulo.id === 10) setShowModule10Reader(true);
                        else setShowModule1Reader(true);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/30 text-xs font-semibold flex items-center gap-1 transition-all"
                    >
                      <span>Abrir Material</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Exam Simulator View */
        <div className="glass rounded-2xl p-8 border border-white/10 bg-slate-900/80 backdrop-blur-xl max-w-3xl mx-auto shadow-2xl">
          {!examStarted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-black text-white">Simulador de Examen KIRAX Academy</h2>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Evaluación técnica aleatoria extraída del banco maestro de 500 preguntas del módulo seleccionado.
              </p>

              {/* Module Selector for Exam */}
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto my-2 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((modId) => {
                  const isModLocked = 
                    membresia === 'GRATIS' 
                      ? modId > 1 
                      : membresia === 'PRO' 
                      ? modId > 5 
                      : false;
                  return (
                    <button
                      key={modId}
                      onClick={() => {
                        if (isModLocked) {
                          onUpgradeTier();
                        } else {
                          setSelectedExamModule(modId);
                        }
                      }}
                      className={`flex-1 min-w-[55px] py-1.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1 ${
                        selectedExamModule === modId && !isModLocked
                          ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                          : isModLocked
                          ? 'text-slate-600 hover:text-amber-400'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>Mod {modId}</span>
                      {isModLocked && <Lock className="w-2.5 h-2.5 text-amber-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Módulo Seleccionado:</span>
                  <span className="font-bold text-amber-400">Módulo {selectedExamModule}</span>
                </div>
                <div className="flex justify-between">
                  <span>Preguntas del examen:</span>
                  <span className="font-bold text-amber-400">{totalQuestions} preguntas</span>
                </div>
                <div className="flex justify-between">
                  <span>Puntaje mínimo de aprobación:</span>
                  <span className="font-bold text-emerald-400">70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Certificación:</span>
                  <span className="font-bold text-slate-200">KIRAX Certified Scalper</span>
                </div>
              </div>

              <button
                onClick={() => setExamStarted(true)}
                className="py-3 px-8 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 mx-auto"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Iniciar Examen Ahora</span>
              </button>
            </div>
          ) : !examFinished ? (
            /* Active Question */
            <div className="space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold text-amber-400 font-mono">
                  Pregunta {currentQuestionIndex + 1} de {totalQuestions}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono">
                  {(activeQuestions[currentQuestionIndex] as any).seccion || `Módulo ${selectedExamModule}`}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-base font-bold text-white leading-snug">
                {activeQuestions[currentQuestionIndex].pregunta}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {activeQuestions[currentQuestionIndex].opciones.map((opcion, idx) => {
                  const isSelected =
                    selectedAnswers[activeQuestions[currentQuestionIndex].id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() =>
                        handleSelectOption(activeQuestions[currentQuestionIndex].id, idx)
                      }
                      className={`w-full p-4 rounded-xl text-left text-xs font-medium transition-all flex items-start gap-3 border ${
                        isSelected
                          ? 'bg-amber-500/20 text-white border-amber-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px] ${
                        isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{opcion}</span>
                    </button>
                  );
                })}
              </div>

              {/* Next Controls */}
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  disabled={
                    selectedAnswers[activeQuestions[currentQuestionIndex].id] === undefined
                  }
                  className="py-2.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  <span>
                    {currentQuestionIndex === totalQuestions - 1
                      ? 'Finalizar y Calificar'
                      : 'Siguiente Pregunta'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h2 className="text-xl font-black text-white">Examen Completado</h2>
              <div className="text-3xl font-black text-amber-400 font-mono">
                {calculateScore()} / {totalQuestions} Correctas ({(calculateScore() / totalQuestions * 100).toFixed(0)}%)
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                {calculateScore() / totalQuestions >= 0.7
                  ? '¡Felicidades! Ha aprobado el Examen del Módulo 1 (Mínimo 70%). Demuestra un dominio sólido de los cimientos mentales del scalper profesional.'
                  : 'No alcanzó el 70% requerido para aprobar. Repase los capítulos 1, 2 y 3 del Módulo 1 y vuelva a intentarlo.'}
              </p>

              {/* Explanations */}
              <div className="space-y-3 text-left max-h-60 overflow-y-auto pr-2 scrollbar-thin my-4">
                {activeQuestions.map((q, idx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.respuestaCorrecta;
                  return (
                    <div
                      key={q.id}
                      className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                        isCorrect
                          ? 'bg-emerald-950/30 border-emerald-500/30 text-slate-200'
                          : 'bg-rose-950/30 border-rose-500/30 text-slate-200'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-2">
                        <span>{idx + 1}. {q.pregunta}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        <strong className="text-amber-300">Explicación:</strong> {q.explicacion}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleRestartExam}
                className="py-2.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 mx-auto transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Repetir Examen</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Interactive Module 1, 2, 3 & 4 Reader Modals */}
      <Module1ReaderModal
        isOpen={showModule1Reader}
        onClose={() => setShowModule1Reader(false)}
        membresia={membresia}
        onUpgradeTier={onUpgradeTier}
      />
      <Module2ReaderModal
        isOpen={showModule2Reader}
        onClose={() => setShowModule2Reader(false)}
      />
      <Module3ReaderModal
        isOpen={showModule3Reader}
        onClose={() => setShowModule3Reader(false)}
      />
      <Module4ReaderModal
        isOpen={showModule4Reader}
        onClose={() => setShowModule4Reader(false)}
      />
      <Module5ReaderModal
        isOpen={showModule5Reader}
        onClose={() => setShowModule5Reader(false)}
      />
      <Module6ReaderModal
        isOpen={showModule6Reader}
        onClose={() => setShowModule6Reader(false)}
      />
      <Module7ReaderModal
        isOpen={showModule7Reader}
        onClose={() => setShowModule7Reader(false)}
      />
      <Module8ReaderModal
        isOpen={showModule8Reader}
        onClose={() => setShowModule8Reader(false)}
      />
      <Module9ReaderModal
        isOpen={showModule9Reader}
        onClose={() => setShowModule9Reader(false)}
      />
      <Module10ReaderModal
        isOpen={showModule10Reader}
        onClose={() => setShowModule10Reader(false)}
      />

      {/* Graduation Certificate Modal */}
      <CertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        studentName={userName}
        completedModulesCount={completedModules.length}
        totalModulesCount={10}
      />
    </div>
  );
};
