import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/inspirate-logo.png.asset.json";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/OpenDay", label: "Open Day" },
  { to: "/Igirl", label: "Inspírate Girl" },
  { to: "/eventos", label: "Eventos" },
  { to: "/ovpgs", label: "OVPGs" },
] as const;

export function NavBar() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Inspírate UNI"
            className="h-11 w-auto transition-transform group-hover:rotate-[-6deg]"
            width={120}
            height={44}
          />
          <span className="hidden text-lg font-extrabold leading-none tracking-tight sm:block">
            Inspírate <span className="text-gradient-energy">UNI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-full px-4 py-2 text-sm font-bold text-foreground/75 transition-colors hover:text-magenta"
              activeProps={{
                className:
                  "relative rounded-full px-4 py-2 text-sm font-bold text-magenta bg-magenta-soft",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/Login"
            className="hidden rounded-full px-4 py-2 text-sm font-bold text-foreground/75 transition-colors hover:text-magenta sm:inline-flex"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/ovpgs"
            className="btn-energy text-sm hover:[&]:btn-energy-hover"
          >
            Reservar asesoría
          </Link>
        </div>
      </div>
    </header>
  );
}
