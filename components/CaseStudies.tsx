"use client";

import { useState } from "react";
import Image from "next/image";

type ServiceTag = {
  label: string;
};

type Study = {
  name: string;
  tagline: string;
  website: string;
  services: ServiceTag[];
  images: { src: string; position?: string }[];
  operationalImages?: { src: string; caption: string }[];
  quote?: string;
  quoteAuthor?: string;
};

const studies: Study[] = [
  {
    name: "Studio Lauren Goodman",
    tagline: "Studio infrastructure and design for a furniture designer and maker",
    website: "https://laurengoodman.xyz",
    services: [
      { label: "Brand + Messaging" },
      { label: "Web Design + Development" },
      { label: "Design Consulting" },
      { label: "Operations" },
      { label: "Marketing + Outreach Frameworks" },
      { label: "Newsletter" },
      { label: "Social Media" },
    ],
    images: [
      { src: "/lauren1.png", position: "object-center" },
      { src: "/lauren2.png", position: "object-center" },
      { src: "/lauren3.png", position: "object-top" },
      { src: "/lauren4.png", position: "object-top" },
    ],
    operationalImages: [
      { src: "/laurenNotion1.png", caption: "Studio operations portal" },
      { src: "/LaurenNotion2.png", caption: "Project tracking system" },
    ],
    quote:
      "Elliot has been working with my studio for the past five months or so helping us with everything from business development to marketing to web design. He has a really admirable workflow and is great at keeping the ball rolling with ongoing projects. He took considerable time to learn about our company and develop a custom branding strategy. He redesigned our website and streamlined our marketing material across all platforms and he's a pleasure to work with.",
    quoteAuthor: "Lauren Goodman, Studio Lauren Goodman",
  },
  {
    name: "Oneg Home",
    tagline: "Physical product design and management for a scaling e-commerce brand",
    website: "https://oneghome.com",
    services: [
      { label: "Product Design" },
      { label: "Vendor Sourcing" },
      { label: "Project Management" },
    ],
    images: [
      { src: "/oneg2.jpg", position: "object-center" },
      { src: "/onegcandleholders3.png", position: "object-center" },
      { src: "/onegGratitudeJournalPhoto.jpg", position: "object-center" },
    ],
  },
  {
    name: "Siegel",
    tagline: "Brand, web, marketing, and business development for an architecture studio",
    website: "https://siegel.design",
    services: [
      { label: "Brand + Messaging" },
      { label: "Web Design + Development" },
      { label: "Proposals" },
      { label: "Marketing Campaigns" },
    ],
    images: [
      { src: "/siegel1.png", position: "object-top" },
      { src: "/siegel2.png", position: "object-top" },
      { src: "/siegel3.png", position: "object-top" },
    ],
  },
];

export default function CaseStudies() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="work" className="bg-warm-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-medium text-charcoal/50 tracking-widest uppercase mb-4">
            Work
          </p>
          <h2 className="font-display font-medium text-charcoal text-4xl md:text-5xl tracking-tight">
            Selected client work.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col divide-y divide-charcoal/10">
          {studies.map((study) => {
            const isOpen = open === study.name;
            const cols = study.images.length === 4 ? "grid-cols-2" : "grid-cols-3";
            const domain = study.website.replace("https://", "");

            return (
              <div key={study.name}>
                {/* Header row — always visible */}
                <div className="py-7 flex items-start justify-between gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="font-display font-medium text-charcoal text-2xl md:text-3xl tracking-tight">
                      {study.name}
                    </p>
                    <p className="font-sans text-sm text-charcoal/50">
                      {study.tagline}
                    </p>
                    <a
                      href={study.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-charcoal/35 hover:text-charcoal/60 transition-colors mt-0.5"
                    >
                      {domain} →
                    </a>
                  </div>
                  <button
                    onClick={() => setOpen(isOpen ? null : study.name)}
                    className="shrink-0 text-charcoal/30 text-2xl font-light leading-none mt-1 hover:text-charcoal/60 transition-colors"
                    aria-label={isOpen ? "Collapse" : "Expand"}
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                  >
                    +
                  </button>
                </div>

                {/* Expanded content */}
                {isOpen && (
                  <div className="pb-10 flex flex-col gap-8">
                    {/* Service pills — neutral */}
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <span
                          key={service.label}
                          className="font-sans text-xs font-medium px-3 py-1.5 rounded-full bg-charcoal/6 text-charcoal/60 border border-charcoal/10"
                        >
                          {service.label}
                        </span>
                      ))}
                    </div>

                    {/* Main image grid */}
                    <div className={`grid ${cols} gap-3`}>
                      {study.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream"
                        >
                          <Image
                            src={img.src}
                            alt=""
                            fill
                            className={`object-cover ${img.position ?? "object-center"}`}
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Operational screenshots — Lauren only */}
                    {study.operationalImages && (
                      <div className="flex flex-col gap-3">
                        <p className="font-sans text-xs font-medium text-charcoal/40 tracking-widest uppercase">
                          Operations + Systems
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {study.operationalImages.map((img, i) => (
                            <div key={i} className="flex flex-col gap-1.5">
                              <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-cream">
                                <Image
                                  src={img.src}
                                  alt={img.caption}
                                  fill
                                  className="object-cover object-top"
                                  sizes="(max-width: 768px) 50vw, 33vw"
                                />
                              </div>
                              <p className="font-sans text-xs text-charcoal/40">
                                {img.caption}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quote */}
                    {study.quote && (
                      <blockquote className="border-l-2 border-sage/50 pl-5 py-1">
                        <p className="font-display italic text-charcoal/80 text-lg leading-snug">
                          &ldquo;{study.quote}&rdquo;
                        </p>
                        {study.quoteAuthor && (
                          <p className="font-sans text-xs text-charcoal/40 mt-3">
                            — {study.quoteAuthor}
                          </p>
                        )}
                      </blockquote>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
