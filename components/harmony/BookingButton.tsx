import Link from "next/link";

export const BOOKING_URL =
  "https://www.optimantra.com/optimus/patient/patientaccess/modalities?pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09";

export const BOOKING_URLS = {
  default: BOOKING_URL,
  mensHrt:
    "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?mid=5547&pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09",
  womensHrt:
    "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?mid=5607&pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09",
  weightLoss:
    "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?mid=5447&pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09",
  peptide:
    "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?mid=7938&pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09",
  iv:
    "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?mid=9408&pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09",
  kate:
    "https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Z28vSjRvNDV1NEhYTUpLSXowK3N6UT09",
  aesthetic:
    "https://www.optimantra.com/optimus/patient/patientaccess/modalities?pid=K3BWWGxXYkE0NUhQVWdrRkNIYjdVUT09&lid=RklWQUxyUktoZEgxdlhnTTdXSzFFdz09",
};

type Props = {
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "light";
  className?: string;
  children?: React.ReactNode;
};

/**
 * Harmony Health button — matches live site values:
 * bg #6B9680 sage, white text, 5px radius, 12-13px weight 800 uppercase letter-spacing 1.3px
 */
export default function BookingButton({
  href = BOOKING_URL,
  size = "md",
  variant = "primary",
  className = "",
  children = "Book Appointment",
}: Props) {
  const sizeClass =
    size === "sm"
      ? "text-[11px] px-6 py-[10px]"
      : size === "lg"
      ? "text-[13px] px-12 py-[18px]"
      : "text-[12px] px-10 py-[13px]";

  const variantClass =
    variant === "outline"
      ? "bg-transparent text-[#6B9680] hover:bg-[#6B9680]/10 border-2 border-[#6B9680]"
      : variant === "light"
      ? "bg-white text-[#30373E] hover:bg-base-200"
      : "bg-[#6B9680] text-white hover:bg-[#5a826e]";

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`hh-button inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-[1.3px] rounded-[5px] transition-colors ${variantClass} ${sizeClass} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
