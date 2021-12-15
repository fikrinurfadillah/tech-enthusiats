<template>
  <div class="carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      img-width="50"
      img-height="280"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://lelogama.go-jek.com/cache/ee/44/ee44fc8c3376469a8726a629b19c3635.webp"
      ></b-carousel-slide> -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide class="carousel-item" img-src="https://lelogama.go-jek.com/cache/ee/44/ee44fc8c3376469a8726a629b19c3635.webp"></b-carousel-slide>
      <b-carousel-slide class="carousel-item" img-src="https://lelogama.go-jek.com/cache/59/ca/59caf778bf28fcf60e6b89c4e1acee8a.webp"></b-carousel-slide>
      <b-carousel-slide class="carousel-item" img-src="https://lelogama.go-jek.com/cache/97/0d/970d408f2503541f852a44815e10efa1.webp"></b-carousel-slide>
      <b-carousel-slide class="carousel-item" img-src="https://lelogama.go-jek.com/cache/e9/58/e95808073cc5ce11d0ff045875d9bbea.webp"></b-carousel-slide>
      <b-carousel-slide class="carousel-item" img-src="https://lelogama.go-jek.com/cache/53/71/537196ead90ee5ba3815eb455a287a70.webp"></b-carousel-slide>
      <b-carousel-slide class="carousel-item" img-src="https://lelogama.go-jek.com/cache/3a/79/3a79ba0f22d49ccaf2cc822a003d7db0.webp"></b-carousel-slide> -->
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            style="border-radius: 50px"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://lelogama.go-jek.com/cache/ee/44/ee44fc8c3376469a8726a629b19c3635.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            style="border-radius: 50px"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://lelogama.go-jek.com/cache/59/ca/59caf778bf28fcf60e6b89c4e1acee8a.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            style="border-radius: 50px"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://lelogama.go-jek.com/cache/97/0d/970d408f2503541f852a44815e10efa1.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            style="border-radius: 50px"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://lelogama.go-jek.com/cache/e9/58/e95808073cc5ce11d0ff045875d9bbea.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            style="border-radius: 50px"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://lelogama.go-jek.com/cache/53/71/537196ead90ee5ba3815eb455a287a70.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            style="border-radius: 50px"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://lelogama.go-jek.com/cache/3a/79/3a79ba0f22d49ccaf2cc822a003d7db0.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
    // eslint-disable-next-line no-unused-vars
      onSlideStart(slide) {
        this.sliding = false
      },
    // eslint-disable-next-line no-unused-vars
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style  scoped>
.carousel {
    padding: 50px;
    /* margin-top: 100px; */
}

.carousel-item {
    max-height: 800px;
    border-radius: 50px;
}

b-carousel-slide img {
    border-radius: 50px;
}

</style>