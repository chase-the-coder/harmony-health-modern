"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "@phosphor-icons/react";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

export default function ModernContactMapHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(107,150,128,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-white/60 backdrop-blur-sm ring-1 ring-[#6B9680]/20 text-[#517563] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                Contact
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tighter leading-[1] text-[#1F2A25] mb-8"
            >
              Your first step is
              <br />
              <span className="italic font-light text-[#517563]">
                a conversation.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#30373E] leading-relaxed max-w-[56ch] mb-8"
            >
              We&rsquo;re on W. Broad Street in Athens, open Tuesday through
              Thursday. Call, email, or use the form below and we&rsquo;ll be
              back to you within a business day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] active:scale-[0.98] transition-colors duration-300"
              >
                Book an appointment
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
              <a
                href="tel:7066146818"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm text-[#1F2A25] text-base font-medium ring-1 ring-[#6B9680]/20 hover:bg-white active:scale-[0.98] transition-colors duration-300"
              >
                Call (706) 614-6818
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 text-sm text-[#30373E]"
            >
              <div>
                <span className="block text-[22px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">
                  Office hours
                </span>
                Tue &middot; Wed &middot; Thu, 9am&ndash;3pm
              </div>
              <div>
                <span className="block text-[22px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">
                  Email
                </span>
                <Link
                  href="mailto:info@yourharmonyhealth.com"
                  className="hover:text-[#517563] transition-colors"
                >
                  info@yourharmonyhealth.com
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] bg-[#F7F9F8]">
                <iframe
                  src="https://www.google.com/maps?q=2425+W+Broad+Street+Suite+2+Athens+GA+30606&z=15&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harmony Health location on Google Maps"
                  className="border-0 absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2425+W+Broad+Street+Suite+2+Athens+GA+30606"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 -left-4 md:-left-8 bg-white rounded-2xl ring-1 ring-[#E5ECE8] shadow-[0_20px_40px_-15px_rgba(31,42,37,0.15)] px-5 py-4 max-w-[260px] hover:ring-[#6B9680]/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0">
                  <MapPin size={20} weight="regular" />
                </div>
                <div>
                  <p className="text-[22px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">
                    Visit us
                  </p>
                  <p className="text-sm font-semibold text-[#1F2A25] leading-tight">
                    2425 W. Broad St, Suite 2
                  </p>
                  <p className="text-xs text-[#535353]">Athens, GA 30606</p>
                  <p className="text-xs text-[#517563] mt-2 font-medium">
                    Get directions &rarr;
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
