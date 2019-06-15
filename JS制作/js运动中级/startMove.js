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
	function startMove(obj,attr,iTarget,fnEnd){//对象，属性，数值，函数(针对链式运动)
		//function startMove(obj,iTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){

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
			var speed=(iTarget -cur)/6;

			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if (cur==iTarget)
			{
				clearInterval(obj.timer);
				if(fnEnd)fnEnd();
			}
			else
			{
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
			}
		},30)
	}
