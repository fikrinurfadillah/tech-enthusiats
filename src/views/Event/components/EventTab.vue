<template>
  <div>
    <div class="event-tab">
      <div class="event-tab__links">
        <button
          @click="setSelectedTab('Android')"
          class="event-tab__link"
          :class="{ active: selectedTab === 'Android' }"
        >
          Android
        </button>
        <button
          @click="setSelectedTab('Kotlin')"
          class="event-tab__link"
          :class="{ active: selectedTab === 'Kotlin' }"
        >
          Kotlin
        </button>
        <button
          @click="setSelectedTab('Flutter')"
          class="event-tab__link"
          :class="{ active: selectedTab === 'Flutter' }"
        >
          Flutter
        </button>
        <button
          @click="setSelectedTab('IOS')"
          class="event-tab__link"
          :class="{ active: selectedTab === 'IOS' }"
        >
          IOS
        </button>
      </div>
    </div>

    <div class="event-content">
      <EventAndroid v-if="selectedTab === 'Android'"></EventAndroid>
      <EventKotlin v-if="selectedTab === 'Kotlin'"></EventKotlin>
      <!-- <Flutter v-if="selectedTab === 'Flutter'"></Flutter> -->
    </div>
  </div>
</template>

<script>
import EventAndroid from "@/views/Event/components/EventAndroid.vue";
import EventKotlin from "@/views/Event/components/EventKotlin.vue";

export default {
  components: {
    EventAndroid,
    EventKotlin,
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
.event-tab {
  position: fixed;
  top: 80px;
  width: 100%;
  text-align: left;
  background: white;
  z-index: 10;
  padding: 0.5rem 0;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
}

.event-tab__links {
  width: 80%;
  display: flex;
  margin: auto;
}

.event-tab__link {
  margin-right: 1rem;
}

.event-tab__link {
  border-radius: 16px;
  border: 1px solid #e8e8e8;
  padding: 6px 12px;
  color: #bbb;
  background: white;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.event-tab__link:hover {
  background: green;
  color: white;
}

.active {
  background: green;
  color: white;
}

.event-content {
  position: relative;
  top: 51px;
}
</style>