import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {path: '/login', component: login},
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
                            path: 'homeConfig/banner',
                            name: 'banner',
                            meta: {'title': 'Banner配置'},
                            component: () => import('@/views/homeConfig/pages/banner')
                        },
                        {
                            path: 'homeConfig/addBanner',
                            name: 'addBanner',
                            meta: {'title': '新增Banner'},
                            component: () => import('@/views/homneCofig/addBanner')
                        }
                    ]
                }
            ]
        }
    ]
})