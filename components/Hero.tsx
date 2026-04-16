const CAL_URL =
  "https://cal.com/elliott-rosenberg-ldqkzl/perennial-welcome-consultation?overlayCalendar=true";

export default function Hero() {
  return (
    <section className="bg-warm-white pt-28 pb-36 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
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
