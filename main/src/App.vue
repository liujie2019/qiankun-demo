<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal" :default-active="activeIndex">
        <!-- :router="true" 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
        <el-menu-item index="/">主应用</el-menu-item>
        <!--引用其他子应用-->
        <el-menu-item index="/sub-vue">vue子应用</el-menu-item>
        <el-menu-item index="/sub-react">react子应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/sub-react'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
