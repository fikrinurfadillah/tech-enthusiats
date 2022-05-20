<template>
  <div>
    <!-- <NavBar /> -->
    <div class="corporate-detail">
      <HeroImage />
      <Card
        title="Why corporate at AEJ"
        style="margin-top: 60px"
        textButton="Find Out Here"
      />
      <Card title="Highlights kurikulum" textButton="Download Silabus" />
      <Card title="Career Support" textButton="Find Out Here" />
      <div class="portfolio-alumni">
        <h1>Portfolio Alumni</h1>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4"
            v-for="portfolio in portfolios"
            :key="portfolio.id"
          >
            <div class="portfolio-card">
              <iframe
                width="100%"
                height="315"
                :src="portfolio.link"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <a :href="portfolio.link">{{ portfolio.name }}</a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                dolore recusandae ducimus possimus quo commodi. Similique
                pariatur a, earum necessitatibus aperiam dolore, voluptates
                ipsam voluptas adipisci reiciendis repudiandae facere quae.
              </p>
            </div>
            <!-- <img :src="event.imgLink" alt="" /> -->
          </div>
        </div>
      </div>
      <div class="review-graduates">
        <h1>Review Graduates</h1>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4"
            v-for="graduate in graduates"
            :key="graduate.id"
          >
            <div class="review-card">
              <img src="../assets/pp.png" alt="" />
              <h3>{{ graduate.Name }}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                dolore recusandae ducimus possimus quo commodi. Similique
                pariatur a, earum necessitatibus aperiam dolore, voluptates
                ipsam voluptas adipisci reiciendis repudiandae facere quae.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FaqSection />

      <div class="register-container">
        <div class="register-content">
          <h3>Mulai Karir di Bidang Teknologi</h3>
          <p>
            Saatnya untuk membangun karirmu di bidang teknologi. Mulai langkah
            awalmu untuk menjadi seorang Full Stack Developer bersama AEJ.
          </p>

          <router-link class="register-button" to="/CorporateRegister"> Daftar Sekarang </router-link>
        </div>
      </div>
    </div>
    <!-- <Footer class="footer-corporate"/> -->
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
import HeroImage from "@/components/HeroImage.vue";
import Card from "@/components/Card.vue";
import FaqSection from "@/components/FaqSection.vue";

// import Footer from "@/components/Footer.vue";
export default {
  components: {
    // NavBar,
    HeroImage,
    // Footer,
    Card,
    FaqSection,
  },
  props: ['corporates'],

  data() {
    return {
      portfolios: [
        {
          id: 1,
          name: "Applikasi A",
          link: "https://www.youtube.com/embed/UzKdy75GqXQ",
        },
        {
          id: 2,
          name: "Applikasi B",
          link: "https://www.youtube.com/embed/UzKdy75GqXQ",
        },
        {
          id: 3,
          name: "Applikasi C",
          link: "https://www.youtube.com/embed/UzKdy75GqXQ",
        },
      ],
      graduates: [
        {
          id: 1,
          Name: "Fikri Nurfadillah",
          imgLink: "",
          review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore recusandae ducimus possimus quo commodi. Similique pariatur a, earum necessitatibus aperiam dolore, voluptates ipsam voluptas adipisci reiciendis repudiandae facere quae.",
        },
        {
          id: 2,
          Name: "Fikri Nurfadillah",
          imgLink: "",
          review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore recusandae ducimus possimus quo commodi. Similique pariatur a, earum necessitatibus aperiam dolore, voluptates ipsam voluptas adipisci reiciendis repudiandae facere quae.",
        },
        {
          id: 3,
          Name: "Fikri Nurfadillah",
          imgLink: "",
          review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore recusandae ducimus possimus quo commodi. Similique pariatur a, earum necessitatibus aperiam dolore, voluptates ipsam voluptas adipisci reiciendis repudiandae facere quae.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.portfolio-alumni {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-alumni h1 {
  margin-bottom: 20px;
  font-weight: 800;
  color: black;
}

.portfolio-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  justify-content: space-between;
  border-radius: 25px;

  /* margin: 10px; */
  /* width: 40%; */
}

.portfolio-alumni a {
  /* font-weight: 800; */
  font-size: 2rem;
  color: black;
  text-decoration: none;
  /* text-align: left; */
}

.portfolio-alumni iframe {
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
}

.review-graduates {
  width: 90%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}

.review-graduates h1 {
  font-weight: bold;
  color: black;
  /* text-align: left; */
}

.review-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  justify-content: space-between;
  border-radius: 25px;

  /* margin: 10px; */
  /* width: 40%; */
}

.review-graduates img {
  width: 100%;
  border-radius: 15px;
}

.review-graduates h3 {
  text-align: left;
  padding: 16px 8px;
}

.review-graduates p {
  text-align: left;
  padding: 16px 8px;
}

.register-container {
  color: white;
  margin-top: 50px;
  background: url("https://www.hacktiv8.com/images/pattern/blue-pattern.webp");
}

.register-content {
  width: 80%;
  margin: auto;
  padding: 40px 16px;
}

.footer-corporate {
  margin-top: 0;
}
</style>