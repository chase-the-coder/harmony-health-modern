import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Gentleman's Facial in Athens, GA | Harmony Health",
  description: "Men's facial in Athens, GA. Deep cleansing, exfoliation, extractions, and post-shave soothing for healthy, refreshed skin. $180 at Harmony Health.",
  canonicalUrlRelative: "/gentlemens-facial-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function GentlemensFacialPage() {
  return (
    <>
      {renderServiceSchema({ name: "Gentleman's Facial", description: "Tailored men's facial with deep cleansing, extractions, and skin balancing in Athens, GA.", path: "/gentlemens-facial-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Gentleman's Facial", path: "/gentlemens-facial-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#1F2A25] pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-white/10 text-[#9BD3B6] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9BD3B6]" />
              Men&rsquo;s Skincare · Athens, GA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-white mb-6 max-w-3xl">
              Gentleman&rsquo;s Facial<br />
              <span className="italic font-light text-[#9BD3B6]">in Athens, Georgia.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-[52ch]">
              A tailored treatment designed for men&rsquo;s skin — deep cleansing, exfoliation, extractions, and a calming mask to soothe irritation and leave skin refreshed and balanced. No frills. Just results.
            </p>
            <p className="text-3xl font-bold text-white mb-8">$180</p>
            <Link href={BOOK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
              Book this facial
            </Link>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What to expect</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Healthy skin,<br /><span className="italic font-light text-[#517563]">without the fuss.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed mb-4">
                The Gentleman&rsquo;s Facial begins with a deep cleansing to remove impurities and excess oils, followed by gentle exfoliation to clear clogged pores and promote smoother skin. A calming mask is applied to soothe irritation — especially from shaving — and to hydrate the skin.
              </p>
              <p className="text-[#30373E] leading-relaxed mb-4">
                Extractions clear blackheads or congested areas, followed by a facial massage to relax muscles and improve circulation. The treatment finishes with customized serums and moisturizers to balance and rejuvenate.
              </p>
              <p className="text-[#30373E] leading-relaxed">
                Perfect for men with all skin types — whether dealing with dryness, sensitivity, or oiliness.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">This facial targets</span>
              <ul className="space-y-3">
                {[
                  "Excess oil and congested pores",
                  "Razor irritation and sensitivity",
                  "Rough texture from shaving",
                  "Blackheads and enlarged pores",
                  "Dehydration and dullness",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#E5ECE8]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">Total Price</p>
                <p className="text-3xl font-bold text-[#1F2A25]">$180</p>
              </div>
            </div>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
