"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Leaf, MagnifyingGlass } from "@phosphor-icons/react";

const credentials = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Master's, Nurse Practitioner",
    detail: "Texas A&M University, 2013",
  },
  {
    icon: Leaf,
    label: "Specialty",
    value: "Functional & Integrative Care",
    detail: "Root-cause, cellular-level healing",
  },
  {
    icon: MagnifyingGlass,
    label: "Approach",
    value: "Lab-guided, patient-led",
    detail: "Personalized over standardized protocols",
  },
];

const ModernAboutBio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-14 max-w-3xl"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            Megan&rsquo;s story
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
            Built on the questions
            <br />
            <span className="text-[#6B9680]">conventional care skips.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[2rem] bg-[#F7F9F8] p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_20px_40px_-15px_rgba(31,42,37,0.08)]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/5] bg-[#F7F9F8]">
                <Image
                  src="/legacy-images/about/megan-branded.webp"
                  alt="Megan Cryder working with patients"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3">
              {credentials.map(({ icon: Icon, label, value, detail }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl bg-white ring-1 ring-[#E5ECE8] p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0">
                    <Icon size={18} weight="regular" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#535353] mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-[#1F2A25]">
                      {value}
                    </p>
                    <p className="text-xs text-[#535353] mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-lg text-[#30373E] leading-relaxed"
          >
            <p>
              Megan founded Harmony Health with a specific focus on hormone
              optimization and medical weight loss. Her work is driven by a
              simple premise: the answers are in the details. Before anyone
              writes a prescription, she wants to know what your labs, your
              history, and your lifestyle are actually saying.
            </p>
            <p>
              After attending the Medical College of Georgia School of Nursing,
              she earned her Master&rsquo;s as a Nurse Practitioner from Texas
              A&amp;M University in 2013. She has practiced western medicine
              since 2005, and combines that background with functional and
              integrative training. The result is a practice that treats the
              person, not the protocol.
            </p>
            <blockquote className="border-l-4 border-[#6B9680] pl-6 py-2 text-xl md:text-2xl font-medium text-[#1F2A25] italic leading-snug">
              &ldquo;I don&rsquo;t want to standardize you. I want to
              understand you, then build the plan from there.&rdquo;
              <cite className="block mt-3 text-sm not-italic font-normal text-[#535353]">
                &mdash; Megan Cryder, NP-C
              </cite>
            </blockquote>
            <p>
              Outside the clinic, her highest calling is to her husband and
              three children, who teach her daily about longevity and living
              life well.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernAboutBio;
