"use client";

import Link from "next/link";
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
            Intimate Wellness
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-4">
            Intimate wellness.
            <br />
            <span className="italic font-light text-[#517563]">Reimagined.</span>
          </h2>
          <p className="text-lg text-[#535353] leading-relaxed max-w-[50ch]">
            Advanced, non-surgical treatments for women and men.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Women — sage green card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#6B9680] rounded-3xl p-8 md:p-10 flex flex-col"
          >
            <div className="mb-6">
              <span className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-white/70 mb-2">
                For Women
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                EmpowerRF + Morpheus8V
              </h3>
            </div>
            <p className="text-white/70 text-[11px] uppercase tracking-[0.18em] font-semibold mb-4">
              Support for:
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {womenItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  <span className="text-white leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/womens-pelvic-health"
              className="group inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors duration-200 text-[15px]"
            >
              Explore Women&rsquo;s Intimate Wellness
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Men — dark card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1F2A25] rounded-3xl p-8 md:p-10 flex flex-col"
          >
            <div className="mb-6">
              <span className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-[#9BD3B6] mb-2">
                For Men
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                APEX Sexual Wellness
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              A non-surgical approach designed to support:
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {menItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#9BD3B6] shrink-0" />
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/mens-sexual-health"
              className="group inline-flex items-center gap-2 text-[#9BD3B6] font-semibold hover:text-white transition-colors duration-200 text-[15px]"
            >
              Explore Men&rsquo;s Intimate Wellness
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
