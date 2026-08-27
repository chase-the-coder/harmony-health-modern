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
    eyebrow: "Women's Hormone Program",
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
    eyebrow: "Men's Hormone Program",
    title: <>Men's Testosterone &<br />Health Optimization</>,
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
  {
    title: "Medical Weight Loss",
    rows: [
      { name: "Consult", price: "$95" },
    ],
  },
];

const aestheticSections: PricingSection[] = [
  {
    title: "Peels",
    rows: [
      { name: "Aesthetic consult", price: "Free" },
      { name: "VI Peel", price: "$279" },
      { name: "VI Peel (pkg of 3)", price: "$810" },
    ],
  },
  {
    title: "Injectables",
    rows: [{ name: "Dysport", price: "$12 / unit" }],
  },
  {
    title: "Morpheus8 Face & Body",
    tagline: "Free consultation and skin assessment",
    body: "Morpheus8 combines microneedling with radiofrequency (RF) energy to stimulate collagen and elastin at depth, leading to skin tightening, more even tone, reduced lines, and a more vibrant appearance. Pricing varies based on the treatment plan and number of sessions recommended.",
  },
  {
    title: "PRP Hair Restoration",
    tagline: "Call to schedule your free consultation",
    body: "Ideal for early to moderate hair thinning, diffuse shedding, stress-related hair loss, or hormone-related hair changes. Designed to slow progression and improve thickness.",
  },
  {
    title: "Women's Vaginal Rejuvenation",
    tagline: "Free consultation.",
    body: "EmpowerRF is a women's wellness platform using RF and electrical muscle stimulation to improve pelvic health, sexual wellness, and vaginal rejuvenation without surgery or downtime. Treatments include Morpheus8 V, FormaV, and V-Tone. Pricing varies by treatment plan and session count.",
    chips: ["Morpheus8V", "FormaV", "VTone"],
    cta: { label: "Learn more", href: "/womens-pelvic-health", color: "green" },
  },
  {
    title: "Bladder & Pelvic Support",
    tagline: "Free consultation and exam.",
    body: "InMode Empower offers a non-surgical option for urinary incontinence by strengthening and rejuvenating the pelvic floor. RF and muscle-activation technology boosts tissue tone and bladder control. Most patients see improvements quickly with zero downtime.",
  },
  {
    title: "Men's Sexual Health (APEX)",
    body: "APEX is a non-invasive treatment for men focused on performance, confidence, and intimate wellness. Uses advanced energy technology to enhance circulation and strengthen pelvic muscles with no pain, downtime, or medication. Sessions are 15 minutes. Most patients need ~6 treatments for full effect.",
    cta: { label: "Learn more", href: "/mens-sexual-health" },
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

        <ModernPatientPlans
          eyebrow="Hormone Programs"
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

        <div id="wellness" className="scroll-mt-20">
          <ModernPricingAccordion
            eyebrow="Additional Services"
            headline={<>Medical and Wellness Care</>}
            description=""
            notice=""
            sections={wellnessSections}
            variant="light"
          />
        </div>

        <ModernPricingAccordion
          eyebrow="Aesthetic & vitality"
          headline={
            <>
              Aesthetic and
              <br />
              <span className="text-[#6B9680]">vitality services.</span>
            </>
          }
          description="Treatments focused on how you look, how you move, and how you feel in your own body. Free consultations for most packages."
          sections={aestheticSections}
          variant="tint"
        />

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
