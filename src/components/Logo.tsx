// Turtle mark + wordmark, approximating the Cruise Whitsundays logo
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-3 text-white ${className}`} aria-label="Cruise Whitsundays home">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" fill="none" aria-hidden="true">
        <ellipse cx="30" cy="36" rx="18" ry="13" fill="currentColor" />
        <path
          d="M30 24c-6 0-11 5-11 12s5 12 11 12 11-5 11-12-5-12-11-12z"
          fill="#3f5463"
          opacity="0.35"
        />
        <circle cx="49" cy="26" r="6" fill="currentColor" />
        <path
          d="M15 27l-7-5M45 46l6 7M17 45l-7 6M14 36h-8"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display leading-none">
        <span className="block text-[15px] font-bold tracking-[0.28em]">CRUISE</span>
        <span className="block text-[11px] font-semibold tracking-[0.2em]">ANDREW</span>
      </span>
    </a>
  )
}
