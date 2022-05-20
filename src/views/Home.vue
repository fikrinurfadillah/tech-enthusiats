<template>
  <div class="home">
    <section>
      <hero-image></hero-image>
    </section>
    <section>
      <carousel></carousel>
    </section>
    <section>
      <h1 class="text-3xl md:text-4xl my-5 font-bold">
        Benefit Join with Tech Enthusiast
      </h1>
      <div class="grid grid-cols-2 gap-2 w-5/6 md:w-3/4 m-auto card-container">
        <card>
          <template>
            <p class="text-sm md:text-lg">
              We are one of the biggest Tech Community in Indonesia. We help
              connecting tech enthusiast to meet others, Grow, Learn, Share and
              make a good relation among us.
            </p>
          </template>
        </card>
        <card>
          <template>
            <p class="text-sm md:text-lg">
              We have several communities like Android Enthusiast Jakarta, IOS
              Enthusiast Jakarta, Flutter Enthusiast Jakarta and General
            </p>
          </template>
        </card>
      </div>
    </section>
    <section>
      <h1 class="text-3xl md:text-5xl mt-5 font-bold">FAQ</h1>
      <faq-section
        v-for="(faq, i) in faqs"
        :key="i"
        :title="faq.header"
        :faq="faq"
        :index="i"
        :open="faq.open"
      ></faq-section>
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    "hero-image": () => import("@/components/HeroImage.vue"),
    carousel: () => import("@/components/Carousel.vue"),
    card: () => import("@/components/Card.vue"),
    "faq-section": () => import("@/components/FaqSection.vue"),
  },
  data() {
    return {
      faqs: [
        {
          id: "1",
          header: "Bagaimana cara untuk gabung di komunitas",
          body: "https://linktr.ee/aejkt",
          open: false,
        },
        
      ],
    };
  },
  provide() {
    return {
      faqs: this.faqs,
    };
  },
};
</script>
