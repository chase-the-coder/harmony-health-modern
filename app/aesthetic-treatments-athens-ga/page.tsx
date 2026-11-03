import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernCTA from "@/components/modern/ModernCTA";
import FacialAccordion from "@/components/modern/FacialAccordion";
import { getSEOTags, renderBreadcrumbSchema } from "@/libs/seo";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Aesthetic Treatments Athens GA | Harmony Health",
  description:
    "Facials, microneedling, Lumecca IPL, laser hair removal, lash lift, Morpheus8, and injectables in Athens, GA. Medical-grade and spa aesthetics at Harmony Health.",
  canonicalUrlRelative: "/aesthetic-treatments-athens-ga",
});

const BOOK = BOOKING_URLS.aesthetic;

const facials = [
  {
    name: "Customized Facial",
    description:
      "A personalized treatment designed specifically for your unique needs. After a thorough skin analysis, professional-grade products and technique are selected to target concerns such as acne, dryness, sensitivity, congestion, fine lines, or uneven skin tone.",
  },
  {
    name: "Signature Luxe Facial",
    description:
      "A soothing treatment created for sensitive, stressed, or redness-prone skin. This facial helps calm inflammation, strengthen the skin barrier, and restore hydration, leaving your complexion balanced and refreshed.",
  },
  {
    name: "Express Facial",
    description:
      "Short on time but need a skin refresh? This efficient treatment delivers visible results in just 30 minutes.",
  },
  {
    name: "Teen Facial",
    description:
      "Designed specifically for teenage skin, this 45-minute customized facial targets common concerns such as excess oil, congestion, blackheads, and breakouts.",
  },
];

const addOns = [
  {
    name: "Dermaplaning",
    description:
      "A gentle exfoliation technique that removes dead skin cells and peach fuzz, leaving skin instantly smoother and more radiant. Enhances product absorption and creates a flawless base.",
  },
  {
    name: "LED Light Therapy",
    description:
      "Non-invasive light wavelengths target specific skin concerns — red light boosts collagen, blue light targets acne-causing bacteria. A calming, zero-downtime add-on to any treatment.",
  },
];

