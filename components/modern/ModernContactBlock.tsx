"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, EnvelopeSimple } from "@phosphor-icons/react";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

export default function ModernContactBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F7F9F8] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14"
        >
          <ContactInfo />
          <BookingCard />
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
        Reach out
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-6">
        How to find us.
      </h2>
      <p className="text-lg text-[#535353] leading-relaxed mb-10 max-w-[50ch]">
        Call or email and we&rsquo;ll get back to you within a business day.
        For appointments, the fastest path is online booking.
      </p>

      <ul className="space-y-5">
        <InfoRow
          icon={<MapPin size={20} weight="regular" />}
          label="Address"
          value="2425 W. Broad Street, Suite 2, Athens, GA 30606"
          href="https://www.google.com/maps/dir/?api=1&destination=2425+W+Broad+Street+Suite+2+Athens+GA+30606"
        />
        <InfoRow
          icon={<Phone size={20} weight="regular" />}
          label="Office"
          value="(706) 614-6818"
          href="tel:7066146818"
        />
        <InfoRow
          icon={<Clock size={20} weight="regular" />}
          label="Office Hours"
          value={
            <>
              Tuesday &middot; 9am–3pm
              <br />
              Wednesday &middot; 9am–3pm
              <br />
              Thursday &middot; 9am–3pm
            </>
          }
        />
        <InfoRow
          icon={<EnvelopeSimple size={20} weight="regular" />}
          label="Email"
          value="info@yourharmonyhealth.com"
          href="mailto:info@yourharmonyhealth.com"
        />
      </ul>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const body = (
    <div className="flex gap-4 items-start rounded-2xl bg-white ring-1 ring-[#E5ECE8] px-5 py-4 transition-colors hover:bg-[#FAF8F4]">
      <div className="w-10 h-10 rounded-xl bg-[#6B9680]/10 text-[#517563] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#517563] mb-1">
          {label}
        </div>
        <div className="text-[15px] text-[#1F2A25] leading-relaxed">
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {body}
        </a>
      </li>
    );
  }
  return <li>{body}</li>;
}

function BookingCard() {
  return (
    <div className="rounded-[2rem] bg-white ring-1 ring-[#E5ECE8] p-8 md:p-10 flex flex-col justify-center">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1F2A25] mb-2">
        Ready to start?
      </h3>
      <p className="text-base text-[#535353] leading-relaxed mb-8">
        Book a consultation online and pick a time that works for you.
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] active:scale-[0.99] transition-colors duration-300"
      >
        Book a consultation
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
          <path
            d="M1 9L9 1M9 1H2M9 1V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
