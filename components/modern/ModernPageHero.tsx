"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type Props = {
  eyebrow: string;
  tagline?: string;
  headline: React.ReactNode;
  description: string;
  image: { src: string; alt: string; objectPosition?: string };
  primaryCta?: CTA;
  secondaryCta?: CTA;
  badge?: { label: string; value: string };
};

export default function ModernPageHero({
  eyebrow,
  tagline,
  headline,
  description,
  image,
  primaryCta = { label: "Book an appointment", href: BOOKING_URL },
  secondaryCta,
  badge,
}: Props) {
  const isExternal = primaryCta.href.startsWith("http");

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-white/60 backdrop-blur-sm ring-1 ring-[#6B9680]/20 text-[#517563] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                {eyebrow}
              </span>
            </motion.div>

            {tagline && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl text-[#517563] tracking-wide mb-4 -mt-4"
              >
                {tagline}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tighter leading-[1] text-[#1F2A25] mb-8"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#30373E] leading-relaxed max-w-[58ch] mb-10"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={primaryCta.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] active:scale-[0.98] transition-colors duration-300"
              >
                {primaryCta.label}
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
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm text-[#1F2A25] text-base font-medium ring-1 ring-[#6B9680]/20 hover:bg-white active:scale-[0.98] transition-colors duration-300"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden aspect-[4/3] bg-[#F7F9F8]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                />
              </div>
            </div>
            {badge && (
              <div className="absolute bottom-6 -left-4 md:-left-8 bg-white rounded-2xl ring-1 ring-[#E5ECE8] shadow-[0_20px_40px_-15px_rgba(31,42,37,0.12)] px-5 py-4 max-w-[220px]">
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#517563] mb-1">
                  {badge.label}
                </p>
                <p className="text-sm font-semibold text-[#1F2A25]">
                  {badge.value}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
