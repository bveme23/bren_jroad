interface JudoIconProps {
  className?: string;
  size?: number;
}

export function JudoIcon({ className = '', size = 24 }: JudoIconProps) {
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
      {/* Simplified judo figure - person in judo stance */}
      <circle cx="12" cy="8" r="2" />
      <path d="M12 10v4" />
      <path d="M8 14l4-2 4 2" />
      <path d="M10 18h4" />
    </svg>
  );
}

