<template>
  <div>
    <academy-tab-nav></academy-tab-nav>
  </div>
</template>

<script>
export default {
  components: {
    'academy-tab-nav': () => import ('@/views/Academy/components/AcademyTabNav.vue')
  },
};
</script>

<style scoped>
.no-shadow {
    box-shadow: none !important;
    border-bottom: 1px solid rgb(232, 232, 232);
}


</style>