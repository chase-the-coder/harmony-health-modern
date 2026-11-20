"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BOOKING_URL } from "@/components/harmony/BookingButton";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const included = [
  {
    title: "Comprehensive Health & Wellness Review",
    text: "A personalized review of your medical history, medications, menstrual and reproductive health, lifestyle, and overall wellness concerns.",
  },
  {
    title: "Breast Health Evaluation",
    text: "Clinical breast examination when appropriate, breast health assessment, and recommendations for mammograms or additional imaging based on your age, history, and individual risk factors.",
  },
  {
    title: "Pap Smear & HPV Screening",
    text: "Cervical cancer screening, including Pap smears and high-risk HPV testing when indicated, based on your age, medical history, and current screening guidelines.",
  },
  {
    title: "Pelvic & Gynecological Evaluation",
    text: "Assessment of gynecological health, including a pelvic examination when appropriate, with attention to concerns such as abnormal bleeding, pelvic discomfort, vaginal dryness, or other changes.",
  },
  {
    title: "Sexually Transmitted Infection (STI) Screening",
    text: "Confidential screening options for common sexually transmitted infections, including chlamydia, gonorrhea, trichomoniasis, HIV, and syphilis, based on your individual needs and risk factors.",
  },
  {
    title: "Vaginal & Urinary Health",
    text: "Evaluation and testing, when indicated, for common concerns such as yeast infections, bacterial vaginosis, vaginal irritation, abnormal discharge, and urinary symptoms.",
  },
  {
    title: "Preventive Health & Longevity Guidance",
    text: "Individualized recommendations for preventive screenings, bone health, cardiovascular and metabolic wellness, nutrition, and healthy aging.",
  },
];

const ways = [
  {
    eyebrow: "Option 1",
    title: "Included With Our Women’s Hormone Optimization Program",
    body: [
      "Our Women’s Hormone Optimization Program includes one Women’s Annual Exam as part of your ongoing care. This allows us to support not only your hormonal health but also your overall wellness, preventive care, and long-term vitality.",
    ],
  },
  {
    eyebrow: "Option 2",
    title: "Standalone Women’s Annual Exam",
    body: [
      "Not interested in hormone therapy? No problem.",
      "You can schedule a comprehensive Women’s Annual Exam as a standalone appointment without enrolling in a hormone program or committing to ongoing membership.",
      "Whether you need a routine annual exam, cervical cancer screening, or personalized preventive care, we’re here to help.",
    ],
  },
];

