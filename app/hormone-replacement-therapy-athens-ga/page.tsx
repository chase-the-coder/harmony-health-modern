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
  title: "Hormone Replacement Therapy Athens GA | Harmony Health",
  description:
    "At Harmony Health in Athens, GA, we provide personalized hormone replacement therapy for men and women to restore balance, boost energy, and optimize wellness naturally.",
  canonicalUrlRelative: "/hormone-replacement-therapy-athens-ga",
});

const mensSymptoms = [
  "Decreased muscle mass and strength",
  "Persistent fatigue and low energy",
  "Reduced libido or erectile dysfunction",
  "Mood changes, irritability, or low mood",
  "Difficulty concentrating, memory issues",
  "Hair thinning or loss",
];

const mensBenefits = [
  "Increased energy and vitality",
  "Enhanced muscle mass and strength",
  "Improved libido and sexual health",
  "Better mood and mental clarity",
  "Sharper cognitive function",
];

const mensCandidate = [
  "Experience persistent fatigue and low energy levels",
  "Notice a decrease in muscle mass or strength",
  "Struggle with low libido or sexual performance",
  "Have difficulty concentrating or experience brain fog",
  "Feel mood changes, such as irritability or depression",
  "See an increase in body fat, particularly around the abdomen",
  "Deal with hair thinning or loss",
];

const womensSymptoms = [
  "Irregular menstrual cycles",
  "Hot flashes and night sweats",
  "Mood swings or increased irritability",
  "Decreased libido or sexual discomfort",
  "Vaginal dryness and discomfort",
  "Weight gain around the abdomen",
];

const womensBenefits = [
  "Relief from menopausal symptoms",
  "Improved mood and mental clarity",
  "Enhanced sleep quality",
  "Increased energy levels",
  "Support for bone health",
];

const womensCandidate = [
  "Experience persistent fatigue and low energy levels",
  "Struggle with hot flashes, night sweats, or other menopausal symptoms",
  "Notice mood swings, irritability, or feelings of depression",
  "Have difficulty concentrating or experience brain fog",
  "Deal with reduced libido or sexual discomfort",
  "Experience weight gain, particularly around the abdomen",
  "Suffer from poor sleep or insomnia",
  "Notice thinning hair or changes in skin elasticity",
];

const faqs = [
  {
    question: "What is Hormone Replacement Therapy (HRT)?",
    answer:
      "HRT is a medical treatment designed to restore and balance hormone levels in the body. It is commonly used to alleviate symptoms of hormonal imbalances in men and women, such as those caused by menopause, perimenopause, or low testosterone.\n\nFor men, it often addresses fatigue, reduced muscle mass, and low libido. For women, it helps manage hot flashes, mood swings, and decreased bone density.",
  },
  {
    question: "Who is a good candidate for HRT?",
    answer:
      "Men and women experiencing hormonal imbalances that impact quality of life may be good candidates. Common symptoms include:\n\n• Persistent fatigue or low energy\n• Mood swings or depression\n• Difficulty concentrating, brain fog\n• Sexual health concerns, low libido or discomfort\n• For men: muscle loss, weight gain, hair thinning\n• For women: hot flashes, night sweats, irregular cycles\n\nA consultation and lab testing are required to confirm eligibility.",
  },
  {
    question: "What types of hormones are used in HRT?",
    answer:
      "HRT uses bio-identical or synthetic hormones to restore balance:\n\n• For men: testosterone, delivered via injections, gels, or patches\n• For women: estrogen, progesterone, and sometimes testosterone, tailored to individual needs\n\nOur providers ensure precise dosing and monitoring for optimal results.",
  },
  {
    question: "What are the benefits of HRT?",
    answer:
      "HRT offers physical, emotional, and mental health benefits.\n\nFor men: increased energy, enhanced muscle mass, improved libido, better mood and mental clarity.\n\nFor women: relief from menopausal symptoms, improved bone density, better sleep and mood, restored libido and comfort.",
  },
  {
    question: "How is HRT administered?",
    answer:
      "HRT is available in several forms:\n\n• Injections, delivered periodically under medical supervision\n• Patches or gels, applied to the skin for continuous absorption\n• Pellets, implanted under the skin for consistent hormone release\n• Oral medications, typically for estrogen or progesterone in women\n\nYour provider will recommend the best method based on your lifestyle and goals.",
  },
  {
    question: "What are the potential side effects of HRT?",
    answer:
      "HRT is generally safe. Some patients experience mild effects during the adjustment period:\n\n• For men: acne, fluid retention, or mood changes\n• For women: breast tenderness, bloating, or spotting\n\nSerious side effects are rare, and regular monitoring keeps treatment safe and effective.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary by individual:\n\n• Most patients notice improvements in energy, mood, and sleep within 4 to 6 weeks\n• Physical changes, such as muscle mass or weight loss, may take 3 to 6 months\n\nYour provider will track progress and adjust your plan as needed.",
  },
  {
    question: "How long will I need to stay on HRT?",
    answer:
      "Duration depends on your symptoms and health goals. Some patients use HRT for a few years to manage menopause or andropause. Others continue long-term under medical supervision to maintain benefits like bone density and mental clarity. Your provider will reassess regularly.",
  },
];

