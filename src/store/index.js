import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerData: JSON.parse(localStorage.getItem('drawerData')) || false,
    drawer: false,
    user: null,
    isAuthenticated: false
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
    },

    setUser(state, user){
      state.user = user
    },
    setisAuthenticated(state, isAuthenticated){
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    signUp({ commit },{ email, username, password}){
      const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, username, password)
        .then((userCredential)=> {
          commit('setUser', user)
          commit('setIsAuthenticated', true)
          console.log(userCredential);
        })
        .catch((error)=> {
          console.log(error);
        })
    }
  },
  modules: {
  }
})
