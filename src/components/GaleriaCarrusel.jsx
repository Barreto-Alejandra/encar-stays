import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GaleriaCarrusel({ imagenes, titulo }) {
  return (
    <div className="w-full h-full relative group">
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
            <img
              src={img}
              alt={titulo ? `${titulo} - Foto ${index + 1}` : `Foto ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-out"
              loading="lazy"
              decoding="async"
              ref={(node) => {
                if (node && node.complete) node.classList.replace('opacity-0', 'opacity-100');
              }}
              onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
              onError={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}