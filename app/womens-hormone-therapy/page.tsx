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
  title: "Women's Restorative Wellness Athens GA | Harmony Health",
  description:
    "Harmony Health offers an all-inclusive Women's Restorative Wellness program in Athens, GA, combining hormone replacement therapy (HRT), EmpowerRF, and peptide therapy into one personalized plan.",
  canonicalUrlRelative: "/womens-hormone-therapy",
});

const wellnessBenefits = [
  "Hormone Replacement Therapy (HRT) with quarterly follow-up visits",
  "EmpowerRF for vaginal rejuvenation & pelvic floor health",
  "Peptide Therapy",
  "Medication management & annual women's wellness exam",
  "Priority scheduling, secure messaging & discounts on aesthetics",
];

const wellnessCandidate = [
  "Want ongoing hormone management with a provider who knows your history",
  "Are interested in EmpowerRF for vaginal rejuvenation and pelvic floor health",
  "Want peptide therapy as part of your wellness plan",
  "Are looking for one all-inclusive program instead of piecing together care",
  "Want discounts on aesthetic treatments and supplements along the way",
];

const faqs = [
  {
    question: "What is included in the Women's Restorative Wellness program?",
    answer:
      "Your program includes 4 comprehensive follow-up visits per year, medication management, 1 monthly simple care visit, an annual women's wellness exam, and priority scheduling. Peptide therapy and EmpowerRF treatments are available as part of your personalized plan. Labs and medications are billed separately.",
  },
  {
    question: "What is EmpowerRF?",
    answer:
      "EmpowerRF is a women's wellness platform using RF and electrical muscle stimulation to improve pelvic health, sexual wellness, and vaginal rejuvenation without surgery or downtime. Treatments include Morpheus8V, FormaV, and VTone.",
  },
  {
    question: "What is peptide therapy?",
    answer:
      "Peptide therapy uses targeted peptides as part of a personalized wellness plan. Your provider will discuss whether peptide therapy is right for you and which options fit your goals during your consultation.",
  },
  {
    question: "Is this a monthly program?",
    answer:
      "Yes. Women's Restorative Wellness is offered as a monthly program so you have ongoing access to hormone management, wellness visits, and discounted pricing on additional treatments like EmpowerRF and peptide therapy.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a consultation and we'll review your history, goals, and labs to build a personalized plan around hormone therapy, EmpowerRF, and peptide therapy.",
  },
];

export default function WomensHormoneTherapyPage() {
  return (
    <>
      {renderServiceSchema({
        name: "Women's Restorative Wellness",
        description:
          "All-inclusive women's restorative wellness program combining hormone replacement therapy (HRT), EmpowerRF, and peptide therapy in Athens, GA.",
        path: "/womens-hormone-therapy",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Women's Restorative Wellness", path: "/womens-hormone-therapy" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Women's Restorative Wellness"
          headline={
            <>
              Hormones. Renewal.
              <br />
              <span className="italic font-light text-[#517563]">
                Longevity.
              </span>
            </>
          }
          description="A private, all-inclusive approach to women's hormone health, combining HRT, EmpowerRF, and peptide therapy into one personalized program."
          image={{
            src: "/assets/hrt/women.webp",
            alt: "Confident, healthy woman",
            objectPosition: "center 20%",
          }}
          primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
          badge={{ label: "Program", value: "All-inclusive wellness care" }}
        />

        <ModernTreatmentDetail
          eyebrow="Our Approach"
          headline={
            <>
              One all-inclusive
              <br />
              wellness experience.
            </>
          }
          description="Ongoing concierge hormone care for women, combining hormone replacement therapy, EmpowerRF, and peptide therapy into one all-inclusive program. Comprehensive management, aesthetic perks, and a provider who knows your history."
          benefits={wellnessBenefits}
          candidateTitle="This program may be right for you if you:"
          candidate={wellnessCandidate}
          bookHref={BOOKING_URL}
          bookLabel="Book a Women's Restorative Wellness Consultation"
          image={{
            src: "/assets/hrt/women.webp",
            alt: "Woman receiving personalized wellness care",
          }}
          video={{ src: "/legacy-images/formav-treatment.mp4", poster: "/legacy-images/formav-poster.jpg" }}
          imageSide="right"
        />

        <ModernFAQ
          eyebrow="Women's restorative wellness questions"
          headline={
            <>
              Common questions about
              <br />
              <span className="text-[#6B9680]">
                women&rsquo;s restorative wellness.
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