export default function AestheticTreatmentsPage() {
  return (
    <>
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Aesthetic Treatments", path: "/aesthetic-treatments-athens-ga" },
      ])}
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FAF8F4] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(107,150,128,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-white/60 backdrop-blur-sm ring-1 ring-[#6B9680]/20 text-[#517563] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B9680]" />
              Aesthetic Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tighter leading-[1.05] text-[#1F2A25] mb-6 max-w-3xl">
              Aesthetic care,
              <br />
              <span className="italic font-light text-[#517563]">tailored to you.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30373E] leading-relaxed max-w-[52ch] mb-8">
              From relaxing facials to advanced skin treatments, our aesthetic menu is designed to meet you where you are — whether you want a monthly refresh or a targeted corrective plan.
            </p>
            <Link
              href={BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] transition-colors duration-300"
            >
              Book an aesthetic appointment
            </Link>
          </div>
        </section>

        {/* Quick nav */}
        <section className="bg-white border-b border-[#E5ECE8] sticky top-[88px] z-30">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <nav className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
              {[
                { label: "Facials", href: "#facials" },
                { label: "Neurotoxin", href: "#neurotoxin" },
                { label: "Microneedling", href: "#microneedling" },
                { label: "Lash Lift & Tint", href: "#lash-lift" },
                { label: "Lumecca IPL", href: "#lumecca-ipl" },
                { label: "Laser Hair Removal", href: "#laser-hair-removal" },
                { label: "Add-On Enhancements", href: "#add-ons" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 px-4 py-1.5 rounded-full text-[13px] font-medium text-[#30373E] hover:bg-[#F7F9F8] hover:text-[#517563] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Facials */}
        <section id="facials" className="bg-[#FAF8F4] py-16 md:py-20 scroll-mt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
                Facials
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-4">
                Facials for every skin type
                <br />
                <span className="italic font-light text-[#517563]">and every schedule.</span>
              </h2>
              <p className="text-lg text-[#535353] leading-relaxed max-w-[55ch]">
                Each facial begins with a thorough skin analysis so your treatment is never one-size-fits-all.
              </p>
            </div>
            <FacialAccordion />
          </div>
        </section>

        {/* Neurotoxin */}
        <section id="neurotoxin" className="bg-[#F7F9F8] py-16 md:py-20 scroll-mt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
                  Neurotoxin
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-4">
                  Smooth lines.
                  <br />
                  <span className="italic font-light text-[#517563]">Natural results.</span>
                </h2>
                <p className="text-lg text-[#30373E] leading-relaxed mb-8">
                  Dysport is a trusted neurotoxin that relaxes the muscles responsible for expression lines, smoothing forehead wrinkles, frown lines, and crow&rsquo;s feet with natural-looking results that set in quickly and last 3–4 months.
                </p>
                <Link
                  href={BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
                >
                  Book Dysport
                </Link>
              </div>
              <div className="bg-white rounded-2xl ring-1 ring-[#E5ECE8] p-8 shadow-sm">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-4">
                  Dysport treats
                </h3>
                <ul className="space-y-3">
                  {[
                    "Forehead lines",
                    "Frown lines (elevens)",
                    "Crow's feet",
                    "Fast onset, natural-looking spread",
                    "Results last 3–4 months",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                      <span className="text-[#30373E]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Microneedling */}
        <section id="microneedling" className="bg-white py-16 md:py-20 scroll-mt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
                  Microneedling
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-4">
                  Stimulate collagen.
                  <br />
                  <span className="italic font-light text-[#517563]">Transform your skin.</span>
                </h2>
                <p className="text-lg text-[#30373E] leading-relaxed mb-8">
                  A collagen-stimulating treatment that uses tiny precision needles to improve fine lines, acne scars, enlarged pores, and overall skin texture.
                </p>
                <Link
                  href={BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
                >
                  Book microneedling
                </Link>
              </div>
              <div className="space-y-4">
                <div className="bg-[#F7F9F8] rounded-2xl ring-1 ring-[#E5ECE8] p-8">
                  <h3 className="text-xl font-bold tracking-tight text-[#1F2A25] mb-2">Microneedling</h3>
                  <p className="text-[#30373E] leading-relaxed">
                    Precision microneedling to resurface skin, reduce scarring, minimize pores, and smooth fine lines. Results improve over 4–6 weeks as collagen rebuilds.
                  </p>
                </div>
                <div className="bg-[#F7F9F8] rounded-2xl ring-1 ring-[#E5ECE8] p-8">
                  <h3 className="text-xl font-bold tracking-tight text-[#1F2A25] mb-2">Microneedling + PRP Combo</h3>
                  <p className="text-[#30373E] leading-relaxed">
                    Combines standard microneedling with platelet-rich plasma drawn from your own blood. PRP amplifies the regenerative signal, accelerating healing and enhancing overall results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lash Lift & Tint */}
        <section id="lash-lift" className="bg-[#F7F9F8] py-16 md:py-20 scroll-mt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
                  Lash Services
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-4">
                  Lash Lift & Tint
                </h2>
                <p className="text-lg text-[#30373E] leading-relaxed mb-8">
                  Enhance your natural lashes with a semi-permanent lift and rich tint that creates the appearance of longer, darker, more defined lashes — no extensions, no daily curling required.
                </p>
                <Link
                  href={BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
                >
                  Book lash lift
                </Link>
              </div>
              <div className="bg-white rounded-2xl ring-1 ring-[#E5ECE8] p-8 shadow-sm">
                <ul className="space-y-3">
                  {[
                    "Semi-permanent lift lasts 6–8 weeks",
                    "Rich tint for darker, more defined lashes",
                    "No extensions or maintenance upkeep",
                    "Results visible immediately after treatment",
                    "Safe for most lash types",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                      <span className="text-[#30373E]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lumecca IPL */}
        <section id="lumecca-ipl" className="bg-white py-16 md:py-20 scroll-mt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
                  Lumecca IPL
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-4">
                  Advanced IPL.
                  <br />
                  <span className="italic font-light text-[#517563]">Clearer, brighter skin.</span>
                </h2>
                <p className="text-lg text-[#30373E] leading-relaxed mb-8">
                  Advanced Intense Pulsed Light (IPL) treatment uses targeted light energy to improve the appearance of sun damage, unwanted pigment, redness, and visible facial vessels.
                </p>
                <Link
                  href={BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
                >
                  Book Lumecca IPL
                </Link>
              </div>
              <div className="bg-[#F7F9F8] rounded-2xl ring-1 ring-[#E5ECE8] p-8">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-4">
                  Lumecca IPL targets
                </h3>
                <ul className="space-y-3">
                  {[
                    "Sun spots and age spots",
                    "Redness and rosacea",
                    "Visible facial vessels and broken capillaries",
                    "Uneven skin tone and pigmentation",
                    "Freckles and hyperpigmentation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                      <span className="text-[#30373E]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Laser Hair Removal */}
        <section id="laser-hair-removal" className="bg-[#FAF8F4] py-16 md:py-20 scroll-mt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
                  Laser Hair Removal
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-4">
                  Smoother skin.
                  <br />
                  <span className="italic font-light text-[#517563]">Longer-lasting results.</span>
                </h2>
                <p className="text-lg text-[#30373E] leading-relaxed mb-8">
                  Enjoy smoother, longer-lasting results with Fusion laser hair removal. Fusion&rsquo;s advanced technology provides effective hair reduction with comfortable, customizable treatments for a variety of skin tones and treatment areas.
                </p>
                <Link
                  href={BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
                >
                  Book laser hair removal
                </Link>
              </div>
              <div className="bg-white rounded-2xl ring-1 ring-[#E5ECE8] p-8 shadow-sm">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-4">
                  Why Fusion laser
                </h3>
                <ul className="space-y-3">
                  {[
                    "Effective on a variety of skin tones",
                    "Customizable settings for comfort",
                    "Treats face, body, and sensitive areas",
                    "Long-lasting hair reduction",
                    "Minimal downtime after each session",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6B9680] shrink-0" />
                      <span className="text-[#30373E]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Add-On Enhancements */}
        <section id="add-ons" className="bg-white py-16 md:py-20 scroll-mt-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-4">
                Add-On Enhancements
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-4">
                Elevate any treatment
                <br />
                <span className="italic font-light text-[#517563]">with an add-on.</span>
              </h2>
              <p className="text-lg text-[#535353] leading-relaxed max-w-[55ch]">
                Enhancements can be added to most facial services for a more complete experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {addOns.map((a) => (
                <div
                  key={a.name}
                  className="bg-[#F7F9F8] rounded-2xl ring-1 ring-[#E5ECE8] p-8"
                >
                  <h3 className="text-xl font-bold tracking-tight text-[#1F2A25] mb-3">{a.name}</h3>
                  <p className="text-[#30373E] leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href={BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
              >
                Book with an add-on
              </Link>
            </div>
          </div>
        </section>

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
