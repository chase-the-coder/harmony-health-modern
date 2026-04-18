"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Minus } from "@phosphor-icons/react";

const fit = [
  "You feel chronically tired, foggy, or flat and it isn't improving",
  "Your weight isn't responding to diet and training anymore",
  "Lab-guided, titrated protocols over guesswork and supplements",
  "You want a provider who will actually know you, not a membership mill",
  "You're ready to pay cash for a plan that works (HSA and FSA accepted)",
];

const elsewhere = [
  "You want a one-visit miracle with no follow-up",
  "You expect treatment without baseline labs",
  "You're looking for purely cosmetic work unrelated to wellness",
  "You prefer insurance-billed primary care over direct-pay specialty care",
];

const ModernOutcomes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="outcomes" className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-14 max-w-3xl"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            Is Harmony a fit?
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
            Built for people who are
            <br />
            <span className="text-[#6B9680]">done feeling off.</span>
          </h2>
          <p className="text-lg text-[#535353] leading-relaxed max-w-[58ch] mt-6">
            Our work is intensive. We do real labs, build titrated plans, and
            check in ongoing. The patients who get the best results share a
            few things in common.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FitCard title="Best fit" items={fit} variant="good" />
          <FitCard title="Probably not us" items={elsewhere} variant="bad" />
        </div>
      </div>
    </section>
  );
};

function FitCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "good" | "bad";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = variant === "good" ? Check : Minus;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-[2.5rem] p-10 md:p-12 ${
        variant === "good"
          ? "bg-[#F7F9F8] ring-1 ring-[#E5ECE8]"
          : "bg-[#1F2A25] text-white"
      }`}
    >
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            variant === "good"
              ? "bg-[#6B9680]/15 text-[#517563]"
              : "bg-white/15 text-white"
          }`}
        >
          <Icon size={18} weight="bold" />
        </div>
        <h3
          className={`text-xl font-semibold tracking-tight ${
            variant === "good" ? "text-[#1F2A25]" : "!text-white"
          }`}
        >
          {title}
        </h3>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-base leading-relaxed ${
              variant === "good" ? "text-[#30373E]" : "text-white/75"
            }`}
          >
            <span
              className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                variant === "good" ? "bg-[#6B9680]" : "bg-white/40"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ModernOutcomes;
