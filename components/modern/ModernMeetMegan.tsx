"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SealCheck, GraduationCap, Stethoscope } from "@phosphor-icons/react";

const credentials = [
  { icon: Stethoscope, label: "Nurse Practitioner", value: "Board certified" },
  {
    icon: GraduationCap,
    label: "Nursing, MCG",
    value: "MSN-FNP, Texas A&M 2013",
  },
  { icon: SealCheck, label: "Practicing", value: "Hormones · Weight · Peptides" },
];

export default function ModernMeetMegan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FAF8F4] pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-10 lg:gap-16 items-center"
        >
          <div className="order-1">
            <div className="relative rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/5] bg-[#F7F9F8]">
                <Image
                  src="/legacy-images/about/megan.jpg"
                  alt="Megan Cryder, NP-C, founder of Harmony Health"
                  fill
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute-hidden" />
            <div className="relative -mt-6 ml-6 inline-flex items-center gap-3 bg-white rounded-2xl ring-1 ring-[#E5ECE8] shadow-[0_20px_40px_-15px_rgba(31,42,37,0.12)] px-5 py-3">
              <span className="w-9 h-9 rounded-xl bg-[#6B9680]/10 text-[#517563] flex items-center justify-center">
                <SealCheck size={18} weight="fill" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563]">
                  Founder &amp; Provider
                </p>
                <p className="text-sm font-semibold text-[#1F2A25]">
                  Megan Cryder, NP-C
                </p>
              </div>
            </div>
          </div>

          <div className="order-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
              Meet your provider
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-6">
              You won&rsquo;t see a different face
              <br />
              <span className="text-[#6B9680]">every time you come in.</span>
            </h2>
            <p className="text-lg text-[#30373E] leading-relaxed max-w-[56ch] mb-6">
              Harmony Health is Megan Cryder, NP-C. She founded the practice
              after watching patients cycle through conventional offices
              getting scripts without answers. Every intake, every lab review,
              every titration at Harmony goes through her.
            </p>
            <p className="text-base text-[#535353] leading-relaxed max-w-[56ch] mb-10 italic">
              &ldquo;I wanted a practice where we actually ask why. Why are
              you tired, why are your labs off, why has nothing worked. That&rsquo;s
              the first hour of every new patient visit.&rdquo; &mdash; Megan
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {credentials.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-[#E5ECE8] px-4 py-3"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0">
                      <Icon size={18} weight="regular" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-0.5">
                        {c.label}
                      </p>
                      <p className="text-[13px] text-[#1F2A25] font-medium leading-tight">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1F2A25] text-white text-base font-medium hover:bg-[#2A3832] active:scale-[0.98] transition-colors duration-300"
            >
              More about Megan
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
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
