"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Barbell,
  Scales,
  Flask,
  Drop,
  Sparkle,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Barbell,
    label: "01 · Hormone Replacement Therapy",
    title: "Restore the energy, drive, and balance you had at 30.",
    description:
      "Custom-dosed HRT for men and women. Comprehensive lab work, ongoing titration, pellets or injections, and a real provider who knows your labs by name.",
    features: ["Men's & Women's protocols", "Pellets or injections", "Quarterly titration"],
    image: "/assets/services/hrt.webp",
    href: "/hormone-replacement-therapy-athens-ga",
  },
  {
    icon: Scales,
    label: "02 · Medical Weight Loss",
    title: "GLP-1, with a provider in your corner.",
    description:
      "Evidence-based GLP-1 protocols paired with nutrition coaching and monthly check-ins. An average ~15% body weight loss over 68 weeks in clinical trials, with the provider accountability to keep it off.",
    features: ["GLP-1 & GLP-1", "Monthly management", "Sustainable pace"],
    image: "/assets/services/weight.webp",
    href: "/medical-weight-loss-athens-ga",
  },
  {
    icon: Flask,
    label: "03 · Peptide Therapy",
    title: "Targeted peptides for recovery, longevity, and performance.",
    description:
      "Sermorelin, BPC-157, TB-500, PT-141, GHK-Cu, and more. Science-backed protocols built around what your body actually needs: fat loss, muscle growth, healing, libido, or healthy aging.",
    features: ["6+ peptide protocols", "Personalized dosing", "Provider-guided"],
    image: "/assets/services/peptide.webp",
    href: "/peptide-therapy-athens-ga",
  },
  {
    icon: Drop,
    label: "04 · IV Hydration Therapy",
    title: "Rehydrate. Recharge. Restore.",
    description:
      "Immunity, Reboot, and Energize drips designed to rebuild what you&rsquo;re depleted in. Ideal for recovery, travel, stress, and the days you feel like you&rsquo;re running on fumes.",
    features: ["Immunity · Reboot · Energize", "45-min sessions", "Walk-in friendly"],
    image: "/assets/services/iv.webp",
    href: "/iv-hydration-therapy-athens-ga",
  },
  {
    icon: Sparkle,
    label: "05 · Aesthetic Treatments",
    title: "Morpheus8, InMode, and Dysport, delivered by a medical team.",
    description:
      "Morpheus8 skin remodeling, V Tone, Forma V, Aviva, Dysport, and dermal fillers. Aesthetic outcomes that feel like you, just more rested, done by providers who know anatomy deeply.",
    features: ["Morpheus8 & InMode suite", "Dysport & fillers", "Medical-grade only"],
    image: "/assets/services/aesthetic.webp",
    href: "/aesthetic-treatments-athens-ga",
  },
];

const ModernServices = () => {
  return (
    <section id="services" className="bg-[#FAF8F4] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader />

        <div className="mt-10 md:mt-12 space-y-14 md:space-y-20">
          {services.map((s, i) => (
            <ServiceRow key={i} service={s} reversed={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

function SectionHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
          Treatments
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] max-w-3xl">
          Five pillars.
          <br />
          <span className="text-[#6B9680]">One integrated plan.</span>
        </h2>
        <p className="text-lg text-[#535353] leading-relaxed max-w-[60ch] mt-8">
          Most clinics pick one thing and sell it hard. We offer the five
          modalities that actually move the needle for hormonal health,
          metabolism, recovery, and how you look when you catch yourself in
          the mirror.
        </p>
      </motion.div>
    </div>
  );
}

function ServiceRow({
  service,
  reversed,
}: {
  service: (typeof services)[number];
  reversed: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
    >
      <div className={reversed ? "md:order-2" : "md:order-1"}>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
          {service.label}
        </span>
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1F2A25] leading-[1.1] mb-4">
          {service.title}
        </h3>
        <p className="text-base md:text-lg text-[#535353] leading-relaxed max-w-[52ch] mb-6">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((f) => (
            <span
              key={f}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#30373E] ring-1 ring-[#E5ECE8]"
            >
              {f}
            </span>
          ))}
        </div>
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#517563] hover:text-[#6B9680] transition-colors"
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 9L9 1M9 1H2M9 1V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className={reversed ? "md:order-1" : "md:order-2"}>
        <div className="relative rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_20px_40px_-15px_rgba(31,42,37,0.08)]">
          <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#F7F9F8] aspect-[4/5]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center ring-1 ring-[#E5ECE8]">
              <Icon size={22} weight="regular" className="text-[#517563]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ModernServices;
