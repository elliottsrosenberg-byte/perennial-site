import Script from "next/script";

const pillars = [
  {
    marker: "///",
    color: "#9BA37A",
    title: "Tools + Templates",
    description:
      "Pricing worksheets, outreach scripts, and operational frameworks you can use immediately.",
  },
  {
    marker: "---",
    color: "#9a9690",
    title: "Ops Takeaways",
    description:
      "Learnings from client work — what's working, what isn't, and what to do about it.",
  },
  {
    marker: "+++",
    color: "#b4b29a",
    title: "Opportunities",
    description:
      "Fairs, residencies, open calls, and grant programs worth knowing about.",
  },
];

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-cream py-24 px-6">
      <Script
        src="https://subscribe-forms.beehiiv.com/embed.js"
        strategy="lazyOnload"
      />
      <div className="max-w-6xl mx-auto">
        {/* Centered heading */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium text-charcoal/50 tracking-widest uppercase mb-4">
            Newsletter
          </p>
          <h2 className="font-display font-medium text-charcoal text-4xl md:text-5xl tracking-tight leading-tight mb-6">
            Notes on design.
          </h2>
          <p className="font-sans text-charcoal/60 text-sm max-w-lg mx-auto leading-relaxed mb-2">
            A monthly dispatch with practical tools, pricing strategies, outreach
            frameworks, and resources for independent furniture and collectible
            designers. Drawn from real client work and studio operations.
          </p>
          <p className="font-sans text-charcoal/40 text-xs">
            Once a month. Unsubscribe any time.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-off-white rounded-xl p-8 flex flex-col gap-4"
            >
              <span
                className="font-mono text-lg font-medium tracking-widest"
                style={{ color: pillar.color }}
              >
                {pillar.marker}
              </span>
              <h3 className="font-display font-medium text-charcoal text-2xl tracking-tight">
                {pillar.title}
              </h3>
              <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Beehiiv embed */}
        <div className="flex justify-center">
          <iframe
            src="https://subscribe-forms.beehiiv.com/9b70d12a-e1c9-49ac-a98c-51edd664746d"
            className="beehiiv-embed"
            data-test-id="beehiiv-embed"
            style={{
              width: "554px",
              height: "201px",
              margin: 0,
              borderRadius: 0,
              backgroundColor: "transparent",
              boxShadow: "none",
              maxWidth: "100%",
              border: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}
