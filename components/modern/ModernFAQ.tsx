"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

type FAQ = { question: string; answer: string };

type Props = {
  eyebrow?: string;
  headline?: React.ReactNode;
  faqs: FAQ[];
};

export default function ModernFAQ({
  eyebrow = "Common questions",
  headline = (
    <>
      Questions we hear
      <br />
      <span className="text-[#6B9680]">from every new patient.</span>
    </>
  ),
  faqs,
}: Props) {
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
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20"
        >
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
              {headline}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <FAQItem key={f.question} faq={f} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-white ring-1 ring-[#E5ECE8] overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 text-left hover:bg-[#F7F9F8] transition-colors"
      >
        <span className="text-base md:text-lg font-semibold text-[#1F2A25]">
          {faq.question}
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
            <div className="px-6 md:px-8 pb-6 md:pb-8 text-base text-[#535353] leading-relaxed whitespace-pre-line">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
