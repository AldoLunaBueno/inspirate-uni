import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/OpenDay")({
  head: () => ({
    meta: [
      { title: "Open Day · Inspírate UNI" },
      { name: "description", content: "Vive un día completo en el campus de la UNI. Laboratorios, charlas y experiencias presenciales." },
    ],
  }),
  component: OpenDayStub,
});

function OpenDayStub() {
  return <Stub titulo="Open Day" emoji="🎉" />;
}

import { Link } from "@tanstack/react-router";
import { BulbIcon } from "@/components/site/Icons";

function Stub({ titulo, emoji }: { titulo: string; emoji: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <div className="blob h-80 w-80 -left-20 top-10" style={{ background: "var(--orange)" }} aria-hidden />
      <div className="blob h-72 w-72 right-0 bottom-0" style={{ background: "var(--magenta)", animationDelay: "-4s" }} aria-hidden />
      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <BulbIcon className="pulse-bulb mx-auto h-14 w-14 text-orange" />
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
