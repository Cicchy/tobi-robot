export interface SceneCard {
  title: string
  body: string
  icon?: string
  role?: string
  type?: "standard" | "metric" | "quote" | "cta" | "profile" | "chart"
  value?: string
  image?: string
  chartData?: { name: string; value: number }[]
  buttons?: { label: string; variant?: "default" | "neutral" | "noShadow" | "reverse"; size?: "default" | "sm" | "lg" | "icon"; href?: string; download?: boolean }[]
}

export interface SceneContent {
  description: string
  highlight?: string
  buttons?: { label: string; variant?: "default" | "neutral" | "noShadow" | "reverse"; size?: "default" | "sm" | "lg" | "icon"; href?: string; download?: boolean }[]
  media?: {
    type: "model" | "video" | "both"
    modelSrc?: string
    videoSrc?: string
    videoPoster?: string
  }
}

export interface Scene {
  id: string
  title: string
  subtitle: string
  color: string
  leftCards: SceneCard[]
  rightCards: SceneCard[]
  content: SceneContent
}

export const scenes: Scene[] = [
  {
    id: "problema-1",
    title: "La robótica es un lujo, no un derecho.",
    subtitle: "El Problema",
    color: "#e54833",
    leftCards: [
      {
        type: "metric",
        title: "Precio promedio",
        value: "$520 USD",
        body: "Lo que cuesta un kit importado. El 90% de las escuelas públicas argentinas no puede acceder.",
        icon: "DollarSign",
      },
    ],
    rightCards: [
      {
        type: "quote",
        title: "Brecha educativa",
        body: "\"Mientras unos pocos juegan con piezas de lujo, la gran mayoría se queda mirando de afuera. La tecnología en el aula no puede ser un privilegio de pocos.\"",
        icon: "Globe",
      },
      {
        title: "Escuelas en pausa",
        body: "La falta de herramientas tangibles congela el aprendizaje real. No podés aprender a nadar en un simulador, y no podés aprender robótica sin tocar cables y motores.",
        icon: "Monitor",
      },
    ],
    content: {
      description: "Hoy, un kit importado cuesta lo mismo que un auto usado. En un país con presupuestos escolares que hacen malabares, esto deja al 90% de los pibes fuera del juego tecnológico del siglo XXI.",
      highlight: "Hasta 10 veces más caro que la realidad de nuestras escuelas",
    },
  },
  {
    id: "problema-2",
    title: "Una ley nacional que nadie puede pagar.",
    subtitle: "El Problema",
    color: "#e54833",
    leftCards: [
      {
        type: "quote",
        title: "Realidad vs. Papel",
        body: "\"La Resolución 343/18 obliga a enseñar robótica, pero los precios internacionales hacen que el cumplimiento sea pura teoría en el papel.\"",
      },
      {
        type: "chart",
        title: "Cumplimiento de la ley en Mendoza",
        chartData: [
          { name: "Primarias", value: 869 },
          { name: "Secundarias", value: 300 },
          { name: "Técnicas", value: 35 },
          { name: "Cumplen con la ley", value: 45 },
        ],
      },
    ],
    rightCards: [
      {
        title: "Ingenieros en potencia perdidos",
        body: "Si no hay estímulo temprano, no hay vocación técnica. Estamos dejando pasar a miles de futuros ingenieros por no tener un kit a mano.",
        icon: "TrendingUp",
      },
    ],
    content: {
      description: "La ley exige enseñar robótica en todo el país, pero se olvidaron de mandar el cheque para los robots. Las escuelas quedan solas frente a un objetivo que parece imposible de cumplir.",
      highlight: "El 100% de las escuelas públicas improvisa o simula",
    },
  },
  {
    id: "alternativas-1",
    title: "Entre simuladores y promesas vacías.",
    subtitle: "Alternativas",
    color: "#f9cc48",
    leftCards: [
      {
        type: "metric",
        title: "Kits importados",
        value: "$600K-$800K",
        body: "Costo de LEGO Mindstorms y Arduino oficial. Inviables para el 90% de las escuelas públicas argentinas, tanto en costo inicial como en reposición de partes.",
        icon: "DollarSign",
      },
      {
        title: "Simuladores virtuales",
        body: "Plataformas que pretenden reemplazar la experiencia háptica del hardware real. Sin embargo, ningún simulador reproduce torque, fricción, ni las variables físicas del mundo real.",
        icon: "Monitor",
      },
    ],
    rightCards: [
      {
        title: "Dependencia importada",
        body: "Las grandes marcas extranjeras concentran el mercado sin competencia real. Definen precios en dólares, condicionan los contenidos y dejan afuera la realidad local.",
        icon: "Globe",
      },
    ],
    content: {
      description: "Las alternativas existentes fueron diseñadas para mercados con presupuestos en dólares. Kits importados inaccesibles, software que ignora el contexto argentino, y un soporte que desaparece cruzando la aduana.",
      highlight: "Cero alternativas pensadas para la escuela pública argentina.",
    },
  },
  {
    id: "alternativas-2",
    title: "Ninguna pantalla reemplaza tus manos.",
    subtitle: "Alternativas",
    color: "#f9cc48",
    leftCards: [
      {
        title: "Brecha pedagógica",
        body: "Los simuladores eliminan la incertidumbre del hardware real. Sin errores físicos que debuguear, los estudiantes pierden la oportunidad de desarrollar pensamiento crítico y resolución de problemas reales.",
        icon: "GraduationCap",
      },
    ],
    rightCards: [
      {
        title: "Deserción silenciosa",
        body: "Cuando la experiencia no engancha, los estudiantes pierden el interés. La falta de estímulo tangible es uno de los factores principales de deserción en carreras STEM a nivel regional.",
        icon: "TrendingUp",
      },
      {
        type: "metric",
        title: "Menor retención",
        value: "60%",
        body: "Es la diferencia en retención de conceptos STEM cuando se aprende con experiencias hápticas vs. exclusivamente virtuales.",
        icon: "Award",
      },
    ],
    content: {
      description: "La enseñanza de robótica exclusivamente virtual produce aprendices superficiales. Sin la experiencia de ver un robot caerse, debuguear el código y verlo levantarse, no hay internalización real de conceptos.",
      highlight: "El 60% de retención se pierde cuando la experiencia no es tangible.",
    },
  },
  {
    id: "solucion-1",
    title: "TOBI: Robótica soberana a precio local.",
    subtitle: "La Solución",
    color: "#3e7ce4",
    leftCards: [
      {
        title: "Cerebro Mendocino",
        body: "Usamos un ESP32-S3 que es una pequeña bestia del procesamiento. Controla 9 motores con una precisión que hasta a un relojero le daría envidia.",
        icon: "Cpu",
      },
    ],
    rightCards: [
      {
        type: "metric",
        title: "Ahorro real",
        value: "10x",
        body: "Más barato que LEGO Education. Podés equipar un laboratorio entero con TOBI por lo que cuesta un solo kit importado.",
        icon: "DollarSign",
      },
      {
        title: "Soberanía Tech",
        body: "Software y firmware desarrollados acá, sin pagar licencias afuera. Somos dueños de nuestra tecnología y eso nos hace invencibles frente a las crisis.",
        icon: "Shield",
      },
    ],
    content: {
      description: "Diseñamos un robot cuadrúpedo en Mendoza que cuesta 10 veces menos que los de afuera. Usamos ingeniería inteligente para que lo que era un lujo hoy sea posible en cualquier aula.",
      highlight: "Accesible. Programable. Real.",
      media: {
        type: "model",
        modelSrc: "models/tobi.gltf",
      },
    },
  },
  {
    id: "solucion-2",
    title: "Velo por vos mismo.",
    subtitle: "La Solución",
    color: "#3e7ce4",
    leftCards: [
      {
        title: "ESP32-S3",
        body: "Microcontrolador dual-core con WiFi + BLE. Maneja en tiempo real 9 servos, IMU de 6 ejes, display OLED y procesamiento de audio. Potencia de sobra para educación robótica avanzada.",
        icon: "Cpu",
      },
      {
        title: "Arquitectura abierta",
        body: "PCB diseñada in-house con firmware flashable vía USB. Sin bloqueos de fabricante: podés modificar, actualizar y reprogramar cada componente del robot.",
        icon: "Code",
      },
    ],
    rightCards: [],
    content: {
      description: "Girá el modelo 3D, exploralo desde todos los ángulos y mirá el video de Tob-ICode, nuestra plataforma de programación visual. No hace falta que nos creas, miralo con tus propios ojos.",
      media: {
        type: "video",
        modelSrc: "models/tobi.gltf",
        videoSrc: "videos/tobi-demo.mp4",
      },
    },
  },
  {
    id: "mercado-1",
    title: "Conocé al equipo detrás de TOBI.",
    subtitle: "El Mercado",
    color: "#2d8c47",
    leftCards: [
      {
        title: "Felipe Cicchinelli",
        body: "Desarrolló el robot en sí: electrónica, firmware, servos y cinemática inversa. Hace que Tobi camine, baile y se levante solo.",
        icon: "Cpu",
        role: "Ingeniería",
        image: "/avatars/felipe.svg",
      },
      {
        title: "Guillermo Barrionuevo",
        body: "Programa la plataforma Tob-ICode y toda la experiencia digital. Hace que aprender robótica sea intuitivo desde el navegador.",
        icon: "Code",
        role: "Full-Stack",
        image: "/avatars/guillermo.svg",
      },
    ],
    rightCards: [
      {
        title: "Joaquín Romero",
        body: "Ideó el modelo de negocio, las relaciones institucionales y la estrategia de escalabilidad. Hace que TOB-I sea viable y llegue a más escuelas.",
        icon: "Briefcase",
        role: "Business",
        image: "/avatars/joaquin.svg",
      },
    ],
    content: {
      description: "Tres profesionales de Mendoza que identificaron una falla de mercado y construyeron la solución desde cero.",
      highlight: "Validado por UNCuyo. Respaldado por Emprende U.",
    },
  },
  {
    id: "mercado-2",
    title: "35.000 escuelas buscan una solución que hoy no existe.",
    subtitle: "El Mercado",
    color: "#2d8c47",
    leftCards: [
      {
        type: "metric",
        title: "Escuelas esperando",
        value: "35,000",
        body: "Establecimientos educativos en Argentina que necesitan una solución de robótica accesible. Océano azul.",
        icon: "Globe",
      },
      {
        title: "Foco Mendoza",
        body: "869 primarias y 80 técnicas nos esperan a la vuelta de casa. Es el mercado ideal para validar el modelo antes de saltar a todo el país y Latam.",
        icon: "MapPin",
      },
    ],
    rightCards: [
      {
        type: "cta",
        title: " ¿Te sumás?",
        body: "Buscamos inversores y partners estratégicos para escalar. TOB-I es negocio con propósito.",
        icon: "Award",
        buttons: [
          { label: "Descargar pitch", variant: "neutral", size: "sm", href: "tobi-onepager.pdf", download: true },
        ],
      },
    ],
    content: {
      description: "Estamos sentados sobre una mina de oro pedagógica. Tenemos el prototipo, los costos validados y un océano azul de escuelas que gritan por una solución así.",
      highlight: "Escalabilidad real con impacto social directo.",
      buttons: [
        { label: "Descargar presentación", variant: "neutral", size: "lg", href: "tobi-onepager.pdf", download: true },
      ],
    },
  },
]
