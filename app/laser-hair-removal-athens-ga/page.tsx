import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Laser Hair Removal in Athens, GA | Harmony Health",
  description: "Permanent laser hair removal in Athens, GA using Fusion by InMode. Smooth skin for all skin tones. View pricing and book a free consultation at Harmony Health.",
  canonicalUrlRelative: "/laser-hair-removal-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

const pricing = [
  { area: "Chin", price: "$350" },
  { area: "Upper Lip", price: "$350" },
  { area: "Sideburns", price: "$350" },
  { area: "Neck", price: "$450" },
  { area: "Underarms", price: "$500" },
  { area: "Full Face", price: "$600" },
  { area: "Bikini", price: "$400" },
  { area: "Brazilian", price: "$650" },
  { area: "Stomach", price: "$650" },
  { area: "Chest", price: "$650" },
  { area: "Arms", price: "$800" },
  { area: "Legs", price: "$1,200" },
  { area: "Back", price: "$1,200" },
  { area: "Full Body Unlimited", price: "$3,250" },
];

export default function LaserHairRemovalPage() {
  return (
    <>
      {renderServiceSchema({ name: "Laser Hair Removal", description: "Permanent laser hair removal using Fusion by InMode in Athens, GA.", path: "/laser-hair-removal-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Laser Hair Removal", path: "/laser-hair-removal-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                InMode Fusion · Athens, GA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
                Laser Hair Removal<br />
                <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
              </h1>
              <p className="text-lg text-[#30373E] leading-relaxed mb-8 max-w-[52ch]">
                Smooth, lasting results using Fusion by InMode — one of the most advanced laser hair removal platforms available. Safe for a wide range of skin tones, with comfortable treatments and no downtime.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                  Book a free consultation
                </Link>
                <Link href="/services-and-pricing#inmode"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full ring-1 ring-[#6B9680]/30 text-[#517563] font-medium hover:bg-[#6B9680]/5 transition-colors">
                  View pricing
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image src="/assets/aesthetic/morpheus8.webp" alt="Laser hair removal treatment Athens GA" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 700px" />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">How it works</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Permanent reduction,<br /><span className="italic font-light text-[#517563]">not just removal.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed mb-4">
                Fusion laser technology targets the pigment in hair follicles with precise pulses of light, heating and disabling the follicle to prevent future growth. Because hair grows in cycles, a series of 6 sessions gives you the most complete and lasting results across all active follicles.
              </p>
              <p className="text-[#30373E] leading-relaxed">
                Treatments are fast, comfortable, and require no downtime. Most patients describe the sensation as a light snap — nothing more. Sessions are spaced 4–6 weeks apart for optimal results.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What to expect</span>
              <ul className="space-y-3">
                {["Avoid sun exposure and tanning for 2 weeks before treatment", "Shave the treatment area the day before your appointment", "Sessions take 15–60 minutes depending on area size", "Mild redness for a few hours post-treatment is normal", "Hair sheds gradually over 2–3 weeks after each session"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-[#FAF8F4] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-2">Treatment area pricing</h2>
              <p className="text-[#535353]">All packages include 6 sessions.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
              {pricing.map((p) => (
                <div key={p.area} className="flex justify-between items-center bg-white rounded-xl px-5 py-4 ring-1 ring-[#E5ECE8] shadow-sm">
                  <span className="text-[#1F2A25] font-medium">{p.area}</span>
                  <span className="text-[#517563] font-bold">{p.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                Book a free consultation
              </Link>
            </div>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
