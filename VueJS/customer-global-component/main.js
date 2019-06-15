import Vue from 'vue'
import App from './App.vue'
// 自定义组件 步骤1
import customLoading from './custom-loading/index.js'
/* 	
   自定义组件 步骤2：新建两个文件 
   		<包装.vue文件的js>.js * 具体看js内容 * 重点文件
		<文件名>.vue   就是普通的vue文件
*/
Vue.use(customLoading);

new Vue({
  el: '#app',
  render: h => h(App)
})
