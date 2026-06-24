// Programas principales de Inspírate UNI mostrados en el Home.

export interface Programa {
  id: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  to: string;
  color: "magenta" | "orange" | "green" | "blue";
  emoji: string;
}

export const programas: Programa[] = [
  {
    id: "ovpgs",
    nombre: "OVPGs",
    tagline: "Orientación Vocacional Personalizada",
    descripcion:
      "Asesorías 1 a 1 con estudiantes y egresados de la UNI para ayudarte a descubrir tu carrera ideal, sin presión.",
    to: "/ovpgs",
    color: "magenta",
    emoji: "🧭",
  },
  {
    id: "igirl",
    nombre: "Inspírate Girl",
    tagline: "Niñas y mujeres en STEM",
    descripcion:
      "Talleres, mentorías y referentes para que más chicas se animen a estudiar ciencia, tecnología, ingeniería o matemáticas.",
    to: "/Igirl",
    color: "magenta",
    emoji: "💜",
  },
  {
    id: "openday",
    nombre: "Open Day",
    tagline: "Vive la UNI por un día",
    descripcion:
      "Recorre laboratorios, conoce profes y estudiantes, y siente cómo es la vida universitaria antes de postular.",
    to: "/OpenDay",
    color: "orange",
    emoji: "🎉",
  },
  {
    id: "eventos",
    nombre: "Eventos & Charlas",
    tagline: "Encuentros que abren caminos",
    descripcion:
      "Charlas, ferias y ponencias durante todo el año con egresados, profesores y profesionales de distintas áreas.",
    to: "/eventos",
    color: "blue",
    emoji: "⚡",
  },
];
