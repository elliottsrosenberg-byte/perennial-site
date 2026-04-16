const CAL_URL =
  "https://cal.com/elliott-rosenberg-ldqkzl/perennial-welcome-consultation?overlayCalendar=true";

const services = [
  {
    title: "Brand + Positioning",
    description:
      "Perennial helps build the brand infrastructure that communicates value to the people who buy, stock, and publish design. Positioning strategy, visual identity, portfolio curation, brand audits, and copy to support the message you're telling.",
    items: [
      "Brand Strategy",
      "Visual Identity Systems",
      "Portfolio Curation",
      "Press and Media Kits",
      "Copywriting + Voice",
    ],
  },
  {
    title: "Sales + Outreach",
    description:
      "Most studios wait for inbound. Perennial builds outreach systems that generate real leads. Gallery and stockist research, trade campaign strategy, email newsletter campaigns, pitch materials, CRM setup, and follow-up workflows.",
    items: [
      "Trade Outreach Campaigns",
      "Market Research",
      "Pitch Materials",
      "CRM and Newsletter Setup",
      "Marketing Development",
    ],
  },
  {
    title: "Ops + Management",
    description:
      "Pricing frameworks based on actual costs and market position. Accountability systems that keep you ahead of the rest and doing the things you say you want to do. Lightweight operational tools that fit how you already work.",
    items: [
      "Pricing Frameworks",
      "Accountability Systems",
      "Studio Operations",
      "Commission Structures",
      "Process Templates",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="font-sans text-xs font-medium text-charcoal/50 tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="font-display font-medium text-charcoal text-4xl md:text-5xl tracking-tight">
            <span className="block">Solving for the business</span>
            <span className="block">side of your studio.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-off-white rounded-xl p-8 flex flex-col gap-5"
            >
              <h3 className="font-display font-medium text-charcoal text-2xl tracking-tight">
                {service.title}
              </h3>
              <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-auto flex flex-col gap-2 pt-2 border-t border-charcoal/8">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-xs text-charcoal/70 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-sage/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium bg-lime text-warm-white px-6 py-3 rounded-lg hover:bg-lime/90 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
