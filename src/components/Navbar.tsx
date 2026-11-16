import React, { useState, useEffect } from 'react';
import { MembershipTier, User } from '../types';
import { KiraxLogo } from './KiraxLogo';
import { Key, LogIn, User as UserIcon } from 'lucide-react';

interface NavbarProps {
  activeTab: 'terminal' | 'calendario' | 'journal' | 'alertas' | 'academia' | 'analisis_doc' | 'asistente_ia';
  setActiveTab: (tab: 'terminal' | 'calendario' | 'journal' | 'alertas' | 'academia' | 'analisis_doc' | 'asistente_ia') => void;
  user: User;
  onSelectTier: (tier: MembershipTier) => void;
  onOpenLicenseModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  user,
  onSelectTier,
  onOpenLicenseModal,
}) => {
  const [nyDateStr, setNyDateStr] = useState<string>('LUNES, 28 OCTUBRE');
  const [nyTimeStr, setNyTimeStr] = useState<string>('9:15 AM NY');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dayName = now.toLocaleDateString('es-ES', { timeZone: 'America/New_York', weekday: 'long' }).toUpperCase();
      const dayNum = now.toLocaleDateString('es-ES', { timeZone: 'America/New_York', day: 'numeric' });
      const monthName = now.toLocaleDateString('es-ES', { timeZone: 'America/New_York', month: 'long' }).toUpperCase();
      
      setNyDateStr(`${dayName}, ${dayNum} ${monthName}`);

      const time = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      setNyTimeStr(`${time} NY`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 px-3 py-2 bg-[#0a0c10]/95 border-b border-amber-500/20 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
      <div className="max-w-[1850px] mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
        
        {/* Brand Logo & Scalper Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div 
            onClick={() => setActiveTab('terminal')} 
            className="cursor-pointer hover:opacity-90 transition-opacity shrink-0"
          >
            <KiraxLogo size="md" />
          </div>

          <div className="hidden xl:flex items-center gap-1.5 border-l border-slate-800/80 pl-3">
            <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono text-[10px] font-bold">
              ⚡
            </div>
            <span className="text-[11px] font-mono font-bold text-slate-300">XAU/USD SCALPER</span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="flex items-center gap-1 bg-[#12151e] p-1 rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black font-sans uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'terminal'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            INICIO
          </button>

          <button
            onClick={() => setActiveTab('calendario')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black font-sans uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'calendario'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            CALENDARIO ECONÓMICO
          </button>

          <button
            onClick={() => setActiveTab('alertas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black font-sans uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'alertas'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            ALERTAS IA
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black font-sans uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'journal'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            JOURNAL
          </button>

          <button
            onClick={() => setActiveTab('academia')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black font-sans uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'academia'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            ACADEMIA
          </button>

          <button
            onClick={() => setActiveTab('analisis_doc')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black font-sans uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'analisis_doc'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            DOCS
          </button>

          <button
            onClick={() => setActiveTab('asistente_ia')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black font-sans uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'asistente_ia'
                ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            GEMINI IA
          </button>
        </div>

        {/* Right Side NY Clock & Login/License Button & Tier Switcher */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="hidden 2xl:block text-right font-mono">
            <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">
              {nyDateStr}
            </span>
            <span className="text-amber-400 font-extrabold text-xs block">
              {nyTimeStr}
            </span>
          </div>

          {/* LOGIN / Mi Cuenta Button */}
          {onOpenLicenseModal && (
            <button
              onClick={onOpenLicenseModal}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-600/20 hover:from-amber-500/40 hover:to-amber-600/40 border border-amber-500/50 text-amber-300 font-mono text-xs font-black transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              title="Iniciar Sesión / Administrar Licencia"
            >
              {user.membresia === 'GRATIS' ? (
                <>
                  <LogIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>LOGIN</span>
                </>
              ) : (
                <>
                  <UserIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MI CUENTA ({user.membresia})</span>
                </>
              )}
            </button>
          )}

          {/* Tier Switcher Pills */}
          <div className="flex items-center gap-0.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {(['GRATIS', 'PRO', 'ELITE'] as MembershipTier[]).map((tier) => {
              const isSelected = user.membresia === tier;
              return (
                <button
                  key={tier}
                  onClick={() => {
                    if (tier === 'GRATIS') {
                      onSelectTier('GRATIS');
                    } else {
                      if (user.membresia === 'GRATIS' && onOpenLicenseModal) {
                        onOpenLicenseModal();
                      } else {
                        onSelectTier(tier);
                      }
                    }
                  }}
                  className={`px-2 py-0.5 text-[10px] font-mono font-extrabold rounded-lg transition-all ${
                    isSelected
                      ? tier === 'GRATIS'
                        ? 'bg-slate-800 text-slate-200'
                        : tier === 'PRO'
                        ? 'bg-emerald-500 text-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </nav>
  );
};

