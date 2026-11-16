import React, { useState, useEffect, useRef } from 'react';
import { LineChart, RefreshCw, ExternalLink, Activity, Zap, TrendingUp, TrendingDown, Layers } from 'lucide-react';

interface TradingViewChartProps {
  symbol?: string;
  defaultInterval?: string;
  height?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const TradingViewChart: React.FC<TradingViewChartProps> = ({
  symbol = 'OANDA:XAUUSD',
  defaultInterval = '5',
  height = '500px',
  isModal = false,
  onClose,
}) => {
  const [interval, setIntervalTime] = useState<string>(defaultInterval);
  const [chartMode, setChartMode] = useState<'tv' | 'native'>('tv');
  const [key, setKey] = useState<number>(0);
  const [iframeError, setIframeError] = useState<boolean>(false);

  // Generate TradingView Widget URL
  const tvConfig = {
    autosize: true,
    symbol: symbol,
    interval: interval,
    timezone: 'America/New_York',
    theme: 'dark',
    style: '1',
    locale: 'es',
    enable_publishing: false,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    calendar: false,
    studies: ['STD;RSI'],
    support_host: 'https://www.tradingview.com',
  };

  const iframeSrc = `https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=es#${encodeURIComponent(
    JSON.stringify(tvConfig)
  )}`;

  // Native Interactive Scalping Chart State
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [livePrice, setLivePrice] = useState<number>(2670.45);
  const [priceChange, setPriceChange] = useState<number>(+12.80);
  const [hoverData, setHoverData] = useState<{ time: string; open: number; high: number; low: number; close: number; rsi: number } | null>(null);

  // Generate Candlestick Data for Native Mode
  const [candles, setCandles] = useState<Array<{ time: string; open: number; high: number; low: number; close: number; volume: number; rsi: number }>>([]);

  useEffect(() => {
    // Generate realistic initial candles for XAU/USD
    const now = new Date();
    const generated = [];
    let currentPrice = 2658.00;

    const count = 40;
    for (let i = count; i >= 0; i--) {
      const timeObj = new Date(now.getTime() - i * (parseInt(interval) || 5) * 60 * 1000);
      const timeStr = timeObj.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

      const variation = (Math.random() - 0.48) * 3.5;
      const open = currentPrice;
      const close = open + variation;
      const high = Math.max(open, close) + Math.random() * 2.2;
      const low = Math.min(open, close) - Math.random() * 2.2;
      const volume = Math.floor(Math.random() * 800 + 200);
      const rsi = Math.floor(40 + Math.random() * 35);

      currentPrice = close;
      generated.push({ time: timeStr, open, high, low, close, volume, rsi });
    }

    setCandles(generated);
    setLivePrice(parseFloat(currentPrice.toFixed(2)));
  }, [interval, key]);

  // Live price tick simulation for native chart
  useEffect(() => {
    if (chartMode !== 'native') return;
    const timer = setInterval(() => {
      setCandles((prev) => {
        if (prev.length === 0) return prev;
        const last = { ...prev[prev.length - 1] };
        const delta = (Math.random() - 0.49) * 0.85;
        last.close = parseFloat((last.close + delta).toFixed(2));
        last.high = Math.max(last.high, last.close);
        last.low = Math.min(last.low, last.close);
        last.rsi = Math.min(85, Math.max(15, parseFloat((last.rsi + delta * 2).toFixed(1))));

        setLivePrice(last.close);
        setPriceChange((c) => parseFloat((c + delta * 0.1).toFixed(2)));

        const updated = [...prev];
        updated[updated.length - 1] = last;
        return updated;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [chartMode]);

  // Render Canvas Chart
  useEffect(() => {
    if (chartMode !== 'native' || !canvasRef.current || candles.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const w = rect.width;
    const h = rect.height;

    // Clear background
    ctx.fillStyle = '#0d0f17';
    ctx.fillRect(0, 0, w, h);

    // Layout dimensions
    const priceChartHeight = h * 0.70;
    const rsiChartHeight = h * 0.22;
    const rsiTop = priceChartHeight + 10;

    // Price Bounds
    const allPrices = candles.flatMap((c) => [c.high, c.low]);
    const minPrice = Math.min(...allPrices) - 1.0;
    const maxPrice = Math.max(...allPrices) + 1.0;
    const priceRange = maxPrice - minPrice || 1;

    // Draw Grid Lines
    ctx.strokeStyle = '#1e2433';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    for (let i = 1; i <= 5; i++) {
      const y = (priceChartHeight / 6) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w - 60, y);
      ctx.stroke();

      // Price Label
      const p = maxPrice - (i / 6) * priceRange;
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(p.toFixed(2), w - 55, y + 3);
    }

    ctx.setLineDash([]);

    // Draw Candlesticks
    const candleWidth = (w - 70) / candles.length;

    candles.forEach((c, idx) => {
      const x = idx * candleWidth + candleWidth / 2;

      const yOpen = priceChartHeight - ((c.open - minPrice) / priceRange) * priceChartHeight;
      const yClose = priceChartHeight - ((c.close - minPrice) / priceRange) * priceChartHeight;
      const yHigh = priceChartHeight - ((c.high - minPrice) / priceRange) * priceChartHeight;
      const yLow = priceChartHeight - ((c.low - minPrice) / priceRange) * priceChartHeight;

      const isBull = c.close >= c.open;
      const color = isBull ? '#10b981' : '#f43f5e';

      // Wick
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, yHigh);
      ctx.lineTo(x, yLow);
      ctx.stroke();

      // Body
      ctx.fillStyle = color;
      const bodyY = Math.min(yOpen, yClose);
      const bodyH = Math.max(2, Math.abs(yClose - yOpen));
      ctx.fillRect(x - candleWidth * 0.35, bodyY, candleWidth * 0.7, bodyH);
    });

    // Draw RSI Line
    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;

    candles.forEach((c, idx) => {
      const x = idx * candleWidth + candleWidth / 2;
      const yRsi = rsiTop + rsiChartHeight - (c.rsi / 100) * rsiChartHeight;

      if (idx === 0) ctx.moveTo(x, yRsi);
      else ctx.lineTo(x, yRsi);
    });
    ctx.stroke();

    // RSI Bounds (70/30)
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 0.5;
    ctx.setLineDash([2, 2]);

    const yRsi70 = rsiTop + rsiChartHeight - (70 / 100) * rsiChartHeight;
    const yRsi30 = rsiTop + rsiChartHeight - (30 / 100) * rsiChartHeight;

    ctx.beginPath();
    ctx.moveTo(0, yRsi70);
    ctx.lineTo(w - 60, yRsi70);
    ctx.moveTo(0, yRsi30);
    ctx.lineTo(w - 60, yRsi30);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px monospace';
    ctx.fillText('RSI (14)', 10, rsiTop + 12);
    ctx.fillText('70', w - 55, yRsi70 + 3);
    ctx.fillText('30', w - 55, yRsi30 + 3);

  }, [candles, chartMode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || candles.length === 0) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const candleWidth = (rect.width - 70) / candles.length;
    const idx = Math.min(candles.length - 1, Math.max(0, Math.floor(x / candleWidth)));
    setHoverData(candles[idx]);
  };

  return (
    <div
      className={`flex flex-col bg-[#0d0f17] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden w-full ${
        isModal ? 'h-[85vh] max-w-6xl' : 'h-[580px]'
      }`}
    >
      {/* Top Header Controls Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0c10] border-b border-amber-500/20 shrink-0 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div className="flex items-center gap-2">
            <LineChart className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-black text-amber-400 font-mono tracking-wider uppercase">
              GRÁFICO EN VIVO XAU/USD (SCALPING M1 - M5)
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-emerald-400 font-black text-sm">${livePrice.toFixed(2)}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                priceChange >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
              }`}
            >
              {priceChange >= 0 ? '+' : ''}
              {priceChange.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Action Controls & Mode Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 font-mono text-[10px]">
            <button
              onClick={() => {
                setChartMode('tv');
                setKey((k) => k + 1);
              }}
              className={`px-2.5 py-1 rounded font-bold transition-all flex items-center gap-1 ${
                chartMode === 'tv'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)] font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>TradingView</span>
            </button>
            <button
              onClick={() => setChartMode('native')}
              className={`px-2.5 py-1 rounded font-bold transition-all flex items-center gap-1 ${
                chartMode === 'native'
                  ? 'bg-amber-500 text-slate-950 shadow-[0_0_10px_rgba(212,175,55,0.4)] font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3 h-3" />
              <span>Kirax Scalper Pro</span>
            </button>
          </div>

          {/* Timeframe Buttons */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 font-mono">
            {[
              { label: 'M1', val: '1' },
              { label: 'M5', val: '5' },
              { label: 'M15', val: '15' },
              { label: '1H', val: '60' },
            ].map((tf) => (
              <button
                key={tf.val}
                onClick={() => {
                  setIntervalTime(tf.val);
                  setKey((k) => k + 1);
                }}
                className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${
                  interval === tf.val
                    ? 'bg-amber-500 text-slate-950 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>

          {/* Open directly in TradingView.com */}
          <a
            href={`https://www.tradingview.com/chart/?symbol=OANDA%3AXAUUSD`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold flex items-center gap-1 transition-all"
            title="Abrir en pestaña nueva en TradingView"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">TradingView Web</span>
          </a>

          <button
            onClick={() => setKey((k) => k + 1)}
            className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors"
            title="Recargar gráfico"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold"
            >
              Cerrar ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Canvas / Iframe Body */}
      <div className="w-full flex-1 relative min-h-[480px] bg-[#0d0f17]">
        {chartMode === 'tv' ? (
          <div className="w-full h-full relative min-h-[480px]">
            <iframe
              key={key}
              title="TradingView XAU/USD Live Chart"
              src={iframeSrc}
              className="w-full h-full border-0 absolute inset-0"
              allow="fullscreen; autoplay; clipboard-write; encrypted-media"
              onError={() => setIframeError(true)}
            />
          </div>
        ) : (
          <div className="w-full h-full relative flex flex-col p-2">
            {/* Hover Info Header */}
            {hoverData && (
              <div className="absolute top-3 left-4 z-10 flex items-center gap-3 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-300 backdrop-blur-md">
                <span className="text-amber-400 font-bold">{hoverData.time}</span>
                <span>O: <strong className="text-white">{hoverData.open.toFixed(2)}</strong></span>
                <span>H: <strong className="text-emerald-400">{hoverData.high.toFixed(2)}</strong></span>
                <span>L: <strong className="text-rose-400">{hoverData.low.toFixed(2)}</strong></span>
                <span>C: <strong className="text-white">{hoverData.close.toFixed(2)}</strong></span>
                <span>RSI: <strong className="text-sky-400">{hoverData.rsi.toFixed(1)}</strong></span>
              </div>
            )}

            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoverData(null)}
              className="w-full h-full cursor-crosshair"
            />
          </div>
        )}
      </div>
    </div>
  );
};
