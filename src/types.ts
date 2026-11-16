export type MembershipTier = 'GRATIS' | 'PRO' | 'ELITE';

export interface User {
  id: number;
  nombre: string;
  email: string;
  username?: string;
  membresia: MembershipTier;
  isAuthenticated?: boolean;
  telegramChatId?: string;
}

export interface NewsItem {
  id: string | number;
  titulo: string;
  fuente: string;
  url: string;
  resumen: string;
  fecha: string;
  categoria?: 'Macro & Global' | 'Mineras & Producción' | 'Flujo & Sentimiento' | string;
  sentimiento?: 'positivo' | 'negativo' | 'neutral';
  region?: 'USA' | 'China' | 'Europa' | 'Global';
  relevancia?: number;
}

export interface QuoteItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  positive: boolean;
}

export interface SemaforoStatus {
  estado: 'positivo' | 'negativo' | 'neutral' | 'bloqueado';
  color: string;
  mensaje?: string;
  razon?: string;
  leyenda?: string;
  confianza?: number;
  conductoresClave?: string[];
  actualizado?: string;
  sinApiKey?: boolean;
  modo?: string;
}

export interface EconomicEvent {
  id: number;
  evento: string;
  horaNY: string;
  impacto: 'ALTO' | 'MEDIO' | 'BAJO';
  efectoOro: string;
  color: string;
  dia?: string;
  fecha?: string;
  previo?: string;
  consenso?: string;
  actual?: string;
}

export interface TradeJournalEntry {
  id: string | number;
  fecha: string;
  entrada: string;
  resultado: 'ganadora' | 'perdedora' | 'breakeven';
  pips: number;
  emocion: 'Disciplinado' | 'Ansioso' | 'Confiado' | 'Frustrado';
  notas: string;
}

export interface LeaderboardEntry {
  pos: number;
  nombre: string;
  nivel: MembershipTier;
  winrate: number;
  trades: number;
  pips: number;
}

export interface AcademyModule {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado';
  pdfSimuladoUrl: string;
  preguntasBancoCount: number;
}

export interface ExamQuestion {
  id: number;
  seccion?: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}
