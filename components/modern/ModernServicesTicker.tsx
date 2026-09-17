"use client";

const services = [
  "Women's Restorative Wellness + HRT",
  "Men's Restorative Wellness + HRT",
  "Medical Weight Loss",
  "EmpowerRF",
  "Morpheus8V",
  "APEX Sexual Wellness",
  "Facials",
  "Microneedling + PRP",
  "Lumecca IPL",
  "Laser Hair Removal",
  "Lash Lift & Tint",
  "IV Hydration Therapy",
  "Women's Pelvic Health",
  "Functional Medicine",
];

const Dot = () => (
  <span
    className="mx-8 w-2 h-2 rounded-full bg-[#6B9680] inline-block shrink-0 align-middle"
    style={{ boxShadow: "0 0 8px 2px rgba(128,190,159,0.65)" }}
  />
);

const tickerStyle: React.CSSProperties = {
  animation: "ticker 30s linear infinite",
};

export default function ModernServicesTicker() {
  return (
    <div className="bg-[#FAF8F4] py-8 md:py-10 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF8F4] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAF8F4] to-transparent z-10" />

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex whitespace-nowrap" style={tickerStyle}>
        {[...services, ...services].map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center text-2xl md:text-3xl font-medium tracking-wide text-[#1F2A25]"
            style={{
              textShadow:
                "0 0 12px rgba(128,190,159,0.6), 0 0 24px rgba(128,190,159,0.3)",
            }}
          >
            {s}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
