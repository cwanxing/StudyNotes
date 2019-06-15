import Vue from 'vue'
import App from './App.vue'

// 按需引入UI【过多的时候，可以另外写js文件，把
//          需要引入的组件统一放入该文件】
// 再在main.js中引入该文件 既可
import './element-ui.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
