"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Thanks to Megan, I feel like myself again. Her expertise in HRT has transformed my energy levels and lifted my mood. She genuinely cares about her patients and their well-being.",
    author: "David L.",
    role: "HRT patient",
  },
  {
    quote:
      "Megan Cryder is simply amazing. Whether it was addressing my weight loss goals or balancing my hormones, her dedication and knowledge made all the difference. Harmony Health changed my life.",
    author: "Sarah T.",
    role: "HRT & weight loss patient",
  },
  {
    quote:
      "Megan has been a game-changer in my weight loss journey. Her personalized approach and encouragement helped me lose 25 pounds in a few months. I finally feel confident and healthy again.",
    author: "Jessica M.",
    role: "Medical weight loss patient",
  },
];

const ModernTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-14 max-w-3xl"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
            Patient stories
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
            Hear it from them,
            <br />
            <span className="text-[#6B9680]">not from us.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[2rem] bg-[#F7F9F8] ring-1 ring-[#E5ECE8] p-8 md:p-10 flex flex-col"
    >
      <Quotes size={28} weight="fill" className="text-[#6B9680]/30 mb-6" />
      <p className="text-base md:text-lg text-[#30373E] leading-relaxed flex-grow mb-8">
        {testimonial.quote}
      </p>
      <div>
        <p className="text-sm font-semibold text-[#1F2A25]">
          {testimonial.author}
        </p>
        <p className="text-xs text-[#535353] uppercase tracking-wider mt-1">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}

export default ModernTestimonials;
