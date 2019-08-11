import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
    {
      path: '/',
      component: () => import('@/components/HelloWorld'),
    },
    {
      path: '/world',
      component: () => import('@/components/Hello'),
    },
]

const createRouter = () => new Router({
    routes: constantRoutes
})

const router = createRouter()

export default router