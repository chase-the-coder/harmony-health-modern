import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Lash Lift & Tint in Athens, GA | Harmony Health",
  description: "Lash lift and tint in Athens, GA. Wake up with beautifully curled, darkened lashes — no mascara needed. Book at Harmony Health.",
  canonicalUrlRelative: "/lash-lift-tint-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function LashLiftTintPage() {
  return (
    <>
      {renderServiceSchema({ name: "Lash Lift & Tint", description: "Lash lift and tint service for lifted, darkened lashes in Athens, GA.", path: "/lash-lift-tint-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Lash Lift & Tint", path: "/lash-lift-tint-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#1F2A25] pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-white/10 text-[#9BD3B6] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9BD3B6]" />
              Lashes · Athens, GA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-white mb-6 max-w-3xl">
              Lash Lift & Tint<br />
              <span className="italic font-light text-[#9BD3B6]">in Athens, Georgia.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-[52ch]">
              Wake up with beautifully lifted, curled, and darkened lashes — no mascara, no lash curler, no extensions. A lash lift and tint gives your natural lashes a semi-permanent boost that lasts 6–8 weeks.
            </p>
            <Link href={BOOK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
              Book your appointment
            </Link>
          </div>
        </section>

        {/* Details */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">How it works</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Natural lashes,<br /><span className="italic font-light text-[#517563]">elevated.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed mb-4">
                A lash lift uses a gentle perming solution to curl your natural lashes upward from the base, creating a wide-eyed, lifted effect that opens up your eyes. The tint adds depth and darkness — the same effect as a perfect coat of waterproof mascara, but lasting for weeks.
              </p>
              <p className="text-[#30373E] leading-relaxed">
                The full treatment takes about 45–60 minutes and requires no maintenance between appointments. Results typically last 6–8 weeks depending on your natural lash growth cycle.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Benefits</span>
              <ul className="space-y-3">
                {[
                  "Lifts and curls your natural lashes without extensions",
                  "Tint darkens lashes for a mascara-free look",
                  "Results last 6–8 weeks",
                  "No daily mascara needed",
                  "Safe and gentle for sensitive eyes",
                  "Low maintenance — perfect for busy lifestyles",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#E5ECE8]">
                <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                  Book your appointment
                </Link>
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
