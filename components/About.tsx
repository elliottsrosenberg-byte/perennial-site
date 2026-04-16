import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-off-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-medium text-charcoal/50 tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="font-display font-medium text-charcoal text-4xl md:text-5xl tracking-tight leading-tight">
            The infrastructure behind creative pursuit.
          </h2>
        </div>

        {/* Image + body — both stretch to match height */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center max-w-5xl mx-auto">
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-cream">
            <Image
              src="/AboutImage.png"
              alt="Elliott Rosenberg"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-sans text-charcoal/80 text-base leading-relaxed">
              Perennial is the practice of Elliott Rosenberg, based in Brooklyn.
              The studio helps independent furniture, lighting, and collectible
              designers build the business side of their practice.
            </p>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed">
              Elliott holds dual degrees from RISD (Furniture Design, Graphic
              Design) and Brown University (Computer Science, Materials
              Engineering), and has spent the last six years working across
              product development, brand strategy, and operations for independent
              studios.
            </p>
            <p className="font-sans text-charcoal/80 text-base leading-relaxed">
              Perennial exists because most studios already make great work.
              What&apos;s missing is the pricing, outreach, and operational
              infrastructure to make that work pay for itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
