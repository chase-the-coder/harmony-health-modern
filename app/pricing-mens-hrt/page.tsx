import Header from "@/components/harmony/Header";
import Footer from "@/components/harmony/Footer";
import BookingButton, { BOOKING_URLS } from "@/components/harmony/BookingButton";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Men's Hormone Replacement Pricing | Harmony Health Athens GA",
  description:
    "Transparent cash-pay pricing for Men's Hormone Replacement Therapy at Harmony Health. Establish Care, Hormone Membership, Hormone Pellets, and a la carte lab work. HSA/FSA accepted.",
  canonicalUrlRelative: "/pricing-mens-hrt",
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

function DownArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10 text-[#6B9680] mx-auto"
    >
      <path d="M12 2a1 1 0 011 1v14.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L11 17.586V3a1 1 0 011-1z" />
    </svg>
  );
}

const appt1Bullets = [
  "Health History",
  "Current Nutrition and Lifestyle",
  "Review Symptoms and Concerns",
  "Custom Lab Order",
];

const appt2Bullets = [
  "Detailed Lab Interpretation",
  "Individualized Treatment Plan of Care",
];

const membership = [
  "Ongoing management",
  "Medication adjustments",
  "Check-in visits (1/quarter)",
  "Lab order | interpretation",
  "Messaging access",
  "Coordination with pharmacy",
  "Discounted supplements",
];

const pellets = [
  "Pellets",
  "Insertion",
  "Follow-up",
  "Lasts 5 – 6 months",
];

type BoxProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  price: string;
  priceLabel?: string;
  note?: string;
  bookHref?: string;
};

function PricingBox({
  eyebrow,
  title,
  subtitle,
  children,
  price,
  priceLabel,
  note,
  bookHref,
}: BoxProps) {
  return (
    <div className="flex flex-col border border-[#6B9680] rounded-[5px] bg-white overflow-hidden">
      {eyebrow && (
        <div className="bg-white px-6 py-3 text-center border-b border-base-300">
          <p className="text-[20px] lg:text-[23px] font-semibold text-[#000]">{eyebrow}</p>
        </div>
      )}
      <div className="bg-[#6B9680] px-6 py-5 text-center">
        <h3 className="text-[36px] lg:text-[48px] font-semibold !text-white leading-none uppercase">
          {title}
        </h3>
        {subtitle && <p className="text-white/90 text-[13px] mt-2">{subtitle}</p>}
      </div>
      {children && <div className="px-8 py-6 flex-grow">{children}</div>}
      <div className="px-6 py-5 text-center border-t border-base-300">
        <p className="text-[40px] lg:text-[48px] font-extrabold text-[#30373E] leading-none">
          {price}
          {priceLabel && (
            <span className="text-[18px] font-semibold ml-1">{priceLabel}</span>
          )}
        </p>
      </div>
      {note && (
        <p className="px-6 py-2 text-center text-[12px] italic text-[#7a7a7a]">
          ({note})
        </p>
      )}
      {bookHref && (
        <div className="px-6 pb-6 pt-2 text-center">
          <BookingButton href={bookHref}>Book Appointment</BookingButton>
        </div>
      )}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <Check />
          <span className="text-[14px] leading-[22px] text-[#535353]">{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MensHrtPricingPage() {
  return (
    <>
      <Header />

      {/* Anchor nav */}
      <section className="bg-base-200 py-6 border-b border-base-300">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          <a
            href="/pricing-mens-hrt"
            className="inline-flex items-center text-[12px] font-extrabold uppercase tracking-[1.3px] px-8 py-3 bg-[#6B9680] !text-white rounded-[5px] hover:bg-[#587a68] transition"
          >
            Men&apos;s HRT
          </a>
          <a
            href="/pricing-womens-hrt"
            className="inline-flex items-center text-[12px] font-extrabold uppercase tracking-[1.3px] px-8 py-3 bg-[#6B9680] !text-white rounded-[5px] hover:bg-[#587a68] transition"
          >
            Women&apos;s HRT
          </a>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="hh-eyebrow mb-3">Harmony Health</p>
            <h2 className="hh-h2 mb-5">Men&rsquo;s Hormone Replacement Pricing</h2>
            <p className="text-[15px] leading-[26px] text-[#535353] max-w-[780px] mx-auto">
              <strong className="text-[#30373E]">
                Harmony Health is a cash pay fee-for-service clinic.
              </strong>
              <br />
              We do not participate with insurance plans so we can spend the time
              each patient actually needs. HSA/FSA cards accepted.
            </p>
          </div>

          {/* Step 1 — Establish Care */}
          <div className="max-w-[520px] mx-auto mb-8">
            <PricingBox
              eyebrow="Step 1"
              title="Establish Care"
              subtitle="2-Appointment package required"
              price="$300"
              note="Package cost does not include cost of labs"
              bookHref={BOOKING_URLS.mensHrt}
            >
              <p className="text-[14px] font-bold text-[#30373E] mb-3">Appointment 1</p>
              <p className="text-[14px] font-semibold text-[#30373E] mb-2">Comprehensive Health Consult:</p>
              <BulletList items={appt1Bullets} />
              <p className="text-[14px] font-bold text-[#30373E] mt-5 mb-3">Appointment 2</p>
              <BulletList items={appt2Bullets} />
            </PricingBox>
          </div>

          {/* Down arrows */}
          <div className="grid grid-cols-2 max-w-[880px] mx-auto mb-8 gap-6">
            <DownArrow />
            <DownArrow />
          </div>

          {/* Options row */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <PricingBox
              eyebrow="Option 1"
              title="Hormone Membership"
              price="$99"
              priceLabel="/ Month"
              bookHref={BOOKING_URLS.mensHrt}
            >
              <BulletList items={membership} />
            </PricingBox>
            <div className="flex flex-col gap-6">
              <PricingBox
                eyebrow="Option 2"
                title="Hormone Pellets"
                price="$700"
                priceLabel="/ Procedure"
              >
                <BulletList items={pellets} />
              </PricingBox>
              <PricingBox
                title="Prescription"
                price="$125"
                priceLabel="/ 90 Days"
                bookHref={BOOKING_URLS.mensHrt}
              >
                <BulletList
                  items={[
                    "Additional hormone prescriptions (such as thyroid or progesterone)",
                  ]}
                />
              </PricingBox>
            </div>
          </div>

          {/* Pay-by-the-visit */}
          <div className="max-w-[640px] mx-auto">
            <div className="border border-[#6B9680] rounded-[5px] bg-white overflow-hidden">
              <div className="bg-[#6B9680] px-6 py-5 text-center">
                <h3 className="text-[20px] lg:text-[22px] font-bold !text-white tracking-[1px] uppercase">
                  Pay-By-The-Visit (A La Carte)
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-base-300">
                <div className="p-6 text-center">
                  <p className="text-[16px] font-bold text-[#30373E] mb-2">Lab Work</p>
                  <p className="text-[36px] font-extrabold text-[#30373E]">$50 – $200</p>
                </div>
                <div className="p-6 text-center">
                  <p className="text-[16px] font-bold text-[#30373E] mb-2">Follow-up Visit</p>
                  <p className="text-[36px] font-extrabold text-[#30373E]">$125</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 text-center">
                <BookingButton href={BOOKING_URLS.mensHrt}>Book Appointment</BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
