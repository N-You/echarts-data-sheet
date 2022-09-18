import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SheepView from '../views/seep.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sheep',
    name: 'SheepView',
    component: SheepView
  }
]

const router = new VueRouter({
  routes
})

export default router
