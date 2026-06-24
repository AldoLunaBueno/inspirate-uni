import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-students.jpg";
import igirlImg from "@/assets/igirl-portrait.jpg";
import campusImg from "@/assets/campus-fair.jpg";
import { BulbIcon, BoltIcon, SparkleIcon } from "@/components/site/Icons";
import { WaveDivider, BlobDivider } from "@/components/site/Dividers";
import { programas } from "@/services/programas";
import { stats, eventosData } from "@/services/eventos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inspírate UNI · Descubre tu camino en la UNI" },
      {
        name: "description",
        content:
          "Orientación vocacional cálida y sin presión para escolares. Programas STEM, Open Day, eventos y asesorías 1 a 1 con estudiantes de la UNI.",
      },
      { property: "og:title", content: "Inspírate UNI · Descubre tu camino" },
      {
        property: "og:description",
        content:
          "La agrupación estudiantil de la UNI que te abre las puertas del campus, te conecta con mentores y te ayuda a elegir tu carrera con tranquilidad.",
      },
    ],
  }),
  component: Home,
});

const colorMap = {
  magenta: { bg: "bg-magenta-soft", text: "text-magenta", dot: "bg-magenta" },
  orange:  { bg: "bg-orange-soft",  text: "text-orange",  dot: "bg-orange"  },
  green:   { bg: "bg-green-soft",   text: "text-green",   dot: "bg-green"   },
  blue:    { bg: "bg-blue-soft",    text: "text-blue",    dot: "bg-blue"    },
} as const;

