export interface Module6SectionContent {
  seccion: number;
  titulo: string;
  subtitulo?: string;
  contenido: string[];
  tabla?: { headers: string[]; filas: string[][] };
  puntos?: string[];
}

export const MODULE_6_METADATA = {
  id: 6,
  titulo: "MÓDULO 6 — BOOKMAP BÁSICO: EL RADAR DE LIQUIDEZ",
  subtitulo: "Academia KIRAX | Visión Institucional y Flujo de Órdenes en Tiempo Real",
  objetivo: "Comprender la lectura del Heatmap, Volume Dots, CVD, detección de Icebergs, Spoofing, Absorción y aplicar estrategias de scalping basadas en la liquidez real del libro de órdenes.",
  duracionEstimada: "8 - 10 horas de estudio",
  totalPreguntasBanco: 500
};

export const MODULE_6_SECTIONS: Module6SectionContent[] = [
  {
    seccion: 1,
    titulo: "¿Qué es Bookmap? La Visión Institucional",
    contenido: [
      "Bookmap no es un indicador técnico tradicional; es una ventana directa al motor del mercado. Mientras que los gráficos de velas japonesas muestran lo que YA PASÓ, Bookmap te enseña lo que ESTÁ PASANDO y lo que está POR PASAR.",
      "El 90% de los traders minoristas opera a ciegas basándose exclusivamente en velas cerradas. En cambio, el 100% de los traders institucionales y algoritmos opera con flujo de órdenes y profundidad de mercado en tiempo real."
    ],
    tabla: {
      headers: ["Pilar de Bookmap", "Qué Representa en Pantalla", "Información Clave Revelada"],
      filas: [
        ["Heatmap (Mapa de Calor)", "Puntos de calor coloreados por nivel de precio", "Dónde están colocados los muros de órdenes limitadas gigantes"],
        ["Volume Dots (Burbujas)", "Burbujas que crecen sobre el mapa de precios", "Dónde se está peleando el volumen transado en tiempo real"],
        ["CVD (Cumulative Volume Delta)", "Línea/Barra de diferencia acumulada", "Quién está ganando la batalla: Compradores vs Vendedores agresivos"]
      ]
    },
    puntos: [
      "• COMPARATIVA CLAVE: En velas ves soportes dibujados manualmente; en Bookmap ves la liquidez real visible depositada por los bancos.",
      "• TIMING DE ENTRADA: Con velas entras por reacción (al cierre de la vela); con Bookmap entras por anticipación (antes de que la liquidez sea consumida).",
      "• DETECCIÓN DE ICEBERGS: Los algoritmos ocultan órdenes gigantes que son invisibles en velas, pero perfectamente detectables por absorción en Bookmap."
    ]
  },
  {
    seccion: 2,
    titulo: "La Interfaz de Bookmap y Código de Colores Universal",
    contenido: [
      "La pantalla principal de Bookmap centra el mapa de calor con el precio actual en la línea horizontal central, el eje de precios a la derecha y la barra de CVD en la parte inferior.",
      "El mapa de calor utiliza una escala cromática universal para medir la intensidad de la liquidez disponible en el libro de órdenes (Order Book)."
    ],
    tabla: {
      headers: ["Color de Liquidez", "Nivel de Intensidad", "Significado Operativo"],
      filas: [
        ["Azul Oscuro", "Baja Liquidez", "Pocas órdenes esperando — zona de baja relevancia"],
        ["Verde", "Liquidez Normal", "Profundidad promedio habitual de mercado"],
        ["Amarillo", "Media-Alta", "Acumulación significativa de órdenes limitadas"],
        ["Naranja", "Alta Intensidad", "Zona de batalla — órdenes grandes de institucionales"],
        ["Rojo", "Muy Alta (Muro)", "Muro de liquidez institucional (Soporte/Resistencia Real)"],
        ["Blanco", "Extrema / Crítica", "Probable orden Iceberg — zona de altísimo interés"]
      ]
    },
    puntos: [
      "• CONFIGURACIÓN INICIAL PARA ORO (XAUUSD): Instrumento XAUUSD Spot, combinación Heatmap + Volume Dots, zoom de 20-30 niveles de precio y velocidad 1x en tiempo real.",
      "• SESIONES RECOMENDADAS: Operar exclusivamente durante las sesiones de Londres y Nueva York (NY Open / Solapamiento), donde la liquidez institucional alcanza su máximo esplendor."
    ]
  },
  {
    seccion: 3,
    titulo: "El Heatmap y el Efecto Imán del Precio",
    contenido: [
      "El Heatmap es la radiografía del libro de órdenes limitadas. Un muro rojo por encima del precio actual representa un Muro de Ventas (Resistencia Real). Un muro rojo por debajo representa un Muro de Compras (Soporte Real).",
      "REGLA DE ORO DE LA LIQUIDEZ: El precio es atraído hacia la liquidez como un imán. Los market makers y creadores de mercado necesitan zonas con alta liquidez para ejecutar sus órdenes masivas sin sufrir deslizamientos (slippage)."
    ],
    puntos: [
      "• Comportamiento al tocar un Muro Rojo: Pueden ocurrir 3 eventos: 1) Rebote (el muro frena el precio), 2) Absorción (el muro se consume silenciosamente), 3) Ruptura (la presión rompe el muro).",
      "• Huecos de Liquidez (Liquidity Gaps): Zonas azules con baja concentración de órdenes. El precio tiende a atravesar los huecos a gran velocidad porque no hay barreras que lo frenen."
    ]
  },
  {
    seccion: 4,
    titulo: "El Order Book, Desbalance y Detección de Spoofing",
    contenido: [
      "A la izquierda del precio se representan las órdenes de compra (Bids) y a la derecha las órdenes de venta (Asks). Un desbalance donde Bids >> Asks indica presión compradora; cuando Asks >> Bids indica presión vendedora.",
      "SPOOFING (LA TRAMPA INSTITUCIONAL): Ocurre cuando un jugador grande coloca un muro enorme de órdenes (rojo/blanco) para engañar al mercado y generar pánico, retirando la orden segundos antes de que el precio la toque."
    ],
    tabla: {
      headers: ["Característica", "Liquidez Real Institucional", "Falsa Liquidez (Spoofing)"],
      filas: [
        ["Construcción", "Se construye de forma gradual con anticipación", "Aparece de golpe en cuestión de segundos"],
        ["Comportamiento", "Se mantiene firmemente al acercarse el precio", "Desaparece repentinamente justo antes del impacto"],
        ["Reacción del Precio", "El precio rebota o la consume con volumen", "El precio se mueve en dirección OPUESTA a la zona falsa"]
      ]
    },
    puntos: [
      "• REGLA KIRAX ANTI-SPOOFING: Si una zona de liquidez no existía hace 30 segundos y aparece de golpe, desconfía. La liquidez real tiene permanencia en el tiempo."
    ]
  },
  {
    seccion: 5,
    titulo: "Volume Dots — Lectura de Batallas y Volumen Transado",
    contenido: [
      "Los Volume Dots son burbujas que aparecen directamente sobre el mapa de calor representando el volumen real negociado por ejecuciones de mercado (Market Orders).",
      "Muestra la diferencia entre la liquidez esperada (Heatmap) y las órdenes que realmente se están ejecutando (Volume Dots)."
    ],
    tabla: {
      headers: ["Patrón de Volume Dots", "Significado en el Flujo", "Implicación Operativa"],
      filas: [
        ["Burbujas Gigantes en Rango", "Acumulación o Distribución agresiva", "El precio se prepara para una ruptura explosiva"],
        ["Burbujas Creciendo en Dirección", "Momentum confirmado por compras/ventas", "La tendencia tiene fuerza institucional sólida"],
        ["Burbujas Pequeñas en Tendencia", "Falta de convicción o agotamiento", "Posible reversión cercana por falta de combustible"],
        ["Burbuja Gigante en Muro Rojo", "Batalla crítica de rechazo o absorción", "Nivel decisivo de soporte o resistencia"]
      ]
    }
  },
  {
    seccion: 6,
    titulo: "CVD (Cumulative Volume Delta) — El Medidor de Dominio",
    contenido: [
      "El CVD (Cumulative Volume Delta) acumula la diferencia entre el volumen de compra agresivo al ask y el volumen de venta agresivo al bid a lo largo de la sesión.",
      "Responde a la pregunta crucial: ¿Quién está ganando la batalla en tiempo real? CVD subiendo = Compradores al mando. CVD bajando = Vendedores al mando."
    ],
    tabla: {
      headers: ["Tipo de Divergencia CVD", "Acción del Precio", "Comportamiento del CVD", "Señal Generada"],
      filas: [
        ["Divergencia Alcista en CVD", "Precio hace un Mínimo Más Bajo", "CVD hace un Mínimo Más Alto", "Compradores absorbiendo las ventas -> Entrada Long A+"],
        ["Divergencia Bajista en CVD", "Precio hace un Máximo Más Alto", "CVD hace un Máximo Más Bajo", "Vendedores absorbiendo las compras -> Entrada Short A+"],
        ["CVD Plano con Precio Subiendo", "Precio sube impulsado sin volumen", "CVD se mantiene plano o cae", "Subida 'hueca' sin respaldo -> Falsa ruptura / Trampa"]
      ]
    }
  },
  {
    seccion: 7,
    titulo: "Icebergs y Órdenes Ocultas Institucionales",
    contenido: [
      "Un Iceberg es una orden gigante que una institución fragmenta en cientos de pequeñas órdenes para comprar o vender miles de contratos sin disparar el precio antes de completar su ejecución.",
      "Solo se ve la punta de la orden en el libro visible, pero el 90% restante permanece oculto."
    ],
    puntos: [
      "• Pistas de un Iceberg en Bookmap: 1) Zona blanca/roja persistente que no disminuye al ser impactada, 2) Absorción repetida sin movimiento de precio, 3) Volume Dots gigantes acumulándose en el mismo tick exacto, 4) CVD moviéndose con fuerza en dirección opuesta al precio.",
      "• ESTRATEGIA DE CAZA DE ICEBERGS: Cuando detectes un Iceberg de compra, entra en Long con Stop Loss ceñido justo detrás del nivel de la orden oculta."
    ]
  },
  {
    seccion: 8,
    titulo: "Absorción, Agotamiento y el Ciclo Absorción-Explosión",
    contenido: [
      "La Absorción es el fenómeno más importante en Bookmap: un lado del mercado absorbe todas las órdenes del lado contrario sin permitir que el precio avance.",
      "Funciona como un agujero negro financiero. Cuando el lado agresivo se queda sin munición, el precio explota en la dirección del lado que estaba absorbiendo."
    ],
    tabla: {
      headers: ["Fase del Ciclo", "Descripción del Comportamiento", "Acción del Trader KIRAX"],
      filas: [
        ["Fase 1: Aproximación", "El precio se acerca a una zona de liquidez institucional", "Identificar nivel y preparar vigilancia"],
        ["Fase 2: Absorción", "Mucho volumen en Volume Dots, pero precio no avanza", "Confirmar divergencia en CVD y posicionarse"],
        ["Fase 3: Agotamiento", "El bando atacante se queda sin órdenes de mercado", "Entrar justo antes o al inicio del movimiento"],
        ["Fase 4: Explosión", "El precio se dispara en la dirección del bando absorbedor", "Aprovechar el impulso rápido y gestionar el trade"],
        ["Fase 5: Siguiente Zona", "El precio busca la siguiente zona de liquidez del heatmap", "Colocar Take Profit en el siguiente muro rojo"]
      ]
    }
  },
  {
    seccion: 9,
    titulo: "Estrategias Básicas de Scalping con Bookmap",
    contenido: [
      "Tres estrategias operativas de alta probabilidad diseñadas específicamente para aprovechar la lectura de Bookmap en Oro y activos volátiles."
    ],
    puntos: [
      "1. REBOTE EN MURO DE LIQUIDEZ: Identifica un muro rojo/blanco estable -> Espera el toque -> Confirma Volume Dots y rebote en CVD -> Entra con Stop Loss de 5-10 ticks detrás del muro.",
      "2. RUPTURA CON ABSORCIÓN: Identifica resistencia tocada múltiples veces -> Observa como las órdenes del muro disminuyen con Volume Dots masivos -> Entra cuando el nivel se rompe con volumen.",
      "3. CAZA DE ICEBERGS: Identifica una zona blanca que se repone constantemente -> Espera el segundo o tercer toque -> Entra a favor del Iceberg con R:R mínimo 1:2.",
      "CHECKLIST DE ENTRADA (5 PREGUNTAS): 1) ¿Hay liquidez clara?, 2) ¿Volume Dots confirman actividad?, 3) ¿CVD está alineado?, 4) ¿Precio en zona ideal?, 5) ¿SL detrás del muro?"
    ]
  },
  {
    seccion: 10,
    titulo: "Integración a la Pirámide KIRAX y Errores Fatales",
    contenido: [
      "Bookmap NO es un sistema independiente de trading; es el filtro definitivo de confirmación que se integra en la Pirámide de Decisión KIRAX."
    ],
    tabla: {
      headers: ["Nivel de la Pirámide", "Herramienta Integrada", "Pregunta de Confirmación"],
      filas: [
        ["Nivel 1 (Base)", "Estructura de Mercado (Módulo 4)", "¿Cuál es la tendencia y dirección en M15/H1?"],
        ["Nivel 2", "Confluencia Técnica (Módulo 5)", "¿Hay soporte/resistencia, EMAs o VWAP a favor?"],
        ["Nivel 3", "Bookmap Heatmap", "¿Dónde está colocada la liquidez real? ¿Es muro o spoofing?"],
        ["Nivel 4", "Bookmap CVD + Volume Dots", "¿Quién está ganando el flujo? ¿Hay absorción o divergencia?"],
        ["Nivel 5 (Gatillo)", "Semáforo KIRAX & Gestión", "¿Las 5 preguntas del checklist responden SÍ? Entrar con SL."]
      ]
    },
    puntos: [
      "• ERROR FATAL #1: Operar solo mirando Bookmap sin análisis técnico de estructura.",
      "• ERROR FATAL #2: Perseguir el precio entrando cuando el movimiento ya explotó.",
      "• ERROR FATAL #3: Caer en trampas de Spoofing entrando en zonas de liquidez que aparecieron de golpe.",
      "• ERROR FATAL #4: No colocar Stop Loss creyendo que la liquidez del heatmap frena al precio siempre."
    ]
  }
];

