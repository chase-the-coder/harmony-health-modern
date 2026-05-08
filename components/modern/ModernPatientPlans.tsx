"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "@phosphor-icons/react";

type Plan = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  includes: string[];
  priceLabel?: string;
  price: string;
  subPrice?: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  description?: string;
  plans: Plan[];
};

export default function ModernPatientPlans({
  eyebrow,
  headline,
  description,
  plans,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 md:mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isExternal = plan.ctaHref.startsWith("http");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col ${
        plan.featured
          ? "bg-[#6B9680] text-white ring-1 ring-[#6B9680]/30"
          : "bg-[#F7F9F8] ring-1 ring-[#E5ECE8]"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B9680] text-white text-[22px] uppercase tracking-[0.2em] font-semibold">
          <Star size={10} weight="fill" /> Most value
        </div>
      )}

      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium w-fit mb-6 ${
          plan.featured
            ? "bg-white/10 text-[#9BD3B6]"
            : "bg-[#6B9680]/10 text-[#517563]"
        }`}
      >
        {plan.eyebrow}
      </span>

      <h3
        className={`text-2xl md:text-3xl font-bold tracking-tight leading-[1.15] mb-4 ${
          plan.featured ? "!text-white" : "text-[#1F2A25]"
        }`}
      >
        {plan.title}
      </h3>

      <p
        className={`text-base leading-relaxed mb-6 ${
          plan.featured ? "text-white/75" : "text-[#30373E]"
        }`}
      >
        {plan.description}
      </p>

      <h4
        className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${
          plan.featured ? "text-[#9BD3B6]" : "text-[#517563]"
        }`}
      >
        What&rsquo;s included
      </h4>
      <ul className="space-y-2.5 mb-8">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                plan.featured
                  ? "bg-[#9BD3B6]/15 text-[#9BD3B6]"
                  : "bg-[#6B9680]/15 text-[#517563]"
              }`}
            >
              <Check size={12} weight="bold" />
            </div>
            <span
              className={`text-[15px] leading-relaxed ${
                plan.featured ? "text-white/85" : "text-[#30373E]"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-[#E5ECE8]/30">
        {plan.priceLabel && (
          <p
            className={`text-xs uppercase tracking-[0.2em] font-semibold mb-2 ${
              plan.featured ? "text-[#9BD3B6]" : "text-[#517563]"
            }`}
          >
            {plan.priceLabel}
          </p>
        )}
        <p
          className={`text-4xl md:text-5xl font-bold tracking-tighter mb-1 ${
            plan.featured ? "!text-white" : "text-[#1F2A25]"
          }`}
        >
          {plan.price}
        </p>
        {plan.subPrice && (
          <p
            className={`text-sm mb-6 ${
              plan.featured ? "text-white/60" : "text-[#535353]"
            }`}
          >
            {plan.subPrice}
          </p>
        )}

        {isExternal ? (
          <a
            href={plan.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full text-base font-medium active:scale-[0.98] transition-colors duration-300 ${
              plan.featured
                ? "bg-[#6B9680] hover:bg-[#80BE9F] text-white"
                : "bg-[#6B9680] hover:bg-[#517563] text-white"
            }`}
          >
            {plan.ctaLabel}
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 9L9 1M9 1H2M9 1V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <Link
            href={plan.ctaHref}
            className={`mt-4 inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full text-base font-medium active:scale-[0.98] transition-colors duration-300 ${
              plan.featured
                ? "bg-[#6B9680] hover:bg-[#80BE9F] text-white"
                : "bg-[#6B9680] hover:bg-[#517563] text-white"
            }`}
          >
            {plan.ctaLabel}
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 9L9 1M9 1H2M9 1V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