function Home() {
  return (
    <>
      <Hero />
      <WaveDivider fill="var(--surface-soft)" bgFill="var(--background)" />
      <Stats />
      <Programas />
      <BlobDivider fill="var(--background)" bgFill="var(--surface-soft)" />
      <Camino />
      <IgirlBand />
      <ProximosEventos />
      <CtaFinal />
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-10 sm:pt-16">
      {/* Blobs de fondo */}
      <div className="blob h-[420px] w-[420px] -left-32 top-10" style={{ background: "var(--magenta)" }} />
      <div className="blob h-[360px] w-[360px] right-[-120px] top-32" style={{ background: "var(--orange)", animationDelay: "-4s" }} />
      <div className="blob h-[300px] w-[300px] left-1/3 -bottom-20" style={{ background: "var(--blue)", animationDelay: "-9s" }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Texto */}
        <div className="rise-in">
          <span className="pill mb-5">
            <BoltIcon className="h-3.5 w-3.5" />
            Agrupación estudiantil UNI
          </span>

          <h1 className="font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            Descubre tu camino{" "}
            <span className="relative inline-block">
              <span className="text-gradient-energy">en la UNI</span>
              <svg
                viewBox="0 0 240 18"
                className="absolute -bottom-3 left-0 h-3 w-full"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 12 C 60 2, 120 18, 238 6"
                  stroke="var(--orange)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Te acompañamos a elegir tu carrera sin presión, con estudiantes que
            estuvieron justo donde tú estás hoy. Charlas, mentorías y un campus
            abierto para que te animes a soñar en grande.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/ovpgs" className="btn-energy text-base hover:[&]:btn-energy-hover">
              Reservar mi asesoría
              <BoltIcon className="h-4 w-4" />
            </Link>
            <Link to="/OpenDay" className="btn-ghost-warm text-base hover:[&]:btn-ghost-warm-hover">
              Vivir el Open Day
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm">
            <div className="flex -space-x-2">
              {["from-magenta to-orange","from-blue to-magenta","from-green to-blue","from-orange to-green"].map((g,i)=>(
                <span key={i} className={`block h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br ${g}`} />
              ))}
            </div>
            <p className="text-muted-foreground">
              <strong className="text-foreground">+5,000 escolares</strong> ya
              vivieron Inspírate.
            </p>
          </div>
        </div>

        {/* Composición visual asimétrica (sin tarjetas) */}
        <div className="relative mx-auto h-[520px] w-full max-w-[520px]">
          {/* Imagen principal con máscara orgánica */}
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "path('M 60 20 C 200 -10, 360 30, 460 90 C 520 180, 510 320, 440 420 C 360 510, 180 530, 80 460 C -10 400, -10 200, 60 20 Z')",
            }}
          >
            <img
              src={heroImg}
              alt="Estudiantes felices descubriendo el campus de la UNI"
              className="h-full w-full object-cover"
              width={1280}
              height={1280}
            />
          </div>

          {/* Bombilla decorativa flotando */}
          <div className="absolute -left-6 top-12 pulse-bulb text-orange">
            <BulbIcon className="h-16 w-16 drop-shadow-glow-orange" />
          </div>

          {/* Rayo flotante */}
          <div className="absolute -right-2 top-1/3 text-magenta">
            <BoltIcon className="h-10 w-10" />
          </div>

          {/* Mancha verde de fondo */}
          <div
            className="absolute -bottom-8 -right-10 -z-10 h-44 w-44 rounded-[42%_58%_63%_37%/47%_53%_47%_53%]"
            style={{ background: "var(--green-soft)" }}
          />

          {/* Sello orgánico flotante */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 bg-background/0">
            <SparkleIcon className="h-6 w-6 text-magenta pulse-bulb" />
            <p className="font-display text-sm font-bold leading-tight">
              Hecho por estudiantes,<br />para estudiantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */

function Stats() {
  return (
    <section className="bg-surface-soft py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="relative text-center">
              <p className="font-display text-4xl font-black sm:text-5xl">
                <span className={i % 2 === 0 ? "text-gradient-energy" : "text-gradient-discover"}>
                  {s.value}
                </span>
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
              {i < stats.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PROGRAMAS ─────────────────────── */

function Programas() {
  return (
    <section className="relative bg-surface-soft py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill mb-4">
            <SparkleIcon className="h-3.5 w-3.5" />
            Nuestros programas
          </span>
          <h2 className="font-display text-4xl font-black sm:text-5xl">
            Cuatro caminos para{" "}
            <span className="text-gradient-discover">empezar a descubrirte</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Elige el que más resuene contigo. No hay decisiones equivocadas
            aquí, solo formas distintas de empezar.
          </p>
        </div>

        {/* Lista vertical orgánica, sin tarjetas — alternando lado */}
        <div className="relative mt-20 space-y-20">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background:
                "repeating-linear-gradient(to bottom, color-mix(in oklab, var(--magenta) 35%, transparent) 0 6px, transparent 6px 16px)",
            }}
            aria-hidden
          />
          {programas.map((p, i) => {
            const c = colorMap[p.color];
            const reverse = i % 2 === 1;
            return (
              <div
                key={p.id}
                className={`relative grid items-center gap-8 md:grid-cols-2 ${
                  reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={`md:[direction:ltr] ${reverse ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <span className={`pill ${c.bg} ${c.text}`}>
                    {p.emoji} {p.tagline}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-black sm:text-4xl">
                    {p.nombre}
                  </h3>
                  <p className="mt-3 max-w-md text-muted-foreground md:inline-block">
                    {p.descripcion}
                  </p>
                  <div className="mt-5">
                    <Link
                      to={p.to}
                      className={`inline-flex items-center gap-2 font-bold ${c.text} hover:opacity-80`}
                    >
                      Conocer {p.nombre} <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>

                {/* Lado visual: número gigante + mancha de color, sin caja */}
                <div className={`md:[direction:ltr] relative flex h-48 items-center justify-center ${reverse ? "md:justify-end" : "md:justify-start"}`}>
                  <span
                    className={`absolute h-44 w-44 rounded-[42%_58%_63%_37%/47%_53%_47%_53%] ${c.bg}`}
                    aria-hidden
                  />
                  <span
                    className={`relative font-display text-[9rem] font-black leading-none ${c.text} opacity-90`}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Punto sobre el camino */}
                <span
                  className={`pointer-events-none absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ${c.dot} ring-4 ring-background md:block`}
                  aria-hidden
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── EL CAMINO ────────────────────── */

function Camino() {
  const pasos = [
    { n: "1", t: "Cuéntanos cómo estás", d: "Sin formularios largos. Solo lo justo para conocerte y entender tus dudas." },
    { n: "2", t: "Te conectamos con alguien que ya pasó por ahí", d: "Un estudiante o egresado de la carrera o área que te llama la atención." },
    { n: "3", t: "Conversamos sin presión", d: "Una asesoría cálida, presencial o virtual. Preguntas todo lo que quieras." },
    { n: "4", t: "Decides con más claridad", d: "No te damos la respuesta, te damos herramientas para encontrarla tú." },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="blob h-80 w-80 -right-20 top-10"
        style={{ background: "var(--blue)", animationDelay: "-2s" }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="pill bg-blue-soft text-blue">
              <BulbIcon className="h-3.5 w-3.5" />
              Cómo funciona
            </span>
            <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
              Una orientación que se siente como{" "}
              <span className="text-gradient-energy">conversar con un hermano mayor</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Nuestro proceso es simple, cálido y respeta tu ritmo. Estamos aquí
              para escucharte, no para venderte una carrera.
            </p>
          </div>

          <ol className="relative space-y-10 border-l-2 border-dashed border-magenta/40 pl-8">
            {pasos.map((p) => (
              <li key={p.n} className="relative">
                <span className="absolute -left-[44px] grid h-9 w-9 place-items-center rounded-full bg-gradient-energy font-display text-sm font-black text-white shadow-glow-magenta">
                  {p.n}
                </span>
                <h3 className="font-display text-xl font-bold">{p.t}</h3>
                <p className="mt-1 text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── INSPÍRATE GIRL ────────────────────── */

function IgirlBand() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-24">
      <div
        className="blob h-96 w-96 -left-20 top-10"
        style={{ background: "var(--magenta)" }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto h-[460px] w-full max-w-[420px]">
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "path('M 40 30 C 200 -10, 360 50, 400 160 C 430 280, 360 410, 240 440 C 100 470, -10 360, 20 220 C 30 140, -10 70, 40 30 Z')",
            }}
          >
            <img
              src={igirlImg}
              alt="Niña sonriendo con un proyecto de robótica"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
          <SparkleIcon className="pulse-bulb absolute -right-4 top-10 h-10 w-10 text-orange" />
          <BoltIcon className="absolute -left-4 bottom-16 h-8 w-8 text-magenta" />
        </div>

        <div>
          <span className="pill">
            💜 Inspírate Girl
          </span>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
            Más chicas decidiendo{" "}
            <span className="text-gradient-energy">ciencia, tecnología e ingeniería</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Inspírate Girl rompe estereotipos de género en STEM con talleres,
            mentorías y referentes femeninos reales. Porque verte representada
            cambia lo que crees posible.
          </p>

          <ul className="mt-6 space-y-3 text-foreground/85">
            {[
              "Mentorías con egresadas de la UNI",
              "Talleres prácticos de robótica y programación",
              "Charlas con mujeres líderes en STEM",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-magenta text-white">
                  <BoltIcon className="h-3 w-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link to="/Igirl" className="btn-energy text-base hover:[&]:btn-energy-hover">
              Conocer Inspírate Girl
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PRÓXIMOS EVENTOS ────────────────────── */

function ProximosEventos() {
  const items = eventosData.slice(0, 4);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="pill bg-orange-soft text-orange">
              <BoltIcon className="h-3.5 w-3.5" />
              Próximamente
            </span>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              Lo que se viene en{" "}
              <span className="text-gradient-discover">el campus</span>.
            </h2>
          </div>
          <Link to="/eventos" className="btn-ghost-warm hover:[&]:btn-ghost-warm-hover">
            Ver todos los eventos →
          </Link>
        </div>

        {/* Layer-style horizontal sin tarjetas: imágenes recortadas + texto al lado */}
        <ul className="mt-14 divide-y divide-border">
          {items.map((e, i) => (
            <li
              key={e.id}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 sm:gap-8"
            >
              <div
                className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24"
                style={{
                  clipPath:
                    "path('M 40 2 C 70 5, 78 30, 76 50 C 74 70, 60 78, 40 78 C 20 78, 4 70, 4 48 C 4 30, 12 5, 40 2 Z')",
                }}
              >
                <img
                  src={e.portada}
                  alt={e.titulo}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`pill ${
                      e.categoria === "presencial"
                        ? "bg-orange-soft text-orange"
                        : e.categoria === "charlas"
                        ? "bg-blue-soft text-blue"
                        : "bg-green-soft text-green"
                    }`}
                  >
                    {e.categoria}
                  </span>
                  {e.fecha && (
                    <span className="text-xs font-bold text-muted-foreground">
                      {e.fecha}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 truncate font-display text-xl font-bold sm:text-2xl">
                  {e.titulo}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground sm:text-base">
                  {e.desc}
                </p>
              </div>
              <span className="font-display text-3xl font-black text-magenta/30 sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────── CTA FINAL ────────────────────── */

function CtaFinal() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="blob h-[420px] w-[420px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "var(--magenta)" }}
        aria-hidden
      />
      <div
        className="blob h-72 w-72 right-10 top-10"
        style={{ background: "var(--orange)", animationDelay: "-5s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <BulbIcon className="pulse-bulb mb-6 h-14 w-14 text-orange" />
          <h2 className="font-display text-4xl font-black leading-tight sm:text-6xl">
            Tu próxima decisión no tiene que dar miedo. <br />
            <span className="text-gradient-energy">Da el primer paso.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Agenda una asesoría gratuita con un estudiante de la UNI. Sin
            compromiso, sin libreto, solo una buena conversación que puede
            cambiar tu rumbo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/ovpgs" className="btn-energy text-base hover:[&]:btn-energy-hover">
              Quiero mi asesoría
            </Link>
            <Link to="/eventos" className="btn-ghost-warm hover:[&]:btn-ghost-warm-hover">
              Explorar eventos
            </Link>
          </div>
        </div>

        <div
          className="relative h-80 w-full"
          style={{
            clipPath:
              "path('M 30 40 C 160 -10, 360 20, 440 110 C 500 200, 460 320, 340 340 C 200 360, 60 320, 20 220 C -10 140, -10 80, 30 40 Z')",
          }}
        >
          <img
            src={campusImg}
            alt="Estudiantes paseando por una feria vocacional"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1280}
            height={960}
          />
        </div>
      </div>
    </section>
  );
}
