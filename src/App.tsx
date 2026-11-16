import React, { useState, useEffect } from 'react';
import { MembershipTier, User, NewsItem } from './types';
import { Navbar } from './components/Navbar';
import { MarketSemaforo3D } from './components/MarketSemaforo3D';
import { LiveMarketTicker } from './components/LiveMarketTicker';
import { ThreeColumnNews } from './components/ThreeColumnNews';
import { NewsTerminal } from './components/NewsTerminal';
import { EconomicCalendarTab } from './components/EconomicCalendarTab';
import { JournalTab } from './components/JournalTab';
import { TelegramAlertsTab } from './components/TelegramAlertsTab';
import { Academy } from './components/Academy';
import { DocumentAnalysis } from './components/DocumentAnalysis';
import { AIAssistantTab } from './components/AIAssistantTab';
import { AIAnalystModal } from './components/AIAnalystModal';
import { LicenseModal } from './components/LicenseModal';
import { TradingViewChart } from './components/TradingViewChart';
import { Footer } from './components/Footer';
import { fetchMarketNews } from './services/apiService';

export default function App() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'calendario' | 'journal' | 'alertas' | 'academia' | 'analisis_doc' | 'asistente_ia'>('terminal');
  const [showLicenseModal, setShowLicenseModal] = useState<boolean>(false);

  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem('kirax_logged_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch {
        // ignore error
      }
    }
    // Default for ALL new visitors is GRATIS!
    return {
      id: 1,
      nombre: 'Usuario Invitado',
      username: 'Invitado',
      email: 'invitado@kirax.com',
      membresia: 'GRATIS',
      isAuthenticated: false,
    };
  });

  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);
  const [showChartModal, setShowChartModal] = useState<boolean>(false);

  const [macroNews, setMacroNews] = useState<NewsItem[]>([
    { id: 1, titulo: 'Dólar se devalúa por incertidumbre política; Oro toca máximos históricos', fuente: 'NYT', url: '#', resumen: '', fecha: '09:12 AM' },
    { id: 2, titulo: 'BCE mantiene tasas bajas: Impacto en XAU/USD', fuente: 'Bloomberg', url: '#', resumen: '', fecha: '08:45 AM' },
    { id: 3, titulo: 'Datos de inflación de EE.UU. impulsan el oro', fuente: 'WSJ', url: '#', resumen: '', fecha: '08:15 AM' },
  ]);

  const [minerasNews, setMinerasNews] = useState<NewsItem[]>([
    { id: 4, titulo: 'Huelga en mina clave de Sudáfrica afecta suministro de oro', fuente: 'Reuters', url: '#', resumen: '', fecha: '08:50 AM' },
    { id: 5, titulo: 'Barrick Gold reporta resultados sólidos en Q3', fuente: 'Mining.com', url: '#', resumen: '', fecha: '08:20 AM' },
    { id: 6, titulo: 'Nuevos descubrimientos en Brasil disparan acciones de minera junior', fuente: 'Kitco News', url: '#', resumen: '', fecha: '07:40 AM' },
  ]);

  const [sentimientoNews, setSentimientoNews] = useState<NewsItem[]>([
    { id: 7, titulo: 'Bancos centrales incrementan reservas de oro', fuente: 'FT', url: '#', resumen: '', fecha: '08:30 AM' },
    { id: 8, titulo: 'Alta volatilidad en apertura de NY; Traders de scalping operan con cautela', fuente: 'Investing.com', url: '#', resumen: '', fecha: '08:00 AM' },
    { id: 9, titulo: 'Tensiones en Medio Oriente impulsan la compra de lingotes', fuente: 'ZeroHedge', url: '#', resumen: '', fecha: '07:15 AM' },
  ]);

  const handleSelectTier = (tier: MembershipTier) => {
    setUser((prev) => {
      const updated = { ...prev, membresia: tier };
      if (tier === 'GRATIS') {
        localStorage.removeItem('kirax_logged_user');
      } else {
        localStorage.setItem('kirax_logged_user', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const handleLogin = (username: string, email: string, tier: MembershipTier) => {
    const loggedUser: User = {
      id: Date.now(),
      nombre: username,
      username,
      email,
      membresia: tier,
      isAuthenticated: true,
    };
    setUser(loggedUser);
    localStorage.setItem('kirax_logged_user', JSON.stringify(loggedUser));
  };

  const handleLogout = () => {
    const guestUser: User = {
      id: 1,
      nombre: 'Usuario Invitado',
      username: 'Invitado',
      email: 'invitado@kirax.com',
      membresia: 'GRATIS',
      isAuthenticated: false,
    };
    setUser(guestUser);
    localStorage.removeItem('kirax_logged_user');
  };

  useEffect(() => {
    const fetchColumns = async () => {
      try {
        const data = await fetchMarketNews();
        if (data && data.macro && data.macro.length > 0) {
          setMacroNews(data.macro);
          setMinerasNews(data.mineras);
          setSentimientoNews(data.sentimiento);
        }
      } catch (_) {}
    };
    fetchColumns();
    const interval = setInterval(fetchColumns, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950 pb-12">
      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onSelectTier={handleSelectTier}
        onOpenLicenseModal={() => setShowLicenseModal(true)}
      />

      {/* Main View Container */}
      <main className="max-w-[1750px] mx-auto px-4 py-4 space-y-5">
        {activeTab === 'terminal' && (
          <div className="space-y-5">
            {/* Top Grid: Hero 3D Semáforo + Live Quotes Ticker (Matching Image Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
              <div className="lg:col-span-7">
                <MarketSemaforo3D
                  membresia={user.membresia}
                  onUpgradeTier={() => setShowLicenseModal(true)}
                  onOpenChart={() => setShowChartModal(true)}
                />
              </div>

              <div className="lg:col-span-5">
                <LiveMarketTicker />
              </div>
            </div>

            {/* Direct Embedded TradingView Chart Section */}
            <div className="w-full my-4">
              <TradingViewChart height="480px" />
            </div>

            {/* Middle 3-Column Matrix (ANÁLISIS MACRO & GLOBAL | ACTUALIDAD MINERAS | FLUJO DE MERCADO) */}
            <ThreeColumnNews
              macroNews={macroNews}
              minerasNews={minerasNews}
              sentimientoNews={sentimientoNews}
              onAnalyzeNews={(item) => setSelectedNewsItem(item)}
            />

            {/* Bottom Feed: DESGLOSE DE NOTICIAS 24H */}
            <NewsTerminal
              onAnalyzeNews={(item) => setSelectedNewsItem(item)}
            />
          </div>
        )}

        {activeTab === 'calendario' && <EconomicCalendarTab />}

        {activeTab === 'journal' && (
          <JournalTab
            membresia={user.membresia}
            onUpgradeTier={() => setShowLicenseModal(true)}
          />
        )}

        {activeTab === 'alertas' && (
          <TelegramAlertsTab
            membresia={user.membresia}
            onUpgradeTier={() => setShowLicenseModal(true)}
          />
        )}

        {activeTab === 'academia' && (
          <Academy
            membresia={user.membresia}
            onUpgradeTier={() => setShowLicenseModal(true)}
            userName={user.nombre}
          />
        )}

        {activeTab === 'analisis_doc' && <DocumentAnalysis />}

        {activeTab === 'asistente_ia' && <AIAssistantTab />}
      </main>

      {/* Institutional Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* License & Subscription Management Modal */}
      {showLicenseModal && (
        <LicenseModal
          user={user}
          onClose={() => setShowLicenseModal(false)}
          onSelectTier={handleSelectTier}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      )}

      {/* Single News Analysis Modal */}
      {selectedNewsItem && (
        <AIAnalystModal
          newsItem={selectedNewsItem}
          onClose={() => setSelectedNewsItem(null)}
        />
      )}

      {/* TradingView Chart Modal */}
      {showChartModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <TradingViewChart
            isModal={true}
            onClose={() => setShowChartModal(false)}
          />
        </div>
      )}
    </div>
  );
}
