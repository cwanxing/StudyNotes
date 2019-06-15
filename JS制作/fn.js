function getPos(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop };
    //使用方法：
    // var pos=getPos(oEevnt);
    // oDiv.style.left=pos.x+'px';
    // oDiv.style.top=pos.y+'px';
}
//获取非行间样式
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}
//运动框架,同时修改多个值(width,height)
function move_perfect(obj, json, fnEnd) {//对象，属性，数值
    //function startMove(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;//假设：所有的值都已经到了

        for (var attr in json) {
            //var cur=parseInt(getStyle(obj,attr));//当为变的是透明度时，没用
            //var cur=parseInt(getStyle(obj,'height'));
            //cur是获取行间的样式
            var cur = 0;//单纯的变量，不是参数

            if (attr == 'opacity')//当获取的是透明度则用parseFloat
            {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                //乘上100因为，习惯透明度用100表示，也可以不用。
                //Math.round为四舍五入、解决误差
            }
            else {
                cur = parseInt(getStyle(obj, attr));//对象，属性，
                //cur是从行间获取到的对象属性的数值，把它重新给了cur
            }
            //以上是获取传的参数是什么元素
            var speed = (json[attr] - cur) / 6;

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur != json[attr]) {
                bStop = false;//看最后的判断
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;

            }
            else {
                obj.style[attr] = cur + speed + 'px';
            }
            //判断获得的是那种(原理就是如果传入的是类似透明度的，那么就没有px这个单位了)
            //obj.style[attr]=cur+speed+'px';
            //透明度没有px
            //obj.style.height=cur+speed+'px';
            //}
        }
        if (bStop) {//如果它是true的话，再停止。则bStop没有遇到 不到的。
            clearInterval(obj.timer);

            if (fnEnd) fnEnd();
        }
    }, 30)
}
//方块跟随鼠标移动
function getPos(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop };
    /*
    使用：
    var pos=getPos(oEevnt);
        oDiv.style.left=pos.x+'px';
        oDiv.style.top=pos.y+'px';
            
    */
}
//封装函数：事件绑定
function myAddEvent(obj, ev, fn) {//对象， 事件， 函数
    if (obj.attachEvent) {
        obj.attachEvent('on' + ev, fn);//IE
    } else {
        obj.addEventListener(ev, fn);//chrom FF
    }
}
//想要从服务器上取数据
//帮助理解的例子
/*
    打电话
    1，电话
    2，拨号(连接对方手机)
    3，我说(干啥)
    4，对方说(回应)

    ajax
    1，创建一个ajax对象
    2，连接到服务器
    3，发送请求
    4，接收返回值
*/
function ajax(url, fnSucc, fnFaild) {//请求的文件名， 
    //创建对象
    if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    } else {
        var oAjax = new ActiveXObject("Micoroft.XMLHTTP");
    }
    //连接服务器
    oAjax.open('GET', url, true);
    //发送请求
    oAjax.send();
    //接收返回值
    oAjax.onreadystatechange = function () {
        if (oAjax.readyStatus == 4) {
            if (oAjax.status == 200) {
                //成功。放回用户请求的数据文件
                fnSucc(oAjax.responseText)//响应文本
            } else {
                //失败的话，返回失败原因(方便用户改错)
                if (fnFaild) {
                    fnFaild(oAjax.status);
                }
            }
        }
    }
}
//cookie操作
//添加cookie
function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);

    document.cookie = name + '=' + value + ';expires=' + oDate;
}
//读取cookie
function getCookie(name){
    var arr = document.cookie.split('; ');
    for(var i = 0; i < arr.length; i++){
        arr2 = arr[i].split('=');
        if(arr2[0] == name){
            return arr2[1];
        }
    }
    return '';
}
//删除cookie
function removeCookie(name) {
    setCookie(name, 1, -1);
}