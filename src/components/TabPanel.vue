<template>
    <div>
        <div class="header d-flex justify-content-center">
            <h1>How GoClub works</h1>    
        </div>
        <div class="row">
            <div class="col-md-6 d-flex align-items-center justify-content-end">
                <ol>
                    <div  :class="coloumClasses(content.id)" :key="content.id" v-for="content in tabContent" @click="selectItem(content.id)">
                        <li>
                            <h4>{{content.header}}</h4>
                            <p>{{content.body}}</p>
                        </li>
                    </div>
                </ol>
            </div>
            <div class="col-md-6 d-flex align-items-center">
                <img :src="imageLink1" v-if="item1Selected">
                <img :src="imageLink2" v-else-if="item2Selected">
                <img :src="imageLink3" v-else-if="item3Selected">
            </div>
        </div>
    </div>
    
        <!-- <div>
        <div class="header d-flex justify-content-center">
            <h1>How GoClub works</h1>    
        </div>
        <image-coloum>     
            <template v-slot:coloum1>
                <ol>
                    <div  :class="coloumClasses(content.id)" :key="content.id" v-for="content in tabContent" @click="selectItem(content.id)">
                        <li>
                            <h3>{{content.header}}</h3>
                            <p>{{content.body}}</p>
                        </li>
                    </div>
                </ol>
            </template>
            <template v-slot:coloum2>
                <img :src="imageLink1" v-if="item1Selected">
                <img :src="imageLink2" v-else-if="item2Selected">
                <img :src="imageLink3" v-else-if="item3Selected">
            </template>
        </image-coloum>
    </div>
     -->
</template>


<script>
// import imageColoum from './imageColoum.vue'

export default {
    // components: { imageColoum },
    data() {
        return {
            item1Selected: true,
            item2Selected: false,
            item3Selected: false,
            imageLink1: 'https://lelogama.go-jek.com/cache/ed/03/ed035c47a1a6f673db4d11eeeb6e0a84.webp',
            imageLink2: 'https://lelogama.go-jek.com/cache/e8/23/e823071063e5f87a9d3c6cce22ee73eb.webp',
            imageLink3: 'https://lelogama.go-jek.com/cache/91/9e/919e59a2a2948bc4e603b31a53ced514.webp',
            tabContent: [
                {
                    id: '1',
                    header: '1. Earn and collect XP from transactions',
                    body: 'Earn and collect XP (eXperience Point) by making transactions and work your way up to Anak Sultan to get all the rewards. Learn more about the details here.'
                },
                {
                    id: '2',
                    header: '2. All hail Anak Sultan',
                    body: 'You will have to start from Warga level with 0 XP, and you would have to go through being at Bos level, Juragan level, and then finally you can get the most royal level as Anak Sultan. The higher your level is, you will get better and bigger perks and rewards that you can enjoy. Learn more about the details here.'
                },
                {
                    id: '3',
                    header: '3. Earn XP to get all the exclusive GoClub rewards!',
                    body: 'Everytime you level up, you will get bigger and better perks and rewards. Also, you will find surprise gifts in the Treasure chests at every level throughout your epic journey. Learn more about the details here.'
                }
            ]
        }
    },
    methods: {
        selectItem(id) {
            if (id === '1') {
                this.item1Selected = true
                this.item2Selected = false
                this.item3Selected = false
            } else if (id === '2') {
                this.item2Selected = true
                this.item1Selected = false 
                this.item3Selected = false
            } else if (id === '3') {
                this.item3Selected = true
                this.item2Selected = false
                this.item1Selected = false
            }
        },
        coloumClasses(id) {
            if (id === '1') {
                return {active: this.item1Selected}
            } else if (id === '2' ) {
                return {active: this.item2Selected}
            } else if (id === '3') {
                return {active: this.item3Selected}
            }
        }
    }

}
</script>

<style scoped>

.header {
    margin-top: 100px;
    /* max-height: 5px; */
    margin-bottom: 0;
    font-weight: 700;
    color: black;
}
/* 
.item {
    padding: 10px
} */

ol {
    margin-top: 60px;
}

ol li{
    text-align: left;
    justify-content: center;
    margin-left: 20px;
    padding: 20px 30px 20px 30px;
    margin-top: 0;
    list-style: none;
    min-height: 20px;
    cursor: pointer;
    max-width: 500px
}

ol li h4 {
    font-weight: 700;
}

ol p {
    /* padding: 10px; */
    margin-top: 10px;
}


img {
    max-width: 474px;
    margin-top: 10px;
    margin-left: 50px;
    min-height: 455px;
}

.active {
    background-color: purple;
    color: white;
    border-radius: 1rem;
    /* font-weight: 600; */
}
</style>