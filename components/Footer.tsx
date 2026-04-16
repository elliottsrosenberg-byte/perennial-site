import Image from "next/image";

const CAL_URL =
  "https://cal.com/elliott-rosenberg-ldqkzl/perennial-welcome-consultation?overlayCalendar=true";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <a href="#" aria-label="Perennial" className="inline-block mb-4">
              <Image
                src="/perennialLogotype.svg"
                alt="Perennial"
                width={120}
                height={28}
                className="brightness-0 invert"
              />
            </a>
            <p className="font-sans text-sm text-warm-white/50 max-w-xs leading-relaxed">
              Business infrastructure for independent designers.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm font-sans">
            <a
              href="https://instagram.com/perennial.design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-white/60 hover:text-warm-white transition-colors"
            >
              @perennial.design
            </a>
            <a
              href="mailto:hello@perennial.design"
              className="text-warm-white/60 hover:text-warm-white transition-colors"
            >
              hello@perennial.design
            </a>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime hover:text-lime/80 transition-colors font-medium"
            >
              Book a consultation →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-white/10">
          <p className="font-sans text-xs text-warm-white/30">
            © {new Date().getFullYear()} Perennial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
