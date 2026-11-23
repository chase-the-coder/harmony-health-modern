import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernPageHero from "@/components/modern/ModernPageHero";
import ModernServiceCards, { type ServiceCard } from "@/components/modern/ModernServiceCards";
import ModernFAQ from "@/components/modern/ModernFAQ";
import ModernWellnessExam from "@/components/modern/ModernWellnessExam";
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

const svc = {
  bhrt: {
    title: "Bioidentical Hormone Replacement Therapy (BHRT)",
    text: "Personalized evaluation and management of estrogen, progesterone, and testosterone for perimenopause, menopause, and hormone deficiencies.",
  },
  thyroid: {
    title: "Thyroid Health & Optimization",
    text: "Comprehensive thyroid evaluation, lab testing, and individualized treatment.",
  },
  weight: {
    title: "Medical Weight Loss & Metabolic Health",
    text: "Physician-supervised weight management, GLP-1 therapies when appropriate, insulin resistance evaluation, and metabolic wellness.",
  },
  sexual: {
    title: "Sexual Wellness & Intimate Health",
    text: "Evaluation and treatment options for vaginal dryness, painful intimacy, decreased libido, and other intimate wellness concerns.",
  },
  pelvic: {
    title: "Pelvic Floor Health & EmpowerRF",
    text: "Advanced, noninvasive technologies designed to support pelvic floor function and address select intimate wellness concerns.",
  },
  peptide: {
    title: "Peptide Therapy & Regenerative Wellness",
    text: "Individualized discussions of peptide-based treatments when medically appropriate, with consideration of safety and regulatory status.",
  },
  everyday: {
    title: <>Simple Medical Needs & Sick Visits <em>Telehealth</em></>,
    text: "Convenient telehealth visits for simple medical needs and minor urgent concerns, such as sinus infections, urinary symptoms, and other common illnesses. These visits are for short-term needs only. We do not provide treatment or ongoing management for chronic illnesses.",
  },
  labs: {
    title: "Comprehensive Lab Testing & Root-Cause Evaluation",
    text: "Personalized testing to investigate fatigue, hormonal symptoms, nutrient deficiencies, and metabolic concerns.",
  },
  iv: {
    title: "IV Hydration & Nutrient Support",
    text: "IV hydration and injectable nutrient services based on individual needs.",
  },
  aesthetics: {
    title: "Advanced Aesthetics & Skin Rejuvenation",
    text: "Neurotoxins, dermal fillers, biostimulatory treatments, microneedling, laser hair removal, IPL, and skin rejuvenation.",
  },
  longevity: {
    title: "Longevity & Preventive Wellness",
    text: "Proactive strategies focused on maintaining health, supporting healthy aging, and improving long-term quality of life.",
  },
  annualExam: {
    title: "Comprehensive Women’s Annual Exams",
    text: "Annual preventive exams, Pap smears, breast health evaluations, and routine screenings.",
  },
};

