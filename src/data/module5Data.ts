export interface Module5SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_5_METADATA = {
  id: 5,
  titulo: "MÓDULO 5 — INDICADORES TÉCNICOS Y CONFLUENCIA",
  subtitulo: "Academia KIRAX | Domina las Herramientas del Trader Profesional",
  objetivo: "Comprender los 7 indicadores técnicos clave (Medias Móviles, RSI, MACD, VWAP, ATR, Bandas de Bollinger, Confluencia Múltiple), interpretarlos en contexto de Price Action y generar entradas de alta probabilidad.",
  duracionEstimada: "8 - 10 horas de estudio",
  totalPreguntasBanco: 500
};

export const MODULE_5_SECTIONS: Module5SectionContent[] = [
  {
    seccion: 1,
    titulo: "Introducción al Análisis Técnico y Tipos de Indicadores",
    contenido: [
      "El análisis técnico es el estudio de la acción del precio a través de gráficos e indicadores basándose en tres premisas: 1) El precio lo descuenta todo, 2) El precio se mueve en tendencias, 3) La historia se repite.",
      "Un indicador técnico es un cálculo matemático basado en precio, volumen o interés abierto. Su propósito NO es predecir el futuro, sino confirmar el Price Action y medir probabilidades."
    ],
    tabla: {
      headers: ["Tipo de Indicador", "Función Principal", "Ejemplos Clave", "Uso en KIRAX"],
      filas: [
        ["Tendencia", "Identificar dirección del mercado", "Medias Móviles (EMA/SMA), MACD", "Contexto y sesgo direccional"],
        ["Momentum / Osciladores", "Medir velocidad y aceleración del precio", "RSI, Estocástico", "Timing de entrada y zonas de sobrecompra/sobreventa"],
        ["Volatilidad", "Medir rango de movimiento del precio", "ATR, Bandas de Bollinger", "Dimensionar Stop Loss, Take Profit y Squeeze"],
        ["Volumen", "Medir nivel de participación en el precio", "VWAP, Volume Profile", "Confirmar rupturas y Fair Value intradiario"]
      ]
    },
    puntos: [
      "• REGLA DE ORO KIRAX: El indicador NO decide, TÚ decides. El indicador es siempre el segundo filtro; el primero es Price Action.",
      "• Indicadores Leading (Adelantados) vs Lagging (Retardados): El RSI y Osciladores anticipan zonas extremas; las Medias Móviles confirman tendencias pasadas.",
      "• Principio de Confluencia: La magia ocurre cuando 2 o 3 herramientas independientes apuntan a la misma conclusión."
    ]
  },
  {
    seccion: 2,
    titulo: "Medias Móviles (SMA y EMA) y Semáforo KIRAX",
    contenido: [
      "Una media móvil es el precio promedio de un activo durante un número determinado de períodos. Suaviza la acción del precio eliminando el ruido.",
      "SMA (Simple) da el mismo peso a todos los precios. EMA (Exponencial) otorga mayor peso a los precios recientes, reaccionando más rápido para scalping."
    ],
    tabla: {
      headers: ["Período", "Tipo", "Función Operativa", "Timeframe Recomendado"],
      filas: [
        ["9 EMA", "Exponencial", "Micro-tendencia inmediata e impulso rápido", "1 min / 5 min"],
        ["20 EMA", "Exponencial", "Tendencia de corto plazo e imán de pullback", "5 min / 15 min"],
        ["50 SMA", "Simple", "Soporte y Resistencia dinámico institucional", "15 min / 1 hora"],
        ["200 SMA", "Simple", "Tendencia macro de fondo y filtro institucional", "1 hora / 4 horas"]
      ]
    },
    puntos: [
      "• Semáforo KIRAX: Alineación de EMA 9 por encima de EMA 21 (Semáforo Verde = Sesgo Alcista); EMA 9 por debajo de EMA 21 (Semáforo Rojo = Sesgo Bajista).",
      "• Soporte/Resistencia Dinámico: En tendencias fuertes, el precio rebota limpia y repetidamente en la EMA 20.",
      "• Cruces Clásicos: Golden Cross (SMA 50 cruza arriba de SMA 200 = Alcista); Death Cross (SMA 50 cruza abajo de SMA 200 = Bajista)."
    ]
  },
  {
    seccion: 3,
    titulo: "RSI — Índice de Fuerza Relativa y Divergencias",
    contenido: [
      "El RSI (Relative Strength Index), creado por J. Welles Wilder, es un oscilador de momentum de escala 0 a 100 que mide la velocidad y magnitud de los cambios de precio.",
      "Zonas clave: >70 (Sobrecompra / Agotamiento comprador) y <30 (Sobreventa / Agotamiento vendedor). Zona neutral 30-70."
    ],
    tabla: {
      headers: ["Tipo de Divergencia", "Acción del Precio", "Comportamiento del RSI", "Señal Generada"],
      filas: [
        ["Divergencia Bajista Regular", "Precio hace Máximo Más Alto (HH)", "RSI hace Máximo Más Bajo (LH)", "Posible Reversión Bajista"],
        ["Divergencia Alcista Regular", "Precio hace Mínimo Más Bajo (LL)", "RSI hace Mínimo Más Alto (HL)", "Posible Reversión Alcista"],
        ["Divergencia Oculta Alcista", "Precio hace Mínimo Más Alto (HL)", "RSI hace Mínimo Más Bajo (LL)", "Continuación de Tendencia Alcista"],
        ["Divergencia Oculta Bajista", "Precio hace Máximo Más Bajo (LH)", "RSI hace Máximo Más Alto (HH)", "Continuación de Tendencia Bajista"]
      ]
    },
    puntos: [
      "• Divergencias: Son la señal MÁS PODEROSA del RSI. Muestran cuando el impulso pierde fuerza aunque el precio intente hacer nuevos extremos.",
      "• RSI en Scalping: Usar RSI 14 en gráfica de 5 minutos como filtro de contexto, no como gatillo a ciegas.",
      "• Error Común: Vender solo porque RSI > 70. En tendencias fuertes, el RSI puede permanecer sobrecomprado durante horas."
    ]
  },
  {
    seccion: 4,
    titulo: "MACD — Convergencia/Divergencia de Medias Móviles",
    contenido: [
      "El MACD, creado por Gerald Appel, combina seguimiento de tendencia con momentum. Componentes: Línea MACD (EMA 12 - EMA 26), Línea de Señal (EMA 9 de la línea MACD) e Histograma."
    ],
    tabla: {
      headers: ["Señal del MACD", "Descripción Técnica", "Nivel de Confiabilidad"],
      filas: [
        ["Cruce de Líneas Alcista", "Línea MACD cruza por encima de la Señal", "Media (Requiere confirmación de PA)"],
        ["Cruce de Líneas Bajista", "Línea MACD cruza por debajo de la Señal", "Media (Requiere confirmación de PA)"],
        ["Cruce de Línea Cero Alcista", "MACD cruza de negativo a positivo (>0)", "Alta (Cambio de tendencia confirmado)"],
        ["Divergencia de Histograma", "Precio sube pero barras de histograma se encogen", "Muy Alta (Alerta temprana de agotamiento)"]
      ]
    },
    puntos: [
      "• Histograma como Indicador Adelantado: Cuando las barras del histograma se encogen, avisa que el momentum se está agotando ANTES de que el precio gire.",
      "• Configuración Estándar: MACD (12, 26, 9)."
    ]
  },
  {
    seccion: 5,
    titulo: "VWAP — Precio Promedio Ponderado por Volumen",
    contenido: [
      "El VWAP (Volume Weighted Average Price) es el precio promedio de un activo ponderado por el volumen negociado durante la sesión. Es el indicador INSTITUCIONAL por excelencia."
    ],
    tabla: {
      headers: ["Posición del Precio", "Interpretación de Mercado", "Sesgo y Acción Operativa"],
      filas: [
        ["Precio por encima de VWAP", "Compradores en control / Fair Value superado", "Sesgo Alcista: Buscar Longs en pullbacks a VWAP"],
        ["Precio por debajo de VWAP", "Vendedores en control / Precio en descuento", "Sesgo Bajista: Buscar Shorts en rebotes a VWAP"],
        ["Bandas de VWAP (±2σ / ±3σ)", "Zonas de sobre-extensión estadística (95% - 99.7%)", "Posible Reversión / Mean Reversion de vuelta al VWAP"]
      ]
    },
    puntos: [
      "• El Imán del VWAP: Los algoritmos institucionales ejecutan órdenes cerca del VWAP. Cuando el precio se aleja demasiado, tiende a regresar al VWAP.",
      "• Reset Diario: El VWAP de sesión se reinicia al comienzo de cada jornada de trading (NYSE/Londres)."
    ]
  },
  {
    seccion: 6,
    titulo: "ATR — Rango Verdadero Promedio y Gestión de Riesgo",
    contenido: [
      "El ATR (Average True Range), creado por J. Welles Wilder (período 14), mide la VOLATILIDAD del mercado. NO indica dirección del precio.",
      "Uso principal: Herramienta esencial para calcular la distancia del Stop Loss (1.5x a 2x ATR) y del Take Profit dinámico."
    ],
    puntos: [
      "• Fórmula de Stop Loss con ATR: Stop Loss = Precio Entrada ± (ATR × Multiplicador). En Oro (XAU/USD), si ATR=2.5, tu SL debe tener al menos 3.75 - 5.0 puntos de distancia.",
      "• ATR Squeeze: Cuando el ATR cae a niveles mínimos, indica un mercado comprimido a punto de tener una ruptura de volatilidad explosiva.",
      "• Ajuste Dinámico: En sesiones de alta volatilidad (noticias), el ATR sube, lo que exige ampliar stops y reducir lotaje."
    ]
  },
  {
    seccion: 7,
    titulo: "Bandas de Bollinger y Bollinger Squeeze",
    contenido: [
      "Creadas por John Bollinger, consisten en una media móvil central (SMA 20) y dos bandas externas situadas a ±2 desviaciones estándar.",
      "Las bandas se expanden en alta volatilidad y se contraen en baja volatilidad."
    ],
    puntos: [
      "• Bollinger Squeeze: Ocurre cuando las bandas se estrechan al máximo. Indica que una gran expansión o ruptura con volumen es inminente.",
      "• Bollinger Bounce: En mercados laterales, el precio rebota entre la banda superior (resistencia) e inferior (soporte).",
      "• Caminar por la Banda: En tendencias fuertes, el precio 'camina' pegado a la banda exterior sin revertir inmediatamente."
    ]
  },
  {
    seccion: 8,
    titulo: "Confluencia Múltiple — La Pirámide de Decisión KIRAX",
    contenido: [
      "La confluencia es el arte de combinar múltiples razones técnicas independientes que apuntan a la misma conclusión.",
      "Un indicador aislado falla frecuentemente. Tres herramientas alineadas con Price Action transforman una probabilidad del 50% en una del 75-85%."
    ],
    tabla: {
      headers: ["Nivel Pirámide KIRAX", "Herramienta Evaluada", "Peso en la Decisión"],
      filas: [
        ["Nivel 1 (Base)", "Estructura de Mercado (HH/HL o LH/LL en M15/H1)", "40% de importancia"],
        ["Nivel 2", "Price Action (Patrones de velas, Zonas S/R, Order Blocks)", "30% de importancia"],
        ["Nivel 3", "VWAP y Medias Móviles (Sesgo intradiario y tendencia)", "10% de importancia"],
        ["Nivel 4", "Momentum (RSI + MACD confirmando)", "10% de importancia"],
        ["Nivel 5 (Top)", "Volatilidad y Gestión (ATR para Stop Loss y Take Profit)", "10% de importancia"]
      ]
    },
    puntos: [
      "• Checklist de Entrada A+: 1) Estructura M15 clara, 2) Zona S/R o VWAP, 3) Patrón de velas en M1/M5, 4) RSI/MACD a favor, 5) SL dimensionado por ATR, 6) R:R >= 1:2.",
      "• Clasificación de Setups: Setups A+ (5-6 confirmaciones = Ejecución máxima), Setups A (3-4 confirmaciones), Setups B/C (Baja confluencia = NO OPERAR)."
    ]
  },
  {
    seccion: 9,
    titulo: "Configuración de Gráficos en TradingView (Multi-Timeframe)",
    contenido: [
      "Configuración profesional de pantalla en TradingView para scalping de Oro y activos volátiles usando 3 timeframes simultáneos."
    ],
    tabla: {
      headers: ["Timeframe", "Indicadores Cargados", "Función Operativa"],
      filas: [
        ["1 Minuto", "VWAP de Sesión + EMA 20 + Semáforo KIRAX", "Gatillo de entrada de alta precisión"],
        ["5 Minutos", "RSI (14) + MACD (12,26,9) + ATR (14)", "Contexto de momentum y volatilidad actual"],
        ["15 Minutos", "SMA 50 + SMA 200 + Bandas de Bollinger (20,2)", "Tendencia general, canales y zonas de valor"]
      ]
    }
  },
  {
    seccion: 10,
    titulo: "Errores Fatales con Indicadores y Regla de las 3 Confirmaciones",
    contenido: [
      "Los 7 pecados capitales del indicador y la regla inflexible de las 3 confirmaciones para evitar operaciones por impulso."
    ],
    puntos: [
      "LOS 7 PECADOS CAPITALES DEL INDICADOR:",
      "1. Sobrecarga de Pantalla (Parálisis por análisis con 8+ indicadores).",
      "2. Usar el indicador como único criterio ignorando el Price Action.",
      "3. Buscar 'parámetros mágicos' cambiando las configuraciones estándar.",
      "4. Ignorar la tendencia del timeframe superior.",
      "5. Perseguir el indicador entrando tarde tras un cruce ya extendido.",
      "6. Usar osciladores de tendencia durante mercados laterales sin dirección.",
      "7. Usar indicadores que repintan señales pasadas.",
      "• LA REGLA DE LAS 3 CONFIRMACIONES: Antes de entrar: 1) Price Action confirma dirección, 2) Al menos 1 indicador de tendencia (VWAP/EMA) está alineado, 3) Al menos 1 indicador de momentum (RSI/MACD) da señal. Si falta una, NO ENTRES."
    ]
  }
];

