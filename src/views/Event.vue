<template>
  <div>
    <NavBar />
    <div class="event-header">
      <h1 class="event-header__title">Whats on AEJ</h1>
      <h2 class="event-header__subtitle">
        Cerita mitra, berita seru, dan promo terbaru. Baca semua artikel soal
        AEJ di sini.
      </h2>
      <div class="input-group mb-3 event-header__forms">
        <input
          type="text"
          class="form-control event-header__forms-input"
          placeholder="Search Event Post.."
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary event-header__forms-button"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div class="event-body">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-4"
          v-for="event in events"
          :key="event.id"
        >
          <router-link :to="'/event/'+ event.id">
            <img :src="event.imgLink" alt="" />

            <h3>{{ event.title }}</h3>
          </router-link>

          <p>{{ event.date }}</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  inject: ['events'],
  // data() {
  //   return {
  //     events: [
  //       {
  //         id: 1,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/55/d8/55d84b42455ee84d04aaf18453d28228.webp",
  //         title: "Promo Bluebird & MyBluebird:",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 2,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/55/d8/55d84b42455ee84d04aaf18453d28228.webp",
  //         title: "Promo Tri: Top Up Paket Data & Pulsa",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 3,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/58/07/580794c1572c78b4001b3dcf579f5d30.webp",
  //         title: "BARU: Semua Barang Impian",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 4,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
  //         title: "Promo Hypermart: Cashback &",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 5,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/9e/f2/9ef251da5af3105edf50bdd08e0619f5.webp",
  //         title: "Promo Kopi Kenangan: Kopi",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 6,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/5c/94/5c947cb89fdc6c7ce19eff41cc10aed5.webp",
  //         title: "Promo McDonald's: Cashback 25%",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 7,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
  //         title: "Promo DAN+DAN: Cashback 40%",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 8,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
  //         title: "Promo Alfamidi: Cashback & Diskon",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //       {
  //         id: 9,
  //         imgLink:
  //           "https://lelogama.go-jek.com/cache/55/d8/55d84b42455ee84d04aaf18453d28228.webp",
  //         title: "Promo Alfagift: Cashback hingga",
  //         date: "GoPay / 4 Feb 2022",
  //       },
  //     ],
  //   };
  // },

  // provide() {
  //   return {
  //     events: this.events
  //   };
  // },
  
};
</script>

<style scoped>
.event-header {
  text-align: left;
  width: 100%;
  margin-left: 117px;
}

.event-header__title {
  color: black;
  font-weight: 800;
  padding-top: 32px;
  font-size: 3rem;
}
.event-header__subtitle {
  padding-bottom: 32px;
  font-size: 1.125rem;
  line-height: 27px;
}

.event-header__forms {
  width: 50%;
}

.event-header__forms-input {
  padding: 12px 24px;
  border-color: black;
  margin-right: 1rem;
  border-radius: 24px;
  border-top-right-radius: 24px !important;
  border-bottom-right-radius: 24px !important;
}

.event-header__forms-button {
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  background: #00880d;
}

.event-body {
  /* padding: 60px; */
  /* text-align: left; */
  width: 85%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}

.event-body a {
  text-decoration: none;
}

.event-body img {
  width: 100%;
  border-radius: 24px;
}

.event-body h3 {
  font-size: 1.625rem;
  text-align: left;
  font-weight: bold;
  color: black;
  margin-top: 10px;
}

.event-body p {
  font-size: 1rem;
  line-height: 24px;
  text-align: left;
}

@media (min-width: 992px) {
  .event-header {
    max-width: 864px;
  }
}
</style>