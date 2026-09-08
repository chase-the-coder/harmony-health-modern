"use client";

import { useState } from "react";
import Link from "next/link";
import { BOOKING_URLS } from "@/components/harmony/BookingButton";

type AddOn = { price: string; items: string };

type Step = { label: string; detail: string };

type Facial = {
  name: string;
  description: string;
  learnMore?: {
    headline?: string;
    body?: string;
    steps?: Step[];
    addOns?: AddOn[];
    totalPrice?: string;
  };
};

const facials: Facial[] = [
  {
    name: "Customized Facial",
    description:
      "A personalized treatment designed specifically for your unique needs. After a thorough skin analysis, professional-grade products and technique are selected to target concerns such as acne, dryness, sensitivity, congestion, fine lines, or uneven skin tone.",
    learnMore: {
      body: "Your skin is unique, and your facial should be too. This personalized experience begins with a professional skin assessment to identify your individual skin type, concerns, and goals. From there, your esthetician will create a customized facial using treatments and products selected specifically for your skin's needs.\n\nWhether you're looking to address dryness, congestion, sensitivity, uneven tone, texture, signs of aging, or simply restore a healthy glow, every step of your treatment is thoughtfully tailored to you. Your experience may include deep cleansing, exfoliation, extractions as needed, a customized mask, targeted serums, hydration, and finishing products.\n\nLeave with refreshed, nourished skin — and a better understanding of what your skin needs to look and feel its best.",
      totalPrice: "$160",
    },
  },
  {
    name: "Signature Luxe Facial",
    description:
      "A soothing treatment created for sensitive, stressed, or redness-prone skin. This facial helps calm inflammation, strengthen the skin barrier, and restore hydration, leaving your complexion balanced and refreshed.",
    learnMore: {
      headline:
        "This luxury facial is designed to provide an unparalleled experience in anti-aging, hydration, and skin renewal. The treatment begins with a thorough skin analysis to tailor the approach to your skin type and concerns.",
      steps: [
        { label: "Cleansing", detail: "Gentle yet effective process for removing makeup, dirt, and impurities. It prepares the skin for treatment and can be used with heated towels." },
        { label: "Exfoliation", detail: "Advanced exfoliating techniques, such as chemical peels or microdermabrasion, slough off dead skin cells, improve texture, and promote cell turnover." },
        { label: "Mask and Serums", detail: "Customized masks enriched with powerful antioxidants and anti-aging ingredients are applied, along with serums that deeply penetrate the skin to deliver hydration and nourishment." },
        { label: "Massage", detail: "A luxurious facial and neck massage improves circulation, relieves tension, and promotes relaxation while enhancing the absorption of the products used." },
        { label: "Advanced Treatments", detail: "Innovative technologies, such as LED therapy, ultrasound, or radiofrequency, can be incorporated to stimulate collagen production further, reduce fine lines, and achieve a youthful glow." },
        { label: "Moisturizing", detail: "A rich moisturizer is applied to lock in hydration and protect the skin barrier, leaving your skin feeling soft, plump, and revitalized." },
        { label: "Aftercare Guidance", detail: "Post-treatment recommendations will be provided to help maintain the results and ensure your skin continues to thrive." },
      ],
      body: "This facial targets signs of aging and rejuvenates the skin, leaving it refreshed and luminous. Perfect for a special occasion or as a pampering retreat, this experience is all about indulgence and self-care.",
      totalPrice: "$200",
    },
  },
  {
    name: "Express Facial",
    description:
      "Short on time but need a skin refresh? This efficient treatment delivers visible results in just 45 minutes.",
    learnMore: {
      headline:
        "Short on time but still need a skin pick-me-up? Our Express Facial is the perfect solution!",
      body: "This targeted treatment refreshes, revitalizes, and nourishes your skin in just 45 minutes. Designed for those on the go, the Express Facial includes a gentle cleanse, light exfoliation, and a customized mask to address your skin's needs. Complete with a hydrating moisturizer and SPF application, this service leaves your skin feeling clean, glowing, and refreshed. It is ideal for maintaining a healthy complexion between full treatments or as a quick boost before a big event! EXTRACTIONS INCLUDED!",
      addOns: [{ price: "$20 Add On", items: "Dermaplane" }],
      totalPrice: "$135",
    },
  },
  {
    name: "Gentleman's Facial",
    description:
      "A tailored treatment designed for men's skin — deep cleansing, exfoliation, extractions, and a calming mask to soothe irritation and leave skin refreshed and balanced.",
    learnMore: {
      body: "This tailored treatment begins with a deep cleansing to remove impurities and excess oils, followed by gentle exfoliation to clear clogged pores and promote smoother skin. A calming mask is then applied to soothe irritation, especially from shaving, and to hydrate the skin. During the facial, the esthetician may also perform extractions to clear blackheads or congested areas, followed by a facial massage to relax muscles and improve circulation. The treatment is finished with customized serums and moisturizers to balance and rejuvenate the skin. The Gentleman's Facial leaves the skin refreshed, nourished, and ready to face the elements, making it ideal for men who want healthy, well-maintained skin without the frills of a traditional facial. It's perfect for men with all skin types, whether dealing with dryness, sensitivity, or oiliness.",
      totalPrice: "$180",
    },
  },
  {
    name: "Teen Facial",
    description:
      "Designed specifically for teenage skin, this 45-minute customized facial targets common concerns such as excess oil, congestion, blackheads, and breakouts.",
    learnMore: {
      body: "Designed specifically for teenage skin, this 45-minute customized facial targets common concerns such as excess oil, congestion, blackheads, and breakouts while supporting a healthy, balanced complexion.\n\nThe experience includes a thorough cleanse, gentle exfoliation, extractions as needed, a customized mask, and hydrating products selected specifically for your teen's skin. Beyond the facial itself, we'll help your teen better understand their skin and learn simple, age-appropriate skincare habits they can use at home.\n\nPerfect for teens who are beginning a skincare routine, experiencing hormonal changes or breakouts, or simply need a little self-care. Our goal is to create a comfortable, positive experience that leaves them feeling refreshed, confident, and empowered to care for their skin.",
      totalPrice: "$125",
    },
  },
  {
    name: "Back Facial",
    description:
      "Your back deserves the same care as your face. A rejuvenating treatment that deeply cleanses, exfoliates, and nourishes the often-neglected skin on your back.",
    learnMore: {
      body: "Your back deserves the same care as your face. This rejuvenating treatment is designed to deeply cleanse, exfoliate, and nourish the often-neglected skin on your back. It includes a thorough cleansing to remove buildup, gentle exfoliation to smooth and brighten, a tension-relieving hot stone massage, a customized mask to hydrate and balance, and warm towels to soothe your skin. The session finishes with a nourishing moisturizer for lasting softness and hydration.",
      addOns: [
        { price: "Add a VI Chemical Peel", items: "Target acne, discoloration, or texture — $150 (regularly $300)" },
      ],
      totalPrice: "$200",
    },
  },
];

