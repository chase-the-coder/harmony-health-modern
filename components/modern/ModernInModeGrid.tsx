import Link from "next/link";
import { Plus } from "@phosphor-icons/react/dist/ssr";

type Treatment = {
  name: string;
  accent: string;
  description: string;
  href: string;
};

const treatments: Treatment[] = [
  {
    name: "Morpheus8",
    accent: "Face & Body",
    description:
      "Morpheus8 combines microneedling with radiofrequency (RF) energy to stimulate collagen and elastin at depth, leading to skin tightening, more even tone, reduced lines, and a more vibrant appearance.",
    href: "/morpheus8-athens-ga",
  },
  {
    name: "Lumecca",
    accent: "IPL",
    description:
      "Lumecca is the most powerful intense pulsed light (IPL) treatment available, targeting sun damage, pigmentation, vascular lesions, and uneven skin tone.",
    href: "/lumecca-ipl-athens-ga",
  },
  {
    name: "Fusion",
    accent: "Laser Hair Removal",
    description:
      "Fusion's advanced technology provides effective, long-lasting hair reduction with comfortable, customizable treatments for a variety of skin tones and treatment areas.",
    href: "/laser-hair-removal-athens-ga",
  },
  {
    name: "EmpowerRF",
    accent: "Women's Pelvic Health",
    description:
      "EmpowerRF uses RF and electrical muscle stimulation to improve pelvic health, sexual wellness, and vaginal rejuvenation without surgery or downtime.",
    href: "/womens-pelvic-health",
  },
  {
    name: "Apex",
    accent: "Men's Performance",
    description:
      "Apex uses radiofrequency energy to improve blood flow, sensitivity, and tissue tone for men's sexual performance and vascular optimization.",
    href: "/mens-sexual-health",
  },
];

export default function ModernInModeGrid() {
  return (
    <section className="bg-[#FAF8F4] pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {treatments.map((t) => (
            <div key={t.href}>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-[#1F2A25] mb-3">
                {t.name}{" "}
                <span className="italic font-light text-[#517563]">
                  {t.accent}
                </span>
              </h3>
              <p className="text-[#30373E] leading-relaxed mb-5">
                {t.description}
              </p>
              <Link
                href={t.href}
                className="group inline-flex items-center justify-between gap-6 w-full max-w-xs border-b border-[#E5ECE8] pb-3 text-[13px] uppercase tracking-[0.2em] font-semibold text-[#517563] hover:text-[#1F2A25] hover:border-[#6B9680] transition-colors"
              >
                Learn More
                <Plus size={14} weight="bold" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
