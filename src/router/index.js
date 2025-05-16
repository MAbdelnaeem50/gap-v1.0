import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "AboutPage",
    path: "/about",
    component: AboutPage,
  },
  {
    name: "ContactPage",
    path: "/contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
