/** Pequeño ícono SVG de bombilla/rayo — motivo visual recurrente. */

interface IconProps {
  className?: string;
}

export function BulbIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M32 6c-10 0-17 7-17 16 0 6 3 10 7 13l1 8h18l1-8c4-3 7-7 7-13 0-9-7-16-17-16Z" />
      <path d="M26 51h12" />
      <path d="M28 57h8" />
      <path d="M32 18v10" />
      <path d="M28 24h8" />
    </svg>
  );
}

export function BoltIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function SparkleIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2 14 9l7 2-7 2-2 7-2-7-7-2 7-2 2-7Z" />
    </svg>
  );
}
