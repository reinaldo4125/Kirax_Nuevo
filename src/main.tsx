import React, { StrictMode, Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle cross-origin "Script error." gracefully from third-party widgets like TradingView
window.onerror = function (message) {
  if (message === 'Script error.' || message === 'Script error') {
    return true; // Prevent error from bubbling to global error handler
  }
  return false;
};

window.addEventListener('error', (event) => {
  if (event.message === 'Script error.' || event.message === 'Script error') {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}, true);

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && (event.reason === 'Script error.' || event.reason.message === 'Script error.')) {
    event.preventDefault();
  }
});

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in KIRAX application:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0c10] text-slate-200 flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-2xl mb-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            ⚡
          </div>
          <h1 className="text-xl font-bold font-mono text-amber-400 mb-2">KIRAX Terminal - Estado Temporal</h1>
          <p className="text-sm text-slate-400 max-w-md mb-6">
            Ha ocurrido una pequeña fluctuación en la conexión. Haz clic a continuación para restaurar la terminal.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-sm shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all"
          >
            Reconectar Terminal
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

