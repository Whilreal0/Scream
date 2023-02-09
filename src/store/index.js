import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerData: JSON.parse(localStorage.getItem('drawerData')) || false,
    drawer: false
  },
  getters: {
  },
  mutations: {
    updateDrawer(state, value) {
      state.drawerData = value
      localStorage.setItem('drawerData', JSON.stringify(value))
    },
    setDrawer (state, payload) {
      state.drawer = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
