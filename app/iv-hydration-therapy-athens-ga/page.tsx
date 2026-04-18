import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernPageHero from "@/components/modern/ModernPageHero";
import ModernSymptomGrid from "@/components/modern/ModernSymptomGrid";
import ModernTreatmentDetail from "@/components/modern/ModernTreatmentDetail";
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
  title: "IV Hydration Therapy Athens GA | Harmony Health",
  description:
    "Medical-grade IV hydration therapy in Athens, GA. Immunity, Reboot, and Energize drips for fast recovery, immune support, and focused energy. Administered by a medical team.",
  canonicalUrlRelative: "/iv-hydration-therapy-athens-ga",
});

const signs = [
  "Persistent fatigue or low energy",
  "Dehydration or dry skin",
  "Frequent headaches or dizziness",
  "Slow workout recovery",
  "Frequent colds and weak immunity",
  "Brain fog or difficulty concentrating",
];

const immunityBenefits = [
  "Supports immune-cell function and antioxidant defense",
  "High-dose Vitamin C and zinc delivered for full absorption",
  "Hydrates deeply to help tissue recover under strain",
  "Supports detoxification pathways and cellular repair",
  "Works well before travel or at the first sign of illness",
];

const immunityCandidate = [
  "Travel often and want immune support before long flights",
  "Feel a cold or flu coming on and want to hit it fast",
  "Work a high-stress job where getting sick costs you",
  "Prefer IV delivery over oral supplements for bioavailability",
  "Want a single session or a periodic routine (monthly, seasonal)",
];

const rebootBenefits = [
  "Rapidly restores fluid and electrolyte balance",
  "Eases nausea, headache, and sluggishness from dehydration",
  "Bypasses the gut for faster nutrient uptake",
  "Supports metabolic reset after workouts, travel, or long weeks",
  "Flushes metabolic waste and speeds recovery",
];

const rebootCandidate = [
  "Just finished a hard training block, race, or event",
  "Flew long-haul or worked through time zone changes",
  "Have a hangover, stomach bug, or are recovering from illness",
  "Feel generically depleted and want to reset in one session",
  "Want a faster recovery window than oral hydration provides",
];

const energizeBenefits = [
  "B-Complex and amino acids for cellular energy production",
  "Supports nervous system and mental clarity",
  "High bioavailability means faster, more complete uptake",
  "Sustained energy without the crash of caffeine",
  "Pairs well with your current wellness and fitness routine",
];

const energizeCandidate = [
  "Have a big presentation, launch week, or deadline",
  "Train regularly and want more sustained daily energy",
  "Feel chronically run down despite adequate sleep",
  "Prefer infused nutrients over stimulants or energy drinks",
  "Want a monthly or bi-weekly performance routine",
];

const faqs = [
  {
    question: "How does IV hydration actually work?",
    answer:
      "IV hydration delivers fluids, electrolytes, vitamins, and minerals directly into the bloodstream. Bypassing the digestive tract means near-100% bioavailability. Your body uses the nutrients immediately instead of losing a significant portion to gut absorption.",
  },
  {
    question: "How long does a session take?",
    answer:
      "Most sessions run 30-60 minutes, depending on the formula and your IV access. You can read, work on your laptop, or rest while the drip runs.",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes, when delivered by a trained medical team with licensed equipment. We screen for contraindications (certain heart, kidney, and liver conditions) before starting, and a provider monitors your response throughout the session.",
  },
  {
    question: "Does it hurt?",
    answer:
      "A small pinch when the IV is placed, similar to a blood draw. The infusion itself is typically comfortable, sometimes a gentle warmth or cool sensation as the fluid enters.",
  },
  {
    question: "Who shouldn't get IV therapy?",
    answer:
      "Patients with uncontrolled kidney or heart disease, certain fluid restrictions, active infections requiring different care, or specific severe illnesses may not be candidates. A brief health screen at your first visit confirms eligibility.",
  },
  {
    question: "How often can I do it?",
    answer:
      "Depends on your goal and formula.\n\n• Occasional use: before travel, for illness, after a hard event\n• Maintenance: monthly or bi-weekly for immune or energy support\n• Intensive: weekly for a defined stretch when recovering from something specific\n\nYour provider will tailor frequency to you.",
  },
  {
    question: "Do I need to prepare?",
    answer:
      "Eat a light meal and drink water beforehand for easier vein access. Wear a short-sleeve top or loose sleeves. Avoid alcohol the day of your session.",
  },
  {
    question: "Is IV therapy covered by insurance?",
    answer:
      "Wellness-oriented IV therapy is almost always considered elective and is not covered by insurance. Some patients use HSA or FSA funds, depending on their plan. We provide itemized receipts.",
  },
  {
    question: "What happens during my first session?",
    answer:
      "Brief health screen, blood pressure, and goal setting. Provider places the IV and connects the drip. You relax for 30-60 minutes in a quiet room. We remove the IV and review how you're feeling before you head out.",
  },
];

