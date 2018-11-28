import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/iconfont.css'

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://10.35.125.21:8999/openeco'
axios.defaults.withCredentials=false;
Vue.prototype.$axios = axios

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
