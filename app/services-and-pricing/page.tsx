import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernPageHero from "@/components/modern/ModernPageHero";
import ModernPatientPlans from "@/components/modern/ModernPatientPlans";
import ModernPricingAccordion, {
  PricingSection,
} from "@/components/modern/ModernPricingAccordion";
import ModernFAQ from "@/components/modern/ModernFAQ";
import ModernCTA from "@/components/modern/ModernCTA";
import {
  getSEOTags,
  renderFAQSchema,
  renderBreadcrumbSchema,
} from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Services & Pricing | Harmony Health Athens GA",
  description:
    "Transparent pricing for hormone replacement, medical weight loss, IV therapy, aesthetics, and more at Harmony Health in Athens, GA.",
  canonicalUrlRelative: "/services-and-pricing",
});

const MEMBER_BOOKING =
  "https://www.optimantra.com/optimus/patient/patientaccess/modalities?pid=cUNuQ1RxSG8wWUJzR3UxYS9EZURvUT09&lid=cmpXQm5UQnQwNFR0bjBLSWluSHlCZz09";

const plans = [
  {
    eyebrow: "New Patients",
    title: <>New Hormone Patient<br />Two-Appointment Package</>,
    description:
      "Every new patient starts here — men and women. Two comprehensive 50-minute visits to understand your history, review your labs, and build a plan around your body, not a template.",
    includes: [
      "Comprehensive 50-minute initial consultation",
      "Comprehensive 50-minute lab review visit",
      "Review of current medications and medical history",
      "Individualized hormone optimization plan",
      "Lifestyle & nutrition recommendations",
      "Supplement recommendations when appropriate",
      "Labs and medications billed separately",
    ],
    priceLabel: "One-Time Investment",
    price: "$400",
    ctaLabel: "Book New Patient visit",
    ctaHref: MEMBER_BOOKING,
  },
  {
    eyebrow: "Women",
    title: "Women's Hormone Optimization",
    description:
      "Ongoing concierge hormone care for women. Comprehensive management, aesthetic perks, and a provider who knows your history.",
    includes: [
      "4 comprehensive follow-up visits per year",
      "Medication management",
      "20% off supplements",
      "1 monthly simple care visit (office or telehealth)",
      "Annual women's wellness exam",
      "Priority scheduling & secure messaging",
      {
        label: "Discount on aesthetic pricing:",
        subItems: [
          "Dysport",
          "10% off monthly signature facial",
          "10% off microneedling facial",
          "10% off one laser hair removal package each quarter",
          "10% off two Lumecca IPL packages each year",
          "10% off Empower treatments (vaginal rejuvenation & pelvic floor health)",
        ],
      },
      "Labs and medications billed separately",
    ],
    priceLabel: "Monthly",
    price: "$149",
    ctaLabel: "Book Women's Consult",
    ctaHref: MEMBER_BOOKING,
    featured: true,
  },
  {
    eyebrow: "Men",
    title: <>Men&rsquo;s Testosterone &<br />Health Optimization</>,
    description:
      "Ongoing concierge testosterone and men's health management. Quarterly visits, monthly B12, and a provider who tracks every number.",
    includes: [
      "4 quarterly hormone optimization visits",
      "Testosterone, estrogen & medication management",
      "1 monthly simple care visit (office or telehealth)",
      "Men's performance & hormone lab panel interpretation",
      "Medication management and refills",
      "Priority scheduling & secure messaging",
      "20% off supplements",
      "10% off Apex sexual wellness treatments",
      "Discount pricing on additional services",
      "1 monthly B12 injection included",
      "Testosterone medication purchased through pharmacy separately",
      "Labs billed separately",
    ],
    priceLabel: "Monthly",
    price: "$99",
    ctaLabel: "Book Men's Consult",
    ctaHref: MEMBER_BOOKING,
  },
];

