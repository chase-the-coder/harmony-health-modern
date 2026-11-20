import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import ModernInModeGrid from "@/components/modern/ModernInModeGrid";
import { getSEOTags, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "InMode Provider Athens GA | Harmony Health",
  description:
    "Harmony Health is a premier InMode provider in Athens, GA, offering Morpheus8, Lumecca Peak IPL, Fusion laser hair removal, EmpowerRF, and Apex.",
  canonicalUrlRelative: "/inmode-athens-ga",
});

export default function InModePage() {
  return (
    <>
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "InMode", path: "/inmode-athens-ga" },
      ])}
      <Header />
      <main>
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,150,128,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-white/60 backdrop-blur-sm ring-1 ring-[#6B9680]/20 text-[#517563] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
              No downtime, less chair time, more results
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
              Premier InMode
              <br />
              <span className="italic font-light text-[#517563]">provider.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30373E] leading-relaxed max-w-[58ch] mx-auto mb-10">
              Harmony Health offers the full InMode platform, non-invasive
              radiofrequency and light-based treatments for skin remodeling,
              hair removal, photofacials, and intimate wellness, all under
              one roof.
            </p>
            <Link
              href={BOOKING_URLS.aesthetic}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] transition-colors duration-300"
            >
              Book a consultation
            </Link>
          </div>
        </section>

        <ModernInModeGrid />

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
