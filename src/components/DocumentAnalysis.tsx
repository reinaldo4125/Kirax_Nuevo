import React from 'react';
import { FileCode, CheckCircle2, Cpu, Database, ShieldAlert, Sparkles, Layers, Terminal, Server, ExternalLink } from 'lucide-react';

export const DocumentAnalysis: React.FC = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Hero Card */}
      <div className="glass rounded-2xl p-6 border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <FileCode className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
              Análisis Técnico Maestro
            </span>
            <h1 className="text-xl font-extrabold text-white font-sans">
              Documento: KIRAX — Código Completo de la Plataforma
            </h1>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Informe técnico y desglose estructural del documento PDF adjunto. Se analiza la arquitectura original en Python/Flask y la forma en que se extrae y moderniza en esta aplicación web interactiva en producción.
        </p>
      </div>

      {/* Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Architecture Summary */}
        <div className="glass rounded-2xl p-5 border border-white/10 bg-slate-900/60 backdrop-blur-xl space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Layers className="w-4 h-4" />
            <span>1. Arquitectura Original del Documento</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <strong className="text-white block mb-0.5">Stack Backend:</strong>
              Python 3 + Flask 3.0.0 + Flask-Session (filesystem) + SQLite3 (`kirax.db`).
            </li>
            <li className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <strong className="text-white block mb-0.5">Scraper & RSS:</strong>
              `feedparser` consumiendo 11 fuentes financieras (Reuters, MarketWatch, CNBC, Kitco, Yahoo Finance, BBC, Investing).
            </li>
            <li className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <strong className="text-white block mb-0.5">Inteligencia Artificial:</strong>
              `google-generativeai` invocando el modelo Gemini para análisis de sentimiento cuantitativo (`positivo`, `negativo`, `neutral`).
            </li>
            <li className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <strong className="text-white block mb-0.5">Diseño Frontend:</strong>
              Glassmorphism 3D con tonos Oro (`#d4af37`), Azul Marino (`#0b1c3d`) y Negro (`#0a0a0f`).
            </li>
          </ul>
        </div>

        {/* Core Files Breakdown */}
        <div className="glass rounded-2xl p-5 border border-white/10 bg-slate-900/60 backdrop-blur-xl space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Terminal className="w-4 h-4" />
            <span>2. Archivos Clave y Funciones Relevantes</span>
          </div>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="font-mono font-bold text-amber-300">app.py</span>: Rutas HTTP principales, autenticación Werkzeug con hash, sesión de usuario y endpoint `/api/semaforo`.
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="font-mono font-bold text-amber-300">scraper.py</span>: Filtrado por palabras clave (`['oro', 'gold', 'fed', 'fomc', 'inflacion', 'qqq', 'spy', 'nasdaq', 'rates', 'cpi', 'oil']`).
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="font-mono font-bold text-amber-300">ia.py</span>: Configuración de Prompt estructurado para Gemini solicitando respuesta estricta en JSON.
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-white/5">
              <span className="font-mono font-bold text-amber-300">static/script.js</span>: Función `cargarSemaforo()` que aplica estilos CSS 3D dinámicos y activa la clase `.blur` para restringir usuarios GRATIS.
            </div>
          </div>
        </div>
      </div>

      {/* What we can extract and build (¿Qué podemos sacar?) */}
      <div className="glass rounded-2xl p-6 border border-white/10 bg-slate-900/80 backdrop-blur-xl space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
          <Sparkles className="w-5 h-5" />
          <span>3. ¿Qué podemos sacar y cómo lo hemos evolucionado?</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              ✓ Semáforo de Mercado 3D
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Inspirado en el indicador visual con efecto Neón (`boxShadow: 0 0 40px`). Implementado en React con cálculo de confianza por IA Gemini y actualización sin recargar la página.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              ✓ Terminal de Noticias 24H
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consumo en tiempo real de los 11 feeds RSS financieros con filtro interactivo por categoría y botón de "Análisis con Gemini" noticia por noticia.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              ✓ KIRAX Academia + Simulador
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Estructura de los 10 módulos planteados en la página 12 del PDF, integrada con un simulador interactivo de examen de 20 preguntas con retroalimentación inmediata.
            </p>
          </div>
        </div>

        {/* Technical Comparisons */}
        <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 text-xs">
          <span className="font-bold text-amber-400 block text-sm">
            Comparativa de Rendimiento y Seguridad
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 pt-1">
            <div className="p-3 rounded-lg bg-slate-900 border border-white/5 space-y-1">
              <span className="font-semibold text-rose-300 block">Plantilla Original PDF (Flask/SQLite):</span>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-400">
                <li>SQLite no soporta concurrencia alta de escrituras.</li>
                <li>`gemini-pro` (modelo deprecado en SDKs modernos).</li>
                <li>Recarga completa de página en cada acción Jinja2.</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-emerald-500/20 space-y-1">
              <span className="font-semibold text-emerald-300 block">Nuestra Versión Modernizada (React + Express):</span>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-300">
                <li>SDK oficial `@google/genai` con `gemini-3.8-flash` en servidor seguro.</li>
                <li>Componentes SPA reactivos con transiciones Fluid Motion.</li>
                <li>Selector de membresía en vivo para probar bloqueo/desbloqueo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
