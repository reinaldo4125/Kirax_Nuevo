export interface Module4SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_4_METADATA = {
  id: 4,
  titulo: "MÓDULO 4 — PRICE ACTION: LECTURA DE VELAS Y ESTRUCTURA DE MERCADO",
  subtitulo: "Academia KIRAX | El Lenguaje Nativo del Mercado",
  objetivo: "Aprender a leer cualquier gráfico como un libro abierto, identificar zonas de alta probabilidad y ejecutar entradas sin depender de ningún indicador externo.",
  duracionEstimada: "7 - 10 días",
  totalPreguntasBanco: 500
};

export const MODULE_4_SECTIONS: Module4SectionContent[] = [
  {
    seccion: 1,
    titulo: "Anatomía de la Vela Japonesa",
    contenido: [
      "Cada vela representa la batalla entre compradores y vendedores durante un período de tiempo determinado (OHLC).",
      "El cuerpo de la vela muestra la fuerza real y convicción del movimiento. Las mechas (sombras) muestran zonas de rechazo de precio."
    ],
    tabla: {
      headers: ["Tipo de Vela", "Significado Técnico", "Interpretación Operativa"],
      filas: [
        ["Cuerpo grande, mechas pequeñas", "Fuerte momentum y convicción", "Tendencia saludable, seguir la dirección"],
        ["Cuerpo pequeño, mechas largas", "Indecisión / Rechazo de precio", "Posible reversión o pausa en el nivel"],
        ["Mecha larga inferior", "Rechazo de ventas", "Compras entraron agresivas en la parte baja"],
        ["Mecha larga superior", "Rechazo de compras", "Ventas entraron agresivas en la parte alta"],
        ["Sin mechas (Marubozu)", "Control total", "Un bando dominó completamente la sesión"]
      ]
    },
    puntos: [
      "• Open (O): Precio de apertura donde empieza la batalla.",
      "• High (H): Precio máximo hasta donde llegaron los compradores.",
      "• Low (L): Precio mínimo hasta donde empujaron los vendedores.",
      "• Close (C): Precio de cierre — determina quién ganó la batalla.",
      "• CONTEXTO: Compara siempre el tamaño de la vela actual con las 10-20 velas anteriores."
    ]
  },
  {
    seccion: 2,
    titulo: "Patrones de 1 Vela",
    contenido: [
      "Patrones de una sola vela que señalan agotamiento de tendencia o rechazo institucional en niveles clave."
    ],
    puntos: [
      "• Martillo (Hammer): Cuerpo pequeño superior, mecha inferior larga (2-3x cuerpo). Aparece en soporte tras tendencia bajista = Reversión Alcista.",
      "• Estrella Fugaz (Shooting Star): Cuerpo pequeño inferior, mecha superior larga. Aparece en resistencia tras tendencia alcista = Reversión Bajista.",
      "• Martillo Invertido (Inverted Hammer): Reversión alcista en soporte con mecha superior.",
      "• Hombre Colgado (Hanging Man): Aparece en techo tras tendencia alcista = Reversión bajista.",
      "• Doji (Cruz / Lápida / Libélula): Apertura y cierre casi idénticos = Indecisión total en el mercado.",
      "• Marubozu: Cuerpo completo sin mechas = Momentum puro e impulso agresivo.",
      "• Spinning Top: Cuerpo pequeño con mechas en ambos lados de tamaño similar = Agotamiento de tendencia."
    ]
  },
  {
    seccion: 3,
    titulo: "Patrones de 2 Velas",
    contenido: [
      "Patrones dobles de mayor confiabilidad que confirman absorción de liquidez y giros de mercado."
    ],
    puntos: [
      "• Envolvente Alcista (Bullish Engulfing): Vela 1 bajista pequeña, Vela 2 alcista grande que envuelve completamente el cuerpo anterior en zona de soporte.",
      "• Envolvente Bajista (Bearish Engulfing): Vela 1 alcista pequeña, Vela 2 bajista grande que envuelve el cuerpo anterior en zona de resistencia.",
      "• Harami Alcista / Bajista: 'Vela embarazada'. La segunda vela pequeña queda contenida dentro del cuerpo de la primera grande.",
      "• Línea Penetrante (Piercing Line): Vela 2 alcista abre por debajo pero cierra por encima del 50% del cuerpo de la vela 1 bajista.",
      "• Nube Oscura (Dark Cloud Cover): Vela 2 bajista abre por encima pero cierra por debajo del 50% del cuerpo de la vela 1 alcista.",
      "• Tweezers (Pinzas Techo/Suelo): Dos velas consecutivas con máximos o mínimos exactamente idénticos en soporte o resistencia."
    ]
  },
  {
    seccion: 4,
    titulo: "Patrones de 3 Velas",
    contenido: [
      "Girones y continuaciones estructurales formados por tres velas consecutivas que incluyen confirmación interna."
    ],
    puntos: [
      "• Estrella del Amanecer (Morning Star): Vela 1 bajista grande, Vela 2 doji/cuerpo pequeño en el suelo, Vela 3 alcista fuerte superando la mitad de la vela 1 = Giro Alcista potente.",
      "• Estrella del Atardecer (Evening Star): Vela 1 alcista grande, Vela 2 doji en el techo, Vela 3 bajista fuerte = Giro Bajista potente.",
      "• Tres Soldados Blancos (Three White Soldiers): 3 velas alcistas consecutivas con cierres ascendentes y mechas pequeñas = Continuación alcista saludable.",
      "• Tres Cuervos Negros (Three Black Crows): 3 velas bajistas consecutivas con cierres descendentes = Continuación bajista fuerte.",
      "• Bebé Abandonado (Abandoned Baby): Doji con GAPS a ambos lados = Agotamiento extremo y giro violento."
    ]
  },
  {
    seccion: 5,
    titulo: "Soportes y Resistencias (Zonas, No Líneas)",
    contenido: [
      "El mercado respeta ZONAS de oferta y demanda, no líneas de un solo píxel."
    ],
    puntos: [
      "• Soporte (Piso): Nivel de precio donde la demanda (compras) es lo suficientemente fuerte para detener la caída.",
      "• Resistencia (Techo): Nivel de precio donde la oferta (ventas) detiene la subida.",
      "• CAMBIO DE ROL (Role Reversal): Un soporte roto se convierte en resistencia futura. Una resistencia rota se convierte en soporte futuro.",
      "• Confluencia: La mejor señal ocurre cuando un patrón de velas de rechazo aparece JUSTO en una zona de S/R de marco de tiempo mayor (H4/D1)."
    ]
  },
  {
    seccion: 6,
    titulo: "Estructura de Tendencia y Canales",
    contenido: [
      "La estructura del precio define la dirección de menor resistencia."
    ],
    puntos: [
      "• Tendencia Alcista: Secuencia de Higher Highs (HH) y Higher Lows (HL). Sigue viva mientras no se rompa el último HL.",
      "• Tendencia Bajista: Secuencia de Lower Highs (LH) y Lower Lows (LL). Sigue viva mientras no se rompa el último LH.",
      "• Rango / Consolidación: El precio oscila entre un soporte y una resistencia sin definir nuevos máximos o mínimos.",
      "• Falsas Rupturas (Fakeouts): El precio rompe momentáneamente un nivel para cazar liquidez y regresa dentro del rango."
    ]
  },
  {
    seccion: 7,
    titulo: "Smart Money Concepts (SMC)",
    contenido: [
      "Metodología avanzada que rastrea las huellas operativas de las grandes instituciones financieras."
    ],
    puntos: [
      "• Market Structure Break (MSB) / BOS: Ruptura de estructura que confirma la continuidad o cambio de tendencia.",
      "• Change of Character (CHoCH): Primera señal de cambio de carácter en la tendencia al romper un swing previo.",
      "• Order Blocks (OB): La última vela contraria antes de un movimiento impulsivo fuerte institucional.",
      "• Fair Value Gap (FVG): Ineficiencia o 'hueco' entre 3 velas consecutivas donde el precio se movió aceleradamente. Tienden a rellenarse.",
      "• Liquidity Grab (LG): Barrido de stops por encima de un máximo o por debajo de un mínimo previo antes de invertir la dirección."
    ]
  },
  {
    seccion: 8,
    titulo: "Patrones de Chartismo Técnico",
    contenido: [
      "Figuras geométricas formadas por la acción del precio que indican giros o continuaciones."
    ],
    puntos: [
      "• Doble Techo (M) / Doble Suelo (W): Patrones de reversión de alta confiabilidad en extremos del gráfico.",
      "• Hombro-Cabeza-Hombro (HCH) e Invertido: Tres picos con la cabeza como máximo central. La ruptura del neckline confirma la entrada.",
      "• Banderas y Banderines: Patrones de CONTINUACIÓN de tendencia tras un mástil impulsivo.",
      "• Triángulos (Ascendente, Descendente, Simétrico): Patrones de compresión de volatilidad previos a rupturas violentas."
    ]
  },
  {
    seccion: 9,
    titulo: "Price Action para Scalping Intradía",
    contenido: [
      "Combinación de marquet de múltiples marcos de tiempo para gatillar entradas de precisión milimétrica."
    ],
    puntos: [
      "• Combo de Timeframes: M15 para estructura general -> M5 para marcar zonas de S/R y Order Blocks -> M1 para el patrón de gatillo de entrada.",
      "• Secuencia de Velas: En M1/M5, busca rechazo con mecha larga en zona de H1/H4 para máxima probabilidad.",
      "• Checklist de Scalping Price Action: 1) ¿Tendencia clara en M15? 2) ¿Precio en zona S/R / OB? 3) ¿Patrón de vela en M1/M5? 4) ¿R:R min 2:1? 5) ¿Stop en lugar lógico?"
    ]
  },
  {
    seccion: 10,
    titulo: "Tu Plan Personal de Price Action",
    contenido: [
      "Configura tu hoja de ruta con tus 3 a 5 patrones maestros."
    ],
    puntos: [
      "• REGLAS DE ORO DE PRICE ACTION KIRAX:",
      "1. El contexto es REY. Una vela sin su zona de S/R no significa nada.",
      "2. Deja SIEMPRE que la vela CIERRE antes de tomar una decisión.",
      "3. Compras solo en soporte, vendes solo en resistencia.",
      "4. Si el patrón no te da un R:R mínimo 2:1, ignora la operación.",
      "5. No operes contra la tendencia del marco de tiempo superior (M15/H1).",
      "6. Los fakeouts en zonas de liquidez son tus mejores oportunidades de entrada."
    ]
  }
];

