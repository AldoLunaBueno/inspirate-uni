// Datos de eventos extraídos del repo original.
// TODO: reemplazar por fetch a CMS/API cuando exista backend.

export type EventoCategoria = "presencial" | "charlas" | "programa";

export interface Evento {
  id: string;
  titulo: string;
  portada: string;
  desc: string;
  fecha?: string;
  categoria: EventoCategoria;
  modalidad: string;
  duracion: string;
  publico: string;
  detalles: string;
}

export const eventosData: Evento[] = [
  {
    id: "open_day",
    titulo: "Open Day Inspírate UNI",
    portada: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80",
    desc: "Día de puertas abiertas para escolares: recorrido por laboratorios y conoce lo que ofrece la universidad.",
    fecha: "25 Julio",
    categoria: "presencial",
    modalidad: "Presencial",
    duracion: "9:00 AM – 4:00 PM",
    publico: "4to y 5to de secundaria",
    detalles:
      "Tour por laboratorios, charlas con profesores y estudiantes, sesiones informativas sobre todas las carreras.",
  },
  {
    id: "embajadores",
    titulo: "Embajadores Inspírate UNI",
    portada: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
    desc: "Únete a nuestro equipo de embajadores y ayuda a inspirar a la próxima generación.",
    fecha: "Abril",
    categoria: "programa",
    modalidad: "Híbrido",
    duracion: "6 meses",
    publico: "Estudiantes universitarios",
    detalles:
      "Programa de liderazgo con capacitación en orientación vocacional, comunicación y trabajo en equipo.",
  },
  {
    id: "inspirate_girl",
    titulo: "Charlas Inspírate Girl",
    portada: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    desc: "Fomentamos las carreras STEM entre niñas y adolescentes derribando estereotipos.",
    categoria: "programa",
    modalidad: "Presencial y virtual",
    duracion: "Talleres mensuales",
    publico: "Niñas y adolescentes (12-17)",
    detalles:
      "Mentorías con mujeres profesionales en STEM, talleres prácticos y visitas a empresas tecnológicas.",
  },
  {
    id: "open_uni",
    titulo: "Jornada vivencial · Open UNI",
    portada: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
    desc: "Evento vocacional donde escolares conocen la UNI a través de ferias, recorridos y encuentros con investigadores.",
    fecha: "Marzo",
    categoria: "presencial",
    modalidad: "Presencial",
    duracion: "Todo el día",
    publico: "Estudiantes de secundaria",
    detalles:
      "Feria vocacional con stands de todas las facultades, experimentos en vivo y charlas con egresados exitosos.",
  },
  {
    id: "ovpgs",
    titulo: "OVPGs · Orientación Vocacional",
    portada: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&q=80",
    desc: "Sesiones personalizadas de orientación vocacional para grupos escolares.",
    categoria: "charlas",
    modalidad: "Presencial en colegios",
    duracion: "2-3 horas por sesión",
    publico: "Grupos escolares organizados",
    detalles:
      "Tests vocacionales, dinámicas grupales y asesoramiento personalizado para elegir carrera.",
  },
  {
    id: "ponencias",
    titulo: "Ponencias Inspiradoras",
    portada: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    desc: "Charlas y presentaciones sobre carreras profesionales y oportunidades académicas.",
    fecha: "Varios horarios",
    categoria: "charlas",
    modalidad: "Virtual",
    duracion: "1-2 horas",
    publico: "Estudiantes y público general",
    detalles:
      "Charlas con profesionales de diferentes áreas, tips para ingresar a la universidad y becas.",
  },
];

export const stats = [
  { value: "150+", label: "Actividades realizadas" },
  { value: "5,000+", label: "Estudiantes inspirados" },
  { value: "80+", label: "Charlas y talleres" },
  { value: "120+", label: "Voluntarios activos" },
];
