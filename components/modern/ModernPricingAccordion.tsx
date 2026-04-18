"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

export type PricingRow = {
  name: string;
  price: string;
  note?: string;
};

export type PricingSection = {
  title: string;
  tagline?: string;
  intro?: string;
  body?: string;
  rows?: PricingRow[];
  note?: string;
};

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  description?: string;
  notice?: string;
  sections: PricingSection[];
  variant?: "light" | "tint";
};

export default function ModernPricingAccordion({
  eyebrow,
  headline,
  description,
  notice,
  sections,
  variant = "light",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className={`py-16 md:py-20 ${
        variant === "tint" ? "bg-[#F7F9F8]" : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 md:mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
            {headline}
          </h2>
          {description && (
            <p className="text-lg text-[#535353] leading-relaxed max-w-[60ch] mt-6">
              {description}
            </p>
          )}
        </motion.div>

        {notice && (
          <div className="bg-white ring-1 ring-[#6B9680]/30 border-l-4 border-[#6B9680] rounded-2xl px-6 py-5 mb-8 text-[15px] leading-relaxed text-[#30373E] whitespace-pre-line">
            {notice}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {sections.map((section, i) => (
            <SectionItem key={section.title} section={section} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionItem({
  section,
  index,
}: {
  section: PricingSection;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-white ring-1 ring-[#E5ECE8] overflow-hidden h-fit"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 text-left hover:bg-[#F7F9F8] transition-colors"
      >
        <span className="text-base md:text-lg font-semibold text-[#1F2A25]">
          {section.title}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-8 rounded-full bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0"
        >
          <CaretDown size={14} weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-[#E5ECE8] pt-5">
              {section.tagline && (
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#517563] mb-3">
                  {section.tagline}
                </p>
              )}
              {section.intro && (
                <p className="text-[15px] text-[#535353] italic mb-4 leading-relaxed">
                  {section.intro}
                </p>
              )}
              {section.body && (
                <p className="text-[15px] text-[#30373E] leading-relaxed mb-4 whitespace-pre-line">
                  {section.body}
                </p>
              )}
              {section.rows && section.rows.length > 0 && (
                <ul className="divide-y divide-[#E5ECE8]">
                  {section.rows.map((row) => (
                    <li
                      key={row.name}
                      className="py-3 flex justify-between gap-4 items-baseline"
                    >
                      <div className="flex-1">
                        <span className="text-[15px] text-[#1F2A25]">
                          {row.name}
                        </span>
                        {row.note && (
                          <span className="block text-[13px] text-[#535353] mt-0.5">
                            {row.note}
                          </span>
                        )}
                      </div>
                      <span className="text-[15px] font-semibold text-[#517563] whitespace-nowrap">
                        {row.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="text-[13px] text-[#535353] italic mt-4 leading-relaxed">
                  {section.note}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
