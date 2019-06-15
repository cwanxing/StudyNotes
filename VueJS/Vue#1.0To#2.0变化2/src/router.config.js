import Home from './home.vue';
import News from './news.vue';

import Movie from './movie.vue';
import Culture from './culture.vue';

import UserList from './userList.vue';


export default{
	routes:[ // 必须是 routes
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'culture',
					component:Culture
				},
				{
					path:'movie',
					component:Movie
				}
			]
		},
		{
			path:'/news', 
			component:News,
			children:[
				{
					path:':username/age/:age',
					component:UserList
				}
			]
		},
		{path:'*', redirect:'/home'} // 默认页
	]
}