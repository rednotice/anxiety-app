import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

// Axios
axios.defaults.baseURL = 'http://localhost:3000/';

axios.interceptors.response.use(function (response) {
  // Clear errors in store
  store.commit('setErrors', {});
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  console.log(error.response);
  store.commit('setErrors', error.response.data);
  return Promise.reject(error);
});

Vue.prototype.$axios = axios;

// Global error handler
Vue.config.errorHandler = (err, vm, info) => {
  console.error(`${err}\nInfo: ${info}\nComponent: ${vm}`);
  return;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')