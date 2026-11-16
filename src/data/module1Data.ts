export interface ChapterContent {
  capitulo: number;
  titulo: string;
  duracionEstimada: string;
  secciones: {
    subtitulo: string;
    contenido: string[];
    tabla?: { headers: string[]; filas: string[][] };
    puntos?: string[];
  }[];
}

export const MODULE_1_METADATA = {
  id: 1,
  titulo: "MÓDULO 1 — PSICOLOGÍA I: LOS CIMIENTOS MENTALES",
  subtitulo: "Academia KIRAX — Ruta del Scalper Profesional",
  introduccion: "Bienvenido al Módulo 1 de la Academia KIRAX. Este es el módulo MÁS IMPORTANTE de todo el programa. La psicología representa el 60% del éxito en scalping. En este módulo aprenderás por qué la mente es tu activo más valioso y cómo blindarte contra los patrones emocionales que destruyen al 95% de los traders.",
  objetivos: [
    "Comprender la Regla 80/20 aplicada al trading y por qué la psicología es el factor dominante",
    "Identificar el perfil psicológico del scalper profesional vs. el amateur",
    "Reconocer los 10 enemigos mentales del trader y sus antídotos",
    "Desarrollar autoconciencia emocional en tiempo real",
    "Establecer las bases de una mentalidad de acero antes de tocar una sola estrategia"
  ],
  duracionTotal: "5 - 7 días",
  totalPreguntasBanco: 500
};

