import Image from "next/image";
import BookingButton, { BOOKING_URL } from "./BookingButton";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaText?: string;
  variant?: "split" | "centered";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  ctaHref = BOOKING_URL,
  ctaText = "Book Appointment",
  variant = "centered",
}: Props) {
  if (variant === "split" && image) {
    return (
      <section className="bg-gradient-to-b from-base-200 to-base-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {eyebrow && (
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-base-content/80 leading-relaxed mb-8">
                {subtitle}
              </p>
            )}
            <BookingButton href={ctaHref} size="lg">
              {ctaText}
            </BookingButton>
          </div>
          <div>
            <Image
              src={image}
              alt={imageAlt}
              width={800}
              height={600}
              className="rounded-[5px] w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-base-200 to-base-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
        <BookingButton href={ctaHref} size="lg">
          {ctaText}
        </BookingButton>
      </div>
    </section>
  );
}
