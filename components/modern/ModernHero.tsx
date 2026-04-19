"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

const ModernHero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#FAF8F4]">
      <div className="absolute inset-0 hero-video-mask">
        <Image
          src="/assets/hero-still.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          poster="/assets/hero-still.webp"
        >
          <source src="/assets/hero-video-loop.mp4?v=8" type="video/mp4" />
        </video>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(250,248,244,0.45) 0%, rgba(250,248,244,0.75) 55%, rgba(250,248,244,0.97) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-white/60 backdrop-blur-sm ring-1 ring-[#6B9680]/20 text-[#517563] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680] animate-pulse" />
              Athens, GA · In-Person & Virtual
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[88px] font-bold tracking-tighter leading-[0.95] text-[#1F2A25] mb-8"
          >
            Chase
            <br />
            <span className="italic font-light text-[#517563]">Test</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#30373E] leading-relaxed max-w-[58ch] mx-auto mb-12"
          >
            More energy, better sleep, a body that responds again, and a
            provider who actually knows your labs. Hormone therapy, medical
            weight loss, peptides, and aesthetics, all guided by your
            biochemistry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1F2A25] text-white text-base font-medium hover:bg-[#2A3832] active:scale-[0.98] transition-colors duration-300"
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
            <Link
              href="/services-and-pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm text-[#1F2A25] text-base font-medium ring-1 ring-[#6B9680]/20 hover:bg-white active:scale-[0.98] transition-colors duration-300"
            >
              Explore treatments
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 inline-flex items-center gap-3 text-sm text-[#535353]"
          >
            <span className="w-10 h-px bg-[#6B9680]/40" />
            <span className="text-[#30373E]">
              Personalized care led by{" "}
              <span className="font-semibold">Megan Cryder, NP-C</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
