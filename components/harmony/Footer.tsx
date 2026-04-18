import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
  FacebookLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { BOOKING_URL } from "./BookingButton";

const OPTIMANTRA_PORTAL = "https://www.optimantra.com/optimus/om/patient/login";
const INSTAGRAM_URL = "https://www.instagram.com/your.harmony.health/";
const FACEBOOK_URL =
  "https://www.facebook.com/people/Harmony-Health-Integrative-Wellness/61571449373842/";

const serviceLinks = [
  { label: "Hormone Replacement Therapy", href: "/hormone-replacement-therapy-athens-ga" },
  { label: "Medical Weight Loss", href: "/medical-weight-loss-athens-ga" },
  { label: "Peptide Therapy", href: "/peptide-therapy-athens-ga" },
  { label: "IV Hydration Therapy", href: "/iv-hydration-therapy-athens-ga" },
  { label: "Aesthetic Treatments", href: "/aesthetic-treatments-athens-ga" },
];

const aboutLinks = [
  { label: "About Megan", href: "/about" },
  { label: "Services & Pricing", href: "/services-and-pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1F2A25] text-white/85">
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6B9680]/15 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#80BE9F]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-14">
          <div>
            <Link href="/" aria-label="Harmony Health home" className="inline-block">
              <Image
                src="/legacy-images/logo.png"
                alt="Harmony Health"
                width={707}
                height={400}
                className="w-[200px] md:w-[220px] h-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-white/65 mt-6 max-w-[40ch]">
              Functional, lab-guided care for hormones, metabolism, recovery,
              and how you feel in your own body. Based in Athens, Georgia.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <SocialIcon href={INSTAGRAM_URL} label="Instagram">
                <InstagramLogo size={16} weight="regular" />
              </SocialIcon>
              <SocialIcon href={FACEBOOK_URL} label="Facebook">
                <FacebookLogo size={16} weight="regular" />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight !text-white mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight !text-white mb-5">
              Harmony Health
            </h3>
            <ul className="space-y-3 mb-7">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={OPTIMANTRA_PORTAL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#9BD3B6] hover:text-white transition-colors"
            >
              Patient portal <ArrowUpRight size={12} weight="bold" />
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight !text-white mb-5">
              Visit us
            </h3>
            <ul className="space-y-4">
              <ContactRow icon={<MapPin size={16} weight="regular" />}>
                <span className="block font-medium text-white">
                  2425 W. Broad St, Suite 2
                </span>
                <span className="text-white/65">Athens, GA 30606</span>
              </ContactRow>
              <ContactRow icon={<Phone size={16} weight="regular" />}>
                <a
                  href="tel:7066146818"
                  className="font-medium text-white hover:text-[#9BD3B6] transition-colors"
                >
                  (706) 614-6818
                </a>
              </ContactRow>
              <ContactRow icon={<EnvelopeSimple size={16} weight="regular" />}>
                <a
                  href="mailto:info@yourharmonyhealth.com"
                  className="font-medium text-white hover:text-[#9BD3B6] transition-colors break-all"
                >
                  info@yourharmonyhealth.com
                </a>
              </ContactRow>
              <ContactRow icon={<Clock size={16} weight="regular" />}>
                <span className="block font-medium text-white">
                  Tue &middot; Wed &middot; Thu
                </span>
                <span className="text-white/65">9am &ndash; 3pm</span>
              </ContactRow>
            </ul>

            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#6B9680] hover:bg-[#80BE9F] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Book appointment
              <ArrowUpRight size={12} weight="bold" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[13px] text-white/55">
          <span>&copy; {new Date().getFullYear()} Harmony Health. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/tos" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:ring-[#6B9680]/40 transition-all"
    >
      {children}
    </a>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-[14px] leading-relaxed">
      <span className="w-8 h-8 rounded-xl bg-white/5 ring-1 ring-white/10 text-[#9BD3B6] flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span className="flex-1 min-w-0">{children}</span>
    </li>
  );
}
