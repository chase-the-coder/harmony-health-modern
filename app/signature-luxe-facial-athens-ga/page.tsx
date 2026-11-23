import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Signature Luxe Facial in Athens, GA | Harmony Health",
  description: "The ultimate luxury facial experience in Athens, GA. Anti-aging, deep hydration, and advanced skin renewal. $200 at Harmony Health.",
  canonicalUrlRelative: "/signature-luxe-facial-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

const steps = [
  { label: "Cleansing", detail: "Gentle yet effective removal of makeup, dirt, and impurities — with heated towels for a spa-level experience." },
  { label: "Exfoliation", detail: "Advanced techniques including chemical peels or microdermabrasion to slough off dead skin cells, improve texture, and promote cell turnover." },
  { label: "Mask & Serums", detail: "Customized masks enriched with antioxidants and anti-aging ingredients, plus serums that deeply penetrate for hydration and nourishment." },
  { label: "Facial Massage", detail: "A luxurious face and neck massage that improves circulation, relieves tension, and enhances product absorption." },
  { label: "Advanced Treatments", detail: "Innovative technologies such as LED therapy or ultrasound to stimulate collagen, reduce fine lines, and achieve a youthful glow." },
  { label: "Moisturizing", detail: "A rich moisturizer applied to lock in hydration and protect the skin barrier, leaving skin feeling soft, plump, and revitalized." },
  { label: "Aftercare Guidance", detail: "Post-treatment recommendations to help maintain results and keep your skin thriving between appointments." },
];

export default function SignatureLuxeFacialPage() {
  return (
    <>
      {renderServiceSchema({ name: "Signature Luxe Facial", description: "Luxury anti-aging facial with advanced treatments and full relaxation in Athens, GA.", path: "/signature-luxe-facial-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/aesthetic-treatments-athens-ga" },
        { name: "Signature Luxe Facial", path: "/signature-luxe-facial-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#6B9680]/25 via-[#6B9680]/15 to-[#80BE9F]/25 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-white/70 text-[#517563] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
              Signature Treatment · Athens, GA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6 max-w-3xl">
              Signature Luxe Facial<br />
              <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
            </h1>
            <p className="text-lg text-[#30373E] leading-relaxed mb-6 max-w-[52ch]">
              The ultimate facial experience — designed for anti-aging, deep hydration, and skin renewal. This luxury treatment combines advanced techniques, powerful ingredients, and optional technologies to give your skin a complete transformation.
            </p>
            <p className="text-3xl font-bold text-[#1F2A25] mb-8">$200</p>
            <Link href={BOOK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
              Book this facial
            </Link>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">The experience</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1]">
                Every step,<br /><span className="italic font-light text-[#517563]">intentional and indulgent.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
              {steps.map((s) => (
                <div key={s.label} className="bg-[#FAF8F4] rounded-2xl p-6 ring-1 ring-[#E5ECE8]">
                  <p className="text-[#1F2A25] font-semibold mb-2">{s.label}</p>
                  <p className="text-[#30373E] leading-relaxed text-sm">{s.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[#535353] mt-8 max-w-2xl">This facial targets signs of aging and rejuvenates the skin, leaving it refreshed and luminous. Perfect for a special occasion or as a pampering retreat — this experience is all about indulgence and self-care.</p>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="bg-[#FAF8F4] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">Total Price</p>
              <p className="text-4xl font-bold text-[#1F2A25]">$200</p>
            </div>
            <Link href={BOOK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white font-medium hover:bg-[#517563] transition-colors">
              Book the Signature Luxe Facial
            </Link>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
