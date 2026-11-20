"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

// Holiday promo — shows once per visitor, stops showing after Dec 31, 2026.
const STORAGE_KEY = "hh-holiday-popup-2026-dismissed";
const END_DATE = new Date(2027, 0, 1); // local midnight after 12/31/2026
const SHOW_DELAY_MS = 1200;
const HIDDEN_PATHS = ["/under-construction"];

const offers = [
  { amount: "$1,000 off", item: "a Morpheus8 series" },
  { amount: "$400 off", item: "1 Morpheus8 treatment or Lumecca Peak IPL series" },
  { amount: "15% off", item: "laser hair removal packages" },
];

export default function HolidayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (new Date() >= END_DATE) return;
    if (HIDDEN_PATHS.some((p) => pathname?.startsWith(p))) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // storage blocked: still show once for this page view
    }
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
    // only decide on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function close() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isExternal = BOOKING_URL.startsWith("http");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-[#1F2A25]/60 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="holiday-popup-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl bg-[#FAF8F4] shadow-[0_40px_80px_-20px_rgba(31,42,37,0.5)]"
          >
            <div className="relative overflow-hidden bg-[#1F2A25] px-7 pt-8 pb-9 md:px-10 md:pt-10">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 70% at 90% 0%, rgba(128,190,159,0.45) 0%, transparent 70%)",
                }}
              />
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-white/10 ring-1 ring-white/20 text-[#9BD3B6] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9BD3B6]" />
                Limited time
              </span>
              <h2
                id="holiday-popup-title"
                className="relative text-3xl md:text-4xl font-bold tracking-tighter !text-white leading-[1.05]"
              >
                Holiday pricing is here.
                <br />
                <span className="italic font-light !text-[#9BD3B6]">
                  Through 12/31.
                </span>
              </h2>
            </div>

            <div className="px-7 py-7 md:px-10 md:py-8">
              <ul className="space-y-3 mb-6">
                {offers.map((o) => (
                  <li
                    key={o.amount}
                    className="flex items-center gap-4 rounded-2xl bg-white ring-1 ring-[#E5ECE8] px-5 py-4 shadow-sm"
                  >
                    <span className="shrink-0 min-w-[96px] text-xl md:text-2xl font-bold tracking-tight text-[#517563]">
                      {o.amount}
                    </span>
                    <span className="text-[15px] text-[#30373E] leading-snug">
                      {o.item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-[#535353] mb-6">
                Deals last through 12/31.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={close}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#6B9680] text-white text-base font-medium hover:bg-[#517563] active:scale-[0.98] transition-colors duration-300"
                >
                  Book now
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
                <a
                  href="/services-and-pricing#inmode"
                  onClick={close}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full ring-1 ring-[#6B9680]/40 text-[#517563] text-base font-medium hover:bg-[#6B9680]/10 transition-colors"
                >
                  See pricing
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
