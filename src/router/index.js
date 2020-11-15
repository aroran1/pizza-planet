import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Menu from "../components/Menu.vue";
import Admin from "../components/Admin.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Delivery from "../components/Delivery.vue";
import History from "../components/History.vue";
import OrderingGuide from "../components/OrderingGuide.vue";

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'homeLink',
    component: Home
  },
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    children: [
      { path: '/contact', name: 'contactLink', component: Contact },
      { path: '/history', name: 'historyLink', component: History },
      { path: '/delivery', name: 'deliveryLink', component: Delivery },
      { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
    ]
  },
  {
    path: '*',
    name: 'pageNotFoundLink',
    redirect: '/'
  }
];

const router = new Router({
  // Mode:
  // default mode is hash. 
  // Hash mode maskes it easy for SPAs to request the hashed page from the server before the vue library router takes over and switch the views
  mode: "history",
  base: '/',
  routes
});

export default router;