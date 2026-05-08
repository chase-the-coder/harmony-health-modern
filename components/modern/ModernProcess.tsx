"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start with a deep intake. Your history, your symptoms, your goals, your lifestyle. We listen to what's actually going on before we write anything down.",
    duration: "Visit 1",
  },
  {
    number: "02",
    title: "Comprehensive labs",
    description:
      "Full hormone panel, metabolic markers, nutrient status, and anything else your symptoms point us toward. Baseline numbers before any plan.",
    duration: "Week 1 - 2",
  },
  {
    number: "03",
    title: "Personalized plan",
    description:
      "We sit down together and walk through every result. Then we build your plan: HRT, weight loss, peptides, IV, or aesthetic work dosed to your biology.",
    duration: "Visit 2",
  },
  {
    number: "04",
    title: "Ongoing care",
    description:
      "Quarterly follow-ups, titration, messaging between visits, and a provider who remembers you. We adjust the plan as your body responds.",
    duration: "Ongoing",
  },
];

const ModernProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="bg-[#6B9680] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-white/5 text-[#80BE9F] mb-6">
            Your path
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter !text-white leading-[1.05] max-w-3xl">
            From &ldquo;something&rsquo;s off&rdquo;
            <br className="hidden md:block" />
            {" "}to feeling like yourself.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-[2rem] overflow-hidden">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#6B9680] p-8 md:p-10 flex flex-col"
    >
      <div className="flex items-center justify-between mb-10">
        <span className="text-6xl font-bold text-white/15">{step.number}</span>
        <span className="text-xs font-medium text-[#80BE9F]/70 uppercase tracking-wider">
          {step.duration}
        </span>
      </div>

      <h3 className="text-2xl font-bold !text-white tracking-tight mb-4">
        {step.title}
      </h3>

      <p className="text-base text-white/65 leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export default ModernProcess;
