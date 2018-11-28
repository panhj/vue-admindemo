import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './views/Layout'

Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {path: '/login', component: () => import('@/views/Login')},
        {
            path: '/',
            redirect:'/demand/problem',
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
                },
                {
                    path: '/demand',
                    name: 'demand',
                    meta: {'title': '需求管理'},
                    component: () => import('@/views/demand/demand'),
                    children: [
                        {
                            path: '/demand/account',
                            name: 'account',
                            meta: {'title': '账号申请'},
                            component: () => import('@/views/demand/pages/account')
                        },
                        {
                            path: '/demand/problem',
                            name: 'problem',
                            meta: {'title': '问题反馈'},
                            component: () => import('@/views/demand/pages/problem')
                        }
                    ]
                },
            ] 
        }
    ]
})