import React, { useState } from 'react';
import { KiraxLogo } from './KiraxLogo';
import { 
  ShieldCheck, 
  Activity, 
  BookOpen, 
  TrendingUp, 
  Bell, 
  Calendar, 
  Bot, 
  FileText, 
  Zap, 
  Globe, 
  Lock,
  ExternalLink,
  X,
  Mail,
  Send,
  CheckCircle2,
  Server,
  Headphones,
  FileCheck2,
  Clock
} from 'lucide-react';

interface FooterProps {
  activeTab: 'terminal' | 'calendario' | 'journal' | 'alertas' | 'academia' | 'analisis_doc' | 'asistente_ia';
  setActiveTab: (tab: 'terminal' | 'calendario' | 'journal' | 'alertas' | 'academia' | 'analisis_doc' | 'asistente_ia') => void;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, setActiveTab }) => {
  const [activeModal, setActiveModal] = useState<'privacidad' | 'terminos' | 'soporte' | 'status' | null>(null);

  const handleNavClick = (tab: 'terminal' | 'calendario' | 'journal' | 'alertas' | 'academia' | 'analisis_doc' | 'asistente_ia') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-amber-500/20 bg-gradient-to-b from-[#07080c] via-[#090c14] to-[#040508] text-slate-300">
      
      {/* Top Banner Status Bar */}
      <div className="border-b border-white/5 bg-slate-950/80 px-4 py-3 text-xs">
        <div className="max-w-[1750px] mx-auto flex flex-wrap items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveModal('status')}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-[11px] tracking-wider uppercase">Sistemas KIRAX: En Línea</span>
            </button>

            <div className="hidden sm:flex items-center gap-4 text-slate-400 text-[11px]">
              <span>Servidores QUANT: <strong className="text-amber-400">NY4 Equinix</strong></span>
              <span>•</span>
              <span>Latencia Promedio: <strong className="text-emerald-400">14 ms</strong></span>
              <span>•</span>
              <span>Feeds Activos: <strong className="text-amber-400">XAU/USD, DXY, US10Y</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <button 
              onClick={() => setActiveModal('privacidad')}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Encriptación SSL 256-Bit</span>
            </button>
            <span>•</span>
            <span className="text-slate-400">Versión 2.6.4 (2026 Build)</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-[1750px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        
        {/* Col 1: Brand & Description (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('terminal')}>
            <KiraxLogo size="md" />
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Terminal Institucional de Análisis Cuantitativo y Microestructura de Mercado especializada en <strong className="text-amber-300">Oro (XAU/USD)</strong>. Integramos modelos predictivos de inteligencia artificial, análisis de flujo de órdenes macroeconómicas y formación académica de alto nivel.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
              XAU/USD Quant Engine
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Macro FED & NFP Tracker
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Algorithm AI 4.0
            </span>
          </div>
        </div>

        {/* Col 2: Navigation Links (3 cols) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            Módulos del Terminal
          </h4>

          <ul className="space-y-2 text-xs font-medium">
            <li>
              <button 
                onClick={() => handleNavClick('terminal')}
                className={`hover:text-amber-400 transition-colors flex items-center gap-2 text-left ${activeTab === 'terminal' ? 'text-amber-300 font-bold' : 'text-slate-400'}`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Terminal Semáforo 3D & Noticias</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('academia')}
                className={`hover:text-amber-400 transition-colors flex items-center gap-2 text-left ${activeTab === 'academia' ? 'text-amber-300 font-bold' : 'text-slate-400'}`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>KIRAX Academy (10 Módulos & Certificación)</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('calendario')}
                className={`hover:text-amber-400 transition-colors flex items-center gap-2 text-left ${activeTab === 'calendario' ? 'text-amber-300 font-bold' : 'text-slate-400'}`}
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Calendario Económico de Alto Impacto</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('journal')}
                className={`hover:text-amber-400 transition-colors flex items-center gap-2 text-left ${activeTab === 'journal' ? 'text-amber-300 font-bold' : 'text-slate-400'}`}
              >
                <Activity className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Trading Journal Institucional</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('asistente_ia')}
                className={`hover:text-amber-400 transition-colors flex items-center gap-2 text-left ${activeTab === 'asistente_ia' ? 'text-amber-300 font-bold' : 'text-slate-400'}`}
              >
                <Bot className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Asistente Cuantitativo IA KIRAX</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('alertas')}
                className={`hover:text-amber-400 transition-colors flex items-center gap-2 text-left ${activeTab === 'alertas' ? 'text-amber-300 font-bold' : 'text-slate-400'}`}
              >
                <Bell className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Alertas en Vivo Telegram</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('analisis_doc')}
                className={`hover:text-amber-400 transition-colors flex items-center gap-2 text-left ${activeTab === 'analisis_doc' ? 'text-amber-300 font-bold' : 'text-slate-400'}`}
              >
                <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Escáner de PDF & Informes FED</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Institutional Specifications & Risk Warning (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <h4 className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            Descargo de Responsabilidad Financiera
          </h4>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 text-[11px] text-slate-400 leading-relaxed font-sans">
            <p>
              <strong className="text-amber-300">Advertencia de Alto Riesgo de Capital:</strong> Las operaciones financieras en el mercado spot de metales (XAU/USD), divisas (Forex) y derivados implican un riesgo elevado de pérdida de capital y no son aptas para todos los perfiles de inversionistas. El apalancamiento puede jugar tanto a su favor como en su contra.
            </p>
            <p>
              La información suministrada en KIRAX Terminal —incluyendo los índices del Semáforo de Mercado, proyecciones de IA, noticias y contenidos académicos— tiene fines strictly informativos y educativos. No constituye asesoramiento financiero ni recomendación directa de compra o venta.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright and Legal Links */}
      <div className="border-t border-white/5 bg-slate-950 px-4 py-4 text-xs font-mono text-slate-400">
        <div className="max-w-[1750px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white">© 2026 KIRAX TERMINAL INC.</span>
            <span>— Todos los derechos reservados.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px]">
            <button 
              onClick={() => setActiveModal('privacidad')}
              className="hover:text-amber-400 transition-colors text-slate-300 underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => setActiveModal('terminos')}
              className="hover:text-amber-400 transition-colors text-slate-300 underline-offset-4 hover:underline"
            >
              Términos de Servicio
            </button>
            <button 
              onClick={() => setActiveModal('soporte')}
              className="hover:text-amber-400 transition-colors text-slate-300 underline-offset-4 hover:underline"
            >
              Contacto Soporte VIP
            </button>
            <button 
              onClick={() => setActiveModal('status')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 text-amber-300 underline-offset-4 hover:underline"
            >
              <span>Status Servidores</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}

      {/* 1. Política de Privacidad Modal */}
      {activeModal === 'privacidad' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-6 text-slate-200 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-sm uppercase">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Política de Privacidad & Protección de Datos</span>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">
                En KIRAX Terminal la confidencialidad y protección de datos de nuestros traders e inversionistas es nuestra máxima prioridad.
              </p>
              
              <div className="space-y-2 pl-2 border-l-2 border-amber-500/40">
                <h5 className="font-mono font-bold text-amber-300 text-xs">1. Encriptación Bancaria SSL 256-Bit</h5>
                <p>Toda la comunicación de datos, métricas del journal y credenciales de acceso se transmiten mediante túneles seguros con cifrado de grado militar.</p>
              </div>

              <div className="space-y-2 pl-2 border-l-2 border-amber-500/40">
                <h5 className="font-mono font-bold text-amber-300 text-xs">2. Privacidad de Operaciones Financieras</h5>
                <p>KIRAX no comercializa ni comparte con terceros sus registros de operaciones, estrategias de trading, volúmenes ni historiales personales.</p>
              </div>

              <div className="space-y-2 pl-2 border-l-2 border-amber-500/40">
                <h5 className="font-mono font-bold text-amber-300 text-xs">3. Almacenamiento Local Seguro</h5>
                <p>Sus preferencias de membresía, respuestas de examen e historial de estudio se almacenan de forma local en su navegador con máxima integridad.</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all"
              >
                Entendido y Aceptado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Términos de Servicio Modal */}
      {activeModal === 'terminos' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-6 text-slate-200 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-sm uppercase">
                <FileCheck2 className="w-5 h-5 text-amber-400" />
                <span>Términos y Condiciones de Servicio</span>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                Al acceder y utilizar <strong>KIRAX Terminal</strong>, el usuario acepta de forma plena las siguientes condiciones institucionales:
              </p>

              <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/20 space-y-1.5">
                <span className="font-mono font-bold text-amber-300 text-xs block">Naturaleza Educativa e Informativa:</span>
                <p className="text-slate-400">
                  Las métricas del Semáforo 3D, alertas algorítmicas de la IA Gemini y los datos macroeconómicos son herramientas de apoyo analítico. No constituyen recomendaciones directas ni ofertas de inversión.
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-slate-200 text-xs block">Gestión de Riesgo Individual:</span>
                <p className="text-slate-400">
                  El trader asume la responsabilidad total sobre el tamaño de lote, colocación de Stop Loss y decisiones ejecutadas en su cuenta de corretaje o prop firm.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all"
              >
                Cerrar Términos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Soporte VIP Modal */}
      {activeModal === 'soporte' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-6 text-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-sm uppercase">
                <Headphones className="w-5 h-5 text-amber-400" />
                <span>Contacto & Soporte Técnico VIP</span>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Nuestro equipo de soporte técnico y analistas cuantitativos está disponible para atender cualquier consulta técnica o duda sobre su membresía.
            </p>

            <div className="space-y-2.5">
              <a 
                href="https://t.me/kirax_quant_bot" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-950 hover:bg-amber-500/10 border border-amber-500/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white group-hover:text-amber-300">Canal Directo Telegram VIP</h5>
                    <span className="text-[10px] text-slate-400 font-mono">@KiraxVIPSupport_bot</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400">Abrir Chat →</span>
              </a>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center font-bold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Correo Electrónico Institucional</h5>
                    <span className="text-[10px] text-slate-400 font-mono">soporte@kiraxterminal.com</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">24/7 Activo</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Status Servidores Modal */}
      {activeModal === 'status' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl p-6 text-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm uppercase">
                <Server className="w-5 h-5 text-emerald-400" />
                <span>Estado de Infraestructura y Servidores</span>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Nodo Principal NY4 (Nueva York)</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 12 ms Operativo
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Nodo Respaldo LD4 (Londres)</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 24 ms Operativo
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Feed Cotizaciones XAU/USD</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sincronizado
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Motor Algorítmico Gemini IA</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Respuesta Óptima
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};

