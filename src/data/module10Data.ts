export interface Module10SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_10_METADATA = {
  id: 10,
  titulo: "MÓDULO 10 — ANÁLISIS REAL II: OPERATIVA EN VIVO AVANZADA",
  subtitulo: "Academia KIRAX | De la Lectura a la Decisión Quirúrgica, Pre-Mercado y Gestión de Operaciones",
  objetivo: "Transformar la lectura técnica en decisiones ejecutables en tiempo real, dominar la preparación pre-mercado, identificar giros anticipados y gestionar el riesgo con precisión quirúrgica.",
  duracionEstimada: "10 - 12 horas de estudio",
  totalPreguntasBanco: 500
};

export const MODULE_10_SECTIONS: Module10SectionContent[] = [
  {
    seccion: 1,
    titulo: "El Propósito del Módulo",
    subtitulo: "Dando el salto definitivo de la teoría a la ejecución en vivo",
    contenido: [
      "En el Módulo 9 sentamos las bases del análisis real: estructura, zonas de valor y confluencia multitemporal. En este Módulo 10 damos el salto a la acción directa: convertir la lectura del gráfico en decisiones operativas ejecutadas con aplomo.",
      "El objetivo principal es que al terminar el módulo sepas exactamente qué hacer en cada segundo del mercado en vivo, sin dudar, sin titubear y sin caer en trampas emocionales."
    ],
    puntos: [
      "• Pasar de ser un analista pasivo de gráficos pasados a un ejecutor activo de probabilidades.",
      "• Eliminar la parálisis por análisis mediante un protocolo estandarizado de toma de decisiones.",
      "• Dominar la velocidad de reacción y la lectura de velas en formación durante sesiones volátiles."
    ]
  },
  {
    seccion: 2,
    titulo: "De la Lectura a la Decisión",
    subtitulo: "El ciclo sistemático de 3 pasos que se repite en cada operación",
    contenido: [
      "El análisis sin ejecución no es más que entretenimiento teórico. Por otro lado, la ejecución sin análisis es simple juego de azar.",
      "La clave de la consistencia radica en un proceso cerrado de tres etapas inviolables antes de presionar el botón de orden."
    ],
    tabla: {
      headers: ["Fase del Proceso", "Momento Temporal", "Acción Específica del Operador"],
      filas: [
        ["1. Preparación", "Antes de la Apertura de Sesión", "Definir escenarios alcistas, bajistas y neutros con niveles clave marcados"],
        ["2. Confirmación", "Durante la Sesión en Vivo", "Esperar la señal o gatillo en vivo en la zona, sin jamás anticiparla por ansiedad"],
        ["3. Ejecución", "Al Cerrar la Vela de Reacción", "Ingresar con tamaño de posición exacto (calculado previamente) y plan de salida fijo"]
      ]
    },
    puntos: [
      "• Si falta cualquiera de los tres pasos, la operación carece de fundamento profesional.",
      "• Nunca entres al mercado sin saber previamente dónde saldrás en pérdida y en ganancia."
    ]
  },
  {
    seccion: 3,
    titulo: "Preparación Pre-Mercado",
    subtitulo: "El trabajo silencioso del trader profesional antes de la sesión",
    contenido: [
      "El verdadero trabajo del operador rentable se realiza ANTES de que abra la sesión bursátil. Llegar al gráfico sin preparación previa equivale a entrar al campo de batalla desarmado."
    ],
    tabla: {
      headers: ["Elemento del Checklist Pre-Mercado", "Objetivo Analítico", "Impacto en la Operativa"],
      filas: [
        ["Cierre Anterior y Rango Previo", "Identificar si el mercado está en expansión o contracción", "Evita operar en zonas de bajo valor o rangos atrapados"],
        ["Zonas de Liquidez (EQH/EQL)", "Detectar dónde están acumulados los Stops del retail", "Anticipa barridos de liquidez (sweeps) institucionales"],
        ["Sesgo del Marco Mayor (H4/D1)", "Establecer la dirección dominante del capital grande", "Filtra la dirección en la que buscarás las entradas"],
        ["Calendario de Noticias", "Anotar hora exacta de CPI, NFP, FOMC o PMI", "Previene pérdidas por volados o slippage violento"],
        ["Niveles Permitidos vs Prohibidos", "Mapear áreas donde se operará y dónde NO", "Protege de tomar entradas en medio del ruido"]
      ]
    }
  },
  {
    seccion: 4,
    titulo: "El Sesgo (Bias) del Día",
    subtitulo: "Definición de hipótesis basada en la estructura viva",
    contenido: [
      "Todo día de trading debe iniciar con un sesgo claro: ALCISTA, BAJISTA o NEUTRAL. El sesgo no es un deseo ni una corazonada; es una hipótesis objetiva fundamentada en la estructura reciente."
    ],
    puntos: [
      "• Sesgo Alcista: Ocurre si el precio rompió estructura al alza (BOS) y se mantiene cotizando por encima de la última zona de demanda H1.",
      "• Sesgo Bajista: Ocurre si el precio rompió estructura a la baja y respeta una zona de oferta H1.",
      "• Sesgo Neutral: Ocurre si el precio se encuentra atrapado en medio de un rango sin rompimiento. En este estado, la mejor jugada es NO OPERAR o esperar la salida del rango."
    ]
  },
  {
    seccion: 5,
    titulo: "Lectura en Tiempo Real",
    subtitulo: "Interpretación de la intención del precio vela por vela",
    contenido: [
      "Analizar gráficos en vivo es muy diferente a estudiar datos históricos. En tiempo real, las velas se forman segundo a segundo y no sabes cómo cerrarán. Desarrollar la habilidad de leer la intención en formación es lo que distingue a los operadores de élite."
    ],
    tabla: {
      headers: ["Dimensión de Lectura", "Qué Observar en Pantalla", "Significado en el Flujo de Órdenes"],
      filas: [
        ["Velocidad de Expansión", "Velas de cuerpo entero con desplazamiento rápido", "Presión institucional real de compra o venta agresiva"],
        ["Rechazo de Nivel", "Sombra/mecha larga dejada en una zona clave", "Absorción masiva de órdenes en el libro por el bando opuesto"],
        ["Profundidad de Testeo", "Nivel probado múltiples veces en corto tiempo", "Debilitamiento progresivo del nivel hasta su ruptura inminente"],
        ["Alineación de Contexto", "Respuesta de la vela dentro o fuera de la zona", "Una señal aislada fuera de zona no posee valor estadístico"]
      ]
    }
  },
  {
    seccion: 6,
    titulo: "Identificación de Giros de Mercado",
    subtitulo: "Detección temprana de cambios de dirección con R:R máximo",
    contenido: [
      "Un giro de mercado es la transición de una tendencia a otra. Detectarlo en sus primeras fases permite posicionarse al inicio del nuevo movimiento, obteniendo Ratios Riesgo:Beneficio óptimos."
    ],
    tabla: {
      headers: ["Patrón / Señal de Giro", "Mecánica Visual en el Gráfico", "Confirmación Requerida"],
      filas: [
        ["Barrido de Liquidez (Sweep)", "El precio supera un máximo/mínimo previo y se desploma inmediatamente dentro de la zona", "Vela de mecha profunda + volumen alto de absorción"],
        ["Divergencia de Momentum", "El precio hace un nuevo extremo (HH/LL) pero el indicador o delta muestra debilidad", "Cierre de vela envolvente en dirección opuesta"],
        ["CHoCH tras Agotamiento", "Ruptura del último HL o LH tras una secuencia de velas cada vez más pequeñas", "Retesteo en retroceso al bloque causante del CHoCH"],
        ["Fallo de Rompimiento", "Intento de ruptura de nivel clave que no logra cerrar fuera del rango", "Cierre violento de vuelta dentro de la estructura previa"]
      ]
    }
  },
  {
    seccion: 7,
    titulo: "Ejecución Quirúrgica",
    subtitulo: "Las tres condiciones obligatorias antes de enviar la orden",
    contenido: [
      "La ejecución es el momento de la verdad en el trading. Una ejecución quirúrgica exige que el operador sea capaz de escribir en una sola línea tres variables exactas antes de hacer clic."
    ],
    puntos: [
      "1. Precio de Entrada Definido: Conoces el punto exacto o la condición de cierre que activa la orden.",
      "2. Stop Loss Técnico Definido: Conoces el nivel de invalidación y la pérdida monetaria exacta antes de ingresar.",
      "3. Objetivo de Take Profit Definido: Conoces la zona de liquidez destino a la que apuntas y el ratio R:R resultante.",
      "• Regla Inviolable: Sin plan de salida previo no hay operación; solo hay una apuesta guiada por la emoción."
    ]
  },
  {
    seccion: 8,
    titulo: "Gestión del Riesgo en Vivo",
    subtitulo: "Cálculo sistemático del lotaje basado en el riesgo fijo",
    contenido: [
      "El riesgo NUNCA se gestiona después de abrir la posición; se calcula y fija estricta y matemáticamente ANTES de entrar.",
      "Fórmula de Tamaño de Posición: Tamaño (Lotes) = (Capital × % Riesgo) ÷ (Distancia al Stop en Pips × Valor por Pip)."
    ],
    tabla: {
      headers: ["Paso del Cálculo", "Ejemplo Práctico (Cuenta $10,000)", "Resultado Numérico"],
      filas: [
        ["1. Definir % Riesgo Fijo", "Arriesgar 1% de la cuenta por trade", "$100 USD de riesgo máximo"],
        ["2. Medir Distancia al Stop", "Stop Loss ubicado a 20 pips según estructura", "20 pips de riesgo técnico"],
        ["3. Calcular Valor por Pip", "$100 ÷ 20 pips = $5 USD por pip", "Equivale a 0.50 Lotes Estándar en EURUSD"],
        ["4. Regla de Oro en Vivo", "NUNCA mover el Stop Loss en contra para 'darle aire'", "Garantiza la supervivencia de la cuenta a largo plazo"]
      ]
    }
  },
  {
    seccion: 9,
    titulo: "Gestión de la Operación Abierta",
    subtitulo: "Toma de decisiones con la orden cotizando en vivo",
    contenido: [
      "Una vez dentro del mercado, la labor del operador consiste en administrar la posición abierta respetando el plan original y respondiendo a la estructura en desarrollo."
    ],
    puntos: [
      "• Avance Favorable (1:1 R:R): Mover el Stop Loss a Breakeven ($0) únicamente cuando la estructura haya creado un nuevo punto de apoyo.",
      "• Primer Objetivo Alcanzado: Tomar parciales (cerrar el 50% de la posición) para asegurar liquidez real en la cuenta.",
      "• Reversión Estructural Clara: Cerrar la posición manualmente si el mercado genera una señal que anula la tesis inicial.",
      "• Prohibición Absoluta: Jamás alejes el Stop Loss en pérdida. Ampliar el Stop Loss es negar la gestión de riesgo y constituye el error #1 que quema cuentas."
    ]
  },
  {
    seccion: 10,
    titulo: "El Diario de la Operación (Journaling)",
    subtitulo: "El espejo que revela tus fortalezas y debilidades",
    contenido: [
      "Cada operación ejecutada debe quedar registrada en el diario de trading de forma minuciosa. El journal es el espejo que refleja objetivamente la disciplina del operador."
    ],
    tabla: {
      headers: ["Campo del Diario", "Información Requerida", "Propósito de la Auditoría"],
      filas: [
        ["Fecha, Hora y Sesión", "Ej: 24/08/2026 - 14:15 GMT (Nueva York)", "Identificar las sesiones con mayor tasa de acierto"],
        ["Instrumento Operado", "Ej: XAUUSD (Oro) o EURUSD", "Evaluar qué activos generan mejor rentabilidad"],
        ["Dirección y Tamaño", "Compra (Long) o Venta (Short) / Lotaje exacto", "Verificar cumplimiento de gestión de capital"],
        ["Razón Técnica de Entrada", "Ej: Sweep de Liquidez H1 + Envolvente M5 en Soporte", "Medir la esperanza matemática de cada setup"],
        ["Resultado en R y USD", "Ej: +2.5R (+$250 USD) o -1R (-$100 USD)", "Llevar la curva de equity histórica"],
        ["Estado Emocional y Lección", "Ej: Neutral / Cumplimiento 100% del plan pre-mercado", "Detectar y corregir patrones de conducta o sesgos"]
      ]
    }
  },
  {
    seccion: 11,
    titulo: "Errores Frecuentes y Cómo Evitarlos",
    subtitulo: "Los 5 sesgos psicológicos que destruyen la consistencia",
    contenido: [
      "Conocer de antemano los errores más comunes en la operativa en vivo te ahorra años de tropiezos y pérdidas de capital."
    ],
    tabla: {
      headers: ["Error en Vivo", "Causa Emocional", "Solución Sistemática Kirax"],
      filas: [
        ["1. Overtrading (Sobreoperar)", "Ansiedad, aburrimiento o codicia", "Limitar el número máximo de operaciones diarias (Ej: máx 2 trades)"],
        ["2. Mover el SL en Contra", "Miedo a aceptar una pérdida pequeña", "Fijar el Stop Loss de forma automática e inamovible al enviar la orden"],
        ["3. Perseguir el Precio (FOMO)", "Miedo a quedarse fuera del movimiento", "Operar únicamente cuando el precio retrocede a la zona delimitada"],
        ["4. Revenge Trading (Venganza)", "Frustración tras un trade perdedor", "Aplicar la regla de enfriamiento obligatorio (pausa de 30 min tras pérdida)"],
        ["5. Ignorar el Sesgo HTF", "Buscar giros contra-tendencia sin confirmación", "Aceptar solo operaciones alineadas con el sesgo D1/H4"]
      ]
    }
  },
  {
    seccion: 12,
    titulo: "Conclusión del Módulo y Vía a la Maestría",
    subtitulo: "Transformando el conocimiento en una ventaja cuantitativa",
    contenido: [
      "El análisis real avanzado en vivo no consiste en acumular más indicadores, sino en perfeccionar la disciplina de ejecución. La estructura, las zonas clave y la confluencia aprendidas se consolidan aquí como un sistema repetible con riesgo controlado.",
      "A partir de este momento, estás preparado para someterte a la prueba de evaluación avanzada y consolidar tu maestría en la Academia KIRAX."
    ]
  }
];

