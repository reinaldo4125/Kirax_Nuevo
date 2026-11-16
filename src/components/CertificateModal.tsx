import React, { useState } from 'react';
import { KiraxLogo } from './KiraxLogo';
import { Award, Printer, Copy, CheckCircle2, X, ShieldCheck, Sparkles, Download, Edit3, Lock, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
  completedModulesCount?: number;
  totalModulesCount?: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentName = 'Trader Profesional KIRAX',
  completedModulesCount = 10,
  totalModulesCount = 10,
}) => {
  const [name, setName] = useState<string>(studentName);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  if (!isOpen) return null;

  const isCompleted = completedModulesCount >= totalModulesCount;
  const certificateId = 'KRX-CERT-2026-X9842B';
  const issueDate = '24 DE AGOSTO DE 2026';

  const handleDownloadImage = async () => {
    const elem = document.getElementById('printable-certificate');
    if (!elem) return;
    try {
      setIsDownloading(true);
      const canvas = await html2canvas(elem, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#090d16',
        logging: false,
        onclone: (clonedDoc) => {
          // Replace any oklch color references in style tags
          const styleElements = clonedDoc.querySelectorAll('style');
          styleElements.forEach((style) => {
            if (style.textContent) {
              style.textContent = style.textContent.replace(/oklch\([^)]+\)/gi, '#f59e0b');
            }
          });

          // Clean all element inline styles and CSS variables
          const allElements = clonedDoc.querySelectorAll('*');
          allElements.forEach((node) => {
            const el = node as HTMLElement;
            if (el.style) {
              const styleAttr = el.getAttribute('style') || '';
              if (styleAttr.includes('oklch')) {
                el.setAttribute('style', styleAttr.replace(/oklch\([^)]+\)/gi, '#f59e0b'));
              }
              try {
                for (let i = el.style.length - 1; i >= 0; i--) {
                  const propName = el.style[i];
                  if (propName && propName.startsWith('--')) {
                    const val = el.style.getPropertyValue(propName);
                    if (val && val.includes('oklch')) {
                      el.style.removeProperty(propName);
                    }
                  }
                }
              } catch (e) {
                // Ignore style manipulation errors
              }
            }
          });
        },
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `Certificado_KIRAX_${name.trim().replace(/\s+/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Error al generar la imagen del certificado:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    const elem = document.getElementById('printable-certificate');
    if (!elem) return;

    // Open clean print window to bypass iframe restriction
    try {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Certificado KIRAX Academy - ${name}</title>
              <script src="https://cdn.tailwindcss.com"></script>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800;900&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
                body {
                  background-color: #06080f;
                  color: #ffffff;
                  margin: 0;
                  padding: 20px;
                  font-family: 'Plus Jakarta Sans', sans-serif;
                }
                @media print {
                  body { padding: 0; background: #06080f !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                  .no-print { display: none !important; }
                }
              </style>
            </head>
            <body>
              <div style="max-width: 960px; margin: 0 auto;">
                ${elem.outerHTML}
              </div>
              <script>
                setTimeout(() => {
                  window.focus();
                  window.print();
                }, 600);
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
        return;
      }
    } catch (e) {
      console.warn('Fall-back to direct print call', e);
    }

    try {
      window.print();
    } catch (e) {
      handleDownloadImage();
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(certificateId);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      
      {/* Print styles override */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-certificate, #printable-certificate * {
            visibility: visible;
          }
          #printable-certificate {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 20px;
            background: #090d16 !important;
            color: #ffffff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="relative w-full max-w-4xl bg-slate-950 border border-amber-500/40 rounded-2xl shadow-[0_0_80px_rgba(212,175,55,0.25)] flex flex-col my-auto overflow-hidden text-slate-100 no-print-wrapper">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="no-print flex flex-wrap items-center justify-between px-6 py-3.5 bg-slate-900 border-b border-amber-500/20 gap-3">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-amber-400" />
            <span>KIRAX Academy — Certificado Oficial de Especialización</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadImage}
              disabled={isDownloading}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50"
            >
              {isDownloading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>Descargar PNG</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lock Warning if not all 10 modules completed */}
        {!isCompleted && (
          <div className="no-print px-6 py-2.5 bg-amber-500/15 border-b border-amber-500/30 text-xs font-semibold text-amber-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Vista previa de graduación ({completedModulesCount}/{totalModulesCount} Módulos Completados). Complete los 10 módulos para registrar la emisión oficial.</span>
            </div>
          </div>
        )}

        {/* PRINTABLE CERTIFICATE CANVAS */}
        <div 
          id="printable-certificate"
          className="relative p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#090d16] via-[#0b101c] to-[#06080f] text-slate-100 flex flex-col justify-between min-h-[600px] border-8 border-slate-900 select-none overflow-hidden"
        >
          {/* Inner Golden Filigree Border */}
          <div className="absolute inset-3 border-2 border-amber-500/40 rounded-xl pointer-events-none" />
          <div className="absolute inset-5 border border-amber-500/20 rounded-lg pointer-events-none" />

          {/* Royal Corner Ornaments */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

          {/* Background Eagle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <KiraxLogo size="xl" showText={false} />
          </div>

          {/* Certificate Header */}
          <div className="relative z-10 text-center space-y-3">
            <div className="flex justify-center mb-1">
              <KiraxLogo size="lg" showText={false} />
            </div>

            <div className="space-y-1">
              <h3 className="text-xs font-mono font-black text-amber-400 uppercase tracking-[5px]">
                KIRAX ACADEMY — INSTITUTIONAL CERTIFICATION
              </h3>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 uppercase drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                CERTIFICADO DE MAESTRÍA EN TRADING
              </h1>
              <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">
                XAU/USD GOLD SCALPING & QUANTITATIVE MARKET STRUCTURE
              </p>
            </div>
          </div>

          {/* Recipient Section */}
          <div className="relative z-10 text-center my-8 space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 font-serif italic">
              Por la presente se certifica que
            </p>

            {/* Student Name */}
            <div className="inline-flex items-center gap-2 group">
              {isEditingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
                  autoFocus
                  className="text-xl sm:text-2xl md:text-3xl font-black text-center text-amber-300 bg-slate-900 border-b-2 border-amber-400 focus:outline-none px-4 py-1 rounded font-serif"
                />
              ) : (
                <div 
                  onClick={() => setIsEditingName(true)}
                  className="flex items-center gap-2 cursor-pointer border-b border-dashed border-amber-500/40 hover:border-amber-400 px-3 py-1 transition-all"
                  title="Haz clic para editar el nombre completo para tu certificado"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                    {name}
                  </h2>
                  <Edit3 className="w-4 h-4 text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity no-print" />
                </div>
              )}
            </div>

            {/* Achievement Paragraph */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans px-4">
              ha completado satisfactoriamente los <strong>10 Módulos de Formación Académica</strong> en la plataforma <strong className="text-amber-300">KIRAX Terminal</strong>, acreditando el dominio de la Microestructura del Oro, Análisis Macroeconómico de Bancos Centrales, Order Flow Institucional, Psicología de Alto Rendimiento y Gestión de Riesgo Profesional.
            </p>
          </div>

          {/* Module Badges Summary */}
          <div className="relative z-10 my-4 grid grid-cols-2 sm:grid-cols-5 gap-1.5 max-w-3xl mx-auto text-[9px] font-mono font-bold text-slate-400 uppercase text-center">
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 1: Mente
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 2: Oro
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 3: Macro
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 4: Flujo
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 5: Riesgo
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 6: Killzones
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 7: NFP/CPI
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 8: Semáforo
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 9: Caso I
            </div>
            <div className="px-2 py-1 rounded bg-slate-900/80 border border-amber-500/20 text-amber-300 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" /> Mod 10: Caso II
            </div>
          </div>

          {/* Certificate Footer Signatures & Official Stamp */}
          <div className="relative z-10 pt-6 mt-4 border-t border-amber-500/30 flex flex-wrap items-end justify-between gap-6">
            
            {/* Signature 1 */}
            <div className="text-center space-y-1">
              <div className="h-9 flex items-end justify-center font-serif italic text-amber-300 text-lg opacity-90 border-b border-amber-500/40 px-4 pb-1">
                Alexander V. Kirax
              </div>
              <span className="text-[10px] font-bold text-white block uppercase">Director Académico</span>
              <span className="text-[9px] text-slate-400 font-mono block">KIRAX ACADEMY BOARD</span>
            </div>

            {/* Official Gold Seal Stamp */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center border border-amber-400/50 p-2 text-amber-300">
                  <ShieldCheck className="w-6 h-6 text-amber-400 mb-0.5" />
                  <span className="text-[7px] font-mono font-black uppercase tracking-widest text-amber-200 leading-none">SELLO OFICIAL</span>
                  <span className="text-[6px] font-mono text-slate-400 mt-0.5">VERIFIED 2026</span>
                </div>
              </div>
            </div>

            {/* Signature 2 */}
            <div className="text-center space-y-1">
              <div className="h-9 flex items-end justify-center font-serif italic text-amber-300 text-lg opacity-90 border-b border-amber-500/40 px-4 pb-1">
                Marcus Thorne, CFA
              </div>
              <span className="text-[10px] font-bold text-white block uppercase">Jefe de Investigación Macro</span>
              <span className="text-[9px] text-slate-400 font-mono block">QUANT RESEARCH DEPT</span>
            </div>

          </div>

          {/* Certificate Metadata Code */}
          <div className="relative z-10 mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CÓDIGO DE VALIDACIÓN: <strong className="text-amber-300">{certificateId}</strong></span>
              <button 
                onClick={handleCopyCode}
                className="no-print p-1 hover:text-white transition-colors ml-1"
                title="Copiar código"
              >
                {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              </button>
            </div>
            <div>EMISIÓN: {issueDate}</div>
          </div>

        </div>

        {/* Modal Footer Controls (No Print) */}
        <div className="no-print flex flex-wrap items-center justify-between px-6 py-4 bg-slate-900 border-t border-slate-800 text-xs font-semibold text-slate-300 gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Acreditación verificable de la Academia de Trading KIRAX</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center gap-1.5 transition-all"
            >
              {copiedCode ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Código Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-300" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadImage}
              disabled={isDownloading}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generando Imagen...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar Imagen PNG</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Abrir PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

