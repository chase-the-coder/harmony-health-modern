"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const womenItems = [
  "Urinary leakage",
  "Pelvic floor weakness",
  "Vaginal laxity",
  "Dryness & discomfort",
  "Changes after childbirth or menopause",
  "Intimate wellness and confidence",
];

const menItems = [
  "Erectile function",
  "Blood flow",
  "Sexual performance",
  "Confidence",
  "Men's intimate wellness",
];

export default function ModernIntimateWellness() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FAF8F4] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Photo — left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full min-h-[420px] lg:min-h-[600px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/couple-wellness-photo.webp"
              alt="Happy couple walking together outdoors"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </motion.div>

          {/* Right column — headline + cards */}
          <div className="flex flex-col justify-center gap-6">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                Intimate Wellness
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-3">
                Intimate wellness.
                <br />
                <span className="italic font-light text-[#517563]">Reimagined.</span>
              </h2>
              <p className="text-lg text-[#535353] leading-relaxed">
                Advanced, non-surgical treatments for women and men.
              </p>
            </motion.div>

            {/* Women card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#6B9680] rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <div className="mb-4">
                <span className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-white/70 mb-1">
                  For Women
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
                  EmpowerRF + Morpheus8V
                </h3>
              </div>
              <ul className="space-y-2 mb-6 flex-1 grid grid-cols-2 gap-x-4">
                {womenItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/womens-pelvic-health"
                className="group inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors duration-200 text-[14px]"
              >
                Explore Women&rsquo;s Intimate Wellness
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* Men card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl ring-1 ring-[#E5ECE8] p-6 md:p-8 flex flex-col shadow-sm"
            >
              <div className="mb-4">
                <span className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-[#517563] mb-1">
                  For Men
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1F2A25] leading-snug">
                  APEX Sexual Wellness
                </h3>
              </div>
              <ul className="space-y-2 mb-6 flex-1 grid grid-cols-2 gap-x-4">
                {menItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/mens-sexual-health"
                className="group inline-flex items-center gap-2 text-[#517563] font-semibold hover:text-[#1F2A25] transition-colors duration-200 text-[14px]"
              >
                Explore Men&rsquo;s Intimate Wellness
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
