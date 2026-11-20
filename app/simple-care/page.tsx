import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernPageHero from "@/components/modern/ModernPageHero";
import ModernSymptomGrid from "@/components/modern/ModernSymptomGrid";
import ModernSimpleCare from "@/components/modern/ModernSimpleCare";
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
  title: "Simple Care Telehealth Sick Visits | Harmony Health Athens GA",
  description:
    "Simple Care telehealth visits from Harmony Health in Athens, GA. Get seen from home for sinus infections, urinary symptoms, and other common illnesses. $85, no membership required.",
  canonicalUrlRelative: "/simple-care",
});

const concerns = [
  "Sinus infections and congestion",
  "Urinary symptoms",
  "Cold and flu symptoms",
  "Sore throat and cough",
  "Seasonal allergies",
  "Other common, short-term illnesses",
];

const faqs = [
  {
    question: "What is Simple Care?",
    answer:
      "Simple Care is a telehealth visit for simple medical needs and minor urgent concerns, such as sinus infections, urinary symptoms, and other common illnesses. These visits are for short-term needs only.",
  },
  {
    question: "Do you treat or manage chronic illnesses?",
    answer:
      "No. We do not provide treatment or ongoing management for chronic illnesses. Please continue to see your primary care provider or specialist for ongoing conditions.",
  },
  {
    question: "Are visits in person or online?",
    answer:
      "Simple Care visits are telehealth only, so you can be seen from home, work, or wherever you are.",
  },
  {
    question: "How much does a visit cost?",
    answer:
      "A Simple Care telehealth visit is $85. No membership is required. If you are a member of our Hormone Optimization Program, one visit per month is included.",
  },
  {
    question: "What if my symptoms are serious?",
    answer:
      "Simple Care is not for emergencies. If you are having a medical emergency, call 911 or go to the nearest emergency room.",
  },
];

export default function SimpleCarePage() {
  return (
    <>
      {renderServiceSchema({
        name: "Simple Care Telehealth Visits",
        description:
          "Telehealth sick visits for simple medical needs and minor urgent concerns in Athens, GA.",
        path: "/simple-care",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Simple Care", path: "/simple-care" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Simple Care"
          headline={
            <>
              Feeling sick? Get seen.
              <br />
              <span className="italic font-light text-[#517563]">From home.</span>
            </>
          }
          description="Convenient telehealth visits for simple medical needs and minor urgent concerns, such as sinus infections, urinary symptoms, and other common illnesses. For short-term needs only. We do not provide treatment or ongoing management for chronic illnesses."
          image={{
            src: "/images/megan-laptop-telehealth.webp",
            alt: "Megan smiling while working on a laptop with a cup of coffee",
            objectPosition: "center",
          }}
          tallImage
          primaryCta={{ label: "Book a sick visit", href: BOOKING_URL }}
          secondaryCta={{ label: "See pricing", href: "#pricing" }}
          badge={{ label: "Telehealth visit", value: "$85 · No membership" }}
        />

        <ModernSymptomGrid
          eyebrow="What we can help with"
          headline={
            <>
              Common sick complaints.
              <br />
              <span className="italic font-light text-[#517563]">Simple, fast care.</span>
            </>
          }
          description="Simple Care visits are for new, short-term concerns like these."
          symptoms={concerns}
          variant="tint"
        />

        <ModernSimpleCare />

        <ModernFAQ
          eyebrow="Simple Care questions"
          headline={
            <>
              Questions about
              <br />
              <span className="text-[#6B9680]">Simple Care visits.</span>
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
