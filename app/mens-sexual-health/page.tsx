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
  title: "Men's Sexual Health Athens GA | Harmony Health",
  description:
    "Harmony Health offers men's sexual health treatments in Athens, GA — including the APEX platform for sexual performance and erectile dysfunction.",
  canonicalUrlRelative: "/mens-sexual-health",
});

const apexBenefits = [
  "Addresses sexual performance concerns",
  "Non-surgical approach to erectile dysfunction",
  "Combines multiple technologies for comprehensive results",
  "Fully customized to your individual goals",
];

const apexCandidate = [
  "Experience erectile dysfunction or reduced sexual performance",
  "Want a non-surgical, personalized treatment approach",
  "Are looking for a comprehensive solution using advanced technology",
  "Want to address concerns from multiple angles for optimal results",
  "Prefer a treatment plan tailored to your unique needs",
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
        name: "Men's Sexual Health",
        description:
          "Men's sexual health treatments including the APEX platform for sexual performance and erectile dysfunction in Athens, GA.",
        path: "/mens-sexual-health",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Men's Sexual Health", path: "/mens-sexual-health" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Men's Sexual Health"
          headline={
            <>
              Personalized care.
              <br />
              <span className="italic font-light text-[#517563]">
                Advanced technology.
              </span>
            </>
          }
          description="We offer advanced, non-surgical treatments for men's sexual health — addressing performance concerns and erectile dysfunction with a fully customized approach. No two patients are the same, and neither are our treatment plans."
          image={{
            src: "/assets/hrt/men.webp",
            alt: "Confident, healthy man",
            objectPosition: "center 20%",
          }}
          primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
          badge={{ label: "Confidential", value: "Private, personalized care" }}
        />

        <ModernTreatmentDetail
          eyebrow="APEX Platform"
          headline={
            <>
              A customized approach
              <br />
              to your care.
            </>
          }
          description="The APEX platform allows us to fully customize your care by combining multiple technologies — radiofrequency, microneedling, and muscle stimulation — to address your concerns from every angle for optimal results. No two patients are the same. That's why we tailor every treatment plan to your unique goals, whether you're focused on symptom relief, prevention, or overall rejuvenation."
          benefits={apexBenefits}
          candidateTitle="Who is a good candidate for APEX?"
          candidateIntro="APEX may be right for you if you:"
          candidate={apexCandidate}
          bookHref={BOOKING_URL}
          bookLabel="Book a men's sexual health consultation"
          image={{
            src: "/assets/hrt/men.webp",
            alt: "Active, confident man",
          }}
          video={{ src: "/legacy-images/apex-treatment.mp4" }}
          imageSide="right"
        />

        <ModernFAQ
          eyebrow="Men's sexual health questions"
          headline={
            <>
              Common questions about
              <br />
              <span className="text-[#6B9680]">
                men&rsquo;s sexual health.
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
