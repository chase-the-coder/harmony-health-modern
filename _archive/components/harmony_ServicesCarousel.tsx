"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Service = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export default function ServicesCarousel({ services }: { services: Service[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 32 },
        }}
        loop
        pagination={{ clickable: true }}
        className="harmony-services-swiper"
      >
        {services.map((s) => (
          <SwiperSlide key={s.name}>
            <Link
              href={s.href}
              className="group bg-white border border-base-300 rounded-[5px] overflow-hidden hover:shadow-xl transition-all block h-full"
            >
              <div className="relative w-full h-[480px] overflow-hidden bg-base-200">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-[24px] font-bold text-[#30373E] mb-4 group-hover:text-[#6B9680] transition-colors">
                  {s.name}
                </h3>
                <p className="text-[15px] italic leading-[24px] text-[#535353]">
                  {s.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .harmony-services-swiper {
          padding-bottom: 56px !important;
        }
        .harmony-services-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .harmony-services-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #D5DEDB;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .harmony-services-swiper .swiper-pagination-bullet-active {
          background: #6B9680;
          width: 32px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
