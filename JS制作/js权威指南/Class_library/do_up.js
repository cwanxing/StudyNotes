/*
	比较两个数组的函数
*/
function equalArrays(a,b){
	if(a.length !== b.length) return false		//两个长度不同的数组不相等
	{											
		for(var i=0;i<a.length;i++){			//循环遍历所有的元素
			if(a[i] !== b[i]) return false		//如果有任意元素不相等，则数组不相等
			return true;						//否则它们相等
		}
	}
}