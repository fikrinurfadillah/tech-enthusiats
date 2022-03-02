<template>
  <div>
    <NavBar class="no-shadow"/>
    <academy-tab-nav></academy-tab-nav>
    <!-- <HeroImage /> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AcademyTabNav from "@/components/AcademyTabNav.vue";

export default {
  components: {
    NavBar,
    // HeroImage,
    AcademyTabNav,
  },
};
</script>

<style scoped>
.no-shadow {
    box-shadow: none !important;
    border-bottom: 1px solid rgb(232, 232, 232);
}


</style>