export interface ExamQuestion {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number; // 0, 1, 2, 3
  explicacion: string;
}

export const MODULE_10_EXAM_BANK: ExamQuestion[] = [
  {
    id: 1,
    pregunta: "¿Cuál es el objetivo principal del análisis en vivo durante una sesión de trading?",
    opciones: [
      "Memorizar todos los indicadores del gráfico",
      "Tomar decisiones basadas en información actualizada del mercado y el plan pre-mercado",
      "Evitar mirar la pantalla durante la sesión",
      "Operar de forma improvisada sin reglas"
    ],
    respuestaCorrecta: 1,
    explicacion: "El análisis en vivo busca ejecutar decisiones frías y actualizadas siguiendo la preparación previa realizada antes de la apertura."
  },
  {
    id: 2,
    pregunta: "Antes de abrir una posición en vivo, ¿qué elementos deben estar definidos de forma obligatoria?",
    opciones: [
      "El color del tema de la plataforma",
      "El plan de trading con precio exacto de entrada, Stop Loss y Take Profit objetivo",
      "La hora del almuerzo del operador",
      "El número de monitores encendidos"
    ],
    respuestaCorrecta: 1,
    explicacion: "Sin entrada, stop e invalidez definidos de antemano, la operación se convierte en un juego de azar."
  },
  {
    id: 3,
    pregunta: "¿Qué significa 'confluencia' en el análisis de trading avanzado?",
    opciones: [
      "Operar usando un solo oscilador rápido",
      "La coincidencia de múltiples señales técnicas independientes que refuerzan una misma tesis",
      "Cerrar todas las posiciones abiertas",
      "Usar únicamente gráficos de velas renko"
    ],
    respuestaCorrecta: 1,
    explicacion: "La confluencia suma probabilidades al reunir tendencia, zona, patrón de vela y volumen en el mismo punto."
  },
  {
    id: 4,
    pregunta: "¿Cuál es una característica de un nivel de soporte de alta calidad?",
    opciones: [
      "El precio lo ha respetado y reaccionado con fuerza en varias ocasiones previas",
      "Es un nivel que jamás ha sido tocado por el precio",
      "Solo es visible en gráficos anuales",
      "No tiene ninguna relación con el flujo de órdenes"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un soporte probado en el pasado demuestra presencia histórica de demanda compradora."
  },
  {
    id: 5,
    pregunta: "¿Qué es un 'falso rompimiento' (false breakout)?",
    opciones: [
      "Un rompimiento que se sostiene de forma limpia",
      "Cuando el precio supera temporalmente un nivel clave y luego se reintroduce violentamente en el rango",
      "Un movimiento de continuación impulsivo con alto volumen",
      "Un hueco de apertura a favor de la tendencia"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los falsos rompimientos corresponden a barridos de liquidez (sweeps) donde las instituciones atrapan al retail."
  },
  {
    id: 6,
    pregunta: "¿Qué indicador o dimensión mide la velocidad y el desplazamiento del precio?",
    opciones: [
      "El oscilador Estocástico",
      "El Momentum (o la velocidad de formación del cuerpo de las velas)",
      "La media móvil simple de 200 periodos",
      "El acumulado de pips semanales"
    ],
    respuestaCorrecta: 1,
    explicacion: "El momentum mide la aceleración con la que los compradores o vendedores desplazan la cotización."
  },
  {
    id: 7,
    pregunta: "¿Qué representa el volumen en el análisis del flujo de órdenes?",
    opciones: [
      "La cantidad total de contratos u operaciones negociadas en un periodo determinado",
      "La velocidad de rotación de la tierra",
      "El costo del spread del bróker",
      "El nivel de apalancamiento de la cuenta"
    ],
    respuestaCorrecta: 0,
    explicacion: "El volumen cuantifica la participación real de capital en cada nivel de precio."
  },
  {
    id: 8,
    pregunta: "¿Qué es el Spread en un instrumento financiero?",
    opciones: [
      "La diferencia entre el precio de compra (Ask) y el precio de venta (Bid)",
      "La comisión cobrada por depósitos",
      "El margen de garantía requerido",
      "El precio de cierre diario"
    ],
    respuestaCorrecta: 0,
    explicacion: "El spread representa el diferencial de cotización que cobra la contraparte o bróker."
  },
  {
    id: 9,
    pregunta: "¿Cuál es la función primordial de la orden Stop Loss?",
    opciones: [
      "Limitar la pérdida máxima de la posición cerrándola si el precio alcanza la invalidez técnica",
      "Aumentar las ganancias de la orden",
      "Comprar más contratos automáticamente",
      "Convertir una orden limitada en una orden a mercado"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Stop Loss preserva el capital asegurando que ninguna operación individual destruya la cuenta."
  },
  {
    id: 10,
    pregunta: "¿Cuál es la función de la orden Take Profit?",
    opciones: [
      "Cerrar la posición de forma automática al alcanzar el objetivo de beneficio planificado",
      "Limitar las pérdidas flotantes",
      "Mover el saldo a la cuenta bancaria",
      "Reducir el spread cobrado"
    ],
    respuestaCorrecta: 0,
    explicacion: "Garantiza la recolección de ganancias en la zona de liquidez prevista."
  },
  {
    id: 11,
    pregunta: "¿Qué es el Apalancamiento en el trading?",
    opciones: [
      "La capacidad de negociar posiciones de mayor volumen utilizando capital prestado por el bróker",
      "El costo fijo por cada operación realizada",
      "La ganancia neta garantizada",
      "El tiempo de respuesta del servidor"
    ],
    respuestaCorrecta: 0,
    explicacion: "El apalancamiento multiplica la potencia del capital propio, requiriendo un control estricto de riesgo."
  },
  {
    id: 12,
    pregunta: "¿Qué consecuencia acarrea un apalancamiento excesivo sin gestión de riesgo?",
    opciones: [
      "Menor volatilidad en la cuenta",
      "Riesgo extremo de pérdidas amplificadas que pueden liquidar la cuenta rápidamente",
      "Mayor tasa de aciertos asegurada",
      "Comisiones cero en la plataforma"
    ],
    respuestaCorrecta: 1,
    explicacion: "El sobreapalancamiento destruye la cuenta ante pequeños movimientos en contra del mercado."
  },
  {
    id: 13,
    pregunta: "¿Qué es un 'pip' en el mercado de divisas (Forex)?",
    opciones: [
      "La unidad estándar de medida del cambio de precio en un par de divisas",
      "Un tipo de orden pendiente de compra",
      "La comisión fija del bróker",
      "Un indicador de volumen"
    ],
    respuestaCorrecta: 0,
    explicacion: "El pip mide las variaciones mínimas de cotización (usualmente el cuarto decimal en la mayoría de pares)."
  },
  {
    id: 14,
    pregunta: "¿Qué mide el indicador RSI (Relative Strength Index)?",
    opciones: [
      "Un oscilador de fuerza que evalúa las condiciones de sobrecompra o sobreventa entre 0 y 100",
      "El volumen acumulado de contratos institucionales",
      "La media móvil exponencial del precio",
      "El gráfico de profundidad de mercado"
    ],
    respuestaCorrecta: 0,
    explicacion: "El RSI compara la magnitud de las ganancias recientes frente a las pérdidas para medir el impulso."
  },
  {
    id: 15,
    pregunta: "Un RSI cotizando por encima del nivel de 70 sugiere generalmente:",
    opciones: [
      "Condición de Sobrecompra (posible agotamiento o retroceso inminente)",
      "Condición de Sobreventa extrema",
      "Garantía de compra sin riesgo",
      "Mercado cerrado por festivo"
    ],
    respuestaCorrecta: 0,
    explicacion: "Niveles superiores a 70 alertan sobre la madurez del movimiento comprador."
  },
  {
    id: 16,
    pregunta: "Un RSI cotizando por debajo del nivel de 30 sugiere generalmente:",
    opciones: [
      "Condición de Sobreventa (posible rebote o giro alcista)",
      "Condición de Sobrecompra extrema",
      "Tendencia bajista garantizada sin final",
      "Aumento del spread al doble"
    ],
    respuestaCorrecta: 0,
    explicacion: "Niveles inferiores a 30 alertan sobre la presión vendedora acumulada y posible rebote de demanda."
  },
  {
    id: 17,
    pregunta: "¿Qué es una Media Móvil (Moving Average)?",
    opciones: [
      "Un indicador que calcula el precio promedio de un activo a lo largo de un número determinado de periodos",
      "Un oscilador que mide la sobrecompra",
      "Un patrón de velas de tres soldados",
      "El nivel exacto de Stop Loss institucional"
    ],
    respuestaCorrecta: 0,
    explicacion: "La media móvil suaviza la acción del precio para identificar la dirección de la tendencia de fondo."
  },
  {
    id: 18,
    pregunta: "¿Qué señala un cruce de medias donde la media corta cruza hacia arriba a la media larga?",
    opciones: [
      "Señal de impulso alcista (Cruce Dorado)",
      "Señal de impulso bajista",
      "Lateralidad absoluta sin dirección",
      "Invalidez del gráfico"
    ],
    respuestaCorrecta: 0,
    explicacion: "El cruce ascendente de medias confirma que el impulso reciente supera al promedio histórico largo."
  },
  {
    id: 19,
    pregunta: "¿Qué es el indicador MACD?",
    opciones: [
      "Un indicador de divergencia y convergencia de medias móviles que mide fuerza y dirección",
      "Un tipo de gráfico de barras",
      "Una orden especial a mercado",
      "Un patrón armónico de precios"
    ],
    respuestaCorrecta: 0,
    explicacion: "El MACD combina medias móviles para mostrar el impulso del mercado y señalar posibles giros."
  },
  {
    id: 20,
    pregunta: "¿Qué ocurre cuando existe una 'Divergencia' entre el precio y un oscilador?",
    opciones: [
      "El precio y el indicador se desplazan en direcciones opuestas (alerta de debilidad del movimiento)",
      "El precio y el indicador se mueven idénticamente",
      "El volumen desaparece por completo",
      "El mercado entra en mantenimiento"
    ],
    respuestaCorrecta: 0,
    explicacion: "Si el precio marca un nuevo máximo pero el indicador no lo acompaña, se anticipa agotamiento del movimiento."
  },
  {
    id: 21,
    pregunta: "En la gestión en vivo, si una operación avanza a favor +1:1 R:R y rompe estructura, ¿qué acción es profesional?",
    opciones: [
      "Proteger la entrada moviendo el Stop Loss a Breakeven ($0) y considerar tomar parciales",
      "Aumentar el Stop Loss al doble para darle más espacio",
      "Cerrar la plataforma y llorar",
      "Abrir una posición perdedora en contra"
    ],
    respuestaCorrecta: 0,
    explicacion: "Proteger el capital en Breakeven asegura que el trade no se transforme en una pérdida si el mercado gira."
  },
  {
    id: 22,
    pregunta: "¿Por qué está ESTRICTAMENTE PROHIBIDO mover el Stop Loss en contra durante una operación abierta?",
    opciones: [
      "Porque transforma un riesgo controlado en pérdidas ilimitadas y destruye la disciplina operativa",
      "Porque el bróker cobra una multa por mover el stop",
      "Porque disminuye el apalancamiento de la cuenta",
      "Porque la plataforma se congela"
    ],
    respuestaCorrecta: 0,
    explicacion: "Mover el stop en contra es la causa #1 de quiebra en traders principiantes por negarse a aceptar una pérdida pequeña."
  },
  {
    id: 23,
    pregunta: "¿Qué es el 'Revenge Trading' o trading de venganza?",
    opciones: [
      "Abrir operaciones impulsivas inmediatamente después de una pérdida para intentar 'recuperar' el dinero",
      "Una técnica sistemática de backtesting",
      "Un tipo de orden límite en el libro de órdenes",
      "Llevar un diario de trading detallado"
    ],
    respuestaCorrecta: 0,
    explicacion: "El trading de venganza se guía por la rabia y la frustración, llevando a sobreoperar y quemar la cuenta."
  },
  {
    id: 24,
    pregunta: "¿En qué consiste la regla del 1% de riesgo por operación?",
    opciones: [
      "No arriesgar más del 1% del capital total de la cuenta en ninguna orden individual",
      "Buscar ganar solo el 1% al año",
      "Operar 1 sola vez al mes",
      "Utilizar 1 lote fijo siempre"
    ],
    respuestaCorrecta: 0,
    explicacion: "Arriesgar el 1% permite soportar racha negativas de 10 pérdidas seguidas conservando el 90% del capital intacto."
  },
  {
    id: 25,
    pregunta: "¿Qué representa el 'Drawdown' de una cuenta?",
    opciones: [
      "La caída porcentual o monetaria desde el pico máximo alcanzado por el capital hasta un mínimo local",
      "La ganancia total acumulada en la semana",
      "La suma de todas las comisiones pagadas",
      "El número de lotes operados"
    ],
    respuestaCorrecta: 0,
    explicacion: "El drawdown mide la severidad de las rachas de pérdida y es la métrica clave en pruebas de fondeo (Prop Firms)."
  },
  {
    id: 26,
    pregunta: "¿Qué es el Journal o Diario de Trading?",
    opciones: [
      "Un registro organizado de cada trade (entradas, salidas, razones, resultado en R y notas emocionales)",
      "Un libro de noticias financieras generales",
      "Una lista de indicadores preferidos",
      "Un archivo temporal que se borra al cerrar el día"
    ],
    respuestaCorrecta: 0,
    explicacion: "El diario de trading permite auditar objetivamente la ejecución y corregir errores repetitivos de proceso."
  },
  {
    id: 27,
    pregunta: "¿Qué es el 'Sesgo del Día' (Daily Bias)?",
    opciones: [
      "La hipótesis direccional (Alcista, Bajista o Neutral) formulada antes de la sesión basándose en la estructura HTF",
      "Una preferencia personal sin análisis técnico",
      "La recomendación de un foro o red social",
      "El color predominante en el gráfico de 1 minuto"
    ],
    respuestaCorrecta: 0,
    explicacion: "El sesgo del día guía las decisiones operativas alineándolas con la tendencia principal de la jornada."
  },
  {
    id: 28,
    pregunta: "¿Qué es la Preparación Pre-Mercado?",
    opciones: [
      "La rutina de análisis realizada antes de la apertura para mapear zonas clave, noticias y escenarios",
      "Encender la computadora 1 minuto antes de entrar",
      "Ingresar órdenes al azar en el mercado asiático",
      "Aumentar el apalancamiento al máximo permitible"
    ],
    respuestaCorrecta: 0,
    explicacion: "El pre-mercado construye la hoja de ruta con la que el trader operará fríamente durante la sesión."
  },
  {
    id: 29,
    pregunta: "Si el mercado está en un estado 'Neutral' en medio de un rango H1, ¿cuál es la jugada del trader disciplinado?",
    opciones: [
      "Esperar pacientemente sin operar hasta que el precio defina un quiebre o alcance un extremo claro del rango",
      "Entrar en compras y ventas simultáneas",
      "Duplicar el tamaño de la posición por aburrimiento",
      "Operar en M1 en todas las velas"
    ],
    respuestaCorrecta: 0,
    explicacion: "Saber cuándo NO operar en mercados sucios es una cualidad fundamental del trader consistente."
  },
  {
    id: 30,
    pregunta: "¿Cuál es el resultado de aplicar la metodología de Análisis Real II en Kirax Academy?",
    opciones: [
      "Convertir la lectura técnica en decisiones ejecutables en vivo con riesgo estrictamente controlado y sin emoción",
      "Eliminar el 100% de las pérdidas para siempre",
      "Operar sin colocar nunca Stop Loss",
      "Adivinar las noticias con 10 minutos de anticipación"
    ],
    respuestaCorrecta: 0,
    explicacion: "El proceso profesional transforma el trading en una profesión de probabilidades y ejecución disciplinada."
  }
];
