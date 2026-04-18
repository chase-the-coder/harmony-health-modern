"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Moon, Scales, Heartbeat } from "@phosphor-icons/react";

type Stat = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  source: string;
  sourceUrl: string;
  icon: typeof Heartbeat;
  accent: boolean;
};

const stats: Stat[] = [
  {
    value: 38.7,
    suffix: "%",
    label: "of men age 45+ meet the clinical threshold for low testosterone",
    source: "Mulligan et al., HIM Study, Int J Clin Pract 2006",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16846397/",
    icon: Heartbeat,
    accent: true,
  },
  {
    value: 80,
    prefix: "up to ",
    suffix: "%",
    label: "of women experience hot flashes, night sweats, or sleep disruption during the menopausal transition",
    source: "SWAN Study, AHA Journal 2021",
    sourceUrl: "https://www.ahajournals.org/doi/10.1161/JAHA.120.017416",
    icon: Moon,
    accent: false,
  },
  {
    value: 14.9,
    suffix: "%",
    label: "average body weight loss at 68 weeks on semaglutide 2.4mg (STEP-1 trial)",
    source: "Wilding et al., STEP-1, NEJM 2021",
    sourceUrl: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
    icon: Scales,
    accent: false,
  },
];

function useCountUp(target: number, isInView: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

const ModernProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            Why you feel off
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-6">
            Tired. Stuck. Not
            <br />
            <span className="text-[#6B9680]">yourself anymore.</span>
          </h2>
          <p className="text-lg text-[#535353] leading-relaxed max-w-[58ch]">
            Low energy, stubborn weight, mood swings, poor sleep, fading libido.
            These aren&rsquo;t just aging. They&rsquo;re measurable hormonal
            and metabolic shifts that respond to the right treatment plan.
          </p>
          <p className="text-lg text-[#1F2A25] font-medium mt-4 max-w-[58ch]">
            The gap isn&rsquo;t effort. It&rsquo;s that nobody has actually
            tested your biochemistry and built a plan around what your body
            needs right now.
          </p>
        </motion.div>

        <div className="pt-16 border-t border-[#E5ECE8]">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#535353] mb-8">
            The clinical picture, in peer-reviewed data
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
          <p className="text-xs text-[#535353]/70 mt-6 max-w-3xl">
            Source citations are linked on each card. Individual results vary.
            Harmony Health does not guarantee any specific clinical outcome.
          </p>
        </div>
      </div>
    </section>
  );
};

function formatValue(n: number, target: number) {
  if (Number.isInteger(target)) return Math.round(n).toString();
  return n.toFixed(1);
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(stat.value, isInView);

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-[2rem] p-8 md:p-10 flex flex-col ${
        stat.accent
          ? "bg-[#1F2A25] text-white"
          : "bg-white ring-1 ring-[#E5ECE8]"
      }`}
    >
      <Icon
        size={24}
        weight="regular"
        className={stat.accent ? "text-[#80BE9F] mb-4" : "text-[#6B9680] mb-4"}
      />
      <div
        className={`text-5xl md:text-6xl font-bold tracking-tighter mb-3 ${
          stat.accent ? "!text-white" : "text-[#1F2A25]"
        }`}
      >
        {stat.prefix}
        {formatValue(count, stat.value)}
        {stat.suffix}
      </div>
      <p
        className={`text-sm leading-relaxed flex-grow ${
          stat.accent ? "text-white/75" : "text-[#535353]"
        }`}
      >
        {stat.label}
      </p>
      <a
        href={stat.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors ${
          stat.accent
            ? "text-white/50 hover:text-[#80BE9F]"
            : "text-[#535353]/70 hover:text-[#517563]"
        }`}
      >
        {stat.source} &rarr;
      </a>
    </motion.div>
  );
}

export default ModernProblem;
