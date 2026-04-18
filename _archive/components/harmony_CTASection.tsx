import BookingButton from "./BookingButton";

export default function CTASection({
  eyebrow = "Harmony Health Is Here To Help!",
  title = "Are You Ready To Feel Your Absolute Best?",
  ctaHref,
  ctaText = "Book Appointment",
}: {
  eyebrow?: string;
  title?: string;
  ctaHref?: string;
  ctaText?: string;
}) {
  return (
    <section className="py-20 lg:py-24 bg-primary text-primary-content">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[14px] font-semibold uppercase tracking-[3.4px] text-[#9FE2C0] mb-3">
          {eyebrow}
        </p>
        <h2 className="text-[32px] lg:text-[48px] font-bold leading-[1.2] tracking-[-0.7px] mb-10 text-white">
          {title}
        </h2>
        <BookingButton href={ctaHref} size="lg" variant="light">
          {ctaText}
        </BookingButton>
      </div>
    </section>
  );
}
