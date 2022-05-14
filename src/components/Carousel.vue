<template>
  <div class=" my-20">
      <VueSlickCarousel v-bind="settings" ref="carousel" class="w-5/6 m-auto carousel">
        <div class="">
          <img src="../assets/carousel-1.jpg" alt="" />
        </div>
        <div class="">
          <img src="../assets/carousel-2.jpg" alt="" />
        </div>
        <div class="">
          <img src="../assets/carousel-3.jpg" alt="" />
        </div>
      </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      settings: {
        arrows: false,
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 1,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: "20px",
        responsive: [
          {
            breakpoint: 769,
            settings: {
              centerMode: true,
              centerPadding: "10px",
            },
          },
        ],
      },
    };
  },
};
</script>

<style  scoped>
.carousel {
  width: 100%;
}

img {
  border-radius: 32px;
  width: 95%;
}

@media screen and (min-width: 769px) {
  .carousel {
    width: 80%;
  }
  img {
    height: 490px;
    width: 100%;
  }
}
</style>