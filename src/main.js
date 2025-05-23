import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/bootstrap.min.css'
import vuetify from '@/plugins/vuetify'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