function BookButton({ light = false }: { light?: boolean }) {
  const isExternal = BOOKING_URL.startsWith("http");
  return (
    <a
      href={BOOKING_URL}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium active:scale-[0.98] transition-colors duration-300 ${
        light
          ? "bg-white text-[#1F2A25] hover:bg-[#FAF8F4]"
          : "bg-[#6B9680] text-white hover:bg-[#517563]"
      }`}
    >
      Schedule Your Women’s Annual Exam
      <span
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
          light ? "bg-[#1F2A25]/10" : "bg-white/10"
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
          <path
            d="M1 9L9 1M9 1H2M9 1V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export default function ModernWellnessExam() {
  return (
    <>
    <section id="womens-wellness-exam" className="bg-white py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Intro */}
        <motion.div
          {...fadeUp}
          className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-20 items-center"
        >
          <div className="order-1">
            <div className="rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className="relative aspect-[4/5] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#F7F9F8]">
                <Image
                  src="/images/womens-wellness-exam-room.webp"
                  alt="Calm, welcoming exam room at Harmony Health"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-6">
              Women’s Annual Exams
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05] mb-6">
              Preventive Care. Personalized Attention.
              <br />
              <span className="italic font-light text-[#517563]">
                Whole-Body Wellness.
              </span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[#30373E] leading-relaxed mb-8">
              <p>
                At Harmony Health Integrative Wellness, we believe women’s
                healthcare should be proactive, personalized, and focused on
                more than just treating symptoms.
              </p>
              <p>
                Our comprehensive Women’s Annual Exams are designed to support
                your health at every stage of life through preventive
                screenings, early detection, and individualized care. Whether
                you’re staying on top of routine health screenings or have
                specific concerns you’d like to discuss, we provide a
                comfortable, supportive environment where your health is our
                priority.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F7F9F8] ring-1 ring-[#E5ECE8] px-6 py-5 mb-10">
              <p className="text-base text-[#30373E] leading-relaxed">
                Our Women’s Annual Exam is included as an annual benefit of
                our Women’s Hormone Optimization Program and is also available
                as a standalone appointment.{" "}
                <span className="font-semibold text-[#1F2A25]">
                  No membership or hormone therapy is required.
                </span>
              </p>
            </div>
            <BookButton />
          </div>
        </motion.div>

      </div>
    </section>

    <section className="bg-[#6B9680]/15 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* What's included */}
        <motion.div {...fadeUp}>
          <div className="mb-12 md:mb-14 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
              What’s included in a
              <br />
              <span className="italic font-light text-[#517563]">
                Women’s Annual Exam?
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {included.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white ring-1 ring-[#E5ECE8] p-6 md:p-7 shadow-sm"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#6B9680]/10 text-[#517563] text-sm font-semibold mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-lg font-semibold text-[#1F2A25] leading-snug mb-3">
                  {item.title}
                </h4>
                <p className="text-base text-[#535353] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
            <div className="rounded-2xl bg-[#6B9680] p-6 md:p-7 shadow-sm flex flex-col justify-between gap-6">
              <p className="text-lg font-semibold text-white leading-snug">
                Ready to schedule your annual exam?
              </p>
              <a
                href={BOOKING_URL}
                target={BOOKING_URL.startsWith("http") ? "_blank" : undefined}
                rel={BOOKING_URL.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1F2A25] text-sm font-medium hover:bg-[#FAF8F4] transition-colors duration-300 self-start"
              >
                Book now
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
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
          </div>
        </motion.div>

      </div>
    </section>

    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Two ways */}
        <motion.div {...fadeUp}>
          <div className="mb-12 md:mb-14 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1F2A25] leading-[1.05]">
              Two ways to receive
              <br />
              <span className="italic font-light text-[#517563]">
                your annual exam.
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ways.map((w) => (
              <div
                key={w.title}
                className="rounded-3xl bg-white ring-1 ring-[#E5ECE8] p-8 md:p-10 shadow-md"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium bg-[#6B9680]/10 text-[#517563] mb-5">
                  {w.eyebrow}
                </span>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-[#1F2A25] leading-snug mb-4">
                  {w.title}
                </h4>
                <div className="space-y-3 text-base text-[#30373E] leading-relaxed">
                  {w.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing + CTA */}
        <motion.div
          {...fadeUp}
          className="mt-16 md:mt-24 rounded-3xl bg-[#1F2A25] px-8 py-12 md:px-16 md:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter !text-white leading-[1.05] mb-6">
                Your Health. Your Wellness.
                <br />
                <span className="italic font-light !text-[#9BD3B6]">
                  Your Harmony.
                </span>
              </h3>
              <div className="space-y-4 text-base md:text-lg text-white/85 leading-relaxed">
                <p>
                  You deserve healthcare that takes the time to listen, looks at
                  the bigger picture, and supports your health through every
                  season of life.
                </p>
                <p>
                  At Harmony Health, our goal is to help you feel informed,
                  empowered, and confident in your healthcare decisions.
                </p>
                <p className="italic text-[#9BD3B6]">
                  Treating the person, not the protocol.
                </p>
              </div>
            </div>
            <div className="lg:border-l lg:border-white/15 lg:pl-20 flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-bold tracking-tight !text-white leading-snug mb-4">
                Schedule Your Women’s Annual Exam
              </h4>
              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8">
                Whether you’re a current hormone optimization member or simply
                looking for personalized women’s preventive care, we’d love to
                care for you.
              </p>
              <div className="mb-8">
                <BookButton light />
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Screenings and testing are individualized based on age,
                symptoms, medical history, and clinical recommendations. Not
                every test or examination is necessary at every annual visit.
                Laboratory processing, additional diagnostic testing, and
                imaging may involve separate charges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
