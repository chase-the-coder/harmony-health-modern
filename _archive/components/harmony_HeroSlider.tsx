"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { BOOKING_URL } from "./BookingButton";

type Slide = {
  image: string;
  alt: string;
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={800}
        className="harmony-hero-swiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full min-h-[640px] md:min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
                {s.eyebrow && (
                  <p className="text-base md:text-lg font-medium mb-4 drop-shadow-md !text-white">
                    {s.eyebrow}
                  </p>
                )}
                <h2 className="text-[42px] md:text-[56px] lg:text-[72px] font-bold mb-6 drop-shadow-lg leading-[1.1] tracking-[-1px] !text-white">
                  {s.headline}
                </h2>
                {s.subheadline && (
                  <p className="text-base lg:text-[17px] leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-md !text-white">
                    {s.subheadline}
                  </p>
                )}
                <Link
                  href={s.ctaHref || BOOKING_URL}
                  target={s.ctaHref?.startsWith("http") ? "_blank" : undefined}
                  rel={s.ctaHref?.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-3 bg-white text-[#30373E] hover:bg-base-200 font-extrabold uppercase tracking-[1.3px] text-[13px] px-12 py-[22px] transition-colors shadow-lg"
                >
                  {s.ctaText || "Book Appointment"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .harmony-hero-swiper .swiper-pagination {
          bottom: 32px !important;
        }
        .harmony-hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .harmony-hero-swiper .swiper-pagination-bullet-active {
          background: #6B9680;
          width: 32px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}
