<template>
  <div class="home">
    <NavBar />
    <section>
      <HeroImage />
    </section>
    <section>
      <Carousel />
    </section>
    <section>
      <h1 class="text-4xl my-5 font-bold">Benefit Join with Aej</h1>
      <div class="grid grid-cols-2 gap-4 w-5/6 m-auto">
        <card>
          <template v-slot:header>
            <h2 class="text-2xl">Some Text</h2>
          </template>
          <template v-slot:default>
            <p>
              We are one of the biggest Tech Community in Indonesia. We help
              connecting tech enthusiast to meet others, Grow, Learn, Share and
              make a good relation among us.
            </p>
          </template>
        </card>
        <card>
          <template v-slot:header>
            <h2 class="text-2xl">Some Text</h2>
          </template>
          <template v-slot:default>
            <p>
              We have several communities like Android Enthusiast Jakarta, IOS
              Enthusiast Jakarta, Flutter Enthusiast Jakarta and General
            </p>
          </template>
        </card>
      </div>
    </section>
    <section>
      <faq-section></faq-section>
    </section>
    
    <Footer />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HeroImage from "@/components/HeroImage.vue";
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/Card.vue";
// import Coloum1 from '@/components/Coloum1.vue'
// import Coloum2 from '@/components/Coloum2.vue'
import FaqSection from "@/components/FaqSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    NavBar,
    HeroImage,
    Carousel,
    Card,
    // Coloum1,
    // Coloum2,
    FaqSection,
    Footer,
  },
};
</script>