const wellnessSections: PricingSection[] = [
  {
    title: "General Health & Labs",
    rows: [
      { name: "Virtual sick visit (30 min)", price: "$85" },
      { name: "Comprehensive Lab Panel", price: "Starting at $199" },
      { name: "Basic Lab Panel", price: "Starting at $99" },
    ],
    note: "Lab prices subject to change based on customization for each individual patient.",
  },
  {
    title: "Medication & Vitamin Injections",
    list: [
      "NAD+ injection",
      "Vitamin B12 injection",
      "Biotin injection",
      "Glutathione injection",
      "Vitamin C injection",
      "Lipo-B",
      "Toradol",
      "Zofran (IV or ODT)",
      "Steroid / Allergy shot",
    ],
  },
];

const ivSections: PricingSection[] = [
  {
    title: "IV Infusions",
    rows: [
      { name: "Basic Hydration (1 Liter)", price: "$95" },
      { name: "Myer's Cocktail", price: "$149" },
      { name: "Headache Relief", price: "$149" },
      { name: "Immunity Booster", price: "$149" },
      { name: "Allergy Relief", price: "$149" },
    ],
  },
];

const weightLossSections: PricingSection[] = [
  {
    title: "Medical Weight Loss",
    rows: [
      { name: "Consult", price: "$95" },
    ],
    note: "Medication costs are separate and vary by treatment plan.",
  },
];

const inmodeSections: PricingSection[] = [
  {
    title: "Morpheus8 Face & Body",
    tagline: "Free consultation and skin assessment",
    body: "Morpheus8 combines microneedling with radiofrequency (RF) energy to stimulate collagen and elastin at depth, leading to skin tightening, more even tone, reduced lines, and a more vibrant appearance. Pricing varies based on the treatment plan and number of sessions recommended.",
  },
  {
    title: "Fusion Laser Hair Removal",
    tagline: "All packages include 6 sessions",
    body: "Fusion's advanced technology provides effective hair reduction with comfortable, customizable treatments for a variety of skin tones and treatment areas.",
    rows: [
      { name: "Chin", price: "$350" },
      { name: "Upper Lip", price: "$350" },
      { name: "Sideburns", price: "$350" },
      { name: "Neck", price: "$450" },
      { name: "Underarms", price: "$500" },
      { name: "Full Face", price: "$600" },
      { name: "Bikini", price: "$400" },
      { name: "Brazilian", price: "$650" },
      { name: "Stomach", price: "$650" },
      { name: "Chest", price: "$650" },
      { name: "Arms", price: "$800" },
      { name: "Legs", price: "$1,200" },
      { name: "Back", price: "$1,200" },
      { name: "Full Body Unlimited", price: "$3,250" },
    ],
  },
  {
    title: "Lumecca IPL",
    tagline: "Free consultation",
    body: "Lumecca is the most powerful intense pulsed light (IPL) treatment available, targeting sun damage, pigmentation, vascular lesions, and uneven skin tone. Pricing varies based on treatment area and plan.",
  },
  {
    title: "EmpowerRF — Women's Pelvic Health",
    tagline: "Free consultation.",
    body: "EmpowerRF is a women's wellness platform using RF and electrical muscle stimulation to improve pelvic health, sexual wellness, and vaginal rejuvenation without surgery or downtime. Treatments include Morpheus8V, FormaV, and VTone. Pricing varies by treatment plan and session count.",
    chips: ["Morpheus8V", "FormaV", "VTone"],
    cta: { label: "Learn more", href: "/womens-pelvic-health", color: "green" },
  },
  {
    title: "APEX — Men's Sexual Health",
    tagline: "Free consultation.",
    body: "Boost your confidence and performance with APEX™ by InMode. This treatment uses radiofrequency energy, a non-invasive approach to improve blood flow, sensitivity, and tissue tone in the penile area. Each session warms the tissue to encourage collagen growth, improve circulation, and help achieve stronger, longer-lasting sexual performance.\n\nMost patients find the treatment comfortable and relaxing, with no downtime and no medication needed. For optimal and lasting results, a series of sessions is typically recommended.",
    list: [
      "Enhanced blood flow and firmness",
      "Improved sensitivity and endurance",
      "Restored confidence and sexual wellness",
      "Safe, painless, and non-surgical",
    ],
    cta: { label: "Learn more", href: "/mens-sexual-health" },
  },
];

