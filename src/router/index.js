import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/pricing-page.vue'
import Contacts from '../views/Contacts.vue'
import Questions from '../views/Questions.vue'
import Process from '../views/Process.vue'
import About from '../views/About.vue'
import LineGuidelines from '../views/LineGuidelines.vue'

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
  history: createWebHashHistory(),
  routes
})

export default router
