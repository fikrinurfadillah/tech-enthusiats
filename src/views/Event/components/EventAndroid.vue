<template>
  <div>
    <div class="event-header">
      <h1 class="event-header__title">Whats on Android</h1>
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
      <div class="row" v-if="events">
        <div
          class="col-lg-4 col-md-4 col-sm-4"
          v-for="event in events"
          :key="event.id"
        >
          <router-link :to="'/event/' + event.id">
            <img :src="event.imgLink" alt="" />

            <h3>{{ event.title }}</h3>
          </router-link>

          <p>{{ event.date }}</p>
        </div>
      </div>
      <div >
        <h1 class="text-4xl font-bold">Coming Soon....</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["events"],
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
  min-height: 300px;
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

@media (max-width: 720px) {

  .event-header {
    margin: 0;
    padding: 1rem;
  }
  .event-header__title {
    font-size: 2rem;
  }

  .event-header__forms {
    width: 100%;
  }
}
</style>