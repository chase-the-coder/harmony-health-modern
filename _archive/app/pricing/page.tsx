import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import BookingButton from "@/components/harmony/BookingButton";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Pricing | Harmony Health Athens GA",
  description:
    "New Patient Two-Appointment Packages for Women's and Men's Hormone Replacement Therapy at Harmony Health. Cash-pay fee-for-service, HSA/FSA accepted.",
  canonicalUrlRelative: "/pricing",
});

const firstVisit = [
  "Review your full health history.",
  "Evaluate your current nutrition and lifestyle.",
  "Address any symptoms or concerns.",
  "A personalized lab order tailored to your needs. You will have the option of coming into our office for labs or going to Lab Corp or Quest Diagnostics for a lab draw.",
];

const secondVisit = [
  "Review your lab results in detail.",
  "Discuss a customized care plan.",
  "Provide supplement recommendations.",
  "Discuss medications or hormone replacement therapy and provide prescriptions, if necessary.",
];

const WOMENS_HRT_INITIAL =
  "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?mid=5607&pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09";
const MENS_HRT_INITIAL =
  "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?mid=5547&pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09";

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

type PricingBlockProps = {
  id: string;
  title: string;
  packageLabel: string;
  price: string;
  bookHref: string;
  bookLabel: string;
};

function PricingBlock({
  id,
  title,
  packageLabel,
  price,
  bookHref,
  bookLabel,
}: PricingBlockProps) {
  return (
    <section id={id} className="bg-white py-16 lg:py-20 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="hh-eyebrow mb-3">Harmony Health</p>
          <h2 className="hh-h2 mb-5">{title}</h2>
          <p className="text-[15px] leading-[26px] text-[#535353] max-w-[780px] mx-auto">
            <strong className="text-[#30373E]">
              Harmony Health is a cash pay fee-for-service clinic.
            </strong>
            <br />
            We do not participate with insurance plans so we can spend the time
            each patient actually needs. HSA/FSA cards accepted.
          </p>
        </div>

        {/* Green header card */}
        <div className="bg-[#6B9680] rounded-t-[5px] px-8 py-8 text-center">
          <h3 className="text-[24px] lg:text-[28px] font-semibold !text-white mb-4">
            {packageLabel}
          </h3>
          <p className="text-white/90 text-[15px] mb-5">
            Establish care with our comprehensive two-appointment package (available in-person
            or virtually)
          </p>
          <p className="text-[40px] lg:text-[46px] font-semibold !text-white leading-none">
            {price}
          </p>
        </div>

        {/* White bullet card */}
        <div className="border border-t-0 border-base-300 rounded-b-[5px] px-8 lg:px-12 py-10 bg-white">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[16px] font-bold text-[#30373E] mb-4">
                First Visit — 45-minute comprehensive consultation
              </h4>
              <ul className="space-y-3">
                {firstVisit.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check />
                    <span className="text-[14px] leading-[22px] text-[#535353]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-[#30373E] mb-4">
                Second Visit — 30-minute lab review follow-up
              </h4>
              <ul className="space-y-3">
                {secondVisit.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check />
                    <span className="text-[14px] leading-[22px] text-[#535353]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-[13px] italic text-[#7a7a7a] mt-8">
            *The cost of these visits does not include the cost of labs/medications/supplements.
          </p>
          <div className="text-center mt-6">
            <BookingButton href={bookHref}>{bookLabel}</BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PricingIndexPage() {
  return (
    <>
      <Header />

      {/* Anchor nav */}
      <section className="bg-base-200 py-6 border-b border-base-300">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          <a
            href="#women"
            className="inline-flex items-center text-[12px] font-extrabold uppercase tracking-[1.3px] px-8 py-3 bg-[#6B9680] !text-white rounded-[5px] hover:bg-[#587a68] transition"
          >
            Women&apos;s HRT
          </a>
          <a
            href="#men"
            className="inline-flex items-center text-[12px] font-extrabold uppercase tracking-[1.3px] px-8 py-3 bg-[#6B9680] !text-white rounded-[5px] hover:bg-[#587a68] transition"
          >
            Men&apos;s HRT
          </a>
        </div>
      </section>

      <PricingBlock
        id="women"
        title="Women's Hormone Replacement Pricing"
        packageLabel="New Patient Two-Appointment Package (Women's HRT)"
        price="$400"
        bookHref={WOMENS_HRT_INITIAL}
        bookLabel="Book Your Initial Consultation — Women's HRT"
      />

      <div className="max-w-[1100px] mx-auto border-t border-base-300" />

      <PricingBlock
        id="men"
        title="Men's Hormone Replacement Pricing"
        packageLabel="New Patient Two-Appointment Package (Men's HRT)"
        price="$300"
        bookHref={MENS_HRT_INITIAL}
        bookLabel="Book Your Initial Consultation — Men's HRT"
      />

      <Footer />
    </>
  );
}
