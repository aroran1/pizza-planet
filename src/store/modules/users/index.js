const state = {
  currentUser: null
}

const getters = {
  getCurrentUser: state => state.currentUser
}

const mutations = {
  userStatus(state, user) {
    if(user) {
      state.currentUser = user.email
    } else {
      state.currentUser = null
    }
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('userStatus', user);
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}