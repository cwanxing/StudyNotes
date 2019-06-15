import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'

import './assets/animate.css'

Vue.use(VueRouter);

var _Router = new VueRouter(routerConfig)
/*	完整格式：
	var _Router = new VueRouter({
		routes:routerConfig 
	})
	router.config.js:
		import Home from './home.vue';
		import News from './news.vue';

		export default[
			{path:'/home', component:Home},
			{path:'/news', component:News}
		]
	注：因为路由实例写上了routes
		所以在router.config.js中只需导出一个数组
		
	记住：最终要形成以下格式
		const _Router = new VueRouter({ routes:[
			{path:'/home', component:Home},
			{path:'/user',component:User},
			{path:'*', dedirect:'/home'} // 默认页
		]; })
*/

new Vue({
  el: '#app',
  router:_Router,
  render: h => h(App)
})
