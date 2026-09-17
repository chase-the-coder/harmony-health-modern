"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Stethoscope, Syringe, Sparkle, ArrowRight } from "@phosphor-icons/react";

const categories = [
  {
    icon: Stethoscope,
    title: "Medicine + Wellness",
    description:
      "Hormone programs, general health, IV hydration, and medical weight loss.",
    href: "#medicine-wellness",
  },
  {
    icon: Syringe,
    title: "Aesthetic Treatments",
    description:
      "Morpheus8, Lumecca, laser hair removal, EmpowerRF, APEX, and neurotoxin.",
    href: "#inmode",
  },
  {
    icon: Sparkle,
    title: "Facials + Skincare",
    description: "Facials, lash lift & tint, and curated treatment packages.",
    href: "#facials-lashes",
  },
];

export default function ModernPricingCategoryNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#FAF8F4] pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-2xl ring-1 ring-[#E5ECE8] shadow-sm p-6 md:p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#6B9680]/10 flex items-center justify-center mb-5">
                  <Icon size={22} weight="light" className="text-[#517563]" />
                </div>
                <h3 className="text-xl font-bold tracking-tighter text-[#1F2A25] mb-2">
                  {c.title}
                </h3>
                <p className="text-[15px] text-[#535353] leading-relaxed mb-6">
                  {c.description}
                </p>
                <Link
                  href={c.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#517563] hover:text-[#1F2A25] transition-colors"
                >
                  Explore
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