const womensCards: ServiceCard[] = [
  {
    title: "Hormone Optimization Program",
    description:
      "Personalized, ongoing care for women experiencing hormonal changes, perimenopause, menopause, or hormone deficiencies. Our program includes regular follow-up visits, medication management, a women’s annual exam, and exclusive member benefits.",
    detail: "$149/month",
    cta: { label: "Book a consultation", href: BOOKING_URL },
    faqs: [
      {
        question: "Is this program right for me?",
        answer: "This program may be right for you if you:",
        bullets: [
          "Feel tired, overwhelmed, or simply not like yourself anymore",
          "Are experiencing symptoms of perimenopause, menopause, or hormonal imbalance",
          "Struggle with weight changes, low libido, brain fog, mood changes, or disrupted sleep",
          "Want answers to your symptoms rather than temporary fixes",
          "Value a personalized, root-cause approach to your health and wellness",
          "Want a trusted provider who knows your history, listens to your concerns, and partners with you in your care",
          "Are looking for ongoing support with hormone health, preventive care, and overall wellness",
          "Want to be proactive about healthy aging, long-term vitality, and longevity",
        ],
      },
      {
        question: "What can my care plan address?",
        bullets: [
          svc.bhrt,
          svc.thyroid,
          svc.weight,
          svc.sexual,
          svc.pelvic,
          svc.peptide,
          svc.labs,
          svc.longevity,
          svc.aesthetics,
        ],
      },
      {
        question: "Personalized care, not one-size-fits-all protocols",
        answer:
          "Whether you’re navigating hormonal changes, struggling with fatigue, working toward a healthier weight, or simply wanting to feel your best, we’re here to help you find answers and create a plan that fits your life.",
      },
    ],
  },
  {
    title: "Women’s Annual Exam",
    description:
      "Preventive care designed to keep you informed and proactive about your health. Our comprehensive exams include a personalized health assessment, appropriate breast and pelvic evaluations, Pap smear and HPV screening when indicated, and recommendations for routine preventive care.",
    detail: "$199 | Lab testing is billed separately.",
    detailNote:
      "Available as a standalone appointment or included annually with our Hormone Optimization Program.",
    cta: { label: "Schedule your exam", href: BOOKING_URL },
    faqs: [
      {
        question: "What’s included?",
        bullets: [svc.annualExam],
        link: {
          label: "See everything included in the Women’s Annual Exam",
          href: "#womens-wellness-exam",
        },
      },
    ],
  },
  {
    title: "Everyday Medical Care",
    description:
      "Convenient, personalized medical visits for common illnesses and everyday health concerns. From urinary symptoms and sinus infections to medication questions and other routine needs, we’re here when you need care without requiring a wellness membership.",
    detail: "$85 | Simple Care telehealth visit (20 min)",
    detailNote:
      "Available as a standalone appointment with no membership required, or one visit per month is included with our Hormone Optimization Program.",
    cta: { label: "Book a visit", href: BOOKING_URL },
    faqs: [
      {
        question: "What can I be seen for?",
        bullets: [svc.everyday, svc.iv],
        link: { label: "Learn more about Simple Care visits", href: "/simple-care" },
      },
    ],
  },
];

const faqs = [
  {
    question: "What is included in the Women's Restorative Wellness program?",
    answer:
      "Your program includes 4 comprehensive follow-up visits per year, medication management, 1 monthly simple care visit, a women's annual exam, and priority scheduling. Peptide therapy and EmpowerRF treatments are available as part of your personalized plan. Labs and medications are billed separately.",
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
          description="A personalized approach to women’s health at every stage of life. From comprehensive wellness exams and everyday medical care to hormone optimization and advanced restorative treatments, we focus on whole-body wellness, lasting vitality, and healthy longevity."
          image={{
            src: "/assets/hrt/women.webp",
            alt: "Confident, healthy woman",
            objectPosition: "center 20%",
          }}
          primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
          badge={{ label: "Program", value: "All-inclusive wellness care" }}
          dnaBackground
        />

        <ModernServiceCards
          eyebrow="Our Approach"
          headline={
            <>
              Women’s Health, Your Way.
              <br />
              <span className="italic font-light">
                Personalized care for every stage of life.
              </span>
            </>
          }
          description="At Harmony Health, we believe women’s healthcare should be comprehensive, convenient, and centered around you. Whether you’re seeking ongoing hormone optimization, scheduling your annual wellness exam, or needing care for an everyday health concern, we’re here to support your health, vitality, and longevity."
          subheading="Explore Our Women’s Healthcare Options"
          cards={womensCards}
          highlights={["Hormone Optimization", "Annual Exams", "Everyday Care"]}
          badge={{ label: "Led by", value: "Megan Cryder, NP-C" }}
          image={{
            src: "/images/megan-laptop-stool.webp",
            alt: "Megan working on a laptop while seated on a stool",
            width: 1098,
            height: 1646,
          }}
        />

        <ModernWellnessExam />

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
