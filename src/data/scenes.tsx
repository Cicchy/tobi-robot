export interface SceneCard {
  value: string
  label: string
}

export interface SceneContent {
  description: string
  highlight?: string
  buttons?: { label: string; variant?: "default" | "neutral" | "noShadow" | "reverse"; size?: "default" | "sm" | "lg" | "icon" }[]
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
    id: "costo",
    title: "La robótica educativa es cara. Muy cara.",
    subtitle: "El costo",
    color: "#e54833",
    leftCards: [
      { value: "$600K+", label: "Importados" },
      { value: "$86K", label: "TOB-I" },
      { value: "10x", label: "Más barato" },
      { value: "$206K", label: "Inversión total" },
    ],
    rightCards: [
      { value: "65%", label: "Margen" },
      { value: "10K", label: "Escuelas" },
      { value: "$2.7M", label: "Valor imputado" },
      { value: "908h", label: "Desarrollo" },
    ],
    content: {
      description: "Los kits importados (LEGO, Arduino oficial) cuestan entre $600.000 y $800.000+ ARS por unidad.",
      highlight: "Hasta 10x más barato que cualquier alternativa.",
    },
  },
  {
    id: "acceso",
    title: "Obligatorio por ley, imposible por presupuesto.",
    subtitle: "El acceso",
    color: "#3e7ce4",
    leftCards: [
      { value: "Obligatorio", label: "Por ley" },
      { value: "Sin presupuesto", label: "Asignado" },
      { value: "100%", label: "Improvisan" },
      { value: "Solo teoría", label: "Simuladores" },
    ],
    rightCards: [
      { value: "TOB-I", label: "Para todas" },
      { value: "Físico", label: "Real" },
      { value: "Accesible", label: "$86K unidad" },
      { value: "Escalable", label: "A cualquier escuela" },
    ],
    content: {
      description: "La legislación argentina exige la enseñanza de robótica y STEM, pero no asigna presupuesto para materiales.",
      highlight: "TOB-I es accesible para cualquier escuela.",
    },
  },
  {
    id: "experiencia",
    title: "De lo abstracto a lo tangible.",
    subtitle: "La experiencia",
    color: "#f9cc48",
    leftCards: [
      { value: "Armable", label: "Cada alumno" },
      { value: "Programable", label: "Tob-ICode" },
      { value: "Interactivo", label: "Aplausos + voz" },
      { value: "Expresivo", label: "OLED emociones" },
    ],
    rightCards: [
      { value: "Walk/Trot", label: "Marcha dinámica" },
      { value: "Estabilización", label: "IMU activa" },
      { value: "Auto-recuperación", label: "Se levanta solo" },
      { value: "Navegación", label: "Obstáculos" },
    ],
    content: {
      description: "Los simuladores virtuales no reemplazan la experiencia de ver un robot moverse, caerse y levantarse.",
      highlight: "Armable, programable, interactivo y expresivo.",
    },
  },
  {
    id: "tecnologia",
    title: "Especificaciones técnicas.",
    subtitle: "La tecnología",
    color: "#6a9cf4",
    leftCards: [
      { value: "ESP32-S3", label: "Microcontrolador" },
      { value: "9 Servos", label: "MG90S" },
      { value: "OLED 1.3″", label: "SH1106 facial" },
      { value: "LiPo 7.4V", label: "1500mAh" },
    ],
    rightCards: [
      { value: "Chasis 3D", label: "FDM abierto" },
      { value: "IMU", label: "Giro + acelerómetro" },
      { value: "Audio", label: "Mic + speaker" },
      { value: "PCB propia", label: "Diseño in-house" },
    ],
    content: {
      description: "Robot cuadrúpedo biomimético con ESP32-S3, 9 servos MG90S, display OLED, IMU, micrófono y altavoz integrados.",
      buttons: [{ label: "Ver specs completas", variant: "neutral", size: "sm" }],
    },
  },
  {
    id: "validacion",
    title: "Validado por instituciones reales.",
    subtitle: "Validación",
    color: "#2d8c47",
    leftCards: [
      { value: "UNCuyo", label: "Emprende U" },
      { value: "Edison", label: "Alianza" },
      { value: "Jurado", label: "Evaluación oficial" },
      { value: "In-house", label: "Desarrollo propio" },
    ],
    rightCards: [
      { value: "$2.7M", label: "Valor imputado" },
      { value: "908h", label: "Trabajo" },
      { value: "3 miembros", label: "Equipo" },
      { value: "Argentina", label: "Fabricación local" },
    ],
    content: {
      description: "Desarrollado en el marco de Emprende U — UNCuyo, con viabilidad económica validada por jurado oficial y alianza con Escuela Tomás Alva Edison.",
      highlight: "Validado institucionalmente.",
    },
  },
  {
    id: "cta",
    title: "¿Querés ser parte de esto?",
    subtitle: "Sumate",
    color: "#e8751a",
    leftCards: [
      { value: "Mercado", label: "10K escuelas" },
      { value: "Sin competencia", label: "Alternativa real" },
      { value: "Escalar", label: "Producción" },
      { value: "Inversión", label: "Oportunidad" },
    ],
    rightCards: [
      { value: "Equipo", label: "3 miembros" },
      { value: "UNCuyo", label: "Mendoza" },
      { value: "Argentina", label: "Fabricación local" },
      { value: "Contacto", label: "Escribinos" },
    ],
    content: {
      description: "Buscamos inversores y partners para escalar la producción y llevar TOB-I a más escuelas en todo el país.",
      buttons: [
        { label: "Invertir en TOB-I", size: "lg" },
        { label: "Descargar presentación", variant: "neutral", size: "lg" },
      ],
    },
  },
]
