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
    "Transparent pricing for hormone replacement, medical weight loss, peptides, IV therapy, aesthetics, and more at Harmony Health in Athens, GA.",
  canonicalUrlRelative: "/services-and-pricing",
});

const MEMBER_BOOKING =
  "https://www.optimantra.com/optimus/patient/patientaccess/modalities?pid=cUNuQ1RxSG8wWUJzR3UxYS9EZURvUT09&lid=cmpXQm5UQnQwNFR0bjBLSWluSHlCZz09";

const plans = [
  {
    eyebrow: "New Patients",
    title: "Two-Appointment New Patient Package",
    description:
      "Every new patient starts here. Two one-on-one visits that give us time to understand your history, run the right labs, and build a plan around your body, not a template.",
    includes: [
      "Detailed health and lifestyle assessment",
      "Comprehensive lab panel (labs billed separately)",
      "One-on-one lab interpretation visit",
      "Customized treatment plan aligned with your goals",
      "Recommendations for medications, supplements, and lifestyle",
    ],
    priceLabel: "New Patient Package",
    price: "$400",
    subPrice:
      "New Patient Intake $150 + Follow-up with NP $250 · Comprehensive lab panel billed separately",
    ctaLabel: "Book New Patient visit",
    ctaHref: MEMBER_BOOKING,
  },
  {
    eyebrow: "Membership",
    title: "Ongoing concierge care",
    description:
      "After your intake, members get ongoing medical management, prescription oversight, and a deep discount on the services you actually use. Annual commitment, billed monthly or annually.",
    includes: [
      "Ongoing hormone and thyroid optimization",
      "Member pricing on IV, injections, peptides, aesthetics, weight loss",
      "Quarterly provider follow-ups included",
      "Direct messaging with your provider through the portal",
      "Morpheus8 Face & Body member rates",
    ],
    priceLabel: "Monthly",
    price: "$149",
    subPrice:
      "Or pay in full and save 10%. $1,600 for the full year. 12-month commitment.",
    ctaLabel: "Explore member services",
    ctaHref: "#wellness",
    featured: true,
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
    rows: [
      { name: "NAD+ injection", price: "$50 / 50mg · $100 / 100mg" },
      { name: "Vitamin B12 injection", price: "$25/inj · $135 (pkg 6)" },
      { name: "Biotin injection", price: "$25/inj · $135 (pkg 6)" },
      { name: "Glutathione injection", price: "$25/inj · $135 (pkg 6)" },
      { name: "Vitamin C injection", price: "$25/inj · $135 (pkg 6)" },
      { name: "Lipo-B", price: "$25/inj · $135 (pkg 6)" },
      { name: "Toradol", price: "$40" },
      { name: "Zofran (IV or ODT)", price: "$25" },
      { name: "Steroid / Allergy shot", price: "$40" },
    ],
    note: "Members receive one FREE injection per month.",
  },
  {
    title: "Hormone & Thyroid Care",
    intro:
      "Medications are prescribed and billed separately and are not included in membership pricing.",
    rows: [
      {
        name: "Follow-up visits",
        price: "Included",
        note: "4 visits/year for members, one per quarter",
      },
      {
        name: "Extra hormone visit",
        price: "$105 / 30 min · $199 / 50 min",
        note: "Member pricing",
      },
      {
        name: "Women: Hormone Pellets",
        price: "$400 / procedure",
        note: "Member pricing",
      },
      {
        name: "Men: Hormone Pellets",
        price: "$700 / procedure",
        note: "Member pricing",
      },
      {
        name: "hCG monthly maintenance (men)",
        price: "Included in pellet cost",
        note: "Prescription included",
      },
      {
        name: "Follow-up visits (non-member)",
        price: "$189 / 30 min · $249 / 60 min",
        note: "After initial 12 months on membership",
      },
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
      { name: "Semaglutide", price: "$325 / month" },
      { name: "Tirzepatide", price: "$475 / month" },
    ],
  },
  {
    title: "Peptide Therapy",
    rows: [
      { name: "Peptide Consult", price: "$95" },
      { name: "NAD+", price: "$350 / month" },
      { name: "Sermorelin", price: "$270 / month" },
      { name: "TB-500", price: "$320 / month" },
      { name: "BPC-157", price: "$260 / month" },
      { name: "PT-141 + B12", price: "$210 (20 doses)" },
      { name: "GHK-Cu", price: "$320 / month" },
    ],
  },
];

const aestheticSections: PricingSection[] = [
  {
    title: "Peels",
    tagline: "Free consult for members",
    rows: [
      { name: "Aesthetic consult", price: "$50", note: "Free for members" },
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
    tagline: "Free consultation. Members receive 10% off packages.",
    body: "EmpowerRF is a women's wellness platform using RF and electrical muscle stimulation to improve pelvic health, sexual wellness, and vaginal rejuvenation without surgery or downtime. Treatments include Morpheus8 V, FormaV, and V-Tone. Pricing varies by treatment plan and session count.",
  },
  {
    title: "Bladder & Pelvic Support",
    tagline: "Free consultation and exam. Members receive 10% off packages.",
    body: "InMode Empower offers a non-surgical option for urinary incontinence by strengthening and rejuvenating the pelvic floor. RF and muscle-activation technology boosts tissue tone and bladder control. Most patients see improvements quickly with zero downtime.",
  },
  {
    title: "Men's Sexual Health (APEX)",
    tagline: "Members get 10% off 6- and 8-session packages.",
    body: "APEX is a non-invasive treatment for men focused on performance, confidence, and intimate wellness. Uses advanced energy technology to enhance circulation and strengthen pelvic muscles with no pain, downtime, or medication. Sessions are 15 minutes. Most patients need ~6 treatments for full effect.",
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
      "Yes. After establishing care, patients may access select services at non-member pricing:\n\n• IV therapy\n• Vitamin injections\n• Peptide therapy\n• Aesthetic treatments\n• Virtual sick visits\n• Weight loss management\n\nOngoing hormone or thyroid prescription management is only available through membership for the first 12 months. After that you may move to non-member quarterly visits.",
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
          eyebrow="How care works here"
          headline={
            <>
              Start with a plan.
              <br />
              <span className="text-[#6B9680]">Stay for the results.</span>
            </>
          }
          description="Every patient starts with the two-visit intake. After that, you choose whether membership makes sense for your goals."
          plans={plans}
        />

        <div id="wellness" className="scroll-mt-20">
          <ModernPricingAccordion
            eyebrow="Wellness services"
            headline={
              <>
                Medical services
                <br />
                <span className="text-[#6B9680]">a la carte or member.</span>
              </>
            }
            description="All pricing below reflects member rates unless otherwise noted. Non-member pricing is available for most services after you establish care."
            notice={`After establishing care, non-members may access select services at standard rates: IV therapy, vitamin injections, peptide therapy, aesthetic treatments, virtual sick visits, and weight loss programs.\n\nA la carte pricing does NOT include ongoing medical management, follow-up care, or prescription oversight for the initial 12 months of hormone or thyroid optimization. Membership is required for those first 12 months.`}
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
