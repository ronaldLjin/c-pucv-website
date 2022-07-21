const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});