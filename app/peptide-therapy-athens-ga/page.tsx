import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import ModernPageHero from "@/components/modern/ModernPageHero";
import ModernTreatmentDetail from "@/components/modern/ModernTreatmentDetail";
import ModernCardGrid from "@/components/modern/ModernCardGrid";
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
  title: "Peptide Therapy Athens GA | Harmony Health",
  description:
    "Personalized peptide therapy in Athens, GA. Sermorelin, BPC-157, TB-500, PT-141, GHK-Cu and more. Provider-guided protocols for recovery, longevity, libido, and performance.",
  canonicalUrlRelative: "/peptide-therapy-athens-ga",
});

const sermorelinBenefits = [
  "Deeper sleep and next-day recovery",
  "Leaner body composition with easier fat metabolism",
  "Improved mood, focus, and daytime energy",
  "Skin and tissue repair at a cellular level",
  "Works with your own GH axis (not exogenous HGH)",
];

const sermorelinCandidate = [
  "Feel early signs of aging: poor sleep, slow recovery, loss of lean mass",
  "Have low IGF-1 or suboptimal growth hormone markers on labs",
  "Train regularly and want better recovery without exogenous HGH",
  "Prefer a protocol that stimulates your body's own production",
  "Are willing to inject weekly and follow a simple titration",
];

const peptides = [
  {
    iconKey: "leaf" as const,
    name: "BPC-157",
    tagline: "Gut, joints, and tissue repair",
    description:
      "Body Protection Compound, a peptide derived from a protein in gastric juice. Used for gut lining repair, tendon and ligament healing, and inflammation support after injury or surgery.",
    benefits: [
      "Repairs GI tract, ulcers, and gut lining",
      "Speeds tendon and ligament healing",
      "Reduces inflammation and post-op pain",
      "Supports leaky gut and IBS symptoms",
    ],
    idealFor:
      "Athletes, post-op patients, and anyone dealing with chronic gut issues or soft-tissue injury.",
  },
  {
    iconKey: "lightning" as const,
    name: "TB-500",
    tagline: "Mobility, flexibility, recovery",
    description:
      "A synthetic version of thymosin beta-4 that promotes cell migration and new blood vessel growth. Commonly paired with BPC-157 for regenerative protocols and chronic inflammation.",
    benefits: [
      "Improves range of motion and joint flexibility",
      "Reduces scar tissue and inflammation",
      "Speeds muscle, ligament, and tendon repair",
      "Supports post-surgical recovery",
    ],
    idealFor:
      "Patients with sports injuries, chronic joint pain, or stalled recovery from prior injury.",
  },
  {
    iconKey: "heart" as const,
    name: "PT-141",
    tagline: "Libido and sexual wellness",
    description:
      "A melanocortin receptor agonist that works through the nervous system to increase sexual arousal. Non-hormonal and works for both men and women.",
    benefits: [
      "Increases sexual desire and arousal",
      "Works for men and women",
      "Non-hormonal, fast-acting",
      "Useful when SSRIs or ED medications haven't worked",
    ],
    idealFor:
      "Patients with low libido, sexual arousal difficulties, or seeking a non-hormonal alternative to conventional ED treatments.",
  },
  {
    iconKey: "sparkle" as const,
    name: "GHK-Cu",
    tagline: "Skin, hair, and regeneration",
    description:
      "A copper-binding peptide that stimulates collagen production, accelerates wound healing, and may help reactivate dormant hair follicles. Used for aesthetics and post-procedure recovery.",
    benefits: [
      "Improves skin texture, firmness, and tone",
      "Boosts collagen and elastin production",
      "Accelerates wound and scar healing",
      "Stimulates dormant hair follicles",
    ],
    idealFor:
      "Patients interested in natural skin rejuvenation, post-microneedling or PRP healing, or non-medication hair regrowth.",
  },
];

