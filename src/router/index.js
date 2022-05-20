import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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
    component: () => import('../views/Event/Event.vue')
  },
  {
    path: '/academy',
    name: 'Academy',
    component: () => import('../views/Academy/Academy.vue')  
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog/Blog.vue')
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('../views/Career/Career.vue')
  },
  {
    path: '/event/:eventId',
    name: 'EventDetail',
    component: () => import('../views/EventDetail.vue')
  },
  {
    path: '/academy/bootcamp/:id',
    name: 'BootcampDetail',
    component: () => import('../views/BootcampDetail.vue')
  },
  {
    path: '/academy/corporate/:id',
    name: 'CorporateDetail',
    component: () => import('../views/CorporateDetail.vue')

  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/corporateRegister',
    name: 'CorporateRegister',
    component: () => import('../views/CorporateRegister.vue')
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
