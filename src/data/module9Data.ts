export interface Module9SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_9_METADATA = {
  id: 9,
  titulo: "MÓDULO 9 — ANÁLISIS REAL I: DE LA TEORÍA AL MERCADO",
  subtitulo: "Academia KIRAX | Metodología Top-Down, Estructura, Zonas Clave y Ejecución en Vivo",
  objetivo: "Unir todas las piezas del análisis técnico e institucional en un flujo de trabajo ordenado: Estructura, Contexto Top-Down, Zonas de Valor, Multitemporalidad (MTF), Puntos de Entrada y Gestión en Vivo.",
  duracionEstimada: "8 - 10 horas de estudio",
  totalPreguntasBanco: 500
};

export const MODULE_9_SECTIONS: Module9SectionContent[] = [
  {
    seccion: 1,
    titulo: "Metodología de Análisis Top-Down",
    subtitulo: "El flujo de trabajo descendente de lo general a lo específico",
    contenido: [
      "Un análisis profesional no se realiza mirando un solo gráfico en M1 y disparando órdenes a ciegas. Se ejecuta siguiendo un orden fijo y descendente (top-down), de lo general a lo específico, para garantizar que cada decisión en gráficos menores esté respaldada por la fuerza de las temporalidades mayores.",
      "Regla de Oro Inviolable: Nunca operes una señal de una temporalidad menor si contradice la dirección o estructura de la temporalidad mayor. La temporalidad mayor manda siempre."
    ],
    tabla: {
      headers: ["Nivel del Análisis", "Marco Temporal (TF)", "Propósito Analítico en el Flujo"],
      filas: [
        ["1. Contexto Macro y Sesión", "Noticias / Calendario", "Identificar qué mercado se opera, horario activo y eventos de alto impacto"],
        ["2. Temporalidad Mayor (HTF)", "D1 / H4", "Determinar la dirección de fondo, tendencia principal y estructura mayor"],
        ["3. Temporalidad Intermedia (ITF)", "H1", "Localizar zonas de valor, soportes/resistencias clave y orden interno"],
        ["4. Temporalidad de Ejecución (LTF)", "M15 / M5 / M1", "Identificar el patrón de confirmación y el punto exacto de entrada al tick"]
      ]
    },
    puntos: [
      "• Evita tomar compras en M5 cuando la estructura diaria (D1) está en pleno impulso bajista violento.",
      "• Alinea siempre las 3 capas temporales: Dirección (HTF) + Zona de Valor (ITF) + Gatillo (LTF).",
      "• El análisis top-down elimina la improvisación y la confusión visual al entrar al mercado."
    ]
  },
  {
    seccion: 2,
    titulo: "Contexto y Estructura del Mercado",
    subtitulo: "Identificación del estado actual: Tendencia vs Rango",
    contenido: [
      "Antes de buscar un punto de entrada, el operador debe responder tres preguntas esenciales: 1) ¿Hacia dónde se mueve el precio con mayor probabilidad? 2) ¿Qué zona clave está probando en este momento? 3) ¿Qué tipo de mercado estamos presenciando?",
      "El mercado se desplaza en tres estados bien definidos. Identificar el estado correcto dicta el plan operativo a seguir."
    ],
    tabla: {
      headers: ["Tipo de Mercado", "Estructura de Máximos y Mínimos", "Plan Operativo Específico"],
      filas: [
        ["Tendencia Alcista", "Máximos Más Altos (HH) + Mínimos Más Altos (HL)", "Operar ÚNICAMENTE Compras (Long) en los retrocesos a soportes"],
        ["Tendencia Bajista", "Máximos Más Bajos (LH) + Mínimos Más Bajos (LL)", "Operar ÚNICAMENTE Ventas (Short) en los rebotes a resistencias"],
        ["Rango / Lateral", "El precio oscila entre un techo y un piso sin progreso", "Comprar en el piso (soporte) y Vender en el techo (resistencia)"]
      ]
    },
    puntos: [
      "• En tendencia alcista: La secuencia de HH y HL confirma la salud de los compradores.",
      "• En tendencia bajista: La secuencia de LH y LL confirma el dominio constante de los vendedores.",
      "• En rango: Se espera el fallo de ruptura para operar rebotes hacia el punto medio (POC) o extremo opuesto."
    ]
  },
  {
    seccion: 3,
    titulo: "Zonas Clave: Soportes, Resistencias y Liquidez",
    subtitulo: "Delimitación del mapa del campo de batalla",
    contenido: [
      "Las zonas clave son los niveles donde el precio ha reaccionado con fuerza en el pasado y donde es altamente probable que vuelva a reaccionar. Representan el mapa de oferta y demanda en el gráfico.",
      "Regla de Marcación: Marca las zonas clave como ÁREAS o RECTÁNGULOS, nunca como líneas finas de un solo precio. El mercado respeta rangos de valor, no puntos milimétricos exactos."
    ],
    tabla: {
      headers: ["Tipo de Zona", "Definición Técnica", "Comportamiento del Precio"],
      filas: [
        ["Zona de Soporte (Demanda)", "Nivel donde la demanda supera la oferta", "Frena caídas y genera impulsos o rebotes al alza"],
        ["Zona de Resistencia (Oferta)", "Nivel donde la oferta supera la demanda", "Frena subidas y genera caídas o giros a la baja"],
        ["Zona de Liquidez", "Área con acumulación de órdenes (Equal Highs/Lows)", "Atrae al precio como un imán antes de un movimiento fuerte"],
        ["Cambio de Rol (Flip)", "Soporte roto se vuelve Resistencia (o viceversa)", "Nivel clave para retesteo tras una ruptura de estructura"]
      ]
    },
    puntos: [
      "• Cuantas más veces haya reaccionado el precio en una zona sin romperla, mayor fortaleza tiene dicha zona.",
      "• El Principio de Cambio de Rol (Flip Level) es una de las herramientas más fiables para operar retrocesos (pullbacks)."
    ]
  },
  {
    seccion: 4,
    titulo: "Lectura de la Tendencia y Estructura Avanzada (BOS y CHoCH)",
    subtitulo: "Cómo detectar la continuidad o el giro de la estructura",
    contenido: [
      "La estructura del mercado es el lenguaje en el que cotiza el precio. Entender sus quiebres permite distinguir si la tendencia dominante continúa o si ha iniciado un giro estructural profundo."
    ],
    tabla: {
      headers: ["Concepto Estructural", "Significado", "Implicación Operativa"],
      filas: [
        ["HH (Higher High)", "Máximo más alto que el anterior", "Confirma fortaleza en tendencia alcista"],
        ["HL (Higher Low)", "Mínimo más alto que el anterior", "Zona de soporte estructural alcista"],
        ["LH (Lower High)", "Máximo más bajo que el anterior", "Zona de resistencia estructural bajista"],
        ["LL (Lower Low)", "Mínimo más bajo que el anterior", "Confirma fortaleza en tendencia bajista"],
        ["BOS (Break of Structure)", "Quiebre a favor de la tendencia previa", "Confirma CONTINUACIÓN de la tendencia viva"],
        ["CHoCH (Change of Character)", "Quiebre del último HL o LH relevante", "Primera señal de alerta de GIRO O CAMBIO de tendencia"]
      ]
    },
    puntos: [
      "• CHoCH Bajista: Ocurre cuando el precio en tendencia alcista rompe a la baja el último HL relevante.",
      "• CHoCH Alcista: Ocurre cuando el precio en tendencia bajista rompe al alza el último LH relevante.",
      "• Importante: Un BOS es una confirmación de la fuerza existente, no una señal de entrada aislada."
    ]
  },
  {
    seccion: 5,
    titulo: "Análisis Multitemporal (MTF)",
    subtitulo: "Alineación de temporalidades para maximizar el win rate",
    contenido: [
      "El análisis multitemporal (MTF) consiste en examinar simultáneamente varios marcos de tiempo para filtrar entradas falsas y aumentar la probabilidad de éxito.",
      "Flujo Práctico MTF: 1) Examina H4/D1 para conocer el sesgo general. 2) Baja a H1 para marcar la zona de valor donde el precio está reaccionando a favor del sesgo. 3) Baja a M15/M5 para capturar la vela de confirmación y ejecutar."
    ],
    puntos: [
      "• Matriz de Alineación MTF:",
      "1) H4 Alcista + H1 Alcista en Soporte + M5 Confirmación Alcista = ENTRADA A+ (Máxima Confluencia).",
      "2) H4 Alcista + H1 Bajista = Esperar aclaración del contexto (Sin Operativa).",
      "3) H4 Bajista + H1 Bajista en Resistencia + M5 Confirmación Bajista = ENTRADA A+ (Máxima Confluencia).",
      "• Si una sola temporalidad contradice el escenario principal, el operador prudente se queda fuera."
    ]
  },
  {
    seccion: 6,
    titulo: "Puntos de Entrada: Reactiva vs Proactiva",
    subtitulo: "Dos enfoques tácticos para incorporarse al mercado",
    contenido: [
      "Una vez definido el contexto, la zona y el sesgo, el paso final es seleccionar el tipo de entrada al mercado.",
      "Existen dos enfoques principales con diferentes perfiles de riesgo y recompensa."
    ],
    tabla: {
      headers: ["Tipo de Entrada", "Mecánica de Ejecución", "Ventajas", "Desventajas"],
      filas: [
        ["Entrada Reactiva (Confirmación)", "Se ingresa TRAS ver una señal de rechazo (vela de reversión / CHoCH en M5)", "Mayor tasa de acierto (Win Rate), confirmación visual de presencia compradora/vendedora", "Stop Loss suele ser ligeramente más amplio"],
        ["Entrada Proactiva (Anticipación)", "Se coloca orden Límite directa en la zona clave antes de que el precio llegue", "Mejor precio de entrada, mayor Ratio Riesgo:Beneficio (R:R)", "Exige más experiencia, mayor tasa de fallos si la zona es atravesada"]
      ]
    },
    puntos: [
      "• Requisitos Obligatorios para toda entrada: 1) Sesgo mayor definido. 2) Zona clave de valor. 3) Plan de confirmación o anticipación. 4) Stop Loss técnico en estructura. 5) Target de Take Profit medible."
    ]
  },
  {
    seccion: 7,
    titulo: "Análisis de Velas Japonesas y Confluencia",
    subtitulo: "Las velas de reversión como gatillo de confirmación",
    contenido: [
      "Una vela de reversión por sí sola en medio de la nada NO tiene ningún valor operativo. Sin embargo, una vela de reversión formada EXACTAMENTE dentro de una zona clave y alineada con la tendencia mayor constituye una confluencia de alta probabilidad."
    ],
    tabla: {
      headers: ["Vela de Reversión", "Anatomía Visual", "Lectura del Flujo de Órdenes"],
      filas: [
        ["Martillo (Hammer) / Estrella Fugaz", "Mecha larga en un extremo (mínimo 2x el cuerpo) y cuerpo pequeño en el opuesto", "Absorción masiva y rechazo violento de precios en la zona"],
        ["Vela Envolvente (Engulfing)", "El cuerpo de la vela actual cubre por completo el cuerpo de la vela anterior", "Cambio repentino de control de un bando a otro con fuerza"],
        ["Pin Bar de Rechazo", "Sombra prominente a un lado y cierre muy cercano a la apertura", "Rechazo claro de liquidez en el nivel probado"]
      ]
    },
    puntos: [
      "• Fórmulas de Confluencia: Zona Clave + Temporalidad Mayor a Favor + Vela de Reversión + Nivel Redondo = Señal de Alta Confluencia."
    ]
  },
  {
    seccion: 8,
    titulo: "Gestión de la Operación en Vivo",
    subtitulo: "Las 3 decisiones en caliente tras abrir la posición",
    contenido: [
      "Entrar al mercado es solo el 50% del trabajo. Saber gestionar la posición abierta es lo que separa a los traders consistentes de los que queman sus cuentas por pánico o avaricia."
    ],
    tabla: {
      headers: ["Decisión en Vivo", "Regla de Aplicación Correcta", "Errores Fatales a Evitar"],
      filas: [
        ["1. Mover Stop a Breakeven", "Mover a punto de entrada SOLO cuando el precio rompe una estructura a favor (1:1 o BOS)", "Mover a Breakeven demasiado pronto por miedo y ser sacado por ruido"],
        ["2. Tomar Parciales (Scale Out)", "Cerrar un porcentaje del lote al llegar al primer objetivo de liquidez", "Cerrar toda la posición prematuramente por impaciencia"],
        ["3. Salir Total", "Cerrar al tocar el Take Profit final o si la tesis original de la entrada se invalida", "Mover el Stop Loss en contra para 'darle aire' a la posición (Causa #1 de quiebra)"]
      ]
    },
    puntos: [
      "• NUNCA dupliques la posición a la baja para 'recuperar' una operación perdedora.",
      "• Planifica la operación completa antes de hacer clic. Durante la operación, solo ejecuta el plan."
    ]
  },
  {
    seccion: 9,
    titulo: "Sesiones de Mercado y Horarios Clave",
    subtitulo: "La personalidad, liquidez y volatilidad de cada sesión",
    contenido: [
      "El mercado financiero no se comporta igual a todas las horas del día. Cada sesión posee un perfil característico de liquidez y volatilidad que dicta la agresividad de las entradas."
    ],
    tabla: {
      headers: ["Sesión Bursátil", "Horario Aproximado (GMT)", "Características y Dinámica de Precio"],
      filas: [
        ["Sesión Asiática (Tokio)", "00:00 – 09:00 GMT", "Menor volatilidad, rangos estrechos; excelente para delimitar soportes/resistencias del día"],
        ["Sesión Europea (Londres)", "07:00 – 16:00 GMT", "Alta liquidez, grandes movimientos direccionales e impulsos de quiebre"],
        ["Sesión Americana (Nueva York)", "13:00 – 22:00 GMT", "Máxima volatilidad, noticias de alto impacto (CPI, NFP) y expansiones agresivas"],
        ["Solape Londres - NY", "13:00 – 16:00 GMT", "Franja horaria de mayor liquidez y volumen del día entero"]
      ]
    },
    puntos: [
      "• Para el Oro (XAUUSD): Las mejores oportunidades de scalping ocurren durante Londres y la apertura de Nueva York.",
      "• Evita abrir posiciones de scalping 15 minutos antes y después de noticias económicas de alto impacto."
    ]
  },
  {
    seccion: 10,
    titulo: "Caso Práctico Paso a Paso: Análisis Real Completo",
    subtitulo: "Demostración guiada del flujo de trabajo de 5 pasos",
    contenido: [
      "Aplicación práctica completa de la metodología en un escenario real de mercado."
    ],
    tabla: {
      headers: ["Paso del Flujo", "Acción del Trader", "Resultado del Análisis"],
      filas: [
        ["Paso 1: Contexto D1", "Examinar el gráfico diario para definir el sesgo", "Tendencia alcista clara con secuencia HH + HL. Sesgo: EXCLUSIVAMENTE COMPRAS"],
        ["Paso 2: Zona H1", "Localizar la zona clave en temporalidad intermedia", "El precio retrocede a una zona de soporte que antes fue resistencia (Flip). Zona de Interés activa"],
        ["Paso 3: Confirmación M15", "Esperar el rechazo en la zona en temporalidad menor", "Aparece una vela Martillo con mecha inferior larga en el soporte, confirmando absorción"],
        ["Paso 4: Entrada y Gestión", "Calcular lote, abrir orden, fijar SL y TP", "Entrada en apertura de vela posterior al Martillo. SL bajo el mínimo de la zona. TP en siguiente máximo (R:R 1:2)"],
        ["Paso 5: Revisión Journal", "Registrar en el diario tras el cierre de la orden", "Operación alcanza el TP. Registro de ejecución: Cumplimiento del plan 100%, estado emocional neutral"]
      ]
    },
    puntos: [
      "• Este flujo de 5 pasos debe repetirse de forma idéntica y disciplinada en cada sesión operativa."
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

export const MODULE_9_EXAM_BANK: ExamQuestion[] = [
  {
    id: 1,
    pregunta: "¿Cuál es el primer paso del análisis top-down?",
    opciones: [
      "Entrar inmediatamente al mercado al mejor precio",
      "Ver el marco temporal mayor para definir el contexto y el sesgo",
      "Buscar indicadores técnicos de osciladores rápidos",
      "Calcular el tamaño de lote directamente"
    ],
    respuestaCorrecta: 1,
    explicacion: "El análisis top-down siempre inicia examinando el marco temporal mayor (D1/H4) para establecer la dirección general del mercado."
  },
  {
    id: 2,
    pregunta: "¿Qué significa realizar un análisis top-down?",
    opciones: [
      "Analizar el mercado de abajo hacia arriba desde M1",
      "Analizar de forma descendente, desde el marco temporal mayor al menor",
      "Analizar exclusivamente las velas japonesas sin mirar temporalidades",
      "Analizar solo el calendario de noticias de la semana"
    ],
    respuestaCorrecta: 1,
    explicacion: "Top-down implica ir descendiendo desde la visión macro (D1/H4) hacia el contexto (H1) y finalmente la ejecución (M15/M5)."
  },
  {
    id: 3,
    pregunta: "¿Qué marco temporal se revisa primero en la metodología top-down?",
    opciones: [
      "El gráfico de 1 minuto (M1)",
      "El gráfico de 5 minutos (M5)",
      "El marco temporal mayor (Diario D1 o 4 Horas H4)",
      "El marco menor de ejecución instantánea"
    ],
    respuestaCorrecta: 2,
    explicacion: "Se debe revisar primero el gráfico D1 o H4 para conocer la dirección dominante antes de tomar decisiones en marcos menores."
  },
  {
    id: 4,
    pregunta: "¿Qué significan las siglas HTF en el análisis técnico?",
    opciones: [
      "Higher Time Frame (Marco Temporal Mayor)",
      "High Trend Factor",
      "Hour Time Frame",
      "Hidden Time Factor"
    ],
    respuestaCorrecta: 0,
    explicacion: "HTF se refiere al marco temporal superior que dicta la tendencia dominante y las zonas clave estructurales."
  },
  {
    id: 5,
    pregunta: "¿Qué significan las siglas LTF en el análisis técnico?",
    opciones: [
      "Long Time Frame",
      "Lower Time Frame (Marco Temporal Menor)",
      "Low Trend Factor",
      "Late Time Frame"
    ],
    respuestaCorrecta: 1,
    explicacion: "LTF se refiere al marco temporal menor (ej. M5 o M1) donde se refina la entrada y se observa el gatillo de ejecución."
  },
  {
    id: 6,
    pregunta: "¿Cuál es el objetivo principal del análisis top-down?",
    opciones: [
      "Entrar rápido al mercado sin esperar contexto",
      "Alinear la dirección de la operación con la fuerza del marco temporal mayor",
      "Utilizar la mayor cantidad de indicadores posibles",
      "Aumentar la frecuencia de operaciones por minuto"
    ],
    respuestaCorrecta: 1,
    explicacion: "Garantiza que la entrada en temporalidades menores no se tome en contra de una tendencia poderosa de temporalidad mayor."
  },
  {
    id: 7,
    pregunta: "¿Qué es una zona de demanda?",
    opciones: [
      "Un nivel donde abundan los vendedores agresivos",
      "Un nivel o área donde el precio reaccionó al alza con fuerza por compras",
      "Una zona neutra donde no ocurre volumen",
      "Una simple línea de tendencia diagonal"
    ],
    respuestaCorrecta: 1,
    explicacion: "Las zonas de demanda son áreas donde los compradores institucionales entraron, impulsando el precio al alza."
  },
  {
    id: 8,
    pregunta: "¿Qué es una zona de oferta?",
    opciones: [
      "Un nivel o área donde el precio cayó con fuerza por ventas",
      "Una zona donde abunda la liquidez compradora",
      "Un soporte técnico en el gráfico",
      "Una media móvil exponencial"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las zonas de oferta representan acumulación de órdenes de venta donde el precio frena su subida y cae."
  },
  {
    id: 9,
    pregunta: "¿Cómo se define un Soporte en el análisis técnico?",
    opciones: [
      "Un nivel o zona donde el precio tiende a frenar su caída y rebotar al alza",
      "Un nivel por donde el precio cae sin detenerse",
      "Una vela alcista de gran tamaño",
      "Un indicador oscilador de velocidad"
    ],
    respuestaCorrecta: 0,
    explicacion: "El soporte actúa como un suelo donde la demanda detiene la presión vendedora e impulsa el precio hacia arriba."
  },
  {
    id: 10,
    pregunta: "¿Cómo se define una Resistencia en el análisis técnico?",
    opciones: [
      "Un nivel o zona donde el precio tiende a frenar su subida y girar a la baja",
      "Un nivel por donde el precio siempre sube libremente",
      "Una vela bajista de mecha corta",
      "Un indicador de volumen de acumulación"
    ],
    respuestaCorrecta: 0,
    explicacion: "La resistencia actúa como un techo donde la oferta supera a la demanda, provocando rechazo o caídas del precio."
  },
  {
    id: 11,
    pregunta: "¿Qué significan las siglas BOS en la lectura de estructura?",
    opciones: [
      "Break of Structure (Ruptura o Quiebre de Estructura de continuación)",
      "Band of Support",
      "Balance of Seller",
      "Bottom of Session"
    ],
    respuestaCorrecta: 0,
    explicacion: "BOS indica que el precio ha roto un máximo o mínimo previo confirmando la continuidad de la tendencia actual."
  },
  {
    id: 12,
    pregunta: "¿Qué significan las siglas CHoCH en la lectura de estructura?",
    opciones: [
      "Change of Character (Cambio de Carácter o giro inicial de estructura)",
      "Channel of Chance",
      "Chart of Choice",
      "Change of Candle"
    ],
    respuestaCorrecta: 0,
    explicacion: "CHoCH indica la primera ruptura en contra de la tendencia previa (ej. romper el último HL en tendencia alcista)."
  },
  {
    id: 13,
    pregunta: "En una tendencia alcista sana, ¿cómo se compone la secuencia de la estructura?",
    opciones: [
      "Por máximos y mínimos cada vez más bajos",
      "Por máximos y mínimos cada vez más altos (HH + HL)",
      "Por mínimos en el mismo nivel exactamente",
      "Por máximos iguales sin avance"
    ],
    respuestaCorrecta: 1,
    explicacion: "La tendencia alcista progresa mediante la creación constante de Higher Highs (HH) y Higher Lows (HL)."
  },
  {
    id: 14,
    pregunta: "En una tendencia bajista sana, ¿cómo se compone la secuencia de la estructura?",
    opciones: [
      "Por máximos y mínimos crecientes",
      "Por máximos y mínimos cada vez más bajos (LH + LL)",
      "Por máximos más altos y mínimos más altos",
      "Por oscilaciones sin dirección"
    ],
    respuestaCorrecta: 1,
    explicacion: "La tendencia bajista progresa mediante la creación constante de Lower Highs (LH) y Lower Lows (LL)."
  },
  {
    id: 15,
    pregunta: "¿Qué significan las siglas HH?",
    opciones: [
      "Higher High (Máximo más alto que el anterior)",
      "High Hidden",
      "Horizontal High",
      "Huge High"
    ],
    respuestaCorrecta: 0,
    explicacion: "HH representa un nuevo pico más elevado en la estructura alcista."
  },
  {
    id: 16,
    pregunta: "¿Qué significan las siglas LL?",
    opciones: [
      "Lower Low (Mínimo más bajo que el anterior)",
      "Long Low",
      "Late Low",
      "Level Low"
    ],
    respuestaCorrecta: 0,
    explicacion: "LL representa un nuevo valle o suelo más bajo en la estructura bajista."
  },
  {
    id: 17,
    pregunta: "¿Cuándo se produce un CHoCH bajista?",
    opciones: [
      "Cuando el precio rompe el último máximo al alza",
      "Cuando el precio en tendencia alcista rompe a la baja el último mínimo relevante (HL)",
      "Cuando se forma una vela doji neutra",
      "Cuando el precio toca una media móvil corta"
    ],
    respuestaCorrecta: 1,
    explicacion: "Al romper el último Higher Low (HL), el precio muestra el primer síntoma de pérdida de control comprador."
  },
  {
    id: 18,
    pregunta: "¿Cuándo se produce un CHoCH alcista?",
    opciones: [
      "Cuando el precio rompe un mínimo a la baja",
      "Cuando el precio en tendencia bajista rompe al alza el último máximo relevante (LH)",
      "Cuando aparece un martillo en medio del rango",
      "Cuando el precio toca un soporte"
    ],
    respuestaCorrecta: 1,
    explicacion: "Al romper el último Lower High (LH), el precio muestra la primera señal de giro alcista."
  },
  {
    id: 19,
    pregunta: "¿En qué consiste una entrada de tipo PROACTIVA?",
    opciones: [
      "Ingresar directamente en la zona con una orden límite antes de ver la reacción del precio",
      "Ingresar únicamente tras confirmar la vela de rechazo",
      "Ingresar al cierre de la sesión bursátil",
      "Ingresar sin utilizar un Stop Loss"
    ],
    respuestaCorrecta: 0,
    explicacion: "La entrada proactiva se anticipa a la reacción colocándose en el nivel clave, ofreciendo mejor R:R pero mayor riesgo."
  },
  {
    id: 20,
    pregunta: "¿En qué consiste una entrada de tipo REACTIVA?",
    opciones: [
      "Ingresar en la zona sin esperar confirmación",
      "Ingresar TRAS presenciar una confirmación clara de reacción (ej. vela de rechazo / CHoCH en M5)",
      "Ingresar antes de que el precio se acerque a la zona",
      "Ingresar por corazonada"
    ],
    respuestaCorrecta: 1,
    explicacion: "La entrada reactiva espera que el mercado demuestre la presencia de compradores o vendedores antes de abrir orden."
  },
  {
    id: 21,
    pregunta: "¿Cuál enfoque de entrada ofrece mayor tasa de acierto (Win Rate) y seguridad?",
    opciones: [
      "Entrada proactiva",
      "Entrada reactiva (con confirmación de rechazo)",
      "Ambos enfoques ofrecen la misma seguridad exacta",
      "Ninguno de los dos"
    ],
    respuestaCorrecta: 1,
    explicacion: "Esperar la confirmación reactiva reduce las entradas falsas al exigir que el mercado muestre su rechazo en la zona."
  },
  {
    id: 22,
    pregunta: "¿Qué sugiere la presencia de una vela con una sombra (wick) inferior larga sobre una zona de soporte?",
    opciones: [
      "Continuación bajista inminente",
      "Absorción de ventas y fuerte rechazo comprador (posible giro alcista)",
      "Ausencia total de volumen",
      "Mercado cerrado"
    ],
    respuestaCorrecta: 1,
    explicacion: "La mecha inferior refleja que las ventas intentaron bajar el precio pero fueron absorbidas totalmente por compras agresivas."
  },
  {
    id: 23,
    pregunta: "¿Qué es el 'wick' o mecha de una vela japonesa?",
    opciones: [
      "El cuerpo denso entre la apertura y el cierre",
      "La sombra o línea fina que señala los extremos alcanzados por el precio (máximo o mínimo)",
      "El color asignado a la vela",
      "El precio de cierre de la sesión"
    ],
    respuestaCorrecta: 1,
    explicacion: "La mecha representa la excursión del precio que no pudo sostenerse hasta el cierre de la vela."
  },
  {
    id: 24,
    pregunta: "Si observas un wick largo superior chocando contra una resistencia en H1, ¿qué interpretación de flujo obtienes?",
    opciones: [
      "Compradores dominando el mercado",
      "Absorción de compras y rechazo por vendedores en la zona de oferta",
      "Mercado en equilibrio perfecto",
      "Falta de liquidez"
    ],
    respuestaCorrecta: 1,
    explicacion: "La mecha superior demuestra que las compras fueron frenadas y empujadas a la baja por la oferta presente en la resistencia."
  },
  {
    id: 25,
    pregunta: "¿Cómo se define la Confluencia en el contexto del trading?",
    opciones: [
      "Ingresar al mercado usando un único indicador de tendencia",
      "La coincidencia de múltiples factores y razones técnicas independientes apuntando a la misma zona",
      "Operar en la misma dirección que el gráfico de 1 segundo",
      "Abrir órdenes en diferentes brókers a la vez"
    ],
    respuestaCorrecta: 1,
    explicacion: "A mayor número de razones independientes alineadas (zona, tendencia, vela, volumen), mayor la probabilidad del trade."
  },
  {
    id: 26,
    pregunta: "¿Qué marco temporal se utiliza de forma estándar como 'contexto de valor' para el scalping intradía?",
    opciones: [
      "El gráfico de 1 segundo",
      "Los gráficos de 15 minutos (M15) y 1 hora (H1)",
      "El gráfico mensual (MN)",
      "El gráfico anual"
    ],
    respuestaCorrecta: 1,
    explicacion: "H1 y M15 proporcionan la estructura intermedia y las zonas de valor clave para definir la operativa del día."
  },
  {
    id: 27,
    pregunta: "¿Qué es el Spread en el mercado bursátil?",
    opciones: [
      "La diferencia entre el precio de compra (Ask) y el precio de venta (Bid)",
      "El tamaño total del lote de entrada",
      "El indicador de fuerza relativa",
      "La ganancia acumulada en el día"
    ],
    respuestaCorrecta: 0,
    explicacion: "El spread es el costo de intermediación que representa la distancia entre el precio al que compras y vendes."
  },
  {
    id: 28,
    pregunta: "¿A qué estilo de trading afecta más directamente el costo del Spread?",
    opciones: [
      "A la inversión de posición a largo plazo",
      "Al Scalping (debido a la frecuencia de operaciones y targets pequeños)",
      "Al swing trading de varios meses",
      "No afecta a ningún estilo"
    ],
    respuestaCorrecta: 1,
    explicacion: "En scalping, al buscar pocos pips de beneficio, un spread elevado consume una porción importante de la ganancia."
  },
  {
    id: 29,
    pregunta: "¿Qué es el Slippage o deslizamiento de ejecución?",
    opciones: [
      "La ejecución de la orden a un precio peor que el solicitado debido a volatilidad o falta de liquidez",
      "Una ganancia inesperada otorgada por el bróker",
      "Un tipo de Stop Loss automático",
      "Un indicador de volumen"
    ],
    respuestaCorrecta: 0,
    explicacion: "El slippage sucede en momentos de alta volatilidad cuando el precio salta antes de que la orden sea emparejada."
  },
  {
    id: 30,
    pregunta: "¿Cómo se reduce el impacto del Slippage en la operativa?",
    opciones: [
      "Operando con órdenes a mercado durante publicaciones de noticias de alto impacto",
      "Evitando operar durante noticias violentas y utilizando órdenes limitadas en horas líquidas",
      "Operando sin colocar Stop Loss",
      "Aumentando el apalancamiento"
    ],
    respuestaCorrecta: 1,
    explicacion: "Pausar la operativa durante eventos de noticias bruscas protege al trader de deslizamientos severos de precio."
  },
  {
    id: 31,
    pregunta: "¿Qué representa la relación Riesgo:Beneficio (R:R)?",
    opciones: [
      "La proporción entre la cantidad de capital que arriesgas frente al beneficio objetivo que buscas obtener",
      "El número de lotes multiplicado por el margen",
      "El saldo flotante de la cuenta",
      "La velocidad a la que se mueve la vela"
    ],
    respuestaCorrecta: 0,
    explicacion: "El ratio R:R mide cuántas unidades de recompensa esperas ganar por cada unidad de riesgo que estás dispuesto a perder."
  },
  {
    id: 32,
    pregunta: "¿Qué significa operar con un ratio R:R de 1:2?",
    opciones: [
      "Arriesgar $100 para buscar una ganancia objetivo de $200",
      "Arriesgar $200 para ganar $100",
      "Ganar el 1% de la cuenta en 2 días",
      "Perder $200 en cada operación"
    ],
    respuestaCorrecta: 0,
    explicacion: "1:2 implica que la recompensa buscada duplica el riesgo asumido en la operación."
  },
  {
    id: 33,
    pregunta: "¿Cuál es la regla sobre el principio de Cambio de Rol (Flip Level)?",
    opciones: [
      "Un soporte roto se convierte en resistencia futura, y una resistencia rota se convierte en soporte futuro",
      "Un soporte roto siempre vuelve a ser un soporte más fuerte",
      "Las resistencias nunca se rompen",
      "Los niveles cambian de rol cada 5 minutos automáticamente"
    ],
    respuestaCorrecta: 0,
    explicacion: "Al romperse un nivel, la oferta y demanda cambian de bando, transformando la antigua barrera en la nueva zona de contención."
  },
  {
    id: 34,
    pregunta: "¿Para qué sirve el Stop Loss en la gestión de capital?",
    opciones: [
      "Para aumentar el beneficio de la orden",
      "Para limitar la pérdida máxima permitida e invalidar el trade si la hipótesis falla",
      "Para ingresar más tarde al mercado",
      "Para asegurar ganancias en verde"
    ],
    respuestaCorrecta: 1,
    explicacion: "El Stop Loss es el cinturón de seguridad que protege la cuenta de pérdidas descontroladas."
  },
  {
    id: 35,
    pregunta: "¿Para qué sirve el Take Profit?",
    opciones: [
      "Para limitar las pérdidas",
      "Para fijar la meta de ganancia donde se cerrará automáticamente la posición con beneficio",
      "Para mover el Stop Loss en vivo",
      "Para cancelar la orden pendiente"
    ],
    respuestaCorrecta: 1,
    explicacion: "El Take Profit asegura la toma de beneficios en la zona de liquidez objetivo planificada."
  },
  {
    id: 36,
    pregunta: "¿Qué es la acción de mover el Stop Loss a 'Breakeven'?",
    opciones: [
      "Mover el Stop Loss exactamente al precio de entrada para eliminar el riesgo financiero de la orden",
      "Mover el Stop Loss más lejos para dar espacio a la operación",
      "Cerrar la posición con el 50% de pérdida",
      "Duplicar el lotaje de la posición"
    ],
    respuestaCorrecta: 0,
    explicacion: "Mover a Breakeven garantiza que, en el peor de los casos, la operación cerrará en cero pérdidas ($0)."
  },
  {
    id: 37,
    pregunta: "¿Cuándo es técnicamente correcto mover el Stop Loss a Breakeven?",
    opciones: [
      "Inmediatamente al abrir la posición",
      "Únicamente cuando el precio ha avanzado con fuerza a favor y ha superado una estructura intermedia (1:1 o BOS)",
      "Cuando la operación va en pérdidas para no cerrar en negativo",
      "Nunca se debe mover a Breakeven"
    ],
    respuestaCorrecta: 1,
    explicacion: "Mover a Breakeven demasiado pronto ahoga la posición con el ruido normal del mercado antes de que desarrolle el movimiento."
  },
  {
    id: 38,
    pregunta: "¿Qué caracteriza a la vela de reversión 'Martillo' (Hammer)?",
    opciones: [
      "Cuerpo pequeño en la parte superior y una sombra o mecha inferior prominente que demuestra rechazo de precios bajos",
      "Cuerpo gigante sin mechas",
      "Mecha superior muy larga y cuerpo en la parte inferior",
      "Sin cuerpo ni mechas"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Martillo refleja que las ventas fueron rechazadas en el soporte y los compradores tomaron el control."
  },
  {
    id: 39,
    pregunta: "¿Qué es una vela Envolvente Alcista (Bullish Engulfing)?",
    opciones: [
      "Una vela verde cuyo cuerpo cubre por completo el cuerpo de la vela bajista anterior",
      "Una vela pequeña de indecisión",
      "Una vela con sombras largas en ambos extremos",
      "Una vela de color rojo oscuro"
    ],
    respuestaCorrecta: 0,
    explicacion: "La envolvente alcista demuestra un cambio violento de impulso de vendedores a compradores."
  },
  {
    id: 40,
    pregunta: "¿Qué indica una vela Doji en un nivel clave?",
    opciones: [
      "Fuerte tendencia unidireccional",
      "Indecisión o equilibrio temporal entre la oferta y la demanda (posible preludio de giro)",
      "Garantía absoluta de que el mercado se detendrá",
      "Falta de conexión al servidor"
    ],
    respuestaCorrecta: 1,
    explicacion: "El Doji refleja la igualdad entre compradores y vendedores antes de que un bando tome el control del siguiente movimiento."
  },
  {
    id: 41,
    pregunta: "Si el mercado está en RANGO / LATERAL, ¿cuál es la estrategia operativa correcta?",
    opciones: [
      "Buscar compras en la parte alta y ventas en la parte baja",
      "Comprar en el soporte (piso) del rango y Vender en la resistencia (techo) del rango",
      "Operar impulsos de continuación en el medio del rango",
      "Aumentar el lotaje al máximo"
    ],
    respuestaCorrecta: 1,
    explicacion: "En consolidación o rango, las probabilidades favorecen los rebotes entre los extremos del canal."
  },
  {
    id: 42,
    pregunta: "¿Por qué el solape de las sesiones de LONDRES y NUEVA YORK (13:00 - 16:00 GMT) es tan cotizado para el scalping?",
    opciones: [
      "Porque registra la mayor concentración de volumen, liquidez y volatilidad del día",
      "Porque los spreads son los más altos del día",
      "Porque el mercado no se mueve en absoluto",
      "Porque es el horario con menos operadores en el mundo"
    ],
    respuestaCorrecta: 0,
    explicacion: "La convergencia de capitales europeo y americano genera expansiones limpias idealmente aprovechables en scalping."
  },
  {
    id: 43,
    pregunta: "¿Qué es un Order Block Alcista?",
    opciones: [
      "La última vela bajista antes de un impulso alcista violento que rompió la estructura",
      "Cualquier vela verde en el gráfico",
      "Un indicador de volumen de TradingView",
      "Un nivel de Stop Loss fijo"
    ],
    respuestaCorrecta: 0,
    explicacion: "Es la huella donde las instituciones colocaron grandes órdenes de compra antes de disparar el precio hacia arriba."
  },
  {
    id: 44,
    pregunta: "¿Qué es un Fair Value Gap (FVG) o Imbalance?",
    opciones: [
      "Un hueco de desequilibrio entre velas donde el precio se movió tan rápido que solo cotizó un bando",
      "Una comisión cobre por el bróker",
      "Un error en el servidor de cotizaciones",
      "Una línea de soporte fijo"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los FVGs representan ineficiencias del mercado que el precio suele buscar rellenar en el futuro para equilibrar la cotización."
  },
  {
    id: 45,
    pregunta: "¿En qué consiste la técnica de Cierra Parcial (Scale Out)?",
    opciones: [
      "Cerrar un porcentaje del lotaje de la posición abierta al alcanzar el primer objetivo de beneficio",
      "Cerrar la cuenta de trading por completo",
      "Mover el Stop Loss más lejos",
      "Abrir otra posición en contra"
    ],
    respuestaCorrecta: 0,
    explicacion: "El cierre parcial asegura ganancias monetarias reales dejando correr una fracción del lote libre de riesgo hacia targets mayores."
  },
  {
    id: 46,
    pregunta: "Si la tesis original por la que abriste una operación se invalida por la acción del precio en vivo, ¿qué debes hacer?",
    opciones: [
      "Cerrar la posición de inmediato aceptando la invalidez técnica, sin esperar a que toque el SL",
      "Mover el Stop Loss en contra para darle más espacio al precio",
      "Ignorar el gráfico y esperar un milagro",
      "Aumentar la posición a la baja"
    ],
    respuestaCorrecta: 0,
    explicacion: "Si la razón del trade desaparece, mantener la posición abierta es un error de proceso."
  },
  {
    id: 47,
    pregunta: "¿Qué es el 'Overtrading' y por qué destruye la consistencia del operador?",
    opciones: [
      "Operar en exceso sin confluencia ni señales válidas, impulsado por ansiedad, avaricia o venganza",
      "Operar pocas veces con disciplina",
      "Hacer backtesting en fines de semana",
      "Llevar un registro diario de las operaciones"
    ],
    respuestaCorrecta: 0,
    explicacion: "El sobreoperar expone la cuenta al spread repetido y a entradas de baja calidad que devuelven el capital ganado."
  },
  {
    id: 48,
    pregunta: "¿Qué exige el 'Prop Trading Mindset' o mentalidad de firmas de fondeo?",
    opciones: [
      "Priorizar la preservación de capital y el control estricto de drawdown sobre las ganancias aceleradas",
      "Buscar duplicar la cuenta en un solo día arriesgando el 20% por trade",
      "Operar sin colocar nunca Stop Loss",
      "Ignorar las reglas de pérdida máxima diaria"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las firmas de fondeo evalúan la consistencia del gestor basándose en el control de riesgo y la disciplina."
  },
  {
    id: 49,
    pregunta: "¿Qué paso del flujo práctico del Módulo 9 se realiza una vez cerrada la operación?",
    opciones: [
      "Registro minucioso en el Journal de Trading (evaluando qué se hizo bien, qué se pudo mejorar y si se cumplió el plan)",
      "Abrir inmediatamente otra orden en sentido contrario",
      "Cambiar de estrategia en la plataforma",
      "Borrar las capturas de pantalla"
    ],
    respuestaCorrecta: 0,
    explicacion: "El registro post-operación es el motor de la mejora continua y el aprendizaje del trader."
  },
  {
    id: 50,
    pregunta: "¿Cuál es el resultado de dominar el proceso de Análisis Real I?",
    opciones: [
      "Operar con un método profesional estructurado, repetible y disciplinado en lugar de improvisar a ciegas",
      "Adivinar el futuro con 100% de aciertos sin pérdidas",
      "Eliminar la necesidad de usar gestión de riesgo",
      "Operar sin mirar las noticias ni las temporalidades mayores"
    ],
    respuestaCorrecta: 0,
    explicacion: "El método transforma el trading en una profesión científica basada en probabilidades y control de proceso."
  }
];
