import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Event from '../views/Event/Event.vue'
import EventDetail from '../views/EventDetail.vue'
import Academy from '../views/Academy/Academy.vue'
import BootcampDetail from '../views/BootcampDetail.vue'
import Register from '../views/Register.vue'
import CorporateDetail from '../views/CorporateDetail.vue'
import CorporateRegister from '../views/CorporateRegister.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Tech Entusiast',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/academy',
    name: 'Academy',
    component: Academy
  },
  {
    path: '/event/:eventId',
    name: 'EventDetail',
    component: EventDetail
  },
  {
    path: '/academy/bootcamp/:id',
    name: 'BootcampDetail',
    component: BootcampDetail
  },
  {
    path: '/academy/corporate/:id',
    name: 'CorporateDetail',
    component: CorporateDetail
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/corporateRegister',
    name: 'CorporateRegister',
    component: CorporateRegister
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
