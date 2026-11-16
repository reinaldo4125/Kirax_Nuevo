export interface Module2SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  checklist?: { titulo: string; items: string[] }[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_2_METADATA = {
  id: 2,
  titulo: "MÓDULO 2 — PSICOLOGÍA II: RUTINA Y DISCIPLINA DEL SCALPER",
  subtitulo: "Academia KIRAX | Formación Profesional de Traders",
  objetivo: "Construir las rutinas diarias, semanales y mensuales que separan al trader amateur del scalper profesional. La disciplina no se desea — se construye con hábitos repetibles.",
  duracionEstimada: "7 - 10 días",
  totalPreguntasBanco: 500
};

export const MODULE_2_SECTIONS: Module2SectionContent[] = [
  {
    seccion: 1,
    titulo: "La Rutina Pre-Mercado (45 Minutos Antes)",
    contenido: [
      "El scalping se gana o se pierde antes de que suene la campana. La rutina pre-mercado no es opcional: es tu ancla mental."
    ],
    checklist: [
      {
        titulo: "1.1 Checklist Físico (10 min)",
        items: [
          "Dormir 7-8 horas la noche anterior",
          "Hidratación: 500ml de agua al despertar",
          "Desayuno ligero (proteína + fruta, sin café en exceso)",
          "5 minutos de estiramientos o movilidad",
          "Postura correcta frente a las pantallas"
        ]
      },
      {
        titulo: "1.2 Checklist Mental (15 min)",
        items: [
          "Revisar calendario económico del día (eventos de alto impacto)",
          "Identificar niveles clave en tus gráficos (soporte/resistencia)",
          "Definir sesgo del día: alcista, bajista o rango",
          "Establecer objetivo MÁXIMO de pérdida diaria (ej: 2%)",
          "Visualizar 2 minutos: imagina entradas limpias y salidas disciplinadas"
        ]
      },
      {
        titulo: "1.3 Checklist Técnico (10 min)",
        items: [
          "Conexión a internet estable (ping <50ms)",
          "Plataforma de trading abierta y sesión iniciada",
          "Bookmap / Depth of Market cargado",
          "Indicador KIRAX 3D activado en TradingView",
          "Gráficos configurados: M1, M5, M15 del instrumento del día"
        ]
      }
    ],
    puntos: [
      "REGLA DE ORO PRE-MERCADO: Si falla CUALQUIERA de los 3 checklists (físico, mental, técnico), NO operas ese día. Un día sin operar es mejor que un día operando mal."
    ]
  },
  {
    seccion: 2,
    titulo: "La Rutina Durante la Sesión",
    contenido: [
      "El scalping es un deporte de alta intensidad mental. No puedes mantener el 100% de enfoque durante 6 horas seguidas."
    ],
    puntos: [
      "2.1 Ritual de Entrada a Cada Trade:",
      "1. ¿El setup está en mi plan de trading? (SÍ/NO)",
      "2. ¿El R:R es mínimo 1:2? (SÍ/NO)",
      "3. ¿Hay confluencia de al menos 2 factores? (SÍ/NO)",
      "4. ¿El tamaño de posición respeta mi riesgo del 1%? (SÍ/NO)",
      "→ Si las 4 son SÍ: ENTRAR. Si hay un solo NO: NO ENTRAR.",
      "",
      "2.2 Monitoreo del Trade en Curso:",
      "• Stop loss colocado ANTES de entrar (nunca después)",
      "• Take profit definido en 2 niveles (TP1 al 50%, TP2 al 50%)",
      "• Mover stop a breakeven cuando el precio avance 1R a tu favor",
      "• No mirar el P&L en dólares — mira solo los pips/ticks",
      "• Respiración controlada: inhala 4s, exhala 4s durante el trade",
      "",
      "2.3 Pausas Activas (Cada 60-90 Minutos):",
      "• Levántate de la silla. Aléjate de las pantallas",
      "• 5 minutos de pausa: camina, estira, bebe agua",
      "• Revisa tu estado emocional: ¿estoy tranquilo o ansioso?",
      "• Si estás ansioso/enojado: pausa de 15 minutos",
      "• Regla: NUNCA operar después de una pérdida sin pausa",
      "",
      "2.4 La Regla de los 3 Trades Perdedores:",
      "Si pierdes 3 trades consecutivos, CIERRA TODO. Te levantas y no vuelves hasta la siguiente sesión."
    ]
  },
  {
    seccion: 3,
    titulo: "La Rutina Post-Mercado",
    contenido: [
      "La diferencia entre un trader estancado y uno que crece está en lo que hace DESPUÉS de cerrar la sesión."
    ],
    puntos: [
      "3.1 Journaling de la Sesión (15-20 min):",
      "• Número total de trades del día",
      "• Trades ganadores / perdedores / breakeven",
      "• P&L neto del día (en R, no en dólares)",
      "• ¿Respeté mi plan de trading? (1-10)",
      "• ¿Respeté mi riesgo máximo? (SÍ/NO)",
      "• ¿Respeté mis pausas? (SÍ/NO)",
      "• Mejor trade del día: ¿por qué funcionó?",
      "• Peor trade del día: ¿por qué fallé?",
      "• Emoción dominante durante la sesión",
      "• Nota para mí mismo mañana"
    ],
    tabla: {
      headers: ["Puntuación", "Significado", "Acción"],
      filas: [
        ["9-10", "Día excelente", "Celebra (con moderación)"],
        ["7-8", "Buen día", "Revisa qué mejorar"],
        ["5-6", "Día regular", "Analiza a fondo los errores"],
        ["1-4", "Mal día", "Tómate mañana de descanso"]
      ]
    }
  },
  {
    seccion: 4,
    titulo: "Construcción de Hábitos de Alto Rendimiento",
    contenido: [
      "La disciplina no es fuerza de voluntad — es un sistema de hábitos que funcionan incluso cuando no tienes ganas."
    ],
    puntos: [
      "• El Bucle del Hábito: SEÑAL → RUTINA → RECOMPENSA. (Alarma → Checklists → Sesión estructurada).",
      "• Habit Stacking (Apilamiento): 'Después de [HÁBITO ACTUAL], haré [NUEVO HÁBITO]'.",
      "• Regla de No Romper la Cadena: Marca en un calendario cada día completado.",
      "• Regla de los 2 Días: NUNCA saltes tu rutina 2 días seguidos.",
      "• Disparadores de Hábito: Misma hora, mismo lugar físico, misma música/silencio, misma bebida."
    ]
  },
  {
    seccion: 5,
    titulo: "El Diario de Trading (Journaling)",
    contenido: [
      "El journal no es un diario personal — es tu herramienta de análisis de desempeño más poderosa. Sin datos, estás operando a ciegas."
    ],
    tabla: {
      headers: ["Campo", "Qué registrar"],
      filas: [
        ["Fecha / Sesión / Instrumento", "DD/MM/AAAA | NY / London / Asia | XAUUSD, NQ, ES"],
        ["# Trades / Ganadores / Perdedores", "Métricas cuantitativas del día"],
        ["P&L en R / Win Rate / R:R Promedio", "Ganancia en unidades de riesgo (no en $)"],
        ["Factor de Beneficio", "Ganancia bruta / Pérdida bruta"],
        ["¿Respeté plan y riesgo 1%?", "Escala 1-10 y confirmación binaria (SÍ/NO)"],
        ["Emoción dominante / Nota del día", "Estado mental y lección accionable para mañana"]
      ]
    }
  },
  {
    seccion: 6,
    titulo: "Control de Impulsos y Autodisciplina",
    contenido: [
      "El scalper amateur opera por impulso. El scalper profesional opera por protocolo."
    ],
    puntos: [
      "• Overtrading (El Asesino Silencioso): Define un MÁXIMO de 5-8 trades por día. Espera 5 min entre operaciones.",
      "• Protocolo Anti-Revenge Trading: Pausa OBLIGATORIA de 15 minutos tras una pérdida. Camina y bebe agua.",
      "• Peligro de Desviación del Plan: Ganar rompiendo reglas refuerza el mal comportamiento (Suerte de principiante)."
    ]
  },
  {
    seccion: 7,
    titulo: "Gestión de la Energía y Fatiga Mental",
    contenido: [
      "El scalping consume más energía mental que la mayoría de profesiones. No gestionar tu energía es como operar borracho."
    ],
    puntos: [
      "• Ciclos Ultradianos: Concentración máxima de 90-120 min, seguidos de 15-20 min de descanso.",
      "• Nutrición: Proteína + carbohidratos complejos antes. Evitar exceso de cafeína (>2 tazas) y azúcar.",
      "• Sueño: Dormir <7h reduce la toma de decisiones un 30-40%.",
      "• Señales de Fatiga Mental: Entradas impulsivas 'porque sí', irritabilidad, sentir que 'ya no importa' (PELIGRO: cierra todo)."
    ]
  },
  {
    seccion: 8,
    titulo: "El Ciclo de Mejora Continua (PDCA)",
    contenido: [
      "El scalper profesional no busca ser perfecto — busca ser un 1% mejor cada día."
    ],
    puntos: [
      "1. PLAN (Planificar): Define tu plan de trading para la semana.",
      "2. DO (Hacer): Ejecuta tu plan durante las sesiones.",
      "3. CHECK (Verificar): Revisa tu journal y compara resultado vs plan.",
      "4. ACT (Actuar): Ajusta tu plan basado en lo aprendido.",
      "• Tasa de mejora: Mejorar 1% diario por 250 días te hace 12 veces mejor trader."
    ]
  },
  {
    seccion: 9,
    titulo: "Sábados y Domingos del Trader",
    contenido: [
      "Los fines de semana no son para olvidarse del trading — son para prepararse sin la presión de la pantalla."
    ],
    puntos: [
      "• Sábado (Día de Análisis): Revisar journal semanal, calcular métricas (Win Rate, R:R), analizar los 3 mejores y 3 peores trades, backtesting.",
      "• Domingo (Día de Educación & Preparación): Leer 1 capítulo de KIRAX Academy, revisar eventos macro con anticipación, visualizar sesiones exitosas.",
      "• Desconexión Estratégica: El descanso es parte directa del rendimiento."
    ]
  },
  {
    seccion: 10,
    titulo: "Rituales de Cierre y Desconexión",
    contenido: [
      "Tan importante como empezar bien es terminar bien. Sin un cierre adecuado, tu mente sigue operando fuera de horario."
    ],
    puntos: [
      "• Shutdown Ritual: Última entrada en journal -> Cerrar pestañas -> Apagar monitor -> Decir 'Sesión terminada'.",
      "• Regla de Desconexión Total: No mirar gráficos después del cierre, no hablar de trading fuera de horario.",
      "• Ritual Nocturno: Pantallas apagadas 1h antes de dormir, 7-8 horas de sueño constante."
    ]
  }
];

export const MODULE_2_EXAM_BANK = [
  {
    id: 101,
    seccion: "Sección 1: Rutina Pre-Mercado",
    pregunta: "¿Cuánto tiempo antes de la apertura del mercado debe comenzar la rutina pre-mercado del scalper?",
    opciones: [
      "A) 5 minutos",
      "B) 15 minutos",
      "C) 45 minutos",
      "D) 2 horas"
    ],
    respuestaCorrecta: 2,
    explicacion: "45 minutos permite completar los 3 checklists (físico 10m, mental 15m, técnico 10m) sin prisas."
  },
  {
    id: 102,
    seccion: "Sección 1: Rutina Pre-Mercado",
    pregunta: "¿Cuál es la Regla de Oro de la rutina pre-mercado?",
    opciones: [
      "A) Operar aunque te sientas cansado si hay buenas noticias",
      "B) Si falla CUALQUIERA de los 3 checklists (físico, mental, técnico), NO se opera ese día",
      "C) Aumentar el lotaje para compensar la falta de sueño",
      "D) Abrir la posición en los primeros 10 segundos de la sesión"
    ],
    respuestaCorrecta: 1,
    explicacion: "Un día sin operar preserva tu capital. Operar con un checklist fallido garantiza pérdidas."
  },
  {
    id: 103,
    seccion: "Sección 2: Rutina Durante la Sesión",
    pregunta: "¿Qué establece la Regla de los 3 Trades Perdedores?",
    opciones: [
      "A) Si pierdes 3 trades, cambia de indicador",
      "B) Si pierdes 3 trades consecutivos, CIERRA TODO y no vuelves a operar hasta la siguiente sesión",
      "C) Duplica el tamaño en el cuarto trade para recuperar",
      "D) Abre una cuenta demo"
    ],
    respuestaCorrecta: 1,
    explicacion: "Tres pérdidas seguidas indican que el mercado está errático o tu mente no está clara."
  },
  {
    id: 104,
    seccion: "Sección 2: Rutina Durante la Sesión",
    pregunta: "¿Qué debes verificar en el 'Ritual de Entrada' antes de hacer clic?",
    opciones: [
      "A) Si la vela es del color que te gusta",
      "B) 4 preguntas binarias (Setup en plan, R:R min 1:2, confluencia de 2 factores y riesgo max 1%)",
      "C) Lo que opinan los traders en Telegram",
      "D) Si el precio se movió más de 50 pips"
    ],
    respuestaCorrecta: 1,
    explicacion: "Si hay un solo 'NO' en el checklist de entrada, la orden se descarta inmediatamente."
  },
  {
    id: 105,
    seccion: "Sección 3: Rutina Post-Mercado",
    pregunta: "¿Cuál es el propósito principal de la rutina post-mercado?",
    opciones: [
      "A) Quejarse de los stops cazados",
      "B) Hacer Journaling (15-20 min), evaluar cumplimiento del plan y desconectar totalmente",
      "C) Dejar la plataforma abierta para ver qué hace el mercado de noche",
      "D) Calcular cuánto dinero vas a gastar el fin de semana"
    ],
    respuestaCorrecta: 1,
    explicacion: "El análisis post-sesión convierte la experiencia en aprendizaje acumulativo."
  },
  {
    id: 106,
    seccion: "Sección 4: Hábitos de Alto Rendimiento",
    pregunta: "¿Qué es el 'Habit Stacking' (Apilamiento de Hábitos)?",
    opciones: [
      "A) Hacer 10 tareas al mismo tiempo",
      "B) Vincular un nuevo hábito deseado inmediatamente después de uno ya consolidado",
      "C) Operar en 5 marcos de tiempo a la vez",
      "D) Cambiar de estrategia semanalmente"
    ],
    respuestaCorrecta: 1,
    explicacion: "Fórmula: 'Después de [HÁBITO ACTUAL], haré [NUEVO HÁBITO]' facilita la adopción natural."
  },
  {
    id: 107,
    seccion: "Sección 5: Diario de Trading",
    pregunta: "¿En qué unidades debe registrarse principalmente el P&L en un journal profesional?",
    opciones: [
      "A) En dólares americanos ($)",
      "B) En unidades de riesgo (R)",
      "C) En porcentaje de apalancamiento",
      "D) En criptomonedas"
    ],
    respuestaCorrecta: 1,
    explicacion: "Medir en R (múltiplos de riesgo) despersonaliza el dinero y enfoca la mente en la consistencia."
  },
  {
    id: 108,
    seccion: "Sección 6: Control de Impulsos",
    pregunta: "¿Por qué ganar una operación desviándote del plan de trading es peligroso?",
    opciones: [
      "A) Porque el broker te cobra más comisiones",
      "B) Porque el cerebro recibe una recompensa que REFUERZA el mal comportamiento (suerte de principiante)",
      "C) Porque reduce el Win Rate",
      "D) No es peligroso si ganas dinero"
    ],
    respuestaCorrecta: 1,
    explicacion: "La suerte de principiante valida la indisciplina y conduce a pérdidas masivas posteriores."
  },
  {
    id: 109,
    seccion: "Sección 7: Gestión de Energía",
    pregunta: "¿Qué son los Ciclos Ultradianos y cómo afectan al scalping?",
    opciones: [
      "A) Ciclos de la luna sobre el precio del oro",
      "B) Ciclos de 90-120 min de concentración seguidos de 15-20 min de fatiga. Exigen pausas obligatorias",
      "C) Periodos de 24 horas de operaciones",
      "D) Indicadores de volatilidad"
    ],
    respuestaCorrecta: 1,
    explicacion: "Operar más de 90 minutos continuos sin pausa degrada drásticamente la capacidad analítica."
  },
  {
    id: 110,
    seccion: "Sección 8: Mejora Continua",
    pregunta: "¿Qué significa el concepto de 'Una Cosa' en el ciclo de mejora del trader?",
    opciones: [
      "A) Tener un solo indicador en el gráfico",
      "B) Elegir UNA sola área de mejora por mes (ej: eliminar revenge trading) hasta dominarla completamente",
      "C) Hacer solo 1 trade por semana",
      "D) Operar un solo par toda la vida"
    ],
    respuestaCorrecta: 1,
    explicacion: "Intentar corregir 10 errores a la vez causa dispersión. Enfocarse en uno solo garantiza cambios duraderos."
  },
  {
    id: 111,
    seccion: "Sección 9: Fines de Semana",
    pregunta: "¿A qué debe dedicarse el sábado en la rutina del scalper profesional?",
    opciones: [
      "A) Operar en el mercado de criptomonedas con alto apalancamiento",
      "B) Análisis semanal profundo del journal (win rate, R:R, mejores/peores trades y backtesting)",
      "C) Ver gráficos durante 10 horas seguidas",
      "D) Ignorar todo lo relacionado con el trading"
    ],
    respuestaCorrecta: 1,
    explicacion: "El sábado es el día ideal para procesar datos semanales sin la presión del mercado en vivo."
  },
  {
    id: 112,
    seccion: "Sección 10: Rituales de Cierre",
    pregunta: "¿En qué consiste el 'Shutdown Ritual' (Ritual de Apagado)?",
    opciones: [
      "A) Apagar la PC repentinamente al perder un trade",
      "B) Secuencia estructurada: última entrada de journal, cerrar pestañas, apagar monitor y ancla verbal 'Sesión terminada'",
      "C) Dejar la plataforma abierta en segundo plano",
      "D) Programar órdenes automáticas nocturnas"
    ],
    respuestaCorrecta: 1,
    explicacion: "Marcarle un fin explícito a la sesión permite al cerebro descansar y previene el estrés crónico."
  },
  {
    id: 113,
    seccion: "Sección 6: Control de Impulsos",
    pregunta: "¿Cuál es el protocolo anti-revenge inmediato tras sufrir una pérdida?",
    opciones: [
      "A) Entrar inmediatamente en la dirección opuesta",
      "B) Pausa OBLIGATORIA de 15 minutos, levantarse de la silla, beber agua y analizar si el error fue propio o del mercado",
      "C) Aumentar el riesgo al 5% en la siguiente vela",
      "D) Abrir una cuenta en otro broker"
    ],
    respuestaCorrecta: 1,
    explicacion: "15 minutos permite que la amígdala se calme y la corteza prefrontal retome el control racional."
  },
  {
    id: 114,
    seccion: "Sección 7: Gestión de Energía",
    pregunta: "¿Cuál de las siguientes es una señal crítica de Fatiga Mental durante la sesión?",
    opciones: [
      "A) Mantener la respiración calmada 4-7-8",
      "B) Entradas impulsivas 'porque sí' y sentir que 'ya no importa el resultado'",
      "C) Esperar pacientemente el cierre de la vela de 5 minutos",
      "D) Revisar el calendario económico"
    ],
    respuestaCorrecta: 1,
    explicacion: "Sentir apatía o que 'ya no importa' es una bandera roja de agotamiento que exige cerrar la sesión."
  },
  {
    id: 115,
    seccion: "Sección 8: Mejora Continua",
    pregunta: "¿Cuál es la tasa de mejora acumulada si un trader mejora solo un 1% cada día de trading (250 días al año)?",
    opciones: [
      "A) 25%",
      "B) 12 veces mejor (~12x)",
      "C) 2.5 veces mejor",
      "D) Se mantiene igual"
    ],
    respuestaCorrecta: 1,
    explicacion: "El interés compuesto de pequeñas mejoras microscópicas transforma drásticamente el desempeño anual."
  }
];
