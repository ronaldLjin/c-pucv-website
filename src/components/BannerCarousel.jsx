import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Full-width autoplaying hero image slider (the old ".swiper5"), wrapped by
// the .event-recap-banner with an overlaid header.
export default function BannerCarousel({ images, header }) {
  return (
    <div className="event-recap-banner">
      <Swiper
        className="swiper5"
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="swiper5-slide">
            <img src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="event-recap-header">{header}</h1>
    </div>
  );
}
