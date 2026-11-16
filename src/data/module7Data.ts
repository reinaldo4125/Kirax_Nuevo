export interface Module7SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_7_METADATA = {
  id: 7,
  titulo: "MÓDULO 7 — BOOKMAP INTERMEDIO: DEL RADAR AL FRANCOTIRADOR",
  subtitulo: "Academia KIRAX | Lectura Avanzada de Liquidez y Ejecución de Alta Precisión",
  objetivo: "Dominar la lectura avanzada de flujo de órdenes con CVD, detección e interpretación operativa de Icebergs, Absorción, Liquidez Multi-Timeframe y los 3 Setups Completos de Scalping.",
  duracionEstimada: "8 - 10 horas de estudio",
  totalPreguntasBanco: 500
};

export const MODULE_7_SECTIONS: Module7SectionContent[] = [
  {
    seccion: 1,
    titulo: "De la Lectura Básica a la Avanzada y Mentalidad de Francotirador",
    contenido: [
      "En el Módulo 6 aprendiste a LEER Bookmap: qué es el heatmap, cómo funciona el order book y cómo se representan las órdenes. En este Módulo 7 damos el salto de lector a OPERADOR: entender POR QUÉ la liquidez está ahí y PREDECIR el movimiento antes de que ocurra en el gráfico de velas.",
      "El scalper básico dispara a todo lo que se mueve. El francotirador espera, observa y dispara UNA sola bala en el momento perfecto. Bookmap intermedio es el telescopio de alta precisión que te convierte en francotirador."
    ],
    tabla: {
      headers: ["Dimensión Operativa", "Nivel Básico (Módulo 6)", "Nivel Intermedio Francotirador (Módulo 7)"],
      filas: [
        ["Heatmap", "Ver zonas rojas de calor", "Entender POR QUÉ están ahí y si se mantendrán o retirarán"],
        ["Icebergs", "Detectar que existe una orden", "Operar el Iceberg con precisión de ticks y R:R controlado"],
        ["CVD", "Leer si la línea sube o baja", "Anticipar reversiones con divergencias y filtros multi-timeframe"],
        ["Absorción", "Reconocer cuando el precio se frena", "Medir el timing exacto de entrada antes de la explosión"],
        ["Timeframes", "Usar un solo gráfico de liquidez", "Combinar la pirámide de liquidez multi-timeframe (4H / 1H / 1M)"]
      ]
    },
    puntos: [
      "• Paciencia Cirúrgica: El 80% del tiempo NO hay setup. El trader profesional sabe esperar sin forzar la máquina.",
      "• Precisión sobre Cantidad: Una sola entrada limpia con 3 confirmaciones vale más que 10 operaciones mediocres impulsivas.",
      "• Convicción Total: Si no ves la liquidez clara y confirmada por CVD, NO entras. Sin excepciones."
    ]
  },
  {
    seccion: 2,
    titulo: "El CVD Avanzado: Divergencias Maestras y Relación con Liquidez",
    contenido: [
      "El CVD (Cumulative Volume Delta) clasifica cada transacción como compra agresiva al ask o venta agresiva al bid. La línea de delta te revela si el flujo neto es comprador o vendedor en tiempo real.",
      "Las divergencias entre el precio y el CVD son la señal maestra de reversión más confiable que ofrece el flujo de órdenes."
    ],
    tabla: {
      headers: ["Tipo de Divergencia", "Comportamiento del Precio", "Comportamiento del CVD", "Señal Generada"],
      filas: [
        ["Divergencia Alcista (Bullish)", "Hace Mínimo Más Bajo (LL)", "Hace Mínimo Más Alto (HL)", "Reversión al alza inminente (Absorción de ventas)"],
        ["Divergencia Bajista (Bearish)", "Hace Máximo Más Alto (HH)", "Hace Máximo Más Bajo (LH)", "Reversión a la baja inminente (Absorción de compras)"],
        ["Divergencia Oculta Alcista", "Hace Mínimo Más Alto (HL)", "Hace Mínimo Más Bajo (LL)", "Continuación de la tendencia alcista"],
        ["Divergencia Oculta Bajista", "Hace Máximo Más Bajo (LH)", "Hace Máximo Más Alto (HH)", "Continuación de la tendencia bajista"]
      ]
    },
    puntos: [
      "• REGLAS DEL CVD CON HEATMAP:",
      "1) CVD subiendo + Precio acercándose a muro rojo de ventas = Probable ruptura alcista del muro.",
      "2) CVD bajando + Precio acercándose a muro rojo de compras = Probable ruptura bajista del muro.",
      "3) CVD plano + Precio en muro rojo = El muro va a aguantar; prepárate para operar el rebote."
    ]
  },
  {
    seccion: 3,
    titulo: "Icebergs de Alta Precisión: Checklist de 4 Puntos y Operación",
    contenido: [
      "Un Iceberg real no es simplemente una mancha blanca o roja. Es una zona que se RELLENA constantemente: cada vez que el precio la golpea, las órdenes se ejecutan parcialmente y NUEVAS órdenes aparecen para reponerla sin que el tamaño visible disminuya."
    ],
    puntos: [
      "CHECKLIST DE 4 PUNTOS PARA CONFIRMAR UN ICEBERG REAL:",
      "1) Permanencia: La zona no desaparece tras ser tocada por el precio.",
      "2) Intensidad Constante: El color se mantiene blanco o rojo intenso durante minutos.",
      "3) Recarga Inmediata: Tras cada ejecución parcial en Volume Dots, vuelve a brillar con fuerza.",
      "4) Volumen Desproporcionado: El volumen transado real en Volume Dots es muy superior al tamaño visible inicial.",
      "• OPERATIVA DEL ICEBERG DE COMPRA: Espera el toque -> Confirma que el CVD empieza a girar al alza -> Entra LONG -> Stop Loss justo debajo del Iceberg (3-5 ticks) -> Take Profit en el siguiente muro rojo de ventas."
    ]
  },
  {
    seccion: 4,
    titulo: "Absorción Avanzada, Agotamiento y Falsas Rupturas",
    contenido: [
      "El 70% de las rupturas de niveles de soporte/resistencia son FALSAS (Fakeouts). Entender el ciclo Absorción -> Agotamiento -> Ruptura te salva de quedar atrapado en trampas bancarias."
    ],
    tabla: {
      headers: ["Fase del Ciclo", "Qué ves en Bookmap", "Acción del Trader Francotirador"],
      filas: [
        ["1. Absorción", "El precio golpea repetidamente la zona roja con volumen muy alto", "Esperar. NO entrar todavía mientras el muro resista."],
        ["2. Agotamiento", "La zona roja empieza a achicarse y el CVD pierde fuerza", "Preparar la orden de entrada."],
        ["3. Ruptura", "El precio atraviesa el nivel con volumen creciente y CVD impulsivo", "Entra en el RETROCESO hacia la zona rota (no en la 1ra vela)."],
        ["4. Continuación", "El CVD confirma la dirección con expansión de delta", "Mantener la posición ajustando el Stop."],
        ["5. Distribución", "Aparece nueva liquidez contraria y el CVD se aplana", "Tomar ganancias de inmediato."]
      ]
    },
    puntos: [
      "• REGLA DE ORO KIRAX SOBRE RUPTURAS: Nunca entres en la primera vela de la ruptura. Espera siempre el retesteo o retroceso a la zona rota para confirmar que el CVD respalda el movimiento."
    ]
  },
  {
    seccion: 5,
    titulo: "Liquidez Multi-Timeframe y la Pirámide de Liquidez KIRAX",
    contenido: [
      "Los jugadores institucionales operan en TODOS los timeframes simultáneamente. Un fondo puede estar comprando en el gráfico diario, vendiendo en el de 1 hora y acumulando en el de 1 minuto.",
      "Si solo miras un timeframe, estás viendo solo un fragmento del tablero."
    ],
    tabla: {
      headers: ["Timeframe", "Rol en el Análisis", "Elemento Principal a Buscar"],
      filas: [
        ["Diario / 4 Horas", "Dirección Estructural", "Zonas de liquidez institucional mayores, máximos/mínimos de la semana"],
        ["1 Hora / 15 Minutos", "Contexto Operativo", "Niveles de batalla del día, Order Blocks y CVD macro"],
        ["5 Minutos / 1 Minuto", "Timing de Entrada Precision", "Icebergs, absorción en vivo, Volume Dots y gatillo CVD"]
      ]
    },
    puntos: [
      "• Regla de Confluencia Multi-Timeframe: Solo entras cuando la liquidez de AL MENOS DOS timeframes apunta en la misma dirección.",
      "• Ejemplo A+: Dirección 4H alcista + Liquidez 1M en zona de compras = LONG de alta probabilidad.",
      "• Conflicto: Dirección 4H alcista + Liquidez 1M de ventas = NO OPERAR, esperar definición."
    ]
  },
  {
    seccion: 6,
    titulo: "Los 3 Setups Completos de Scalping con Bookmap",
    contenido: [
      "Guía paso a paso para la ejecución impecable de los 3 setups principales del sistema KIRAX Bookmap Intermedio."
    ],
    tabla: {
      headers: ["Parámetro", "Setup 1: Rebote en Muro", "Setup 2: Ruptura con Absorción", "Setup 3: Caza de Iceberg"],
      filas: [
        ["Confirmación Clave", "Precio en muro + CVD girando a favor", "Acumulación previa + CVD impulsivo + Retest", "Checklist 4 puntos + Reacción en CVD"],
        ["Ubicación Stop Loss", "Unos ticks detrás del muro protector", "Justo debajo/arriba del nivel roto", "3-5 ticks detrás de la orden Iceberg"],
        ["Take Profit", "Siguiente zona de liquidez relevante", "Siguiente muro rojo de la tendencia", "Zona de liquidez opuesta más cercana"],
        ["Ratio R:R Mínimo", "1:2 Mínimo", "1:3 Mínimo", "1:2 Mínimo"],
        ["Tasa de Acierto Est.", "60% - 70%", "50% - 60%", "70% - 80% (Infrecuente)"]
      ]
    }
  },
  {
    seccion: 7,
    titulo: "Gestión de Riesgo Avanzada, Stop Loss Inteligente y Stop Hunts",
    contenido: [
      "En Bookmap el Stop Loss NUNCA es un número arbitrario ni fijo. Es una posición estratégica colocada detrás de la estructura de liquidez visible que invalida tu tesis.",
      "STOP HUNTS (CACERÍA DE STOPS): Los institucionales mueven el precio hacia niveles con concentración de stops para activar liquidez rápida antes de rebotar."
    ],
    puntos: [
      "• Cómo Protegerte de los Stop Hunts: 1) Nunca coloques tu stop en niveles obvios (máximos/mínimos exactos de velas), 2) Coloca tu stop detrás del muro o zona de liquidez real que protege tu posición, 3) Usa el ATR para agregar un margen de seguridad dinámico."
    ]
  },
  {
    seccion: 8,
    titulo: "El Journal de Liquidez y las 5 Métricas de Desempeño",
    contenido: [
      "El Journal de Bookmap registra la LECTURA de liquidez antes de ingresar al trade, permitiendo auditar la calidad del proceso de decisión independientemente del resultado financiero del trade individual."
    ],
    tabla: {
      headers: ["Campo a Registrar", "Datos Específicos de Flujo", "Propósito de la Auditoría"],
      filas: [
        ["Zona de Liquidez", "Nivel exacto del muro/iceberg en el Heatmap", "Verificar si la zona identificada fue real o spoofing"],
        ["CVD Previo", "Dirección y pendiente del delta al momento de entrar", "Validar si el flujo respaldaba la dirección"],
        ["Tipo de Setup", "Rebote / Ruptura con Absorción / Caza de Iceberg", "Medir cuál es tu setup con mayor ventaja estadística"],
        ["Lectura Correcta?", "Evaluación Sí / No del comportamiento de flujo", "Separar buena lectura con mala varianza de un error real"]
      ]
    },
    puntos: [
      "• LAS 5 MÉTRICAS OBLIGATORIAS DE AUDITORÍA: 1) Win rate por tipo de setup, 2) Ratio R:R promedio logrado, 3) Tasa de lecturas correctas de flujo, 4) Tiempo promedio de espera hasta la entrada, 5) Número de operaciones fuera de plan."
    ]
  },
  {
    seccion: 9,
    titulo: "Errores Fatales del Nivel Intermedio y la Regla de las 3 Confirmaciones",
    contenido: [
      "Los 7 errores mortales que destruyen cuentas en el nivel intermedio y la regla inviolable para la ejecución."
    ],
    puntos: [
      "LOS 7 ERRORES MORTALES DEL NIVEL INTERMEDIO:",
      "1. Entrar solo por ver un muro rojo sin confirmación del CVD.",
      "2. Operar en contra de la dirección del timeframe superior (4H/1H).",
      "3. Colocar el Stop Loss en zonas obvias vulnerables a Stop Hunts.",
      "4. Confundir la trampa de Spoofing con liquidez real.",
      "5. Sobreoperar tras sufrir rachas de pérdida (Revenge Trading).",
      "6. Ignorar las divergencias claras del CVD.",
      "7. Mover o ampliar el Stop Loss durante la operación para 'darle espacio'.",
      "• REGLA DE LAS 3 CONFIRMACIONES OBLIGATORIAS: 1) Estructura de liquidez clara (Muro, Iceberg o Absorción), 2) CVD apuntando en tu dirección, 3) Confluencia con el timeframe superior. Si falta UNA, NO HAY OPERACIÓN."
    ]
  },
  {
    seccion: 10,
    titulo: "Integración Final y Rutina Diaria del Francotirador",
    contenido: [
      "Resumen de la rutina operativa diaria en 5 pasos para integrar Bookmap Intermedio con el sistema global KIRAX."
    ],
    puntos: [
      "RUTINA DIARIA DEL FRANCOTIRADOR KIRAX:",
      "1. Pre-Mercado: Revisa calendario económico y marca zonas de liquidez mayor en 4H y 1H.",
      "2. Apertura de Sesión: Observa el CVD macro para definir el sesgo del día.",
      "3. Durante la Sesión: Espera con paciencia quirúrgica el setup completo con la Regla de las 3 Confirmaciones.",
      "4. Ejecución: Entra con precisión, Stop Loss estratégico detrás del muro y Take Profit en la siguiente zona.",
      "5. Post-Cierre: Registra la lectura de flujo en el Journal de Liquidez y audita tus métricas."
    ]
  }
];

