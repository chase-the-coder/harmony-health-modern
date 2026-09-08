import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import { getSEOTags, renderServiceSchema, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Lumecca IPL Photofacial in Athens, GA | Harmony Health",
  description: "Lumecca IPL in Athens, GA. Fade sun damage, age spots, redness, and uneven tone in just 1–3 treatments. Free consultation at Harmony Health.",
  canonicalUrlRelative: "/lumecca-ipl-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

const benefits = [
  "Fades sun spots, age spots, and freckles",
  "Reduces redness, rosacea, and broken capillaries",
  "Evens out skin tone and texture",
  "Stimulates collagen for a smoother, more youthful appearance",
  "Visible results in as few as 1–2 sessions",
  "No downtime — return to daily activities the same day",
];

export default function LumeccaPage() {
  return (
    <>
      {renderServiceSchema({ name: "Lumecca IPL Photofacial", description: "Intense pulsed light treatment for sun damage, redness, and uneven skin tone in Athens, GA.", path: "/lumecca-ipl-athens-ga" })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Lumecca IPL", path: "/lumecca-ipl-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
                InMode · Athens, GA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6">
                Lumecca IPL<br />
                <span className="italic font-light text-[#517563]">in Athens, Georgia.</span>
              </h1>
              <p className="text-lg text-[#30373E] leading-relaxed mb-8 max-w-[52ch]">
                Lumecca is one of the most powerful intense pulsed light (IPL) devices available, delivering up to 3× more energy than standard IPL treatments. In just a few sessions, it can visibly fade sun damage, pigmentation, and redness — revealing clearer, more even skin.
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
            <div className="order-1 lg:order-2 flex justify-center">
              <Image src="/images/lumecca-before-after.webp" alt="Lumecca IPL before and after results Athens GA" width={540} height={675} className="rounded-3xl w-full max-w-[520px] h-auto" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-[#FAF8F4] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">How it works</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1] mb-5">
                Light-based precision<br /><span className="italic font-light text-[#517563]">for clearer skin.</span>
              </h2>
              <p className="text-[#30373E] leading-relaxed mb-4">
                Lumecca delivers high-intensity pulses of broadband light that are selectively absorbed by pigment (melanin) and vascular lesions in the skin. The light energy heats and breaks down unwanted pigmentation, which the body then naturally eliminates — leaving skin visibly brighter and more even.
              </p>
              <p className="text-[#30373E] leading-relaxed">
                The light energy also stimulates collagen production in the deeper layers of skin, improving texture over time. Most patients see significant improvement after just 1–2 sessions, with final results in 3–4 weeks as pigment rises to the surface and fades.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">Benefits</span>
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
        </section>

        {/* Who it's for */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">Is it right for you?</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.1]">Lumecca works well<br /><span className="italic font-light text-[#517563]">if you have...</span></h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              {["Sun spots or age spots from years of sun exposure", "Uneven or blotchy skin tone", "Rosacea, visible redness, or broken capillaries", "Freckles you'd like to fade", "Post-acne marks or discoloration", "Dull or lackluster skin tone"].map((c) => (
                <li key={c} className="bg-white rounded-2xl p-6 ring-1 ring-[#E5ECE8] shadow-sm text-[#30373E] leading-relaxed">{c}</li>
              ))}
            </ul>
            <p className="text-center text-[#535353]">
              Pricing is determined at consultation. <Link href={BOOK} target="_blank" className="text-[#517563] font-semibold underline underline-offset-2">Book your free consultation</Link> to get started.
            </p>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
