import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import BookingButton, { BOOKING_URLS } from "@/components/harmony/BookingButton";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Medical Weight Loss Pricing | Harmony Health Athens GA",
  description:
    "Transparent cash-pay pricing for medical weight loss at Harmony Health: New Patient Consultation, Semaglutide Monthly, Tirzepatide Monthly, and Monthly Weight Loss Management. HSA/FSA accepted.",
  canonicalUrlRelative: "/medical-weight-loss-pricing-kyre",
});

function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-[#6B9680] mt-1 shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

type Tier = {
  title: string;
  bullets: string[];
  price: string;
  priceLabel?: string;
  note?: string;
};

const tiers: Tier[] = [
  {
    title: "New Patient Consultation",
    bullets: [
      "In-Office or Virtual Visits",
      "Comprehensive Health Assessment",
      "Bloodwork Evaluation",
      "Expert Guidance",
      "Personalized Weight Loss Plan",
      "Focus on Safety and Sustainability",
    ],
    price: "$150",
    note: "Package cost does not include cost of labs",
  },
  {
    title: "Semaglutide Monthly",
    bullets: [
      "Includes medication and supplies",
      "Medication shipped to your home",
      "Nutrition | Lifestyle support and guidance",
      "Ongoing management",
      "Messaging access",
      "Focus on Safety and Sustainability",
    ],
    price: "$299",
    priceLabel: "/ month",
    note: "Package cost does not include cost of labs",
  },
  {
    title: "Monthly Weight Loss Management",
    bullets: [
      "Oral weight loss medications and nutrition counseling.",
      "Medications ordered to pharmacy of your choice (cost of medications not included).",
    ],
    price: "$99",
    priceLabel: "/ Month",
  },
  {
    title: "Tirzepatide Monthly",
    bullets: [
      "Includes medication and supplies",
      "Medication shipped to your home",
      "Nutrition | Lifestyle support and guidance",
      "Ongoing management",
      "Messaging access",
      "Focus on Safety and Sustainability",
    ],
    price: "$499",
    priceLabel: "/ month",
    note: "Package cost does not include cost of labs",
  },
];

function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div className="flex flex-col border border-base-300 rounded-[5px] bg-white overflow-hidden">
      <div className="bg-[#6B9680] px-6 py-6 text-center">
        <h3 className="text-[36px] lg:text-[48px] font-semibold !text-white leading-none">
          {tier.title}
        </h3>
      </div>
      <ul className="px-8 py-6 space-y-3 flex-grow">
        {tier.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <Check />
            <span className="text-[14px] leading-[22px] text-[#535353]">{b}</span>
          </li>
        ))}
      </ul>
      <div className="px-6 pt-2 pb-2 text-center">
        <p className="text-[40px] lg:text-[48px] font-extrabold text-[#30373E] leading-none">
          {tier.price}
          {tier.priceLabel && (
            <span className="text-[18px] font-semibold ml-1">{tier.priceLabel}</span>
          )}
        </p>
      </div>
      {tier.note && (
        <p className="px-6 py-2 text-center text-[12px] italic text-[#7a7a7a]">
          ({tier.note})
        </p>
      )}
      <div className="px-6 pb-6 pt-3 text-center">
        <BookingButton href={BOOKING_URLS.weightLoss}>Book Appointment</BookingButton>
      </div>
    </div>
  );
}

export default function MedicalWeightLossPricingPage() {
  return (
    <>
      <Header />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="hh-eyebrow mb-3">Harmony Health</p>
            <h2 className="hh-h2 mb-5">Medical Weight Loss Pricing</h2>
            <p className="text-[15px] leading-[26px] text-[#535353] max-w-[820px] mx-auto">
              <strong className="text-[#30373E]">
                Harmony Health is a cash pay fee-for-service clinic.
              </strong>
              <br />
              We do not participate with insurance plans so we can spend the time
              each patient actually needs. HSA/FSA cards accepted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tiers.map((t) => (
              <PricingCard key={t.title} tier={t} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
