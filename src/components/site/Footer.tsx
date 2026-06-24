import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/inspirate-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-warm pb-10 pt-20">
      {/* Blobs decorativos */}
      <div
        className="blob h-72 w-72 -left-20 top-10"
        style={{ background: "var(--magenta)" }}
        aria-hidden
      />
      <div
        className="blob h-80 w-80 right-0 bottom-0"
        style={{ background: "var(--blue)", animationDelay: "-6s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-12 w-auto" width={130} height={48} />
            <span className="text-xl font-extrabold">
              Inspírate <span className="text-gradient-energy">UNI</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Agrupación estudiantil de la Universidad Nacional de Ingeniería que
            acompaña a escolares a descubrir su vocación con calidez y sin
            presión.
          </p>
        </div>

        <FooterCol
          title="Explora"
          links={[
            { to: "/OpenDay", label: "Open Day" },
            { to: "/Igirl", label: "Inspírate Girl" },
            { to: "/eventos", label: "Eventos" },
            { to: "/ovpgs", label: "Orientación vocacional" },
          ]}
        />

        <FooterCol
          title="Comunidad"
          links={[
            { to: "/Login", label: "Iniciar sesión" },
            { to: "/ovpgs", label: "Reservar asesoría" },
            { to: "/eventos", label: "Próximos eventos" },
          ]}
        />

        <div>
          <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wider text-foreground/70">
            Síguenos
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Facebook", "Instagram", "TikTok", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="pill hover:bg-magenta hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Campus UNI · Av. Túpac Amaru 210, Rímac · Lima
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl border-t border-border px-5 pt-6 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Inspírate UNI · Hecho con cariño por
        estudiantes de la UNI.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: "/" | "/OpenDay" | "/Igirl" | "/eventos" | "/ovpgs" | "/Login"; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wider text-foreground/70">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link
              to={l.to}
              className="text-sm text-foreground/80 transition-colors hover:text-magenta"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
