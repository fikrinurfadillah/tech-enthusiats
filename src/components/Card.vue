<template>
  <div class="card shadow-lg">
    <div class="card-body ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["title", "header", "body"],
};
</script>

<style scoped>
/* .header h1 {
  font-size: 37px;
  color: black;
  font-weight: 700;
} */
.card {
  color: white;
  border-radius: 1rem;
  border: none;
}

.card-body {
  padding: 40px;
  text-align: center;
  background: #fdfbfb;
  color: black;
  border-radius:1rem;
}


.card-header {
  padding: 20px;
  border-radius: 1rem 1rem 0 0 !important;
}

.card-header {
  background: #00B050;
}


@media (max-width: 720px) {
  
  .card-body {
    padding: 10px;
  }
}
</style>