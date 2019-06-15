function Drag(id){  //onload 变为 构造函数
    var _this = this;
    this.disX = 0;
    this.disY = 0;

    this.oDiv = document.getElementById(id);
    this.oDiv.onmousedown = function(ev){
        _this.fnDown(ev);
        //我鼠标已经按下了，选择文字的问题应该加在这
        return false;
    };
}
Drag.prototype.fnUp = function() {
    document.onmousemove = null;
    document.onmouseup = null;
};
Drag.prototype.fnMove = function(ev) {
    var oEvent = ev || event;
    //开始移动div是，div离上/左边的距离变化，计算的是这个
    var l = oEvent.clientX - this.disX;
    var t = oEvent.clientY - this.disY;

    this.oDiv.style.left = l + 'px';
    this.oDiv.style.top = t + 'px';
};
Drag.prototype.fnDown = function(ev) {
    var _this = this;
    var oEvent = ev || event;
    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;

    document.onmousemove = function(ev){
        _this.fnMove(ev);
    };
    document.onmouseup = function(){
        _this.fnUp();
    };
}