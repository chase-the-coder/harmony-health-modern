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
  title: "Men's Restorative Wellness Athens GA | Harmony Health",
  description:
    "Harmony Health offers private, comprehensive men's restorative wellness consultations in Athens, GA — hormone optimization, peptide therapy, and the APEX platform for performance and vascular optimization.",
  canonicalUrlRelative: "/mens-sexual-health",
});

const apexBenefits = [
  "Hormone Optimization (HRT/TRT)",
  "Peptide Therapy",
  "Metabolic & Body Composition Support",
  "Energy, Recovery & Longevity Planning",
  "Functional device treatments, including Apex™ for erectile performance and vascular optimization",
];

const apexCandidate = [
  "Want a personalized, evidence-based plan for your health, performance, and longevity",
  "Are interested in hormone optimization (HRT/TRT) or peptide therapy",
  "Want guidance on metabolic and body composition goals",
  "Are looking for a strategic, in-depth conversation — not a quick visit",
  "Want a discreet, judgment-free space tailored to your goals",
];

const faqs = [
  {
    question: "What is the APEX platform?",
    answer:
      "The APEX platform is an advanced treatment system that combines multiple technologies — including radiofrequency, microneedling, and muscle stimulation — to address men's sexual health concerns. It allows us to fully customize your care and target your concerns from every angle.",
  },
  {
    question: "What conditions can APEX treat?",
    answer:
      "APEX is designed to address sexual performance concerns and erectile dysfunction. By combining multiple modalities, it provides a comprehensive, personalized approach to men's sexual wellness.",
  },
  {
    question: "Is the APEX treatment painful?",
    answer:
      "Treatments are designed to be comfortable. Your provider will walk you through what to expect at your consultation and tailor the approach to minimize any discomfort.",
  },
  {
    question: "How many treatments are needed?",
    answer:
      "The number of sessions depends on your individual goals and response to treatment. Your provider will recommend a personalized plan after your initial consultation.",
  },
  {
    question: "Is this treatment confidential?",
    answer:
      "Absolutely. All appointments are private and your health information is always kept confidential. Our team is committed to providing a comfortable, discreet experience.",
  },
];

export default function MensSexualHealthPage() {
  return (
    <>
      {renderServiceSchema({
        name: "Men's Restorative Wellness",
        description:
          "Private, comprehensive men's restorative wellness consultations including hormone optimization, peptide therapy, and the APEX platform for performance and vascular optimization in Athens, GA.",
        path: "/mens-sexual-health",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Men's Restorative Wellness", path: "/mens-sexual-health" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Men's Restorative Wellness"
          headline={
            <>
              Health. Performance.
              <br />
              <span className="italic font-light text-[#517563]">
                Longevity.
              </span>
            </>
          }
          headlineClassName="text-5xl md:text-7xl lg:text-[96px] font-bold tracking-tighter leading-[0.95] text-[#1F2A25] mb-8"
          description="This private, comprehensive consultation is designed for men seeking to optimize their health, vitality, and overall performance."
          image={{
            src: "/assets/hrt/men.webp",
            alt: "Confident, healthy man",
            objectPosition: "center 20%",
          }}
          primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
          badge={{ label: "Confidential", value: "Private, personalized care" }}
        />

        <ModernTreatmentDetail
          eyebrow="Our Approach"
          headline={
            <>
              A personalized,
              <br />
              evidence-based approach.
            </>
          }
          description="This is not a quick visit — it's a strategic conversation about how you want to feel in your body. All consultations are discreet, judgment-free, and tailored to your goals. We take a personalized, evidence-based approach to:"
          benefits={apexBenefits}
          candidateTitle="This consultation may be right for you if you:"
          candidate={apexCandidate}
          bookHref={BOOKING_URL}
          bookLabel="Book a Men's Restorative Wellness Consultation"
          image={{
            src: "/assets/hrt/men.webp",
            alt: "Active, confident man",
          }}
          video={{ src: "/legacy-images/apex-treatment.mp4", poster: "/images/apex-treatment-poster.webp" }}
          imageSide="right"
        />

        <ModernFAQ
          eyebrow="Men's restorative wellness questions"
          headline={
            <>
              Common questions about
              <br />
              <span className="text-[#6B9680]">
                men&rsquo;s restorative wellness.
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
