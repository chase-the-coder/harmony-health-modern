"use client";

import { motion } from "framer-motion";
import { Check, X } from "@phosphor-icons/react";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

const ease = [0.16, 1, 0.3, 1] as const;

const isFor = [
  "New, short-term illnesses and minor urgent concerns",
  "Common sick complaints like sinus infections and urinary symptoms",
  "Quick questions about a simple, short-term medication need",
  "Getting seen from home without waiting for an in-person appointment",
];

const isNotFor = [
  "Ongoing management of chronic illnesses (such as diabetes, high blood pressure, or heart disease)",
  "Long-term prescription management for chronic conditions",
  "Medical emergencies. If you are having an emergency, call 911 or go to the nearest emergency room.",
];

const steps = [
  {
    number: "01",
    title: "Book online",
    description: "Choose a time that works for you. No membership required.",
  },
  {
    number: "02",
    title: "Meet by telehealth",
    description:
      "Connect with your provider from home, work, or wherever you are. We review your symptoms and history.",
  },
  {
    number: "03",
    title: "Get your plan",
    description:
      "Leave with clear next steps. If a prescription is appropriate, it is sent to your pharmacy.",
  },
];

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

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium mb-6 ${
        dark ? "bg-white/10 ring-1 ring-white/20 text-[#9BD3B6]" : "bg-[#6B9680]/10 text-[#517563]"
      }`}
    >
      {children}
    </span>
  );
}

export default function ModernSimpleCare() {
  return (
    <>
      {/* Is / isn't */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl mb-12 md:mb-14"
          >
            <Eyebrow>Know before you book</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
              Simple care for simple needs.
              <br />
              <span className="italic font-light text-[#517563]">Not chronic illness management.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
              className="rounded-3xl bg-[#F7F9F8] ring-1 ring-[#E5ECE8] shadow-sm p-7 md:p-10"
            >
              <h3 className="text-2xl font-bold tracking-tighter text-[#1F2A25] mb-6">
                Simple Care is for
              </h3>
              <ul className="space-y-4">
                {isFor.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#6B9680] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} weight="bold" />
                    </span>
                    <span className="text-base text-[#30373E] leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="rounded-3xl bg-[#1F2A25] shadow-md p-7 md:p-10"
            >
              <h3 className="text-2xl font-bold tracking-tighter !text-white mb-6">
                Simple Care is not for
              </h3>
              <ul className="space-y-4">
                {isNotFor.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/10 ring-1 ring-white/20 text-[#9BD3B6] flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} weight="bold" />
                    </span>
                    <span className="text-base text-white/85 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#FAF8F4] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl mb-12 md:mb-14"
          >
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
              Feeling sick?
              <br />
              <span className="italic font-light text-[#517563]">Get seen from home.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="rounded-3xl bg-white ring-1 ring-[#E5ECE8] shadow-sm p-7 md:p-9"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6B9680]/10 text-[#517563] text-sm font-semibold mb-6">
                  {s.number}
                </span>
                <h3 className="text-2xl font-bold tracking-tighter text-[#1F2A25] mb-3">
                  {s.title}
                </h3>
                <p className="text-base text-[#535353] leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-16 md:py-20 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="relative overflow-hidden rounded-3xl bg-[#1F2A25] shadow-md px-7 py-10 md:px-14 md:py-14"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 90% 0%, rgba(128,190,159,0.35) 0%, transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow dark>Pricing</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter !text-white leading-[1.05] mb-6">
                  Simple pricing.
                  <br />
                  <span className="italic font-light !text-[#9BD3B6]">No membership required.</span>
                </h2>
                <p className="text-lg text-white/85 leading-relaxed max-w-[58ch]">
                  Book a Simple Care telehealth visit on its own, anytime you need it. Members of our
                  Hormone Optimization Program have one visit per month included.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 md:p-8 min-w-[260px]">
                <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#517563] mb-2">
                  Telehealth visit
                </p>
                <p className="text-5xl font-bold tracking-tighter text-[#1F2A25] mb-1">$85</p>
                <p className="text-sm text-[#535353] mb-6">30-minute visit</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] active:scale-[0.98] transition-colors duration-300"
                >
                  Book a sick visit
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                    <Arrow />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