export const MODULE_1_CHAPTERS: ChapterContent[] = [
  {
    capitulo: 1,
    titulo: "La Regla 80/20 del Trading",
    duracionEstimada: "1 día",
    secciones: [
      {
        subtitulo: "1.1 El Mito del Indicador Mágico",
        contenido: [
          'Todo trader novato comete el mismo error: buscar el "indicador perfecto". Pasan meses probando RSI, MACD, medias móviles, Bandas de Bollinger, Ichimoku... creyendo que la combinación correcta les dará señales infalibles.',
          'La realidad es brutal: NO EXISTE el indicador mágico. Todos los indicadores se basan en datos pasados. Ninguno predice el futuro. La diferencia entre un trader rentable y uno quebrado está en su cabeza.'
        ]
      },
      {
        subtitulo: "1.2 La Verdadera Fórmula del Éxito",
        contenido: [
          'En el scalping profesional, el éxito se distribuye en porcentajes muy claros:'
        ],
        tabla: {
          headers: ["Factor", "Porcentaje de Éxito"],
          filas: [
            ["Psicología (control mental, disciplina, paciencia)", "60%"],
            ["Gestión de Riesgo (dimensionamiento, stops, límites)", "20%"],
            ["Estrategia y Técnica (entradas, lecturas, setups)", "15%"],
            ["Suerte / Condiciones de mercado", "5%"]
          ]
        }
      },
      {
        subtitulo: "1.3 La Paradoja del Novato",
        contenido: [
          'El novato piensa: "Si encuentro la estrategia correcta, ganaré dinero". La verdad es: "Si tengo la mente correcta, cualquier estrategia decente me hará ganar dinero".',
          'Piénsalo: dos traders usan exactamente la misma estrategia, el mismo indicador, el mismo broker. Uno gana consistentemente; el otro pierde. La diferencia es lo que ocurre DENTRO de sus cabezas.'
        ]
      },
      {
        subtitulo: "1.4 El Ciclo de la Destrucción",
        contenido: [
          'Este es el patrón que sigue el 95% de los traders que fracasan:'
        ],
        puntos: [
          '1. Descubren el trading y se emocionan con el dinero fácil',
          '2. Pierden sus primeros trades pero culpan a la estrategia',
          '3. Cambian de estrategia cada semana buscando "la buena"',
          '4. Tienen una racha ganadora y se vuelven excesivamente confiados',
          '5. Aumentan el tamaño de sus posiciones por exceso de confianza',
          '6. Una pérdida grande destruye semanas de ganancias',
          '7. Entran en modo "venganza" y pierden aún más',
          '8. Abandonan el trading diciendo que "es una estafa"'
        ]
      },
      {
        subtitulo: "1.5 La Regla de Oro del Módulo 1",
        contenido: [
          '"El mercado no te quita el dinero. Eres TÚ quien se lo entrega al mercado con tus propias decisiones emocionales". El mercado es neutral. No te odia ni te persigue.'
        ]
      }
    ]
  },
  {
    capitulo: 2,
    titulo: "La Mente del Scalper Profesional",
    duracionEstimada: "1 día",
    secciones: [
      {
        subtitulo: "2.1 Los Dos Modos Mentales",
        contenido: [
          "Todo trader opera en modo amateur o modo profesional. Tu cuenta lo refleja con precisión milimétrica:"
        ],
        tabla: {
          headers: ["Característica", "Modo Amateur (Pierde)", "Modo Profesional (Gana)"],
          filas: [
            ["Impaciencia / Paciencia", "Entra sin confirmación. No puede esperar.", "Espera la confirmación. Prefiere perderse un trade a entrar mal."],
            ["Emoción / Ecuanimidad", "Celebra con euforia, se deprime en pérdidas.", "Las ganancias y pérdidas no alteran su estado emocional."],
            ["Venganza / Aceptación", "Quiere recuperar de inmediato tras perder.", "Acepta la pérdida como parte del negocio."],
            ["FOMO / Disciplina", "Miedo a perderse el movimiento. Entra tarde.", "Sigue su plan sin importar lo que sienta."],
            ["Exceso Confianza / Humildad", "Cree que es invencible tras 3 victorias.", "Sabe que el mercado es más grande que él. Respeta el riesgo."],
            ["Parálisis / Valentía", "Tras 3 pérdidas no puede apretar el botón.", "Entra cuando su plan lo indica aunque tenga miedo."],
            ["Plan", "Improvisa en cada trade sin reglas.", "Cada trade está planificado (Plan Militar)."]
          ]
        }
      },
      {
        subtitulo: "2.2 El Perfil Psicológico del Scalper de Élite (7 Rasgos)",
        contenido: [],
        puntos: [
          '• TOLERANCIA A LA INCERTIDUMBRE: Operan probabilidades, no certezas.',
          '• DESAPEGO DEL DINERO: En pantalla los dólares son puntos.',
          '• DISCIPLINA MONÁSTICA: Siguen sus reglas como un monje sus votos.',
          '• CAPACIDAD DE REINICIO: Reset mental instantáneo entre trades.',
          '• HUMILDAD RADICAL: El mercado siempre tiene la razón.',
          '• OBJETIVIDAD CLÍNICA: Ven números y datos, no corazonadas.',
          '• RESILIENCIA: El fracaso es datos, no derrota.'
        ]
      }
    ]
  },
  {
    capitulo: 3,
    titulo: "Los 10 Enemigos del Trader y sus Antídotos",
    duracionEstimada: "2 días",
    secciones: [
      {
        subtitulo: "1. El Miedo & 2. La Avaricia",
        contenido: [
          '• MIEDO: Paraliza o hace cerrar temprano. Antídoto: Define tu riesgo ANTES de entrar, practica respiración 4-7-8 y usa un plan escrito.',
          '• AVARICIA: Fuerza situaciones inexistentes. Antídoto: Profit Target diario estricto y Take Profit prefijado.'
        ]
      },
      {
        subtitulo: "3. La Venganza (Revenge Trading) & 4. La Euforia",
        contenido: [
          '• VENGANZA: El enemigo más peligroso. Antídoto: Regla de hierro: si pierdes 2 trades seguidos, CIERRA TODO y camina 15 minutos.',
          '• EUFORIA: Ciega por dopamina tras ganar. Antídoto: Tras 3 victorias, pausa obligatoria de 5 minutos.'
        ]
      },
      {
        subtitulo: "5. FOMO & 6. Exceso de Confianza",
        contenido: [
          '• FOMO: Miedo a quedar fuera. Antídoto: Mantra: "El mercado abre todos los días. Habrá otra oportunidad."',
          '• EXCESO DE CONFIANZA: Surge tras rachas ganadoras. Antídoto: Diario de Humildad.'
        ]
      },
      {
        subtitulo: "7. Parálisis por Análisis & 8. Sesgo de Confirmación",
        contenido: [
          '• PARÁLISIS POR ANÁLISIS: Exceso de indicadores. Antídoto: Simplifica a máximo 2 indicadores y aplica la regla de los 30 segundos.',
          '• SESGO DE CONFIRMACIÓN: Buscar solo lo que apoya tu idea. Antídoto: Escribe 3 razones por las que el trade podría fallar antes de entrar.'
        ]
      },
      {
        subtitulo: "9. Anclaje & 10. Sesgo de Resultado",
        contenido: [
          '• ANCLAJE: Quedarse mentalmente atrapado en el precio de entrada. Antídoto: Tu precio de entrada no existe, solo existe el precio actual.',
          '• SESGO DE RESULTADO: Juzgar una decisión solo por si ganó o perdió. Antídoto: Evalúa con dos notas (Resultado y Ejecución).'
        ]
      }
    ]
  },
  {
    capitulo: 4,
    titulo: "Autoevaluación Psicológica",
    duracionEstimada: "1 día",
    secciones: [
      {
        subtitulo: "Test de Autoconocimiento",
        contenido: [
          "Responde estas 10 preguntas por escrito para identificar tus puntos vulnerables:"
        ],
        puntos: [
          "1. ¿Cuál de los 10 enemigos reconoces más en ti mismo? ¿Por qué?",
          "2. Describe tu última gran pérdida. ¿Qué enemigo estaba presente?",
          "3. ¿En qué momento del día eres más vulnerable emocionalmente?",
          "4. ¿Qué emoción sientes justo antes de hacer clic en comprar/vender?",
          "5. ¿Qué haces inmediatamente después de un trade perdedor?",
          "6. ¿Cuánto tiempo tardas en reiniciar mentalmente después de una pérdida?",
          "7. ¿Has hecho alguna vez revenge trading? Describe la situación.",
          "8. ¿Cuál es tu mayor miedo como trader?",
          "9. ¿Qué piensas cuando ves que el precio se mueve sin ti?",
          "10. ¿Crees que mereces ganar dinero haciendo trading? ¿Por qué?"
        ]
      }
    ]
  },
  {
    capitulo: 5,
    titulo: "Ejercicios de Autoconciencia",
    duracionEstimada: "1 día",
    secciones: [
      {
        subtitulo: "Técnicas Prácticas de Control Mental",
        contenido: [],
        puntos: [
          "• Ejercicio 1: El Observador (Grábate o anota 20 observaciones emocionales en una sesión).",
          "• Ejercicio 2: El Semáforo Emocional (Verde: opera; Amarillo: max 2 setups perfectos; Rojo: no operes).",
          "• Ejercicio 3: Respiración Táctica 4-7-8 (Inhala 4s, sostén 7s, exhala 8s - 3 a 5 ciclos).",
          "• Ejercicio 4: La Carta de Despedida (Escribe una carta a tu mayor enemigo mental).",
          "• Ejercicio 5: Visualización de Sesión Perfecta (Visualiza 5 minutos cada mañana la ejecución disciplinada de tu plan)."
        ]
      }
    ]
  }
];

