import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)                      /*官方插件的使用*/

new Vue({
  el: '#app',
  render: h => h(App)
})
