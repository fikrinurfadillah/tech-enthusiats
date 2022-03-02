<template>
    <div class="hero-image">
        <div class="container">
           
        </div>
       
      
    </div>

</template>

<script>
export default {
  
}
</script>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
}

.hero-image {

  background-image:  url('https://lelogama.go-jek.com/cache/af/8f/af8ffcfc509e2a757a874d734d670e32.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.container {
    width: 100%;
    padding: auto;
    height: 500px;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
</style>>