const facialsSections: PricingSection[] = [
  {
    title: "Facials",
    rows: [
      { name: "Customized Facial", price: "$160" },
      { name: "Signature Luxe Facial", price: "$200" },
      { name: "Express Facial", price: "$135" },
      { name: "Teen Facial", price: "$125" },
      { name: "Gentleman's Facial", price: "$180" },
      { name: "Back Facial", price: "$200" },
    ],
  },
  {
    title: "Lash Lift & Tint",
    tagline: "Contact us for current pricing",
    body: "A semi-permanent treatment that lifts, curls, and tints your natural lashes — no extensions required. Results last 6–8 weeks.",
  },
];

const neurotoxinSections: PricingSection[] = [
  {
    title: "Dysport",
    rows: [{ name: "Dysport", price: "$12 / unit" }],
    note: "Aesthetic consult is free. Unit count is determined at your consultation.",
  },
  {
    title: "VI Peel",
    rows: [
      { name: "VI Peel", price: "$279" },
      { name: "VI Peel (pkg of 3)", price: "$810" },
    ],
  },
];

const packagesSections: PricingSection[] = [
  {
    title: "Facial Reset Package",
    tagline: "Contact us for package details and pricing",
    body: "Our curated facial packages are designed to give your skin a complete reset. More details and pricing coming soon — reach out to learn what's included.",
  },
];

const faqs = [
  {
    question: "Why do I need a New Patient Consult to get started?",
    answer:
      "Your initial consult allows us to fully understand your health history, goals, and the root causes of your symptoms. This two-appointment package covers comprehensive intake, lab review, and a personalized care plan so we can safely and effectively establish your care.",
  },
  {
    question: "What is included in the New Patient Package?",
    answer:
      "The New Patient Package includes:\n\n• Two 60-minute one-on-one appointments\n• Comprehensive health history and symptom review\n• Lab interpretation (cost of labs is a separate charge)\n• Individualized treatment plan\n• Recommendations for medications, supplements, and lifestyle",
  },
  {
    question: "What happens after the New Patient Package?",
    answer:
      "After your care is established, you can continue through our monthly membership or access select services at non-member pricing. Hormone and thyroid management requires membership for the first 12 months.",
  },
  {
    question: "What is the monthly membership and who is it for?",
    answer:
      "The membership is ideal for patients who want ongoing medical management, prescription oversight, and continuity of care for:\n\n• Hormone optimization\n• Thyroid management\n• Weight loss management\n• Discounts on all other services",
  },
  {
    question: "Can I access services without joining the membership?",
    answer:
      "Yes. After establishing care, patients may access select services at non-member pricing:\n\n• IV therapy\n• Vitamin injections\n• Aesthetic treatments\n• Virtual sick visits\n• Weight loss management\n\nOngoing hormone or thyroid prescription management is only available through membership for the first 12 months. After that you may move to non-member quarterly visits.",
  },
  {
    question: "Why is hormone and thyroid management only available with membership at first?",
    answer:
      "Hormone and thyroid optimization require close monitoring, follow-up, and prescription oversight to stay safe and effective. The membership model lets us provide continuous care instead of fragmented visits, especially during the titration period.",
  },
  {
    question: "Is the membership a contract or can I cancel anytime?",
    answer:
      "Memberships are a 12-month commitment. After 12 months you may cancel, re-commit for another 12 months, or move to non-member quarterly visits.",
  },
  {
    question: "Does the membership include medications, labs, or supplements?",
    answer:
      "No. Medications, labs, supplements, and procedures are billed separately. Membership provides medical management and access to discounted member pricing on services.",
  },
  {
    question: "Does insurance cover these services?",
    answer:
      "Our clinic operates on a self-pay model. We do not bill insurance, but we can provide a superbill for you to submit claims independently.",
  },
  {
    question: "Is telemedicine available?",
    answer:
      "Yes. Many services including consults, follow-ups, hormone management, and sick visits are offered via secure telemedicine.",
  },
  {
    question: "How do I know if membership is right for me?",
    answer:
      "If you want long-term health optimization, hormone or thyroid management, or ongoing guidance, membership offers the most value and continuity.\n\nIf you're looking for a one-time service, non-member a la carte may be the better fit.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a New Patient Consult. From there we'll guide you through next steps and help you decide whether membership is the right fit.",
  },
];

