import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Morpheus8 Skin Tightening in Athens, GA | Harmony Health",
  description: "Morpheus8 radiofrequency microneedling in Athens, GA. Tighten skin, reduce wrinkles, and restore a youthful glow. Free consultation at Harmony Health.",
  canonicalUrlRelative: "/morpheus8-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

const benefits = [
  "Firms and tightens loose or crepey skin",
  "Reduces fine lines, wrinkles, and acne scars",
  "Stimulates collagen and elastin production",
  "Improves skin texture and tone",
  "Safe for face, neck, abdomen, arms, and more",
  "Minimal downtime — most patients resume normal activity within days",
];

const candidates = [
  "Notice loose or sagging skin on the face or body",
  "Want to reduce fine lines, wrinkles, or acne scars",
  "Prefer a non-surgical approach to skin rejuvenation",
  "Have uneven skin texture or stretch marks",
  "Want longer-lasting results than surface-level treatments",
];

export default function Morpheus8Page() {
  return (
    <>
      {renderServiceSchema({ name: "Morpheus8 Face & Body", description: "Radiofrequency microneedling for skin tightening and rejuvenation in Athens, GA.", path: "/morpheus8-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Morpheus8", path: "/morpheus8-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                InMode · Athens, GA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
                Morpheus8 in<br />
                <span className="italic font-light text-[#517563]">Athens, Georgia.</span>
              </h1>
              <p className="text-lg text-[#30373E] leading-relaxed mb-8 max-w-[52ch]">
                Morpheus8 combines radiofrequency energy with microneedling to remodel skin from the inside out — tightening, smoothing, and restoring a youthful appearance without surgery. Available at Harmony Health in Athens, GA.
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
            <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
              <Image src="/images/morpheus8-treatment-hero.webp" alt="Calm spa treatment room at Harmony Health in Athens GA" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 700px" />
            </div>
          </div>
        </section>

        {/* What is Morpheus8 */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What is Morpheus8?</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                  Collagen remodeling<br />
                  <span className="italic font-light text-[#517563]">at depth.</span>
                </h2>
                <p className="text-[#30373E] leading-relaxed mb-4">
                  Morpheus8 is a fractional radiofrequency microneedling device that delivers controlled RF energy deep into the dermis and subcutaneous tissue. This combination of heat and micro-injuries triggers the body&apos;s natural healing response — producing new collagen and elastin that firms, tightens, and smooths skin over time.
                </p>
                <p className="text-[#30373E] leading-relaxed">
                  Unlike surface-level treatments, Morpheus8 remodels tissue at a depth of up to 8mm, making it effective for both face and body. Results continue to improve for up to three months as collagen rebuilds — and last 1–3 years with proper skincare and maintenance.
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Benefits</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-6">What Morpheus8<br /><span className="italic font-light text-[#517563]">can do for you.</span></h2>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                      <span className="text-[#30373E] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates */}
        <section className="bg-[#FAF8F4] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">Is it right for you?</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1]">Morpheus8 may be a great fit<br /><span className="italic font-light text-[#517563]">if you...</span></h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {candidates.map((c) => (
                <li key={c} className="bg-white rounded-2xl p-6 ring-1 ring-[#E5ECE8] shadow-sm text-[#30373E] leading-relaxed">{c}</li>
              ))}
            </ul>
            <p className="text-center text-[#535353] mt-8">Pricing varies based on treatment area and session plan. <Link href={BOOK} target="_blank" className="text-[#517563] font-semibold underline underline-offset-2">Book a free consultation</Link> to get a personalized quote.</p>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
