import { firebaseAction } from 'vuexfire';
import firebase from 'firebase';

const state = {
  orders: []
}

const getters = {
  getOrders: state => state.orders,
  getNumberOfOrders: state => state.orders.length
}

const mutations = {
  addOrder: (state, orders) => state.orders.push(orders)
}

const actions = {
  setOrdersRef: firebaseAction(({ bindFirebaseRef }, path) => {
    return bindFirebaseRef("orders", firebase.database().ref(path));
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}