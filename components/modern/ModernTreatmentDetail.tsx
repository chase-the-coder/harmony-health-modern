"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, CaretDown } from "@phosphor-icons/react";

type Props = {
  id?: string;
  eyebrow: string;
  headline: React.ReactNode;
  description: string;
  benefits: (string | { title: string; text: string })[];
  benefitsTitle?: string;
  closing?: { title: string; text: string };
  candidateTitle: string;
  candidateIntro?: string;
  candidate: string[];
  bookHref: string;
  bookLabel: string;
  image: { src: string; alt: string; width?: number; height?: number };
  video?: { src: string; poster?: string };
  photoBelow?: { src: string; alt: string; width: number; height: number };
  imageSide?: "left" | "right";
  background?: "white" | "sage" | "dark" | "sageSolid";
  largeCopy?: boolean;
  candidateOpen?: boolean;
  stickyImage?: boolean;
};

const BASE = {
  section: "bg-white",
  eyebrow: "bg-[#6B9680]/10 text-[#517563]",
  heading: "text-[#1F2A25]",
  body: "text-[#30373E]",
  label: "text-[#517563]",
  check: "bg-[#6B9680]/15 text-[#517563]",
  border: "border-[#E5ECE8]",
  subtle: "text-[#535353]",
  caret: "bg-[#F7F9F8] text-[#517563]",
  titleHover: "group-hover:text-[#517563]",
  button: "bg-[#6B9680] text-white hover:bg-[#517563]",
  buttonArrow: "bg-white/10",
};

const THEMES = {
  white: BASE,
  sage: {
    ...BASE,
    section: "bg-[#6B9680]/30",
    eyebrow: "bg-white/70 text-[#517563]",
    check: "bg-white text-[#517563]",
  },
  dark: {
    ...BASE,
    section: "bg-[#1F2A25]",
    eyebrow: "bg-white/10 text-[#9BD3B6]",
    heading: "!text-white",
    body: "text-white/85",
    label: "!text-[#9BD3B6]",
    check: "bg-white/10 text-[#9BD3B6]",
    border: "border-white/15",
    subtle: "text-white/70",
    caret: "bg-white/10 text-[#9BD3B6]",
    titleHover: "group-hover:!text-[#9BD3B6]",
  },
  sageSolid: {
    section: "bg-[#6B9680]",
    eyebrow: "bg-white/15 text-white",
    heading: "!text-white",
    body: "text-white/90",
    label: "!text-white",
    check: "bg-white/20 text-white",
    border: "border-white/25",
    subtle: "text-white/80",
    caret: "bg-white/15 text-white",
    titleHover: "group-hover:!text-white/80",
    button: "bg-white text-[#1F2A25] hover:bg-[#FAF8F4]",
    buttonArrow: "bg-[#1F2A25]/10",
  },
};

