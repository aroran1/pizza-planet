// import { firestoreAction } from 'vuexfire';
import { firebaseAction } from 'vuexfire';
import firebase from 'firebase';

const state = {
  menuItems: []
}

const getters = {
  getMenuItems: state => state.menuItems
}

const mutations = {}

const actions = {
  // this only creates the action with firbase but doesn't dispatches it staraight away
  // setMenuRef: firestoreAction(
  //   ({ bindFirestoreRef }, { ref }) => {
  //   // ({ bindFirestoreRef, unbindFirestoreRef }, { ref }) => { // unbindFirestoreRef not needed here
  //     // this will unbind any previously bound ref to 'todos'
  //     bindFirestoreRef('menuItems', ref)
  //     // you can unbind any ref easily
  //     // unbindFirestoreRef('user') // unbindFirestoreRef not needed here
  //   }
  // )  

  setMenuRef: firebaseAction(({ bindFirebaseRef }, path) => {
    return bindFirebaseRef("menuItems", firebase.database().ref(path));
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}