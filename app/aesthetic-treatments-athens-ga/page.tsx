import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernPageHero from "@/components/modern/ModernPageHero";
import ModernTreatmentDetail from "@/components/modern/ModernTreatmentDetail";
import ModernCardGrid from "@/components/modern/ModernCardGrid";
import ModernFAQ from "@/components/modern/ModernFAQ";
import ModernCTA from "@/components/modern/ModernCTA";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";
import {
  getSEOTags,
  renderFAQSchema,
  renderBreadcrumbSchema,
  renderServiceSchema,
} from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Aesthetic Treatments Athens GA | Harmony Health",
  description:
    "Medical-grade aesthetics in Athens, GA. Morpheus8, InMode, Dysport, and dermal fillers delivered by a medical team. Minimally invasive treatments for skin, body, and facial rejuvenation.",
  canonicalUrlRelative: "/aesthetic-treatments-athens-ga",
});

const morpheus8Benefits = [
  "Remodels collagen deep in the dermis",
  "Tightens loose skin on face, neck, and body",
  "Reduces fine lines, acne scars, and uneven texture",
  "Safe for all skin types and tones",
  "Minimal downtime, compounding results over 6-12 weeks",
];

const morpheus8Candidate = [
  "Notice early skin laxity or loss of firmness on face, neck, jawline, or body",
  "Want meaningful improvement without surgery or ablative lasers",
  "Are comfortable with a 3-5 day pinkness or light flaking period",
  "Want a treatment cleared by the FDA for skin resurfacing and subdermal remodeling",
  "Can commit to a series of 2-3 sessions spaced ~4 weeks apart for best results",
];

const injectableBenefits = [
  "Smooths dynamic lines on forehead, frown area (11s), and crow's feet",
  "Subtle lip flip and gummy-smile refinement with small doses",
  "Dermal fillers restore volume in cheeks, temples, and lips",
  "Softens nasolabial folds and marionette lines",
  "Results typically appear in 2-3 days (Dysport), immediate for fillers",
];

const injectableCandidate = [
  "Want to soften expression lines without looking frozen",
  "Are starting to notice volume loss in cheeks, temples, or lips",
  "Prefer precise, conservative dosing over dramatic change",
  "Can tolerate tiny-needle injection and minor swelling for a few hours",
  "Understand that Dysport lasts 3-4 months and fillers 6-18 months depending on product",
];

const inmodeSuite = [
  {
    iconKey: "waveform" as const,
    name: "Morpheus8 V",
    tagline: "Intimate wellness for women",
    description:
      "Microneedling plus RF for the vaginal and vulvar tissue. Addresses laxity, dryness, and sensitivity by remodeling collagen in the treatment area.",
    benefits: [
      "Improves elasticity, hydration, and sensitivity",
      "Remodels internal and external tissue",
      "Supports urinary and pelvic wellness",
      "Minimal discomfort with topical numbing",
    ],
    idealFor:
      "Women experiencing postpartum or post-menopausal changes, laxity, dryness, or mild stress incontinence.",
  },
  {
    iconKey: "lightning" as const,
    name: "V Tone",
    tagline: "Pelvic floor retraining",
    description:
      "Non-invasive electrical muscle stimulation (EMS) that restores pelvic floor strength and coordination. Paired well with Morpheus8 V for a more complete protocol.",
    benefits: [
      "Strengthens pelvic floor without surgery or kegels",
      "Restores neuromuscular coordination",
      "Improves circulation and tissue health",
      "Fully clothed, comfortable sessions",
    ],
    idealFor:
      "Patients with stress incontinence, postpartum weakness, or diminished pelvic tone.",
  },
  {
    iconKey: "heart" as const,
    name: "Forma V",
    tagline: "Gentle deep heating",
    description:
      "Non-invasive radiofrequency that delivers uniform deep-tissue heating to stimulate collagen and circulation. A softer step before or alongside Morpheus8 V.",
    benefits: [
      "Non-invasive, comfortable treatment",
      "Stimulates collagen for natural firming",
      "Enhances blood flow to treated tissue",
      "No downtime",
    ],
    idealFor:
      "Patients new to pelvic aesthetic treatments or those wanting a gentler option than Morpheus8 V.",
  },
  {
    iconKey: "circle" as const,
    name: "Aviva",
    tagline: "Precision tissue contraction",
    description:
      "Minimally invasive RF treatment that delivers controlled contraction and renewal to sensitive areas. Single session with targeted results.",
    benefits: [
      "Gently contracts and refines sensitive areas",
      "Promotes tissue renewal and resilience",
      "One-and-done protocol for many patients",
    ],
    idealFor:
      "Patients looking for targeted, precise tissue contraction beyond what non-invasive options provide.",
  },
  {
    iconKey: "sparkle" as const,
    name: "Tone (Body)",
    tagline: "Muscle sculpting",
    description:
      "Electrical muscle stimulation for deep muscle toning and contouring. Works alongside lifestyle and weight loss programs for a more sculpted result.",
    benefits: [
      "Targets deep muscle layers for visible toning",
      "Boosts local circulation and metabolism",
      "Non-invasive with no downtime",
    ],
    idealFor:
      "Patients close to their goal physique wanting targeted sculpting in specific muscle groups.",
  },
];

