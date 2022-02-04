import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import store from './store.js';
import VueCookies from 'vue-cookies';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCookies)

new Vue({
  data:{
    state: store.state
  },
  render: h => h(App),
  router
}).$mount('#app')
