import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions.js';
import * as getters from './getters.js';
import * as mutations from './mutations.js';
// import * as state from './state.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menuItems: {
      1: {
        id: 1,
        name: "Margherita",
        description: "A delicious tomato based pizza with mozzarella topping",
        options: [
          {
            size: '9',
            price: 6.95
          },
          {
            size: '12',
            price: 10.95
          }
        ]
      },
      2: {
        id: 2,
        name: "Pepproni",
        description: "A delicious tomato based pizza with mozzarella and pepproni topping",
        options: [
          {
            size: '9',
            price: 8.95
          },
          {
            size: '12',
            price: 12.95
          }
        ]
      },
      3: {
        id: 3,
        name: "Chicken Supreme",
        description: "A delicious tomato based pizza with mozzarella and pepproni topping",
        options: [
          {
            size: '9',
            price: 9.95
          },
          {
            size: '12',
            price: 13.95
          }
        ]
      },
      4 : {
        id: 4,
        name: "BBQ",
        description: "A delicious tomato based pizza with mozzarella and pepproni topping",
        options: [
          {
            size: '9',
            price: 8.95
          }
        ]
      }
    },
    orders: [],
    currentUser: null
  }, // initial state of the app
  mutations, // to mutate state data
  getters, // helper functions to get the state data from component files
  actions // mainly used for async methods 
})