import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Teen Facial in Athens, GA | Harmony Health",
  description: "Gentle 45-minute facial designed for teenage skin in Athens, GA. Targets breakouts, oiliness, and congestion. $125 at Harmony Health.",
  canonicalUrlRelative: "/teen-facial-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function TeenFacialPage() {
  return (
    <>
      {renderServiceSchema({ name: "Teen Facial", description: "45-minute customized facial for teenage skin targeting breakouts and oiliness in Athens, GA.", path: "/teen-facial-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Teen Facial", path: "/teen-facial-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                Teen Skincare · Athens, GA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
                Teen Facial<br />
                <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
              </h1>
              <p className="text-lg text-[#30373E] leading-relaxed mb-6 max-w-[52ch]">
                Designed specifically for teenage skin, this 45-minute customized facial targets excess oil, congestion, blackheads, and breakouts — while teaching teens to care for their skin with confidence.
              </p>
              <p className="text-2xl font-bold text-[#1F2A25] mb-8">$125</p>
              <div className="flex flex-wrap gap-3">
                <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                  Book this facial
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image src="/assets/aesthetic/hero.webp" alt="Teen facial Athens GA" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 700px" />
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What&rsquo;s included</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Built for young skin,<br /><span className="italic font-light text-[#517563]">and learning to care for it.</span>
              </h2>
              <div className="space-y-4 text-[#30373E] leading-relaxed">
                <p>The teen facial includes a thorough cleanse, gentle exfoliation, extractions as needed, a customized mask, and hydrating products selected specifically for your teen&rsquo;s skin.</p>
                <p>Beyond the facial itself, we&rsquo;ll help your teen better understand their skin and learn simple, age-appropriate skincare habits they can use at home.</p>
                <p>Our goal is to create a comfortable, positive experience that leaves them feeling refreshed, confident, and empowered to care for their skin.</p>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Perfect for teens who are...</span>
              <ul className="space-y-3">
                {[
                  "Beginning a skincare routine for the first time",
                  "Experiencing hormonal changes or breakouts",
                  "Dealing with excess oiliness or congestion",
                  "Looking for a positive self-care experience",
                  "Wanting to understand their skin better",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#E5ECE8]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">Total Price</p>
                <p className="text-3xl font-bold text-[#1F2A25]">$125</p>
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
