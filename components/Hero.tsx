import Image from "next/image";

const CAL_URL =
  "https://cal.com/elliott-rosenberg-ldqkzl/perennial-welcome-consultation?overlayCalendar=true";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-white pt-28 pb-36 px-6 text-center">
      <Image
        src="/flower1/Pages%20from%20Knipholia%20Botancia%20in%20Originali-4.png"
        alt=""
        width={1500}
        height={2600}
        className="absolute left-[30%] -translate-x-1/2 -top-[20%] pointer-events-none select-none z-0 w-[600px] md:w-[1500px]"
        style={{ height: "auto", opacity: 0.07, mixBlendMode: "multiply" }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-display font-bold text-charcoal text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8">
          Helping design studios build a sustainable practice.
        </h1>
        <p className="font-sans text-charcoal/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
          Perennial supports furniture, lighting, and collectible designers build
          the business infrastructure that turns great work into a real
          livelihood.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium bg-lime text-warm-white px-6 py-3 rounded-lg hover:bg-lime/90 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            className="font-sans text-sm font-medium border border-charcoal/20 text-charcoal px-6 py-3 rounded-lg hover:border-charcoal/40 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
