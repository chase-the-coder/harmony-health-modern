"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CaretDown } from "@phosphor-icons/react";

type Bullet = string | { title: React.ReactNode; text: string };

export type ServiceFAQ = {
  question: string;
  answer?: string;
  bullets?: Bullet[];
  link?: { label: string; href: string };
};

export type ServiceCard = {
  title: string;
  description: string;
  detail: string;
  detailNote?: string;
  cta: { label: string; href: string };
  faqs: ServiceFAQ[];
};

type Props = {
  id?: string;
  eyebrow: string;
  headline: React.ReactNode;
  description: string;
  subheading?: string;
  cards: ServiceCard[];
  image?: { src: string; alt: string; width: number; height: number };
  highlights?: string[];
  badge?: { label: string; value: string };
};

const ease = [0.16, 1, 0.3, 1] as const;

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
      <path
        d="M1 9L9 1M9 1H2M9 1V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQItem({ faq }: { faq: ServiceFAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#E5ECE8]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className="text-base font-semibold text-[#1F2A25] group-hover:text-[#517563] transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="w-7 h-7 rounded-full bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0"
        >
          <CaretDown size={12} weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              {faq.answer && (
                <p className="text-base text-[#535353] leading-relaxed mb-3">
                  {faq.answer}
                </p>
              )}
              {faq.bullets && (
                <ul className="space-y-3">
                  {faq.bullets.map((b, i) => (
                    <li
                      key={typeof b === "string" ? b : i}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#6B9680]/15 text-[#517563] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} weight="bold" />
                      </div>
                      <span className="text-[15px] text-[#30373E] leading-relaxed">
                        {typeof b === "string" ? (
                          b
                        ) : (
                          <>
                            <span className="font-semibold text-[#1F2A25]">
                              {b.title}
                            </span>{" "}
                            — {b.text}
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {faq.link && (
                <a
                  href={faq.link.href}
                  className="inline-flex items-center gap-2 mt-4 text-base font-semibold text-[#517563] hover:text-[#1F2A25] transition-colors"
                >
                  {faq.link.label}
                  <Arrow />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Card({ card, index }: { card: ServiceCard; index: number }) {
  const [showFaqs, setShowFaqs] = useState(false);
  const isExternal = card.cta.href.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className="rounded-3xl bg-white ring-1 ring-[#E5ECE8] shadow-md p-7 md:p-9 flex flex-col"
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6B9680]/10 text-[#517563] text-sm font-semibold mb-6">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-2xl md:text-[28px] font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-4">
        {card.title}
      </h3>
      <p className="text-base text-[#30373E] leading-relaxed mb-6">
        {card.description}
      </p>
      <div className="rounded-2xl bg-[#F7F9F8] ring-1 ring-[#E5ECE8] px-5 py-4 mb-7">
        <p className="text-base font-semibold text-[#517563] leading-snug">
          {card.detail}
        </p>
        {card.detailNote && (
          <p className="mt-2 text-sm text-[#535353] leading-relaxed">
            {card.detailNote}
          </p>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        <a
          href={card.cta.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-[15px] font-medium hover:bg-[#517563] active:scale-[0.98] transition-colors duration-300"
        >
          {card.cta.label}
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
            <Arrow />
          </span>
        </a>
        <button
          type="button"
          onClick={() => setShowFaqs((v) => !v)}
          aria-expanded={showFaqs}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full ring-1 ring-[#6B9680]/40 text-[#517563] text-[15px] font-medium hover:bg-[#6B9680]/10 transition-colors"
        >
          FAQs
          <motion.span
            animate={{ rotate: showFaqs ? 180 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="inline-flex"
          >
            <CaretDown size={12} weight="bold" />
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showFaqs && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              {card.faqs.map((f) => (
                <FAQItem key={f.question} faq={f} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ModernServiceCards({
  id,
  eyebrow,
  headline,
  description,
  subheading,
  cards,
  image,
  highlights,
  badge,
}: Props) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-gradient-to-br from-[#6B9680] via-[#6B9680] to-[#517563] py-16 md:py-24 scroll-mt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 85% 15%, rgba(128,190,159,0.55) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 5% 95%, rgba(31,42,37,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full ring-1 ring-white/10 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -top-16 -left-16 w-[300px] h-[300px] rounded-full ring-1 ring-white/10 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className={image ? "grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center" : ""}
        >
          {image && (
            <div className="order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-none">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2.5rem] bg-[#80BE9F]/30 blur-2xl pointer-events-none"
                />
                <div className="relative rounded-[2rem] bg-white p-1.5 ring-1 ring-white/40 shadow-[0_40px_80px_-24px_rgba(31,42,37,0.45)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 400px, 384px"
                    className="w-full h-auto rounded-[calc(2rem-0.375rem)]"
                  />
                </div>
                {badge && (
                  <div className="absolute -bottom-5 left-4 lg:-left-10 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_40px_-12px_rgba(31,42,37,0.35)] ring-1 ring-[#E5ECE8]">
                    <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#517563] mb-1">
                      {badge.label}
                    </p>
                    <p className="text-[15px] font-semibold text-[#1F2A25]">
                      {badge.value}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={image ? "order-2 lg:order-1" : "max-w-3xl"}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-white/15 backdrop-blur-sm ring-1 ring-white/25 text-white mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9BD3B6]" />
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter !text-white leading-[1.05] mb-8 [text-wrap:balance]">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed border-l-2 border-[#9BD3B6] pl-6 max-w-2xl">
              {description}
            </p>
            {highlights && (
              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-white/15 ring-1 ring-white/25 text-white text-[15px] font-medium"
                  >
                    <span className="w-6 h-6 rounded-full bg-white text-[#517563] flex items-center justify-center">
                      <Check size={12} weight="bold" />
                    </span>
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {subheading && (
          <div className="mt-20 md:mt-24 mb-10 md:mb-12 flex items-center gap-5">
            <span aria-hidden className="h-px flex-1 bg-white/30" />
            <h3 className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold !text-white text-center">
              {subheading}
            </h3>
            <span aria-hidden className="h-px flex-1 bg-white/30" />
          </div>
        )}

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 items-start ${subheading ? "" : "mt-12 md:mt-14"}`}>
          {cards.map((c, i) => (
            <Card key={c.title} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
