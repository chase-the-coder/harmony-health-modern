"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      setFade(false);
      setTimeout(() => {
        setCurrent(index);
        setFade(true);
      }, 200);
    },
    []
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, isPaused, testimonials.length, goTo]);

  return (
    <figure
      className="bg-base-100 space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#6B9680] opacity-80"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>
      <div
        className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
      >
        <blockquote className="text-[18px] leading-[28px] text-[#30373E]">
          {testimonials[current].quote}
        </blockquote>
        <figcaption className="mt-6">
          <div className="font-bold text-[#30373E]">
            {testimonials[current].author}
          </div>
          <div className="text-[13px] text-[#535353]">
            {testimonials[current].role}
          </div>
        </figcaption>
      </div>
      <div className="flex gap-2 pt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#6B9680] w-8"
                : "bg-base-300 w-2 hover:bg-base-content/30"
            }`}
          />
        ))}
      </div>
    </figure>
  );
}
