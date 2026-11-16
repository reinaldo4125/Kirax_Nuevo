import { AcademyModule, ExamQuestion, NewsItem } from '../types';

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 1,
    titulo: 'La Reserva Federal señala cautela sobre los recortes de tasas debido a la inflación persistente',
    fuente: 'Reuters Business',
    url: 'https://www.reuters.com',
    resumen: 'Los gobernadores de la Fed insisten en que la inflación subyacente sigue por encima del objetivo del 2%, lo que exige mantener las tasas de interés restringidas durante más tiempo.',
    fecha: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    categoria: 'Fed',
    sentimiento: 'negativo'
  },
  {
    id: 2,
    titulo: 'El Oro (XAU/USD) alcanza nuevos máximos históricos ante la demanda de refugio seguro',
    fuente: 'Kitco News',
    url: 'https://www.kitco.com',
    resumen: 'Las tensiones geopolíticas y las compras masivas de los bancos centrales elevan el precio del oro por encima de los niveles clave de resistencia.',
    fecha: new Date(Date.now() - 15 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    categoria: 'Oro',
    sentimiento: 'positivo'
  },
  {
    id: 3,
    titulo: 'El índice Nasdaq y el ETF QQQ registran volatilidad por resultados del sector tecnológico',
    fuente: 'MarketWatch',
    url: 'https://www.marketwatch.com',
    resumen: 'Los inversionistas evalúan las elevadas valoraciones en IA frente a las proyecciones de gasto de capital de las grandes empresas de tecnología.',
    fecha: new Date(Date.now() - 30 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    categoria: 'QQQ',
    sentimiento: 'neutral'
  },
  {
    id: 4,
    titulo: 'Los precios del Petróleo Brent se estabilizan tras datos de inventarios en EE. UU.',
    fuente: 'CNBC Finance',
    url: 'https://www.cnbc.com',
    resumen: 'Las reservas de crudo disminuyeron más de lo esperado, equilibrando las preocupaciones sobre la demanda económica global.',
    fecha: new Date(Date.now() - 45 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    categoria: 'Petróleo',
    sentimiento: 'positivo'
  },
  {
    id: 5,
    titulo: 'El dato de Nóminas No Agrícolas (Payroll) supera las expectativas del mercado',
    fuente: 'Yahoo Finance',
    url: 'https://finance.yahoo.com',
    resumen: 'El mercado laboral estadounidense muestra resiliencia con la creación de 215,000 nuevos empleos, lo que reduce las probabilidades de recesión inminente.',
    fecha: new Date(Date.now() - 60 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    categoria: 'Payroll',
    sentimiento: 'positivo'
  },
  {
    id: 6,
    titulo: 'El Banco Central Europeo (BCE) analiza pausar la flexibilización monetaria',
    fuente: 'BBC Business',
    url: 'https://www.bbc.com/news/business',
    resumen: 'El crecimiento de los salarios en la zona euro se mantiene elevado, lo que complica los planes de reducción de tasas del BCE.',
    fecha: new Date(Date.now() - 90 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    categoria: 'BCE',
    sentimiento: 'negativo'
  }
];

export const ACADEMY_MODULES: AcademyModule[] = [
  {
    id: 1,
    titulo: 'Módulo 1: Fundamentos del Análisis Macro',
    descripcion: 'Aprende a leer los indicadores clave: PIB, IPC, Tasa de Desempleo y decisiones de Bancos Centrales.',
    duracion: '2h 30m',
    nivel: 'Principiante',
    pdfSimuladoUrl: '/docs/modulo1_macro.pdf',
    preguntasBancoCount: 50
  },
  {
    id: 2,
    titulo: 'Módulo 2: Política Monetaria y la Reserva Federal',
    descripcion: 'Entiende los comunicados de la FOMC, los diagramas Dot Plot y el impacto de los tipos de interés.',
    duracion: '3h 15m',
    nivel: 'Intermedio',
    pdfSimuladoUrl: '/docs/modulo2_fed.pdf',
    preguntasBancoCount: 50
  },
  {
    id: 3,
    titulo: 'Módulo 3: El Mercado del Oro y Commodities',
    descripcion: 'Dinámica de cotización del XAU/USD, correlación con el DXY, inflación y primas de riesgo.',
    duracion: '2h 45m',
    nivel: 'Intermedio',
    pdfSimuladoUrl: '/docs/modulo3_gold.pdf',
    preguntasBancoCount: 50
  },
  {
    id: 4,
    titulo: 'Módulo 4: Índices Bursátiles (SPY, QQQ, Nasdaq)',
    descripcion: 'Estructura de índices, ponderación por capitalización y lectura del flujo institucional.',
    duracion: '3h 00m',
    nivel: 'Intermedio',
    pdfSimuladoUrl: '/docs/modulo4_indices.pdf',
    preguntasBancoCount: 50
  },
  {
    id: 5,
    titulo: 'Módulo 5: Indicadores Técnicos y Confluencia',
    descripcion: 'Domina los 7 indicadores clave: Medias Móviles, RSI, MACD, VWAP, ATR, Bollinger y la Pirámide de Confluencia.',
    duracion: '8h 00m',
    nivel: 'Intermedio',
    pdfSimuladoUrl: '/docs/modulo5_indicadores_tecnicos.pdf',
    preguntasBancoCount: 500
  },
  {
    id: 6,
    titulo: 'Módulo 6: Bookmap Básico - El Radar de Liquidez',
    descripcion: 'Aprende a leer el Heatmap, Volume Dots, CVD, Icebergs, Spoofing, Absorción y el flujo de órdenes en tiempo real.',
    duracion: '8h 00m',
    nivel: 'Avanzado',
    pdfSimuladoUrl: '/docs/modulo6_bookmap_basico.pdf',
    preguntasBancoCount: 500
  },
  {
    id: 7,
    titulo: 'Módulo 7: Bookmap Intermedio - Del Radar al Francotirador',
    descripcion: 'Lectura avanzada de flujo con CVD, Icebergs de precisión, Absorción, Liquidez Multi-Timeframe y los 3 Setups Completos.',
    duracion: '8h 00m',
    nivel: 'Avanzado',
    pdfSimuladoUrl: '/docs/modulo7_bookmap_intermedio.pdf',
    preguntasBancoCount: 500
  },
  {
    id: 8,
    titulo: 'Módulo 8: KIRAX Indicator - Tu Producto Estrella',
    descripcion: 'Configuración, lectura avanzada y operativa del indicador KIRAX 3D en TradingView con la Regla de las 3 Confluencias.',
    duracion: '6h 00m',
    nivel: 'Avanzado',
    pdfSimuladoUrl: '/docs/modulo8_kirax_indicator.pdf',
    preguntasBancoCount: 500
  },
  {
    id: 9,
    titulo: 'Módulo 9: Análisis Real I - De la Teoría al Mercado',
    descripcion: 'Uniendo todas las piezas: metodología top-down, estructura de mercado (HH/HL/BOS/CHoCH), zonas clave, MTF, entradas reactivas/proactivas y gestión en vivo.',
    duracion: '8h 00m',
    nivel: 'Avanzado',
    pdfSimuladoUrl: '/docs/modulo9_analisis_real_1.pdf',
    preguntasBancoCount: 500
  },
  {
    id: 10,
    titulo: 'Módulo 10: Análisis Real II - Operativa en Vivo Avanzada',
    descripcion: 'De la lectura a la decisión quirúrgica: preparación pre-mercado, sesgo diario, lectura en tiempo real, giros, gestión de riesgo y journaling.',
    duracion: '10h 00m',
    nivel: 'Avanzado',
    pdfSimuladoUrl: '/docs/modulo10_analisis_real_2.pdf',
    preguntasBancoCount: 500
  }
];

export const SAMPLE_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    pregunta: '¿Qué efecto suele tener un incremento inesperado en la tasa de interés de la Fed sobre el DXY (Índice Dólar)?',
    opciones: [
      'Fortalece al dólar (DXY sube) por mayor rendimiento de activos denominados en USD',
      'Debilita al dólar inmediatamente',
      'No tiene ningún efecto en los mercados de divisas',
      'Aumenta únicamente el precio del oro'
    ],
    respuestaCorrecta: 0,
    explicacion: 'Un aumento de tasas de interés incrementa los rendimientos de los bonos en USD, atrayendo capitales extranjeros y fortaleciendo el dólar frente a otras divisas.'
  },
  {
    pregunta: '¿Cuál es la relación histórica tradicional entre el Oro (XAU/USD) y los rendimientos reales de los bonos?',
    id: 2,
    opciones: [
      'Relación inversa: a mayores rendimientos reales, menor atractivo del oro que no paga cupón',
      'Relación directamente proporcional directa',
      'No existe correlación entre ambos',
      'El oro sube únicamente cuando los rendimientos son del 10%'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El oro es un activo sin rendimiento de interés. Cuando los rendimientos reales aumentan, el costo de oportunidad de sostener oro sube, presionando su precio a la baja.'
  },
  {
    pregunta: '¿Qué mide el informe de Nóminas No Agrícolas (NFP) en EE. UU.?',
    id: 3,
    opciones: [
      'El número de puestos de trabajo añadidos en el último mes excluyendo el sector agrícola',
      'El precio del petróleo a nivel consumidor',
      'El total de impuestos recaudados por la agricultura',
      'El volumen de transacciones en el Nasdaq'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El NFP es un indicador clave de salud económica que mide el cambio en la cantidad de personas empleadas en EE. UU., excluyendo empleados del gobierno, hogares y agricultura.'
  },
  {
    pregunta: 'En el Semáforo de Mercado KIRAX, un indicador verde (#00ff88) representa:',
    id: 4,
    opciones: [
      'Sentimiento predominantemente positivo/alcista (Bullish) impulsado por catalizadores macro',
      'Mercado bloqueado sin volumen',
      'Sentimiento bajista extremo (Bearish)',
      'Error de conexión con las fuentes RSS'
    ],
    respuestaCorrecta: 0,
    explicacion: 'El color verde simboliza optimismo financiero y flujo alcista analizado por el algoritmo de IA en las noticias relevantes.'
  },
  {
    pregunta: '¿Qué se entiende por "Inversión de la Curva de Tipos de Interés"?',
    id: 5,
    opciones: [
      'Cuando el rendimiento de los bonos a corto plazo (ej. 2 años) supera al de largo plazo (ej. 10 años)',
      'Cuando los bonos a 10 años rinden más que los de 2 años',
      'Cuando la bolsa sube un 20% en un día',
      'Cuando el banco central imprime más billetes de $100'
    ],
    respuestaCorrecta: 0,
    explicacion: 'La inversión de la curva de tipos es uno de los indicadores precursores más fiables de recesión económica en los libros de texto de finanzas.'
  }
];
