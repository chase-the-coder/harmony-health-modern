import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Back Facial in Athens, GA | Harmony Health",
  description: "Rejuvenating back facial in Athens, GA. Deep cleanse, exfoliation, hot stone massage, and customized mask. Add a VI Chemical Peel. $200 at Harmony Health.",
  canonicalUrlRelative: "/back-facial-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function BackFacialPage() {
  return (
    <>
      {renderServiceSchema({ name: "Back Facial", description: "Deep cleansing back facial with hot stone massage in Athens, GA.", path: "/back-facial-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Back Facial", path: "/back-facial-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
              Body Treatments · Athens, GA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
              Back Facial<br />
              <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
            </h1>
            <p className="text-lg text-[#30373E] leading-relaxed mb-6 max-w-[52ch]">
              Your back deserves the same care as your face. This rejuvenating treatment deeply cleanses, exfoliates, and nourishes the often-neglected skin on your back — complete with a tension-relieving hot stone massage.
            </p>
            <p className="text-2xl font-bold text-[#1F2A25] mb-8">$200</p>
            <Link href={BOOK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
              Book this facial
            </Link>
          </div>
        </section>

        {/* Treatment details */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What&rsquo;s included</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Full treatment,<br /><span className="italic font-light text-[#517563]">head to back.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed">
                The back facial includes a thorough cleansing to remove buildup, gentle exfoliation to smooth and brighten, a tension-relieving hot stone massage, a customized mask to hydrate and balance, and warm towels to soothe. The session finishes with a nourishing moisturizer for lasting softness.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Steps</span>
              <ul className="space-y-3 mb-8">
                {[
                  "Deep cleansing to remove buildup and impurities",
                  "Gentle exfoliation to smooth and brighten",
                  "Hot stone massage to relieve tension",
                  "Customized mask to hydrate and balance skin",
                  "Warm towels for added relaxation",
                  "Nourishing moisturizer to finish",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#F7F9F8] rounded-2xl p-6 ring-1 ring-[#E5ECE8] mb-6">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-2">Add-On Available</p>
                <p className="text-[#1F2A25] font-semibold text-sm">VI Chemical Peel</p>
                <p className="text-[#30373E] text-sm">Target acne, discoloration, or texture — $150 (regularly $300)</p>
              </div>
              <div className="pt-6 border-t border-[#E5ECE8]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">Total Price</p>
                <p className="text-3xl font-bold text-[#1F2A25]">$200</p>
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
