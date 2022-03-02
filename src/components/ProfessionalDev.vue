<template>
  <div class="profDev">
    <!-- <HeroImage /> -->

    <div class="profDev-list">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-4"
          v-for="profDev in profDevs"
          :key="profDev.id"
        >
        <router-link :to="'/academy/profDev/'+profDev.id">
          <div class="profDev-container">
            <div class="card">
              <div class="card-header">
                <h5>{{ profDev.name }}</h5>
              </div>
              <div class="card-body">
                <img :src="profDev.imgLink" alt="" />

                <label>{{ profDev.price }}</label>

                <p>{{profDev.desc}}</p>


                <!-- <button>Download Sylabus</button> -->
              </div>
            </div>
          </div>
        </router-link>
        </div>
      </div>
    </div>

    <!-- <Card title="Why profDev at AEJ" class="card-profDev"/>
      <Card title="Highlights Kurikulum"/>
      <Card title="Career Support"/> -->
    <faq-section></faq-section>
    <Footer />
    <!-- <h1>profDev</h1> -->
  </div>
</template>

<script>
// import HeroImage from "@/components/HeroImage.vue";
// import Card from '@/components/Card.vue'
import FaqSection from "@/components/FaqSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    // HeroImage,
    // Card,
    FaqSection,
    Footer,
  },
  data() {
    return {
      profDevs: [
        {
          id: 1,
          name: "Fullstack JavaScript",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/fullstack-javascript-immmersive.webp",
        },
        {
          id: 2,
          name: "Kotlin Android Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/data-science.webp",
        },
        {
          id: 3,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
        {
          id: 4,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
        {
          id: 5,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
        {
          id: 6,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.profDev-list {
  margin-top: 100px;
}

.profDev-list a {
  text-decoration: none;
}

.profDev-container {
  width: 70%;
  margin: auto;
}

.card-header {
  background: #772583;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.card {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 15px;
  background: #695396;
  color: white;
}

.card-body {
  padding: 0;
}

.card-body p {
  padding: 1rem;
}

.profDev-list img {
  width: 100%;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

/* .card-body button {
  width: 100%;
  padding: 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #00880d;
  color: white;
  outline: none;
  border: none;
  margin-top: 20px;
} */
</style>