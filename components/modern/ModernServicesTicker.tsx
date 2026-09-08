"use client";

const services = [
  "Hormone Replacement Therapy",
  "Women's HRT",
  "Men's HRT",
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
  "Men's Sexual Health",
  "Functional Medicine",
];

const Dot = () => (
  <span className="mx-8 w-2 h-2 rounded-full bg-[#6B9680] inline-block shrink-0 align-middle" />
);

const tickerStyle: React.CSSProperties = {
  animation: "ticker 30s linear infinite",
};

export default function ModernServicesTicker() {
  return (
    <div className="bg-[#1F2A25] py-6 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1F2A25] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1F2A25] to-transparent z-10" />

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex whitespace-nowrap" style={tickerStyle}>
        {[...services, ...services].map((s, i) => (
          <span key={i} className="inline-flex items-center text-[17px] font-medium tracking-wide text-white/80">
            {s}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
