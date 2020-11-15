import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Menu from "../components/Menu.vue";

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/menu',
    component: Menu
  }
];

const router = new Router({
  mode: "history",
  base: '/',
  routes
});

export default router;