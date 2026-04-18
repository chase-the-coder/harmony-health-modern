"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Handshake,
  TestTube,
  Books,
} from "@phosphor-icons/react";

const values = [
  {
    icon: Target,
    title: "Root-cause over symptoms",
    description:
      "We chase the why. Why are you tired, why won't the weight move, why did your labs shift. Treating the source, not just the surface.",
  },
  {
    icon: TestTube,
    title: "Lab-guided, always",
    description:
      "Baseline labs before any protocol. Follow-up labs before any titration. We make decisions with data, not guesses.",
  },
  {
    icon: Handshake,
    title: "Collaborative, not prescriptive",
    description:
      "Your plan is a conversation. You know your body, we know the biochemistry. We build it together, and you stay in the driver's seat.",
  },
  {
    icon: Books,
    title: "Investigative learning",
    description:
      "Functional medicine evolves fast. We keep reading, keep studying, keep questioning. If there's a better way, you'll hear about it from us first.",
  },
];

const ModernAboutValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            How we practice
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
            Four principles
            <br />
            <span className="text-[#6B9680]">that shape every visit.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = value.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[2rem] bg-[#F7F9F8] ring-1 ring-[#E5ECE8] p-8 md:p-10"
    >
      <div className="w-12 h-12 rounded-2xl bg-white ring-1 ring-[#E5ECE8] flex items-center justify-center mb-6">
        <Icon size={22} weight="regular" className="text-[#517563]" />
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-[#1F2A25] mb-3">
        {value.title}
      </h3>
      <p className="text-base text-[#535353] leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  );
}

export default ModernAboutValues;
