<template>
  <div>
    <no-ssr>
      <section>
        <swiper :options="swiperOption">
          <swiper-slide><v-img src="images/port.png"></v-img></swiper-slide>
          <swiper-slide><v-img src="images/port2.png"></v-img></swiper-slide>
          <swiper-slide><v-img src="images/port3.png"></v-img></swiper-slide>
          <swiper-slide><v-img src="images/port.png"></v-img></swiper-slide>
          <swiper-slide><v-img src="images/port2.png"></v-img></swiper-slide>
          <swiper-slide><v-img src="images/port3.png"></v-img></swiper-slide>
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </section>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        initialSlide: 1,
        slidesPerView: 1.7,
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>

<style>
.swiper-button-prev {
  background-color: #c0bfbf;
}
.swiper-button-next {
  background-color: #c0bfbf;
}
</style>
