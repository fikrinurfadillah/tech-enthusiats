<template>
  <div class="card shadow-lg">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body md:p-10 p-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "header", "body"],
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
  /* padding: 20px; */
  text-align: center;
  
  background: #fdfbfb;
  color: black;
  border-radius: 0 0 1rem 1rem;
  /* color: black; */
}


.card-header {
  padding: 20px;
  border-radius: 1rem 1rem 0 0 !important;
}

.card-header {
  background: #33cc33;
}


@media (max-width: 720px) {
  
  /* .row {
    margin: auto;
  } */

  /* .header h1 {
    font-size: 1.6rem;
    margin: 2rem 0;
  } */
/* 
  .card {
    width: 80%;
    margin: auto;
  } */
/* 
  .card-header h3 {
    font-size: 1.3rem;
  }

  .card-body p {
    font-size: 1rem;
  } */
}
</style>