export const MODULE_1_GLOSSARY = [
  { termino: "Anclaje", definicion: "Fijación mental en un precio de referencia que impide tomar decisiones objetivas." },
  { termino: "Daily Loss Limit", definicion: "Límite máximo de pérdida diaria; al alcanzarlo se deja de operar inmediatamente." },
  { termino: "Daily Profit Target", definicion: "Objetivo de ganancia diaria; al alcanzarlo se cierra la sesión sin excepciones." },
  { termino: "FOMO", definicion: "Fear Of Missing Out: Miedo a quedarse fuera de un movimiento del mercado." },
  { termino: "Modo Amateur", definicion: "Estado mental dominado por emociones que lleva a decisiones impulsivas y pérdidas." },
  { termino: "Modo Profesional", definicion: "Estado mental caracterizado por disciplina, paciencia y ecuanimidad." },
  { termino: "Revenge Trading", definicion: "Operar compulsivamente para recuperar pérdidas tras un resultado negativo." },
  { termino: "Scalping", definicion: "Estilo de trading de muy corto plazo (segundos a minutos)." },
  { termino: "Sesgo de Confirmación", definicion: "Tendencia a buscar solo información que confirme las creencias previas." },
  { termino: "Sesgo de Resultado", definicion: "Juzgar la calidad de una decisión únicamente por su resultado monetario final." },
  { termino: "Tilt", definicion: "Estado de alteración o frustración emocional severa que destruye el juicio objetivo." }
];

