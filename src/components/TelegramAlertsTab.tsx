import React, { useState } from 'react';
import { MembershipTier } from '../types';
import { Bell, Send } from 'lucide-react';

interface TelegramAlertsTabProps {
  membresia: MembershipTier;
  onUpgradeTier: () => void;
}

export const TelegramAlertsTab: React.FC<TelegramAlertsTabProps> = ({ membresia, onUpgradeTier }) => {
  const [chatId, setChatId] = useState('');
  const [testSent, setTestSent] = useState(false);

  const handleSendTest = () => {
    setTestSent(true);
    setTimeout(() => setTestSent(false), 4000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] shadow-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-white font-mono uppercase tracking-wider">
              Sistema de Alertas Instantáneas Telegram
            </h1>
            <p className="text-xs text-slate-300">
              Notificaciones push multicanal cuando el Semáforo KIRAX cambia de estado.
            </p>
          </div>
        </div>

        <span className="text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
          Bot Oficial @KIRAXAlertsBot
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Telegram Config */}
        <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] space-y-4">
          <span className="text-xs font-black text-amber-400 uppercase font-mono block">
            Configuración de Tu Chat ID
          </span>

          <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside">
            <li>Abre Telegram y busca <strong className="text-amber-300">@KIRAXAlertsBot</strong></li>
            <li>Inicia la conversación enviando <code className="bg-slate-950 px-1 py-0.5 text-amber-400 rounded">/start</code></li>
            <li>Obtén tu Chat ID único con <strong className="text-amber-300">@userinfobot</strong></li>
            <li>Ingresa tu Chat ID a continuación:</li>
          </ol>

          <div className="space-y-2 pt-2">
            <input
              type="text"
              value={chatId}
              onChange={(e) => setChatId(e.target.value)}
              placeholder="Ej. 123456789"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white font-mono placeholder-slate-600"
            />

            <button
              onClick={handleSendTest}
              disabled={!chatId || membresia === 'GRATIS'}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-black text-xs transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Alerta de Prueba en Vivo</span>
            </button>

            {testSent && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center font-mono">
                ✓ Alerta de prueba enviada exitosamente a Telegram
              </div>
            )}
          </div>
        </div>

        {/* Live Preview Box */}
        <div className="rounded-2xl p-6 border border-amber-500/30 bg-[#0d0f17] space-y-3">
          <span className="text-xs font-black text-cyan-400 uppercase font-mono block">
            Vista Previa del Mensaje
          </span>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-200 font-mono leading-relaxed">
            <p className="text-emerald-400 font-bold">🟢 ¡SEMÁFORO VERDE! — KIRAX ALERTS</p>
            <p className="text-slate-300">
              Noticia urgente: Declaraciones accommodative de la Fed e incremento de compras de lingotes por bancos centrales.
            </p>
            <p className="text-amber-300 text-[11px]">
              Recomendación M1-M5: Sesgo alcista confirmado. Buscar entradas Long.
            </p>
            <span className="text-[10px] text-slate-500 block pt-1 border-t border-slate-900">
              09:15 AM NY • kiraxterminal.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
