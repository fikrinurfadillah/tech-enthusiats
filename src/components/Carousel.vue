<template>
  <div class="carousel my-20">
    <div class="w-4/5 m-auto">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div class="">
          <img src="../assets/carousel-1.jpg" alt="" >
        </div>
        <div class="">
          <img src="../assets/carousel-2.jpg" alt="" >
        </div>
        <div class="">
          <img src="../assets/carousel-3.jpg" alt="" >
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
     components: {
      VueSlickCarousel
    },
    data() {
      return {
        slide: 0,
        sliding: null,
        settings: {
          "dots": true,
          "dotsClass": "slick-dots custom-dot-class",
          "edgeFriction": 0.35,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
        },
      }
    },
    
  }
</script>

<style  scoped>

@media screen and (min-width: 769px) {
  img {
    height: 490px;
    width: 100%;
    border-radius: 32px;
  }
}

</style>