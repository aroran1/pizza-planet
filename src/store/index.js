import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire'; 

// Level 1 modularisation
// import * as actions from './actions.js';
// import * as getters from './getters.js';
// import * as mutations from './mutations.js';
// import * as state from './state.js'; // state can't be modularised throws error

// Level 2 modularisation
import menu from './modules/menu/index.js';
import orders from './modules/orders/index.js';
import users from './modules/users/index.js';

Vue.use(Vuex);

// Level 2 modularisation
export const store = new Vuex.Store({
  mutations: { ...vuexfireMutations },
  modules: {
    menu,
    orders,
    users
  }
})

// Level 1 modularisation
// export const store = new Vuex.Store({
//   state: {
//     menuItems: {
//       1: {
//         id: 1,
//         name: "Margherita",
//         description: "A delicious tomato based pizza with mozzarella topping",
//         options: [
//           {
//             size: '9',
//             price: 6.95
//           },
//           {
//             size: '12',
//             price: 10.95
//           }
//         ]
//       },
//     },
//     orders: [],
//     currentUser: null
//   }, // initial state of the app
//   mutations, // to mutate state data
//   getters, // helper functions to get the state data from component files
//   actions // mainly used for async methods 
// })

