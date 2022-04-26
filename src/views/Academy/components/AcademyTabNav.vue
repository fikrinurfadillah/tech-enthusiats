<template>
  <div>
    <div class="academy-tab">
      <div class="academy-tab__links">
        <button
          @click="setSelectedTab('Android')"
          class="academy-tab__link"
          :class="{ active: selectedTab === 'Android' }"
        >
          Android
        </button>
        <button
          @click="setSelectedTab('Kotlin')"
          class="academy-tab__link"
          :class="{ active: selectedTab === 'Kotlin' }"
        >
          Kotlin
        </button>
        <button
          @click="setSelectedTab('Flutter')"
          class="academy-tab__link"
          :class="{ active: selectedTab === 'Flutter' }"
        >
          Flutter
        </button>
        <button
          @click="setSelectedTab('IOS')"
          class="academy-tab__link"
          :class="{ active: selectedTab === 'IOS' }"
        >
          IOS
        </button>
      </div>
    </div>
    <div class="academy-content">
      <Android v-if="selectedTab === 'Android'"></Android>
      <Kotlin
        v-if="selectedTab === 'professional-dev'"
      ></Kotlin>
      <Flutter v-if="selectedTab === 'Flutter'"></Flutter>
    </div>
  </div>
</template>

<script>
import Android from "@/views/Academy/components/Android.vue";
import Kotlin from "@/views/Academy/components/Kotlin.vue";
import Flutter from "@/views/Academy/components/Flutter.vue";
// import IOS from "@/components/IOS.vue";
export default {
  components: {
    Android,
    Kotlin,
    Flutter,
  },
  data() {
    return {
      selectedTab: "Android",
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
  display: flex;
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

@media (max-width: 720px) {
  .academy-tab {
    overflow-x: hidden;
  }
  .academy-tab__links {
    width: 100%;

  }

  .academy-tab__link {
    font-size: .7rem;
  }
}
</style>