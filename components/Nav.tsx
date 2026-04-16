import Image from "next/image";

const CAL_URL =
  "https://cal.com/elliott-rosenberg-ldqkzl/perennial-welcome-consultation?overlayCalendar=true";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-warm-white border-b border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logotype */}
        <a href="#" aria-label="Perennial">
          <Image
            src="/perennialLogotype.svg"
            alt="Perennial"
            width={120}
            height={28}
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="font-sans text-sm font-normal text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Services
          </a>
          <a
            href="#work"
            className="font-sans text-sm font-normal text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="font-sans text-sm font-normal text-charcoal/70 hover:text-charcoal transition-colors"
          >
            About
          </a>
          <a
            href="#newsletter"
            className="font-sans text-sm font-normal text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Newsletter
          </a>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium bg-lime text-warm-white px-4 py-2 rounded-lg hover:bg-lime/80 transition-colors"
          >
            Connect
          </a>
        </div>

        {/* Mobile Connect Button */}
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden font-sans text-sm font-medium bg-lime text-warm-white px-4 py-2 rounded-lg hover:bg-lime/80 transition-colors"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
