import React, { useState } from 'react';
import { MembershipTier, User } from '../types';
import { ShieldCheck, Key, CreditCard, Sparkles, Check, Copy, ExternalLink, X, Lock, Zap, Award, User as UserIcon, LogOut, LogIn } from 'lucide-react';

interface LicenseModalProps {
  user: User;
  onClose: () => void;
  onSelectTier: (tier: MembershipTier) => void;
  onLogin?: (username: string, email: string, tier: MembershipTier) => void;
  onLogout?: () => void;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({
  user,
  onClose,
  onSelectTier,
  onLogin,
  onLogout,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'login' | 'activar_clave' | 'planes' | 'metodos_pago'>('login');
  const [loginUser, setLoginUser] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [licenseInput, setLicenseInput] = useState<string>('');
  const [keyStatusMsg, setKeyStatusMsg] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [copiedWallet, setCopiedWallet] = useState<boolean>(false);
  
  // Credit Card form state
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);

  const walletAddress = "TKiraxGold888888888888888888888";

  const handleCopyWallet = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopiedWallet(true);
    setTimeout(() => setCopiedWallet(false), 2500);
  };

  const handleUserPasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = loginUser.trim();
    const cleanPass = loginPassword.trim();

    if (!cleanUser || !cleanPass) {
      setKeyStatusMsg({ type: 'error', message: 'Por favor ingresa tu usuario y contraseña.' });
      return;
    }

    let assignedTier: MembershipTier = 'PRO';
    if (cleanUser.toLowerCase().includes('elite') || cleanPass.toLowerCase().includes('elite') || cleanPass === 'KIRAX-ELITE-GOLD') {
      assignedTier = 'ELITE';
    }

    if (onLogin) {
      onLogin(cleanUser, `${cleanUser}@kirax.com`, assignedTier);
    } else {
      onSelectTier(assignedTier);
    }

