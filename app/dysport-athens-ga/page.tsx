import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Dysport Injections in Athens, GA | Harmony Health",
  description: "Dysport neurotoxin injections in Athens, GA. Smooth forehead lines, crow's feet, and frown lines with fast, natural-looking results. Book at Harmony Health.",
  canonicalUrlRelative: "/dysport-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function DysportPage() {
  return (
    <>
      {renderServiceSchema({ name: "Dysport Injections", description: "Dysport neurotoxin for smoothing dynamic wrinkles in Athens, GA.", path: "/dysport-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Dysport", path: "/dysport-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                Neurotoxin · Athens, GA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
                Dysport in<br />
                <span className="italic font-light text-[#517563]">Athens, Georgia.</span>
              </h1>
              <p className="text-lg text-[#30373E] leading-relaxed mb-8 max-w-[52ch]">
                Dysport is a trusted neurotoxin that relaxes the muscles responsible for expression lines — smoothing forehead wrinkles, frown lines, and crow&rsquo;s feet with natural-looking results that set in quickly and last 3–4 months.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                  Book a consultation
                </Link>
                <Link href="/services-and-pricing#neurotoxin"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full ring-1 ring-[#6B9680]/30 text-[#517563] font-medium hover:bg-[#6B9680]/5 transition-colors">
                  View pricing
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image src="/assets/aesthetic/injectables.webp" alt="Dysport neurotoxin injections Athens GA" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 700px" />
            </div>
          </div>
        </section>

        {/* What is Dysport */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What is Dysport?</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Smooth lines,<br /><span className="italic font-light text-[#517563]">natural results.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed mb-4">
                Dysport is an FDA-approved neurotoxin that works by temporarily relaxing the muscles that create dynamic wrinkles — lines formed from repeated facial expressions like squinting, frowning, or raising your brows. Unlike fillers, Dysport doesn&rsquo;t add volume; it simply prevents the muscle movement that deepens lines over time.
              </p>
              <p className="text-[#30373E] leading-relaxed">
                Results typically appear within 2–5 days and last 3–4 months. Many patients prefer Dysport for its fast onset and natural-looking spread, which works particularly well in larger treatment areas like the forehead.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Common treatment areas</span>
              <ul className="space-y-3">
                {[
                  "Forehead lines (horizontal lines from brow raising)",
                  "Glabellar lines — 11s between the brows",
                  "Crow's feet at the outer corners of the eyes",
                  "Brow lift for a subtle, refreshed appearance",
                  "Bunny lines on the bridge of the nose",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing note */}
        <section className="bg-[#FAF8F4] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
              Priced by unit,<br /><span className="italic font-light text-[#517563]">customized for you.</span>
            </h2>
            <p className="text-[#30373E] leading-relaxed mb-6">
              Dysport is priced per unit, and the number of units needed varies by individual anatomy, muscle strength, and treatment goals. Pricing is determined at your consultation so you know exactly what to expect before committing.
            </p>
            <Link href={BOOK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
              Book a free consultation
            </Link>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
