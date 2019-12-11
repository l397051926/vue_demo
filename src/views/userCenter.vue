<template>
    <div>
        <p>这是个人中心</p>
        <router-link to = "/userCenter/userInfo">用户信息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "userCenter"
    }
</script>

<style scoped lang="scss">
    p{
        display: block;
        background: aqua;
    }
</style>