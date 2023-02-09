import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { initializeApp } from "firebase/app";
import 'firebase/auth'



Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDZ8ZwsdUkdHQwguUZDQJ5o9xnZt0DSSWY",
  authDomain: "scream-e0460.firebaseapp.com",
  projectId: "scream-e0460",
  storageBucket: "scream-e0460.appspot.com",
  messagingSenderId: "304004156489",
  appId: "1:304004156489:web:e71afb91bcb42d0e400398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
