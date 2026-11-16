export interface Module3SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_3_METADATA = {
  id: 3,
  titulo: "MÓDULO 3 — GESTIÓN DE RIESGO Y MONEY MANAGEMENT",
  subtitulo: "Academia KIRAX | La Base Matemática de la Rentabilidad Consistente",
  objetivo: "Aprender a proteger tu capital como un trader institucional. El riesgo no se elimina, se gestiona. Sin gestión de riesgo no hay trader.",
  duracionEstimada: "7 - 10 días",
  totalPreguntasBanco: 500
};

export const MODULE_3_SECTIONS: Module3SectionContent[] = [
  {
    seccion: 1,
    titulo: "Fundamentos de Gestión de Riesgo",
    contenido: [
      "La gestión de riesgo es el conjunto de reglas y procedimientos que determinan CUÁNTO estás dispuesto a perder en cada operación, en cada día y en cada semana.",
      "No es sobre ganar más — es sobre PERDER MENOS. El mercado siempre tendrá otra oportunidad... pero solo si todavía tienes capital."
    ],
    tabla: {
      headers: ["APOSTAR", "HACER TRADING (con gestión de riesgo)"],
      filas: [
        ["Entrada sin plan de salida", "Entrada, Stop Loss y Take Profit definidos ANTES"],
        ["Tamaño de posición aleatorio", "Tamaño calculado según % de riesgo fijo"],
        ["Esperanza de 'ganar fuerte'", "Esperanza matemática positiva comprobada"],
        ["Una mala racha = cuenta quebrada", "Una mala racha = drawdown controlado"],
        ["Emociones mandan", "Las reglas mandan"]
      ]
    },
    puntos: [
      "• LA REGLA DE ORO DEL TRADING: NUNCA arriesgues más del 1-2% de tu cuenta en una sola operación. Esta regla no es negociable.",
      "• Esperanza Matemática (EM): EM = (%Ganadoras × Ganancia Media) - (%Perdedoras × Pérdida Media). Si tu EM es positiva, tienes un sistema rentable.",
      "• Ley de los Grandes Números: Una sola operación no significa nada. Tu gestión de riesgo debe estar diseñada para sobrevivir 100, 200, 500 operaciones."
    ]
  },
  {
    seccion: 2,
    titulo: "El Tamaño de Posición (Position Sizing)",
    contenido: [
      "El tamaño de posición es CUÁNTOS contratos, lotes, acciones o unidades compras/vendes en cada operación.",
      "Un buen entry con mal position sizing = pérdida. Un entry regular con buen position sizing = supervivencia."
    ],
    puntos: [
      "• FÓRMULA UNIVERSAL DE POSITION SIZING:",
      "Tamaño de Posición = (Capital Total × % de Riesgo) / Distancia al Stop Loss en $",
      "• Ejemplo en Oro (XAU/USD): Cuenta $10,000. Riesgo 1% ($100). Entrada $2,650, Stop $2,640 (Distancia $10). Lotes = $100 / $10 = 0.10 lotes estándar (10 micro lotes).",
      "• Position Sizing por Volatilidad (ATR): Ajustas el tamaño según el ATR de 14 períodos. Si la volatilidad sube, reduces tamaño para mantener el mismo riesgo en dólares."
    ],
    tabla: {
      headers: ["Tipo de Sizing", "Descripción", "Nivel de Riesgo", "Recomendado"],
      filas: [
        ["Fijo ($)", "Siempre el mismo tamaño (ej: 1 lote)", "MUY ALTO", "NO"],
        ["% Fijo del Capital", "Arriesgas siempre el mismo % (ej: 1%)", "Controlado", "SÍ — Recomendado"],
        ["Martingala", "Doblas tras perder", "EXTREMO", "NUNCA"],
        ["Volatilidad Ajustada", "Ajustas según ATR", "Óptimo", "SÍ — Profesional"]
      ]
    }
  },
  {
    seccion: 3,
    titulo: "Stop Loss — El Arte de Saber Perder",
    contenido: [
      "El Stop Loss es una orden automática que cierra tu posición cuando el precio alcanza un nivel predeterminado de pérdida. NO es opcional. NO es negociable. Es tu cinturón de seguridad."
    ],
    puntos: [
      "• Dónde COLOCAR el Stop Loss: Colócalo donde tu tesis de entrada quede INVALIDADA (debajo del soporte en compras, arriba de la resistencia en ventas). Debe tener espacio para respirar.",
      "• ERRORES FATALES CON EL STOP LOSS:",
      "1. Mover el stop más lejos cuando el precio se acerca ('ya rebotará').",
      "2. Quitar el stop loss manualmente.",
      "3. Colocar el stop en niveles tan obvios que son cazados por liquidez.",
      "• EL DOLOR DE UN STOP LOSS BIEN PUESTO: Un stop loss no es un fracaso — es un COSTO DE NEGOCIO. Así como una tienda paga alquiler, el trader paga stops."
    ],
    tabla: {
      headers: ["Tipo de Stop", "Ventaja", "Desventaja"],
      filas: [
        ["Técnico (Soporte/Resistencia)", "Respeta la estructura del mercado", "Requiere análisis previo"],
        ["ATR-Based", "Se adapta automáticamente a la volatilidad", "En mercados muy planos puede ser ancho"],
        ["Trailing Stop", "Protege ganancias dinámicamente", "Puede sacarte antes de tiempo en pullbacks"],
        ["Hard Stop (En servidor)", "Inamovible y automático", "Ejecuta estrictamente en el broker"]
      ]
    }
  },
  {
    seccion: 4,
    titulo: "Risk/Reward Ratio — La Fórmula de la Rentabilidad",
    contenido: [
      "El R:R es la relación entre lo que arriesgas y lo que esperas ganar. Si arriesgas $100 para ganar $200, tu R:R es 1:2."
    ],
    tabla: {
      headers: ["R:R Ratio", "Acierto Mínimo (Break-Even)", "Evaluación de Rentabilidad"],
      filas: [
        ["1:0.5", "67%", "Casi imposible de mantener a largo plazo"],
        ["1:1", "50%", "Difícil, requiere alta precisión"],
        ["1:1.5", "40%", "Alcanzable y sostenible"],
        ["1:2", "33%", "MUY alcanzable (Solo necesitas 34% de acierto)"],
        ["1:3", "25%", "Cómodo y altamente rentable"]
      ]
    },
    puntos: [
      "• Regla KIRAX: NUNCA entres en una operación con un R:R menor a 1:1.5. Si el movimiento técnico no ofrece al menos 1:1.5, ESPERA otra oportunidad.",
      "• Take Profits Inteligentes: Coloca tu TP en niveles de liquidez (Bookmap), resistencias previas o extensiones de Fibonacci (127% / 161.8%)."
    ]
  },
  {
    seccion: 5,
    titulo: "Drawdown y Recuperación",
    contenido: [
      "El drawdown es la caída porcentual desde el punto más alto de tu capital (peak) hasta el punto más bajo (valley). Se mide en porcentaje y representa la salud de tu cuenta."
    ],
    tabla: {
      headers: ["Pérdida (Drawdown)", "Ganancia Necesaria para Recuperar"],
      filas: [
        ["-10%", "+11.1%"],
        ["-20%", "+25.0%"],
        ["-30%", "+42.9%"],
        ["-50%", "+100.0% (¡Debes duplicar la cuenta!)"],
        ["-80%", "+400.0% (Casi imposible)"]
      ]
    },
    puntos: [
      "• Plan KIRAX de Recuperación Progresiva: Si estás en drawdown, reduce tu tamaño de posición al 50%. Busca 5 operaciones ganadoras seguidas para recuperar confianza antes de volver progresivamente al 100%.",
      "• Limite Máximo Aceptable: Tu drawdown total NUNCA debe superar el 20-25%."
    ]
  },
  {
    seccion: 6,
    titulo: "Gestión de Riesgo por Sesión",
    contenido: [
      "Todo trader profesional opera con límites diarios, semanales y mensuales inflexibles."
    ],
    puntos: [
      "• Límite de Pérdida Diaria: Máximo 2-3% de la cuenta por día.",
      "• Regla de las 3 Pérdidas: Si pierdes 3 operaciones consecutivas en una sesión, CIERRAS TODO. Apagas la computadora hasta mañana.",
      "• Límite Semanal y Mensual: Límite semanal de pérdida: 5-6%. Límite mensual: 10-15%. Si los alcanzas, dejas de operar el resto del período."
    ]
  },
  {
    seccion: 7,
    titulo: "Correlaciones y Riesgo de Cartera",
    contenido: [
      "La correlación mide cómo se mueven dos instrumentos entre sí (de -1.0 a +1.0). El error más común es creer que estás diversificado operando 4 activos altamente correlacionados."
    ],
    tabla: {
      headers: ["Par 1", "Par 2", "Correlación", "Qué Significa"],
      filas: [
        ["XAU/USD (Oro)", "DXY (Dólar Index)", "Negativa (-0.8)", "Oro sube = Dólar baja"],
        ["EUR/USD", "GBP/USD", "Positiva (+0.8)", "Casi siempre misma dirección"],
        ["US30 (Dow)", "US500 (SPX)", "Positiva (+0.9)", "Índices USA se mueven juntos"],
        ["USD/JPY", "US10Y (Bonos)", "Positiva (+0.7)", "Yen sensible a tasas de interés"]
      ]
    },
    puntos: [
      "• Regla KIRAX de Correlación: No operes más de 2 instrumentos altamente correlacionados en la misma dirección simultáneamente."
    ]
  },
  {
    seccion: 8,
    titulo: "Psicología del Riesgo",
    contenido: [
      "El cerebro humano sufre la 'Aversión a la Pérdida': una pérdida de $100 duele aproximadamente el DOBLE de lo que alegra una ganancia de $100."
    ],
    tabla: {
      headers: ["Sesgo Psicologico", "Cómo Te Afecta", "Cómo Combatirlo"],
      filas: [
        ["Sesgo de Confirmación", "Ignoras señales de que el trade va mal", "Busca activamente razones para CERRAR el trade"],
        ["Efecto de Disposición", "Cierras ganancias pronto y dejas correr pérdidas", "Aplica el mismo R:R técnico siempre. Corta rápido."],
        ["Exceso de Confianza", "Aumentas lotaje tras varias victorias", "Tras 5 ganadoras seguidas, REDUCE tamaño un 20%"],
        ["Falacia del Costo Hundido", "Mantienes la esperanza en una posición arruinada", "Recuerda: El mercado no sabe ni le importa tu precio de entrada"]
      ]
    }
  },
  {
    seccion: 9,
    titulo: "Herramientas y Cálculos Prácticos",
    contenido: [
      "Usa calculadoras de posición antes de cada entrada. Nunca calcules lotajes mentalmente bajo presión."
    ],
    tabla: {
      headers: ["Instrumento", "Lote Estándar (1.0)", "Mini Lote (0.10)", "Micro Lote (0.01)"],
      filas: [
        ["XAU/USD (Oro)", "$10 por 0.10 mov", "$1 por 0.10 mov", "$0.10 por 0.10 mov"],
        ["EUR/USD", "$10 por pip", "$1 por pip", "$0.10 por pip"],
        ["US30 (Dow)", "$5 por punto", "$0.50 por punto", "$0.05 por punto"],
        ["US500 (SPX)", "$50 por punto", "$5 por punto", "$0.50 por punto"]
      ]
    }
  },
  {
    seccion: 10,
    titulo: "Plan de Gestión de Riesgo Personal",
    contenido: [
      "Todo trader profesional tiene su plan de riesgo por ESCRITO y firmado."
    ],
    puntos: [
      "LAS 10 REGLAS DE ORO KIRAX DE GESTIÓN DE RIESGO:",
      "• REGLA #1: NUNCA arriesgar más del 1-2% por operación. SIN EXCEPCIONES.",
      "• REGLA #2: SIEMPRE poner Stop Loss ANTES de entrar. SIN EXCEPCIONES.",
      "• REGLA #3: NUNCA mover el Stop Loss en contra del precio. SIN EXCEPCIONES.",
      "• REGLA #4: 3 pérdidas seguidas = APAGAR TODO por el día. SIN EXCEPCIONES.",
      "• REGLA #5: R:R mínimo de 1:1.5. Si el setup no lo da, no entras. SIN EXCEPCIONES.",
      "• REGLA #6: Drawdown del 20% = Dejar de operar 1 semana y volver a demo. SIN EXCEPCIONES.",
      "• REGLA #7: Calcular el tamaño de posición con calculadora. NUNCA mental. SIN EXCEPCIONES.",
      "• REGLA #8: Proteger ganancias con trailing stop o cierre parcial. SIN EXCEPCIONES.",
      "• REGLA #9: Journaling después de CADA operación. SIN EXCEPCIONES.",
      "• REGLA #10: El mercado siempre estará ahí mañana. Protege tu capital HOY."
    ]
  }
];

