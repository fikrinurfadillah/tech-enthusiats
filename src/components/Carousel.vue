<template>
  <div class="my-20 flex">
    <div class="w-32 m-auto arrow-button">
      <button @click="showPrev"><i class="fas fa-arrow-left"></i></button>
    </div>
    <VueSlickCarousel
      v-bind="settings"
      ref="carousel"
      class="w-5/6 m-auto carousel"
    >
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
    <div class="w-32 m-auto arrow-button">
      <button @click="showNext"><i class="fas fa-arrow-right"></i></button>
    </div>
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
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
}

img {
  border-radius: 32px;
  width: 95%;
}
button {
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  -o-object-fit: contain;
  object-fit: contain;
  background: #fff;
  outline: 0;
  border: 0;
  -webkit-box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
}

button i {
  color: #00b050;
}

.arrow-button {
  display: none;
}

@media screen and (min-width: 769px) {
  .carousel {
    width: 80%;
  }
  img {
    height: 600px;
    width: 100%;
  }
  .arrow-button {
    display: block;
  }
}
</style>
