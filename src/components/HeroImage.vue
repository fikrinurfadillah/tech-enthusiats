<template>
  <div class="hero-image">
    <h1 class="text-5xl">Welcome to Tech Enthusiast</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
}

.hero-image {
  position: relative;
  background: linear-gradient(to left, #000442 2%, rgba(255, 0, 0, 0.5)),
    url("../assets/hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
}

h1 {
  position: absolute;
  bottom: 50%;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>>
