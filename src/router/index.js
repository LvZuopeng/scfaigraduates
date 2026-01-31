import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import DoctoralCatalog from '../views/DoctoralCatalog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/doctoral-catalog',
    name: 'doctoral-catalog',
    component: DoctoralCatalog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
