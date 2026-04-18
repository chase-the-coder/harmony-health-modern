"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ModernAboutJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#F7F9F8] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="lg:order-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
              Her health journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-8">
              Why functional medicine
              <br />
              <span className="text-[#6B9680]">became personal.</span>
            </h2>
            <div className="space-y-6 text-lg text-[#30373E] leading-relaxed">
              <p>
                After having her third child, Megan began experiencing severe
                joint pain and extreme fatigue. After multiple visits and labs,
                she was diagnosed with Rheumatoid Arthritis. The only answer
                she got was a prescription pad.
              </p>
              <p>
                She wanted to know what had turned the disease on, not just
                how to suppress it. Through research and a functional
                practitioner, she found the answer. Today she&rsquo;s thriving
                in RA remission through daily choices and identity shifts
                rather than lifelong medication.
              </p>
              <p className="text-[#1F2A25] font-medium">
                That experience shaped how Harmony Health works. Your story is
                not a template, and your plan shouldn&rsquo;t be either.
              </p>
            </div>
          </div>

          <div className="lg:order-2 relative">
            <div className="rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/5] bg-[#F7F9F8]">
                <Image
                  src="/legacy-images/about/megan-support.jpg"
                  alt="Megan with her family in the kitchen"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 hidden md:flex bg-[#1F2A25] rounded-2xl px-5 py-4 items-center gap-3 shadow-[0_20px_40px_-15px_rgba(31,42,37,0.3)]">
              <div className="w-8 h-8 rounded-full bg-[#80BE9F]/20 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="#80BE9F"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#80BE9F] font-medium">
                  Today
                </p>
                <p className="text-sm font-semibold !text-white">
                  RA remission, through lifestyle
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernAboutJourney;
