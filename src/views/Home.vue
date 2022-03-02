<template>
  <div class="home">
    <NavBar />
    <HeroImage />
    <Carousel />
    <Card title="Benefit Join With AEJ"  textButton="Find out here"/>
    <coloum-1></coloum-1>
    <!-- <coloum-2></coloum-2> -->
    <faq-section></faq-section>    
    <Footer />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import HeroImage from '@/components/HeroImage.vue'
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'
// import Coloum1 from '@/components/Coloum1.vue'
// import Coloum2 from '@/components/Coloum2.vue'
import FaqSection from '@/components/FaqSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    NavBar,
    HeroImage,
    Carousel,
    Card,
    // Coloum1,
    // Coloum2,
    FaqSection,
    Footer
  }
}
</script>
