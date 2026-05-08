"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

const ModernCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-[#FAF8F4] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-[#6B9680] px-8 md:px-16 py-16 md:py-20 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6B9680]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#80BE9F]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-white/5 text-[#80BE9F] mb-8">
              Ready when you are
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter !text-white leading-[1.05] mb-6">
              One conversation could
              <br />
              <span className="italic font-light text-white/70">change everything.</span>
            </h2>

            <p className="text-lg text-white/65 leading-relaxed max-w-[54ch] mb-10">
              Book a consultation and we&rsquo;ll walk through your symptoms,
              your goals, and whether Harmony is the right fit. Thirty
              minutes. No pressure. No obligation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1F2A25] text-base font-medium hover:bg-[#F7F9F8] active:scale-[0.98] transition-colors duration-300"
              >
                Book your consultation
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#6B9680]/5">
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
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 text-white text-base font-medium ring-1 ring-white/10 hover:bg-white/10 active:scale-[0.98] transition-colors duration-300"
              >
                Contact us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCTA;
