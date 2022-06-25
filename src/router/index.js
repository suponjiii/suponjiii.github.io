import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/home-page.vue'
import Pricing from '../views/pricing-page.vue'
import Contacts from '../views/contacts-page.vue'
import Questions from '../views/questions-page.vue'
import Process from '../views/process-page.vue'
import About from '../views/about-page.vue'
import LineGuidelines from '../views/line-guidelines-page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/process',
    name: 'Process',
    component: Process
  },
  {
    path: '/line-guidelines',
    name: 'LineGuidelines',
    component: LineGuidelines
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
