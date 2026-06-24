import { createFileRoute, Link } from "@tanstack/react-router";
import { BulbIcon } from "@/components/site/Icons";

export const Route = createFileRoute("/Igirl")({
  head: () => ({
    meta: [
      { title: "Inspírate Girl · Inspírate UNI" },
      { name: "description", content: "Programa de Inspírate UNI para promover carreras STEM en niñas y jóvenes." },
    ],
  }),
  component: () => <Stub titulo="Inspírate Girl" emoji="💜" />,
});

function Stub({ titulo, emoji }: { titulo: string; emoji: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <div className="blob h-80 w-80 -left-20 top-10" style={{ background: "var(--magenta)" }} aria-hidden />
      <div className="blob h-72 w-72 right-0 bottom-0" style={{ background: "var(--blue)", animationDelay: "-4s" }} aria-hidden />
      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <BulbIcon className="pulse-bulb mx-auto h-14 w-14 text-magenta" />
        <p className="pill mt-6">{emoji} Próximamente</p>
        <h1 className="mt-4 font-display text-5xl font-black sm:text-6xl">
          {titulo} <span className="text-gradient-energy">está en camino</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Estamos rediseñando esta sección con el mismo cariño que el Home.
          Vuelve pronto.
        </p>
        <Link to="/" className="btn-energy mt-8 inline-flex hover:[&]:btn-energy-hover">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