export const MODULE_7_EXAM_BANK = [
  {
    id: 601,
    seccion: "Sección 1: Lectura Avanzada",
    pregunta: "¿Cuál es la principal diferencia entre un trader básico y un francotirador avanzado en Bookmap?",
    opciones: [
      "A) El francotirador lee el flujo de órdenes como una historia continua y opera solo con 3 confirmaciones alineadas",
      "B) El francotirador usa 10 monitores de pantalla",
      "C) El básico solo opera en gráfico diario",
      "D) El francotirador no utiliza Stop Loss"
    ],
    respuestaCorrecta: 0,
    explicacion: "El nivel avanzado exige pasar de ver manchas de color aisladas a interpretar la narrativa continua de liquidez, absorción y delta antes de ejecutar."
  },
  {
    id: 602,
    seccion: "Sección 2: CVD Avanzado",
    pregunta: "¿Qué indica una Divergencia Bajista Regular entre el Precio y el CVD?",
    opciones: [
      "A) El precio marca un Máximo Más Alto (HH), pero el CVD marca un Máximo Más Bajo (LH), señalando agotamiento comprador y probable reversión a la baja",
      "B) El precio y el CVD suben en paralelo con fuerza",
      "C) El precio cae verticalmente",
      "D) Que los vendedores han abandonado el mercado"
    ],
    respuestaCorrecta: 0,
    explicacion: "La divergencia bajista en CVD demuestra que las nuevas subidas de precio no están respaldadas por volumen comprador neto agresivo, siendo absorbidas por ventas."
  },
  {
    id: 603,
    seccion: "Sección 2: CVD Avanzado",
    pregunta: "¿Qué significa que el CVD esté completamente PLANO mientras el precio llega a un muro rojo de ventas?",
    opciones: [
      "A) Que el volumen comprador agresivo es débil y por lo tanto el muro rojo de ventas aguantará, siendo ideal para buscar un rebote",
      "B) Que el muro rojo va a romper inmediatamente con violencia",
      "C) Que hay que comprar de inmediato",
      "D) Que el mercado se ha detenido"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un CVD plano refleja falta de volumen agresivo al ask; sin compradores agresivos embrutecidos, los muros de contención se mantienen firmes."
  },
  {
    id: 604,
    seccion: "Sección 3: Icebergs de Alta Precisión",
    pregunta: "¿Cuál de estos criterios forma parte del Checklist de 4 Puntos para confirmar un Iceberg Real?",
    opciones: [
      "A) Recarga constante: tras cada ejecución parcial en Volume Dots, la zona vuelve a brillar manteniendo su intensidad cromática",
      "B) La mancha desaparece inmediatamente al ser rozada por el precio",
      "C) El volumen transado es nulo",
      "D) Aparece y desaparece cada 2 segundos"
    ],
    respuestaCorrecta: 0,
    explicacion: "La firma característica de una orden Iceberg institucional es la reposición automática e instantánea de órdenes limitadas cada vez que el precio consume un bloque."
  },
  {
    id: 605,
    seccion: "Sección 4: Absorción & Falsas Rupturas",
    pregunta: "¿Por qué el 70% de las rupturas de niveles técnicos tradicionales son falsas en el mercado?",
    opciones: [
      "A) Porque los institucionales usan la liquidez de los traders de rupturas para absorber sus propias órdenes y revertir el precio",
      "B) Por errores del software de trading",
      "C) Porque los bancos no miran los gráficos",
      "D) Porque las velas japonesas no funcionan"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las falsas rupturas son generadas intencionadamente para activar los Stop Loss de minoristas y llenar órdenes institucionales antes de girar el mercado."
  },
  {
    id: 606,
    seccion: "Sección 4: Absorción & Falsas Rupturas",
    pregunta: "¿Cuál es la regla sagrada de KIRAX para operar Rupturas con Absorción?",
    opciones: [
      "A) Nunca entrar en la primera vela de la ruptura; esperar el retroceso o retesteo a la zona rota para confirmar que el CVD respalda el movimiento",
      "B) Entrar con orden de mercado a ciegas antes del cierre de vela",
      "C) Usar el máximo apalancamiento disponible",
      "D) Vender cuando todo el mundo compra"
    ],
    respuestaCorrecta: 0,
    explicacion: "Esperar el retesteo confirma que la zona rota se ha transformado de resistencia a soporte (o viceversa) con volumen y delta reales."
  },
  {
    id: 507,
    seccion: "Sección 5: Liquidez Multi-Timeframe",
    pregunta: "¿Cómo se organiza la Pirámide de Liquidez Multi-Timeframe en KIRAX?",
    opciones: [
      "A) Gráficos de 4H/Diario definen la Dirección Estructural; 1H/15M el Contexto Operativo; 5M/1M la Precisión y Timing de Entrada",
      "B) Gráficos de 1 minuto definen la tendencia macro de la semana",
      "C) Todos los timeframes tienen la misma importancia idéntica",
      "D) Se ignora el gráfico diario en scalping"
    ],
    respuestaCorrecta: 0,
    explicacion: "El análisis top-down establece la tendencia mayor en 4H/Diario y reserva los gráficos de minutos para refinar el punto de entrada con Bookmap."
  },
  {
    id: 608,
    seccion: "Sección 6: Setups de Scalping",
    pregunta: "¿Cuál es la condición de entrada para el Setup 1 (Rebote en Muro de Liquidez)?",
    opciones: [
      "A) El precio toca el muro rojo + presencia de absorción + el CVD empieza a girar a favor del rebote",
      "B) El precio atraviesa el muro con volumen explosivo",
      "C) El CVD marca una divergencia en contra",
      "D) No haber mirado el libro de órdenes"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Setup 1 exige la confluencia del muro visible con la deceleración del flujo y el giro del delta acumulado."
  },
  {
    id: 609,
    seccion: "Sección 7: Gestión de Riesgo",
    pregunta: "¿Dónde se posiciona un 'Stop Loss Inteligente' al operar una Caza de Iceberg en Bookmap?",
    opciones: [
      "A) Estratégicamente colocado 3-5 ticks por detrás del nivel de la orden Iceberg que protege la posición",
      "B) A 100 pips de distancia fija",
      "C) En el precio exacto del Iceberg",
      "D) No se utiliza Stop Loss"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Iceberg actúa como una muralla institucional; si el precio supera el Iceberg, la tesis se ha invalidado y se debe salir inmediatamente con pérdida reducida."
  },
  {
    id: 610,
    seccion: "Sección 7: Gestión de Riesgo",
    pregunta: "¿Qué es un 'Stop Hunt' (Caza de Stops) y cómo se visualiza en Bookmap?",
    opciones: [
      "A) Un movimiento rápido del precio hacia una zona de liquidez fina donde se acumulan stops obvios, rebotando violentamente tras activarlos",
      "B) Una caída lenta de 5 horas sin volumen",
      "C) Un fallo del servidor de datos",
      "D) Un aumento del spread en la sesión asiática"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Stop Hunt se observa como una barrida limpia hacia zonas de stops minoristas obvias para capturar liquidez inmediata antes de revertir."
  },
  {
    id: 611,
    seccion: "Sección 8: Journal de Liquidez",
    pregunta: "¿Qué evalúa la métrica 'Tasa de Lecturas Correctas' en el Journal de Liquidez?",
    opciones: [
      "A) Si la interpretación de flujo, CVD y liquidez fue acertada antes del trade, independientemente del resultado financiero final",
      "B) La cantidad de dinero ganada en la semana",
      "C) Cuántos indicadores usaste en TradingView",
      "D) El número de horas frente a la pantalla"
    ],
    respuestaCorrecta: 0,
    explicacion: "Separar la calidad de la lectura del resultado aleatorio de un solo trade es fundamental para medir si el proceso se está aplicando correctamente."
  },
  {
    id: 612,
    seccion: "Sección 9: Errores Fatales",
    pregunta: "¿Por qué mover o ampliar el Stop Loss durante una operación perdedora es un Error Mortal?",
    opciones: [
      "A) Porque destruye la gestión de riesgo predefinida y expone la cuenta a rachas de pérdida catastróficas por indisciplina emocional",
      "B) Porque el broker te cobra una penalización",
      "C) Porque cambia el color del Heatmap",
      "D) Porque no afecta en nada el resultado"
    ],
    respuestaCorrecta: 0,
    explicacion: "Ampliar el stop en caliente viola la máxima del trading profesional: aceptar la pérdida planificada y preservar el capital."
  },
  {
    id: 613,
    seccion: "Sección 9: Errores Fatales",
    pregunta: "¿Qué exige la Regla de las 3 Confirmaciones del Módulo 7 de KIRAX?",
    opciones: [
      "A) 1) Estructura de liquidez (Muro/Iceberg/Absorción), 2) CVD apuntando en la dirección, 3) Confluencia con Timeframe Superior",
      "B) Esperar 3 horas en la sesión",
      "C) Colocar 3 órdenes seguidas",
      "D) Consultar 3 sitios web de noticias"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las 3 confirmaciones obligatorias garantizan que el trade cuenta con respaldo de liquidez, flujo dinámico de delta y tendencia estructural mayor."
  },
  {
    id: 614,
    seccion: "Sección 10: Integración Final",
    pregunta: "¿Cuál es el primer paso en la Rutina Diaria del Francotirador KIRAX antes de abrir Bookmap?",
    opciones: [
      "A) Revisar el calendario económico y mapear las zonas de liquidez mayor en gráficos de 4H y 1H",
      "B) Meter una orden de compra en el oro de inmediato",
      "C) Configurar el apalancamiento al máximo",
      "D) Cerrar el diario de trading"
    ],
    respuestaCorrecta: 0,
    explicacion: "El análisis pre-mercado establece los límites macro y los eventos de alto impacto para evitar sorpresas durante la sesión activa."
  },
  {
    id: 615,
    seccion: "Sección 8: Journal de Liquidez",
    pregunta: "¿Cuál es el Ratio Riesgo:Recompensa (R:R) mínimo aceptable en los setups de Bookmap Intermedio?",
    opciones: [
      "A) Ratio R:R Mínimo 1:2 (arriesgar 1 para buscar al menos 2 en beneficio)",
      "B) Ratio 1:0.5 (arriesgar 2 para ganar 1)",
      "C) Sin ratio predefinido",
      "D) Ratio 1:1 en todas las operaciones"
    ],
    respuestaCorrecta: 0,
    explicacion: "Exigir un R:R mínimo de 1:2 asegura esperanza matemática positiva constante aun cuando la tasa de aciertos sea moderada."
  }
];
