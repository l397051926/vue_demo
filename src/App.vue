<template>
  <div id="app">
      <img src="./assets/logo.png">
      <p>这可以看做是导航栏</p>
      <router-link to="/index">首页</router-link>
      <router-link to="/userCenter">个人中心</router-link>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
