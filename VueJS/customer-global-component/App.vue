<template>
  <div id="app">
      <!--全局组件-->
        <custom-loading></custom-loading>

      <!--局部组件-->
        <Loading></Loading>
  </div>
</template>

<script>
    // 通过main.js 引入的，是全局组件，任何一个地方都可以用

    // 根组件引入其他组件，只能在根组件中使用：
    import Loading from './custom-loading/cusloading.vue';

export default {
//   name:'App',  用到以后再了解吧
    data(){
        return{

        }
    },
    component:{
        Loading
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
