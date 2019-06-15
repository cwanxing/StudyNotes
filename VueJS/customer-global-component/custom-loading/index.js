// 自定义组件 步骤3 引入 .vue 文件
import cLoding from './cusloading.vue';

// 自定义组件 步骤4 定义一个对象【用来导出】
//
const cL = {
	install: function(Vue){
		Vue.component('custom-loading', cLoding)
	}
}

export default cL