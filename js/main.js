document.addEventListener('DOMContentLoaded', () => {
  /* Practice Slider
    ========================================================================== */
  const swiper = new Swiper('.swiper', {
    loop: false,
    autoHeight: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
    },
  });
});