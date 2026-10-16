import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({
  className = "",
  iconOnly = false,
  light = false,
  stacked = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="Manikanta Safety Solutions Home"
      >
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="logoTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D5C5C" />
                <stop offset="100%" stopColor="#083838" />
              </linearGradient>
              <linearGradient id="logoAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5B054" />
                <stop offset="100%" stopColor="#E8972F" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="28" fill={light ? "url(#logoTealGrad)" : "url(#logoTealGrad)"} />
            <rect x="4" y="4" width="92" height="92" rx="24" fill="none" stroke="url(#logoAmberGrad)" strokeWidth="3" opacity="0.85" />
            <path
              d="M 27 72 L 27 28 L 50 52 L 73 28 L 73 72"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="24" r="4.5" fill="url(#logoAmberGrad)" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 select-none group ${className}`}
      aria-label="Manikanta Safety Solutions Home"
    >
      {/* Monogram Badge */}
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoBadgeTeal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D5C5C" />
              <stop offset="100%" stopColor="#083838" />
            </linearGradient>
            <linearGradient id="logoBadgeAmber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5B054" />
              <stop offset="100%" stopColor="#E8972F" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="28" fill="url(#logoBadgeTeal)" />
          <rect x="4" y="4" width="92" height="92" rx="24" fill="none" stroke="url(#logoBadgeAmber)" strokeWidth="3" opacity="0.85" />
          <path
            d="M 27 72 L 27 28 L 50 52 L 73 28 L 73 72"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="24" r="4.5" fill="url(#logoBadgeAmber)" />
        </svg>
      </div>

      {/* Clean Text Typography */}
      <div className={`flex flex-col ${stacked ? "text-center" : "text-left"}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-base sm:text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-[#0D5C5C]"}`}>
            MANIKANTA
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#E8972F]">
            SAFETY
          </span>
        </div>
        <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${light ? "text-slate-300" : "text-[#4A4A4A]"}`}>
          Solutions Bangalore
        </span>
      </div>
    </Link>
  );
}