export const MODULE_5_EXAM_BANK = [
  {
    id: 401,
    seccion: "Sección 1: Introducción",
    pregunta: "¿Cuál es el principio fundamental del Análisis Técnico?",
    opciones: [
      "A) El precio lo descuenta todo (toda la información ya está reflejada en el precio)",
      "B) El mercado es 100% aleatorio e impredecible",
      "C) Las noticias de última hora son lo único que importa",
      "D) Solo las grandes instituciones conocen la dirección futura"
    ],
    respuestaCorrecta: 0,
    explicacion: "El análisis técnico parte de la premisa de que todas las variables económicas, políticas y psicológicas ya están absorbidas en la cotización."
  },
  {
    id: 402,
    seccion: "Sección 1: Introducción",
    pregunta: "¿Qué tipo de indicador es el RSI (Índice de Fuerza Relativa)?",
    opciones: [
      "A) Oscilador de Momentum",
      "B) Indicador de Volumen Puro",
      "C) Indicador de Volatilidad",
      "D) Línea de tendencia estática"
    ],
    respuestaCorrecta: 0,
    explicacion: "El RSI es un oscilador de momentum que mide la velocidad y la magnitud de los cambios recientes de precio entre 0 y 100."
  },
  {
    id: 403,
    seccion: "Sección 2: Medias Móviles",
    pregunta: "¿En qué se diferencia una Media Móvil Exponencial (EMA) de una Simple (SMA)?",
    opciones: [
      "A) La EMA otorga mayor ponderación a los precios más recientes, reaccionando más rápido",
      "B) La SMA es exclusiva de criptomonedas",
      "C) La EMA no usa precios de cierre",
      "D) Son exactamente iguales en su fórmula matemática"
    ],
    respuestaCorrecta: 0,
    explicacion: "La EMA reacciona más velozmente a los cambios recientes de precio, lo que la hace ideal para scalping e intradía."
  },
  {
    id: 404,
    seccion: "Sección 2: Medias Móviles",
    pregunta: "¿Qué es un 'Golden Cross' (Cruce Dorado) entre medias móviles?",
    opciones: [
      "A) Una media móvil corta (ej. SMA 50) cruza por ENCIMA de una media móvil larga (ej. SMA 200), señalando inicio de tendencia alcista",
      "B) Un cruce de medias en mercado lateral",
      "C) Cuando la SMA 200 cruza por debajo del precio cero",
      "D) Un indicador de sobreventa extrema"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Golden Cross es un patrón clásico de cambio a tendencia alcista de mediano/largo plazo."
  },
  {
    id: 405,
    seccion: "Sección 3: RSI",
    pregunta: "¿Qué constituye una Divergencia Alcista en el indicador RSI?",
    opciones: [
      "A) El precio hace un Mínimo Más Bajo (LL), mientras el RSI hace un Mínimo Más Alto (HL)",
      "B) El precio y el RSI suben al mismo tiempo",
      "C) El RSI supera el nivel 80",
      "D) El precio hace máximos decrecientes con RSI en 50"
    ],
    respuestaCorrecta: 0,
    explicacion: "La divergencia alcista muestra que aunque el precio cayó a un nuevo mínimo, la fuerza o momentum bajista se ha debilitado."
  },
  {
    id: 406,
    seccion: "Sección 4: MACD",
    pregunta: "¿Cuáles son los tres componentes principales que integran el MACD?",
    opciones: [
      "A) Línea MACD, Línea de Señal e Histograma",
      "B) SMA 20, SMA 50 y SMA 200",
      "C) RSI, Estocástico y ATR",
      "D) Banda Superior, Media e Inferior"
    ],
    respuestaCorrecta: 0,
    explicacion: "El MACD consta de la Línea MACD (EMA12 - EMA26), la Línea de Señal (EMA9 de la línea MACD) y el Histograma de diferencia."
  },
  {
    id: 407,
    seccion: "Sección 4: MACD",
    pregunta: "¿Por qué el Histograma del MACD es considerado un indicador adelantado para scalping?",
    opciones: [
      "A) Porque cuando las barras del histograma se encogen, avisa que el momentum se agota ANTES de que el precio gire",
      "B) Porque predice las noticias económicas del día siguiente",
      "C) Porque indica el volumen exacto de lotes negociados",
      "D) Porque nunca genera señales falsas"
    ],
    respuestaCorrecta: 0,
    explicacion: "El encogimiento de las barras del histograma muestra una desaceleración de la distancia entre las medias del MACD antes del cruce formal."
  },
  {
    id: 408,
    seccion: "Sección 5: VWAP",
    pregunta: "¿Qué significa que el precio cotice significativamente por ENCIMA del VWAP de sesión?",
    opciones: [
      "A) Que los compradores están en control institucional con un sesgo alcista intradía",
      "B) Que el mercado está cerrado",
      "C) Que hay que vender inmediatamente sin analizar más",
      "D) Que no hay volumen en la sesión"
    ],
    respuestaCorrecta: 0,
    explicacion: "Estar por encima del VWAP de la sesión muestra que el volumen comprador dominó por encima del precio promedio ponderado."
  },
  {
    id: 409,
    seccion: "Sección 6: ATR",
    pregunta: "¿Cuál es el uso MÁS importante del ATR (Average True Range) según KIRAX?",
    opciones: [
      "A) Dimensionar la distancia estratégica del Stop Loss y Take Profit según la volatilidad real",
      "B) Decidir cuándo comprar o vender directamente",
      "C) Identificar si la tendencia es alcista o bajista",
      "D) Calcular el saldo de la cuenta"
    ],
    respuestaCorrecta: 0,
    explicacion: "El ATR mide cuánto espacio se mueve en promedio una vela, permitiendo fijar Stop Loss dinámicos (ej. 1.5x a 2x ATR) sin que el ruido del mercado te saque prematuramente."
  },
  {
    id: 410,
    seccion: "Sección 7: Bandas de Bollinger",
    pregunta: "¿Qué indica un 'Bollinger Squeeze' (Contracción de Bandas)?",
    opciones: [
      "A) Volatilidad extremadamente baja que anticipa una gran expansión o ruptura inminente con volumen",
      "B) Que el mercado ha terminado su tendencia para siempre",
      "C) Que hay que cerrar todas las posiciones inmediatamente",
      "D) Una señal de venta fuerte instantánea"
    ],
    respuestaCorrecta: 0,
    explicacion: "La contracción máxima de las bandas refleja compresión de volatilidad; históricamente a la compresión le sigue una explosión direccional."
  },
  {
    id: 411,
    seccion: "Sección 8: Confluencia",
    pregunta: "¿En qué consiste la Pirámide de Confluencia KIRAX para calificar un Setup A+?",
    opciones: [
      "A) Priorizar Estructura de Mercado y Price Action en la base, confirmando con VWAP, EMAs, RSI/MACD y ATR",
      "B) Entrar solo cuando un indicador da señal sin mirar velas",
      "C) Operar únicamente durante noticias NFP",
      "D) Usar 10 indicadores del mismo tipo al mismo tiempo"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un Setup A+ combina el contexto mayor (estructura + Price Action) alineado con indicadores de tendencia, momentum y volatilidad."
  },
  {
    id: 412,
    seccion: "Sección 10: Errores Fatales",
    pregunta: "¿Qué establece la 'Regla de las 3 Confirmaciones' antes de ejecutar un trade?",
    opciones: [
      "A) Se requiere: 1) Confirmación de Price Action, 2) Indicador de Tendencia (VWAP/EMA) alineado, 3) Indicador de Momentum (RSI/MACD) dando señal",
      "B) Probar 3 lotes diferentes en el broker",
      "C) Mirar 3 monitores a la vez",
      "D) Esperar 3 horas antes de entrar"
    ],
    respuestaCorrecta: 0,
    explicacion: "Exigir tres confirmaciones de categorías independientes elimina entradas impulsivas y filtros falsos positivos."
  },
  {
    id: 413,
    seccion: "Sección 5: VWAP",
    pregunta: "¿Qué son las Bandas ±2σ y ±3σ en el VWAP?",
    opciones: [
      "A) Zonas de desviación estándar donde estadísticamente el 95% y 99.7% del precio opera, actuando como zonas extremas de reversión al VWAP",
      "B) Medias móviles exponenciales de 200 períodos",
      "C) Soportes estáticos fijos creados por el broker",
      "D) Niveles de Fibonacci estáticos"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las bandas de desviación estándar del VWAP representan zonas de sobre-extensión estadística donde la reversión hacia el precio medio (VWAP) es muy probable."
  },
  {
    id: 414,
    seccion: "Sección 9: TradingView Layout",
    pregunta: "¿Cuál es la función del gráfico de 5 minutos en el layout multi-timeframe de KIRAX?",
    opciones: [
      "A) Evaluar el contexto de momentum (RSI/MACD) y volatilidad (ATR)",
      "B) Ejecutar las órdenes con botón rápido de venta",
      "C) Ver únicamente noticias de Twitter",
      "D) Calcular el impuesto de la operación"
    ],
    respuestaCorrecta: 0,
    explicacion: "El gráfico de 5 minutos ofrece la velocidad intermedia perfecta para monitorear la salud del momentum antes de gatillar en 1 minuto."
  },
  {
    id: 415,
    seccion: "Sección 10: Errores Fatales",
    pregunta: "¿Por qué se consideran redundantes indicadores como el RSI y el Estocástico si se usan juntos?",
    opciones: [
      "A) Porque ambos son osciladores de momentum que miden la misma propiedad física del precio y se sobrecargan entre sí",
      "B) Porque uno está en dólares y el otro en euros",
      "C) Porque no se pueden cargar en TradingView a la vez",
      "D) Porque cancelan las ordenes del broker"
    ],
    respuestaCorrecta: 0,
    explicacion: "Usar dos indicadores de la misma categoría (dos osciladores) genera falsa ilusión de confirmación extra cuando solo están midiendo lo mismo."
  }
];
