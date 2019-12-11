import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/HelloWorld'
import Index from '../views/index.vue'
import UserCenter from '../views/userCenter.vue'
import UserInfo from '../views/userInfo.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/userCenter',
            name: 'UserCenter',
            component: UserCenter,
            children: [
                {
                    path: '/userInfo',
                    name: 'UserInfo',
                    component: UserInfo
                }
            ]
        }
    ]

})