export default function ModernTreatmentDetail({
  id,
  eyebrow,
  headline,
  description,
  benefits,
  benefitsTitle = "Benefits",
  closing,
  candidateTitle,
  candidateIntro,
  candidate,
  bookHref,
  bookLabel,
  image,
  video,
  photoBelow,
  imageSide = "right",
  background = "white",
  largeCopy = false,
  candidateOpen = false,
  stickyImage = false,
}: Props) {
  const t = THEMES[background];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isExternal = bookHref.startsWith("http");

  function togglePlay() {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  }

  const imgOrder = imageSide === "left" ? "lg:order-1" : "lg:order-2";
  const textOrder = imageSide === "left" ? "lg:order-2" : "lg:order-1";

  return (
    <section id={id} className={`${t.section} py-8 md:py-12 scroll-mt-20`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          <div className={`${imgOrder} order-1 ${photoBelow || stickyImage ? "lg:self-start" : ""} ${stickyImage ? "lg:sticky lg:top-32" : ""}`}>
            <div className="rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
              <div className={`relative rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#F7F9F8] ${video ? "aspect-video" : image.width && image.height ? "" : "aspect-[4/5]"}`}>
                {video ? (
                  <div className="group absolute inset-0 w-full h-full">
                    <video
                      ref={videoRef}
                      src={video.src}
                      poster={video.poster ?? "/legacy-images/megan-inmode.jpg"}
                      preload="none"
                      loop
                      playsInline
                      onEnded={() => setPlaying(false)}
                      className="w-full h-full object-cover rounded-[calc(2rem-0.375rem)]"
                    />
                    {!playing && (
                      <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="#1F2A25">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}
                    {playing && (
                      <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="#1F2A25">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </div>
                ) : (
                  image.width && image.height ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="w-full h-auto"
                    />
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )
                )}
              </div>
            </div>
            {photoBelow && (
              <div className="mt-6 md:mt-8 rounded-[2rem] bg-white p-1.5 ring-1 ring-[#E5ECE8] shadow-[0_30px_60px_-20px_rgba(31,42,37,0.15)]">
                <Image
                  src={photoBelow.src}
                  alt={photoBelow.alt}
                  width={photoBelow.width}
                  height={photoBelow.height}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-auto rounded-[calc(2rem-0.375rem)]"
                />
              </div>
            )}
          </div>

          <div className={`${textOrder} order-2`}>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[22px] uppercase tracking-[0.25em] font-medium ${t.eyebrow} mb-6`}>
              {eyebrow}
            </span>
            <h2 className={`${largeCopy ? "text-4xl md:text-6xl mb-8" : "text-3xl md:text-5xl mb-6"} font-bold tracking-tighter ${t.heading} leading-[1.05]`}>
              {headline}
            </h2>
            <p className={`${largeCopy ? "text-lg md:text-xl mb-10" : "text-base md:text-lg mb-8"} ${t.body} leading-relaxed`}>
              {description}
            </p>

            <h3 className={`${largeCopy ? "text-base mb-6" : "text-sm mb-4"} uppercase tracking-[0.2em] font-semibold ${t.label}`}>
              {benefitsTitle}
            </h3>
            <ul className={`${largeCopy ? "space-y-5 mb-10" : "space-y-3 mb-8"}`}>
              {benefits.map((b) => (
                <li key={typeof b === "string" ? b : b.title} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full ${t.check} flex items-center justify-center shrink-0 mt-1`}>
                    <Check size={12} weight="bold" />
                  </div>
                  <span className={`${largeCopy ? "text-lg md:text-xl" : "text-base"} ${t.body} leading-relaxed`}>
                    {typeof b === "string" ? (
                      b
                    ) : (
                      <>
                        <span className="font-semibold">{b.title}</span> — {b.text}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {closing && (
              <div className={largeCopy ? "mb-10" : "mb-8"}>
                <h3 className={`${largeCopy ? "text-base mb-4" : "text-sm mb-3"} uppercase tracking-[0.2em] font-semibold ${t.label}`}>
                  {closing.title}
                </h3>
                <p className={`${largeCopy ? "text-lg md:text-xl" : "text-base md:text-lg"} ${t.body} leading-relaxed`}>
                  {closing.text}
                </p>
              </div>
            )}

            {candidateOpen ? (
              <div className={`border-t ${t.border} pt-6`}>
                <h3 className={`${largeCopy ? "text-lg md:text-xl mb-5" : "text-base mb-4"} font-semibold ${t.heading}`}>
                  {candidateTitle}
                </h3>
                {candidateIntro && (
                  <p className={`text-base ${t.subtle} leading-relaxed mb-4`}>
                    {candidateIntro}
                  </p>
                )}
                <ul className={largeCopy ? "space-y-5" : "space-y-3"}>
                  {candidate.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${t.check} flex items-center justify-center shrink-0 mt-1`}>
                        <Check size={12} weight="bold" />
                      </div>
                      <span className={`${largeCopy ? "text-lg md:text-xl" : "text-base"} ${t.body} leading-relaxed`}>
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
            <>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className={`flex items-center justify-between w-full border-t ${t.border} pt-6 text-left group`}
            >
              <span className={`${largeCopy ? "text-lg md:text-xl" : "text-base"} font-semibold ${t.heading} ${t.titleHover} transition-colors`}>
                {candidateTitle}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`w-7 h-7 rounded-full ${t.caret} flex items-center justify-center`}
              >
                <CaretDown size={14} weight="bold" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6">
                    {candidateIntro && (
                      <p className={`text-base ${t.subtle} leading-relaxed mb-4`}>
                        {candidateIntro}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {candidate.map((c) => (
                        <li key={c} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full ${t.check} flex items-center justify-center shrink-0 mt-1`}>
                            <Check size={12} weight="bold" />
                          </div>
                          <span className={`text-base ${t.body} leading-relaxed`}>
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </>
            )}

            <div className="mt-10">
              <a
                href={bookHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full ${t.button} text-base font-medium active:scale-[0.98] transition-colors duration-300`}
              >
                {bookLabel}
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${t.buttonArrow}`}>
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
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
