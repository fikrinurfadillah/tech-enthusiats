<template>
    <div>
        <div class="header justify-content-center">
            <h1>Why I should join GoClub?</h1>
        </div>
        <div class="row">
            <div :class="{JustifyContentEnd: content.id ==='special'}" class="col-md-6 mx-auto d-flex" :key="content.id" v-for="content in contents">
                <div class="card">
                    <div :class="{cardHeader1: content.id === 'special', cardHeader2: content.id === 'flexibility'}" class="card-header">
                        <span class="c-card-item__ouval c-card-item__ouval--header"></span>
                        <h3>{{content.header}}</h3>
                    </div>
                    <div  :class="{cardBody1: content.id === 'special', cardBody2: content.id === 'flexibility'}" class="card-body">
                        <p class="card-text">{{content.body}}</p>
                        <a href="#" class="btn btn-primary">Find out here!</a>
                    </div>
                </div>
            </div>    
        </div>    
    </div>    
</template>

<script>
export default {
    data() {
        return {
            contents: [
            {
                id: 'special',
                header: 'Special treatment',
                body: 'At GoClub, you will get the chance to enjoy all the exclusive perks and rewards on Gojek. GoClub offers Prioritized booking, 100% GoPay cashback*, Free GoTix tickets, GoPlay special subscriptions and so much more'
            },
            {
                id: 'flexibility',
                header: 'Flexibility',
                body: 'Gojek offers services that you can choose based on your needs to earn XP. From transportation services to ordering food, sending goods, and also payment options.'
            }
            ]
        }
    },
    computed: {
        // coloumClasses(){
        //     const content = this.contents.id
        //     return {
        //         JustifyContentEnd: content in this.contents === 'special'
        //     }
        // }
        
    }
}
</script>

<style scoped>



.row {
    margin: 60px;
}

.header h1{
    font-size: 37px;
    color: black;
    font-weight: 700;
}
.card {
    max-width: 400px;
    color: white;
    border-radius: 1rem;
    min-width: 570px;
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

.JustifyContentEnd {
    justify-content: flex-end !important;
}

.JustifyContentStart{
    justify-content: flex-start !important;
}

.cardHeader1 {
    background-color: #772583;
}

.cardHeader2 {
    background-color: #695396;
}

.cardBody1 {
    background-color: #695396;
}

.cardBody2 {
    background-color: #772583;
}

.c-card-item__ouval--header {
    background-color: #fff;
    width: 87px;
    height: 87px;
    top: -203px;
    left: -200px;
}

.c-card-item__ouval {
    display: block;
    position: absolute;
    z-index: 1;
    width: 61.8vw;
    max-width: 400px;
    height: 61.8vw;
    max-height: 400px;
    opacity: .2;
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(8.5% at 50% 50%);
}

@media (max-width: 909px) {
    .card {
        justify-content: center !important;
    }
}
</style>