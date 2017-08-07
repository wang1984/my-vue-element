import Vue from 'vue'
import App from './App.vue'
import './assets/css/1.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