export const MODULE_1_EXAM_BANK = [
  {
    id: 1,
    seccion: "Sección 1: La Regla 80/20",
    pregunta: "¿Qué establece la Regla 80/20 aplicada al trading?",
    opciones: [
      "A) El 80% de las ganancias vienen del 20% de los traders",
      "B) El 80% de los resultados vienen del 20% de las acciones correctas (psicología + riesgo)",
      "C) El 80% del tiempo se gana y el 20% se pierde",
      "D) El 80% de los indicadores generan el 20% de las señales"
    ],
    respuestaCorrecta: 1,
    explicacion: "En el trading, la psicología (60%) y la gestión de riesgo (20%) constituyen el 80% del éxito total."
  },
  {
    id: 2,
    seccion: "Sección 1: La Regla 80/20",
    pregunta: "Según la Regla 80/20 en scalping, ¿dónde debes concentrar tu energía?",
    opciones: [
      "A) En mirar todas las noticias económicas del día",
      "B) En las pocas configuraciones de alta probabilidad que realmente funcionan y en la disciplina",
      "C) En probar todos los indicadores disponibles",
      "D) En operar la mayor cantidad de pares posible"
    ],
    respuestaCorrecta: 1,
    explicacion: "Enfocarte en un par de setups dominados con disciplina genera el verdadero retorno."
  },
  {
    id: 3,
    seccion: "Sección 1: La Regla 80/20",
    pregunta: "¿Qué porcentaje del éxito en scalping representa la psicología según KIRAX Academy?",
    opciones: [
      "A) 15%",
      "B) 60%",
      "C) 20%",
      "D) 95%"
    ],
    respuestaCorrecta: 1,
    explicacion: "La psicología representa el 60%, la gestión de riesgo el 20% y la estrategia técnica el 15%."
  },
  {
    id: 4,
    seccion: "Sección 2: Perfil del Scalper",
    pregunta: "¿Cuál es la característica MÁS importante de un scalper profesional exitoso?",
    opciones: [
      "A) Tener el mejor setup de internet",
      "B) Disciplina y control emocional bajo presión",
      "C) Saber programar indicadores complejos",
      "D) Tener mucho capital inicial"
    ],
    respuestaCorrecta: 1,
    explicacion: "La disciplina para ejecutar el plan sin titubear es el rasgo definitorio del profesional."
  },
  {
    id: 5,
    seccion: "Sección 2: Perfil del Scalper",
    pregunta: "¿Qué hace un scalper profesional cuando pierde 2 o 3 trades seguidos?",
    opciones: [
      "A) Aumenta el tamaño de la posición para recuperar rápido",
      "B) Se detiene, aplica su circuito de seguridad, se aleja de la pantalla y revisa su estado mental",
      "C) Sigue operando hasta revertir la pérdida",
      "D) Cambia de estrategia inmediatamente"
    ],
    respuestaCorrecta: 1,
    explicacion: "Detenerse ante rachas perdedoras protege el capital de la espiral de venganza (revenge trading)."
  },
  {
    id: 6,
    seccion: "Sección 3: Los 10 Enemigos",
    pregunta: "¿Cuál es el enemigo más peligroso del trader responsable de destruir más cuentas?",
    opciones: [
      "A) El spread del broker",
      "B) La venganza (Revenge Trading)",
      "C) La falta de monitores",
      "D) Las noticias no programadas"
    ],
    respuestaCorrecta: 1,
    explicacion: "El revenge trading lleva a aumentar lotajes e ignorar stops tras una pérdida, arruinando la cuenta en minutos."
  },
  {
    id: 7,
    seccion: "Sección 3: Los 10 Enemigos",
    pregunta: "¿Qué es el FOMO (Fear Of Missing Out)?",
    opciones: [
      "A) Miedo a perder dinero",
      "B) Miedo a quedarse fuera de un movimiento y entrar tarde sin un setup confirmado",
      "C) Un indicador de volatilidad",
      "D) Una estrategia de gestión de riesgo"
    ],
    respuestaCorrecta: 1,
    explicacion: "El FOMO empuja a perseguir velas vertiginosas en el peor momento técnico."
  },
  {
    id: 8,
    seccion: "Sección 4: Mentalidad de Crecimiento",
    pregunta: "¿Cómo responde un trader con mentalidad de crecimiento ante una pérdida?",
    opciones: [
      "A) Renuncia porque cree que no sirve para el trading",
      "B) Pregunta: '¿Qué puedo aprender de esto? ¿Qué ajuste específico en mi ejecución debo hacer?'",
      "C) Culpa al mercado y a la manipulación",
      "D) Busca un nuevo indicador mágico"
    ],
    respuestaCorrecta: 1,
    explicacion: "La mentalidad de crecimiento considera cada pérdida como datos valiosos para pulir el sistema."
  },
  {
    id: 9,
    seccion: "Sección 5: Disciplina y Hábitos",
    pregunta: "¿Qué es la regla de oro de la disciplina en scalping?",
    opciones: [
      "A) Ganar dinero en cada sesión",
      "B) Sigue tu plan como si tu vida dependiera de ello, especialmente cuando no tengas ganas",
      "C) Modificar el stop loss si el precio se acerca",
      "D) Operar todas las horas de la sesión"
    ],
    respuestaCorrecta: 1,
    explicacion: "La adherencia al plan es lo que convierte la probabilidad técnica en rentabilidad a largo plazo."
  },
  {
    id: 10,
    seccion: "Sección 6: Psicología del Dinero",
    pregunta: "¿Qué significa 'despersonalizar el dinero' en trading?",
    opciones: [
      "A) Operar con dinero de otras personas",
      "B) Ver el P/L como puntos o unidades en un juego probabilístico, no como el pago del alquiler o compras",
      "C) No llevar contabilidad de ganancias",
      "D) Regalar las ganancias a caridad"
    ],
    respuestaCorrecta: 1,
    explicacion: "Si vinculas emocionalmente cada pip a gastos personales, la ansiedad nublará las decisiones racionales."
  },
  {
    id: 11,
    seccion: "Sección 7: Errores Comunes",
    pregunta: "¿Qué es la 'Parálisis por Análisis'?",
    opciones: [
      "A) Un error en la plataforma de ejecución",
      "B) Tener tantos indicadores e información que no puedes tomar una decisión a tiempo",
      "C) Operar demasiado rápido",
      "D) No revisar las noticias"
    ],
    respuestaCorrecta: 1,
    explicacion: "El exceso de filtros genera señales contradictorias y bloquea la ejecución en scalping."
  },
  {
    id: 12,
    seccion: "Sección 8: Preparación Mental",
    pregunta: "¿En qué consiste la técnica de Respiración Táctica 4-7-8?",
    opciones: [
      "A) Correr 4 minutos y descansar 7",
      "B) Inhalar 4s por la nariz, sostener 7s y exhala 8s por la boca para calmar el sistema nervioso",
      "C) Mirar el gráfico durante 4 horas seguidas",
      "D) Tomar 4 tazas de café antes de operar"
    ],
    respuestaCorrecta: 1,
    explicacion: "Usada por las fuerzas especiales, reduce la frecuencia cardíaca y restablece el juicio frontal."
  },
  {
    id: 13,
    seccion: "Sección 9: Casos Prácticos",
    pregunta: "CASO: Un trader está en +0.8% en el día. Su meta diaria es +1.0%. Faltan 10 min para cerrar. ¿Qué debe hacer?",
    opciones: [
      "A) Forzar una orden con mayor lotaje para conseguir el 0.2% restante",
      "B) Cerrar la sesión satisfecho con +0.8%. Arriesgar el día por el 0.2% final es avaricia",
      "C) Dejar una orden límite abierta sin supervisión",
      "D) Operar en un activo volátil desconocido"
    ],
    respuestaCorrecta: 1,
    explicacion: "La avaricia por alcanzar números redondos al final de la sesión suele devolver las ganancias del día."
  },
  {
    id: 14,
    seccion: "Sección 10: Repaso General",
    pregunta: "¿Cuál es el secreto definitivo del trading exitoso según KIRAX Academy?",
    opciones: [
      "A) Descubrir un indicador secreto en YouTube",
      "B) No hay secreto: es Disciplina + Gestión de Riesgo + Psicología + Mejora Continua",
      "C) Operar con un apalancamiento 1:1000",
      "D) Copiar las señales de canales de Telegram"
    ],
    respuestaCorrecta: 1,
    explicacion: "El éxito es el resultado acumulado de pequeñas ejecuciones impecables día tras día."
  },
  {
    id: 15,
    seccion: "Sección 3: Los 10 Enemigos",
    pregunta: "¿Qué es el 'Sesgo de Resultado' (Outcome Bias)?",
    opciones: [
      "A) Evaluar un trade sólo por si dio ganancia o pérdida, en lugar de evaluar si se ejecutó según el plan",
      "B) Tener preferencia por comprar sobre vender",
      "C) Calcular los impuestos de fin de año",
      "D) Mirar el resultado de la sesión de Londres"
    ],
    respuestaCorrecta: 0,
    explicacion: "Un trade que siguió las reglas a la perfección pero tocó el stop loss es un BUEN TRADE. Juzgarlo solo por el dinero es un error grave."
  }
];
