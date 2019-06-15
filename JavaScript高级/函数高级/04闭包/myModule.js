// 在HTML中使用的方法为：
    /*
    * 1. var module = myModule();
    * 2. module.doSomething()/module.doOtherthing()
    * */
// function myModule() {
//     //以下为私有的数据
//     var msg = "wwwwwww";
//     function doSomething() {
//         console.log('doSomething() '+ msg);
//     }
//     function doOtherthing() {
//         console.log('doOtherthing() '+ msg);
//     }
//     //向外暴露，使外部能看见
//     return {
//         doSomething: doSomething,
//         doOtherthing: doOtherthing
//     }
// }

// 在HTML中使用的方法：
    /*
    * 1. myModule.doSomething()/myModule.doOtherthing();
    * */
// (function () {
//     //私有数据
//     var msg = "JavaScript"
//     function doSomething() {
//         console.log("doSomething() "+ msg);
//     }
//     function doOthering() {
//         console.log("doOthering() "+ msg);
//     }
//     //向外暴露，使外部能看见
//     window.myModuld = {//添加到了window全局
//         doSomething: doSomething,
//         doOthering: doOthering
//     }
// })()

//以下写法，在代码压缩打包的时候，形参可以压缩为单个字符(快)
(function (window) {
    //私有数据
    var msg = "JavaScript"
    function doSomething() {
        console.log("doSomething() "+ msg);
    }
    function doOthering() {
        console.log("doOthering() "+ msg);
    }
    //向外暴露，使外部能看见
    window.myModuld = {//添加到了window全局
        doSomething: doSomething,
        doOthering: doOthering
    }
})(window)