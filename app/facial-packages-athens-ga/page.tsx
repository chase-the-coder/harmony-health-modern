import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Facial Packages in Athens, GA | Harmony Health",
  description: "Save on skincare with facial packages in Athens, GA. The Facial Reset Package bundles multiple treatments for maximum results. Book at Harmony Health.",
  canonicalUrlRelative: "/facial-packages-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function FacialPackagesPage() {
  return (
    <>
      {renderServiceSchema({ name: "Facial Reset Package", description: "Multi-treatment facial package for ongoing skin health in Athens, GA.", path: "/facial-packages-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Facial Packages", path: "/facial-packages-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
              Packages · Athens, GA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
              Facial Packages<br />
              <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
            </h1>
            <p className="text-lg text-[#30373E] leading-relaxed mb-8 max-w-[52ch]">
              Consistent skincare is the key to lasting results. Our facial packages bundle treatments into a plan so your skin gets the ongoing attention it needs — and you save in the process.
            </p>
          </div>
        </section>

        {/* Facial Reset Package */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Featured Package</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-6">
                Facial Reset Package<br />
                <span className="italic font-light text-[#517563]">your skin&rsquo;s fresh start.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed mb-8">
                The Facial Reset Package is designed for clients who want to commit to their skin and see real, lasting change. This package combines multiple facial sessions over a set period so your esthetician can track progress, adjust the approach, and get you to your skin goals faster than single sessions alone.
              </p>
              <p className="text-[#30373E] leading-relaxed mb-8">
                Package pricing and session count vary based on your skin goals. Book a consultation and we&rsquo;ll create a personalized plan for you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                  Book a consultation
                </Link>
                <Link href="/services-and-pricing#packages"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full ring-1 ring-[#6B9680]/30 text-[#517563] font-medium hover:bg-[#6B9680]/5 transition-colors">
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why packages */}
        <section className="bg-[#FAF8F4] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">Why a package?</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1]">Better results<br /><span className="italic font-light text-[#517563]">with consistency.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: "Track progress", body: "Your esthetician sees your skin regularly and can adapt the treatment plan as your skin responds and improves." },
                { title: "Save money", body: "Packages offer better value than booking individual sessions — rewarding your commitment to ongoing care." },
                { title: "See lasting change", body: "Skin health improves with repetition. A series of treatments delivers results that a single session simply can't match." },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-2xl p-6 ring-1 ring-[#E5ECE8] shadow-sm">
                  <p className="text-[#1F2A25] font-bold text-lg mb-2">{c.title}</p>
                  <p className="text-[#30373E] leading-relaxed text-sm">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
