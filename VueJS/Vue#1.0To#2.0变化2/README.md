2.0 路由

------没有脚手架---------

html:
	div#box
	  div // 2.0后需要一个壳子包住
		router-link to="/home" 主页
		router-link to="/new" 新闻	
	  div 
	  	router-view // 显示

js:
	# 1. 普通路由
	// 创建路由
	var Home = {
		template: '<h2>我是主页</h2>'
	}
	var News = {
		template: '<h2>我是新闻</h2>'
	}

	// 配置路由
	const _router = {
		{path:'/home', component:Home},
		{path:'/new', component:News},
		{path:'*', dedirect:'/home'} // 默认页
	}

	// 生成路由
	const _Router = new VueRouter({
		_router;
	})

	// 挂载
	new Vue({
		el:'#box',
		router:'_Router'
	})

	# 2. 嵌套路由
	** 带参数 /user/cwx/age/10
	** 显示参数 cwx 10
	// 创建路由
	var Home = {
		template: '<h2>我是主页</h2>'
	}
	var User = {
		template: `
			div>
				<h2>我是用户</h2>
				ul>
					<li><router-link to="user/陈万兴/age/10">某个用户</router-link></li>
					<li><router-link to="user/万兴/age/20">某个用户</router-link></li>
					<li><router-link to="user/陈万/age/30">某个用户</router-link></li>
			div>
				router-view
			`
	}

	var UserDetail = {
			template:"<h2>我是某某用户{{$route.params}}</h2>"!!!
	}

	// 配置路由
	const _router = {
		{path:'/home', component:Home},
		{
			path:'/user',
			component:User,
			children:[
				path:':username/age/:age', ！！
				// 需要参数路径直接用
					:<指定参数名> => username='cwx'
					:<指定参数名> => age='10'
				component:UserDetail
			]

		},
		{path:'*', redirect:'/home'} // 默认页
	}

	// 生成路由【路由实例】
	const _Router = new VueRouter({
		routes:_router; // routes:<配置路由的对象名>
	})

	// 挂载
	new Vue({
		el:'#box',
		router:'_Router'// router:<路由实例名>
	})

	# 3. 路由实例上有一些方法【只讲两种】【只写改动部分】
		1. 格式：router.push({path:'/home'}) 【路径】
			它本质利用的是历史记录【后退前进】
			往历史记录添加一条记录

		2. 格式：router.replace({path:'news'})【路径】
			正真替换了，历史记录不能用了

		html：
			input[button] 添加一个路由 @click='push()'
			input[button] 替换一个路由 @click='replace()'
		js:
			data:{...},
			router:Router, // router:<路由实例名>
			methods:{
				add(){
					router.push({path:'/home'})
				},
				replace(){
					router.replace({path:'/new'})
				}
			}

------ 搭载脚手架 ---------
2.0 写法变化
	1.0 
		new Vue({
			el:'..',
			data:{},
			component:{App} // 组件写法
		})
	2.0
		new Vue({
			el:'..',
			data:{},
			render:h => h{App} // 组件写法
		})

	具体看src内文件
