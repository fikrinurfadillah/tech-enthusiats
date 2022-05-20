<template>
  <section>
    <div class="faq">
      <div
        @click="toggleFaqs(index)"
        class="row card align-items-center"
        :key="faq.id"
      >
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6">
              <p class="card-title">{{ faq.header }}</p>
            </div>
            <div class="col-md-6 icon">
              <i
                :class="faq.open ? 'fas fa-angle-up' : 'fas fa-angle-down'"
              ></i>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <a
                v-if="faq.open"
                class="card-body"
                :href="faq.body"
                target="blank"
                >{{ faq.body }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "faq", "index", "open"],
  inject: ["faqs"],
  
  methods: {
    toggleFaqs: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
  },
};
</script>

<style scoped>
h1 {
  color: black;
  text-align: left;
  font-weight: 700;
  padding-bottom: 50px;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  /* margin-left: auto;
  margin-right: auto; */
  font-weight: 700;
  /* width: 1200px; */
  text-align: left;
  padding: 20px;
  transition: 0.3s;
  border-radius: 8px;
  cursor: pointer;
}
.card h5 {
  color: black;
}

.card-title {
  color: black;
  font-size: 18px;
  font-weight: 700;
}

.card-body {
  font-size: 18px;
  font-weight: normal;
  padding: 0;
}

.icon {
  text-align: -webkit-right;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.faq {
  margin-top: 30px;
  padding-left: 90px;
  padding-right: 90px;
}

.btn {
  margin-top: 50px;
}

a {
  color: #00b050;
  text-decoration: none;
  border-radius: 1.75rem;
  /* background-color: #00880d; */
  /* padding: 12px 15px; */
  /* min-height: 48px; */
}

@media (max-width: 720px) {
  .faq {
    padding: 0;
    width: 85%;
    margin: auto;
  }
}
</style>
