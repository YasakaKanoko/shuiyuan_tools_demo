import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/temperature",
    name: "temperature",
    component: () => import("../views/TemperatureView.vue")
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
