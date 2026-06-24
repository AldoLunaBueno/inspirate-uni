import { createFileRoute, Link } from "@tanstack/react-router";
import { BulbIcon } from "@/components/site/Icons";

export const Route = createFileRoute("/Login")({
  head: () => ({
    meta: [
      { title: "Iniciar sesión · Inspírate UNI" },
      { name: "description", content: "Accede a tu cuenta de Inspírate UNI." },
    ],
  }),
  component: () => <Stub titulo="Login" emoji="🔑" />,
});

function Stub({ titulo, emoji }: { titulo: string; emoji: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <div className="blob h-80 w-80 -left-20 top-10" style={{ background: "var(--blue)" }} aria-hidden />
      <div className="blob h-72 w-72 right-0 bottom-0" style={{ background: "var(--magenta)", animationDelay: "-4s" }} aria-hidden />
      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <BulbIcon className="pulse-bulb mx-auto h-14 w-14 text-blue" />
        <p className="pill bg-blue-soft text-blue mt-6">{emoji} Próximamente</p>
        <h1 className="mt-4 font-display text-5xl font-black sm:text-6xl">
          {titulo} <span className="text-gradient-discover">en camino</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Pantalla de acceso en construcción. Mantendremos el mismo tono cálido
          del resto del sitio.
        </p>
        <Link to="/" className="btn-energy mt-8 inline-flex hover:[&]:btn-energy-hover">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
