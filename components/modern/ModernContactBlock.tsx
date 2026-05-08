"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, EnvelopeSimple } from "@phosphor-icons/react";
import toast from "react-hot-toast";

const TREATMENTS = [
  "Medical Weight Loss",
  "Hormone Replacement Therapy",
  "Peptide Therapy",
  "Aesthetics",
  "IV Hydration Therapy",
  "Other",
];

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
          <ContactForm />
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
        Call, email, or drop the form on the right and we&rsquo;ll get back to
        you within a business day. For appointments, the fastest path is the
        booking link in the navigation.
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

function ContactForm() {
  const [count, setCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      treatment: fd.get("treatment"),
      comments: fd.get("comments") || "",
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submit failed");

      toast.success("Message sent! We'll be in touch within a business day.");
      formRef.current?.reset();
      setCount(0);
    } catch {
      toast.error("Something went wrong. Please call us or try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-[2rem] bg-white ring-1 ring-[#E5ECE8] p-8 md:p-10">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1F2A25] mb-2">
        Send us a message.
      </h3>
      <p className="text-base text-[#535353] leading-relaxed mb-8">
        We reply within a business day. For same-day scheduling, use the
        booking link in the nav.
      </p>

      <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <Label required>Name</Label>
          <div className="grid grid-cols-2 gap-3">
            <TextField name="firstName" placeholder="First" required />
            <TextField name="lastName" placeholder="Last" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Label required>Email</Label>
            <TextField type="email" name="email" placeholder="you@email.com" required />
          </div>
          <div>
            <Label required>Phone</Label>
            <TextField type="tel" name="phone" placeholder="(706) ..." required />
          </div>
        </div>
        <div>
          <Label required>Treatment you&rsquo;re interested in</Label>
          <select
            required
            name="treatment"
            defaultValue="Medical Weight Loss"
            className="w-full rounded-xl bg-[#F7F9F8] ring-1 ring-[#E5ECE8] px-4 py-3 text-[15px] text-[#1F2A25] outline-none focus:ring-[#6B9680] transition"
          >
            {TREATMENTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label>Comments</Label>
          <textarea
            name="comments"
            maxLength={600}
            rows={5}
            onChange={(e) => setCount(e.target.value.length)}
            placeholder="Anything we should know about your goals or symptoms?"
            className="w-full rounded-xl bg-[#F7F9F8] ring-1 ring-[#E5ECE8] px-4 py-3 text-[15px] text-[#1F2A25] outline-none focus:ring-[#6B9680] transition resize-y"
          />
          <p className="text-xs text-[#535353] mt-1 text-right">
            {count} / 600
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] active:scale-[0.99] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send message"}
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
            <path
              d="M1 9L9 1M9 1H2M9 1V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="text-xs text-[#535353] text-center">
          We never share your information.
        </p>
      </form>
    </div>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#517563] mb-2">
      {children} {required && <span className="text-[#B0413E] normal-case">*</span>}
    </label>
  );
}

function TextField({
  type = "text",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      {...props}
      className="w-full rounded-xl bg-[#F7F9F8] ring-1 ring-[#E5ECE8] px-4 py-3 text-[15px] text-[#1F2A25] outline-none focus:ring-[#6B9680] transition placeholder:text-[#535353]/60"
    />
  );
}