export default function ServicesAndPricingPage() {
  return (
    <>
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services & Pricing", path: "/services-and-pricing" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Services & Pricing"
          headline={
            <>
              Transparent pricing.
              <br />
              <span className="italic font-light text-[#517563]">
                Clear plans.
              </span>
            </>
          }
          description="Every dollar, every service, listed here. A two-visit new patient package to establish care, an optional membership for ongoing support, and clear line-item pricing on everything we offer."
          image={{
            src: "/assets/pricing/hero.webp",
            alt: "Warm minimalist Harmony Health clinic interior",
          }}
          primaryCta={{
            label: "Book new patient visit",
            href: MEMBER_BOOKING,
          }}
          secondaryCta={{
            label: "See services",
            href: "#wellness",
          }}
          badge={{ label: "Self-pay", value: "Superbills available" }}
        />

        {/* ── Medicine + Wellness ─────────────────────────── */}
        <div id="medicine-wellness" className="scroll-mt-24">
          <ModernPatientPlans
            eyebrow="Medicine + Wellness"
            headline={
              <>
                One starting point.
                <br />
                <span className="text-[#6B9680]">Two tailored programs.</span>
              </>
            }
            description="Every patient begins with the same two-visit intake package. From there, choose the program — women's or men's — that fits your goals."
            plans={plans}
            footnote="Labs and medications are billed separately. Patients may choose to use insurance for lab testing when applicable or take advantage of our discounted self-pay lab pricing."
          />
        </div>

        <div id="wellness" className="scroll-mt-24">
          <ModernPricingAccordion
            eyebrow="Medicine + Wellness"
            headline={<>General Health &amp; Labs</>}
            description=""
            notice=""
            sections={wellnessSections}
            variant="light"
          />
        </div>

        <div id="iv-hydration" className="scroll-mt-24">
          <ModernPricingAccordion
            eyebrow="Medicine + Wellness"
            headline={<>IV Hydration Therapy</>}
            description=""
            notice=""
            sections={ivSections}
            variant="tint"
          />
        </div>

        <div id="weight-loss" className="scroll-mt-24">
          <ModernPricingAccordion
            eyebrow="Medicine + Wellness"
            headline={<>Medical Weight Loss</>}
            description=""
            notice=""
            sections={weightLossSections}
            variant="light"
          />
        </div>

        {/* ── InMode ──────────────────────────────────────── */}
        <div id="inmode" className="scroll-mt-24">
          <ModernPricingAccordion
            eyebrow="InMode"
            headline={
              <>
                InMode
                <br />
                <span className="text-[#6B9680]">treatments.</span>
              </>
            }
            description="Advanced body and skin treatments using InMode technology. Free consultations for all InMode services."
            sections={inmodeSections}
            variant="tint"
          />
        </div>

        {/* ── Facials + Lashes ────────────────────────────── */}
        <div id="facials-lashes" className="scroll-mt-24">
          <ModernPricingAccordion
            eyebrow="Facials + Lashes"
            headline={
              <>
                Facials &amp; Lashes
                <br />
                <span className="text-[#6B9680]">pricing.</span>
              </>
            }
            description="Each facial begins with a skin analysis so your treatment is never one-size-fits-all."
            sections={facialsSections}
            variant="light"
          />
        </div>

        {/* ── Neurotoxin ──────────────────────────────────── */}
        <div id="neurotoxin" className="scroll-mt-24">
          <ModernPricingAccordion
            eyebrow="Neurotoxin"
            headline={<>Neurotoxin &amp; Peels</>}
            description="Aesthetic consult is always free."
            sections={neurotoxinSections}
            variant="tint"
          />
        </div>

        {/* ── Packages ────────────────────────────────────── */}
        <div id="packages" className="scroll-mt-24">
          <ModernPricingAccordion
            eyebrow="Packages"
            headline={<>Packages</>}
            description="Curated treatment bundles for maximum results and value."
            sections={packagesSections}
            variant="light"
          />
        </div>

        <ModernFAQ
          eyebrow="Pricing questions"
          headline={
            <>
              Everything patients ask
              <br />
              <span className="text-[#6B9680]">before booking.</span>
            </>
          }
          faqs={faqs}
        />

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
