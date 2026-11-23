import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Customized Facial in Athens, GA | Harmony Health",
  description: "Personalized customized facial in Athens, GA. Tailored to your skin type and concerns — acne, dryness, aging, and more. $160 at Harmony Health.",
  canonicalUrlRelative: "/customized-facial-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

export default function CustomizedFacialPage() {
  return (
    <>
      {renderServiceSchema({ name: "Customized Facial", description: "Personalized facial tailored to your skin type and concerns in Athens, GA.", path: "/customized-facial-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Customized Facial", path: "/customized-facial-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                Facials · Athens, GA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
                Customized Facial<br />
                <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
              </h1>
              <p className="text-lg text-[#30373E] leading-relaxed mb-6 max-w-[52ch]">
                Your skin is unique, and your facial should be too. This personalized treatment begins with a thorough skin assessment to understand your skin type, concerns, and goals — then every product and technique is selected just for you.
              </p>
              <p className="text-2xl font-bold text-[#1F2A25] mb-8">$160</p>
              <div className="flex flex-wrap gap-3">
                <Link href={BOOK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
                  Book this facial
                </Link>
              </div>
            </div>
            <div className="relative h-[420px] lg:h-[520px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image src="/images/morpheus8-treatment-hero.webp" alt="Calm spa treatment room for customized facials in Athens GA" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 700px" />
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">What to expect</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Tailored to you,<br /><span className="italic font-light text-[#517563]">from start to finish.</span>
              </h2>
              <div className="space-y-4 text-[#30373E] leading-relaxed">
                <p>Your experience begins with a professional skin assessment to identify your individual skin type, concerns, and goals. From there, your esthetician selects treatments and products chosen specifically for your skin&rsquo;s needs.</p>
                <p>Whether you&rsquo;re looking to address dryness, congestion, sensitivity, uneven tone, texture, signs of aging, or simply restore a healthy glow — every step is thoughtfully tailored to you.</p>
                <p>Your treatment may include deep cleansing, exfoliation, extractions as needed, a customized mask, targeted serums, hydration, and finishing products. Leave with refreshed, nourished skin — and a better understanding of what your skin needs to look and feel its best.</p>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">This facial is great for</span>
              <ul className="space-y-3">
                {[
                  "Dry, dehydrated, or flaky skin",
                  "Oily or congested skin with clogged pores",
                  "Sensitive or reactive skin types",
                  "Uneven skin tone or texture",
                  "Fine lines and early signs of aging",
                  "A regular maintenance treatment to keep skin healthy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                    <span className="text-[#30373E] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#E5ECE8]">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">Total Price</p>
                <p className="text-3xl font-bold text-[#1F2A25]">$160</p>
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
