import React, { useState, useEffect } from 'react';
import { NewsItem } from '../types';
import { Search, RefreshCw, ExternalLink, Sparkles, Filter, Newspaper, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { fetchMarketNews } from '../services/apiService';

interface NewsTerminalProps {
  onAnalyzeNews: (item: NewsItem) => void;
}

export const NewsTerminal: React.FC<NewsTerminalProps> = ({ onAnalyzeNews }) => {
  const [noticias, setNoticias] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Oro', 'Fed', 'QQQ', 'S&P 500', 'Petróleo', 'Inflación', 'Macro'];

  const loadNoticias = async () => {
    setLoading(true);
    try {
      const data = await fetchMarketNews();
      if (data && Array.isArray(data.noticias)) {
        setNoticias(data.noticias);
      }
    } catch (_) {
      // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNoticias();
  }, []);

  const filteredNews = noticias.filter((n) => {
    const matchesCat =
      selectedCategory === 'Todos' ||
      (n.categoria && n.categoria.toLowerCase() === selectedCategory.toLowerCase());
    const matchesSearch =
      n.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.resumen.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.fuente.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="glass rounded-2xl p-6 border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between shadow-2xl h-full">
      <div>
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-extrabold text-white tracking-wide font-sans">
              Noticias 24H (11 Fuentes RSS)
            </h2>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono border border-amber-500/20">
              {filteredNews.length} titulares
            </span>
          </div>

          <button
            onClick={loadNoticias}
            disabled={loading}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700"
            title="Recargar Noticias"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-3 mb-5">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palabra clave (ej. Oro, Fed, Inflación)..."
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Feed List */}
        <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1 scrollbar-thin">
          {loading ? (
            <div className="py-12 text-center text-slate-400 space-y-3">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-amber-400" />
              <p className="text-xs">Escaneando feeds financieros en tiempo real...</p>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="text-xs">No se encontraron noticias con los filtros actuales.</p>
            </div>
          ) : (
            filteredNews.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-950/70 border border-white/5 hover:border-amber-500/40 transition-all group duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                      {item.categoria || 'Macro'}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{item.fuente}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{item.fecha}</span>
                </div>

                <h3 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug mb-1.5">
                  {item.titulo}
                </h3>

                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-3">
                  {item.resumen}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-900">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Fuente original</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => onAnalyzeNews(item)}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Analizar con Gemini IA</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
