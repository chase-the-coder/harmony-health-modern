import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Express Facial in Athens, GA | Harmony Health",
  description: "Quick 45-minute express facial in Athens, GA. Cleanse, exfoliate, and glow — with extractions included. $135 at Harmony Health.",
  canonicalUrlRelative: "/express-facial-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function ExpressFacialPage() {
  return (
    <>
      {renderServiceSchema({ name: "Express Facial", description: "45-minute express facial for a quick skin refresh in Athens, GA.", path: "/express-facial-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Express Facial", path: "/express-facial-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                45 Minutes · Athens, GA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
                Express Facial<br />
                <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
              </h1>
              <p className="text-lg text-[#30373E] leading-relaxed mb-6 max-w-[52ch]">
                Short on time but still need a skin pick-me-up? The Express Facial delivers real results in just 45 minutes — a targeted treatment that refreshes, revitalizes, and nourishes your skin from cleanse to glow.
              </p>
              <p className="text-2xl font-bold text-[#1F2A25] mb-8">$135</p>
              <div className="flex flex-wrap gap-3">
                <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                  Book this facial
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image src="/images/express-facial-mask-bowl.webp" alt="Provider mixing a facial mask in a gold bowl for an express facial in Athens GA" fill className="object-cover object-[center_60%]" sizes="(max-width: 1024px) 100vw, 700px" />
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What&rsquo;s included</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Real results,<br /><span className="italic font-light text-[#517563]">no time wasted.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed mb-4">
                The Express Facial includes a gentle cleanse, light exfoliation, and a customized mask to address your skin&rsquo;s immediate needs. Complete with a hydrating moisturizer and SPF application, you&rsquo;ll leave feeling clean, glowing, and refreshed — extractions included.
              </p>
              <p className="text-[#30373E] leading-relaxed">
                Ideal for maintaining a healthy complexion between full treatments, or as a quick boost before a big event.
              </p>
              <div className="mt-8 p-5 bg-[#F7F9F8] rounded-2xl ring-1 ring-[#E5ECE8]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-2">Add-On Available</p>
                <p className="text-[#1F2A25] font-semibold">Dermaplane — <span className="font-normal text-[#30373E]">+$20</span></p>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Perfect for</span>
              <ul className="space-y-3">
                {[
                  "A quick refresh before an event or travel",
                  "Maintaining your skin between deeper treatments",
                  "First-time facial clients who want to start simple",
                  "Anyone short on time but committed to skin health",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#E5ECE8]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">Total Price</p>
                <p className="text-3xl font-bold text-[#1F2A25]">$135</p>
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