const faqs = [
  {
    question: "What is Morpheus8, and how does it work?",
    answer:
      "Morpheus8 is an FDA-cleared device that combines microneedling with radiofrequency energy. Tiny pins deliver controlled heat into the deeper dermis, triggering collagen and elastin production.\n\nThe result is skin that looks firmer and more even over 6-12 weeks as new collagen forms. It's used on face, neck, jawline, and body.",
  },
  {
    question: "Does Morpheus8 hurt?",
    answer:
      "Topical numbing makes most sessions a mild pressure and warmth sensation. The device itself is fast, and the deeper the setting, the more intense the heat. Patients commonly describe it as tolerable, especially compared to ablative lasers.",
  },
  {
    question: "What's the downtime after Morpheus8?",
    answer:
      "Pinkness and small dot marks for 24-48 hours. A bit of dry flaking for 3-5 days. Makeup is fine after 24 hours. Most patients return to work the next day.",
  },
  {
    question: "How many Morpheus8 sessions will I need?",
    answer:
      "Most patients do 2-3 sessions spaced 4 weeks apart, followed by annual touch-ups. Results continue to improve for 3-6 months after your final session as collagen remodels.",
  },
  {
    question: "What is Dysport?",
    answer:
      "Dysport is an FDA-approved neuromodulator (like Botox) that temporarily relaxes the muscles responsible for dynamic wrinkles: forehead lines, frown lines between the brows, and crow's feet. Results begin within 2-3 days and last 3-4 months.",
  },
  {
    question: "Will Dysport look natural?",
    answer:
      "Yes, when dosed conservatively. We start with the lowest effective dose and build from there. The goal is softening, not freezing. You'll still make natural expressions.",
  },
  {
    question: "What about dermal fillers?",
    answer:
      "We use FDA-approved hyaluronic acid fillers (Juvederm, Restylane families) to restore volume where it's lost, smooth deeper creases, and subtly enhance contours. Results are immediate and last anywhere from 6 to 18 months depending on the product and area treated.",
  },
  {
    question: "Is there downtime with injectables?",
    answer:
      "Dysport: essentially none, maybe mild bruising at injection sites. Fillers: possible minor swelling or bruising for a few days, especially around the lips. Most patients go back to normal activities the same day.",
  },
  {
    question: "How do I know what's right for me?",
    answer:
      "The honest answer: a consultation. We map out your goals (tightening vs smoothing vs volumizing), your tolerance for downtime, and your budget, then match the right treatment or combination. No upsells, no pressure.",
  },
];

export default function AestheticPage() {
  return (
    <>
      {renderServiceSchema({
        name: "Aesthetic Treatments",
        description:
          "Medical-grade aesthetics in Athens, GA. Morpheus8, InMode, Dysport, and dermal fillers.",
        path: "/aesthetic-treatments-athens-ga",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Aesthetic Treatments", path: "/aesthetic-treatments-athens-ga" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Aesthetic Treatments"
          headline={
            <>
              Look like yourself.
              <br />
              <span className="italic font-light text-[#517563]">Just more rested.</span>
            </>
          }
          description="Walk out looking like yourself on your best day. Morpheus8 and the InMode suite for skin and body tightening. Dysport and dermal fillers for faces that still move the way they should. All delivered by providers who know anatomy deeply."
          image={{
            src: "/assets/aesthetic/hero.webp",
            alt: "Woman with radiant healthy skin",
          }}
          primaryCta={{
            label: "Book aesthetic consultation",
            href: BOOKING_URLS.aesthetic,
          }}
          secondaryCta={{
            label: "See pricing",
            href: "/services-and-pricing",
          }}
          badge={{ label: "Medical-grade", value: "Provider-delivered" }}
        />

        <ModernTreatmentDetail
          eyebrow="Morpheus8"
          headline={
            <>
              Resurfacing and collagen,
              <br />
              without the laser downtime.
            </>
          }
          description="Morpheus8 combines microneedling with radiofrequency to remodel collagen deep in the dermis. It's our go-to for skin laxity, fine lines, acne scars, and body tightening. Minimally invasive, safe for all skin tones, and with a fraction of the downtime of ablative lasers."
          benefits={morpheus8Benefits}
          candidateTitle="Who is a good candidate for Morpheus8?"
          candidateIntro="Morpheus8 works well for a wide range of patients. You may be a good candidate if you:"
          candidate={morpheus8Candidate}
          bookHref={BOOKING_URLS.aesthetic}
          bookLabel="Book Morpheus8 consultation"
          image={{
            src: "/assets/aesthetic/morpheus8.webp",
            alt: "Woman during a Morpheus8 treatment",
          }}
          imageSide="right"
        />

        <ModernCardGrid
          eyebrow="The InMode suite"
          headline={
            <>
              Five more InMode options
              <br />
              <span className="text-[#6B9680]">we offer here.</span>
            </>
          }
          description="Beyond Morpheus8, the InMode platform gives us several targeted options for pelvic wellness, tissue tightening, and body sculpting. Each is chosen based on what your body actually needs."
          items={inmodeSuite}
          label="InMode"
        />

        <ModernTreatmentDetail
          eyebrow="Dysport & Dermal Fillers"
          headline={
            <>
              Injectables,
              <br />
              done conservatively.
            </>
          }
          description="Our philosophy on injectables is simple: smaller doses, more often, refined over time. Dysport softens dynamic lines while preserving expression. Dermal fillers restore volume where it's genuinely lost, not everywhere at once."
          benefits={injectableBenefits}
          candidateTitle="Who is a good candidate for Dysport or fillers?"
          candidateIntro="Injectables work best when the goal is softening and subtle enhancement, not transformation. You may be a good candidate if you:"
          candidate={injectableCandidate}
          bookHref={BOOKING_URLS.aesthetic}
          bookLabel="Book injectables consultation"
          image={{
            src: "/assets/aesthetic/injectables.webp",
            alt: "Close-up portrait of a woman with smooth skin",
          }}
          imageSide="left"
        />

        <ModernFAQ
          eyebrow="Aesthetic questions"
          headline={
            <>
              Everything patients ask
              <br />
              <span className="text-[#6B9680]">before their first treatment.</span>
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
