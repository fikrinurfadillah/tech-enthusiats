<template>
    <div class="d-flex justify-content-center">
        <a><img :src="imageLink1"></a>    
    </div>    
</template>

<script>
export default {
    data() {
        return {
            imageLink1: 'https://lelogama.go-jek.com/cache/47/28/4728d96a7ccf8e25781ce642aa0f92db.webp',
            imageLink2: '',
            imageLink3: '',        
        }
    }
}
</script>


<style scoped>

img {
    margin-top: 50px;
    max-width: 1150px;
    border-radius: 32px;
    /* height: 480px; */
}

</style>