    setKeyStatusMsg({ 
      type: 'success', 
      message: `¡Sesión iniciada correctamente como ${cleanUser}! Licencia ${assignedTier} activada.` 
    });
  };

  const handleValidateLicenseKey = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = licenseInput.trim().toUpperCase();

    if (!cleanKey) {
      setKeyStatusMsg({ type: 'error', message: 'Por favor ingresa un código de licencia válido.' });
      return;
    }

    if (cleanKey.includes('ELITE') || cleanKey === 'VIP-SCALPER-99' || cleanKey === 'KIRAX-ELITE-GOLD') {
      if (onLogin) onLogin('Trader Elite', 'trader@kirax.com', 'ELITE');
      else onSelectTier('ELITE');
      setKeyStatusMsg({ type: 'success', message: '¡Licencia ELITE VIP activada con éxito! Acceso ilimitado concedido.' });
    } else if (cleanKey.includes('PRO') || cleanKey === 'KIRAX-PRO-2026' || cleanKey.length >= 6) {
      if (onLogin) onLogin('Trader Pro', 'trader@kirax.com', 'PRO');
      else onSelectTier('PRO');
      setKeyStatusMsg({ type: 'success', message: '¡Licencia KIRAX PRO activada con éxito! Semáforo HD y herramientas desbloqueadas.' });
    } else {
      setKeyStatusMsg({ type: 'error', message: 'Clave de licencia no reconocida. Intenta con KIRAX-PRO-2026 o KIRAX-ELITE-GOLD.' });
    }
  };

  const handleSimulatePayment = (tier: MembershipTier) => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      if (onLogin) onLogin(`Trader ${tier}`, `trader@kirax.com`, tier);
      else onSelectTier(tier);
      setKeyStatusMsg({ type: 'success', message: `¡Suscripción al Plan ${tier} procesada con éxito!` });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0a0c12] border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden text-slate-100 my-8">
        
        {/* Modal Top Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-[#0f131f] to-slate-900 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black tracking-wide text-white">
                  GESTIÓN DE LICENCIAS KIRAX TERMINAL
                </h2>
                <span className={`px-2 py-0.5 text-[10px] font-mono font-black rounded border ${
                  user.membresia === 'ELITE'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : user.membresia === 'PRO'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  ESTADO: {user.membresia}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Administra tu plan, activa claves VIP o suscríbete para desbloquear la microestructura XAU/USD en HD.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Message Notification if active */}
        {keyStatusMsg.type && (
          <div className={`px-5 py-3 text-xs font-bold flex items-center justify-between border-b ${
            keyStatusMsg.type === 'success'
              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
              : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
          }`}>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{keyStatusMsg.message}</span>
            </div>
            <button onClick={() => setKeyStatusMsg({ type: null, message: '' })} className="hover:underline text-[11px]">
              Cerrar
            </button>
          </div>
        )}

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 pt-4 border-b border-white/5 bg-slate-950/50 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('login')}
            className={`pb-3 px-3 text-xs font-black uppercase font-mono tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'login'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <UserIcon className="w-4 h-4" />
            <span>1. Iniciar Sesión (Usuario / Clave)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('activar_clave')}
            className={`pb-3 px-3 text-xs font-black uppercase font-mono tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'activar_clave'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>2. Activar Clave VIP</span>
          </button>

          <button
            onClick={() => setActiveSubTab('planes')}
            className={`pb-3 px-3 text-xs font-black uppercase font-mono tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'planes'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>3. Comparar Planes</span>
          </button>

          <button
            onClick={() => setActiveSubTab('metodos_pago')}
            className={`pb-3 px-3 text-xs font-black uppercase font-mono tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'metodos_pago'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>4. Formas de Pago</span>
          </button>
        </div>

        {/* Body Content per Tab */}
        <div className="p-6">
          {activeSubTab === 'login' && (
            <div className="max-w-xl mx-auto space-y-6 py-2">
              
              {user.membresia !== 'GRATIS' && user.isAuthenticated ? (
                /* Already Authenticated Active Session View */
                <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <ShieldCheck className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest block mb-1">
                      SESIÓN DE LICENCIA ACTIVA
                    </span>
                    <h3 className="text-xl font-black text-white">
                      Bienvenido, {user.nombre || user.username || 'Trader PRO'}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      Cuenta asociada: {user.email} • Membresía: <strong className="text-emerald-400">{user.membresia}</strong>
                    </p>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-white/5 text-left text-xs space-y-1.5 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Estado de Licencia:</span>
                      <span className="text-emerald-400 font-bold font-mono">VERIFICADO ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Semáforo Algorítmico 3D:</span>
                      <span className="text-white font-mono">Desbloqueado HD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">KIRAX Academy:</span>
                      <span className="text-white font-mono">Acceso Completo (10 Módulos)</span>
                    </div>
                  </div>

                  {onLogout && (
                    <button
                      onClick={() => {
                        onLogout();
                        setKeyStatusMsg({ type: 'success', message: 'Has cerrado sesión. Regresando a Licencia GRATIS.' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-all flex items-center justify-center gap-2 mx-auto"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Cerrar Sesión (Volver a Modo Gratis)</span>
                    </button>
                  )}
                </div>
              ) : (
                /* Login Form for Username & Password */
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
                    <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-white mb-0.5">Acceso a Licencias Suscritas</span>
                      Ingresa tu usuario y contraseña para validar tu suscripción y desbloquear la Terminal en HD.
                    </div>
                  </div>

                  <form onSubmit={handleUserPasswordLogin} className="space-y-4 bg-slate-900/60 p-5 rounded-2xl border border-white/10">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                        Usuario / Correo Electrónico
                      </label>
                      <input
                        type="text"
                        value={loginUser}
                        onChange={(e) => setLoginUser(e.target.value)}
                        placeholder="Ejemplo: trader_pro / usuario@kirax.com"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Iniciar Sesión & Activar Licencia PRO</span>
                    </button>
                  </form>

                  {/* Demo Login Credentials Helper */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-[11px] font-mono font-bold text-amber-400 block uppercase">
                      💡 Credenciales de Acceso Rápido:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                      <button
                        type="button"
                        onClick={() => {
                          setLoginUser('trader_pro');
                          setLoginPassword('kirax2026');
                          if (onLogin) onLogin('Trader Pro', 'trader@kirax.com', 'PRO');
                          setKeyStatusMsg({ type: 'success', message: 'Iniciaste sesión como Trader Pro (Plan PRO)' });
                        }}
                        className="p-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 rounded-lg text-left"
                      >
                        <span className="text-emerald-400 font-bold block">PLAN PRO</span>
                        <span className="text-[10px] text-slate-400">trader_pro / kirax2026</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setLoginUser('elite_vip');
                          setLoginPassword('elitegold');
                          if (onLogin) onLogin('Trader Elite', 'elite@kirax.com', 'ELITE');
                          setKeyStatusMsg({ type: 'success', message: 'Iniciaste sesión como Trader Elite (Plan ELITE VIP)' });
                        }}
                        className="p-2 bg-slate-900 hover:bg-slate-800 border border-amber-500/30 rounded-lg text-left"
                      >
                        <span className="text-amber-400 font-bold block">PLAN ELITE VIP</span>
                        <span className="text-[10px] text-slate-400">elite_vip / elitegold</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}
          {activeSubTab === 'planes' && (
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <h3 className="text-base font-extrabold text-white">
                  Selecciona tu Nivel de Cobertura Macro
                </h3>
                <p className="text-xs text-slate-400">
                  Desbloquea el análisis de algoritmos institucionales en XAU/USD y optimiza la precisión en tus operaciones de Scalping.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* PLAN 1: GRATIS */}
                <div className={`p-5 rounded-2xl border flex flex-col justify-between transition-all ${
                  user.membresia === 'GRATIS'
                    ? 'bg-slate-900/90 border-slate-600 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                    : 'bg-slate-950/60 border-white/5 opacity-80 hover:opacity-100'
                }`}>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase">BÁSICO</span>
                      {user.membresia === 'GRATIS' && (
                        <span className="text-[10px] bg-slate-800 text-slate-300 font-bold px-2 py-0.5 rounded">
                          ACTIVO
                        </span>
                      )}
                    </div>
                    <div className="text-2xl font-black text-white font-mono mb-3">
                      $0 <span className="text-xs text-slate-500 font-normal">/ mes</span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Vista básica de noticias</span>
                      </li>
                      <li className="flex items-center gap-2 opacity-60">
                        <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Semáforo con desenfoque (Blur)</span>
                      </li>
                      <li className="flex items-center gap-2 opacity-60">
                        <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Journal limitado a 3 registros</span>
                      </li>
                      <li className="flex items-center gap-2 opacity-60">
                        <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Sin acceso a Alertas Telegram</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectTier('GRATIS')}
                    disabled={user.membresia === 'GRATIS'}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-all ${
                      user.membresia === 'GRATIS'
                        ? 'bg-slate-800 text-slate-500 cursor-default'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {user.membresia === 'GRATIS' ? 'Plan Actual' : 'Cambiar a Gratis'}
                  </button>
                </div>

                {/* PLAN 2: PRO ($19) - RECOMENDADO */}
                <div className={`p-5 rounded-2xl border-2 flex flex-col justify-between relative transition-all ${
                  user.membresia === 'PRO'
                    ? 'bg-slate-900 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]'
                    : 'bg-[#0f1522] border-emerald-500/50 hover:border-emerald-400'
                }`}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-[10px] px-3 py-0.5 rounded-full tracking-wider uppercase shadow-md">
                    MÁS POPULAR
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2 pt-1">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase">MATE PRO</span>
                      {user.membresia === 'PRO' && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/40">
                          ACTIVO
                        </span>
                      )}
                    </div>
                    <div className="text-3xl font-black text-white font-mono mb-3">
                      $19 <span className="text-xs text-slate-400 font-normal">/ mes</span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="font-semibold text-emerald-300">Semáforo 3D en HD sin Blur</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Alertas instantáneas en Telegram</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Journal de Trading Ilimitado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>KIRAX Academy + Certificado HD</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleSimulatePayment('PRO')}
                    disabled={isProcessingPayment}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 fill-slate-950" />
                    <span>{user.membresia === 'PRO' ? 'Licencia PRO Activa' : 'Activar PRO ($19)'}</span>
                  </button>
                </div>

                {/* PLAN 3: ELITE VIP ($49) */}
                <div className={`p-5 rounded-2xl border-2 flex flex-col justify-between transition-all ${
                  user.membresia === 'ELITE'
                    ? 'bg-slate-900 border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.3)]'
                    : 'bg-[#181308]/60 border-amber-500/40 hover:border-amber-400'
                }`}>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono font-bold text-amber-400 uppercase">ELITE VIP</span>
                      {user.membresia === 'ELITE' && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-500/40">
                          ACTIVO
                        </span>
                      )}
                    </div>
                    <div className="text-3xl font-black text-amber-300 font-mono mb-3">
                      $49 <span className="text-xs text-slate-400 font-normal">/ mes</span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-200 mb-6">
                      <li className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="font-semibold text-amber-300">Todo lo incluido en PRO</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Gemini IA Copilot sin límites</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Escáner PDF ilimitado (Wall St)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Soporte 1-a-1 Directo en Telegram</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleSimulatePayment('ELITE')}
                    disabled={isProcessingPayment}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>{user.membresia === 'ELITE' ? 'Licencia ELITE Activa' : 'Activar ELITE VIP ($49)'}</span>
                  </button>
                </div>

              </div>
            </div>
          )}

          {activeSubTab === 'activar_clave' && (
            <div className="max-w-xl mx-auto space-y-6 py-2">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200">
                <Key className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-white mb-0.5">¿Posees un código promocional o clave de licencia?</span>
                  Ingresa tu clave de 16 caracteres emitida por KIRAX o tu bot de Telegram para desbloquear instantáneamente los permisos.
                </div>
              </div>

              <form onSubmit={handleValidateLicenseKey} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                    Ingresar Clave de Licencia
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={licenseInput}
                      onChange={(e) => setLicenseInput(e.target.value)}
                      placeholder="Ejemplo: KIRAX-PRO-2026"
                      className="w-full px-4 py-3 bg-slate-950 border border-amber-500/40 rounded-xl font-mono text-sm text-amber-300 focus:outline-none focus:border-amber-400 tracking-wider font-bold placeholder:text-slate-600 uppercase"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 bottom-2 px-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all"
                    >
                      Validar & Activar
                    </button>
                  </div>
                </div>

                {/* Quick Code Buttons */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">
                    Claves de Prueba Rápidas (Haz clic para usar):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setLicenseInput('KIRAX-PRO-2026');
                        onSelectTier('PRO');
                        setKeyStatusMsg({ type: 'success', message: '¡Licencia PRO activada con éxito!' });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>KIRAX-PRO-2026</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setLicenseInput('KIRAX-ELITE-GOLD');
                        onSelectTier('ELITE');
                        setKeyStatusMsg({ type: 'success', message: '¡Licencia ELITE VIP activada con éxito!' });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>KIRAX-ELITE-GOLD</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Active License Details Summary */}
              {user.membresia !== 'GRATIS' && (
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3 pt-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">ID Licencia Activa:</span>
                    <span className="font-mono font-bold text-amber-300">KRX-8849-2026-XAU</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Plan Asignado:</span>
                    <span className="font-mono font-bold text-emerald-400">{user.membresia}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Vencimiento:</span>
                    <span className="font-mono text-slate-200">24 DE AGOSTO DE 2027 (Renovación Automática)</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'metodos_pago' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
              
              {/* Payment Method 1: USDT TRC20 Crypto */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center font-mono text-xs border border-emerald-500/30">
                      ₮
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white">Pago USDT (TRC20)</h4>
                      <p className="text-[10px] text-slate-400">Sin comisiones bancarias - Activación en 5 mins</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    AUTOMÁTICO
                  </span>
                </div>

                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[11px] text-slate-400 font-mono block">Dirección USDT (Red TRC20):</span>
                  <div className="flex items-center gap-2">
                    <code className="text-[11px] font-mono text-amber-300 bg-slate-950 p-2 rounded-lg border border-white/5 flex-1 truncate">
                      {walletAddress}
                    </code>
                    <button
                      onClick={handleCopyWallet}
                      className="p-2 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors shrink-0"
                      title="Copiar billetera"
                    >
                      {copiedWallet ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <p>1. Transfiere <strong>$19 USDT</strong> (Plan PRO) o <strong>$49 USDT</strong> (ELITE VIP).</p>
                  <p>2. Envía la captura o Hash TXID a nuestro bot en Telegram:</p>
                </div>

                <a
                  href="https://t.me/KiraxVIPSupport_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 text-[#229ED9] border border-[#229ED9]/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Contactar Bot Soporte Telegram (@KiraxVIPSupport_bot)</span>
                </a>
              </div>

              {/* Payment Method 2: Credit Card / Instant Checkout */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-amber-400" />
                    <div>
                      <h4 className="text-sm font-black text-white">Tarjeta de Crédito / Débito</h4>
                      <p className="text-[10px] text-slate-400">Procesamiento Cifrado SSL 256-bit</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Número de Tarjeta</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4532 •••• •••• 8892"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">Expiración</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM/AA"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">CVC</label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="123"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => handleSimulatePayment('PRO')}
                    disabled={isProcessingPayment}
                    className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>{isProcessingPayment ? 'Procesando Licencia Segura...' : 'Completar Suscripción PRO ($19)'}</span>
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garantía de Satisfacción KIRAX Quant Systems • Cancela cuando quieras</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
