"use client";

import { motion } from "framer-motion";
import { MapPin, VideoCamera, Certificate, Heart } from "@phosphor-icons/react";

const items = [
  { icon: MapPin, label: "Athens, Georgia" },
  { icon: VideoCamera, label: "In-person & Virtual visits" },
  { icon: Certificate, label: "Board-certified NP" },
  { icon: Heart, label: "500+ patients served" },
];

const ModernTrustBar = () => {
  return (
    <section className="bg-white py-8 border-y border-[#E5ECE8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-full bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0">
                <Icon size={18} weight="regular" />
              </div>
              <span className="text-sm font-medium text-[#30373E]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTrustBar;
