import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Pricing from "../components/Pricing.vue";
import Contacts from "../components/About.vue";
import Questions from "../components/Home.vue";
import Process from "../components/Process.vue";
import About from "../components/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/process",
    name: "Process",
    component: Process,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
