"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { List, X, CaretDown, ArrowUpRight } from "@phosphor-icons/react";
import UtilityBar from "./UtilityBar";
import { BOOKING_URL } from "./BookingButton";

const OPTIMANTRA_PORTAL =
  "https://www.optimantra.com/optimus/om/patient/login";

type MegaCategory = {
  label: string;
  href: string;
  items: { label: string; href: string }[];
};

type NavItem = {
  label: string;
  href: string;
  matchPaths?: string[];
  megaMenu?: MegaCategory[];
  menuAlign?: "left" | "right";
};

const NAV: NavItem[] = [
  { label: "Home", href: "/", matchPaths: ["/"] },
  { label: "About", href: "/about", matchPaths: ["/about"] },
  {
    label: "Services",
    href: "/services-and-pricing",
    matchPaths: [
      "/womens-hormone-therapy",
      "/medical-weight-loss-athens-ga",
      "/aesthetic-treatments-athens-ga",
      "/inmode-athens-ga",
      "/iv-hydration-therapy-athens-ga",
      "/womens-pelvic-health",
      "/mens-sexual-health",
      "/mens-pelvic-health",
      "/morpheus8-athens-ga",
      "/laser-hair-removal-athens-ga",
      "/lumecca-ipl-athens-ga",
      "/dysport-athens-ga",
      "/customized-facial-athens-ga",
      "/signature-luxe-facial-athens-ga",
      "/express-facial-athens-ga",
      "/teen-facial-athens-ga",
      "/gentlemens-facial-athens-ga",
      "/back-facial-athens-ga",
      "/lash-lift-tint-athens-ga",
      "/facial-packages-athens-ga",
    ],
    megaMenu: [
      {
        label: "InMode",
        href: "/inmode-athens-ga",
        items: [
          { label: "Morpheus Face & Body", href: "/morpheus8-athens-ga" },
          { label: "Fusion Laser Hair Removal", href: "/laser-hair-removal-athens-ga" },
          { label: "Lumecca Peak IPL", href: "/lumecca-ipl-athens-ga" },
          { label: "EmpowerRF", href: "/womens-pelvic-health" },
          { label: "APEX for ED", href: "/mens-sexual-health" },
        ],
      },
      {
        label: "Medicine + Wellness",
        href: "/services-and-pricing",
        items: [
          { label: "Women's Restorative Wellness + HRT", href: "/womens-hormone-therapy" },
          { label: "Women's Annual Gynecological Exam", href: "/womens-hormone-therapy#womens-wellness-exam" },
          { label: "Men's Restorative Wellness + HRT", href: "/mens-sexual-health" },
          { label: "IV Hydration", href: "/iv-hydration-therapy-athens-ga" },
          { label: "Medical Weight Loss", href: "/medical-weight-loss-athens-ga" },
        ],
      },
      {
        label: "Facials + Lashes",
        href: "/aesthetic-treatments-athens-ga#facials",
        items: [
          { label: "Customized Facial", href: "/customized-facial-athens-ga" },
          { label: "Signature Luxe Facial", href: "/signature-luxe-facial-athens-ga" },
          { label: "Express Facial", href: "/express-facial-athens-ga" },
          { label: "Teen Facial", href: "/teen-facial-athens-ga" },
          { label: "Gentleman's Facial", href: "/gentlemens-facial-athens-ga" },
          { label: "Back Facial", href: "/back-facial-athens-ga" },
          { label: "Lash Lift & Tint", href: "/lash-lift-tint-athens-ga" },
        ],
      },
      {
        label: "Neurotoxin",
        href: "/dysport-athens-ga",
        items: [
          { label: "Dysport", href: "/dysport-athens-ga" },
        ],
      },
      {
        label: "Packages",
        href: "/facial-packages-athens-ga",
        items: [
          { label: "Facial Reset Package", href: "/facial-packages-athens-ga" },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/services-and-pricing",
    menuAlign: "right",
    matchPaths: [
      "/services-and-pricing",
      "/pricing",
      "/pricing-mens-hrt",
      "/pricing-womens-hrt",
    ],
    megaMenu: [
      {
        label: "Medicine + Wellness",
        href: "/services-and-pricing#medicine-wellness",
        items: [
          { label: "Women's Restorative Wellness + HRT", href: "/services-and-pricing#medicine-wellness" },
          { label: "Women's Annual Gynecological Exam", href: "/services-and-pricing#wellness" },
          { label: "Men's Restorative Wellness + HRT", href: "/services-and-pricing#medicine-wellness" },
          { label: "IV Hydration", href: "/services-and-pricing#iv-hydration" },
          { label: "Medical Weight Loss", href: "/services-and-pricing#weight-loss" },
        ],
      },
      {
        label: "InMode",
        href: "/services-and-pricing#inmode",
        items: [
          { label: "Morpheus Face & Body", href: "/services-and-pricing#inmode" },
          { label: "Fusion Laser Hair Removal", href: "/services-and-pricing#inmode" },
          { label: "Lumecca Peak IPL", href: "/services-and-pricing#inmode" },
          { label: "EmpowerRF", href: "/services-and-pricing#inmode" },
          { label: "APEX for ED", href: "/services-and-pricing#inmode" },
        ],
      },
      {
        label: "Facials + Lashes",
        href: "/services-and-pricing#facials-lashes",
        items: [
          { label: "Customized Facial", href: "/services-and-pricing#facials-lashes" },
          { label: "Signature Luxe Facial", href: "/services-and-pricing#facials-lashes" },
          { label: "Express Facial", href: "/services-and-pricing#facials-lashes" },
          { label: "Teen Facial", href: "/services-and-pricing#facials-lashes" },
          { label: "Gentleman's Facial", href: "/services-and-pricing#facials-lashes" },
          { label: "Back Facial", href: "/services-and-pricing#facials-lashes" },
          { label: "Lash Lift & Tint", href: "/services-and-pricing#facials-lashes" },
        ],
      },
      {
        label: "Neurotoxin",
        href: "/services-and-pricing#neurotoxin",
        items: [
          { label: "Dysport", href: "/services-and-pricing#neurotoxin" },
        ],
      },
      {
        label: "Packages",
        href: "/services-and-pricing#packages",
        items: [
          { label: "Facial Reset Package", href: "/services-and-pricing#packages" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact", matchPaths: ["/contact"] },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  const isActive = (item: NavItem) => {
    const paths = item.matchPaths || [item.href];
    return paths.some((p) => (p === "/" ? pathname === "/" : pathname.startsWith(p)));
  };

  return (
    <>
      <UtilityBar />
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F4]/90 backdrop-blur-md ring-1 ring-[#E5ECE8]"
            : "bg-[#FAF8F4]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 md:h-[88px] flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0" aria-label="Harmony Health home">
            <Image
              src="/legacy-images/logo.png"
              alt="Harmony Health"
              width={707}
              height={400}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 h-full">
            {NAV.map((item) => {
              const active = isActive(item);
              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center group"
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-sm font-medium tracking-tight transition-colors ${
                      active
                        ? "text-[#1F2A25]"
                        : "text-[#30373E]/75 hover:text-[#1F2A25]"
                    }`}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <CaretDown
                        size={10}
                        weight="bold"
                        className="mt-[2px] transition-transform group-hover:rotate-180 text-[#517563]"
                      />
                    )}
                  </Link>
                  <span
                    aria-hidden
                    className={`absolute left-0 right-0 -bottom-px h-[2px] bg-[#517563] transition-transform duration-300 origin-center ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                  {item.megaMenu && (
                    <div
                      className={`invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50 ${
                        item.menuAlign === "right"
                          ? `fixed right-6 md:right-12 ${scrolled ? "top-[100px]" : "top-[144px]"}`
                          : "absolute top-full pt-3 -left-24"
                      }`}
                    >
                      <div className="bg-white ring-1 ring-[#E5ECE8] shadow-[0_20px_40px_-15px_rgba(31,42,37,0.15)] rounded-2xl p-6 grid grid-cols-5 gap-6 min-w-[860px] max-w-[calc(100vw-3rem)] overflow-x-auto">
                        {item.megaMenu.map((cat) => (
                          <div key={cat.label}>
                            <Link
                              href={cat.href}
                              className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6B9680] hover:text-[#517563] mb-3 transition-colors"
                            >
                              {cat.label}
                            </Link>
                            <ul className="space-y-1.5">
                              {cat.items.map((sub) => {
                                const subActive = pathname === sub.href || pathname.startsWith(sub.href + "/");
                                return (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      className={`block text-[13px] leading-snug transition-colors ${
                                        subActive
                                          ? "text-[#517563] font-semibold"
                                          : "text-[#30373E] hover:text-[#517563]"
                                      }`}
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                        <div className="col-span-5 pt-4 mt-2 border-t border-[#E5ECE8]">
                          <Link
                            href="/services-and-pricing"
                            className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[#517563] hover:text-[#1F2A25] transition-colors"
                          >
                            View all services &amp; pricing →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex items-center gap-2 pl-2">
              <Link
                href={OPTIMANTRA_PORTAL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#517563] hover:text-[#1F2A25] px-4 py-2.5 rounded-full ring-1 ring-[#6B9680]/25 bg-white/50 hover:bg-white transition-colors"
              >
                Patient portal
                <ArrowUpRight size={12} weight="bold" />
              </Link>
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#6B9680] hover:bg-[#517563] text-white text-sm font-medium px-6 py-3 rounded-full active:scale-[0.98] transition-colors duration-300"
              >
                Book appointment
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H2M9 1V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white ring-1 ring-[#E5ECE8] text-[#1F2A25]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E5ECE8] bg-[#FAF8F4]">
            <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 space-y-1">
              {NAV.map((item) => {
                const active = isActive(item);
                return (
                  <div key={item.label}>
                    {item.megaMenu ? (
                      <>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`w-full flex items-center justify-between py-3 px-2 text-[15px] font-medium ${
                            active ? "text-[#1F2A25]" : "text-[#30373E]"
                          }`}
                        >
                          {item.label}
                          <CaretDown
                            size={12}
                            weight="bold"
                            className={`transition-transform text-[#517563] ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {servicesOpen && (
                          <div className="pl-4 pb-2 space-y-3">
                            {item.megaMenu.map((cat) => (
                              <div key={cat.label}>
                                <Link
                                  href={cat.href}
                                  onClick={closeMobile}
                                  className="block py-1 px-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#6B9680]"
                                >
                                  {cat.label}
                                </Link>
                                {cat.items.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={closeMobile}
                                    className={`block py-1.5 px-4 text-[14px] ${
                                      pathname === sub.href
                                        ? "text-[#517563] font-semibold"
                                        : "text-[#535353]"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            <Link
                              href={item.href}
                              onClick={closeMobile}
                              className="block py-2 px-2 text-[13px] font-semibold text-[#517563]"
                            >
                              View all services →
                            </Link>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className={`block py-3 px-2 text-[15px] font-medium ${
                          active ? "text-[#1F2A25]" : "text-[#30373E]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 pb-2 flex flex-col gap-2">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 bg-[#6B9680] hover:bg-[#517563] text-white text-sm font-medium px-6 py-3.5 rounded-full transition-colors"
                >
                  Book appointment
                </Link>
                <Link
                  href={OPTIMANTRA_PORTAL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 bg-white ring-1 ring-[#6B9680]/25 text-[#517563] text-sm font-medium px-6 py-3.5 rounded-full transition-colors"
                >
                  Patient portal
                  <ArrowUpRight size={12} weight="bold" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
