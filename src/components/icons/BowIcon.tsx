interface BowIconProps {
  className?: string;
  size?: number;
}

export function BowIcon({ className = '', size = 24 }: BowIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bowing figure - respectful gesture */}
      <path d="M12 2v20" />
      <path d="M8 8l4-4 4 4" />
      <path d="M8 16l4 4 4-4" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

