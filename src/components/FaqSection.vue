<template>
    <section>  
        <div class="faq">
            <h1>FAQ</h1>
            <div  @click="faq.open = !faq.open" class="row card align-items-center" :key="faq.id" v-for="faq in faqs">
                <div  class="col-md-12">
                    <div  class="row">
                        <div class="col-md-6">
                            <p  class="card-title">{{faq.header}}</p>
                        </div>
                        <div class="col-md-6 icon">
                            <i :class="faq.open? 'fas fa-angle-up' : 'fas fa-angle-down' "></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">        
                            <p v-if="faq.open" class="card-body">{{faq.body}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row btn">
            <div class="col-md-12">
                <a href="#">Check your GoClub invitation now!</a>
            </div>
        </div> -->
    </section>
</template>


<script>
export default {
    data() {
        return {
            faqs: [
                {
                    id: '1',
                    header: 'How I can become a GoClub member?',
                    body: 'You can find the invitation in your Gojek app, or in your profile as well as promo page. Join the club by tapping the "Join for free" button and there, you`re in Or you can also join by clicking this link',
                    open: false
                },
                {
                    id: '2',
                    header: 'Why I’m not receiving the invitation?',
                    body: 'Your GoClub invitation might be still on it’s way. We’ll notify you when it arrives!',
                    open: false
                },
                {
                    id: '3',
                    header: 'How do I cancel my membership?',
                    body: 'GoClub membership can’t be cancelled, since it’s free. So, relax and enjoy the perks as our member!',
                    open: false
                },
                {
                    id: '4',
                    header: 'What is XP?',
                    body: 'XP, short for experience points, are the points we’d award you for orders made on Gojek services.',
                    open: false
                },
                {
                    id: '5',
                    header: 'How can I earn XP?',
                    body: 'XP is earned for every order you make on Gojek. For every Rp5.000 paid using GoPay or PayLater on GoFood, GoCar, GoRide, and GoSend, you’d be eligible to earn 4 XP. You’d be eligible to earn 2 XP if you paid using Cash or Credit Card or Link Aja on those services.For every Rp5.000 paid using any payment methods on GoPay online and offline stores, you’d be eligible to earn 1 XP. • At maximum, you can earn up to 100 XP on each order. Learn more about the details by clicking this link.',
                    open: false
                },
                {
                    id: '6',
                    header: 'Do I get XP on all orders?',
                    body: 'You can earn XP on GoRide, GoFood, GoCar, GoSend orders, and payments using GoPay.',
                    open: false
                },
                {
                    id: '7',
                    header: 'How do I level up?',
                    body: '',
                    open: false
                },
                {
                    id: '8',
                    header: 'Why do I get downgraded?',
                    body: 'Once you level up, you have to meet the minimum XP amount required to stay on that level within 6 months. But, when you do get downgraded, nothing to worry about; you can always get back up by earning XP. Learn more about the details on the GoClub website.',
                    open: false
                },
                {
                    id: '9',
                    header: 'What’s a Treasure gift?',
                    body: 'Treasures are surprise gifts that we have provided for you to collect at particular touchpoints along your journey in each level. Unlike Rewards, what you’d get as Treasures are variations of surprise Gojek vouchers. You’d never know what you’d get as they’re kept secret until you found them. But, it is for sure you’d get at least one (1) Treasure box in each level, if not multiple.',
                    open: false
                },
            ]
        }
    },
}
</script>

<style scoped>

h1 {
    color: black;
    text-align: left;
    font-weight: 700;
    padding-bottom: 50px;
}

section {
    margin-top: 80px;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin-top: 30px;
  /* margin-left: auto;
  margin-right: auto; */
  font-weight: 700;
  /* width: 1200px; */
  text-align: left;
  padding: 20px;
  transition: 0.3s;
  border-radius: 8px;
  cursor: pointer;
}
.card h5 {
    color: black;
}

.card-title {
    color: black;
    font-size: 18px;
    font-weight: 700;
}

.card-body {
    color: black;
    font-size: 18px;
    font-weight: normal;
    padding: 0;
}

.icon {
    text-align: -webkit-right;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}


.faq {
    margin-top: 30px;
    padding-left: 90px;
    padding-right: 90px;
   
}


.btn {
    margin-top: 50px;
}

a {
    color: white;
    text-decoration: none;
    border-radius: 1.75rem;
    background-color: #00880d;
    padding: 12px 15px;
    min-height: 48px;
}
</style>