"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, CaretDown } from "@phosphor-icons/react";

type Props = {
  id?: string;
  eyebrow: string;
  headline: React.ReactNode;
  description: string;
  benefits: string[];
  candidateTitle: string;
  candidateIntro?: string;
  candidate: string[];
  bookHref: string;
  bookLabel: string;
  image: { src: string; alt: string };
  imageSide?: "left" | "right";
};

export default function ModernTreatmentDetail({
  id,
  eyebrow,
  headline,
  description,
  benefits,
  candidateTitle,
  candidateIntro,
  candidate,
  bookHref,
  bookLabel,
  image,
  imageSide = "right",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);
  const isExternal = bookHref.startsWith("http");

  const imgOrder = imageSide === "left" ? "lg:order-1" : "lg:order-2";
  const textOrder = imageSide === "left" ? "lg:order-2" : "lg:order-1";

  return (
    <section id={id} className="bg-white py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          <div className={`${imgOrder} order-1`}>
            <div className="rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/5] bg-[#F7F9F8]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className={`${textOrder} order-2`}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-6">
              {headline}
            </h2>
            <p className="text-base md:text-lg text-[#30373E] leading-relaxed mb-8">
              {description}
            </p>

            <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-[#517563] mb-4">
              Benefits
            </h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#6B9680]/15 text-[#517563] flex items-center justify-center shrink-0 mt-1">
                    <Check size={12} weight="bold" />
                  </div>
                  <span className="text-base text-[#30373E] leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center justify-between w-full border-t border-[#E5ECE8] pt-6 text-left group"
            >
              <span className="text-base font-semibold text-[#1F2A25] group-hover:text-[#517563] transition-colors">
                {candidateTitle}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-7 h-7 rounded-full bg-[#F7F9F8] flex items-center justify-center text-[#517563]"
              >
                <CaretDown size={14} weight="bold" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6">
                    {candidateIntro && (
                      <p className="text-base text-[#535353] leading-relaxed mb-4">
                        {candidateIntro}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {candidate.map((c) => (
                        <li key={c} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#6B9680]/15 text-[#517563] flex items-center justify-center shrink-0 mt-1">
                            <Check size={12} weight="bold" />
                          </div>
                          <span className="text-base text-[#30373E] leading-relaxed">
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-10">
              <a
                href={bookHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1F2A25] text-white text-base font-medium hover:bg-[#2A3832] active:scale-[0.98] transition-colors duration-300"
              >
                {bookLabel}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
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
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
