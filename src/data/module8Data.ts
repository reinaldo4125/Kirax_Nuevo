export interface Module8SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_8_METADATA = {
  id: 8,
  titulo: "MÓDULO 8 — KIRAX INDICATOR: TU PRODUCTO ESTRELLA",
  subtitulo: "Academia KIRAX | Configuración, Lectura Avanzada y Operativa del Indicador Profesional",
  objetivo: "Aprender a instalar, configurar, leer y operar el indicador KIRAX 3D en TradingView en confluencia con Bookmap, aplicando los 3 Setups Maestros, la regla de las 3 confluencias y el Checklist Definitivo del Operador.",
  duracionEstimada: "6 - 8 horas de estudio",
  totalPreguntasBanco: 500
};

export const MODULE_8_SECTIONS: Module8SectionContent[] = [
  {
    seccion: 1,
    titulo: "¿Qué es KIRAX?",
    subtitulo: "El panel técnico avanzado de confluencia institucional",
    contenido: [
      "KIRAX no es un indicador común más del mercado: es un panel técnico avanzado desarrollado para TradingView que fusiona múltiples lecturas institucionales en una sola pantalla. Su filosofía es simple pero inviolable: una señal solo tiene valor cuando varias capas de liquidez y flujo de órdenes se alinean en confluencia.",
      "Diseñado especialmente para el scalping y day trading en Oro (XAUUSD) y otros instrumentos de alta volatilidad, KIRAX filtra el ruido del mercado produciendo señales de alta probabilidad que NO repintan, confirmándose de manera definitiva al cierre de la vela."
    ],
    tabla: {
      headers: ["Característica", "Indicadores Convencionales", "KIRAX Indicator 3D"],
      filas: [
        ["Filosofía", "Señal aislada basada en un solo algoritmo (RSI, EMA)", "Confluencia cuántica de 5 capas institucionales"],
        ["Repintado", "Suelen mover o desaparecer señales pasadas", "NO repinta: las señales se confirman fijas al cierre de vela"],
        ["Optimización", "Genéricos para cualquier activo sin calibración", "Optimizado para Scalping en Oro (XAUUSD) en M1 / M5"],
        ["Visualización", "Gráficos saturados y difíciles de interpretar", "Señales visuales limpias con código de colores y alertas"],
        ["Propósito", "Procurar predecir el futuro de forma a ciegas", "Validar puntos de entrada de alta confluencia institucional"]
      ]
    },
    puntos: [
      "• Filtra el ruido del mercado identificando únicamente oportunidades respaldadas por volumen y liquidez.",
      "• Combina Acción del Precio, Volumen Ponderado, Liquidez y Flujo Institucional en tiempo real.",
      "• Diseñado para ejecución rápida en scalping e intradía en XAUUSD (Oro spot contra el dólar).",
      "• Principio Inviolable: NINGUNA señal se opera de manera aislada; se exige la confluencia de al menos 3 capas."
    ]
  },
  {
    seccion: 2,
    titulo: "Instalación y Configuración del KIRAX en TradingView",
    subtitulo: "Paso a paso para compilar y personalizar tu indicador",
    contenido: [
      "KIRAX está programado en Pine Script (versión v6). Para integrarlo en tu plataforma de TradingView sólo requieres copiar el código maestro de la Academia y compilarlo en tu cuenta.",
      "Una vez guardado con el nombre 'KIRAX 3D', se añade a tu gráfico de XAUUSD en temporalidades cortas (M1 o M5). Desde el panel de ajustes (inputs) se configuran los parámetros recomendados para maximizar la visibilidad y precisión de las alertas."
    ],
    tabla: {
      headers: ["Paso", "Acción en TradingView", "Detalle Técnico"],
      filas: [
        ["1", "Abrir Editor Pine", "En la barra inferior de TradingView, haz clic en 'Editor Pine'."],
        ["2", "Pegar Código y Compilar", "Reemplaza el texto por el código KIRAX 3D y pulsa 'Guardar' / 'Añadir al gráfico'."],
        ["3", "Ajustar Timeframe", "Aplica el indicador en el gráfico de XAUUSD en 1 minuto (M1) o 5 minutos (M5)."],
        ["4", "Configurar Parámetros", "Activa el VWAP, el contador de velas y las señales gigantes con trueno en las opciones."]
      ]
    },
    puntos: [
      "• Configuración Recomendada de la Academia:",
      "1) VWAP activado con bandas de desviación estándar visibles.",
      "2) Contador de velas de sesión activado para identificar fases de apertura y volumen.",
      "3) Señales gigantes con icono de trueno para detección visual instantánea.",
      "4) Entorno gráfico limpio: Mantén únicamente KIRAX en TradingView y Bookmap en la pantalla secundaria."
    ]
  },
  {
    seccion: 3,
    titulo: "Anatomía del KIRAX: Los 5 Módulos Internos",
    subtitulo: "Desglose de las capas que componen el panel de control",
    contenido: [
      "KIRAX está estructurado modularmente. Cada módulo cumple una función analítica independiente y aporta una capa esencial de información. Cuando estas capas convergen en la misma dirección, la confluencia genera una señal de alta probabilidad."
    ],
    tabla: {
      headers: ["Módulo KIRAX", "Función Analítica", "Qué te revela en pantalla"],
      filas: [
        ["1. VWAP + Bandas", "Precio Promedio Ponderado por Volumen", "Sesgo direccional dominante del día (Alcista sobre VWAP / Bajista bajo VWAP)"],
        ["2. Contador de Velas", "Conteo del ciclo de tiempo de sesión", "Fase del movimiento de la sesión (Inicio, desarrollo o agotamiento)"],
        ["3. Señales de Entrada", "Triángulos gigantes con trueno", "Punto exacto de gatillo para Compras (Long) o Ventas (Short)"],
        ["4. Confluencias", "Panel acumulador de capas", "Nivel de confianza y confluencia activa en la vela corriente"],
        ["5. Zonas de Liquidez", "Soportes y Resistencias institucionales", "Zonas calientes donde el precio reaccionará con alta probabilidad"]
      ]
    },
    puntos: [
      "• Módulo VWAP: El nivel institucional por excelencia. El precio por encima del VWAP indica sesgo comprador; por debajo, sesgo vendedor.",
      "• Módulo Contador: Previene entrar en velas avanzadas de la sesión donde el riesgo de agotamiento o reversión es máximo.",
      "• Módulo Señales: Las flechas/triángulos señalan la dirección pero NO son una orden de compra automática por sí solas."
    ]
  },
  {
    seccion: 4,
    titulo: "Cómo Leer el KIRAX: La Regla de las 3 Confluencias",
    subtitulo: "Filtro de calidad para descartar falsas señales",
    contenido: [
      "La regla de oro de KIRAX es tajante: NUNCA operes una señal aislada. El 90% de las pérdidas en traders principiantes provienen de ingresar impulsivamente al ver aparecer un triángulo en pantalla sin verificar el contexto.",
      "Para ejecutar una operación debes exigir la alineación simultánea de al menos 3 capas del indicador o del mercado."
    ],
    puntos: [
      "• CAPAS DE CONFLUENCIA PARA UNA ENTRADA VÁLIDA:",
      "1) Capa 1: Señal de entrada activa de KIRAX (Triángulo de Compra/Venta al cierre de vela).",
      "2) Capa 2: Alineación con el VWAP (Comprar sobre el VWAP / Vender bajo el VWAP).",
      "3) Capa 3: Ubicación dentro de una Zona de Liquidez (Soporte o Resistencia marcada por KIRAX).",
      "4) Capa 4: Contador de velas en fase favorable (Inicio o aceleración de sesión, no en agotamiento).",
      "5) Capa 5: Confirmación de volumen/flujo en Bookmap (Absorción o delta CVD acompañando).",
      "• REGLA OPERATIVA: 1 ó 2 confluencias = Se descarta la entrada. 3 ó más confluencias = Entrada de Alta Probabilidad A+."
    ]
  },
  {
    seccion: 5,
    titulo: "Los 3 Setups Maestros de KIRAX",
    subtitulo: "Estrategias de alta probabilidad para el scalping en Oro",
    contenido: [
      "KIRAX está diseñado para ejecutar 3 configuraciones operativas maestras en el mercado del Oro. Cada setup resuelve una dinámica específica del precio y exige requisitos de entrada claros."
    ],
    tabla: {
      headers: ["Setup Maestro", "Condición de Mercado", "Gatillo de Entrada KIRAX", "Confirmación Requerida"],
      filas: [
        ["Setup 1: Rebote al VWAP", "Precio regresa a testear el VWAP diario", "Aparece señal de reversión de KIRAX en el VWAP", "Rechazo del precio en la banda con vela de mecha"],
        ["Setup 2: Ruptura con Absorción", "Precio rompe una zona de consolidación", "KIRAX lanza señal de ruptura con expansión", "Retesteo al nivel roto con soporte del volumen"],
        ["Setup 3: Caza de Stops (Sweep)", "Barrida rápida de máximos/mínimos anteriores", "Señal en dirección contraria tras la barrida", "Giro del delta y rápida recuperación del rango"]
      ]
    },
    puntos: [
      "• Setup 1 (Rebote VWAP): Ideal para mercados en tendencia clara. El VWAP actúa como un imán dinámico y zona de rebote institucional.",
      "• Setup 2 (Ruptura): Se opera únicamente en el RETROCESO (pullback) hacia el nivel roto, nunca Persiguiendo el precio en el pico.",
      "• Setup 3 (Caza de Stops): Explota la trampa liquidadora contra el retail. Cuando los stops son barridos, la señal de KIRAX marca el giro real."
    ]
  },
  {
    seccion: 6,
    titulo: "KIRAX + Bookmap: La Sinergia Perfecta",
    subtitulo: "Combinando el indicador de TradingView con la microestructura",
    contenido: [
      "KIRAX y Bookmap no compiten: se complementan perfectamente. La fórmula del éxito en el scalping moderno radica en su sinergia:",
      "KIRAX te dice QUÉ operar en el gráfico (detecta el nivel, el sesgo y lanza la alerta). Bookmap te dice POR QUÉ y CUÁNDO es el momento exacto (te muestra la absorción real, los icebergs y el CVD)."
    ],
    tabla: {
      headers: ["Función Analítica", "Aporte de KIRAX (TradingView)", "Validación de Bookmap (Order Flow)"],
      filas: [
        ["Detección de Oportunidad", "Lanza la señal visual y alerta en pantalla", "Muestra si hay Bids/Asks reales absorbiendo el impacto"],
        ["Definición de Zona", "Dibuja soportes, resistencias y VWAP", "Revela Muros Rojos e Icebergs defendiendo ese nivel exacto"],
        ["Sesgo Direccional", "Establece la tendencia dominante del día", "Confirma con el Delta Acumulado (CVD) si el flujo acompaña"],
        ["Timing de Entrada", "Marca el cierre de la vela de confirmación", "Brinda la entrada al tick exacto cuando la liquidez se consume"]
      ]
    },
    puntos: [
      "• Sinergia 1: KIRAX lanza señal de compra en VWAP -> Bookmap confirma que hay un Muro de Bids sosteniendo el precio.",
      "• Sinergia 2: KIRAX marca zona de resistencia -> Bookmap revela una orden Iceberg institucional vendiendo activamente.",
      "• Sinergia 3: KIRAX da sesgo alcista -> Bookmap valida con CVD que las compras agresivas están dominando la sesión."
    ]
  },
  {
    seccion: 7,
    titulo: "Gestión de Riesgo con KIRAX",
    subtitulo: "Protección estricta del capital y dimensionamiento de posición",
    contenido: [
      "Un indicador sin gestión de riesgo conduce tarde o temprano a la quiebra. KIRAX incluye reglas matemáticas precisas para ubicar el Stop Loss y el Take Profit apoyándose en la liquidez del mercado."
    ],
    tabla: {
      headers: ["Parámetro de Riesgo", "Regla de Aplicación KIRAX", "Propósito de Protección"],
      filas: [
        ["Ubicación de Stop Loss", "Justo detrás de la zona de liquidez / nivel que marcó KIRAX", "Invalida la operación si la liquidez defensiva es superada"],
        ["Ubicación de Take Profit", "Primer objetivo en la siguiente zona de liquidez de KIRAX", "Asegura ganancias en zonas donde el precio puede reaccionar"],
        ["Riesgo por Operación", "Máximo 0.5% a 1.0% del capital total de la cuenta", "Garantiza supervivencia ante rachas de pérdidas inevitables"],
        ["Ratio Riesgo/Beneficio", "Mínimo 1:2 (Arriesgar 1 para ganar 2 o más)", "Mantiene la expectativa matemática positiva en el tiempo"]
      ]
    },
    puntos: [
      "• Nunca muevas el Stop Loss en contra por emoción o miedo a perder.",
      "• Al alcanzar un ratio 1:1, asegura la posición moviendo el Stop a Breakeven (punto de entrada) o toma parciales.",
      "• Si el precio rompe la zona de invalidación marcada por KIRAX, acepta la pérdida pequeña de inmediato."
    ]
  },
  {
    seccion: 8,
    titulo: "Errores Comunes al Operar con KIRAX",
    subtitulo: "Las trampas mentales y técnicas que debes evitar",
    contenido: [
      "Analizar los errores más frecuentes cometidos por alumnos al usar el indicador permite acortar la curva de aprendizaje y preservar el capital."
    ],
    tabla: {
      headers: ["Error Frecuente", "Por qué ocurre", "Solución Disciplinada KIRAX"],
      filas: [
        ["1. Operar señal aislada", "Ansiedad y FOMO por entrar rápido al mercado", "Exigir siempre la Regla de las 3 Confluencias antes de abrir orden"],
        ["2. Ignorar el VWAP", "Querer adivinar techos o pisos en tendencia fuerte", "Jamás vendas sobre el VWAP ni compres por debajo en tendencias"],
        ["3. Entrar en agotamiento", "Ver una vela gigante e ingresar al final del impulso", "Consultar el Contador de Velas y evitar entradas en fase tardía"],
        ["4. Mover el Stop Loss", "Rechazo emocional a aceptar una pérdida pequeña", "Aceptar que la pérdida es el costo operativo del negocio"]
      ]
    },
    puntos: [
      "• Error Fatal #1: Tratar a KIRAX como un 'robot automático' que opera solo sin análisis de contexto.",
      "• Error Fatal #2: Aumentar el lotaje (sobreapalancamiento) tras una pérdida para intentar recuperar dinero rápidamente (Revenge Trading).",
      "• Error Fatal #3: Cambiar la configuración del indicador a mitad de sesión durante operaciones abiertas."
    ]
  },
  {
    seccion: 9,
    titulo: "El Checklist Definitivo del Operador KIRAX",
    subtitulo: "Las 6 preguntas obligatorias antes de hacer clic",
    contenido: [
      "Antes de colocar cualquier orden en el mercado, el trader debe revisar mental o físicamente las 6 preguntas del Checklist Definitivo KIRAX. Si una sola respuesta es negativa, LA OPERACIÓN SE CANCELA."
    ],
    puntos: [
      "CHECKLIST PREVIO A LA ENTRADA (6 PASOS INVIOLABLES):",
      "1) ¿La señal de KIRAX cuenta con al menos 3 confluencias activas? (Sí/No)",
      "2) ¿La entrada está alineada con el sesgo direccional del VWAP? (Sí/No)",
      "3) ¿Hay confirmación de volumen / absorción en Bookmap respaldando la dirección? (Sí/No)",
      "4) ¿El riesgo por esta operación es de máximo 1% de mi capital? (Sí/No)",
      "5) ¿El objetivo de ganancia ofrece un ratio Riesgo:Beneficio de al menos 1:2? (Sí/No)",
      "6) ¿Mi estado emocional es neutral, libre de revancha, rabia o ansiedad? (Sí/No)",
      "• REGLA FINAL: Si las 6 respuestas son SÍ -> Apreta el gatillo con convicción. Si hay un solo NO -> Cierra la plataforma."
    ]
  },
  {
    seccion: 10,
    titulo: "KIRAX en Vivo: Rutina Diaria Completa del Trader",
    subtitulo: "Flujo de trabajo sistemático en 4 fases operativas",
    contenido: [
      "Para lograr la consistencia profesional con KIRAX + Bookmap, debes transformar tu operativa en un proceso estructurado y repetible diariamente."
    ],
    tabla: {
      headers: ["Fase del Día", "Actividades Principales", "Herramienta Utilizada"],
      filas: [
        ["1. Pre-Mercado (15 min antes)", "Identificar zonas de liquidez clave, niveles del día anterior y sesgo inicial del VWAP.", "TradingView (KIRAX) + Calendar"],
        ["2. Apertura de Sesión", "Observar el Contador de Velas, esperar la inyección de volumen y la primera confluencia real.", "TradingView + Bookmap"],
        ["3. Durante la Sesión", "Ejecutar únicamente los 3 Setups Maestros que cumplan las 3 confluencias y el Checklist.", "TradingView + Bookmap + Bróker"],
        ["4. Cierre de Sesión", "Registrar todas las operaciones en el Journal, evaluar errores y cerrar pantallas.", "TradingJournal KIRAX"]
      ]
    },
    puntos: [
      "• La disciplina diaria vence al talento. Sigue la rutina paso a paso sin improvisar.",
      "• En los próximos módulos (Análisis Real I y II), aplicaremos toda esta metodología a operaciones reales en vivo en el mercado del Oro."
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

export const MODULE_8_EXAM_BANK: ExamQuestion[] = [
  {
    id: 1,
    pregunta: "¿Qué es KIRAX?",
    opciones: [
      "Un indicador de flujo de órdenes y confluencia técnica para TradingView",
      "Una plataforma de trading independiente",
      "Un bróker de metales preciosos",
      "Un software de minería de criptomonedas"
    ],
    respuestaCorrecta: 0,
    explicacion: "KIRAX es un panel técnico avanzado desarrollado para TradingView que combina múltiples lecturas institucionales y confluencia de capas."
  },
  {
    id: 2,
    pregunta: "¿Cuál es la filosofía central del indicador KIRAX?",
    opciones: [
      "Operar siempre con la confluencia de múltiples capas, nunca con una señal aislada",
      "Operar cada flecha o señal por separado en cuanto aparece",
      "Seguir únicamente el indicador RSI",
      "Adivinar techos y pisos sin importar el volumen"
    ],
    respuestaCorrecta: 0,
    explicacion: "La regla de oro de KIRAX exige exigir la confluencia de al menos 3 capas de lectura antes de abrir cualquier posición."
  },
  {
    id: 3,
    pregunta: "¿Qué significa la regla de las 3 confluencias en KIRAX?",
    opciones: [
      "Verificar que existan al menos 3 factores técnicos alineados (VWAP, liquidez, contador, volumen, etc.) antes de entrar",
      "Usar 3 gráficos en 3 pantallas distintas",
      "Abrir 3 operaciones simultáneas para diversificar",
      "Dividir la cuenta en 3 partes iguales"
    ],
    respuestaCorrecta: 0,
    explicacion: "Exige que al menos 3 capas independientes confirmen la misma dirección para considerar la entrada como de alta probabilidad."
  },
  {
    id: 4,
    pregunta: "¿Para qué mercado está optimizado principalmente el KIRAX Indicator?",
    opciones: [
      "Oro (XAUUSD)",
      "Criptomonedas de baja capitalización",
      "Pares exóticos de Forex sin volumen",
      "Acciones de pequeña capitalización"
    ],
    respuestaCorrecta: 0,
    explicacion: "KIRAX está calibrado y optimizado con especial precisión para el scalping y day trading en Oro spot (XAUUSD)."
  },
  {
    id: 5,
    pregunta: "¿Qué estilo de trading promueve principalmente el KIRAX?",
    opciones: [
      "Scalping e intradía (M1 / M5)",
      "Inversión de posición a varios meses",
      "Swing trading semanal",
      "Arbitraje entre plataformas"
    ],
    respuestaCorrecta: 0,
    explicacion: "KIRAX está enfocado en la precisión inmediata para scalping e intradía en gráficos de 1 minuto y 5 minutos."
  },
  {
    id: 6,
    pregunta: "¿Cuál es el componente central que determina el sesgo direccional en KIRAX?",
    opciones: [
      "El VWAP (Precio Promedio Ponderado por Volumen)",
      "El Oscilador Estocástico",
      "La Media Móvil Simple de 200 periodos",
      "El indicador MACD clásico"
    ],
    respuestaCorrecta: 0,
    explicacion: "El VWAP es el corazón del sesgo institucional en KIRAX: precio sobre VWAP indica sesgo comprador; bajo VWAP, sesgo vendedor."
  },
  {
    id: 7,
    pregunta: "¿Qué representa el VWAP para los operadores institucionales?",
    opciones: [
      "El precio promedio real al que se ha negociado todo el volumen del día",
      "Un indicador de sobrecompra o sobreventa rápido",
      "La velocidad a la que se mueven las velas",
      "Un nivel de Fibonacci automático"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las instituciones evalúan sus ejecuciones frente al VWAP, convirtiéndolo en el nivel de referencia de valor real del día."
  },
  {
    id: 8,
    pregunta: "¿Las señales confirmadas de KIRAX repintan en el gráfico?",
    opciones: [
      "No repintan: las señales se fijan definitivamente al cierre de la vela",
      "Sí repintan si el precio se mueve en contra",
      "Solo repintan en temporalidad de 1 minuto",
      "Repintan únicamente cuando hay noticias"
    ],
    respuestaCorrecta: 0,
    explicacion: "KIRAX no repinta; una vez que la vela cierra y la señal se confirma, permanece inmutable en el historial del gráfico."
  },
  {
    id: 9,
    pregunta: "¿En qué lenguaje de programación está desarrollado el indicador KIRAX?",
    opciones: [
      "Pine Script (v6) de TradingView",
      "MQL4 de MetaTrader",
      "Python 3.12",
      "C++ ejecutable"
    ],
    respuestaCorrecta: 0,
    explicacion: "KIRAX está escrito en Pine Script de TradingView, lo que permite su compilación limpia y ejecución nativa en la nube."
  },
  {
    id: 10,
    pregunta: "¿Dónde se introduce el código fuente de KIRAX en TradingView?",
    opciones: [
      "En la pestaña 'Editor Pine' en la barra inferior de TradingView",
      "En el menú de configuraciones de la cuenta",
      "En la consola de comandos del navegador web",
      "En la tienda de aplicaciones del sistema operativo"
    ],
    respuestaCorrecta: 0,
    explicacion: "En TradingView, el código se pega en el Editor Pine para luego compilarlo y añadirlo al gráfico con el botón 'Añadir al gráfico'."
  },
  {
    id: 11,
    pregunta: "¿Qué indica un error de compilación al guardar el código de KIRAX?",
    opciones: [
      "Que existe un fallo o sintaxis incorrecta en la copia del código que debe corregirse",
      "Que el mercado está cerrado",
      "Que la cuenta de TradingView caducó",
      "Que el bróker bloqueó la conexión"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un error de compilación señala que la sintaxis de Pine Script no es válida o se copió de forma incompleta."
  },
  {
    id: 12,
    pregunta: "¿Qué función cumplen los parámetros de entrada ('inputs') en el menú de KIRAX?",
    opciones: [
      "Permitir al usuario ajustar colores, tamaños y activar/desactivar módulos sin modificar el código",
      "Conectar el indicador directamente con la cuenta bancaria",
      "Borrar el historial de velas del gráfico",
      "Automatizar el envío de órdenes al bróker"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los inputs permiten personalizar los parámetros visuales y analíticos del indicador directamente desde el menú de opciones."
  },
  {
    id: 13,
    pregunta: "¿Qué función cumple el Módulo Contador de Velas en KIRAX?",
    opciones: [
      "Identificar la fase del ciclo de la sesión para evitar entrar en movimientos agotados",
      "Contar la cantidad total de dinero invertido en el día",
      "Medir los segundos que faltan para el cierre de la vela",
      "Contar cuántos traders están conectados"
    ],
    respuestaCorrecta: 0,
    explicacion: "El contador de velas ayuda a determinar la fase temporal de la sesión para prevenir entradas tardías en movimientos maduros."
  },
  {
    id: 14,
    pregunta: "¿Cómo se representan visualmente las señales de entrada de KIRAX?",
    opciones: [
      "Mediante triángulos/flechas gigantes con icono de trueno en verde (compras) o rojo (ventas)",
      "Con texto en la parte superior del gráfico",
      "Cambiando el color de fondo de toda la pantalla a negro",
      "Ocultando las velas del gráfico"
    ],
    respuestaCorrecta: 0,
    explicacion: "Se dibujan como triángulos destacados con icono de trueno para garantizar una identificación visual inmediata."
  },
  {
    id: 15,
    pregunta: "Si el precio de XAUUSD cotiza POR ENCIMA del VWAP, ¿cuál es el sesgo recomendado por KIRAX?",
    opciones: [
      "Sesgo Alcista (priorizar señales de compra / LONG)",
      "Sesgo Bajista (buscar únicamente ventas)",
      "Sesgo Neutral (no operar)",
      "Mercado bloqueado"
    ],
    respuestaCorrecta: 0,
    explicacion: "Estar por encima del VWAP indica que el mercado está operando a precios superiores al promedio ponderado, favoreciendo compras."
  },
  {
    id: 16,
    pregunta: "Si el precio de XAUUSD cotiza POR DEBAJO del VWAP, ¿cuál es el sesgo recomendado por KIRAX?",
    opciones: [
      "Sesgo Bajista (priorizar señales de venta / SHORT)",
      "Sesgo Alcista (priorizar compras agresivas)",
      "Inversión de tendencia inmediata a la compra",
      "Sin información utilizable"
    ],
    respuestaCorrecta: 0,
    explicacion: "Estar por debajo del VWAP refleja control o sesgo de vendedores, por lo que se deben buscar confluencias de venta."
  },
  {
    id: 17,
    pregunta: "¿Qué describe mejor la sinergia entre KIRAX y Bookmap?",
    opciones: [
      "KIRAX te da el QUÉ y DÓNDE (alerta y zona); Bookmap te da el POR QUÉ y CUÁNDO (absorción y timing al tick)",
      "KIRAX reemplaza completamente a Bookmap",
      "Bookmap genera las señales y KIRAX las ejecuta automáticamente",
      "Ambas herramientas muestran exactamente lo mismo sin diferencias"
    ],
    respuestaCorrecta: 0,
    explicacion: "KIRAX estructura el análisis técnico y las confluencias en el gráfico, mientras Bookmap valida con la microestructura y el flujo de órdenes real."
  },
  {
    id: 18,
    pregunta: "¿En qué consiste el Setup 1: Rebote al VWAP?",
    opciones: [
      "Operar la reversión cuando el precio regresa a testear el VWAP y KIRAX emite señal confirmada",
      "Vender cuando el precio rompe el VWAP con fuerza alcista",
      "Comprar sin importar si hay mecha de rechazo",
      "Operar únicamente en horarios de cierre de mercado"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Setup 1 aprovecha el VWAP como zona de contención institucional cuando el precio testea el nivel y KIRAX confirma el rechazo."
  },
  {
    id: 19,
    pregunta: "¿En qué momento se ingresa al mercado en el Setup 2: Ruptura con Absorción?",
    opciones: [
      "En el RETROCESO (pullback) hacia la zona rota tras confirmar que el volumen respalda el movimiento",
      "En el pico de la primera vela de ruptura de forma agresiva",
      "Antes de que el precio llegue a la resistencia",
      "Cuando la vela de ruptura está cerrada a la mitad"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las rupturas se operan en el retesteo a la zona rota para evitar quedar atrapado en falsas rupturas (fakeouts)."
  },
  {
    id: 20,
    pregunta: "¿En qué consiste el Setup 3: Caza de Stops (Stop Sweep)?",
    opciones: [
      "Aprovechar la barrida rápida de un máximo/mínimo anterior cuando el precio gira de inmediato y KIRAX da señal contraria",
      "Poner el Stop Loss en el punto donde están todos los demás minoristas",
      "Comprar justo antes de que se publiquen noticias de alto impacto",
      "Cerrar la cuenta si el precio toca el Stop Loss"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Setup 3 detecta la trampa de liquidez (stop hunt) y entra en la dirección real del mercado en cuanto se absorben los stops."
  },
  {
    id: 21,
    pregunta: "¿Dónde debe colocarse el Stop Loss al operar un setup con KIRAX?",
    opciones: [
      "Justo detrás de la zona de liquidez o nivel defensivo que marcó el indicador",
      "En un punto aleatorio según el monto en dólares que quieras perder",
      "A exactamente 100 pips independientemente de la estructura",
      "No se debe colocar Stop Loss si la confluencia es alta"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Stop Loss técnico se ubica tras la zona de invalidez (la liquidez defensiva de KIRAX o el muro en Bookmap)."
  },
  {
    id: 22,
    pregunta: "¿Cuál es el riesgo máximo recomendado por operación al usar la metodología KIRAX?",
    opciones: [
      "Entre 0.5% y 1.0% del capital total de la cuenta",
      "5% a 10% por operación",
      "50% de la cuenta para recuperar rápido",
      "Todo el margen disponible en el bróker"
    ],
    respuestaCorrecta: 0,
    explicacion: "Arriesgar un máximo de 0.5% a 1% por trade garantiza la supervivencia de la cuenta ante rachas negativas inevitables."
  },
  {
    id: 23,
    pregunta: "¿Cuál es el Ratio Riesgo/Beneficio (R:R) MÍNIMO exigido antes de abrir una operación?",
    opciones: [
      "1:2 (Arriesgar 1 unidad para buscar ganar mínimo 2)",
      "1:1 (Buscar ganar lo mismo que arriesgas)",
      "2:1 en contra (Arriesgar 2 para ganar 1)",
      "No se calcula el ratio"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un ratio mínimo de 1:2 asegura una expectativa matemática positiva a largo plazo, incluso con tasas de acierto moderadas."
  },
  {
    id: 24,
    pregunta: "¿Dónde debe situarse la zona de Take Profit principal según la metodología KIRAX?",
    opciones: [
      "En la siguiente zona de liquidez o nivel clave indicado por KIRAX",
      "Donde el precio llegue en 3 segundos",
      "Al doble del máximo histórico del activo",
      "En un valor de pips fijo sin mirar la estructura"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Take Profit debe fijarse en la próxima zona de liquidez donde es probable que ingresen órdenes contrarias."
  },
  {
    id: 25,
    pregunta: "¿Cuál es el error número 1 cometido por los traders principiantes al usar KIRAX?",
    opciones: [
      "Operar una señal aislada en cuanto aparece el triángulo, sin verificar las confluencias",
      "Tener activo el VWAP en la pantalla",
      "Esperar 3 confluencias antes de apretar el gatillo",
      "Arriesgar solo el 1% del capital"
    ],
    respuestaCorrecta: 0,
    explicacion: "Ingresar de forma impulsiva ante una sola flecha o triángulo sin confirmar confluencia es la causa principal de fallos."
  },
  {
    id: 26,
    pregunta: "¿Qué se debe hacer si una operación alcanza una relación de ganancia 1:1?",
    opciones: [
      "Proteger la posición moviendo el Stop Loss a Breakeven (punto de entrada) o tomar un parcial",
      "Duplicar el tamaño de la posición inmediatamente",
      "Mover el Stop Loss más lejos para dar espacio",
      "Cerrar la plataforma y no revisar más"
    ],
    respuestaCorrecta: 0,
    explicacion: "Mover a Breakeven al 1:1 elimina el riesgo de la operación, convirtiéndola en un 'trade libre de riesgo'."
  },
  {
    id: 27,
    pregunta: "¿Qué es el 'Revenge Trading' o trading de revancha?",
    opciones: [
      "Operar impulsivamente y aumentando el riesgo tras una pérdida para intentar recuperar el dinero rápidamente",
      "Seguir el plan de trading de forma rigurosa",
      "Hacer backtesting de operaciones pasadas",
      "Revisar el journal al final de la sesión"
    ],
    respuestaCorrecta: 0,
    explicacion: "El trading de revancha es una trampa emocional peligrosa que destruye cuentas al violar todas las reglas de gestión."
  },
  {
    id: 28,
    pregunta: "¿Qué debes hacer si de las 6 preguntas del Checklist Definitivo KIRAX obtienes 5 'SÍ' y 1 'NO'?",
    opciones: [
      "NO entrar a la operación (la entrada queda CANCELADA automáticamente)",
      "Entrar de todas formas con la mitad del lote",
      "Ignorar la regla que dio 'NO' si la señal es bonita",
      "Aumentar el Stop Loss"
    ],
    respuestaCorrecta: 0,
    explicacion: "La regla exige que TODAS las preguntas del checklist sean afirmativas. Si una falla, no existe operación."
  },
  {
    id: 29,
    pregunta: "¿Cuál es la primera actividad de la rutina diaria de pre-mercado de un operador KIRAX?",
    opciones: [
      "Marcar las zonas de liquidez clave, niveles del día anterior y verificar el sesgo inicial del VWAP",
      "Abrir una operación de compra de inmediato",
      "Aumentar el apalancamiento al máximo",
      "Revisar las redes sociales en busca de opiniones de otros traders"
    ],
    respuestaCorrecta: 0,
    explicacion: "El pre-mercado prepara el mapa analítico marcando la liquidez relevante y el contexto antes de la apertura."
  },
  {
    id: 30,
    pregunta: "¿Qué herramienta es indispensable registrar al finalizar la sesión diaria de trading?",
    opciones: [
      "El Journal de Trading de KIRAX con el detalle de cada operación y evaluación de capas",
      "Una captura de pantalla enviada por correo al bróker",
      "El historial de noticias de televisión",
      "Una calculadora de interés compuesto"
    ],
    respuestaCorrecta: 0,
    explicacion: "El journal permite auditar la ejecución, detectar patrones de error técnicos o emocionales y medir la tasa de acierto real."
  },
  {
    id: 31,
    pregunta: "¿Qué significa que el contador de KIRAX muestre una fase de 'Agotamiento'?",
    opciones: [
      "Que el movimiento actual ha consumido la mayoría de su volumen y la probabilidad de reversión o pausa es muy alta",
      "Que es el mejor momento para ingresar con el doble de capital",
      "Que la sesión está cerrada por festivo",
      "Que la señal es 100% segura"
    ],
    respuestaCorrecta: 0,
    explicacion: "El agotamiento indica que la inyección de volumen inicial se diluyó, por lo que ingresar en esa fase entraña alto riesgo."
  },
  {
    id: 32,
    pregunta: "Si Bookmap muestra que un Muro Rojo de ventas se está retirando (Spoofing) ante el avance del precio y KIRAX da compra, ¿qué tipo de confluencia tenemos?",
    opciones: [
      "Confluencia de Ruptura Alcista (la liquidez vendedora huye y el flujo comprador domina)",
      "Confluencia de Reversión Bajista inmediata",
      "Falsa confluencia; se debe cancelar",
      "Sin relevancia operativa"
    ],
    respuestaCorrecta: 0,
    explicacion: "La retirada de órdenes de venta (spoofing o cancelación) facilita la expansión alcista del precio respaldada por KIRAX."
  },
  {
    id: 33,
    pregunta: "¿Por qué NO se debe operar en contra del VWAP en tendencias fuertes?",
    opciones: [
      "Porque las instituciones sostienen el flujo en dirección a la tendencia y las probabilidades están en tu contra",
      "Porque TradingView bloquea el gráfico automáticamente",
      "Porque el Stop Loss no funciona en esa zona",
      "Porque el volumen desaparece por completo"
    ],
    respuestaCorrecta: 0,
    explicacion: "Operar contra el VWAP en tendencias impulsivas equivale a situarse frente al flujo comprador/vendedor institucional."
  },
  {
    id: 34,
    pregunta: "¿Qué mide la expectativa matemática en un sistema de trading como KIRAX?",
    opciones: [
      "El resultado promedio esperado en dólares por operación a lo largo de una serie de 100+ trades",
      "El porcentaje de operaciones ganadas consecutivas en un día",
      "La velocidad a la que el bróker ejecuta la orden",
      "El monto máximo de apalancamiento permitido"
    ],
    respuestaCorrecta: 0,
    explicacion: "La expectativa matemática positiva garantiza que el sistema produce ganancias netas sostenidas en el tiempo."
  },
  {
    id: 35,
    pregunta: "¿Qué debes hacer si el precio se acerca a tu Stop Loss?",
    opciones: [
      "Respetar el plan y dejar que el mercado ejecute la invalidez si corresponde; NUNCA alejar el stop",
      "Mover el Stop Loss más lejos para evitar que lo toque",
      "Eliminar el Stop Loss por completo",
      "Abrir otra posición en la misma dirección para promediar a la baja"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Stop Loss representa la cota de invalidación técnica; alejarlo destruye la gestión de riesgo y multiplica pérdidas."
  },
  {
    id: 36,
    pregunta: "¿Qué temporalidad se recomienda utilizar para el análisis de sesgo diario previo al scalping?",
    opciones: [
      "15 Minutos (M15) o 1 Hora (H1)",
      "1 Segundo (S1)",
      "1 Mes (MN)",
      "Gráfico de tics únicamente"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las temporalidades M15 o H1 brindan la perspectiva estructural limpia para definir las zonas principales del día."
  },
  {
    id: 37,
    pregunta: "¿Qué ocurre con una señal de KIRAX si la vela actual aún NO ha cerrado?",
    opciones: [
      "La señal está en proceso de cálculo y NO se considera confirmada hasta que la vela cierre",
      "La señal ya es 100% definitiva",
      "Se debe ingresar inmediatamente en el primer segundo",
      "El indicador falla de forma permanente"
    ],
    respuestaCorrecta: 0,
    explicacion: "Mientras la vela esté en formación, la señal puede parpadear. Solo el cierre de vela confirma la señal fija."
  },
  {
    id: 38,
    pregunta: "¿Cuál es el propósito de realizar 'Backtesting' con el indicador KIRAX?",
    opciones: [
      "Validar estadísticamente la tasa de acierto y ventaja del sistema en datos históricos pasados",
      "Aumentar el saldo ficticio en la cuenta demo",
      "Predecir las noticias de la próxima semana",
      "Aprender a programar en otros lenguajes"
    ],
    respuestaCorrecta: 0,
    explicacion: "El backtesting demuestra la solidez del sistema y genera confianza psicológica antes de arriesgar capital real."
  },
  {
    id: 39,
    pregunta: "¿Qué es el 'Forward Testing' en el proceso de entrenamiento de la Academia?",
    opciones: [
      "Practicar la ejecución en tiempo real utilizando una cuenta simulada o demo siguiendo las reglas estrictas",
      "Operar directo con dinero prestado en real",
      "Ver videos del pasado sin analizar los gráficos",
      "Operar sólo los fines de semana cuando el mercado está cerrado"
    ],
    respuestaCorrecta: 0,
    explicacion: "El forward testing entrena los reflejos y el control emocional en el mercado en vivo sin riesgo financiero inicial."
  },
  {
    id: 40,
    pregunta: "¿Qué caracteriza a un 'Trader Francotirador' que domina el KIRAX?",
    opciones: [
      "Opera pocas veces en el día (1 a 3 trades A+), con paciencia extrema y máxima confluencia",
      "Abre 50 operaciones al día persiguiendo cada movimiento pequeño",
      "Opera sin usar el gráfico de Bookmap",
      "Arriesga el 20% en cada trade buscando duplicar la cuenta en un día"
    ],
    respuestaCorrecta: 0,
    explicacion: "El francotirador antepone la calidad de ejecución a la cantidad de operaciones, protegiendo disciplinadamente el capital."
  },
  {
    id: 41,
    pregunta: "¿Qué representa la zona de Sostén/Resistencia en el módulo de liquidez de KIRAX?",
    opciones: [
      "Niveles clave donde históricamente se han acumulado grandes volúmenes de órdenes institucionales",
      "Líneas dibujadas al azar por el indicador",
      "Puntos donde siempre el precio se detiene exactamente 1 hora",
      "Lugares donde no hay liquidez"
    ],
    respuestaCorrecta: 0,
    explicacion: "Indican concentraciones de liquidez que actuarán como barrera o imán según el enfoque de la sesión."
  },
  {
    id: 42,
    pregunta: "¿Qué se debe hacer si se publica una noticia económica de muy alto impacto (ej. NFP, CPI)?",
    opciones: [
      "Pausar la operativa 15 minutos antes y después del evento para evitar slippage y volatilidad errática",
      "Aumentar el lotaje al triple y entrar antes del dato",
      "Ignorar el calendario y operar normalmente",
      "Eliminar el Stop Loss para que la noticia no lo saque"
    ],
    respuestaCorrecta: 0,
    explicacion: "Durante noticias de alto impacto, el spread se ensancha y el slippage puede violar los niveles técnicos del indicador."
  },
  {
    id: 43,
    pregunta: "Si el CVD en Bookmap muestra una divergencia alcista y KIRAX lanza señal de compra en el VWAP, ¿cuál es la acción recomendada?",
    opciones: [
      "Ejecutar orden de Compra (LONG) con alta confianza y Stop ajustado bajo la liquidez",
      "Ignorar la señal y buscar ventas",
      "Esperar 5 horas a que cambie el mercado",
      "Cerrar la plataforma por exceso de confluencia"
    ],
    respuestaCorrecta: 0,
    explicacion: "Esta es la confluencia perfecta A+: la señal técnica en VWAP se respalda con la absorción y divergencia del delta en Bookmap."
  },
  {
    id: 44,
    pregunta: "¿Qué función cumple el diario de trading (journal) en la preservación del estado mental del trader?",
    opciones: [
      "Fomenta la objetividad liberando la mente del resultado de un solo trade al enfocarse en el proceso de largo plazo",
      "Sirve para presumir ganancias en redes sociales",
      "Es un requisito legal del bróker para pagar impuestos",
      "Permite modificar las velas del historial"
    ],
    respuestaCorrecta: 0,
    explicacion: "El journal transforma el trading emocional en una disciplina científica fundamentada en métricas reales."
  },
  {
    id: 45,
    pregunta: "¿Qué es el 'Slippage' o deslizamiento en la ejecución de órdenes?",
    opciones: [
      "La diferencia entre el precio solicitado en la orden y el precio real al que el bróker la ejecuta",
      "Un tipo de señal de compra en KIRAX",
      "La comisión fija cobrada por TradingView",
      "Un indicador de volumen acumulado"
    ],
    respuestaCorrecta: 0,
    explicacion: "El slippage ocurre durante momentos de alta volatilidad o liquidez escasa cuando el mercado salta niveles de precio."
  },
  {
    id: 46,
    pregunta: "Si la primera hora de sesión no presenta ninguna confluencia limpia de 3 capas, ¿qué hace el operador profesional?",
    opciones: [
      "Mantiene las manos quietas y NO opera; la paciencia es parte del trabajo",
      "Forza una entrada con 2 confluencias borrosas",
      "Cambia las configuraciones de KIRAX para que dé señales más rápido",
      "Opera en contra de la tendencia sin señal"
    ],
    respuestaCorrecta: 0,
    explicacion: "No operar cuando el mercado no ofrece condiciones de alta probabilidad es una decisión operativa correcta."
  },
  {
    id: 47,
    pregunta: "¿Qué perfil de trader obtiene el mayor rendimiento al dominar KIRAX + Bookmap?",
    opciones: [
      "El trader disciplinado, analítico y paciente que busca consistencia y control de riesgo estricto",
      "El trader impulsivo que busca hacerse rico en una semana",
      "El usuario que busca un sistema 100% automático sin pensar",
      "El especulador que opera sin gestión de capital"
    ],
    respuestaCorrecta: 0,
    explicacion: "La metodología KIRAX premia la disciplina estricta, la alineación de capas y la paciencia del francotirador."
  },
  {
    id: 48,
    pregunta: "¿Qué significa 'Breakeven' en una posición abierta?",
    opciones: [
      "Mover el Stop Loss exactamente al precio de entrada para garantizar costo cero en caso de reversión",
      "Cerrar la posición con pérdidas del 50%",
      "Duplicar la cantidad de contratos en ganancia",
      "Pagar una tarifa extra al bróker"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Breakeven elimina el riesgo financiero de la posición cuando el mercado ya se ha movido a favor del trade."
  },
  {
    id: 49,
    pregunta: "¿Qué mide la tasa de acierto (Win Rate) en el journal de KIRAX?",
    opciones: [
      "El porcentaje de operaciones ganadoras respecto al total de operaciones ejecutadas",
      "El total de dinero ganado en el año",
      "La cantidad de horas pasadas frente al monitor",
      "El número de señales que dio el indicador"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Win Rate refleja la efectividad porcentual del sistema en combinación con la ejecución del trader."
  },
  {
    id: 50,
    pregunta: "¿Cuál es el siguiente paso formativo tras completar el estudio del Módulo 8?",
    opciones: [
      "Avanzar a los Módulos de Análisis Real I y II para aplicar todo lo aprendido en operaciones reales en vivo",
      "Dejar de usar Bookmap y KIRAX",
      "Buscar un nuevo indicador diferente en internet",
      "Operar sin volver a medir el riesgo"
    ],
    respuestaCorrecta: 0,
    explicacion: "Tras dominar la teoría y el indicador, el alumno aplica la metodología en vivo en los módulos de práctica en tiempo real."
  }
];
