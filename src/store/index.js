import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // initial state of the app
  state: {
    menuItems: {
      1: {
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
        'name': "Pepproni",
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
        'name': "Chicken Supreme",
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
        'name': "BBQ",
        description: "A delicious tomato based pizza with mozzarella and pepproni topping",
        options: [
          {
            size: '9',
            price: 8.95
          }
        ]
      }
    }
  }
})