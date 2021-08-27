<template>
  <div>
    <p>a</p>
    <section>
      <swiper :options="swiperOption">
        <swiper-slide>スライド１</swiper-slide>
        <swiper-slide>スライド２</swiper-slide>
        <swiper-slide>スライド３</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 5,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
