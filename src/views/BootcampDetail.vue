<template>
  <div>
    <!-- <NavBar /> -->
    <div class="bootcamp-detail">
      <HeroImage />
      <section>
        <h1 class="text-3xl md:text-4xl my-5 font-bold">Why Bootcamp at AEJ</h1>

        <div class="grid grid-cols-2 gap-2 w-5/6 m-auto">
          <card>
            <template v-slot:header>
              <h2 class="text-2xl">Some Text</h2>
            </template>
            <template v-slot:default>
              <ul>
                <li>Materi Terupdate</li>
                <li>1-On-1 Mentoring</li>
              </ul>
            </template>
          </card>
          <card>
            <template v-slot:header>
              <h2 class="text-2xl">Some Text</h2>
            </template>
            <template v-slot:default>
              <ul>
                <li>Di Luar Jam Kerja</li>
                <li> Invite to private Discord</li>
                <li>Sertifikat</li>
              </ul>
            </template>
          </card>
        </div>
      </section>
      <section>
        <h1 class="text-3xl md:text-4xl my-5 font-bold">
          Highlights kurikulum
        </h1>
        <div class="grid grid-cols-2 gap-2 w-5/6 m-auto">
          <card>
            <template v-slot:header>
              <h2 class="text-2xl">Some Text</h2>
            </template>
            <template v-slot:default>
              <p>
                We are one of the biggest Tech Community in Indonesia. We help
                connecting tech enthusiast to meet others, Grow, Learn, Share
                and make a good relation among us.
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
        <h1 class="text-3xl md:text-4xl my-5 font-bold">Career Support</h1>

        <div class="grid grid-cols-2 gap-2 w-5/6 m-auto">
          <card>
            <template v-slot:header>
              <h2 class="text-2xl">Some Text</h2>
            </template>
            <template v-slot:default>
              <p>
                Team kami akan mengajarkan anda cara membuat CV dan Portofolio
                yang professional dan relevan
              </p>
            </template>
          </card>
          <card>
            <template v-slot:header>
              <h2 class="text-2xl">Some Text</h2>
            </template>
            <template v-slot:default>
              <p>
                Team kami akan mengajarkan anda cara melakukan proses interview
                dan kepercayaan diri
              </p>
            </template>
          </card>
        </div>
      </section>

      <div class="portfolio-alumni mt-5">
        <h1 class="text-3xl">Portfolio Alumni</h1>
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
        <h1 class="text-3xl">Review Graduates</h1>
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
      <section class="mb-5">
        <h1 class="text-3xl md:text-5xl mt-5 font-bold">FAQ</h1>
        <FaqSection
         
          v-for="(faq, i) in faqs"
          :key="i"
          :title="faq.header"
          :faq="faq"
          :index="i"
          :open="faq.open"
        />
      </section>

      <div>
        <router-link class="bootcamp-detail__cta" to="/register">
          Daftar Sekarang
        </router-link>
      </div>
    </div>
    <!-- <Footer class="footer-bootcamp" /> -->
  </div>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";
import Card from "@/components/Card.vue";
import FaqSection from "@/components/FaqSection.vue";
export default {
  components: {
    // NavBar,
    HeroImage,
    // Footer,
    Card,
    FaqSection,
  },
  props: ["bootcamps"],

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
      faqs: [
        {
          id: "1",
          header: " Apa syarat mengikuti bootcamp ini?",
          body: "https://linktr.ee/aejkt",
          open: false,
        },
        {
          id: "2",
          header: "Apa yang akan saya dapatkan setelah mengikut botcamp ini?",
          body: "https://linktr.ee/aejkt",
          open: false,
        },
        {
          id: "3",
          header: "Berapa lama bootcamp berlangsung?",
          body: "https://linktr.ee/aejkt",
          open: false,
        },
        {
          id: "4",
          header: "Berapa murid per kelasnya?",
          body: "https://linktr.ee/aejkt",
          open: false,
        },
        {
          id: "5",
          header: "Bagaimana mengamankan slot untuk mengikuti bootcamp ini?",
          body: "https://linktr.ee/aejkt",
          open: false,
        },
        {
          id: "6",
          header: "Apakah ada program cicilan untuk bootcamp ini?",
          body: "https://linktr.ee/aejkt",
          open: false,
        },
        {
          id: "7",
          header:
            "Apakah saya mendapatkan sertifikat setelah lulus bootcamp ini?",
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

.bootcamp-detail__cta {
  display: block;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  background: #00880d;
  color: white;
  border-radius: 25px;
}
</style>
