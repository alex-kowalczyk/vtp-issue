import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue');

const routes = [
  {path: '/', redirect: '/page1/Page-1'},
  {
    path: '/page1/:page',
    name: 'page1',
    component: Home,
    props: true
  },
  {
    path: '/page2/:page',
    name: 'page2',
    component: Home,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
