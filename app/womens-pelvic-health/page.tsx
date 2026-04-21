import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernPageHero from "@/components/modern/ModernPageHero";
import ModernTreatmentDetail from "@/components/modern/ModernTreatmentDetail";
import ModernFAQ from "@/components/modern/ModernFAQ";
import ModernCTA from "@/components/modern/ModernCTA";
import { BOOKING_URL } from "@/components/harmony/BookingButton";
import {
  getSEOTags,
  renderFAQSchema,
  renderBreadcrumbSchema,
  renderServiceSchema,
} from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Women's Pelvic Health Athens GA | Harmony Health",
  description:
    "Harmony Health offers women's pelvic health treatments in Athens, GA — Morpheus8V, FormaV, and Vtone — to address vaginal laxity, dryness, and pelvic floor strength.",
  canonicalUrlRelative: "/womens-pelvic-health",
});

const morpheus8Benefits = [
  "Tightens and strengthens tissue",
  "Enhances sensation and confidence",
  "Improves tone and elasticity",
  "Minimal downtime, long-lasting results",
];

const morpheus8Candidate = [
  "Experience vaginal laxity or reduced sensation",
  "Deal with vaginal dryness or discomfort",
  "Want to improve tissue tone and elasticity",
  "Are looking for a minimally invasive option with lasting results",
  "Desire enhanced sensitivity and confidence",
];

const formaVBenefits = [
  "Increases blood flow and collagen production",
  "Comfortable — no needles, no downtime",
  "Restores vaginal and vulvar tissue health",
  "Ideal for early intervention and ongoing maintenance",
];

const formaVCandidate = [
  "Experience mild vaginal laxity",
  "Deal with dryness or irritation",
  "Want early intervention before symptoms worsen",
  "Prefer a comfortable, non-invasive option",
  "Are looking for a maintenance treatment with no downtime",
];

const vtoneBenefits = [
  "Improved urinary control",
  "Stronger pelvic floor muscles",
  "Enhanced sexual wellness",
  "Quick, efficient treatments",
];

const vtoneCandidate = [
  "Struggle with bladder control or leakage",
  "Have a weakened pelvic floor from childbirth or aging",
  "Want to strengthen core support without surgery",
  "Are interested in improving sexual wellness",
  "Prefer a non-invasive, non-surgical option",
];

const faqs = [
  {
    question: "What is Morpheus8V?",
    answer:
      "Morpheus8V is a minimally invasive treatment combining microneedling with radiofrequency energy to stimulate deep collagen and elastin production. It remodels tissue from within, helping improve vaginal laxity, dryness, sensitivity, and overall tissue health.",
  },
  {
    question: "What is FormaV?",
    answer:
      "FormaV is a comfortable, non-invasive radiofrequency treatment designed to restore and maintain vaginal and vulvar tissue health. Using uniform heat, it increases blood flow and collagen production — without needles or downtime.",
  },
  {
    question: "What is Vtone?",
    answer:
      "Vtone uses electrical muscle stimulation to strengthen and retrain the pelvic floor — similar to doing hundreds of Kegel exercises in a single session. It's an effective, non-surgical option for improving bladder control and core support.",
  },
  {
    question: "How many treatments are needed?",
    answer:
      "The number of treatments depends on your individual goals and the specific treatment. Most patients see optimal results after a series of sessions. Your provider will recommend a personalized plan during your consultation.",
  },
  {
    question: "Is there downtime?",
    answer:
      "FormaV and Vtone have no downtime. Morpheus8V is minimally invasive and may have a brief recovery period, though most patients return to normal activities quickly. Your provider will give you specific post-treatment instructions.",
  },
  {
    question: "Are these treatments safe?",
    answer:
      "Yes. These treatments are performed by trained providers under medical supervision. We customize each protocol to your needs and monitor your progress throughout your care.",
  },
];

export default function WomensPelvicHealthPage() {
  return (
    <>
      {renderServiceSchema({
        name: "Women's Pelvic Health",
        description:
          "Women's pelvic health treatments including Morpheus8V, FormaV, and Vtone in Athens, GA.",
        path: "/womens-pelvic-health",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Women's Pelvic Health", path: "/womens-pelvic-health" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Women's Pelvic Health"
          headline={
            <>
              Feel like yourself again.
              <br />
              <span className="italic font-light text-[#517563]">
                From the inside out.
              </span>
            </>
          }
          description="We offer advanced, non-surgical treatments to support vaginal health, pelvic floor strength, and overall wellness. From deep tissue remodeling to gentle maintenance care, we'll build a plan around your goals."
          image={{
            src: "/assets/hrt/women.webp",
            alt: "Woman feeling confident and healthy",
          }}
          primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
          badge={{ label: "Non-surgical", value: "Personalized to your goals" }}
        />

        <ModernTreatmentDetail
          eyebrow="Morpheus8V"
          headline={
            <>
              Deep remodeling.
              <br />
              Lasting results.
            </>
          }
          description="Morpheus8V is a minimally invasive treatment that combines microneedling with radiofrequency energy to stimulate deep collagen and elastin production. By remodeling tissue from within, it helps improve vaginal laxity, dryness, sensitivity, and overall tissue health."
          benefits={morpheus8Benefits}
          candidateTitle="Who is a good candidate for Morpheus8V?"
          candidateIntro="Morpheus8V may be right for you if you:"
          candidate={morpheus8Candidate}
          bookHref={BOOKING_URL}
          bookLabel="Book a Morpheus8V consultation"
          image={{
            src: "/assets/aesthetic/morpheus8.webp",
            alt: "Morpheus8V treatment",
          }}
          imageSide="right"
        />

        <ModernTreatmentDetail
          eyebrow="FormaV"
          headline={
            <>
              Gentle rejuvenation.
              <br />
              Noticeable improvement.
            </>
          }
          description="FormaV is a comfortable, non-invasive radiofrequency treatment designed to restore and maintain vaginal and vulvar tissue health. Using uniform heat, it increases blood flow and collagen production — without needles or downtime."
          benefits={formaVBenefits}
          candidateTitle="Who is a good candidate for FormaV?"
          candidateIntro="FormaV may be right for you if you:"
          candidate={formaVCandidate}
          bookHref={BOOKING_URL}
          bookLabel="Book a FormaV consultation"
          image={{
            src: "/assets/hrt/women.webp",
            alt: "Woman relaxing during a comfortable non-invasive treatment",
          }}
          imageSide="left"
        />

        <ModernTreatmentDetail
          eyebrow="Vtone"
          headline={
            <>
              Stronger pelvic floor.
              <br />
              Better control.
            </>
          }
          description="Vtone uses electrical muscle stimulation to strengthen and retrain the pelvic floor — similar to doing hundreds of Kegel exercises in a single session. It's an effective, non-surgical option for improving bladder control and core support."
          benefits={vtoneBenefits}
          candidateTitle="Who is a good candidate for Vtone?"
          candidateIntro="Vtone may be right for you if you:"
          candidate={vtoneCandidate}
          bookHref={BOOKING_URL}
          bookLabel="Book a Vtone consultation"
          image={{
            src: "/assets/hrt/women.webp",
            alt: "Active woman with strong core and healthy pelvic floor",
          }}
          imageSide="right"
        />

        <ModernFAQ
          eyebrow="Pelvic health questions"
          headline={
            <>
              Common questions about
              <br />
              <span className="text-[#6B9680]">
                women&rsquo;s pelvic health.
              </span>
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
