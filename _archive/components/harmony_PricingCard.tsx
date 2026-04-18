import BookingButton from "./BookingButton";

export type PricingTier = {
  step?: string;
  name: string;
  price: string;
  billing?: string;
  priceNote?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  featured?: boolean;
};

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`bg-base-100 border rounded-[5px] p-6 lg:p-8 flex flex-col h-full ${
        tier.featured
          ? "border-primary shadow-lg ring-1 ring-primary"
          : "border-base-300"
      }`}
    >
      {tier.step && (
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
          {tier.step}
        </p>
      )}
      <h3 className="text-xl font-extrabold mb-1">{tier.name}</h3>
      {tier.billing && (
        <p className="text-sm text-base-content/60 mb-4">{tier.billing}</p>
      )}
      <div className="my-4">
        <span className="text-4xl font-extrabold text-primary">{tier.price}</span>
      </div>
      {tier.priceNote && (
        <p className="text-xs text-base-content/60 italic mb-4">{tier.priceNote}</p>
      )}
      {tier.features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-1">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-accent mt-0.5 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      {tier.ctaText && (
        <BookingButton
          href={tier.ctaHref}
          variant={tier.featured ? "primary" : "outline"}
          className="w-full"
        >
          {tier.ctaText}
        </BookingButton>
      )}
    </div>
  );
}
