import React from 'react';

interface KiraxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const KiraxLogo: React.FC<KiraxLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  onClick
}) => {
  // Size mappings
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', text: 'text-sm', subtitle: 'text-[9px]' },
    md: { icon: 'w-10 h-10', text: 'text-lg', subtitle: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl', subtitle: 'text-xs' },
    xl: { icon: 'w-20 h-20', text: 'text-3xl', subtitle: 'text-sm' },
  }[size];

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer hover:opacity-95 transition-opacity' : ''} ${className}`}
    >
      {/* MASTER LOGO ICON */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses.icon}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_18px_rgba(212,175,55,0.6)]">
          <defs>
            <linearGradient id="kiraxMasterGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A8" />
              <stop offset="45%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="kiraxMasterEmerald" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="60%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#6EE7B7" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Eagle Body & Left Wing Feathers in Sculpted Gold */}
          <path
            d="M 50 84 L 44 66 L 18 30 C 31 41 40 51 48 56 C 43 45 34 34 26 18 C 39 29 48 40 52 48 L 52 26 C 56 20 63 23 66 28 L 60 35 C 66 33 71 37 69 43 C 65 52 58 66 50 84 Z"
            fill="url(#kiraxMasterGold)"
          />

          {/* Eye Sparkle */}
          <circle cx="60" cy="27" r="2.5" fill="#FFFFFF" />

          {/* Ascending Trend Line Curve */}
          <path d="M 50 58 C 64 52 76 40 86 18" fill="none" stroke="url(#kiraxMasterEmerald)" strokeWidth="3" strokeLinecap="round" />

          {/* Bullish Candlesticks Right Wing */}
          <g fill="url(#kiraxMasterEmerald)">
            {/* Candle 1 */}
            <line x1="59" y1="42" x2="59" y2="58" stroke="#10B981" strokeWidth="1.5" />
            <rect x="57" y="46" width="4" height="10" rx="1" />

            {/* Candle 2 */}
            <line x1="66" y1="32" x2="66" y2="52" stroke="#10B981" strokeWidth="1.5" />
            <rect x="64" y="37" width="4" height="11" rx="1" />

            {/* Candle 3 (Gold Accent Candle) */}
            <line x1="74" y1="22" x2="74" y2="44" stroke="#F59E0B" strokeWidth="1.5" />
            <rect x="72" y="27" width="4.5" height="13" rx="1" fill="url(#kiraxMasterGold)" />

            {/* Candle 4 (Peak Golden Candle) */}
            <line x1="83" y1="10" x2="83" y2="34" stroke="#FFF" strokeWidth="1.5" />
            <rect x="80.5" y="15" width="5" height="15" rx="1" fill="#FFE066" />
          </g>
        </svg>
      </div>

      {/* BRAND TEXT TYPOGRAPHY */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-black tracking-[2px] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-sans uppercase drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] ${sizeClasses.text}`}>
              KIRAX
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-mono font-extrabold uppercase tracking-wider shadow-sm">
              PRO
            </span>
          </div>
          <span className={`font-mono font-bold tracking-[3px] text-slate-400 uppercase block mt-0.5 ${sizeClasses.subtitle}`}>
            TRADING & ACADEMY
          </span>
        </div>
      )}
    </div>
  );
};
