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
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert("This area is for authorized users only, please login to continue!");
      next();
    }
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
  routes,
  base: '/',
  // Mode:
  // default mode is hash. 
  // Hash mode maskes it easy for SPAs to request the hashed page from the server before the vue library router takes over and switch the views
  mode: "history",
  // scroll behaviour saves the scroll position of the browser
  // scrollBehavior(to, from, savedPosition) {
    // position by setting x and y
    // return { x: 0, y: 200 }

    // position with the tag
    // return { selector: h1 }

    // position with last savedPosition
    // if (savedPosition) {
    //   return savedPosition;
    // } else {
    //   return { x: 0, y: 0 };
    // }

    // position with last hash
    // if(to.hash){
    //   return {
    //     selector: to.hash
    //   }
    // }
  // }
});


// Global Guards
// router.beforeEach((to, from, next) => {
//   if (to.path === "/menu") {
//     console.log(to);
//     console.log(from);
//     next(); // next allows the component to load
//   } else {
//     next(false);
//   }
// });

// router.afterEach((to, from) => {
//   alert('after each');
//   console.log(to);
//   console.log(from);
//   // next is not needed in this fuction as it triggers after the component has already loaded
// });

export default router;