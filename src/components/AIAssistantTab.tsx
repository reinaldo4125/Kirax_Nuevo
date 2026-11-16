import React, { useState } from 'react';
import { Bot, Send, User, RefreshCw, Sparkles } from 'lucide-react';
import { chatWithAIAnalyst } from '../services/apiService';

export const AIAssistantTab: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: '¡Hola! Soy **KIRAX AI Analyst**. Estoy configurado con el modelo Gemini 3.8 Flash para ayudarte con análisis macroeconómico, correlación entre el Oro (XAU/USD) y tasas de la Fed, interpretación de noticias y estrategia de mercado. ¿Qué deseas consultar hoy?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const reply = await chatWithAIAnalyst(userText);
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: reply },
      ]);
    } catch (_) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Para la sesión actual de scalping en XAU/USD, priorice entradas con confirmación de volumen en M1-M5 y gestione el riesgo estrictamente.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-2xl p-6 border border-white/10 bg-slate-900/80 backdrop-blur-xl max-w-4xl mx-auto shadow-2xl flex flex-col h-[650px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-white">Analista Macro Gemini IA</h2>
            <p className="text-xs text-slate-400">Consultas de mercado en tiempo real con Gemini 3.7 Flash</p>
          </div>
        </div>

        <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
          Asistente Senior
        </span>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto my-4 space-y-4 pr-2 scrollbar-thin">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 text-xs leading-relaxed ${
              m.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {m.sender === 'ai' && (
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-2xl whitespace-pre-wrap ${
                m.sender === 'user'
                  ? 'bg-amber-500 text-slate-950 font-semibold rounded-tr-none shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-slate-950/90 text-slate-200 border border-slate-800 rounded-tl-none shadow-xl'
              }`}
            >
              {m.text}
            </div>

            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-xs text-slate-400 p-3 bg-slate-950/60 rounded-xl w-max">
            <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
            <span>KIRAX AI analizando datos de mercado...</span>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="py-2 flex items-center gap-2 overflow-x-auto text-[11px] scrollbar-thin shrink-0">
        <span className="text-slate-500 shrink-0">Sugerencias:</span>
        <button
          onClick={() => setInput('¿Cuál es la correlación actual entre el Oro y los rendimientos reales?')}
          className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-800 whitespace-nowrap"
        >
          Oro vs Rendimientos Reales
        </button>
        <button
          onClick={() => setInput('¿Cómo afectan los datos de Nóminas No Agrícolas (NFP) a la decisión de la Fed?')}
          className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-800 whitespace-nowrap"
        >
          Impacto NFP en la Fed
        </button>
        <button
          onClick={() => setInput('¿Qué buscar en los estados financieros de empresas del QQQ?')}
          className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-800 whitespace-nowrap"
        >
          Resultados QQQ / Tech
        </button>
      </div>

      {/* Input Box */}
      <div className="pt-3 border-t border-white/10 flex items-center gap-2 shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Haz una pregunta sobre mercados, tasas, oro, petróleo o análisis técnico..."
          className="flex-1 bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="p-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
