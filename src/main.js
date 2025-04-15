import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/bootstrap.min.css'
import vuetify from '@/plugins/vuetify'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
