"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const offerings = [
  { label: "Women's Restorative Wellness + HRT", href: "/womens-hormone-therapy" },
  { label: "Men's Restorative Wellness + HRT", href: "/mens-sexual-health" },
  { label: "Medical Weight Loss", href: "/medical-weight-loss-athens-ga" },
  { label: "IV Hydration Therapy", href: "/iv-hydration-therapy-athens-ga" },
  { label: "InMode Treatments", href: "/inmode-athens-ga" },
  { label: "Neurotoxin (Dysport)", href: "/dysport-athens-ga" },
  { label: "Facials + Lashes", href: "/services-and-pricing#facials-lashes" },
];

export default function ModernOfferings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#1F2A25] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-white/5 text-[#9BD3B6] mb-6">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter !text-white leading-[1.05] mb-6">
              We offer cutting-edge
              <br />
              <span className="italic font-light text-[#9BD3B6]">
                wellness + aesthetic
              </span>
              <br />
              treatments.
            </h2>
            <p className="text-lg text-white/65 leading-relaxed max-w-[52ch] mb-8">
              From hormone optimization to InMode aesthetics, every treatment
              starts with a provider who reads your labs and listens to your
              story.
            </p>
            <Link
              href="/services-and-pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#80BE9F] active:scale-[0.98] transition-colors duration-300"
            >
              View all services &amp; pricing
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1 9L9 1M9 1H2M9 1V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/15"
          >
            {offerings.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group flex items-center justify-between gap-4 py-5 md:py-6 border-b border-white/15 hover:bg-white/[0.03] transition-colors -mx-2 px-2"
              >
                <span className="text-lg md:text-xl font-semibold tracking-tight !text-white group-hover:text-[#9BD3B6] transition-colors">
                  {o.label}
                </span>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ring-white/15 text-white group-hover:bg-[#9BD3B6] group-hover:text-[#1F2A25] group-hover:ring-[#9BD3B6] transition-colors shrink-0">
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H2M9 1V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
