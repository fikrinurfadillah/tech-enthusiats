<template>
  <div class="card shadow-lg">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
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
.header h1 {
  font-size: 37px;
  color: black;
  font-weight: 700;
}
.card {
  color: white;
  border-radius: 1rem;
  border: none;
}

.card h3 {
  font-weight: 700;
  font-size: 29px;
}

.card p {
  /* font-weight: 0; */
  font-size: 21px;
  line-height: 28px;
  min-height: 250px;
}

.card-body {
  padding: 20px;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  /* color: black; */
}

.card a {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: #00880d;
  color: white;
}

.card-header {
  padding: 20px;
  border-radius: 1rem 1rem 0 0 !important;
}

.card-header {
  background: #33cc33;
}

.card-body {
  background: #fdfbfb;
  color: black;
}

@media (max-width: 720px) {
  
  .row {
    margin: auto;
  }

  .header h1 {
    font-size: 1.6rem;
    margin: 2rem 0;
  }

  .card {
    width: 80%;
    margin: auto;
  }

  .card-header h3 {
    font-size: 1.3rem;
  }

  .card-body p {
    font-size: 1rem;
  }
}
</style>