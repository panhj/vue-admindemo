import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './views/Layout'
import banner from './views/homeConfig/pages/banner.vue'
import config from './views/homeConfig/homeConfig'

Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {path: '/login', component: () => import('@/views/Login')},
        {
            path: '/',
            redirect:'/homeConfig',
            component: Layout,
            children: [
                {
                    path: '/homeConfig',
                    name: 'homeConfig',
                    meta: {'title': '首页配置'},
                    component: () => import('@/views/homeConfig/homeConfig'),
                    children: [
                        {
                            path: '/homeConfig/banner',
                            name: 'banner',
                            meta: {'title': 'Banner配置'},
                            component: () => import('@/views/homeConfig/pages/banner')
                        },
                        {
                            path: '/homeConfig/addBanner',
                            name: 'addBanner',
                            meta: {'title': '新增Banner'},
                            component: () => import('@/views/homeConfig/pages/addBanner')
                        },
                        {
                            path: '/homeConfig/platform',
                            name: 'platform',
                            meta: {'title': '平台服务'},
                            component: () => import('@/views/homeConfig/pages/addBanner')
                        }
                    ]
                }
            ] 
        }
    ]
})