export const MODULE_6_EXAM_BANK = [
  {
    id: 501,
    seccion: "Sección 1: ¿Qué es Bookmap?",
    pregunta: "¿Qué visualiza principalmente Bookmap en comparación con un gráfico de velas?",
    opciones: [
      "A) El flujo de órdenes e intenciones en tiempo real (lo que está pasando y por pasar)",
      "B) El precio histórico que ya cerró en el pasado",
      "C) Promedios matemáticos retrasados",
      "D) Noticas macroeconómicas de la semana"
    ],
    respuestaCorrecta: 0,
    explicacion: "Bookmap muestra las órdenes limitadas en el libro (Heatmap) y las ejecutadas (Volume Dots) en tiempo real, superando el retraso de las velas."
  },
  {
    id: 502,
    seccion: "Sección 1: ¿Qué es Bookmap?",
    pregunta: "¿Cuáles son los tres pilares fundamentales de Bookmap?",
    opciones: [
      "A) Heatmap, Volume Dots y CVD (Cumulative Volume Delta)",
      "B) Velas japonesas, RSI y MACD",
      "C) Medias Móviles, Fibonaccis y Pivot Points",
      "D) Trendlines, Canales y Patrones Chartistas"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los tres pilares de Bookmap son el Heatmap (mapa de calor de liquidez), Volume Dots (burbujas de ejecución) y CVD (balance de delta acumulado)."
  },
  {
    id: 503,
    seccion: "Sección 2: Código de Colores",
    pregunta: "¿Qué indica una zona de color ROJO en el Heatmap de Bookmap?",
    opciones: [
      "A) Un muro de liquidez institucional muy alta (Soporte o Resistencia Real)",
      "B) Una zona sin órdenes ni interés",
      "C) Un indicador de venta obligatoria",
      "D) Una vela doji bajista"
    ],
    respuestaCorrecta: 0,
    explicacion: "El color rojo representa concentración de liquidez muy alta depositada por grandes bancos e instituciones."
  },
  {
    id: 504,
    seccion: "Sección 2: Código de Colores",
    pregunta: "¿Qué representa el color BLANCO en el Heatmap?",
    opciones: [
      "A) Densidad extrema de liquidez, indicando probable presencia de una orden Iceberg",
      "B) Espacio vacío sin volumen",
      "C) Cierre de la sesión de Nueva York",
      "D) Error de conexión del software"
    ],
    respuestaCorrecta: 0,
    explicacion: "El blanco representa la máxima intensidad cromatica en Bookmap, señalando acumulación extrema o presencia de orden oculta Iceberg."
  },
  {
    id: 505,
    seccion: "Sección 3: El Heatmap",
    pregunta: "¿Cuál es la Regla de Oro sobre la relación entre el Precio y la Liquidez?",
    opciones: [
      "A) El precio es atraído hacia las zonas de alta liquidez como un imán",
      "B) El precio huye siempre de la liquidez",
      "C) La liquidez se mueve independientemente del precio sin influir en él",
      "D) Los muros de liquidez siempre rompen instantáneamente"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los creadores de mercado dirigen el precio hacia las zonas calientes con más órdenes concentradas para poder aparear sus ejecuciones masivas."
  },
  {
    id: 506,
    seccion: "Sección 4: Order Book & Spoofing",
    pregunta: "¿Cómo se detecta una trampa de Spoofing (falsa liquidez) en Bookmap?",
    opciones: [
      "A) Un muro gigante aparece de golpe sin historial previo y desaparece en segundos justo antes de que el precio lo toque",
      "B) Un muro se mantiene estable durante 2 horas seguidas",
      "C) Las burbujas de volumen se vuelven transparentes",
      "D) El CVD sube vertiginosamente"
    ],
    respuestaCorrecta: 0,
    explicacion: "El Spoofing es una manipulación donde se coloca una orden masiva falsa para simular soporte o resistencia, retirándola repentinamente antes de que se ejecute."
  },
  {
    id: 507,
    seccion: "Sección 5: Volume Dots",
    pregunta: "¿Qué representan el tamaño y ubicación de los Volume Dots?",
    opciones: [
      "A) El volumen real transado en ese nivel de precio (a mayor burbuja, más batallas de órdenes ejecutadas)",
      "B) El tiempo restante de la vela actual",
      "C) Las ganancias estimadas del trader",
      "D) El número de indicadores activos"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los Volume Dots son esferas proporcionales al volumen de transacciones efectivamente emparejadas entre compradores y vendedores de mercado."
  },
  {
    id: 508,
    seccion: "Sección 6: CVD",
    pregunta: "¿Qué indica una Divergencia Alcista en el CVD?",
    opciones: [
      "A) El precio marca un Mínimo Más Bajo, pero el CVD marca un Mínimo Más Alto (los compradores están absorbiendo agresivamente las ventas)",
      "B) El precio y el CVD caen verticalmente a la vez",
      "C) El CVD se vuelve completamente plano",
      "D) El mercado carece de volatilidad"
    ],
    respuestaCorrecta: 0,
    explicacion: "La divergencia alcista en CVD prueba que la presión vendedora en el precio está siendo absorbida por liquidez compradora pasiva."
  },
  {
    id: 509,
    seccion: "Sección 7: Icebergs",
    pregunta: "¿Por qué los traders institucionales utilizan órdenes Iceberg?",
    opciones: [
      "A) Para ejecutar miles de contratos sin revelar su tamaño completo y evitar disparar el precio en su contra",
      "B) Para confundir a sus propios analistas",
      "C) Porque sus brokers no les permiten colocar órdenes normales",
      "D) Para operar sin pagar comisiones"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las instituciones fraccionan sus órdenes masivas en un 'iceberg' para reponer pequeñas porciones visibles a medida que son ejecutadas."
  },
  {
    id: 510,
    seccion: "Sección 8: Absorción y Agotamiento",
    pregunta: "¿Qué ocurre técnicamente durante la fase de Absorción en un nivel de precio?",
    opciones: [
      "A) Gran volumen de órdenes de mercado impacta el nivel (Volume Dots gigantes), pero el precio se mantiene inmóvil consumiendo la liquidez",
      "B) El precio salta 50 pips en un solo milisegundo sin volumen",
      "C) Todos los indicadores técnicos se desactivan",
      "D) El mapa de calor se apaga por completo"
    ],
    respuestaCorrecta: 0,
    explicacion: "La absorción ocurre cuando las órdenes de mercado agresivas de un bando son absorbidas por un muro o iceberg del bando contrario sin lograr desplazar el precio."
  },
  {
    id: 511,
    seccion: "Sección 9: Estrategias Bookmap",
    pregunta: "¿Dónde se debe colocar estratégicamente el Stop Loss al operar un Rebote en Muro de Liquidez?",
    opciones: [
      "A) Justo detrás del muro de liquidez (5-10 ticks por detrás del muro rojo/blanco)",
      "B) A 200 pips de distancia arbitraria",
      "C) En el precio exacto de apertura de la sesión",
      "D) No se coloca Stop Loss si hay un muro"
    ],
    respuestaCorrecta: 0,
    explicacion: "El muro actúa como escudo protector; colocar el Stop Loss detrás del muro garantiza que si este es roto, la hipótesis ha quedado invalidada."
  },
  {
    id: 512,
    seccion: "Sección 10: Integración KIRAX",
    pregunta: "¿Cuál es el rol correcto de Bookmap dentro del sistema de trading KIRAX?",
    opciones: [
      "A) Herramienta de confirmación y precisión de flujo que se integra tras verificar estructura y confluencia técnica",
      "B) Reemplazo absoluto de todo el análisis técnico y de estructura",
      "C) Un juego visual secundario sin utilidad práctica",
      "D) Indicador que genera señales automáticas sin intervención humana"
    ],
    respuestaCorrecta: 0,
    explicacion: "Bookmap refina el timing y valida dónde está la liquidez real dentro del contexto de estructura y confluencia definido previamente."
  },
  {
    id: 513,
    seccion: "Sección 3: El Heatmap",
    pregunta: "¿Qué es un Hueco de Liquidez (Liquidity Gap) en el Heatmap?",
    opciones: [
      "A) Una franja de color azul oscuro con muy pocas órdenes limitadas donde el precio puede deslizarse con rapidez",
      "B) Un error en el gráfico de velas",
      "C) Un nivel de soporte institucional imbatible",
      "D) Un cierre de mercado bancario"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los huecos de liquidez carecen de órdenes de contención, permitiendo que las ejecuciones de mercado muevan el precio velozmente hasta encontrar el siguiente muro."
  },
  {
    id: 514,
    seccion: "Sección 6: CVD",
    pregunta: "¿Qué significa que el precio suba fuertemente mientras el CVD se mantiene completamente PLANO?",
    opciones: [
      "A) Una subida 'hueca' carente de compras agresivas reales, propensa a ser una trampa o falsa ruptura",
      "B) Confirmación de compras institucionales masivas",
      "C) Que la sesión de trading ha finalizado",
      "D) Una señal de compra ilimitada"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un movimiento de precio sin acompañamiento del delta (CVD plano) revela falta de volumen comprador real sustentando la subida."
  },
  {
    id: 515,
    seccion: "Sección 10: Errores Fatales",
    pregunta: "¿Qué debes hacer si falla 1 de las 5 preguntas del Checklist de Entrada Bookmap?",
    opciones: [
      "A) Abortar la operación inmediatamente y esperar a que el mercado presente la confluencia completa",
      "B) Entrar duplicando el lote para compensar la falta de confirmación",
      "C) Cambiar de timeframe hasta encontrar una señal que coincida",
      "D) Ignorar el checklist y operar de todos modos"
    ],
    respuestaCorrecta: 0,
    explicacion: "La disciplina con el checklist de 5 preguntas es el filtro de calidad que distingue a un profesional de un trader impulsivo."
  }
];
