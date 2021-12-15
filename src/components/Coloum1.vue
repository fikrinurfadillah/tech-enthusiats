<template>
    <image-coloum>
        <template v-slot:coloum1>
            <img :src="imageLink">
        </template>
        <template v-slot:coloum2>
            <div class="content-text ">
                <h1>Join GoClub today!</h1>
                <p>Get the invitation to the club, program loyalty free of charge!</p>
                <a href="#"><p>Join now</p></a>  
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
            imageLink: 'https://lelogama.go-jek.com/cache/90/6d/906da07f9b42cc624ddbfc48e70a87b7.webp'
        }
    }
}
</script>

<style scoped>

img {
    min-height: 350px;
    border-radius: 40px;
}

.content-text {
    margin-left: 50px;
}

.content-text h1 {
    color: black;
    font-weight: 700;
    margin-top: 80px;
    text-align: left;
    /* font-size: 3.07692rem; */
}

.content-text p {
    text-align: left;
    font-size: 17px;
    margin-top: 30px;
}

.content-text a {
    color: green;
}

</style>