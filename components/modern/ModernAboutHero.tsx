"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

const ModernAboutHero = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-white/60 backdrop-blur-sm ring-1 ring-[#6B9680]/20 text-[#517563] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                Meet your practitioner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-8"
            >
              A provider
              <br />
              <span className="italic font-light text-[#517563]">
                who cares about your story.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#30373E] leading-relaxed max-w-[58ch] mb-10"
            >
              Harmony Health was founded by Megan Cryder, NP-C to fill a gap
              she kept seeing in conventional care: providers writing scripts
              without asking the root-cause questions. A functional, lab-guided
              approach to hormones, weight, and vitality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] active:scale-[0.98] transition-colors duration-300"
              >
                Book with Megan
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
              <Link
                href="/services-and-pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm text-[#1F2A25] text-base font-medium ring-1 ring-[#6B9680]/20 hover:bg-white active:scale-[0.98] transition-colors duration-300"
              >
                Explore treatments
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-md mx-auto lg:mx-0 w-full"
          >
            <div className="rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/5] bg-[#F7F9F8]">
                <Image
                  src="/legacy-images/about/megan-about.jpg"
                  alt="Megan Cryder, NP-C"
                  fill
                  priority
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-6 -left-4 md:-left-8 bg-white rounded-2xl ring-1 ring-[#E5ECE8] shadow-[0_20px_40px_-15px_rgba(31,42,37,0.12)] px-5 py-4 max-w-[220px]">
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#517563] mb-1">
                Founder
              </p>
              <p className="text-sm font-semibold text-[#1F2A25]">
                Megan Cryder, NP-C
              </p>
              <p className="text-xs text-[#535353] mt-0.5">
                Texas A&amp;M &middot; 2013
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernAboutHero;
