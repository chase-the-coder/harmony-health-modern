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
  title: "Medical Weight Loss Athens GA | Harmony Health",
  description:
    "Medically supervised weight loss in Athens, GA. Semaglutide and Tirzepatide protocols with ongoing provider support, monthly titration, and a plan built around your labs and lifestyle.",
  canonicalUrlRelative: "/medical-weight-loss-athens-ga",
});

const struggles = [
  "Weight that keeps coming back despite diet and exercise",
  "Constant hunger, cravings, and portion creep",
  "Slower metabolism and stubborn abdominal fat",
  "Energy crashes in the afternoon",
  "Sleep apnea, joint pain, or rising A1C",
  "Years of plans that worked briefly, then stopped",
];

const semaglutideBenefits = [
  "Reduced appetite and cravings through GLP-1 receptor activity",
  "Better blood sugar control and metabolic markers",
  "Steady, sustainable loss paired with lifestyle coaching",
  "Monthly check-ins with titration and labs review",
];

const semaglutideCandidate = [
  "BMI of 27 or higher with a weight-related condition, or BMI 30+",
  "Have tried structured diet and exercise without lasting results",
  "Are medically cleared for a GLP-1 agonist (no personal or family history of medullary thyroid carcinoma or MEN 2)",
  "Want a supervised program with routine follow-up, not a vending-machine prescription",
  "Are willing to pair medication with nutrition and movement changes",
];

const tirzepatideBenefits = [
  "Dual GIP and GLP-1 action for stronger appetite control",
  "Greater average weight loss than GLP-1-only options in head-to-head trials",
  "Improvements in A1C, blood pressure, and lipid profile",
  "Weekly injection, titrated monthly to minimize side effects",
];

const tirzepatideCandidate = [
  "BMI of 27+ with comorbidities or BMI 30+",
  "Plateaued on Semaglutide or need a stronger response",
  "Cleared for dual agonist therapy after lab review",
  "Commit to monthly visits for titration and safety monitoring",
  "Want coordinated care with nutrition coaching and lifestyle support",
];

const faqs = [
  {
    question: "Who is a good candidate for medical weight loss?",
    answer:
      "Medical weight loss is typically for patients with a BMI of 27 or higher who also have a weight-related condition (type 2 diabetes, high blood pressure, sleep apnea, dyslipidemia), or a BMI of 30 or higher. Candidates should be willing to pair medication with nutrition and lifestyle changes. A consultation and lab work confirm eligibility and rule out contraindications.",
  },
  {
    question: "How do Semaglutide and Tirzepatide actually work?",
    answer:
      "Semaglutide is a GLP-1 receptor agonist. It mimics a gut hormone that slows gastric emptying, reduces appetite, and improves insulin response.\n\nTirzepatide activates both GLP-1 and GIP receptors, a dual mechanism that tends to produce a stronger appetite and glucose effect.\n\nBoth are weekly subcutaneous injections. Titration ramps the dose gradually to minimize side effects.",
  },
  {
    question: "How much weight can I expect to lose?",
    answer:
      "Clinical trial averages (your results depend on dose, adherence, and lifestyle):\n\n• Semaglutide 2.4mg weekly: mean ~14.9% body weight loss at 68 weeks (Wilding et al., STEP 1, NEJM 2021)\n• Tirzepatide 15mg weekly: mean ~20.9% body weight loss at 72 weeks (Jastreboff et al., SURMOUNT-1, NEJM 2022)\n\nThese are averages from randomized trials. We set individual targets with you, not a one-size-fits-all number.",
  },
  {
    question: "Are these medications safe?",
    answer:
      "Both are FDA-approved for chronic weight management and have extensive safety data. The most common side effects are nausea, constipation, and mild GI discomfort, usually in the first few weeks and typically improved by slower titration. Serious risks are rare but real, which is why we screen labs and history before starting and monitor at every visit.",
  },
  {
    question: "What does a typical program look like?",
    answer:
      "Visit 1: intake, labs, medical clearance.\nWeek 1-2: baseline review, first dose if cleared.\nMonthly: provider check-in, side effect review, dose titration, weight and measurement tracking.\nOngoing: nutrition guidance, messaging between visits, and quarterly lab rechecks to make sure you're losing fat, not lean mass.",
  },
  {
    question: "What happens when I stop the medication?",
    answer:
      "Appetite regulation generally returns to baseline once GLP-1 levels drop. Patients who stop abruptly without building new habits often regain weight. We plan exit and maintenance strategies from the start so the work you do on the program holds after you stop.",
  },
  {
    question: "Do you offer nutrition coaching?",
    answer:
      "Yes. Medication reduces hunger, but lasting results come from nutrition, protein intake, sleep, and strength training. We include nutrition guidance at each visit and can refer to partners for structured coaching if you want a deeper program.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most patients notice reduced appetite within the first 1-2 weeks. Measurable weight loss typically begins within the first month. Significant changes on the scale and in body composition usually show by month 3-6 with steady titration.",
  },
];

