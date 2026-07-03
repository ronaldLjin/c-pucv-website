import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Autoplaying carousel of sponsor / partner logos (the old ".swiper1").
// `slides` is an array of { href, src, fill } — `fill` matches the old
// inline `height:100%; width:auto` styling used on most logos.
export default function LogoCarousel({ slides }) {
  return (
    <Swiper
      className="swiper1"
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={30}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i} className="swiper1-slide">
          <a target="_blank" rel="noreferrer" href={s.href}>
            <img
              src={s.src}
              alt=""
              style={s.fill ? { height: "100%", width: "auto" } : undefined}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
