"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  description?: string;
  symptoms: string[];
  variant?: "light" | "tint";
  id?: string;
};

export default function ModernSymptomGrid({
  eyebrow,
  headline,
  description,
  symptoms,
  variant = "tint",
  id,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      className={`py-16 md:py-20 scroll-mt-20 ${
        variant === "tint" ? "bg-[#F7F9F8]" : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
            {headline}
          </h2>
          {description && (
            <p className="text-lg text-[#535353] leading-relaxed max-w-[58ch] mt-6">
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {symptoms.map((s, i) => (
            <SymptomCard key={s} label={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SymptomCard({ label, index }: { label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-4 rounded-2xl bg-white ring-1 ring-[#E5ECE8] px-6 py-6"
    >
      <div className="w-8 h-8 rounded-full bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0 mt-0.5">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 5a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 100 16 8 8 0 000-16z" />
        </svg>
      </div>
      <p className="text-[15px] leading-[22px] font-medium text-[#1F2A25]">
        {label}
      </p>
    </motion.div>
  );
}
