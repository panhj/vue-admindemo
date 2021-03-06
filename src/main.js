import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/iconfont.css'

Vue.config.productionTip = false;
if(window.location.host.indexOf('10.35.125.21')>-1) {
  axios.defaults.baseURL = 'http://10.35.125.21:8999/openeco'
} else if (window.location.host.indexOf('open.dahuatech.com')>-1) {
  axios.defaults.baseURL = 'http://open.dahuatech.com:8081/api/openeco'
}
// axios.defaults.baseURL = 'http://33.255.11.245:8999/openeco'
// axios.defaults.baseURL = 'http://10.35.125.21:8999/openeco'
axios.defaults.withCredentials=false;
Vue.prototype.$axios = axios

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
