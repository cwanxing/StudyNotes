//完美运动框架，同时修改多个值(width,height)
//获取非行间样式
function getStyle(obj,name){
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj,false)[name];
		}
}	
//运动框架
	function move_perfect(obj,json,fnEnd){//对象，属性，数值
		//function startMove(obj,iTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var bStop=true;//假设：所有的值都已经到了

			for(var attr in json){
			//var cur=parseInt(getStyle(obj,attr));//当为变的是透明度时，没用
			//var cur=parseInt(getStyle(obj,'height'));
			//cur是获取行间的样式
			var cur=0;//单纯的变量，不是参数

			if(attr=='opacity')//当获取的是透明度则用parseFloat
			{
				cur=Math.round(parseFloat(getStyle(obj,attr))*100);
					//乘上100因为，习惯透明度用100表示，也可以不用。
					//Math.round为四舍五入、解决误差
			}
			else
			{
				cur=parseInt(getStyle(obj,attr));//对象，属性，
				//cur是从行间获取到的对象属性的数值，把它重新给了cur
			}
			//以上是获取传的参数是什么元素
			var speed=(json[attr] -cur)/6;

			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=json[attr])
			{
				bStop=false;//看最后的判断
			}
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
				
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
			//判断获得的是那种(原理就是如果传入的是类似透明度的，那么就没有px这个单位了)
			//obj.style[attr]=cur+speed+'px';
			//透明度没有px
			//obj.style.height=cur+speed+'px';
			//}
		}
		if(bStop)//如果它是true的话，再停止。则bStop没有遇到 不到的。
		{
			clearInterval(obj.timer);

			if(fnEnd)fnEnd();
		}
		},30)
	}
