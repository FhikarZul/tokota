import { createRouter, createWebHistory } from "vue-router";
import homeView from "../view/home/HomeView.vue";
import promoView from "../view/promo/PromoView.vue";
import detailProductView from "../view/detail/DetailProductView.vue";

// Define route components
const routes = [
  { path: "/", component: homeView },
  { path: "/promo", component: promoView },
  { path: "/detail-product/:id", component: detailProductView, props: true },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
});

export default router;
