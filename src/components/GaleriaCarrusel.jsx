import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GaleriaCarrusel({ imagenes }) {
  return (
    <div className="w-full h-64 relative group">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {imagenes.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Foto ${index}`} className="w-full h-full object-cover" loading="lazy"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}