function FacialCard({ facial }: { facial: Facial }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl ring-1 ring-[#E5ECE8] shadow-sm overflow-hidden">
      <div className="p-8">
        <h3 className="text-xl font-bold tracking-tight text-[#1F2A25] mb-3">{facial.name}</h3>
        <p className="text-[#30373E] leading-relaxed">{facial.description}</p>

        {facial.learnMore && (
          <button
            onClick={() => setOpen(!open)}
            className="mt-5 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#517563] hover:text-[#1F2A25] transition-colors group"
          >
            {open ? "Show Less" : "Learn More"}
            <span
              className={`w-5 h-5 rounded-full ring-1 ring-[#6B9680] flex items-center justify-center transition-transform duration-300 text-[#6B9680] ${
                open ? "rotate-45" : ""
              }`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {facial.learnMore && open && (
        <div className="px-8 pb-8 border-t border-[#E5ECE8]">
          <div className="pt-6 space-y-4">
            {facial.learnMore.headline && (
              <p className="text-[#1F2A25] font-semibold leading-relaxed">
                {facial.learnMore.headline}
              </p>
            )}
            {facial.learnMore.body && !facial.learnMore.steps && (
              <div className="space-y-3">
                {facial.learnMore.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[#30373E] leading-relaxed">{para}</p>
                ))}
              </div>
            )}
            {facial.learnMore.steps && (
              <ul className="space-y-3">
                {facial.learnMore.steps.map((s) => (
                  <li key={s.label} className="text-[#30373E] leading-relaxed">
                    <span className="font-semibold text-[#1F2A25]">{s.label}: </span>
                    {s.detail}
                  </li>
                ))}
              </ul>
            )}
            {facial.learnMore.body && facial.learnMore.steps && (
              <p className="text-[#30373E] leading-relaxed">{facial.learnMore.body}</p>
            )}

            {facial.learnMore.addOns && facial.learnMore.addOns.length > 0 && (
              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563] mb-3">
                  Additional Add-Ons Available
                </p>
                {facial.learnMore.addOns.map((a) => (
                  <div key={a.price} className="mb-2">
                    <span className="font-semibold text-[#1F2A25] text-sm">{a.price}</span>
                    <span className="text-[#30373E] text-sm"> — {a.items}</span>
                  </div>
                ))}
              </div>
            )}

            {facial.learnMore.totalPrice && (
              <div className="pt-3 border-t border-[#E5ECE8]">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#517563]">
                  Total Price
                </span>
                <p className="text-2xl font-bold text-[#1F2A25] mt-1">
                  {facial.learnMore.totalPrice}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FacialAccordion() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facials.map((f) => (
          <FacialCard key={f.name} facial={f} />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href={BOOKING_URLS.aesthetic}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B9680] text-white text-sm font-medium hover:bg-[#517563] transition-colors"
        >
          Book a facial
        </Link>
      </div>
    </>
  );
}
