<template>
  <div class="corporate">
    <!-- <HeroImage /> -->

    <div class="corporate-list">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-4"
          v-for="corporate in corporates"
          :key="corporate.id"
        >
        <router-link :to="'/academy/corporate/'+corporate.id">
          <div class="corporate-container">
            <div class="card">
              <div class="card-header">
                <h5>{{ corporate.name }}</h5>
              </div>
              <div class="card-body">
                <img :src="corporate.imgLink" alt="" />

                <label>{{ corporate.price }}</label>

                <p>{{corporate.desc}}</p>


                <!-- <button>Download Sylabus</button> -->
              </div>
            </div>
          </div>
        </router-link>
        </div>
      </div>
    </div>
    <faq-section></faq-section>
  </div>
</template>

<script>
// import FaqSection from "@/components/FaqSection.vue";

export default {
  components: {
    // FaqSection,
    'faq-section': () => import('@/components/FaqSection.vue')
  },
  data() {
    return {
      corporates: [
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
.corporate-list {
  margin-top: 100px;
}

.corporate-list a {
  text-decoration: none;
}

.corporate-container {
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

.corporate-list img {
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