export const MODULE_4_EXAM_BANK = [
  {
    id: 301,
    seccion: "Sección 1: Anatomía de la Vela",
    pregunta: "¿Qué significa el acrónimo OHLC en las velas japonesas?",
    opciones: [
      "A) Open, High, Low, Close (Apertura, Máximo, Mínimo, Cierre)",
      "B) Order, Hold, Limit, Cancel",
      "C) Open, Hold, Low, Close",
      "D) Origin, High, Limit, Cash"
    ],
    respuestaCorrecta: 0,
    explicacion: "OHLC representa los cuatro precios fundamentales negociados durante el periodo de tiempo de la vela."
  },
  {
    id: 302,
    seccion: "Sección 1: Anatomía de la Vela",
    pregunta: "¿Qué indica una vela con cuerpo muy pequeño y mechas largas en ambos extremos?",
    opciones: [
      "A) Indecisión e igual fuerza entre compradores y vendedores",
      "B) Fuerte tendencia definida en una sola dirección",
      "C) Volumen extremadamente bajo sin participantes",
      "D) Ruptura de resistencia confirmada"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las mechas largas a ambos lados con cuerpo estrecho muestran que el precio intentó subir y bajar pero cerró cerca del inicio (indecisión)."
  },
  {
    id: 303,
    seccion: "Sección 2: Patrones de 1 Vela",
    pregunta: "¿Cuál es la característica principal de un patrón Martillo (Hammer)?",
    opciones: [
      "A) Cuerpo pequeño en la parte superior con mecha inferior muy larga (2-3x el cuerpo)",
      "B) Cuerpo grande sin mechas",
      "C) Mecha superior larga con cuerpo abajo",
      "D) Dos velas del mismo tamaño"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Martillo refleja que los vendedores empujaron fuerte hacia abajo pero los compradores reabsorbieron todo el movimiento antes del cierre."
  },
  {
    id: 304,
    seccion: "Sección 2: Patrones de 1 Vela",
    pregunta: "¿Qué patrón de vela indica control absoluto sin oposición durante la sesión?",
    opciones: [
      "A) Marubozu (cuerpo completo sin mechas)",
      "B) Doji Lápida",
      "C) Spinning Top",
      "D) Martillo Invertido"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un Marubozu no tiene mechas, lo que significa que abrió en un extremo y cerró exactamente en el otro sin ceder terreno."
  },
  {
    id: 305,
    seccion: "Sección 3: Patrones de 2 Velas",
    pregunta: "¿Qué es un patrón Envolvente Alcista (Bullish Engulfing)?",
    opciones: [
      "A) Una vela alcista grande cuyo cuerpo envuelve completamente el cuerpo de la vela bajista anterior",
      "B) Dos velas doji seguidas",
      "C) Una vela roja que envuelve a una verde",
      "D) Una vela sin mechas"
    ],
    respuestaCorrecta: 0,
    explicacion: "La vela envolvente alcista demuestra un cambio drástico de momentum donde los compradores absorben toda la oferta previa."
  },
  {
    id: 306,
    seccion: "Sección 3: Patrones de 2 Velas",
    pregunta: "¿Qué significa el término 'Harami' en los patrones japoneses de velas?",
    opciones: [
      "A) Embarazada (una vela pequeña contenida dentro del cuerpo de la vela previa grande)",
      "B) Guerrero de la tendencia",
      "C) Estrella de la mañana",
      "D) Martillo doble"
    ],
    respuestaCorrecta: 0,
    explicacion: "Harami significa embarazada en japonés; la vela pequeña queda 'atrapada' dentro del cuerpo de la madre previa."
  },
  {
    id: 307,
    seccion: "Sección 4: Patrones de 3 Velas",
    pregunta: "¿Cuál es la estructura de una Estrella del Amanecer (Morning Star)?",
    opciones: [
      "A) Vela 1 bajista grande, Vela 2 doji/cuerpo pequeño en el suelo, Vela 3 alcista grande que supera el 50% de la vela 1",
      "B) Tres velas verdes consecutivas",
      "C) Tres velas rojas consecutivas",
      "D) Una vela con dos dojis a los lados"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Morning Star es un patrón mayor de giro alcista que representa la transición de ventas a indecisión y finalmente compras dominantes."
  },
  {
    id: 308,
    seccion: "Sección 5: Soportes y Resistencias",
    pregunta: "¿Qué es el principio de 'Cambio de Rol' (Role Reversal) en Price Action?",
    opciones: [
      "A) Un soporte roto se convierte en resistencia futura, y una resistencia rota se convierte en soporte",
      "B) Cambiar de broker a mitad de la sesión",
      "C) Intercambiar stop loss por take profit",
      "D) Operar en dos timeframes diferentes"
    ],
    respuestaCorrecta: 0,
    explicacion: "El cambio de rol ocurre porque los participantes atrapados en el nivel anterior buscan salir o reentrar cuando el precio vuelve al retest."
  },
  {
    id: 309,
    seccion: "Sección 6: Tendencias",
    pregunta: "¿Cómo se define formalmente una Estructura de Tendencia Alcista?",
    opciones: [
      "A) Secuencia sostenida de Higher Highs (Máximos más altos) y Higher Lows (Mínimos más altos)",
      "B) Velas rojas y verdes alternadas",
      "C) Lower Highs y Lower Lows",
      "D) El indicador RSI por encima de 50"
    ],
    respuestaCorrecta: 0,
    explicacion: "La tendencia alcista técnica requiere que cada impulso supere el máximo previo y cada retroceso respete el mínimo previo."
  },
  {
    id: 310,
    seccion: "Sección 7: Smart Money Concepts",
    pregunta: "¿Qué es un Order Block (OB) en la metodología Smart Money?",
    opciones: [
      "A) La última vela de color contrario previa a un movimiento impulsivo fuerte institucional",
      "B) Un bloque de 10 órdenes en la plataforma",
      "C) Un indicador técnico de volumen",
      "D) El saldo acumulado en la cuenta"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los Order Blocks representan las zonas donde las instituciones inyectaron grandes volúmenes de capital antes del impulso."
  },
  {
    id: 311,
    seccion: "Sección 7: Smart Money Concepts",
    pregunta: "¿Qué es un Fair Value Gap (FVG)?",
    opciones: [
      "A) Un desequilibrio o espacio sin negociar entre las mechas de la vela 1 y la vela 3 en una secuencia impulsiva",
      "B) Un error en los servidores del broker",
      "C) El precio del spread",
      "D) Una noticia programada"
    ],
    respuestaCorrecta: 0,
    explicacion: "El FVG refleja una ineficiencia de mercado donde el precio se movió tan rápido que la zona tiende a ser revisitada para rebalancear."
  },
  {
    id: 312,
    seccion: "Sección 8: Patrones de Chart",
    pregunta: "¿Qué figura forma un patrón Hombro-Cabeza-Hombro (HCH) y qué señala?",
    opciones: [
      "A) Tres picos con el central más alto; señala un cambio de tendencia de alcista a bajista al romper la línea de cuello (neckline)",
      "B) Un canal alcista continuo",
      "C) Una figura de continuación alcista",
      "D) Un triángulo de compresión"
    ],
    respuestaCorrecta: 0,
    explicacion: "El HCH es uno de los patrones chartistas más confiables de cambio de tendencia tras la falla del hombro derecho."
  },
  {
    id: 313,
    seccion: "Sección 9: Price Action Scalping",
    pregunta: "¿Cuál es la combinación de marcos de tiempo (timeframes) recomendada por KIRAX para Scalping?",
    opciones: [
      "A) M15 para estructura/tendencia -> M5 para zonas de S/R y OB -> M1 para el patrón de entrada",
      "B) Solo mirar la gráfica de 1 minuto sin contexto",
      "C) Gráficos diarios y semanales exclusivamente",
      "D) M30, H1 y H4 en simultáneo en 10 monitores"
    ],
    respuestaCorrecta: 0,
    explicacion: "Usar M15 y M5 da el contexto macro intradía necesario para evitar ser devorado por el ruido de la gráfica de 1 minuto."
  },
  {
    id: 314,
    seccion: "Sección 10: Plan Personal",
    pregunta: "¿Por qué es crucial esperar a que una vela CIERRE antes de tomar una decisión de entrada?",
    opciones: [
      "A) Porque la forma de la vela y sus mechas pueden cambiar drásticamente en los últimos segundos antes del cierre",
      "B) Por un requisito legal del broker",
      "C) Para pagar menos comisiones",
      "D) No es necesario esperar el cierre"
    ],
    respuestaCorrecta: 0,
    explicacion: "Entrar a mitad de la formación de la vela expone al trader a mechas engañosas y trampas de liquidez."
  },
  {
    id: 315,
    seccion: "Sección 7: Smart Money Concepts",
    pregunta: "¿Qué es un Liquidity Grab (Cacería de Liquidez)?",
    opciones: [
      "A) Un movimiento rápido que liquida los stop loss por encima/debajo de niveles clave antes de revertir fuertemente",
      "B) Depositar más dinero en la cuenta",
      "C) Comprar acciones en la apertura",
      "D) Cerrar todas las posiciones abiertas"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las instituciones necesitan contrapartida líquida para sus órdenes grandes, por lo que barren los picos de stops retail."
  }
];
