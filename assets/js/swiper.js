const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 30,

  // Navigation arrows
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper4 = new Swiper('.swiper4', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper5 = new Swiper('.swiper5', {
  // Navigation arrows
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});