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
  "Are looking for a strategic, in-depth conversation",
  "Want a discreet, judgment-free space tailored to your goals",
];

const faqs = [
  {
    question: "How do I know if my testosterone is low?",
    answer:
      "Common symptoms include fatigue, decreased sex drive, difficulty building or maintaining muscle, increased body fat, reduced motivation, brain fog, and changes in mood. Blood testing helps determine whether low testosterone may be contributing to your symptoms.",
  },
  {
    question: "Am I too young for low testosterone?",
    answer:
      "No. Although testosterone levels often decline with age, younger men can also experience low testosterone due to certain medical conditions, medications, obesity, sleep disorders, and other factors.",
  },
  {
    question: "Will testosterone therapy improve my energy, sex drive, and muscle mass?",
    answer:
      "Men with confirmed testosterone deficiency may experience improved libido, sexual function, energy, and body composition with appropriate treatment. Results vary, and not every symptom is caused by low testosterone.",
  },
  {
    question: "How long does it take to notice results from TRT?",
    answer:
      "Some men begin noticing improvements in sexual desire and well-being within several weeks. Changes in muscle mass, strength, and body composition typically take several months.",
  },
  {
    question: "Will testosterone therapy cause my body to stop producing its own testosterone?",
    answer:
      "Yes, external testosterone can suppress your body's natural testosterone production. This is why individualized treatment, ongoing monitoring, and a discussion of fertility goals are important.",
  },
  {
    question: "Is testosterone therapy safe for long-term use?",
    answer:
      "TRT can be appropriate for men with confirmed testosterone deficiency when carefully prescribed and monitored. We evaluate blood counts, testosterone levels, prostate-related risks, cardiovascular history, and other health factors to determine whether treatment is appropriate.",
  },
  {
    question: "Do I have to give myself injections?",
    answer:
      "Not necessarily. Testosterone is available in several forms, including injections and topical preparations. We discuss treatment options and determine which approach best fits your needs.",
  },
  {
    question: "What is the APEX platform?",
    answer:
      "APEX by InMode is an advanced, non-invasive treatment designed specifically for men's intimate wellness. Using controlled radiofrequency (RF) energy, APEX warms targeted tissue to improve local blood circulation, which is an important component of healthy erectile function.",
  },
  {
    question: "How does APEX work and what does it treat?",
    answer:
      "APEX is designed to address sexual performance concerns and erectile dysfunction. By combining multiple modalities, it provides a comprehensive, personalized approach to men's sexual wellness. Achieving and maintaining an erection depends on healthy blood flow. APEX uses a special device designed for male anatomy to deliver controlled energy to targeted areas.",
  },
  {
    question: "Is the APEX treatment painful?",
    answer:
      "APEX treatments are not painful and are designed to be quick and comfortable. Your provider will walk you through what to expect at your consultation and tailor the approach to your individual needs to get the best results. No surgery. No injections. No medications required for the procedure. It is a series of very quick office visits with no downtime and long-lasting results.",
  },
  {
    question: "How many treatments are needed?",
    answer:
      "The general recommended treatment series is six sessions. It may be different for each patient depending on treatment goals and health history. The number of sessions depends on your individual goals and response to treatment. Your provider will recommend a personalized plan after your initial consultation.",
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
          dnaBackground
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
          description="This visit is a strategic conversation about how you want to feel in your body. All consultations are discreet, judgment-free, and tailored to your goals. We take a personalized, evidence-based approach to:"
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
          photoBelow={{
            src: "/images/megan-inmode-apex.webp",
            alt: "Megan holding an InMode treatment handpiece next to the InMode system",
            width: 1098,
            height: 1646,
          }}
          imageSide="right"
          background="dark"
          largeCopy
          candidateOpen
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
          image={{
            src: "/images/megan-apex-handpiece.webp",
            alt: "Megan holding an InMode treatment handpiece",
            width: 1098,
            height: 1646,
          }}
        />

        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}