export default function HRTPage() {
  return (
    <>
      {renderServiceSchema({
        name: "Hormone Replacement Therapy",
        description:
          "Personalized, lab-guided hormone replacement therapy for men and women in Athens, GA.",
        path: "/hormone-replacement-therapy-athens-ga",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        {
          name: "Hormone Replacement Therapy",
          path: "/hormone-replacement-therapy-athens-ga",
        },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Hormone Replacement Therapy"
          headline={
            <>
              Restore balance.
              <br />
              <span className="italic font-light text-[#517563]">
                Reclaim vitality.
              </span>
            </>
          }
          description="Personalized, lab-guided hormone replacement therapy for men and women. We measure your biochemistry, then build a plan around it. Energy, strength, mood, libido, and mental clarity, titrated to your body."
          image={{
            src: "/assets/hrt/hero.webp",
            alt: "Couple in balance, healthy and vibrant",
          }}
          primaryCta={{ label: "Men's HRT pricing", href: "/pricing-mens-hrt" }}
          secondaryCta={{
            label: "Women's HRT pricing",
            href: "/pricing-womens-hrt",
          }}
          badge={{ label: "Lab-guided", value: "Baseline before any protocol" }}
        />

        <ModernSymptomGrid
          id="mens-hrt"
          eyebrow="Low testosterone in men"
          headline={
            <>
              The symptoms you might be
              <br />
              <span className="text-[#6B9680]">writing off as just aging.</span>
            </>
          }
          description="Any combination of these can point to clinically low testosterone. We run the panel to find out."
          symptoms={mensSymptoms}
          variant="tint"
        />

        <ModernTreatmentDetail
          eyebrow="Men's HRT"
          headline={
            <>
              Men&rsquo;s Hormone
              <br />
              Replacement Therapy.
            </>
          }
          description="Low testosterone impacts physical, emotional, and mental wellbeing. Our Men's HRT program starts with a complete panel and ends with a plan titrated to your numbers. Injections, pellets, or topicals, depending on what fits your life."
          benefits={mensBenefits}
          candidateTitle="Who is a good candidate for Men's HRT?"
          candidateIntro="Men's HRT is most effective for patients experiencing the downstream effects of low testosterone. You may be a good candidate if you:"
          candidate={mensCandidate}
          bookHref={BOOKING_URLS.mensHrt}
          bookLabel="Book Men's HRT appointment"
          image={{
            src: "/assets/hrt/men.webp",
            alt: "Fit active man in his 40s after a run",
          }}
          imageSide="right"
        />

        <ModernSymptomGrid
          id="womens-hrt"
          eyebrow="Perimenopause and menopause"
          headline={
            <>
              You&rsquo;re not imagining this.
              <br />
              <span className="text-[#6B9680]">Your hormones are shifting.</span>
            </>
          }
          description="These symptoms point to perimenopausal or menopausal hormonal shifts. Measurable. Addressable."
          symptoms={womensSymptoms}
          variant="tint"
        />

        <ModernTreatmentDetail
          eyebrow="Women's HRT"
          headline={
            <>
              Women&rsquo;s Hormone
              <br />
              Replacement Therapy.
            </>
          }
          description="Perimenopause and menopause bring symptoms that disrupt daily life. Our Women's HRT program restores hormonal balance through bio-identical estrogen, progesterone, and when appropriate testosterone, tailored to your stage and symptoms."
          benefits={womensBenefits}
          candidateTitle="Who is a good candidate for Women's HRT?"
          candidateIntro="Women's HRT is designed for patients experiencing hormonal imbalance, often from perimenopause, menopause, or other conditions. You may be a good candidate if you:"
          candidate={womensCandidate}
          bookHref={BOOKING_URLS.womensHrt}
          bookLabel="Book Women's HRT appointment"
          image={{
            src: "/assets/hrt/women.webp",
            alt: "Radiant woman in her late 40s outdoors",
          }}
          imageSide="left"
        />

        <ModernFAQ
          eyebrow="HRT questions"
          headline={
            <>
              Everything patients ask
              <br />
              <span className="text-[#6B9680]">before starting HRT.</span>
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
