import React, { useState } from 'react';
import { NewsItem } from '../types';
import { X, Sparkles, TrendingUp, AlertCircle, Bot, Send, RefreshCw } from 'lucide-react';
import { analyzeNewsItem } from '../services/apiService';

interface AIAnalystModalProps {
  newsItem: NewsItem | null;
  onClose: () => void;
}

export const AIAnalystModal: React.FC<AIAnalystModalProps> = ({ newsItem, onClose }) => {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  React.useEffect(() => {
    if (newsItem) {
      analyzeSingleNews(newsItem);
    }
  }, [newsItem]);

  const analyzeSingleNews = async (item: NewsItem) => {
    setLoading(true);
    setAnalysis(null);
    try {
      const data = await analyzeNewsItem(item.titulo, item.resumen);
      setAnalysis(data);
    } catch (_) {
      setAnalysis({
        sentimiento: 'neutral',
        color: '#ffcc00',
        razon: 'Noticia procesada con impacto neutro o no significativo.',
        impactoEsperado: 'Baja fluctuación esperada en la sesión actual.'
      });
    } finally {
      setLoading(false);
    }
  };

  if (!newsItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass rounded-2xl max-w-xl w-full p-6 border border-white/10 bg-slate-900/95 shadow-2xl relative space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-white">Análisis de Noticia con Gemini IA</h2>
            <span className="text-[11px] text-slate-400 font-mono">
              KIRAX Natural Language Processing
            </span>
          </div>
        </div>

        {/* News Headline Details */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>{newsItem.fuente}</span>
            <span>{newsItem.fecha}</span>
          </div>
          <h3 className="text-sm font-bold text-amber-300 leading-snug">
            {newsItem.titulo}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {newsItem.resumen}
          </p>
        </div>

        {/* Gemini Analysis Output */}
        {loading ? (
          <div className="py-8 text-center text-slate-400 space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-amber-400" />
            <p className="text-xs">Consultando modelo Gemini 3.7 Flash...</p>
          </div>
        ) : analysis ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/90 border border-white/5">
              <span className="text-xs font-bold text-slate-300">Sentimiento Detectado:</span>
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: analysis.color || '#ffcc00' }}
                />
                <span className="text-xs font-extrabold font-mono uppercase text-white">
                  {analysis.sentimiento}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                Explicación del Algoritmo
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {analysis.razon}
              </p>
            </div>

            {analysis.impactoEsperado && (
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                  Impacto en Activos
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {analysis.impactoEsperado}
                </p>
              </div>
            )}
          </div>
        ) : null}

        <div className="pt-3 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all"
          >
            Cerrar Análisis
          </button>
        </div>
      </div>
    </div>
  );
};