export const MODULE_3_EXAM_BANK = [
  {
    id: 201,
    seccion: "Sección 1: Fundamentos",
    pregunta: "¿Cuál es el objetivo principal de la gestión de riesgo en trading?",
    opciones: [
      "A) Maximizar ganancias en cada operación",
      "B) Preservar el capital y sobrevivir a las rachas perdedoras inevitables",
      "C) Operar con el máximo apalancamiento disponible",
      "D) Encontrar el mejor indicador del mercado"
    ],
    respuestaCorrecta: 1,
    explicacion: "El objetivo número uno del trader es proteger el capital para tener la capacidad de seguir operando mañana."
  },
  {
    id: 202,
    seccion: "Sección 2: Position Sizing",
    pregunta: "¿Cuál es la fórmula universal para calcular el tamaño de posición?",
    opciones: [
      "A) Capital x Apalancamiento",
      "B) (Capital Total × % de Riesgo) / Distancia al Stop Loss en dinero",
      "C) Capital / Precio del activo",
      "D) Lotes x Pips"
    ],
    respuestaCorrecta: 1,
    explicacion: "La fórmula divide la cantidad de dinero arriesgada entre la distancia monetaria al Stop Loss."
  },
  {
    id: 203,
    seccion: "Sección 2: Position Sizing",
    pregunta: "Tienes $10,000 de capital. Arriesgas 1% ($100). Tu stop loss en Oro está a $10 de distancia. ¿Cuál es tu lotaje?",
    opciones: [
      "A) 1.0 lote estándar",
      "B) 0.10 lotes estándar (10 micro lotes)",
      "C) 0.01 lotes",
      "D) 5.0 lotes"
    ],
    respuestaCorrecta: 1,
    explicacion: "$100 de riesgo / $10 de distancia = 10 micro lotes o 0.10 lotes estándar."
  },
  {
    id: 204,
    seccion: "Sección 3: Stop Loss",
    pregunta: "¿Dónde debe colocarse estratégicamente un Stop Loss?",
    opciones: [
      "A) A una cantidad aleatoria de pips",
      "B) En el nivel exacto donde la tesis técnica de entrada queda INVALIDADA",
      "C) Siempre a 5 pips de la entrada",
      "D) No se debe usar Stop Loss si confías en el análisis"
    ],
    respuestaCorrecta: 1,
    explicacion: "El stop loss debe colocarse mas allá del soporte/resistencia donde la razón de tu entrada ya no tiene sentido."
  },
  {
    id: 205,
    seccion: "Sección 4: Risk/Reward Ratio",
    pregunta: "Con un Risk/Reward Ratio de 1:2, ¿qué porcentaje mínimo de aciertos necesitas para estar en Break-Even?",
    opciones: [
      "A) 50%",
      "B) 33.3%",
      "C) 67%",
      "D) 25%"
    ],
    respuestaCorrecta: 1,
    explicacion: "Con R:R 1:2, ganando 1 trade de cada 3 (33.3% win rate) cubres exactamente las pérdidas (1*2R - 2*1R = 0)."
  },
  {
    id: 206,
    seccion: "Sección 5: Drawdown",
    pregunta: "Si tu cuenta sufre un drawdown (caída) del 50%, ¿qué porcentaje de ganancia necesitas para volver al capital inicial?",
    opciones: [
      "A) 50%",
      "B) 100% (Duplicar el capital restante)",
      "C) 75%",
      "D) 200%"
    ],
    respuestaCorrecta: 1,
    explicacion: "Si de $10,000 caes a $5,000 (-50%), necesitas ganar $5,000 sobre los $5,000 restantes, lo que equivale a un +100%."
  },
  {
    id: 207,
    seccion: "Sección 6: Riesgo por Sesión",
    pregunta: "¿Qué debes hacer según las Reglas de Oro KIRAX si pierdes 3 operaciones seguidas en una sesión?",
    opciones: [
      "A) Aumentar el tamaño para recuperar en la cuarta entrada",
      "B) CERRAR TODO, apagar la plataforma y no volver hasta la siguiente sesión",
      "C) Cambiar de activo inmediatamente",
      "D) Quitar los indicadores"
    ],
    respuestaCorrecta: 1,
    explicacion: "3 pérdidas consecutivas indican mercado sin dirección clara o fatiga mental. Apagar protege tu cuenta."
  },
  {
    id: 208,
    seccion: "Sección 7: Correlaciones",
    pregunta: "¿Qué relación de correlación existe típicamente entre el Oro (XAU/USD) y el Índice del Dólar (DXY)?",
    opciones: [
      "A) Correlación Positiva (+0.9)",
      "B) Correlación Negativa o Inversa (-0.8)",
      "C) No tienen ninguna relación",
      "D) Correlación neutra fija"
    ],
    respuestaCorrecta: 1,
    explicacion: "El oro cotiza en dólares; cuando el DXY sube con fuerza, el valor relativo del oro tiende a bajar."
  },
  {
    id: 209,
    seccion: "Sección 8: Psicología del Riesgo",
    pregunta: "¿Qué es el 'Efecto de Disposición' en la psicología del trading?",
    opciones: [
      "A) Estar dispuesto a operar 12 horas seguidas",
      "B) La tendencia a cerrar ganancias rápido por miedo a perderlas y dejar correr operaciones perdedoras por esperanza",
      "C) Disponer de varias pantallas",
      "D) Usar apalancamiento máximo"
    ],
    respuestaCorrecta: 1,
    explicacion: "El efecto disposición destruye la esperanza matemática invirtiendo el ratio R:R (ganancias pequeñas, pérdidas gigantes)."
  },
  {
    id: 210,
    seccion: "Sección 9: Herramientas",
    pregunta: "¿En Oro (XAU/USD), cuál es el valor aproximado de un movimiento de 0.10 (1 pip/tick) en un lote estándar (1.0)?",
    opciones: [
      "A) $1.00",
      "B) $10.00",
      "C) $100.00",
      "D) $0.10"
    ],
    respuestaCorrecta: 1,
    explicacion: "En un lote estándar (100 oz) de oro, cada movimiento de 0.10 en el precio equivale a $10 USD."
  },
  {
    id: 211,
    seccion: "Sección 10: Plan Personal",
    pregunta: "¿Cuál es la Regla KIRAX respecto a mover un Stop Loss una vez abierta la operación?",
    opciones: [
      "A) Se puede mover en contra si el mercado va a rebotar",
      "B) NUNCA se mueve en contra del precio. Solo se mueve a favor (Break-Even o Trailing Stop)",
      "C) Se puede quitar durante noticias",
      "D) Se amplia si baja la volatilidad"
    ],
    respuestaCorrecta: 1,
    explicacion: "Mover el stop loss en contra para 'darle espacio' es el camino directo a la quiebra."
  },
  {
    id: 212,
    seccion: "Sección 1: Fundamentos",
    pregunta: "¿Qué es el 'Riesgo de Ruina' en trading?",
    opciones: [
      "A) La probabilidad matemática de perder la totalidad del capital de la cuenta",
      "B) El costo de las comisiones del broker",
      "C) Perder un solo trade",
      "D) Operar en horarios de poca liquidez"
    ],
    respuestaCorrecta: 0,
    explicacion: "El riesgo de ruina aumenta exponencialmente cuando arriesgas más del 2-3% por operación."
  },
  {
    id: 213,
    seccion: "Sección 5: Drawdown",
    pregunta: "¿Qué es la 'Estrategia de Recuperación Progresiva' tras un drawdown grave?",
    opciones: [
      "A) Duplicar la posición en el siguiente trade",
      "B) Reducir el lotaje al 50% y buscar 5 aciertos seguidos para recuperar la confianza antes de volver al 100%",
      "C) Retirar todo el dinero",
      "D) Operar 24 horas continuas"
    ],
    respuestaCorrecta: 1,
    explicacion: "Reducir lotaje al 50% corta el sesgo de pánico y permite sanar la confianza de manera segura."
  },
  {
    id: 214,
    seccion: "Sección 7: Correlaciones",
    pregunta: "Si abres posiciones Largas simultáneas en EUR/USD y GBP/USD, ¿qué estás haciendo realmente?",
    opciones: [
      "A) Diversificando tu cartera perfectamente",
      "B) Casi duplicando tu exposición en contra del Dólar estadounidense (USD)",
      "C) Anulando ambas posiciones",
      "D) Operando sin riesgo"
    ],
    respuestaCorrecta: 1,
    explicacion: "Dado que EUR/USD y GBP/USD tienen alta correlación positiva (+0.8), ambas son apuestas simultáneas contra el USD."
  },
  {
    id: 215,
    seccion: "Sección 10: Plan Personal",
    pregunta: "¿Cuál es el límite máximo de Drawdown Total recomendado antes de pausar la operativa por una semana?",
    opciones: [
      "A) 50%",
      "B) 20% - 25%",
      "C) 5%",
      "D) 80%"
    ],
    respuestaCorrecta: 1,
    explicacion: "Un drawdown acumulado del 20% requiere detener la operativa y revisar los últimos 20 trades en demo."
  }
];
