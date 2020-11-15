import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // initial state of the app
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
  },
  getters: {
    getMenuItems: state => state.menuItems,
    getNumberOfOrders: state => state.orders.length,
    getCurrentUser: state => state.currentUser
  },
  mutations: {
    addOrder: (state, orders) => state.orders.push(orders),
    userStatus: (state, user) => {
      if(user) {
        state.currentUser = user
      } else {
        state.currentUser = null
      }
    }
  },
  actions: {
    // setUser(context, user) {
    //   context.commit('userStatus', user);
    // }
    // same as above, instead of calling commit from context, calling it directly
    setUser({ commit }, user) {
      commit('userStatus', user);
    }
  }
})