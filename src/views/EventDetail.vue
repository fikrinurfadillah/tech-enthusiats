<template>
  <div>
    <NavBar />
    <div class="event-detail">
      <div class="event-detail__overview">
        <h1>{{ event.title }}</h1>
        <label>{{ event.date }}</label>
        <img :src="event.imgLink" alt="" />
        <p>
          Apakah kamu pelanggan setia taksi Bluebird? Selain aman dan nyaman,
          kini pesan dan bayarnya juga semakin gampang! Kamu bisa pesan layanan
          taksi Bluebird melalui aplikasi MyBlueBird dan bayar pakai GoPay biar
          praktis. Ada banyak promo cashback Bluebird yang bisa kamu nikmati
          juga di QRIS dan aplikasi MyBlueBird.
        </p>
        <p>Yuk, cek info promo selengkapnya di bawah ini!</p>
        <ul>
          <li>Promo cashback 70% (maksimum Rp10.000)</li>
          <li>Promo cashback 70% (maksimum Rp10.000)</li>
          <li>Promo cashback 70% (maksimum Rp10.000)</li>
        </ul>
      </div>

      <hr />

      <div class="event-detail__more-details">
        <h3>{{event.title}}</h3>
        <ul>
          <li>Periode promo hingga 28 Februari 2022.</li>
          <li>
            Promo berupa cashback 70% (maksimum Rp10.000) untuk transaksi
            menggunakan GoPay.
          </li>
          <li>Berlaku 1x transaksi/akun/minggu selama periode promo</li>
          <li>Berlaku untuk layanan Bluebird, Silverbird.</li>
          <li>Berlaku untuk pembayaran menggunakan GoPay.</li>
          <li>
            Promo dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
          </li>
          <li>
            GoPay berhak menahan dan/atau membatalkan promo kepada pengguna
            dan/atau di rekan usaha tertentu sewaktu-waktu termasuk apabila
            transaksi yang mendasari promo dibatalkan dan/atau pengguna meminta
            refund atas transaksi yang mendasari promo, ditemukan tindakan
            penyalahgunaan (abusive), kecurangan (fraudulent), dan/atau
            aktivitas mencurigakan lainnya.
          </li>
        </ul>
        <h3>2. Promo Weekday: Diskon hingga Rp5.000</h3>
        <ul>
          <li>Periode promo hingga 28 Februari 2022</li>
          <li>Kode Promo: BBGOPAY5.</li>
          <li>Promo berupa diskon hingga Rp5.000.</li>
          <li>Minimum transaksi Rp30.000.</li>
          <li>
            Berlaku 1 kali transaksi per akun MyBluebird selama periode promo.
          </li>
        </ul>
      </div>
      <div>
        <a href="" class="event-detail__cta">Daftar Sekarang</a>
      </div>
    </div>

    <div class="latest-event">
      <h2>Event Terbaru Kami</h2>

      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-sm-6 mt-5"
          :key="event.id"
          v-for="event in events"
        >
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <img :src="event.imgLink" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <h3>{{ event.title }}</h3>
              <p>{{ event.date }}</p>
            </div>
          </div>
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
  data() {
    return {
      event: {
        },

      // events: [
      //   {
      //     id: 6,
      //     imgLink:
      //       "https://lelogama.go-jek.com/cache/5c/94/5c947cb89fdc6c7ce19eff41cc10aed5.webp",
      //     title: "Promo McDonald's: Cashback 25%",
      //     date: "GoPay / 4 Feb 2022",
      //   },
      //   {
      //     id: 7,
      //     imgLink:
      //       "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
      //     title: "Promo DAN+DAN: Cashback 40%",
      //     date: "GoPay / 4 Feb 2022",
      //   },
      //   {
      //     id: 8,
      //     imgLink:
      //       "https://lelogama.go-jek.com/cache/c4/de/c4de77739bd9550ab0e319250f49fe27.webp",
      //     title: "Promo Alfamidi: Cashback & Diskon",
      //     date: "GoPay / 4 Feb 2022",
      //   },
      //   {
      //     id: 9,
      //     imgLink:
      //       "https://lelogama.go-jek.com/cache/55/d8/55d84b42455ee84d04aaf18453d28228.webp",
      //     title: "Promo Alfagift: Cashback hingga",
      //     date: "GoPay / 4 Feb 2022",
      //   },
      // ],
    };
  },

  created() {
    const eventId = this.$route.params.eventId;
    const selectedEvent = this.events.find((event) => event.id === eventId);
    this.event = selectedEvent
    // this.event.id = selectedEvent.id;
    // this.event.title = selectedEvent.title;
    // this.event.date = selectedEvent.date;
    // this.event.imgLink = selectedEvent.imgLink;
    console.log(selectedEvent)
  },

  // mounted() {
  //   console.log(this.events)
  // }

  //   methods: {
  //       setEvent() {
  //           this.event = this.$route.params.id
  //       }
  //   },
};
</script>

<style scoped>
.event-detail {
  margin-top: 30px;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}

.event-detail__overview h1 {
  color: black;
  font-weight: 800;
  font-size: 2.25rem;
  margin-bottom: 1rem;
  line-height: 54px;
}

.event-detail__overview label {
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 40px;
}

.event-detail__overview p {
  color: #101820;
  font-weight: normal;
  margin-top: 30px;
  font-size: 1.125rem;
}

.event-detail__overview li {
  color: green;
  font-size: 1.125rem;
}

.event-detail__more-details h3 {
  color: black;
  font-weight: 800;
  font-size: 1.875rem;
}

.event-detail__more-details li {
  color: #101820;
  margin-bottom: 5px;
}

.event-detail__cta {
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

.latest-event {
  text-align: left;
  margin-top: 100px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

.latest-event h2 {
  color: black;
  font-weight: 800;
  font-size: 2.25rem;
}

.latest-event img {
  width: 100%;
  border-radius: 15px;
}

.latest-event h3 {
  color: black;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 32px;
}
</style>