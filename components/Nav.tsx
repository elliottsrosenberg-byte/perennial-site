"use client";

import { useState } from "react";
import Image from "next/image";

const CAL_URL =
  "https://cal.com/elliott-rosenberg-ldqkzl/perennial-welcome-consultation?overlayCalendar=true";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-warm-white border-t border-charcoal/10 px-6 py-4 flex flex-col gap-4">
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-sm text-charcoal/70"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-sm text-charcoal/70"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-sm text-charcoal/70"
          >
            About
          </a>
          <a
            href="#newsletter"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-sm text-charcoal/70"
          >
            Newsletter
          </a>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium bg-lime text-warm-white px-4 py-2 rounded-lg text-center"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
