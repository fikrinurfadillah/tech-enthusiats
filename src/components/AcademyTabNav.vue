<template>
  <div>
    <div class="academy-tab">
      <div class="academy-tab__links">
        <button
          @click="setSelectedTab('bootcamp')"
          class="academy-tab__link"
          :class="{ active: selectedTab === 'bootcamp' }"
        >
          Bootcamp
        </button>
        <button
          @click="setSelectedTab('professional-dev')"
          class="academy-tab__link"
          :class="{ active: selectedTab === 'professional-dev' }"
        >
          Professional Development
        </button>
        <button
          @click="setSelectedTab('corporate')"
          class="academy-tab__link"
          :class="{ active: selectedTab === 'corporate' }"
        >
          Corporate
        </button>
      </div>
    </div>
    <div class="academy-content">
      <bootcamp v-if="selectedTab === 'bootcamp'"></bootcamp>
      <professional-dev
        v-if="selectedTab === 'professional-dev'"
      ></professional-dev>
      <corporate v-if="selectedTab === 'corporate'"></corporate>
    </div>
  </div>
</template>

<script>
import Bootcamp from "@/components/Bootcamp.vue";
import ProfessionalDev from "@/components/ProfessionalDev.vue";
import Corporate from "@/components/Corporate.vue";
export default {
  components: {
    Bootcamp,
    ProfessionalDev,
    Corporate,
  },
  data() {
    return {
      selectedTab: "bootcamp",
    };
  },

  methods: {
    setSelectedTab(cmp) {
      this.selectedTab = cmp;
    },
  },
};
</script>

<style scoped>
.academy-tab {
  position: fixed;
  top: 80px;
  width: 100%;
  text-align: left;
  background: white;
  z-index: 10;
  padding: 0.5rem 0;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
}

.academy-tab__links {
  width: 80%;
  margin: auto;
}

.academy-tab__link{
  margin-right: 1rem;
}

.academy-tab__link {
  border-radius: 16px;
  border: 1px solid #e8e8e8;
  padding: 6px 12px;
  color: #bbb;
  background: white;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.academy-tab__link:hover {
  background: green;
  color: white;
}

.active {
  background: green;
  color: white;
}

.academy-content {
  position: relative;
  top: 51px;
}
</style>