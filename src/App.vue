<template>
  <div id="app">
    <nav-bar></nav-bar>
    <hero-image></hero-image> 
    <carousel></carousel>
    <card></card>
    <coloum-1></coloum-1>
    <tab-panel></tab-panel>
    <Table/>
    <faq-section></faq-section>
    <coloum-2></coloum-2>
    <Footer/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import HeroImage from './components/HeroImage.vue'
import Carousel from './components/Carousel.vue'
import Card from './components/Card.vue'
import Coloum1 from './components/Coloum1.vue'
import TabPanel from './components/TabPanel.vue'
import Table from './components/Table.vue'
import FaqSection from './components/FaqSection.vue'
import Coloum2 from './components/Coloum2.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,    
    NavBar,
    HeroImage,
    Carousel,
    Card,
    Coloum1,
    TabPanel,
    Table,
    FaqSection,
    Coloum2,
    Footer
  }
}
</script>

<style>

html {
  margin: 0px !important;
  padding: 0px !important;
}


#app {
  font-family:  'Poppins', sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}
</style>