const faqs = [
  {
    question: "What are peptides, and how do they work?",
    answer:
      "Peptides are short chains of amino acids that act as signaling molecules. Your body already makes thousands of them to regulate hormone release, tissue repair, immune response, and inflammation.\n\nTherapeutic peptides are synthesized versions of these signals used to target specific outcomes: growth hormone release, tissue repair, sexual function, or skin regeneration. They work by binding to specific receptors, not by replacing a hormone wholesale.",
  },
  {
    question: "Is peptide therapy safe?",
    answer:
      "When supervised by a provider and sourced from FDA-registered compounding pharmacies, peptide therapy has a strong safety profile.\n\n• Supervised by a licensed provider at every step\n• Dosing is titrated to your response and labs\n• Sourced from FDA-registered compounding facilities\n• Ongoing monitoring for safety and effectiveness\n\nPeptides are not FDA-approved for most off-label wellness uses. We only prescribe peptides with established clinical safety data and only after reviewing your history.",
  },
  {
    question: "How are peptides administered?",
    answer:
      "Most therapeutic peptides used here are subcutaneous injections you do at home.\n\n• Small-gauge injection into abdomen, thigh, or upper arm\n• One-on-one injection training at your first visit\n• Supplies included with most protocols\n• A few peptides are available topical or intranasal",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Depends on the peptide and what you're targeting:\n\n• 2-4 weeks: energy, sleep, libido, mood\n• 6-12 weeks: body composition, skin, recovery\n• Ongoing: anti-aging and longevity benefits\n\nResponse varies by dose, consistency, and individual biology.",
  },
  {
    question: "Can I combine peptides with HRT or weight loss?",
    answer:
      "Yes. Peptide protocols stack well with other Harmony Health services.\n\n• HRT plus Sermorelin: growth hormone axis support alongside testosterone or estrogen optimization\n• Weight loss plus BPC-157: GI and tissue repair during GLP-1 therapy\n• Aesthetics plus GHK-Cu: enhanced healing after microneedling, PRP, or Morpheus8\n\nWe coordinate stacking carefully so peptides complement, not conflict, with your other therapies.",
  },
  {
    question: "Do I need lab tests before starting?",
    answer:
      "Depends on the peptide:\n\n• Sermorelin, CJC/Ipamorelin: IGF-1 and hormone panels recommended\n• BPC-157, TB-500, GHK-Cu, PT-141: usually no labs required\n\nWe personalize the workup based on your history and goals.",
  },
  {
    question: "Are peptides covered by insurance?",
    answer:
      "Most peptide therapies are considered elective wellness and are not covered by insurance. We offer transparent cash pricing and membership options for patients on ongoing protocols.",
  },
  {
    question: "How do I start peptide therapy?",
    answer:
      "Book a consult online or by phone. At your first visit we review goals, pull labs if needed, and build a protocol. Your first shipment plus injection training follow within a week or two. Ongoing messaging, dose adjustments, and follow-ups are included.",
  },
];

export default function PeptideTherapyPage() {
  return (
    <>
      {renderServiceSchema({
        name: "Peptide Therapy",
        description:
          "Provider-guided peptide therapy in Athens, GA. Sermorelin, BPC-157, TB-500, PT-141, GHK-Cu and more.",
        path: "/peptide-therapy-athens-ga",
      })}
      {renderBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services-and-pricing" },
        { name: "Peptide Therapy", path: "/peptide-therapy-athens-ga" },
      ])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>
        <ModernPageHero
          eyebrow="Peptide Therapy"
          headline={
            <>
              Small molecules.
              <br />
              <span className="italic font-light text-[#517563]">
                Big signals.
              </span>
            </>
          }
          description="Targeted peptide protocols for recovery, longevity, libido, skin, and performance. Sermorelin, BPC-157, TB-500, PT-141, GHK-Cu and more, dosed to your biology and supervised every step."
          image={{
            src: "/assets/peptide/hero.webp",
            alt: "Active couple on a forested trail",
          }}
          primaryCta={{
            label: "Book peptide consultation",
            href: BOOKING_URLS.peptide,
          }}
          secondaryCta={{
            label: "See pricing",
            href: "/services-and-pricing",
          }}
          badge={{ label: "Provider-guided", value: "Personalized dosing" }}
        />

        <ModernTreatmentDetail
          eyebrow="Sermorelin"
          headline={
            <>
              Stimulate your body&rsquo;s
              <br />
              own growth hormone.
            </>
          }
          description="Sermorelin is a growth hormone-releasing hormone (GHRH) analog. Instead of replacing growth hormone directly, it prompts your pituitary to make and release more of its own. That means the benefits of optimized GH (sleep, recovery, body composition, skin) through your own feedback loops, not exogenous HGH."
          benefits={sermorelinBenefits}
          candidateTitle="Who is a good candidate for Sermorelin?"
          candidateIntro="Sermorelin works best when you have both the biological markers and the lifestyle to support it. You may be a good candidate if you:"
          candidate={sermorelinCandidate}
          bookHref={BOOKING_URLS.peptide}
          bookLabel="Book Sermorelin consultation"
          image={{
            src: "/assets/peptide/sermorelin.webp",
            alt: "Woman waking refreshed in morning light",
          }}
          imageSide="right"
        />

        <ModernCardGrid
          eyebrow="The rest of the toolkit"
          headline={
            <>
              Four more peptides
              <br />
              <span className="text-[#6B9680]">we prescribe often.</span>
            </>
          }
          description="Each does one thing well. We match the peptide to your goals and stack them thoughtfully."
          items={peptides}
          label="Peptide"
        />

        <ModernFAQ
          eyebrow="Peptide questions"
          headline={
            <>
              Everything patients ask
              <br />
              <span className="text-[#6B9680]">before starting peptides.</span>
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
