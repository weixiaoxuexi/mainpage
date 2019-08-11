import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import '../mock'


/**
 * If you don't want to use mock-server
 * you want to use mockjs for request interception
 * you can execute:
 *
 * import { mockXHR } from '../mock'
 * mockXHR()
 */
import { mockXHR } from '../mock'
mockXHR()


import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
