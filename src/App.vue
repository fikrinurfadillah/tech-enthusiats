<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    Footer
    return {
      events: [
        // {
        //   id: '1',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/55/d8/55d84b42455ee84d04aaf18453d28228.webp",
        //   title: "Promo Bluebird & MyBluebird:",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '2',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/55/d8/55d84b42455ee84d04aaf18453d28228.webp",
        //   title: "Promo Tri: Top Up Paket Data & Pulsa",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '3',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/58/07/580794c1572c78b4001b3dcf579f5d30.webp",
        //   title: "BARU: Semua Barang Impian",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '4',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
        //   title: "Promo Hypermart: Cashback &",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '5',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/9e/f2/9ef251da5af3105edf50bdd08e0619f5.webp",
        //   title: "Promo Kopi Kenangan: Kopi",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '6',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/5c/94/5c947cb89fdc6c7ce19eff41cc10aed5.webp",
        //   title: "Promo McDonald's: Cashback 25%",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '7',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
        //   title: "Promo DAN+DAN: Cashback 40%",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '8',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
        //   title: "Promo Alfamidi: Cashback & Diskon",
        //   date: "GoPay / 4 Feb 2022",
        // },
        // {
        //   id: '9',
        //   imgLink:
        //     "https://lelogama.go-jek.com/cache/55/d8/55d84b42455ee84d04aaf18453d28228.webp",
        //   title: "Promo Alfagift: Cashback hingga",
        //   date: "GoPay / 4 Feb 2022",
        // },
      ],
    };
  },

  provide() {
    return {
      events: this.events
    }
  }
}
</script>

<style>
#app {
  top: 70px;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  position: relative;
  /* top: 1px; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
