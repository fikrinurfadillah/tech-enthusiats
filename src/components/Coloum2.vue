<template>
    <image-coloum>
        <template v-slot:coloum1>
            <img :src="imageLink">
        </template>
        <template v-slot:coloum2>
            <div class="content-text ">
                <h2>Learn more about GoClub here!</h2>
                <p>Collect as much XP as you can to quickly occupy the throne! learn all about it here!</p>
                <a href="#"><p>Read more</p></a>  
            </div>
        </template>
    </image-coloum>
        
</template>


<script>
import imageColoum from './imageColoum.vue'

export default {
  components: { imageColoum },
    data() {
        return {
            imageLink: 'https://lelogama.go-jek.com/cache/5c/99/5c99b03e3b9cec2b2ee4c3049a3bd210.webp'
        }
    }
}
</script>

<style scoped>

img {
    width: 555px;
    min-height: 350px;
    border-radius: 40px;
}

.content-text {
    margin-left: 50px;
}

.content-text h2 {
    font-size: 40px;
    color: black;
    font-weight: 700;
    margin-top: 80px;
    text-align: left;
    /* font-size: 3.07692rem; */
}

.content-text p {
    color: black;
    text-align: left;
    font-size: 17px;
    margin-top: 30px;
}

.content-text a {
    color: green !important;
}

</style>