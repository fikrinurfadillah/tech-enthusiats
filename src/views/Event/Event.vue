<template>
  <div class="event">
    <!-- <NavBar  class="no-shadow"/> -->
    <event-tab></event-tab>

    
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";
// import Footer from "@/components/Footer.vue";
import EventTab from "@/views/Event/components/EventTab.vue"

export default {
  components: {
    // NavBar,
    // Footer,
    EventTab
  },
  // inject: ['events'],
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

.no-shadow {
    box-shadow: none !important;
    border-bottom: 1px solid rgb(232, 232, 232);
}




</style>