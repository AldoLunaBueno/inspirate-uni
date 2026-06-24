/**
 * Separadores SVG orgánicos entre secciones — refuerzan la metáfora
 * de "El Camino": flujo continuo, nunca cortes rectos.
 */

interface WaveProps {
  /** Color del fondo de la sección que VIENE A CONTINUACIÓN (la de abajo). */
  fill?: string;
  /** Color del fondo de la sección actual (de donde "sale" la onda). */
  bgFill?: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  fill = "var(--surface-soft)",
  bgFill = "transparent",
  flip = false,
  className = "",
}: WaveProps) {
  return (
    <div
      className={`relative w-full leading-[0] ${className}`}
      style={{ background: bgFill }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[80px] w-full sm:h-[120px]"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,64 C180,120 360,16 540,40 C720,64 900,112 1080,96 C1260,80 1380,40 1440,56 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function DiagonalDivider({
  fill = "var(--surface-soft)",
  bgFill = "transparent",
  flip = false,
  className = "",
}: WaveProps) {
  return (
    <div
      className={`relative w-full leading-[0] ${className}`}
      style={{ background: bgFill }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[60px] w-full sm:h-[90px]"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path d="M0,90 L1440,0 L1440,90 Z" fill={fill} />
      </svg>
    </div>
  );
}

export function BlobDivider({
  fill = "var(--magenta-soft)",
  bgFill = "transparent",
  flip = false,
  className = "",
}: WaveProps) {
  return (
    <div
      className={`relative w-full leading-[0] ${className}`}
      style={{ background: bgFill }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="block h-[90px] w-full sm:h-[140px]"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0,80 C120,140 280,20 460,60 C640,100 760,150 960,110 C1160,70 1320,30 1440,70 L1440,140 L0,140 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