export default function IVHydrationPage() {
  return (
    <>
      {renderServiceSchema({
        name: "IV Hydration Therapy",
        description:
          "Medical-grade IV hydration and vitamin therapy in Athens, GA. Immunity, Reboot, and Energize drips.",
        path: "/iv-hydration-therapy-athens-ga",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "IV Hydration Therapy", path: "/iv-hydration-therapy-athens-ga" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="IV Hydration Therapy"
          headline={
            <>
              Rehydrate. Recharge.
              <br />
              <span className="italic font-light text-[#517563]">Restore.</span>
            </>
          }
          description="Feel the difference in under an hour. Vitamins, electrolytes, and fluids delivered straight to your bloodstream by a licensed medical team. Three formulas, each built for a specific outcome."
          image={{
            src: "/assets/iv/hero.webp",
            alt: "Patient relaxing during an IV hydration session",
          }}
          primaryCta={{
            label: "Book IV appointment",
            href: BOOKING_URLS.iv,
          }}
          secondaryCta={{
            label: "See pricing",
            href: "/services-and-pricing",
          }}
          badge={{ label: "Walk-in friendly", value: "45-min sessions" }}
        />

        <ModernSymptomGrid
          eyebrow="Common signs"
          headline={
            <>
              Running on fumes?
              <br />
              <span className="text-[#6B9680]">Your body is telling you.</span>
            </>
          }
          description="If any of these sound like you right now, an IV session can move the needle faster than oral hydration and supplements alone."
          symptoms={signs}
          variant="tint"
        />

        <ModernTreatmentDetail
          eyebrow="Immunity"
          headline={
            <>
              Shore up your defenses
              <br />
              before you need them.
            </>
          }
          description="A high-dose Vitamin C and zinc blend with glutathione and core hydration. Ideal at the first sign of illness, before long travel, or as a seasonal reset when staying well actually matters."
          benefits={immunityBenefits}
          candidateTitle="Who should book Immunity?"
          candidateIntro="Immunity is our most-used drip for patients who want to stay ahead of illness, not react to it. You may be a good candidate if you:"
          candidate={immunityCandidate}
          bookHref={BOOKING_URLS.iv}
          bookLabel="Book Immunity drip"
          image={{
            src: "/assets/iv/immunity.webp",
            alt: "Woman wrapped in a soft blanket with warm tea",
          }}
          imageSide="right"
        />

        <ModernTreatmentDetail
          eyebrow="Reboot"
          headline={
            <>
              When your tank is empty,
              <br />
              refill it fast.
            </>
          }
          description="A recalibration drip with fluids, electrolytes, B vitamins, and anti-nausea support. Built for the days after a race, long travel, illness recovery, or when life just depleted you and oral hydration isn't cutting it."
          benefits={rebootBenefits}
          candidateTitle="Who should book Reboot?"
          candidateIntro="Reboot works fast when your body is clearly depleted. You may be a good candidate if you:"
          candidate={rebootCandidate}
          bookHref={BOOKING_URLS.iv}
          bookLabel="Book Reboot drip"
          image={{
            src: "/assets/iv/reboot.webp",
            alt: "Athlete recovering after a workout",
          }}
          imageSide="left"
        />

        <ModernTreatmentDetail
          eyebrow="Energize & Thrive"
          headline={
            <>
              For the days you
              <br />
              can&rsquo;t afford to fade.
            </>
          }
          description="A performance formula with B-Complex, amino acids, and core hydration. Built for the busy weeks, the big deadlines, and the training blocks where you need sustained energy without relying on stimulants."
          benefits={energizeBenefits}
          candidateTitle="Who should book Energize?"
          candidateIntro="Energize is for people already doing the work and wanting a targeted edge. You may be a good candidate if you:"
          candidate={energizeCandidate}
          bookHref={BOOKING_URLS.iv}
          bookLabel="Book Energize drip"
          image={{
            src: "/assets/iv/energize.webp",
            alt: "Focused woman working at a standing desk",
          }}
          imageSide="right"
        />

        <ModernFAQ
          eyebrow="IV questions"
          headline={
            <>
              Everything patients ask
              <br />
              <span className="text-[#6B9680]">before their first drip.</span>
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
