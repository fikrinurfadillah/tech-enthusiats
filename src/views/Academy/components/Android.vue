<template>
  <div class="bootcamp">
    <!-- <HeroImage /> -->

    <div class="bootcamp-list">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
        <div
          class=""
          v-for="bootcamp in bootcamps"
          :key="bootcamp.id"
        >
          <router-link :to="'/academy/bootcamp/' + bootcamp.id">
            <div class="bootcamp-container">
              <div class="card">
                <div class="card-header">
                  <img :src="bootcamp.imgLink" alt="" />
                </div>
                <div class="card-body">
                  <h5>{{ bootcamp.name }}</h5>
    
                  <p>{{ bootcamp.desc }}</p>

                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- <Card title="Why Bootcamp at AEJ" class="card-bootcamp"/>
      <Card title="Highlights Kurikulum"/>
      <Card title="Career Support"/> -->
    <faq-section></faq-section>
    <Footer />
    <!-- <h1>Bootcamp</h1> -->
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
      bootcamps: [
        {
          id: 1,
          name: "Fullstack JavaScript",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/fullstack-javascript-immmersive.webp",
        },
        {
          id: 2,
          name: "Kotlin Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/data-science.webp",
        },
        {
          id: 3,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
        {
          id: 4,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
        {
          id: 5,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
        {
          id: 6,
          name: "Flutter Developer",
          price: "Rp. 500.000",
          desc: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
          imgLink:
            "https://www.hacktiv8.com/images/pages/category/intro-to-python.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bootcamp-list {
  margin-top: 100px;
}

.bootcamp-list a {
  text-decoration: none;
}

.bootcamp-container {
  width: 85%;
  margin: auto;
}

.card-header {
  padding: 0;
  /* background: #772583; */
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.card-header img {
  width: 100%;
  padding: 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.card {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  background: rgb(255, 253, 253);
  color: rgb(56, 56, 56);
  padding: 0;
  border: none;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

}

.card-body {
  padding: 0;
}

.card-body h5 {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-align: left;
  /* text-overflow: ellipsis; */
  -webkit-line-clamp: 1; /* number of lines to show */
  /* line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical; */
  padding: 1rem;
}

.card-body p {
  padding: 1rem;
  /* font-size: 1.2rem; */
  font-weight: 500;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  text-align: left;
  overflow-y: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
/* 
.bootcamp-list img {
  width: 100%;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
} */

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