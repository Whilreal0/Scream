import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { initializeApp } from "firebase/app";
import 'firebase/auth'



Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD_m30lSb44uJ80x3zholZcAeldd3EmSlY",
  authDomain: "screamapp-620f2.firebaseapp.com",
  projectId: "screamapp-620f2",
  storageBucket: "screamapp-620f2.appspot.com",
  messagingSenderId: "236529844436",
  appId: "1:236529844436:web:148d86f64698d8d5dabb41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