export default function MedicalWeightLossPage() {
  return (
    <>
      {renderServiceSchema({
        name: "Medical Weight Loss",
        description:
          "Medically supervised weight loss with Semaglutide and Tirzepatide in Athens, GA.",
        path: "/medical-weight-loss-athens-ga",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        {
          name: "Medical Weight Loss",
          path: "/medical-weight-loss-athens-ga",
        },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Medical Weight Loss"
          headline={
            <>
              Lose it.
              <br />
              <span className="italic font-light text-[#517563]">Keep it off.</span>
            </>
          }
          description="Drop the weight your body has been holding onto and keep it off for good. Semaglutide and Tirzepatide protocols with custom titration, monthly check-ins, and the nutrition coaching that makes results last after you stop the medication."
          image={{
            src: "/assets/weight-loss/hero.webp",
            alt: "Confident woman outdoors after a medical weight loss program",
          }}
          primaryCta={{
            label: "Book weight loss appointment",
            href: BOOKING_URLS.weightLoss,
          }}
          secondaryCta={{
            label: "See pricing",
            href: "/services-and-pricing",
          }}
          badge={{ label: "Clinically guided", value: "Monthly titration" }}
        />

        <ModernSymptomGrid
          eyebrow="If this sounds familiar"
          headline={
            <>
              You&rsquo;ve tried the plans.
              <br />
              <span className="text-[#6B9680]">Your biology needs more.</span>
            </>
          }
          description="Weight resistance is rarely a willpower problem. It&rsquo;s hormones, metabolism, and how your body regulates appetite. These are the signals we hear every week."
          symptoms={struggles}
          variant="tint"
        />

        <ModernTreatmentDetail
          eyebrow="Semaglutide"
          headline={
            <>
              The GLP-1 that changed
              <br />
              the conversation.
            </>
          }
          description="Semaglutide (the active ingredient in Ozempic and Wegovy) is a weekly GLP-1 receptor agonist that blunts appetite, slows gastric emptying, and improves blood sugar. In the STEP 1 trial (NEJM 2021), patients on Semaglutide 2.4mg lost an average of 14.9% of body weight over 68 weeks."
          benefits={semaglutideBenefits}
          candidateTitle="Who is a good candidate for Semaglutide?"
          candidateIntro="Semaglutide is a first-line GLP-1 option for patients looking for meaningful weight loss with a strong safety record. You may be a good candidate if you:"
          candidate={semaglutideCandidate}
          bookHref={BOOKING_URLS.weightLoss}
          bookLabel="Book Semaglutide consultation"
          image={{
            src: "/assets/weight-loss/semaglutide.webp",
            alt: "Woman cooking a fresh meal in her kitchen",
          }}
          imageSide="right"
        />

        <ModernTreatmentDetail
          eyebrow="Tirzepatide"
          headline={
            <>
              Dual-action.
              <br />
              Stronger response.
            </>
          }
          description="Tirzepatide (Mounjaro, Zepbound) activates both GLP-1 and GIP receptors. The dual mechanism produces stronger appetite and glucose effects than GLP-1 alone. In the SURMOUNT-1 trial (NEJM 2022), patients on Tirzepatide 15mg lost an average of 20.9% of body weight over 72 weeks."
          benefits={tirzepatideBenefits}
          candidateTitle="Who is a good candidate for Tirzepatide?"
          candidateIntro="Tirzepatide is a strong option for patients who need a bigger metabolic effect, plateaued on Semaglutide, or have comorbidities like type 2 diabetes. You may be a good candidate if you:"
          candidate={tirzepatideCandidate}
          bookHref={BOOKING_URLS.weightLoss}
          bookLabel="Book Tirzepatide consultation"
          image={{
            src: "/assets/weight-loss/tirzepatide.webp",
            alt: "Fit man in his 40s after an outdoor run",
          }}
          imageSide="left"
        />

        <ModernFAQ
          eyebrow="Weight loss questions"
          headline={
            <>
              Everything patients ask
              <br />
              <span className="text-[#6B9680]">before starting.</span>
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
