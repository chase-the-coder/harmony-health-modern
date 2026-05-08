"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Leaf,
  Lightning,
  Heart,
  Sparkle,
  Waveform,
  Drop,
  CircleNotch,
  HandHeart,
  Eye,
} from "@phosphor-icons/react";

const ICONS = {
  leaf: Leaf,
  lightning: Lightning,
  heart: Heart,
  sparkle: Sparkle,
  waveform: Waveform,
  drop: Drop,
  circle: CircleNotch,
  hand: HandHeart,
  eye: Eye,
};

export type CardIconKey = keyof typeof ICONS;

type Card = {
  iconKey: CardIconKey;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  idealFor: string;
};

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  description?: string;
  items: Card[];
  label?: string;
};

export default function ModernCardGrid({
  eyebrow,
  headline,
  description,
  items,
  label = "Treatment",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F7F9F8] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 md:mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
            {headline}
          </h2>
          {description && (
            <p className="text-lg text-[#535353] leading-relaxed max-w-[60ch] mt-6">
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {items.map((p, i) => (
            <CardView key={p.name} card={p} index={i} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardView({
  card,
  index,
  label,
}: {
  card: Card;
  index: number;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = ICONS[card.iconKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[2rem] bg-white ring-1 ring-[#E5ECE8] p-8 md:p-10 flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#6B9680]/10 text-[#517563] flex items-center justify-center">
          <Icon size={22} weight="regular" />
        </div>
        <span className="text-xs font-medium text-[#517563]/70 uppercase tracking-wider">
          {label}
        </span>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1F2A25] mb-2">
        {card.name}
      </h3>
      <p className="text-sm text-[#6B9680] font-medium mb-4">{card.tagline}</p>
      <p className="text-base text-[#30373E] leading-relaxed mb-6">
        {card.description}
      </p>

      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#517563] mb-3">
        Key benefits
      </h4>
      <ul className="space-y-2.5 mb-6">
        {card.benefits.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-[#6B9680]/15 text-[#517563] flex items-center justify-center shrink-0 mt-0.5">
              <Check size={12} weight="bold" />
            </div>
            <span className="text-[15px] text-[#30373E] leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-[#E5ECE8]">
        <p className="text-sm text-[#535353] leading-relaxed">
          <span className="font-semibold text-[#1F2A25]">Ideal for:</span>{" "}
          {card.idealFor}
        </p>
      </div>
    </motion.div>
  );
}
