import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import Axios from 'axios'
import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css'

Vue.use(ElementUi)
Vue.prototype.$http=Axios;
Vue.prototype.GLOBAL=global;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
